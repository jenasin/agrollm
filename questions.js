// AgroLinguo - Main question loader
// This file combines all question modules

// Initialize ALL_QUESTIONS - modules are loaded before this script
(function() {
    // Function to create ALL_QUESTIONS
    function initQuestions() {
        if (window.MODULE1_QUESTIONS &&
            window.MODULE2_QUESTIONS &&
            window.MODULE3_QUESTIONS &&
            window.MODULE4_QUESTIONS &&
            window.MODULE5_QUESTIONS &&
            window.MODULE6_QUESTIONS &&
            window.MODULE7_QUESTIONS &&
            window.MODULE8_QUESTIONS &&
            window.MODULE9_QUESTIONS &&
            window.MODULE10_QUESTIONS) {

            window.ALL_QUESTIONS = {
                1: window.MODULE1_QUESTIONS,   // Soil & Basics
                2: window.MODULE2_QUESTIONS,   // Plant Protection
                3: window.MODULE3_QUESTIONS,   // Harvest & Sales
                4: window.MODULE4_QUESTIONS,   // Irrigation
                5: window.MODULE5_QUESTIONS,   // Machinery
                6: window.MODULE6_QUESTIONS,   // Ecology
                7: window.MODULE7_QUESTIONS,   // Livestock
                8: window.MODULE8_QUESTIONS,   // Climate & Weather
                9: window.MODULE9_QUESTIONS,   // Farm Business
                10: window.MODULE10_QUESTIONS  // Innovation
            };

            console.log('AgroLinguo: All modules loaded!');
            console.log('Total modules:', Object.keys(window.ALL_QUESTIONS).length);

            // Count total questions
            let totalQuestions = 0;
            for (const moduleId in window.ALL_QUESTIONS) {
                for (const level in window.ALL_QUESTIONS[moduleId]) {
                    totalQuestions += window.ALL_QUESTIONS[moduleId][level].length;
                }
            }
            console.log('Total questions:', totalQuestions);
            return true;
        }
        return false;
    }

    // Zkusíme inicializovat okamžitě
    if (!initQuestions()) {
        // Pokud moduly ještě nejsou načteny, počkáme na DOMContentLoaded
        window.addEventListener('DOMContentLoaded', function() {
            if (!window.ALL_QUESTIONS) {
                const checkModules = function() {
                    if (!initQuestions()) {
                        setTimeout(checkModules, 50);
                    }
                };
                checkModules();
            }
        });
    }
})();

// Pomocná funkce pro získání otázek pro daný modul a level
function getQuestions(moduleId, level) {
    const key = `module${moduleId}_level${level}`;
    if (window.ALL_QUESTIONS && window.ALL_QUESTIONS[moduleId] && window.ALL_QUESTIONS[moduleId][key]) {
        return window.ALL_QUESTIONS[moduleId][key];
    }
    return [];
}

// Pomocná funkce pro zamíchání pole
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
