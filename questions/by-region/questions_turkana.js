// Turkana Region - Basic Farming
// ========================================
// Test Type: Educational Quiz
// Category: by-region
// Region: Turkana, Kenya
// Cognitive Level: simple

const TURKANA_QUESTIONS = {
    level1: [
        {
            question: "What is the best time to plant sorghum in Turkana?",
            options: [
                { text: "At the start of rainy season", icon: "🌧️", isCorrect: true },
                { text: "During the dry season", icon: "☀️", isCorrect: false },
                { text: "At night", icon: "🌙", isCorrect: false },
                { text: "Any time", icon: "🤷", isCorrect: false }
            ],
            explanation: "Planting at the start of the rainy season gives crops the water they need to grow."
        },
        {
            question: "Which animal is most common for pastoralists in Turkana?",
            options: [
                { text: "Goats", icon: "🐐", isCorrect: true },
                { text: "Elephants", icon: "🐘", isCorrect: false },
                { text: "Fish", icon: "🐟", isCorrect: false },
                { text: "Chickens", icon: "🐔", isCorrect: false }
            ],
            explanation: "Goats are well adapted to the dry climate of Turkana."
        },
        {
            question: "How can you save water in dry areas?",
            options: [
                { text: "Mulching around plants", icon: "🌿", isCorrect: true },
                { text: "Watering at noon", icon: "☀️", isCorrect: false },
                { text: "Removing all shade", icon: "🏜️", isCorrect: false },
                { text: "Watering every hour", icon: "💧", isCorrect: false }
            ],
            explanation: "Mulching helps keep moisture in the soil and reduces evaporation."
        }
    ],
    level2: [
        {
            question: "What crop grows well in dry Turkana soil?",
            options: [
                { text: "Sorghum", icon: "🌾", isCorrect: true },
                { text: "Rice", icon: "🍚", isCorrect: false },
                { text: "Sugarcane", icon: "🎋", isCorrect: false },
                { text: "Banana", icon: "🍌", isCorrect: false }
            ],
            explanation: "Sorghum is drought-resistant and grows well in dry conditions."
        },
        {
            question: "Why is shade important for animals?",
            options: [
                { text: "Keeps them cool and healthy", icon: "🌳", isCorrect: true },
                { text: "Makes them grow faster", icon: "📈", isCorrect: false },
                { text: "Gives them more milk", icon: "🥛", isCorrect: false },
                { text: "Protects from rain", icon: "🌧️", isCorrect: false }
            ],
            explanation: "Shade prevents heat stress which can make animals sick."
        }
    ]
};

window.TURKANA_QUESTIONS = TURKANA_QUESTIONS;
