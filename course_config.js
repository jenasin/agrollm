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
        questionsPerLevel: 7,
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
            description: { en: 'Learn farming fundamentals', sw: 'Jifunze misingi ya kilimo' },
            levelNames: [
                { en: 'Soil Types', sw: 'Aina za Udongo' },
                { en: 'pH & Acidity', sw: 'pH na Asidi' },
                { en: 'NPK Nutrients', sw: 'Virutubisho NPK' },
                { en: 'Composting', sw: 'Kutengeneza Mboji' },
                { en: 'Crop Rotation', sw: 'Kubadilisha Mazao' },
                { en: 'Mulching', sw: 'Kufunika Udongo' },
                { en: 'Erosion Control', sw: 'Kudhibiti Mmomonyoko' },
                { en: 'Soil Testing', sw: 'Kupima Udongo' },
                { en: 'Organic Matter', sw: 'Vitu vya Kikaboni' },
                { en: 'Soil Health', sw: 'Afya ya Udongo' }
            ]
        },
        {
            id: 2,
            name: { en: 'Plant Protection', sw: 'Ulinzi wa Mimea' },
            icon: '🛡️',
            color: 'from-blue-400 to-blue-600',
            description: { en: 'Pests and diseases', sw: 'Wadudu na magonjwa' },
            levelNames: [
                { en: 'Common Pests', sw: 'Wadudu wa Kawaida' },
                { en: 'Plant Diseases', sw: 'Magonjwa ya Mimea' },
                { en: 'Natural Remedies', sw: 'Dawa za Asili' },
                { en: 'Pesticides Safety', sw: 'Usalama wa Dawa' },
                { en: 'Beneficial Insects', sw: 'Wadudu Wenye Faida' },
                { en: 'Weed Control', sw: 'Kudhibiti Magugu' },
                { en: 'Disease Prevention', sw: 'Kuzuia Magonjwa' },
                { en: 'Integrated Pest Mgmt', sw: 'Usimamizi wa Wadudu' },
                { en: 'Storage Pests', sw: 'Wadudu wa Hifadhi' },
                { en: 'Crop Protection', sw: 'Ulinzi wa Mazao' }
            ]
        },
        {
            id: 3,
            name: { en: 'Harvest & Sales', sw: 'Mavuno na Mauzo' },
            icon: '🌾',
            color: 'from-yellow-400 to-yellow-600',
            description: { en: 'From field to market', sw: 'Kutoka shambani hadi sokoni' },
            levelNames: [
                { en: 'Harvest Timing', sw: 'Wakati wa Kuvuna' },
                { en: 'Harvest Methods', sw: 'Njia za Kuvuna' },
                { en: 'Post-Harvest', sw: 'Baada ya Mavuno' },
                { en: 'Storage Basics', sw: 'Misingi ya Hifadhi' },
                { en: 'Quality Grading', sw: 'Kupanga Ubora' },
                { en: 'Market Prices', sw: 'Bei za Soko' },
                { en: 'Selling Strategies', sw: 'Mikakati ya Kuuza' },
                { en: 'Value Addition', sw: 'Kuongeza Thamani' },
                { en: 'Cooperatives', sw: 'Vyama vya Ushirika' },
                { en: 'Export Markets', sw: 'Masoko ya Nje' }
            ]
        },
        {
            id: 4,
            name: { en: 'Irrigation', sw: 'Umwagiliaji' },
            icon: '💧',
            color: 'from-cyan-400 to-cyan-600',
            description: { en: 'Water management', sw: 'Usimamizi wa maji' },
            levelNames: [
                { en: 'Water Sources', sw: 'Vyanzo vya Maji' },
                { en: 'Drip Irrigation', sw: 'Umwagiliaji kwa Tone' },
                { en: 'Sprinkler Systems', sw: 'Mfumo wa Kunyunyizia' },
                { en: 'Flood Irrigation', sw: 'Umwagiliaji wa Mafuriko' },
                { en: 'Water Conservation', sw: 'Kuhifadhi Maji' },
                { en: 'Pump Systems', sw: 'Mifumo ya Pampu' },
                { en: 'Scheduling', sw: 'Ratiba ya Kumwagilia' },
                { en: 'Water Quality', sw: 'Ubora wa Maji' },
                { en: 'Rainwater Harvest', sw: 'Kuvuna Maji ya Mvua' },
                { en: 'Smart Irrigation', sw: 'Umwagiliaji wa Kisasa' }
            ]
        },
        {
            id: 5,
            name: { en: 'Machinery', sw: 'Mashine za Kilimo' },
            icon: '🚜',
            color: 'from-orange-400 to-orange-600',
            description: { en: 'Tools and equipment', sw: 'Zana na vifaa' },
            levelNames: [
                { en: 'Hand Tools', sw: 'Zana za Mkono' },
                { en: 'Plowing Equipment', sw: 'Vifaa vya Kulima' },
                { en: 'Planting Tools', sw: 'Zana za Kupanda' },
                { en: 'Sprayers', sw: 'Vinyunyizio' },
                { en: 'Tractors', sw: 'Trekta' },
                { en: 'Harvesters', sw: 'Mashine za Kuvuna' },
                { en: 'Processing Machines', sw: 'Mashine za Kusindika' },
                { en: 'Maintenance', sw: 'Matengenezo' },
                { en: 'Safety Equipment', sw: 'Vifaa vya Usalama' },
                { en: 'Modern Technology', sw: 'Teknolojia ya Kisasa' }
            ]
        },
        {
            id: 6,
            name: { en: 'Ecology', sw: 'Ikolojia' },
            icon: '🌍',
            color: 'from-emerald-400 to-emerald-600',
            description: { en: 'Sustainable farming', sw: 'Kilimo endelevu' },
            levelNames: [
                { en: 'Biodiversity', sw: 'Bioanuwai' },
                { en: 'Organic Farming', sw: 'Kilimo hai' },
                { en: 'Soil Conservation', sw: 'Uhifadhi wa Udongo' },
                { en: 'Agroforestry', sw: 'Kilimo Msitu' },
                { en: 'Climate Smart', sw: 'Kilimo na Hali ya Hewa' },
                { en: 'Pollinators', sw: 'Wachavushaji' },
                { en: 'Natural Cycles', sw: 'Mizunguko ya Asili' },
                { en: 'Waste Management', sw: 'Usimamizi wa Taka' },
                { en: 'Green Energy', sw: 'Nishati ya Kijani' },
                { en: 'Sustainability', sw: 'Uendelevu' }
            ]
        },
        {
            id: 7,
            name: { en: 'Livestock', sw: 'Mifugo' },
            icon: '🐄',
            color: 'from-amber-400 to-amber-600',
            description: { en: 'Animal husbandry', sw: 'Ufugaji wa wanyama' },
            levelNames: [
                { en: 'Cattle Basics', sw: 'Misingi ya Ng\'ombe' },
                { en: 'Poultry', sw: 'Kuku' },
                { en: 'Goats & Sheep', sw: 'Mbuzi na Kondoo' },
                { en: 'Pig Farming', sw: 'Ufugaji wa Nguruwe' },
                { en: 'Animal Feed', sw: 'Chakula cha Mifugo' },
                { en: 'Animal Health', sw: 'Afya ya Mifugo' },
                { en: 'Breeding', sw: 'Uzalishaji' },
                { en: 'Housing', sw: 'Makazi ya Mifugo' },
                { en: 'Dairy Production', sw: 'Uzalishaji wa Maziwa' },
                { en: 'Mixed Farming', sw: 'Kilimo Mseto' }
            ]
        },
        {
            id: 8,
            name: { en: 'Climate & Weather', sw: 'Hali ya Hewa' },
            icon: '🌤️',
            color: 'from-sky-400 to-sky-600',
            description: { en: 'Weather patterns for farming', sw: 'Hali ya hewa kwa kilimo' },
            levelNames: [
                { en: 'Seasons', sw: 'Misimu' },
                { en: 'Rainfall Patterns', sw: 'Mifumo ya Mvua' },
                { en: 'Temperature', sw: 'Joto' },
                { en: 'Drought', sw: 'Ukame' },
                { en: 'Floods', sw: 'Mafuriko' },
                { en: 'Frost Protection', sw: 'Kinga ya Baridi' },
                { en: 'Weather Forecast', sw: 'Utabiri wa Hewa' },
                { en: 'Climate Change', sw: 'Mabadiliko ya Hali ya Hewa' },
                { en: 'Planting Calendar', sw: 'Kalenda ya Kupanda' },
                { en: 'Risk Management', sw: 'Usimamizi wa Hatari' }
            ]
        },
        {
            id: 9,
            name: { en: 'Farm Business', sw: 'Biashara ya Kilimo' },
            icon: '💰',
            color: 'from-violet-400 to-violet-600',
            description: { en: 'Finance and management', sw: 'Fedha na usimamizi' },
            levelNames: [
                { en: 'Business Planning', sw: 'Kupanga Biashara' },
                { en: 'Budgeting', sw: 'Bajeti' },
                { en: 'Record Keeping', sw: 'Kuweka Rekodi' },
                { en: 'Farm Loans', sw: 'Mikopo ya Kilimo' },
                { en: 'Insurance', sw: 'Bima' },
                { en: 'Marketing', sw: 'Masoko' },
                { en: 'Pricing', sw: 'Kuweka Bei' },
                { en: 'Profit & Loss', sw: 'Faida na Hasara' },
                { en: 'Savings', sw: 'Akiba' },
                { en: 'Farm Growth', sw: 'Kukuza Shamba' }
            ]
        },
        {
            id: 10,
            name: { en: 'Innovation', sw: 'Ubunifu' },
            icon: '🔬',
            color: 'from-rose-400 to-rose-600',
            description: { en: 'Modern farming technology', sw: 'Teknolojia ya kisasa ya kilimo' },
            levelNames: [
                { en: 'Digital Tools', sw: 'Zana za Kidijitali' },
                { en: 'Mobile Apps', sw: 'Programu za Simu' },
                { en: 'GPS Farming', sw: 'Kilimo kwa GPS' },
                { en: 'Drones', sw: 'Ndege zisizo na Rubani' },
                { en: 'Sensors', sw: 'Vihisi' },
                { en: 'Greenhouse Tech', sw: 'Teknolojia ya Greenhaus' },
                { en: 'Hydroponics', sw: 'Kilimo cha Maji' },
                { en: 'Biotechnology', sw: 'Bayoteknolojia' },
                { en: 'Solar Power', sw: 'Nguvu ya Jua' },
                { en: 'Future Farming', sw: 'Kilimo cha Siku Zijazo' }
            ]
        },
        {
            id: 11,
            name: { en: 'Cashew Farming', sw: 'Kilimo cha Korosho' },
            icon: '🥜',
            color: 'from-amber-500 to-orange-600',
            description: { en: 'Cashew cultivation and harvesting', sw: 'Upanzi na uvunaji wa korosho' },
            levelNames: [
                { en: 'Basics', sw: 'Misingi' },
                { en: 'Planting', sw: 'Kupanda' },
                { en: 'Care', sw: 'Utunzaji' },
                { en: 'Pests & Diseases', sw: 'Wadudu na Magonjwa' },
                { en: 'Harvesting', sw: 'Mavuno' },
                { en: 'Storage & Processing', sw: 'Uhifadhi na Usindikaji' },
                { en: 'Markets & Trade', sw: 'Soko na Biashara' },
                { en: 'Improving Yields', sw: 'Kuboresha Mavuno' },
                { en: 'Drought Adaptation', sw: 'Kukabiliana na Ukame' },
                { en: 'Climate Change', sw: 'Mabadiliko ya Hali ya Hewa' }
            ]
        },
        {
            id: 12,
            name: { en: 'Drought & Climate', sw: 'Ukame na Hali ya Hewa' },
            icon: '🏜️',
            color: 'from-yellow-500 to-red-500',
            description: { en: 'Climate adaptation and drought management', sw: 'Kukabiliana na ukame na mabadiliko ya hali ya hewa' },
            levelNames: [
                { en: 'Drought Basics', sw: 'Misingi ya Ukame' },
                { en: 'Water Conservation', sw: 'Kuhifadhi Maji' },
                { en: 'Drought-Resistant Crops', sw: 'Mazao Yanayostahimili' },
                { en: 'Soil Care', sw: 'Utunzaji wa Udongo' },
                { en: 'Livestock & Drought', sw: 'Mifugo na Ukame' },
                { en: 'Technology', sw: 'Teknolojia' },
                { en: 'Planning & Prep', sw: 'Mipango na Maandalizi' },
                { en: 'Climate Change', sw: 'Mabadiliko ya Hali ya Hewa' },
                { en: 'Community Action', sw: 'Hatua za Jumuiya' },
                { en: 'Future & Innovation', sw: 'Mustakabali na Ubunifu' }
            ]
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
