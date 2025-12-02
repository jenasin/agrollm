// AgroLinguo Course Configuration
// ================================
// To add a new module:
// 1. Create questions_moduleX.js with your questions
// 2. Add module config below
// 3. That's it! UI adapts automatically

const COURSE_CONFIG = {
    // App settings
    app: {
        name: 'AgroLinguo',
        subtitle: 'Learn Farming',
        questionsPerLevel: 10,
        xpPerCorrect: 10,
        xpPerLevel: 100
    },

    // Module definitions - UI reads this dynamically
    // The order here determines display order
    modules: [
        {
            id: 1,
            name: 'Soil & Basics',
            icon: '🌱',
            color: 'from-green-400 to-green-600',
            description: 'Learn farming fundamentals'
        },
        {
            id: 2,
            name: 'Plant Protection',
            icon: '🛡️',
            color: 'from-blue-400 to-blue-600',
            description: 'Pests and diseases'
        },
        {
            id: 3,
            name: 'Harvest & Sales',
            icon: '🌾',
            color: 'from-yellow-400 to-yellow-600',
            description: 'From field to market'
        },
        {
            id: 4,
            name: 'Irrigation',
            icon: '💧',
            color: 'from-cyan-400 to-cyan-600',
            description: 'Water management'
        },
        {
            id: 5,
            name: 'Machinery',
            icon: '🚜',
            color: 'from-orange-400 to-orange-600',
            description: 'Tools and equipment'
        },
        {
            id: 6,
            name: 'Ecology',
            icon: '🌍',
            color: 'from-emerald-400 to-emerald-600',
            description: 'Sustainable farming'
        },
        {
            id: 7,
            name: 'Livestock',
            icon: '🐄',
            color: 'from-amber-400 to-amber-600',
            description: 'Animal husbandry'
        },
        {
            id: 8,
            name: 'Climate & Weather',
            icon: '🌤️',
            color: 'from-sky-400 to-sky-600',
            description: 'Weather patterns for farming'
        },
        {
            id: 9,
            name: 'Farm Business',
            icon: '💰',
            color: 'from-violet-400 to-violet-600',
            description: 'Finance and management'
        },
        {
            id: 10,
            name: 'Innovation',
            icon: '🔬',
            color: 'from-rose-400 to-rose-600',
            description: 'Modern farming technology'
        }
    ],

    // Color palette for auto-generating new module colors
    colorPalette: [
        'from-green-400 to-green-600',
        'from-blue-400 to-blue-600',
        'from-yellow-400 to-yellow-600',
        'from-cyan-400 to-cyan-600',
        'from-orange-400 to-orange-600',
        'from-emerald-400 to-emerald-600',
        'from-amber-400 to-amber-600',
        'from-sky-400 to-sky-600',
        'from-violet-400 to-violet-600',
        'from-rose-400 to-rose-600',
        'from-pink-400 to-pink-600',
        'from-indigo-400 to-indigo-600',
        'from-teal-400 to-teal-600',
        'from-lime-400 to-lime-600',
        'from-fuchsia-400 to-fuchsia-600'
    ]
};

// Export to window
window.COURSE_CONFIG = COURSE_CONFIG;
