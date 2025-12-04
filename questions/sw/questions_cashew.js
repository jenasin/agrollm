// Cashew Cultivation Questions - Swahili
// Maswali ya Kilimo cha Korosho

const cashewQuestions = {
    // Level 1 - Misingi (5 questions - short intro)
    "cashew_level1": [
        {
            question: "Korosho ni zao la aina gani?",
            options: [
                { text: "🌳 Zao la kudumu (mti)", isCorrect: true },
                { text: "🌾 Zao la msimu", isCorrect: false },
                { text: "🥬 Mboga", isCorrect: false },
                { text: "🌿 Nyasi", isCorrect: false }
            ]
        },
        {
            question: "Korosho hutoka wapi asili yake?",
            options: [
                { text: "🇧🇷 Brazil (Amerika ya Kusini)", isCorrect: true },
                { text: "🇮🇳 India", isCorrect: false },
                { text: "🇹🇿 Tanzania", isCorrect: false },
                { text: "🇨🇳 China", isCorrect: false }
            ]
        },
        {
            question: "Sehemu gani ya korosho inaliwa?",
            options: [
                { text: "🥜 Mbegu (nut) na tunda (apple)", isCorrect: true },
                { text: "🍃 Majani tu", isCorrect: false },
                { text: "🪵 Gome la mti", isCorrect: false },
                { text: "🌸 Maua tu", isCorrect: false }
            ]
        },
        {
            question: "Mti wa korosho unaweza kuishi miaka mingapi?",
            options: [
                { text: "📅 Miaka 30-50", isCorrect: true },
                { text: "📅 Miaka 5-10", isCorrect: false },
                { text: "📅 Miaka 1-2", isCorrect: false },
                { text: "📅 Miaka 100+", isCorrect: false }
            ]
        },
        {
            question: "Korosho hustawi vizuri katika hali ya hewa gani?",
            options: [
                { text: "☀️ Joto na unyevu wa wastani", isCorrect: true },
                { text: "❄️ Baridi sana", isCorrect: false },
                { text: "🌧️ Mvua nyingi sana mwaka mzima", isCorrect: false },
                { text: "🏔️ Milimani kwenye theluji", isCorrect: false }
            ]
        }
    ],

    // Level 2 - Kupanda (6 questions)
    "cashew_level2": [
        {
            question: "Wakati gani mzuri wa kupanda korosho?",
            options: [
                { text: "🌧️ Mwanzo wa msimu wa mvua", isCorrect: true },
                { text: "☀️ Katikati ya kiangazi", isCorrect: false },
                { text: "❄️ Wakati wa baridi kali", isCorrect: false },
                { text: "🌊 Wakati wa mafuriko", isCorrect: false }
            ]
        },
        {
            question: "Umbali gani kati ya miti ya korosho?",
            options: [
                { text: "📏 Mita 8-10", isCorrect: true },
                { text: "📏 Mita 1-2", isCorrect: false },
                { text: "📏 Mita 50", isCorrect: false },
                { text: "📏 Sentimita 30", isCorrect: false }
            ]
        },
        {
            question: "Udongo gani unafaa kwa korosho?",
            options: [
                { text: "🏖️ Udongo wa kichanga wenye mifereji mizuri", isCorrect: true },
                { text: "💧 Udongo wa maji mengi", isCorrect: false },
                { text: "🪨 Udongo wa mawe tu", isCorrect: false },
                { text: "🧱 Udongo wa udongo mwekundu mgumu", isCorrect: false }
            ]
        },
        {
            question: "Shimo la kupandia korosho liwe na ukubwa gani?",
            options: [
                { text: "📐 Sm 60 x 60 x 60", isCorrect: true },
                { text: "📐 Sm 10 x 10 x 10", isCorrect: false },
                { text: "📐 Mita 2 x 2 x 2", isCorrect: false },
                { text: "📐 Sm 5 x 5 x 5", isCorrect: false }
            ]
        },
        {
            question: "Nini kifanyike kabla ya kupanda mche wa korosho?",
            options: [
                { text: "🕳️ Chimba shimo na weka mbolea wiki 2 kabla", isCorrect: true },
                { text: "🔥 Choma eneo lote", isCorrect: false },
                { text: "💧 Mwagilia maji mengi sana", isCorrect: false },
                { text: "🚫 Hakuna maandalizi", isCorrect: false }
            ]
        },
        {
            question: "Mche wa korosho unapaswa kuwa na umri gani kabla ya kupandwa shambani?",
            options: [
                { text: "🌱 Miezi 6-12", isCorrect: true },
                { text: "🌱 Wiki 1", isCorrect: false },
                { text: "🌱 Miaka 5", isCorrect: false },
                { text: "🌱 Siku 3", isCorrect: false }
            ]
        }
    ],

    // Level 3 - Utunzaji (7 questions)
    "cashew_level3": [
        {
            question: "Korosho inahitaji kumwagiliwa mara ngapi kwa wiki wakati wa kiangazi?",
            options: [
                { text: "💧 Mara 1-2 kwa wiki", isCorrect: true },
                { text: "💧 Kila siku mara 5", isCorrect: false },
                { text: "💧 Mara moja kwa mwezi", isCorrect: false },
                { text: "💧 Haina haja ya maji", isCorrect: false }
            ]
        },
        {
            question: "Kupogoa korosho kunasaidia nini?",
            options: [
                { text: "✂️ Kuongeza mavuno na afya ya mti", isCorrect: true },
                { text: "✂️ Kuua mti", isCorrect: false },
                { text: "✂️ Kupunguza mavuno", isCorrect: false },
                { text: "✂️ Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Wakati gani mzuri wa kupogoa korosho?",
            options: [
                { text: "📅 Baada ya mavuno", isCorrect: true },
                { text: "📅 Wakati wa maua", isCorrect: false },
                { text: "📅 Wakati wa matunda", isCorrect: false },
                { text: "📅 Wakati wa mvua kubwa", isCorrect: false }
            ]
        },
        {
            question: "Mbolea gani inafaa kwa korosho?",
            options: [
                { text: "🧪 NPK na mbolea ya samadi", isCorrect: true },
                { text: "🧂 Chumvi tu", isCorrect: false },
                { text: "🛢️ Mafuta ya gari", isCorrect: false },
                { text: "🚫 Korosho haihitaji mbolea", isCorrect: false }
            ]
        },
        {
            question: "Magugu yanashughulikiwa vipi katika shamba la korosho?",
            options: [
                { text: "🌿 Kupalilia au kutandaza", isCorrect: true },
                { text: "🔥 Kuchoma shamba lote", isCorrect: false },
                { text: "💧 Kumwagilia maji mengi", isCorrect: false },
                { text: "🚫 Kuacha magugu yakue", isCorrect: false }
            ]
        },
        {
            question: "Kutandaza (mulching) kunasaidia nini?",
            options: [
                { text: "💚 Kuhifadhi unyevu na kuzuia magugu", isCorrect: true },
                { text: "🔥 Kuongeza joto kupita kiasi", isCorrect: false },
                { text: "🐛 Kuvutia wadudu", isCorrect: false },
                { text: "💀 Kuua mti", isCorrect: false }
            ]
        },
        {
            question: "Korosho huanza kutoa mavuno baada ya miaka mingapi?",
            options: [
                { text: "📅 Miaka 3-5", isCorrect: true },
                { text: "📅 Miezi 6", isCorrect: false },
                { text: "📅 Miaka 20", isCorrect: false },
                { text: "📅 Wiki 2", isCorrect: false }
            ]
        }
    ],

    // Level 4 - Magonjwa na Wadudu (8 questions)
    "cashew_level4": [
        {
            question: "Ugonjwa wa anthracnose unaathiri sehemu gani ya korosho?",
            options: [
                { text: "🍃 Majani, maua na matunda", isCorrect: true },
                { text: "🪵 Mizizi tu", isCorrect: false },
                { text: "🌍 Udongo", isCorrect: false },
                { text: "💨 Hewa", isCorrect: false }
            ]
        },
        {
            question: "Mdudu gani ni hatari zaidi kwa korosho?",
            options: [
                { text: "🦟 Mbu wa korosho (Helopeltis)", isCorrect: true },
                { text: "🐘 Tembo", isCorrect: false },
                { text: "🐟 Samaki", isCorrect: false },
                { text: "🦅 Ndege wakubwa", isCorrect: false }
            ]
        },
        {
            question: "Dalili za shambulio la mbu wa korosho ni zipi?",
            options: [
                { text: "🟤 Madoa meusi kwenye majani na matawi", isCorrect: true },
                { text: "🟢 Majani kuwa kijani zaidi", isCorrect: false },
                { text: "🌸 Maua mengi zaidi", isCorrect: false },
                { text: "📈 Mavuno kuongezeka", isCorrect: false }
            ]
        },
        {
            question: "Jinsi gani ya kuzuia magonjwa ya korosho?",
            options: [
                { text: "🧹 Usafi wa shamba na kupogoa", isCorrect: true },
                { text: "💧 Kumwagilia maji mengi usiku", isCorrect: false },
                { text: "🔥 Kuchoma mti mzima", isCorrect: false },
                { text: "🚫 Hakuna njia", isCorrect: false }
            ]
        },
        {
            question: "Ugonjwa wa powdery mildew unaonekana vipi?",
            options: [
                { text: "⚪ Unga mweupe kwenye majani", isCorrect: true },
                { text: "🔴 Majani mekundu", isCorrect: false },
                { text: "🟢 Majani makubwa zaidi", isCorrect: false },
                { text: "🌸 Maua mengi", isCorrect: false }
            ]
        },
        {
            question: "Dawa ya asili ya kudhibiti wadudu ni ipi?",
            options: [
                { text: "🌿 Mwarobaini (Neem)", isCorrect: true },
                { text: "🧂 Chumvi", isCorrect: false },
                { text: "🍬 Sukari", isCorrect: false },
                { text: "☕ Kahawa", isCorrect: false }
            ]
        },
        {
            question: "Matawi yaliyoathiriwa na magonjwa yanafanyiwa nini?",
            options: [
                { text: "✂️ Kukatwa na kuchomwa mbali na shamba", isCorrect: true },
                { text: "💧 Kumwagilia maji", isCorrect: false },
                { text: "🌿 Kuacha yaendelee kukua", isCorrect: false },
                { text: "🍽️ Kuliwa", isCorrect: false }
            ]
        },
        {
            question: "Wakati gani wadudu wanashambulia zaidi?",
            options: [
                { text: "🌧️ Msimu wa mvua na uchanaji", isCorrect: true },
                { text: "❄️ Wakati wa baridi kali", isCorrect: false },
                { text: "🌙 Usiku wa giza", isCorrect: false },
                { text: "🏖️ Wakati wa kiangazi kali", isCorrect: false }
            ]
        }
    ],

    // Level 5 - Mavuno (8 questions)
    "cashew_level5": [
        {
            question: "Korosho hukomaa katika msimu gani Tanzania?",
            options: [
                { text: "📅 Oktoba - Januari", isCorrect: true },
                { text: "📅 Aprili - Juni", isCorrect: false },
                { text: "📅 Julai tu", isCorrect: false },
                { text: "📅 Mwaka mzima", isCorrect: false }
            ]
        },
        {
            question: "Dalili gani inaonyesha korosho imeiva?",
            options: [
                { text: "🍎 Tunda (apple) linabadilika rangi na kuanguka", isCorrect: true },
                { text: "🟢 Tunda linakuwa kijani zaidi", isCorrect: false },
                { text: "📏 Tunda linakuwa dogo", isCorrect: false },
                { text: "🌿 Majani yanaanguka", isCorrect: false }
            ]
        },
        {
            question: "Korosho inapaswa kuvunwa vipi?",
            options: [
                { text: "👋 Kukusanya zilizanguka chini", isCorrect: true },
                { text: "🪓 Kukata mti mzima", isCorrect: false },
                { text: "🔥 Kuchoma matawi", isCorrect: false },
                { text: "💧 Kumwagilia hadi zianguke", isCorrect: false }
            ]
        },
        {
            question: "Baada ya kuvuna, korosho inafanyiwa nini kwanza?",
            options: [
                { text: "☀️ Kutenganisha nut na apple, kisha kuanika", isCorrect: true },
                { text: "💧 Kuloweka majini siku 7", isCorrect: false },
                { text: "🔥 Kuchoma moja kwa moja", isCorrect: false },
                { text: "📦 Kupakia bila kukaushwa", isCorrect: false }
            ]
        },
        {
            question: "Korosho inapaswa kukaushwa kwa siku ngapi?",
            options: [
                { text: "☀️ Siku 2-3 juani", isCorrect: true },
                { text: "☀️ Siku 30", isCorrect: false },
                { text: "☀️ Saa 1 tu", isCorrect: false },
                { text: "☀️ Miezi 6", isCorrect: false }
            ]
        },
        {
            question: "Unyevu unaofaa kwa korosho iliyokaushwa ni kiasi gani?",
            options: [
                { text: "💧 Chini ya 10%", isCorrect: true },
                { text: "💧 50%", isCorrect: false },
                { text: "💧 90%", isCorrect: false },
                { text: "💧 0% kabisa", isCorrect: false }
            ]
        },
        {
            question: "Kwa nini ni muhimu kutenganisha korosho mbovu?",
            options: [
                { text: "✅ Kuongeza ubora na bei nzuri", isCorrect: true },
                { text: "❌ Si muhimu", isCorrect: false },
                { text: "📉 Kupunguza mavuno", isCorrect: false },
                { text: "🐛 Kuvutia wadudu", isCorrect: false }
            ]
        },
        {
            question: "Mti mmoja wa korosho unaweza kutoa kilo ngapi kwa mwaka?",
            options: [
                { text: "📊 Kilo 10-30 (mti mzuri)", isCorrect: true },
                { text: "📊 Kilo 1000", isCorrect: false },
                { text: "📊 Gramu 10", isCorrect: false },
                { text: "📊 Tani 1", isCorrect: false }
            ]
        }
    ],

    // Level 6 - Uhifadhi na Usindikaji (8 questions)
    "cashew_level6": [
        {
            question: "Korosho ghafi inapaswa kuhifadhiwa wapi?",
            options: [
                { text: "🏠 Sehemu kavu, yenye hewa na baridi", isCorrect: true },
                { text: "💧 Ndani ya maji", isCorrect: false },
                { text: "☀️ Juani moja kwa moja", isCorrect: false },
                { text: "🔥 Karibu na moto", isCorrect: false }
            ]
        },
        {
            question: "Mifuko gani inafaa kwa kuhifadhi korosho?",
            options: [
                { text: "👜 Mifuko ya jute/katani", isCorrect: true },
                { text: "🛍️ Mifuko ya plastiki iliyofungwa", isCorrect: false },
                { text: "📰 Karatasi za magazeti", isCorrect: false },
                { text: "🥫 Makopo ya chuma", isCorrect: false }
            ]
        },
        {
            question: "Korosho ghafi inaweza kuhifadhiwa kwa muda gani?",
            options: [
                { text: "📅 Miezi 6-12 ikiwa imehifadhiwa vizuri", isCorrect: true },
                { text: "📅 Siku 2 tu", isCorrect: false },
                { text: "📅 Miaka 10", isCorrect: false },
                { text: "📅 Saa 1", isCorrect: false }
            ]
        },
        {
            question: "Hatua ya kwanza ya kusindika korosho ni ipi?",
            options: [
                { text: "🔥 Kuchoma/kuoka ganda", isCorrect: true },
                { text: "💧 Kuloweka majini", isCorrect: false },
                { text: "❄️ Kufiriji", isCorrect: false },
                { text: "🎨 Kupaka rangi", isCorrect: false }
            ]
        },
        {
            question: "Mafuta ya ganda la korosho (CNSL) yanatumika kwa nini?",
            options: [
                { text: "🏭 Viwandani kwa rangi na vifaa", isCorrect: true },
                { text: "🍳 Kupikia chakula", isCorrect: false },
                { text: "💊 Dawa ya kunywa", isCorrect: false },
                { text: "🚗 Mafuta ya gari", isCorrect: false }
            ]
        },
        {
            question: "Korosho iliyosindikwa inapaswa kuhifadhiwa vipi?",
            options: [
                { text: "📦 Kwenye mifuko isiyopitisha hewa", isCorrect: true },
                { text: "🌬️ Wazi hewani", isCorrect: false },
                { text: "💧 Ndani ya maji", isCorrect: false },
                { text: "☀️ Juani", isCorrect: false }
            ]
        },
        {
            question: "Daraja gani la korosho lina bei nzuri zaidi?",
            options: [
                { text: "⭐ W180 (kubwa, nzima)", isCorrect: true },
                { text: "📉 Vipande vidogo", isCorrect: false },
                { text: "🟤 Zilizochomeka", isCorrect: false },
                { text: "🔵 Zilizooza", isCorrect: false }
            ]
        },
        {
            question: "Tunda la korosho (apple) linaweza kutumika kufanya nini?",
            options: [
                { text: "🍹 Juisi, divai na jam", isCorrect: true },
                { text: "🏠 Kujenga nyumba", isCorrect: false },
                { text: "👕 Kushona nguo", isCorrect: false },
                { text: "🚗 Mafuta ya gari", isCorrect: false }
            ]
        }
    ],

    // Level 7 - Soko na Biashara (7 questions)
    "cashew_level7": [
        {
            question: "Nchi gani ni mnunuzi mkubwa wa korosho duniani?",
            options: [
                { text: "🇮🇳 India", isCorrect: true },
                { text: "🇦🇺 Australia", isCorrect: false },
                { text: "🇧🇷 Brazil", isCorrect: false },
                { text: "🇷🇺 Russia", isCorrect: false }
            ]
        },
        {
            question: "Bei ya korosho inategemea nini zaidi?",
            options: [
                { text: "⭐ Ubora (ukubwa na usafi)", isCorrect: true },
                { text: "🎨 Rangi ya mfuko", isCorrect: false },
                { text: "📅 Siku ya wiki", isCorrect: false },
                { text: "🌙 Awamu ya mwezi", isCorrect: false }
            ]
        },
        {
            question: "Vyama vya ushirika vinasaidia wakulima vipi?",
            options: [
                { text: "🤝 Kupata bei nzuri na masoko", isCorrect: true },
                { text: "❌ Havina faida", isCorrect: false },
                { text: "📉 Kupunguza mapato", isCorrect: false },
                { text: "🔥 Kuchoma mashamba", isCorrect: false }
            ]
        },
        {
            question: "Hati gani inahitajika kuuza korosho nje ya nchi?",
            options: [
                { text: "📜 Cheti cha ubora na leseni ya kuuza nje", isCorrect: true },
                { text: "📱 Simu tu", isCorrect: false },
                { text: "🎫 Tiketi ya ndege", isCorrect: false },
                { text: "🚫 Hakuna hati", isCorrect: false }
            ]
        },
        {
            question: "Kanuni ya kuongeza thamani (value addition) inamaanisha nini?",
            options: [
                { text: "✨ Kusindika korosho kabla ya kuuza", isCorrect: true },
                { text: "📉 Kuuza bei ndogo", isCorrect: false },
                { text: "🚫 Kutouza kabisa", isCorrect: false },
                { text: "🔥 Kuchoma korosho", isCorrect: false }
            ]
        },
        {
            question: "Kwa nini ni vizuri kuuza korosho iliyosindikwa?",
            options: [
                { text: "💰 Bei kubwa zaidi mara 2-3", isCorrect: true },
                { text: "📉 Bei ndogo", isCorrect: false },
                { text: "🚫 Hakuna soko", isCorrect: false },
                { text: "⏰ Inachukua muda mfupi", isCorrect: false }
            ]
        },
        {
            question: "Rekodi gani ni muhimu kwa mkulima wa korosho?",
            options: [
                { text: "📒 Mavuno, matumizi, na mauzo", isCorrect: true },
                { text: "🎵 Muziki unaopenda", isCorrect: false },
                { text: "📺 Programu za TV", isCorrect: false },
                { text: "🚫 Hakuna rekodi", isCorrect: false }
            ]
        }
    ],

    // Level 8 - Kuboresha Mavuno (8 questions)
    "cashew_level8": [
        {
            question: "Aina gani ya korosho inazaa zaidi?",
            options: [
                { text: "🌳 Aina zilizofanyiwa utafiti (clones)", isCorrect: true },
                { text: "🌱 Mbegu yoyote kutoka sokoni", isCorrect: false },
                { text: "🥜 Korosho za zamani tu", isCorrect: false },
                { text: "🍃 Hakuna tofauti", isCorrect: false }
            ]
        },
        {
            question: "Kupandikiza (grafting) kunasaidia nini?",
            options: [
                { text: "🔬 Kupata miti inayozaa mapema na mavuno mengi", isCorrect: true },
                { text: "🎨 Kubadilisha rangi ya majani", isCorrect: false },
                { text: "📉 Kupunguza mavuno", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Mbolea ya samadi inapaswa kuwekwa wakati gani?",
            options: [
                { text: "🌧️ Mwanzo wa msimu wa mvua", isCorrect: true },
                { text: "☀️ Katikati ya kiangazi", isCorrect: false },
                { text: "🌙 Usiku wa giza", isCorrect: false },
                { text: "🚫 Kamwe", isCorrect: false }
            ]
        },
        {
            question: "Nyuki wanasaidia vipi katika shamba la korosho?",
            options: [
                { text: "🐝 Kuchavusha maua na kuongeza mavuno", isCorrect: true },
                { text: "🐝 Kula wadudu wabaya", isCorrect: false },
                { text: "🐝 Kumwagilia maji", isCorrect: false },
                { text: "🐝 Hakuna msaada", isCorrect: false }
            ]
        },
        {
            question: "Kwa nini kupanda mazao mengine kati ya korosho kunasaidia?",
            options: [
                { text: "🌿 Mapato zaidi na afya ya udongo", isCorrect: true },
                { text: "❌ Kunasababisha magonjwa", isCorrect: false },
                { text: "📉 Kupunguza mavuno ya korosho", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Mazao gani yanafaa kupandwa kati ya miti ya korosho?",
            options: [
                { text: "🌽 Mahindi, kunde, au mbaazi", isCorrect: true },
                { text: "🌳 Miti mingine mikubwa", isCorrect: false },
                { text: "🌲 Mierezi", isCorrect: false },
                { text: "🚫 Hakuna mazao yanayofaa", isCorrect: false }
            ]
        },
        {
            question: "Upimaji wa udongo unasaidia nini?",
            options: [
                { text: "🧪 Kujua mbolea inayohitajika", isCorrect: true },
                { text: "🎨 Kubadilisha rangi ya udongo", isCorrect: false },
                { text: "💧 Kuongeza maji", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Mti wa korosho unahitaji maji kiasi gani kwa mwaka?",
            options: [
                { text: "💧 Milimita 800-2000 ya mvua", isCorrect: true },
                { text: "💧 Milimita 50 tu", isCorrect: false },
                { text: "💧 Mita 10 za maji", isCorrect: false },
                { text: "💧 Hakuna maji kabisa", isCorrect: false }
            ]
        }
    ],

    // Level 9 - Kukabiliana na Ukame (8 questions)
    "cashew_level9": [
        {
            question: "Korosho inaweza kustahimili ukame kwa sababu gani?",
            options: [
                { text: "🌳 Ina mizizi mirefu na majani magumu", isCorrect: true },
                { text: "💧 Inahifadhi maji mengi kwenye matunda", isCorrect: false },
                { text: "❄️ Inakuwa baridi", isCorrect: false },
                { text: "🔥 Inawaka moto", isCorrect: false }
            ]
        },
        {
            question: "Wakati wa ukame, unafanya nini kwenye shamba la korosho?",
            options: [
                { text: "🌿 Kutandaza (mulch) kuzunguka miti", isCorrect: true },
                { text: "🔥 Kuchoma majani yote", isCorrect: false },
                { text: "💧 Kumwagilia maji mengi sana", isCorrect: false },
                { text: "🚫 Kuacha shamba", isCorrect: false }
            ]
        },
        {
            question: "Umwagiliaji kwa matone (drip irrigation) unasaidia vipi wakati wa ukame?",
            options: [
                { text: "💧 Kutumia maji kidogo lakini kwa ufanisi", isCorrect: true },
                { text: "🌊 Kutumia maji mengi sana", isCorrect: false },
                { text: "🔥 Kuongeza joto", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Kwa nini kupanda miti ya kivuli karibu na korosho kunasaidia wakati wa ukame?",
            options: [
                { text: "🌳 Kupunguza joto na uvukizi wa maji", isCorrect: true },
                { text: "❄️ Kuleta baridi kali", isCorrect: false },
                { text: "🌧️ Kuleta mvua", isCorrect: false },
                { text: "🔥 Kuongeza joto", isCorrect: false }
            ]
        },
        {
            question: "Wakati wa ukame mkali, ni vizuri kufanya nini kwa miti michanga?",
            options: [
                { text: "💧 Kumwagilia kidogo lakini mara kwa mara", isCorrect: true },
                { text: "🔥 Kuacha ikufe", isCorrect: false },
                { text: "🌊 Kumwagilia maji mengi mara moja", isCorrect: false },
                { text: "✂️ Kukata miti yote", isCorrect: false }
            ]
        },
        {
            question: "Kuvuna maji ya mvua kunasaidia vipi shamba la korosho?",
            options: [
                { text: "💧 Kuhifadhi maji kwa msimu wa ukame", isCorrect: true },
                { text: "🌊 Kusababisha mafuriko", isCorrect: false },
                { text: "❄️ Kuleta baridi", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Dalili za mti wa korosho unaopungukiwa maji ni zipi?",
            options: [
                { text: "🍂 Majani kunyauka na kujikunja", isCorrect: true },
                { text: "🟢 Majani kuwa kijani zaidi", isCorrect: false },
                { text: "🌸 Maua mengi", isCorrect: false },
                { text: "📈 Matunda makubwa", isCorrect: false }
            ]
        },
        {
            question: "Aina gani ya korosho inastahimili ukame zaidi?",
            options: [
                { text: "🌳 Aina zilizochaguliwa kwa ukame (drought-tolerant)", isCorrect: true },
                { text: "🌱 Aina yoyote", isCorrect: false },
                { text: "🌿 Aina za mvua nyingi", isCorrect: false },
                { text: "🚫 Hakuna tofauti", isCorrect: false }
            ]
        }
    ],

    // Level 10 - Mabadiliko ya Hali ya Hewa (8 questions)
    "cashew_level10": [
        {
            question: "Mabadiliko ya hali ya hewa yanaathiri korosho vipi?",
            options: [
                { text: "🌡️ Mvua isiyotabirika na joto kupanda", isCorrect: true },
                { text: "❄️ Theluji zaidi", isCorrect: false },
                { text: "🌧️ Mvua nyingi mwaka mzima", isCorrect: false },
                { text: "🚫 Hakuna athari", isCorrect: false }
            ]
        },
        {
            question: "Wakulima wanaweza kukabiliana vipi na mabadiliko ya hali ya hewa?",
            options: [
                { text: "🌳 Kupanda aina zinazostahimili na kutunza udongo", isCorrect: true },
                { text: "🔥 Kuchoma mashamba yote", isCorrect: false },
                { text: "🚫 Kuacha kilimo", isCorrect: false },
                { text: "🙈 Kupuuza mabadiliko", isCorrect: false }
            ]
        },
        {
            question: "Kwa nini bima ya kilimo ni muhimu wakati wa mabadiliko ya hali ya hewa?",
            options: [
                { text: "🛡️ Kulinda dhidi ya hasara za hali mbaya ya hewa", isCorrect: true },
                { text: "💰 Kupata pesa bure", isCorrect: false },
                { text: "🌧️ Kuleta mvua", isCorrect: false },
                { text: "🚫 Si muhimu", isCorrect: false }
            ]
        },
        {
            question: "Kilimo cha kutunza mazingira (climate-smart agriculture) ni nini?",
            options: [
                { text: "🌍 Kilimo kinachozingatia hali ya hewa na endelevu", isCorrect: true },
                { text: "🔥 Kutumia kemikali nyingi", isCorrect: false },
                { text: "🏭 Kuchafua mazingira", isCorrect: false },
                { text: "🚫 Hakuna kilimo", isCorrect: false }
            ]
        },
        {
            question: "Kupanda miti mingine (agroforestry) kunasaidia vipi dhidi ya mabadiliko ya hali ya hewa?",
            options: [
                { text: "🌳 Kunafyonza kaboni na kulinda udongo", isCorrect: true },
                { text: "🔥 Kuongeza joto", isCorrect: false },
                { text: "💨 Kuchafua hewa", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Utabiri wa hali ya hewa unasaidia wakulima vipi?",
            options: [
                { text: "📅 Kupanga vizuri wakati wa kupanda na kuvuna", isCorrect: true },
                { text: "🌧️ Kubadilisha hali ya hewa", isCorrect: false },
                { text: "🎵 Kucheza muziki", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Nini kifanyike ili kupunguza athari za mafuriko kwenye shamba la korosho?",
            options: [
                { text: "🏗️ Kutengeneza mifereji na kuzuia mmomonyoko", isCorrect: true },
                { text: "💧 Kuongeza maji zaidi", isCorrect: false },
                { text: "🔥 Kuchoma udongo", isCorrect: false },
                { text: "🚫 Hakuna la kufanya", isCorrect: false }
            ]
        },
        {
            question: "Kwa nini ni muhimu kushirikiana na wakulima wengine wakati wa changamoto za hali ya hewa?",
            options: [
                { text: "🤝 Kubadilishana uzoefu na kusaidiana", isCorrect: true },
                { text: "🔥 Kupigana", isCorrect: false },
                { text: "🙈 Kukaa peke yako", isCorrect: false },
                { text: "🚫 Si muhimu", isCorrect: false }
            ]
        }
    ]
};

window.cashewQuestions = cashewQuestions;
