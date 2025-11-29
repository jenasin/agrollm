// AgroLinguo - Hlavní loader otázek
// Tento soubor kombinuje všechny moduly otázek

// Inicializace ALL_QUESTIONS - moduly se načtou před tímto skriptem
(function() {
    // Funkce pro vytvoření ALL_QUESTIONS
    function initQuestions() {
        if (window.MODULE1_QUESTIONS &&
            window.MODULE2_QUESTIONS &&
            window.MODULE3_QUESTIONS &&
            window.MODULE4_QUESTIONS &&
            window.MODULE5_QUESTIONS &&
            window.MODULE6_QUESTIONS) {

            window.ALL_QUESTIONS = {
                1: window.MODULE1_QUESTIONS,  // Půda a Základy
                2: window.MODULE2_QUESTIONS,  // Ochrana Rostlin
                3: window.MODULE3_QUESTIONS,  // Sklizeň a Prodej
                4: window.MODULE4_QUESTIONS,  // Zavlažování
                5: window.MODULE5_QUESTIONS,  // Mechanizace
                6: window.MODULE6_QUESTIONS   // Ekologie
            };

            console.log('AgroLinguo: Všechny moduly načteny!');
            console.log('Celkem modulů:', Object.keys(window.ALL_QUESTIONS).length);

            // Spočítáme celkový počet otázek
            let totalQuestions = 0;
            for (const moduleId in window.ALL_QUESTIONS) {
                for (const level in window.ALL_QUESTIONS[moduleId]) {
                    totalQuestions += window.ALL_QUESTIONS[moduleId][level].length;
                }
            }
            console.log('Celkem otázek:', totalQuestions);
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
