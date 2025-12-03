const CACHE_NAME = 'agrolinguo-v8';

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
  // English questions
  '/questions/en/questions_module1.js',
  '/questions/en/questions_module2.js',
  '/questions/en/questions_module3.js',
  '/questions/en/questions_module4.js',
  '/questions/en/questions_module5.js',
  '/questions/en/questions_module6.js',
  '/questions/en/questions_module7.js',
  '/questions/en/questions_module8.js',
  '/questions/en/questions_module9.js',
  '/questions/en/questions_module10.js',
  // Swahili questions (modules 1-9)
  '/questions/sw/questions_module1.js',
  '/questions/sw/questions_module2.js',
  '/questions/sw/questions_module3.js',
  '/questions/sw/questions_module4.js',
  '/questions/sw/questions_module5.js',
  '/questions/sw/questions_module6.js',
  '/questions/sw/questions_module7.js',
  '/questions/sw/questions_module8.js',
  '/questions/sw/questions_module9.js'
];

// External CDN files needed for offline - CRITICAL for iOS PWA
const CDN_ASSETS = [
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/react@18/umd/react.development.js',
  'https://unpkg.com/react-dom@18/umd/react-dom.development.js',
  'https://unpkg.com/@babel/standalone/babel.min.js',
  'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap'
];

// WebLLM model files - cache when user downloads them
const LLM_CACHE_NAME = 'agrolinguo-llm-v1';

// Install event - cache static assets AND CDN assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      console.log('[SW] Caching static assets');

      // Cache local assets
      await Promise.allSettled(
        STATIC_ASSETS.map(url =>
          cache.add(url).catch(err => console.log('[SW] Failed local:', url, err))
        )
      );

      // Cache CDN assets with no-cors mode for cross-origin requests
      console.log('[SW] Caching CDN assets for offline...');
      await Promise.allSettled(
        CDN_ASSETS.map(async (url) => {
          try {
            const response = await fetch(url, { mode: 'cors' });
            if (response.ok) {
              await cache.put(url, response);
              console.log('[SW] Cached CDN:', url.slice(0, 50));
            }
          } catch (err) {
            console.log('[SW] Failed CDN:', url.slice(0, 50), err);
          }
        })
      );

      console.log('[SW] All assets cached!');
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

  // Check if this is a CDN asset we need for offline
  const isCdnAsset = CDN_ASSETS.some(cdn => request.url.startsWith(cdn.split('?')[0])) ||
                     url.hostname.includes('cdn.tailwindcss.com') ||
                     url.hostname.includes('unpkg.com') ||
                     url.hostname.includes('fonts.googleapis.com') ||
                     url.hostname.includes('fonts.gstatic.com');

  // Cache-first strategy for ALL assets (local + CDN)
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        console.log('[SW] From cache:', request.url.slice(0, 60));
        return cachedResponse;
      }

      return fetch(request).then((networkResponse) => {
        // Cache successful responses for local OR CDN assets
        if (networkResponse.ok) {
          const shouldCache = url.origin === location.origin || isCdnAsset;
          if (shouldCache) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
              console.log('[SW] Cached new:', request.url.slice(0, 60));
            });
          }
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
