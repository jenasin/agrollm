const CACHE_NAME = 'agrolinguo-v6';

// Files to cache for offline use - ALL local files
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.svg',
  '/icon-512.svg',
  '/course_config.js',
  '/neural_engine.js',
  '/questions.js',
  '/questions/questions_module1.js',
  '/questions/questions_module2.js',
  '/questions/questions_module3.js',
  '/questions/questions_module4.js',
  '/questions/questions_module5.js',
  '/questions/questions_module6.js',
  '/questions/questions_module7.js',
  '/questions/questions_module8.js',
  '/questions/questions_module9.js',
  '/questions/questions_module10.js',
  // Local libraries
  '/libs/tailwind.min.js',
  '/libs/react.min.js',
  '/libs/react-dom.min.js',
  '/libs/babel.min.js',
  '/libs/webllm.min.js',
  // Local fonts
  '/fonts/nunito-400.woff2',
  '/fonts/nunito-600.woff2',
  '/fonts/nunito-700.woff2',
  '/fonts/nunito-800.woff2'
];

// WebLLM model files - cache when user downloads them
const LLM_CACHE_NAME = 'agrolinguo-llm-v1';

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Caching static assets');
      return cache.addAll(STATIC_ASSETS).catch(err => {
        console.log('[SW] Some assets failed to cache:', err);
        // Cache what we can
        return Promise.allSettled(
          STATIC_ASSETS.map(url => cache.add(url).catch(() => console.log('[SW] Failed:', url)))
        );
      });
    })
  );
  self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME && name !== LLM_CACHE_NAME)
          .map((name) => {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Handle WebLLM model downloads - cache them for offline
  if (url.hostname.includes('huggingface.co') ||
      url.hostname.includes('raw.githubusercontent.com') ||
      request.url.includes('.wasm') ||
      request.url.includes('.bin') ||
      request.url.includes('mlc-ai')) {

    event.respondWith(
      caches.open(LLM_CACHE_NAME).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            console.log('[SW] LLM from cache:', request.url.slice(0, 80));
            return cachedResponse;
          }

          return fetch(request).then((networkResponse) => {
            if (networkResponse.ok) {
              console.log('[SW] Caching LLM file:', request.url.slice(0, 80));
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          });
        });
      })
    );
    return;
  }

  // Standard cache-first strategy for app assets
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        console.log('[SW] Serving from cache:', request.url);
        return cachedResponse;
      }

      return fetch(request).then((networkResponse) => {
        // Cache successful responses for same-origin requests
        if (networkResponse.ok && url.origin === location.origin) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Offline fallback
        console.log('[SW] Offline, no cache for:', request.url);
        if (request.destination === 'document') {
          return caches.match('/index.html');
        }
        return new Response('Offline - Resource not cached', {
          status: 503,
          statusText: 'Service Unavailable'
        });
      });
    })
  );
});

// Handle messages from main thread
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }

  // Clear LLM cache if requested
  if (event.data === 'clearLLMCache') {
    caches.delete(LLM_CACHE_NAME).then(() => {
      console.log('[SW] LLM cache cleared');
    });
  }
});

console.log('[SW] Service Worker loaded - Offline Ready');
