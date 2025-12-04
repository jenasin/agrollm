// AgroLinguo - Dynamic Question Loader
// =====================================
// Automatically detects and loads all question modules
// No hardcoded module numbers - just add questions_moduleX.js files!

(function() {
    'use strict';

    // Auto-detect all loaded question modules
    function detectModules() {
        const modules = {};
        let moduleId = 1;

        // Scan for MODULE*_QUESTIONS in window (modules 1-10)
        while (true) {
            const varName = `MODULE${moduleId}_QUESTIONS`;
            if (window[varName]) {
                modules[moduleId] = window[varName];
                moduleId++;
            } else {
                break;
            }
        }

        // Add specialized modules
        if (window.cashewQuestions) {
            modules[11] = window.cashewQuestions;
        }
        if (window.droughtQuestions) {
            modules[12] = window.droughtQuestions;
        }
        if (window.maizeQuestions) {
            modules[13] = window.maizeQuestions;
        }
        if (window.tomatoQuestions) {
            modules[14] = window.tomatoQuestions;
        }
        if (window.beansQuestions) {
            modules[15] = window.beansQuestions;
        }

        return modules;
    }

    // Count levels in a module
    function countLevels(moduleQuestions) {
        let count = 0;
        for (const key in moduleQuestions) {
            if (key.includes('_level')) {
                count++;
            }
        }
        return count;
    }

    // Build complete module info combining config + questions
    function buildModuleInfo() {
        const config = window.COURSE_CONFIG || { modules: [], colorPalette: [] };
        const questions = window.ALL_QUESTIONS || {};
        const moduleInfo = [];

        // Get config modules as base
        const configModules = config.modules || [];
        const colorPalette = config.colorPalette || [
            'from-gray-400 to-gray-600'
        ];

        // For each detected question module
        for (const moduleId in questions) {
            const id = parseInt(moduleId);
            const moduleQuestions = questions[id];
            const levelCount = countLevels(moduleQuestions);

            // Find matching config or create default
            const configEntry = configModules.find(m => m.id === id) || {
                id: id,
                name: `Module ${id}`,
                icon: '📚',
                color: colorPalette[(id - 1) % colorPalette.length],
                description: 'Learning module'
            };

            moduleInfo.push({
                ...configEntry,
                levels: levelCount,
                questionsLoaded: true
            });
        }

        // Sort by id
        moduleInfo.sort((a, b) => a.id - b.id);

        return moduleInfo;
    }

    // Initialize everything
    function init() {
        // Detect modules
        window.ALL_QUESTIONS = detectModules();

        // Build module info for UI
        window.MODULE_INFO = buildModuleInfo();

        // Stats
        const moduleCount = Object.keys(window.ALL_QUESTIONS).length;
        let totalQuestions = 0;
        let totalLevels = 0;

        for (const moduleId in window.ALL_QUESTIONS) {
            const moduleQuestions = window.ALL_QUESTIONS[moduleId];
            for (const level in moduleQuestions) {
                totalQuestions += moduleQuestions[level].length;
                totalLevels++;
            }
        }

        console.log('🌱 AgroLinguo Loaded!');
        console.log(`   📚 Modules: ${moduleCount}`);
        console.log(`   📊 Levels: ${totalLevels}`);
        console.log(`   ❓ Questions: ${totalQuestions}`);

        return moduleCount > 0;
    }

    // Try to initialize immediately
    if (!init() || Object.keys(window.ALL_QUESTIONS).length === 0) {
        // If modules not loaded yet, wait for DOMContentLoaded
        window.addEventListener('DOMContentLoaded', function() {
            const checkModules = function() {
                if (!init() || Object.keys(window.ALL_QUESTIONS).length === 0) {
                    setTimeout(checkModules, 50);
                }
            };
            checkModules();
        });
    }
})();

// ==========================================
// Public API Functions
// ==========================================

// Get questions for a specific module and level
function getQuestions(moduleId, levelNum) {
    // Different key formats for different modules
    let key;
    if (moduleId === 11) {
        key = `cashew_level${levelNum}`;
    } else if (moduleId === 12) {
        key = `drought_level${levelNum}`;
    } else if (moduleId === 13) {
        key = `maize_level${levelNum}`;
    } else if (moduleId === 14) {
        key = `tomato_level${levelNum}`;
    } else if (moduleId === 15) {
        key = `beans_level${levelNum}`;
    } else {
        key = `module${moduleId}_level${levelNum}`;
    }

    if (window.ALL_QUESTIONS &&
        window.ALL_QUESTIONS[moduleId] &&
        window.ALL_QUESTIONS[moduleId][key]) {
        return window.ALL_QUESTIONS[moduleId][key];
    }
    return [];
}

// Get module info (for UI)
function getModules() {
    return window.MODULE_INFO || [];
}

// Get single module info
function getModuleById(moduleId) {
    const modules = getModules();
    return modules.find(m => m.id === moduleId) || null;
}

// Get level count for a module
function getLevelCount(moduleId) {
    const module = getModuleById(moduleId);
    return module ? module.levels : 0;
}

// Shuffle array (for randomizing questions/answers)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Check if all required scripts are loaded
function isAppReady() {
    return window.ALL_QUESTIONS &&
           Object.keys(window.ALL_QUESTIONS).length > 0 &&
           window.MODULE_INFO &&
           window.MODULE_INFO.length > 0;
}
