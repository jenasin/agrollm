// Tomato Questions - Swahili
// Maswali ya Nyanya

const tomatoQuestions = {
    "tomato_level1": [
        {
            question: "Nyanya zinahitaji jua kiasi gani?",
            options: [
                { text: "☀️ Saa 6-8 za jua kwa siku", isCorrect: true },
                { text: "🌙 Giza tu", isCorrect: false },
                { text: "☀️ Saa 1 tu", isCorrect: false },
                { text: "🚫 Hazihitaji jua", isCorrect: false }
            ]
        },
        {
            question: "Nyanya zinapandwa vipi?",
            options: [
                { text: "🌱 Kwanza kitalu, kisha kupandikiza", isCorrect: true },
                { text: "🌱 Moja kwa moja shambani bila kitalu", isCorrect: false },
                { text: "💧 Ndani ya maji", isCorrect: false },
                { text: "🪨 Kwenye mawe", isCorrect: false }
            ]
        },
        {
            question: "Umbali gani kati ya mimea ya nyanya?",
            options: [
                { text: "📏 Sentimita 45-60", isCorrect: true },
                { text: "📏 Sentimita 5", isCorrect: false },
                { text: "📏 Mita 10", isCorrect: false },
                { text: "📏 Milimita 1", isCorrect: false }
            ]
        },
        {
            question: "Nyanya zinahitaji maji vipi?",
            options: [
                { text: "💧 Mara kwa mara lakini si kupita kiasi", isCorrect: true },
                { text: "💧 Maji mengi sana kila siku", isCorrect: false },
                { text: "🚫 Hazihitaji maji", isCorrect: false },
                { text: "💧 Mara moja kwa mwezi", isCorrect: false }
            ]
        },
        {
            question: "Nyanya huanza kuzaa baada ya wiki ngapi?",
            options: [
                { text: "📅 Wiki 8-12 baada ya kupandikiza", isCorrect: true },
                { text: "📅 Siku 3", isCorrect: false },
                { text: "📅 Miaka 2", isCorrect: false },
                { text: "📅 Wiki 1", isCorrect: false }
            ]
        }
    ],
    "tomato_level2": [
        {
            question: "Ugonjwa wa blight unaathiri nyanya vipi?",
            options: [
                { text: "🍂 Majani na matunda kuoza", isCorrect: true },
                { text: "📈 Mavuno kuongezeka", isCorrect: false },
                { text: "🟢 Majani kuwa kijani zaidi", isCorrect: false },
                { text: "🌸 Maua mengi zaidi", isCorrect: false }
            ]
        },
        {
            question: "Staking (kuweka fito) kunasaidia nini?",
            options: [
                { text: "🌿 Kuinua mimea na kuzuia magonjwa", isCorrect: true },
                { text: "❌ Kupunguza mavuno", isCorrect: false },
                { text: "🐛 Kuvutia wadudu", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Mbolea gani inafaa kwa nyanya?",
            options: [
                { text: "🧪 NPK na mbolea ya samadi", isCorrect: true },
                { text: "🧂 Chumvi tu", isCorrect: false },
                { text: "🛢️ Mafuta", isCorrect: false },
                { text: "🚫 Nyanya hazihitaji mbolea", isCorrect: false }
            ]
        },
        {
            question: "Pruning (kupogoa) nyanya kunasaidia nini?",
            options: [
                { text: "✂️ Kuongeza ukubwa wa matunda", isCorrect: true },
                { text: "❌ Kupunguza matunda", isCorrect: false },
                { text: "🔥 Kuua mmea", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Wadudu gani wanashambulia nyanya?",
            options: [
                { text: "🐛 Vidukari, inzi weupe, na funza", isCorrect: true },
                { text: "🐘 Tembo", isCorrect: false },
                { text: "🐟 Samaki", isCorrect: false },
                { text: "🦁 Simba", isCorrect: false }
            ]
        }
    ],
    "tomato_level3": [
        {
            question: "Nyanya zimeiva zinatambulikaje?",
            options: [
                { text: "🍅 Rangi nyekundu au njano kulingana na aina", isCorrect: true },
                { text: "🟢 Rangi ya kijani", isCorrect: false },
                { text: "🔵 Rangi ya bluu", isCorrect: false },
                { text: "⚫ Rangi nyeusi", isCorrect: false }
            ]
        },
        {
            question: "Nyanya zinapaswa kuhifadhiwa vipi?",
            options: [
                { text: "🌡️ Mahali pa baridi na kavu", isCorrect: true },
                { text: "☀️ Juani moja kwa moja", isCorrect: false },
                { text: "💧 Ndani ya maji", isCorrect: false },
                { text: "🔥 Karibu na moto", isCorrect: false }
            ]
        },
        {
            question: "Ugonjwa wa bacterial wilt unaenezwaje?",
            options: [
                { text: "🦠 Kupitia udongo na maji yaliyochafuliwa", isCorrect: true },
                { text: "☀️ Na jua", isCorrect: false },
                { text: "🌙 Na mwezi", isCorrect: false },
                { text: "🚫 Hauenezwi", isCorrect: false }
            ]
        },
        {
            question: "Greenhouse inasaidia nyanya vipi?",
            options: [
                { text: "🏠 Kudhibiti hali ya hewa na wadudu", isCorrect: true },
                { text: "❌ Kupunguza mavuno", isCorrect: false },
                { text: "🔥 Kuongeza joto kupita kiasi", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Blossom end rot inasababishwa na nini?",
            options: [
                { text: "🧪 Upungufu wa calcium", isCorrect: true },
                { text: "💧 Maji mengi sana", isCorrect: false },
                { text: "☀️ Jua nyingi", isCorrect: false },
                { text: "🌬️ Upepo mkali", isCorrect: false }
            ]
        }
    ],
    "tomato_level4": [
        {
            question: "Nyanya zinaweza kusindikwa kuwa nini?",
            options: [
                { text: "🥫 Tomato paste, sauce, juice, na ketchup", isCorrect: true },
                { text: "👕 Nguo", isCorrect: false },
                { text: "🏠 Nyumba", isCorrect: false },
                { text: "🚗 Mafuta ya gari", isCorrect: false }
            ]
        },
        {
            question: "Aina gani ya nyanya inafaa kwa kusindika?",
            options: [
                { text: "🍅 Roma na plum tomatoes", isCorrect: true },
                { text: "🍅 Cherry tomatoes tu", isCorrect: false },
                { text: "🍅 Aina yoyote", isCorrect: false },
                { text: "🚫 Hakuna aina", isCorrect: false }
            ]
        },
        {
            question: "Drip irrigation inasaidia nyanya vipi?",
            options: [
                { text: "💧 Kutoa maji kwa usahihi na kupunguza magonjwa", isCorrect: true },
                { text: "🌊 Kutumia maji mengi", isCorrect: false },
                { text: "🔥 Kuongeza joto", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Nematodes wanaathiri nyanya vipi?",
            options: [
                { text: "🪱 Kushambulia mizizi na kudumaza mmea", isCorrect: true },
                { text: "📈 Kuongeza mavuno", isCorrect: false },
                { text: "🌸 Kuongeza maua", isCorrect: false },
                { text: "🚫 Hawaathiri", isCorrect: false }
            ]
        },
        {
            question: "Grafting nyanya kunasaidia nini?",
            options: [
                { text: "🌱 Kustahimili magonjwa ya udongo", isCorrect: true },
                { text: "❌ Kupunguza mavuno", isCorrect: false },
                { text: "🔥 Kuua mmea", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        }
    ],
    "tomato_level5": [
        {
            question: "Hydroponics kwa nyanya ni nini?",
            options: [
                { text: "💧 Kulima nyanya bila udongo kwa maji na virutubisho", isCorrect: true },
                { text: "🏜️ Kulima kwenye jangwa", isCorrect: false },
                { text: "🔥 Kulima kwa moto", isCorrect: false },
                { text: "🚫 Haiwezekani", isCorrect: false }
            ]
        },
        {
            question: "Contract farming ya nyanya ni nini?",
            options: [
                { text: "📝 Makubaliano na mnunuzi kabla ya kuvuna", isCorrect: true },
                { text: "🔥 Kuchoma shamba", isCorrect: false },
                { text: "🚫 Kutokuza", isCorrect: false },
                { text: "💰 Kupoteza pesa", isCorrect: false }
            ]
        },
        {
            question: "Cold chain ya nyanya ni muhimu kwa nini?",
            options: [
                { text: "❄️ Kuhifadhi ubora na kurefusha maisha", isCorrect: true },
                { text: "🔥 Kuongeza joto", isCorrect: false },
                { text: "🚫 Si muhimu", isCorrect: false },
                { text: "💧 Kuongeza maji", isCorrect: false }
            ]
        },
        {
            question: "GAP (Good Agricultural Practices) kwa nyanya ni nini?",
            options: [
                { text: "✅ Mbinu bora za kulima salama na zenye ubora", isCorrect: true },
                { text: "❌ Mbinu mbaya", isCorrect: false },
                { text: "🔥 Kuchoma mazao", isCorrect: false },
                { text: "🚫 Hakuna mbinu", isCorrect: false }
            ]
        },
        {
            question: "Export ya nyanya inahitaji nini?",
            options: [
                { text: "📜 Ubora mzuri, cheti, na ufungaji salama", isCorrect: true },
                { text: "🚫 Hakuna masharti", isCorrect: false },
                { text: "🔥 Kuchoma nyanya", isCorrect: false },
                { text: "💧 Maji mengi", isCorrect: false }
            ]
        }
    ]
};

window.tomatoQuestions = tomatoQuestions;
