// AgroLinguo Course Configuration
// ================================
// Dual language support: English (en) and Swahili (sw)

const COURSE_CONFIG = {
    // App settings
    app: {
        name: 'AgroLinguo',
        subtitle: {
            en: 'Learn Farming',
            sw: 'Jifunze Kilimo'
        },
        questionsPerLevel: 10,
        xpPerCorrect: 10,
        xpPerLevel: 100
    },

    // Module definitions with dual language
    modules: [
        {
            id: 1,
            name: { en: 'Soil & Basics', sw: 'Udongo na Misingi' },
            icon: '🌱',
            color: 'from-green-400 to-green-600',
            description: { en: 'Learn farming fundamentals', sw: 'Jifunze misingi ya kilimo' }
        },
        {
            id: 2,
            name: { en: 'Plant Protection', sw: 'Ulinzi wa Mimea' },
            icon: '🛡️',
            color: 'from-blue-400 to-blue-600',
            description: { en: 'Pests and diseases', sw: 'Wadudu na magonjwa' }
        },
        {
            id: 3,
            name: { en: 'Harvest & Sales', sw: 'Mavuno na Mauzo' },
            icon: '🌾',
            color: 'from-yellow-400 to-yellow-600',
            description: { en: 'From field to market', sw: 'Kutoka shambani hadi sokoni' }
        },
        {
            id: 4,
            name: { en: 'Irrigation', sw: 'Umwagiliaji' },
            icon: '💧',
            color: 'from-cyan-400 to-cyan-600',
            description: { en: 'Water management', sw: 'Usimamizi wa maji' }
        },
        {
            id: 5,
            name: { en: 'Machinery', sw: 'Mashine za Kilimo' },
            icon: '🚜',
            color: 'from-orange-400 to-orange-600',
            description: { en: 'Tools and equipment', sw: 'Zana na vifaa' }
        },
        {
            id: 6,
            name: { en: 'Ecology', sw: 'Ikolojia' },
            icon: '🌍',
            color: 'from-emerald-400 to-emerald-600',
            description: { en: 'Sustainable farming', sw: 'Kilimo endelevu' }
        },
        {
            id: 7,
            name: { en: 'Livestock', sw: 'Mifugo' },
            icon: '🐄',
            color: 'from-amber-400 to-amber-600',
            description: { en: 'Animal husbandry', sw: 'Ufugaji wa wanyama' }
        },
        {
            id: 8,
            name: { en: 'Climate & Weather', sw: 'Hali ya Hewa' },
            icon: '🌤️',
            color: 'from-sky-400 to-sky-600',
            description: { en: 'Weather patterns for farming', sw: 'Hali ya hewa kwa kilimo' }
        },
        {
            id: 9,
            name: { en: 'Farm Business', sw: 'Biashara ya Kilimo' },
            icon: '💰',
            color: 'from-violet-400 to-violet-600',
            description: { en: 'Finance and management', sw: 'Fedha na usimamizi' }
        },
        {
            id: 10,
            name: { en: 'Innovation', sw: 'Ubunifu' },
            icon: '🔬',
            color: 'from-rose-400 to-rose-600',
            description: { en: 'Modern farming technology', sw: 'Teknolojia ya kisasa ya kilimo' }
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
        'from-rose-400 to-rose-600'
    ]
};

// Helper function to get localized text
function getLocalizedText(obj, lang) {
    if (typeof obj === 'string') return obj;
    return obj[lang] || obj['en'] || obj;
}

// Export to window
window.COURSE_CONFIG = COURSE_CONFIG;
window.getLocalizedText = getLocalizedText;
