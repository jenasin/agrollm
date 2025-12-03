// Irrigation Basics
// ========================================
// Test Type: Educational Quiz
// Category: by-topic
// Topic: Irrigation & Water Management
// Cognitive Level: simple

const IRRIGATION_QUESTIONS = {
    level1: [
        {
            question: "When is the best time to water plants?",
            options: [
                { text: "Early morning", icon: "🌅", isCorrect: true },
                { text: "Midday", icon: "☀️", isCorrect: false },
                { text: "Afternoon", icon: "🌤️", isCorrect: false },
                { text: "Midnight", icon: "🌙", isCorrect: false }
            ],
            explanation: "Early morning watering reduces evaporation and gives plants time to absorb water."
        },
        {
            question: "What is drip irrigation?",
            options: [
                { text: "Slow water drops to plant roots", icon: "💧", isCorrect: true },
                { text: "Flooding the field", icon: "🌊", isCorrect: false },
                { text: "Spraying water in the air", icon: "🚿", isCorrect: false },
                { text: "Watering with a bucket", icon: "🪣", isCorrect: false }
            ],
            explanation: "Drip irrigation delivers water slowly and directly to roots, saving water."
        },
        {
            question: "How can you tell if plants need water?",
            options: [
                { text: "Leaves look wilted", icon: "🥀", isCorrect: true },
                { text: "Leaves are green", icon: "🌿", isCorrect: false },
                { text: "Plant is flowering", icon: "🌸", isCorrect: false },
                { text: "Fruit is growing", icon: "🍅", isCorrect: false }
            ],
            explanation: "Wilting leaves show the plant doesn't have enough water."
        }
    ],
    level2: [
        {
            question: "What helps soil hold water longer?",
            options: [
                { text: "Adding organic matter", icon: "🌱", isCorrect: true },
                { text: "Adding sand", icon: "🏖️", isCorrect: false },
                { text: "Removing all plants", icon: "🏜️", isCorrect: false },
                { text: "Compacting the soil", icon: "🦶", isCorrect: false }
            ],
            explanation: "Organic matter like compost improves soil's ability to hold water."
        },
        {
            question: "Why should you not water leaves in hot sun?",
            options: [
                { text: "Can burn the leaves", icon: "🔥", isCorrect: true },
                { text: "Makes plants grow faster", icon: "📈", isCorrect: false },
                { text: "Attracts butterflies", icon: "🦋", isCorrect: false },
                { text: "Cleans the leaves", icon: "✨", isCorrect: false }
            ],
            explanation: "Water drops can act like magnifying glasses and burn leaves in strong sun."
        },
        {
            question: "What is mulching?",
            options: [
                { text: "Covering soil with materials", icon: "🌿", isCorrect: true },
                { text: "Digging deep holes", icon: "🕳️", isCorrect: false },
                { text: "Removing weeds", icon: "🌾", isCorrect: false },
                { text: "Planting seeds", icon: "🌰", isCorrect: false }
            ],
            explanation: "Mulch covers soil to keep it cool and moist, reducing water needs."
        }
    ],
    level3: [
        {
            question: "How much water do most vegetables need per week?",
            options: [
                { text: "About 25mm (1 inch)", icon: "📏", isCorrect: true },
                { text: "100mm (4 inches)", icon: "🌊", isCorrect: false },
                { text: "Just a few drops", icon: "💧", isCorrect: false },
                { text: "No water needed", icon: "🏜️", isCorrect: false }
            ],
            explanation: "Most vegetables need about 25mm of water weekly from rain or irrigation."
        }
    ]
};

window.IRRIGATION_QUESTIONS = IRRIGATION_QUESTIONS;
