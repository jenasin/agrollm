// Module 9: Biashara ya Kilimo (Farm Business) - Swahili
// 100 questions (10 levels × 10 questions)

const module9_level1 = [
    {
        question: "Biashara ya kilimo ni nini?",
        type: "single",
        options: [
            { icon: "💰", text: "Kuuza mazao na kupata faida" },
            { icon: "🌧️", text: "Kusubiri mvua" },
            { icon: "☀️", text: "Kusubiri jua" },
            { icon: "💨", text: "Kusubiri upepo" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Biashara ya kilimo ni kuzalisha mazao au mifugo na kuuza kwa faida."
    },
    {
        question: "Mkulima anapaswa kufanya nini kabla ya kupanda?",
        type: "single",
        options: [
            { icon: "📋", text: "Kupanga na kuhesabu gharama" },
            { icon: "😴", text: "Kulala" },
            { icon: "🎮", text: "Kucheza" },
            { icon: "📺", text: "Kutazama TV" }
        ],
        answer: 0,
        explanation: "Vizuri! Kupanga husaidia kujua gharama na faida inayotarajiwa."
    },
    {
        question: "Soko ni nini?",
        type: "single",
        options: [
            { icon: "🏪", text: "Mahali pa kuuza na kununua bidhaa" },
            { icon: "🏠", text: "Nyumba ya kulala" },
            { icon: "🏫", text: "Shule" },
            { icon: "🏥", text: "Hospitali" }
        ],
        answer: 0,
        explanation: "Umefanya vizuri! Soko ni mahali watu wanauziana bidhaa."
    },
    {
        question: "Gharama za kilimo ni zipi?",
        type: "single",
        options: [
            { icon: "💵", text: "Mbegu, mbolea, na kazi" },
            { icon: "🎵", text: "Muziki" },
            { icon: "🎮", text: "Michezo" },
            { icon: "📺", text: "Televisheni" }
        ],
        answer: 0,
        explanation: "Sawa! Gharama za kilimo ni pamoja na mbegu, mbolea, dawa na mishahara."
    },
    {
        question: "Faida ni nini?",
        type: "single",
        options: [
            { icon: "📈", text: "Pesa iliyobaki baada ya gharama" },
            { icon: "📉", text: "Kupoteza pesa" },
            { icon: "💸", text: "Kutumia pesa zote" },
            { icon: "🔥", text: "Kuchoma pesa" }
        ],
        answer: 0,
        explanation: "Vizuri sana! Faida = Mapato - Gharama."
    },
    {
        question: "Bei ya mazao inaamuliwa na nini?",
        type: "single",
        options: [
            { icon: "⚖️", text: "Mahitaji na upatikanaji" },
            { icon: "🌧️", text: "Mvua tu" },
            { icon: "☀️", text: "Jua tu" },
            { icon: "💨", text: "Upepo tu" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Kama mazao ni mengi, bei hushuka. Kama ni machache, bei hupanda."
    },
    {
        question: "Mkulima anapaswa kuweka kumbukumbu za nini?",
        type: "single",
        options: [
            { icon: "📝", text: "Gharama na mapato" },
            { icon: "🎵", text: "Nyimbo za radio" },
            { icon: "📺", text: "Vipindi vya TV" },
            { icon: "🎮", text: "Michezo" }
        ],
        answer: 0,
        explanation: "Vizuri! Kumbukumbu husaidia kujua faida na kupanga vizuri."
    },
    {
        question: "Mteja ni nani?",
        type: "single",
        options: [
            { icon: "👨‍👩‍👧", text: "Mtu anayenunua bidhaa yako" },
            { icon: "👨‍🌾", text: "Mkulima mwingine" },
            { icon: "🐄", text: "Ng'ombe" },
            { icon: "🌱", text: "Mmea" }
        ],
        answer: 0,
        explanation: "Umefanya vizuri! Wateja ni watu wanaonunua mazao au bidhaa zako."
    },
    {
        question: "Ushindani katika biashara ni nini?",
        type: "single",
        options: [
            { icon: "🏃", text: "Wengine wanauza bidhaa sawa" },
            { icon: "😴", text: "Kulala pamoja" },
            { icon: "🎵", text: "Kuimba pamoja" },
            { icon: "🎮", text: "Kucheza pamoja" }
        ],
        answer: 0,
        explanation: "Sawa! Ushindani ni wauzaji wengine wanaouza bidhaa kama zako."
    },
    {
        question: "Mkulima anaweza kuongeza mapato vipi?",
        type: "single",
        options: [
            { icon: "📈", text: "Kuuza zaidi au kupata bei nzuri" },
            { icon: "📉", text: "Kuuza kidogo" },
            { icon: "❌", text: "Kuacha kilimo" },
            { icon: "😴", text: "Kulala zaidi" }
        ],
        answer: 0,
        explanation: "Vizuri sana! Mapato yanaongezeka kwa kuuza zaidi au kupata bei bora."
    }
];

const module9_level2 = [
    {
        question: "Budget ya kilimo ni nini?",
        type: "single",
        options: [
            { icon: "📋", text: "Mpango wa matumizi ya pesa" },
            { icon: "🌧️", text: "Mpango wa mvua" },
            { icon: "☀️", text: "Mpango wa jua" },
            { icon: "💨", text: "Mpango wa upepo" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Budget inaonyesha jinsi pesa itakavyotumika na kupatikana."
    },
    {
        question: "Variable costs ni nini?",
        type: "single",
        options: [
            { icon: "📊", text: "Gharama zinazobadilika kulingana na uzalishaji" },
            { icon: "🏠", text: "Gharama za nyumba" },
            { icon: "🚗", text: "Gharama za gari" },
            { icon: "📺", text: "Gharama za TV" }
        ],
        answer: 0,
        explanation: "Vizuri! Variable costs kama mbegu na mbolea zinabadilika kulingana na kiasi cha kupanda."
    },
    {
        question: "Fixed costs ni nini?",
        type: "single",
        options: [
            { icon: "🏠", text: "Gharama ambazo hazibadiliki" },
            { icon: "🌱", text: "Gharama za mbegu" },
            { icon: "💧", text: "Gharama za maji" },
            { icon: "👨‍🌾", text: "Gharama za kazi" }
        ],
        answer: 0,
        explanation: "Sawa! Fixed costs kama kodi ya ardhi hazibadiliki hata ukizalisha kidogo au nyingi."
    },
    {
        question: "Break-even point ni nini?",
        type: "single",
        options: [
            { icon: "⚖️", text: "Hatua ambapo gharama na mapato ni sawa" },
            { icon: "📈", text: "Faida kubwa" },
            { icon: "📉", text: "Hasara kubwa" },
            { icon: "💰", text: "Pesa nyingi" }
        ],
        answer: 0,
        explanation: "Umefanya vizuri! Break-even ni pale ambapo hupati faida wala hasara."
    },
    {
        question: "Gross margin ni nini?",
        type: "single",
        options: [
            { icon: "💵", text: "Mapato minus variable costs" },
            { icon: "🌧️", text: "Kiasi cha mvua" },
            { icon: "☀️", text: "Kiasi cha jua" },
            { icon: "💨", text: "Kiasi cha upepo" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Gross margin = Mapato - Gharama zinazobadilika."
    },
    {
        question: "Cash flow ni nini?",
        type: "single",
        options: [
            { icon: "💰", text: "Mtiririko wa pesa ndani na nje" },
            { icon: "🌊", text: "Mtiririko wa maji" },
            { icon: "💨", text: "Mtiririko wa hewa" },
            { icon: "🔥", text: "Mtiririko wa moto" }
        ],
        answer: 0,
        explanation: "Vizuri! Cash flow inaonyesha pesa inayoingia na kutoka kwa muda."
    },
    {
        question: "Depreciation ni nini?",
        type: "single",
        options: [
            { icon: "📉", text: "Kupungua kwa thamani ya vifaa" },
            { icon: "📈", text: "Kuongezeka kwa thamani" },
            { icon: "💰", text: "Kupata pesa" },
            { icon: "🎁", text: "Kupata zawadi" }
        ],
        answer: 0,
        explanation: "Sawa! Vifaa kama trekta hupoteza thamani kwa muda (depreciation)."
    },
    {
        question: "Working capital ni nini?",
        type: "single",
        options: [
            { icon: "💵", text: "Pesa ya kuendesha biashara ya kila siku" },
            { icon: "🏠", text: "Nyumba" },
            { icon: "🚗", text: "Gari" },
            { icon: "🌳", text: "Miti" }
        ],
        answer: 0,
        explanation: "Vizuri sana! Working capital ni pesa inayohitajika kwa matumizi ya kila siku."
    },
    {
        question: "Return on Investment (ROI) ni nini?",
        type: "single",
        options: [
            { icon: "📊", text: "Faida ukilinganisha na uwekezaji" },
            { icon: "🌧️", text: "Kiasi cha mvua" },
            { icon: "☀️", text: "Kiasi cha jua" },
            { icon: "💨", text: "Kiasi cha upepo" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! ROI inaonyesha faida unayopata kutoka kwa pesa uliyowekeza."
    },
    {
        question: "Opportunity cost ni nini?",
        type: "single",
        options: [
            { icon: "🔄", text: "Faida unayopoteza kwa kuchagua chaguo lingine" },
            { icon: "💰", text: "Pesa unayopata" },
            { icon: "🎁", text: "Zawadi" },
            { icon: "🎵", text: "Muziki" }
        ],
        answer: 0,
        explanation: "Vizuri! Kama unachagua kupanda mahindi badala ya maharagwe, opportunity cost ni faida ya maharagwe."
    }
];

const module9_level3 = [
    {
        question: "Market research ni nini?",
        type: "single",
        options: [
            { icon: "🔍", text: "Kujifunza kuhusu wateja na bei" },
            { icon: "🌧️", text: "Kutafuta mvua" },
            { icon: "☀️", text: "Kutafuta jua" },
            { icon: "💨", text: "Kutafuta upepo" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Market research inamaanisha kujifunza ni nani wateja wako na wanahitaji nini."
    },
    {
        question: "Target market ni nini?",
        type: "single",
        options: [
            { icon: "🎯", text: "Wateja unaowalenga" },
            { icon: "🏹", text: "Uwindaji" },
            { icon: "⚽", text: "Mchezo wa mpira" },
            { icon: "🎮", text: "Video game" }
        ],
        answer: 0,
        explanation: "Vizuri! Target market ni kundi la watu ambao wangetaka kununua bidhaa yako."
    },
    {
        question: "Mkulima anaweza kuongeza thamani ya mazao vipi?",
        type: "single",
        options: [
            { icon: "📦", text: "Kusindika, kufunga vizuri, au kusafisha" },
            { icon: "🔥", text: "Kuchoma" },
            { icon: "🗑️", text: "Kutupa" },
            { icon: "😴", text: "Kulala" }
        ],
        answer: 0,
        explanation: "Sawa! Value addition kama kufunga vizuri au kusindika huongeza bei."
    },
    {
        question: "Middleman (broker) ni nani?",
        type: "single",
        options: [
            { icon: "👔", text: "Mtu anayenunua kutoka mkulima na kuuza sokoni" },
            { icon: "👨‍🌾", text: "Mkulima" },
            { icon: "🐄", text: "Ng'ombe" },
            { icon: "🌱", text: "Mmea" }
        ],
        answer: 0,
        explanation: "Umefanya vizuri! Middleman ananunua mazao kutoka kwa wakulima na kuuza kwa bei kubwa."
    },
    {
        question: "Contract farming ni nini?",
        type: "single",
        options: [
            { icon: "📝", text: "Mkataba wa kulima na kuuza kwa kampuni" },
            { icon: "🌧️", text: "Mkataba wa mvua" },
            { icon: "☀️", text: "Mkataba wa jua" },
            { icon: "💨", text: "Mkataba wa upepo" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Contract farming ni makubaliano ya kulima na kuuza kwa bei iliyoamuliwa mapema."
    },
    {
        question: "Market linkage ni nini?",
        type: "single",
        options: [
            { icon: "🔗", text: "Uhusiano kati ya mkulima na soko" },
            { icon: "⛓️", text: "Mnyororo" },
            { icon: "🔒", text: "Kufuli" },
            { icon: "🔑", text: "Ufunguo" }
        ],
        answer: 0,
        explanation: "Vizuri! Market linkage inaunganisha wakulima na wateja au wanunuzi."
    },
    {
        question: "Collective marketing ni nini?",
        type: "single",
        options: [
            { icon: "👨‍👩‍👧‍👦", text: "Wakulima wanauza pamoja kwa nguvu" },
            { icon: "👨‍🌾", text: "Mkulima mmoja" },
            { icon: "🐄", text: "Ng'ombe mmoja" },
            { icon: "🌱", text: "Mmea mmoja" }
        ],
        answer: 0,
        explanation: "Sawa! Kwa kuuza pamoja, wakulima wanapata nguvu ya kujadiliana bei bora."
    },
    {
        question: "Seasonal price variation ni nini?",
        type: "single",
        options: [
            { icon: "📈📉", text: "Bei zinabadilika kulingana na msimu" },
            { icon: "🌧️", text: "Mvua inabadilika" },
            { icon: "☀️", text: "Jua linabadilika" },
            { icon: "💨", text: "Upepo unabadilika" }
        ],
        answer: 0,
        explanation: "Vizuri sana! Bei hushuka wakati wa mavuno (supply nyingi) na kupanda wakati wa uhaba."
    },
    {
        question: "Storage husaidia vipi biashara?",
        type: "single",
        options: [
            { icon: "🏪", text: "Husaidia kuuza wakati bei ni nzuri" },
            { icon: "🌧️", text: "Huleta mvua" },
            { icon: "☀️", text: "Huleta jua" },
            { icon: "💨", text: "Huleta upepo" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Kuhifadhi mazao kunakuwezesha kuuza wakati bei imepanda."
    },
    {
        question: "Transportation costs zinaathiri faida vipi?",
        type: "single",
        options: [
            { icon: "🚚", text: "Gharama kubwa za usafiri zinapunguza faida" },
            { icon: "📈", text: "Zinaongeza faida" },
            { icon: "🌧️", text: "Zinahusiana na mvua" },
            { icon: "☀️", text: "Zinahusiana na jua" }
        ],
        answer: 0,
        explanation: "Vizuri! Usafiri wa mbali au wa gharama kubwa unapunguza faida ya mkulima."
    }
];

const module9_level4 = [
    {
        question: "Farm records zinasaidia nini?",
        type: "single",
        options: [
            { icon: "📝", text: "Kufuatilia gharama, mapato, na maamuzi" },
            { icon: "🎵", text: "Kusikiliza muziki" },
            { icon: "🎮", text: "Kucheza games" },
            { icon: "📺", text: "Kutazama TV" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Records zinasaidia kujua hali ya biashara na kupanga vizuri."
    },
    {
        question: "Aina gani za records zinapaswa kuwekwa?",
        type: "single",
        options: [
            { icon: "📊", text: "Gharama, mapato, mavuno, na viingilio" },
            { icon: "🎵", text: "Nyimbo" },
            { icon: "🎮", text: "Alama za games" },
            { icon: "📺", text: "Vipindi vya TV" }
        ],
        answer: 0,
        explanation: "Vizuri! Records muhimu ni za fedha, uzalishaji, na shughuli za shamba."
    },
    {
        question: "Profit and Loss statement inaonyesha nini?",
        type: "single",
        options: [
            { icon: "📈📉", text: "Faida au hasara kwa kipindi" },
            { icon: "🌧️", text: "Kiasi cha mvua" },
            { icon: "☀️", text: "Kiasi cha jua" },
            { icon: "💨", text: "Kiasi cha upepo" }
        ],
        answer: 0,
        explanation: "Sawa! P&L inaonyesha kama biashara imefanya faida au hasara."
    },
    {
        question: "Balance sheet inaonyesha nini?",
        type: "single",
        options: [
            { icon: "⚖️", text: "Mali, madeni, na mtaji" },
            { icon: "🌧️", text: "Kiasi cha mvua" },
            { icon: "☀️", text: "Kiasi cha jua" },
            { icon: "💨", text: "Kiasi cha upepo" }
        ],
        answer: 0,
        explanation: "Umefanya vizuri! Balance sheet inaonyesha hali ya kifedha kwa wakati fulani."
    },
    {
        question: "Inventory management ni nini?",
        type: "single",
        options: [
            { icon: "📦", text: "Kudhibiti bidhaa zilizohifadhiwa" },
            { icon: "🌧️", text: "Kudhibiti mvua" },
            { icon: "☀️", text: "Kudhibiti jua" },
            { icon: "💨", text: "Kudhibiti upepo" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Inventory management ni kujua una nini na kiasi gani."
    },
    {
        question: "Why is enterprise selection important?",
        type: "single",
        options: [
            { icon: "🎯", text: "Kuchagua biashara itakayofanikiwa" },
            { icon: "🌧️", text: "Kuchagua mvua" },
            { icon: "☀️", text: "Kuchagua jua" },
            { icon: "💨", text: "Kuchagua upepo" }
        ],
        answer: 0,
        explanation: "Vizuri! Kuchagua enterprise sahihi kulingana na hali ya hewa, soko, na rasilimali."
    },
    {
        question: "Risk management katika kilimo ni nini?",
        type: "single",
        options: [
            { icon: "🛡️", text: "Kujilinda dhidi ya hasara" },
            { icon: "🎲", text: "Kucheza kamari" },
            { icon: "🎮", text: "Kucheza games" },
            { icon: "📺", text: "Kutazama TV" }
        ],
        answer: 0,
        explanation: "Sawa! Risk management ni mikakati ya kupunguza hatari za kupoteza."
    },
    {
        question: "Diversification husaidia biashara vipi?",
        type: "single",
        options: [
            { icon: "🌈", text: "Kupunguza hatari kwa kufanya biashara nyingi" },
            { icon: "🔴", text: "Kuongeza hatari" },
            { icon: "⚫", text: "Kupoteza pesa" },
            { icon: "⚪", text: "Kufanya kazi zaidi" }
        ],
        answer: 0,
        explanation: "Vizuri sana! Kama biashara moja inashindwa, nyingine zinaweza kufaulu."
    },
    {
        question: "Cost-benefit analysis ni nini?",
        type: "single",
        options: [
            { icon: "📊", text: "Kulinganisha gharama na faida" },
            { icon: "🌧️", text: "Kupima mvua" },
            { icon: "☀️", text: "Kupima jua" },
            { icon: "💨", text: "Kupima upepo" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Cost-benefit analysis inasaidia kujua kama jambo linafaa kifedha."
    },
    {
        question: "Performance indicators ni nini?",
        type: "single",
        options: [
            { icon: "📈", text: "Vipimo vya kufanikiwa kwa biashara" },
            { icon: "🌧️", text: "Vipimo vya mvua" },
            { icon: "☀️", text: "Vipimo vya jua" },
            { icon: "💨", text: "Vipimo vya upepo" }
        ],
        answer: 0,
        explanation: "Vizuri! KPIs zinasaidia kujua kama biashara inafanya vizuri."
    }
];

const module9_level5 = [
    {
        question: "Agricultural loan ni nini?",
        type: "single",
        options: [
            { icon: "🏦", text: "Mkopo wa kuendesha au kuboresha kilimo" },
            { icon: "🌧️", text: "Mkopo wa mvua" },
            { icon: "☀️", text: "Mkopo wa jua" },
            { icon: "💨", text: "Mkopo wa upepo" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Mkopo wa kilimo unapatikana kutoka benki au SACCO."
    },
    {
        question: "Interest rate ni nini?",
        type: "single",
        options: [
            { icon: "📈", text: "Gharama ya kukopa pesa" },
            { icon: "🌧️", text: "Kiwango cha mvua" },
            { icon: "☀️", text: "Kiwango cha jua" },
            { icon: "💨", text: "Kiwango cha upepo" }
        ],
        answer: 0,
        explanation: "Vizuri! Interest ni pesa ya ziada unayolipa juu ya mkopo."
    },
    {
        question: "Collateral ni nini?",
        type: "single",
        options: [
            { icon: "🏠", text: "Mali inayowekwa dhamana ya mkopo" },
            { icon: "🌧️", text: "Mvua" },
            { icon: "☀️", text: "Jua" },
            { icon: "💨", text: "Upepo" }
        ],
        answer: 0,
        explanation: "Sawa! Collateral ni mali kama ardhi au nyumba inayodhamini mkopo."
    },
    {
        question: "SACCO ni nini?",
        type: "single",
        options: [
            { icon: "👨‍👩‍👧‍👦", text: "Chama cha akiba na mikopo" },
            { icon: "🌧️", text: "Chama cha mvua" },
            { icon: "☀️", text: "Chama cha jua" },
            { icon: "💨", text: "Chama cha upepo" }
        ],
        answer: 0,
        explanation: "Umefanya vizuri! SACCO ni Savings and Credit Cooperative Organization."
    },
    {
        question: "Table banking ni nini?",
        type: "single",
        options: [
            { icon: "💵", text: "Kundi linakopa na kukopesha wanachama" },
            { icon: "🍽️", text: "Benki ya meza" },
            { icon: "🌧️", text: "Mvua ya benki" },
            { icon: "☀️", text: "Jua la benki" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Table banking ni mfumo wa wanakundi kukopeshana."
    },
    {
        question: "Crop insurance ni nini?",
        type: "single",
        options: [
            { icon: "🛡️", text: "Bima ya kulinda mazao dhidi ya hasara" },
            { icon: "🌧️", text: "Bima ya mvua" },
            { icon: "☀️", text: "Bima ya jua" },
            { icon: "💨", text: "Bima ya upepo" }
        ],
        answer: 0,
        explanation: "Vizuri! Bima hulipa mkulima kama mazao yanapotea."
    },
    {
        question: "Grant (ruzuku) ni nini?",
        type: "single",
        options: [
            { icon: "🎁", text: "Pesa ya msaada isiyorudishwa" },
            { icon: "💰", text: "Mkopo" },
            { icon: "🌧️", text: "Mvua" },
            { icon: "☀️", text: "Jua" }
        ],
        answer: 0,
        explanation: "Sawa! Grant ni pesa ya msaada ambayo haipaswi kurudishwa."
    },
    {
        question: "Mobile money inatumiwa vipi katika kilimo?",
        type: "single",
        options: [
            { icon: "📱", text: "Kulipa na kupokea pesa kwa simu" },
            { icon: "🌧️", text: "Kupiga simu kwa mvua" },
            { icon: "☀️", text: "Kupiga simu kwa jua" },
            { icon: "💨", text: "Kupiga simu kwa upepo" }
        ],
        answer: 0,
        explanation: "Vizuri sana! M-Pesa na huduma nyingine zinasaidia wakulima kupokea na kutuma pesa."
    },
    {
        question: "Savings ni muhimu kwa nini?",
        type: "single",
        options: [
            { icon: "🏦", text: "Kwa dharura na uwekezaji wa baadaye" },
            { icon: "🌧️", text: "Kwa mvua" },
            { icon: "☀️", text: "Kwa jua" },
            { icon: "💨", text: "Kwa upepo" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Akiba husaidia wakati wa shida na kwa kuwekeza."
    },
    {
        question: "Repayment capacity ni nini?",
        type: "single",
        options: [
            { icon: "💵", text: "Uwezo wa kulipa mkopo" },
            { icon: "🌧️", text: "Uwezo wa kuleta mvua" },
            { icon: "☀️", text: "Uwezo wa kuleta jua" },
            { icon: "💨", text: "Uwezo wa kuleta upepo" }
        ],
        answer: 0,
        explanation: "Vizuri! Ni muhimu kuhakikisha unaweza kulipa mkopo kabla ya kukopa."
    }
];

const module9_level6 = [
    {
        question: "Value chain ni nini?",
        type: "single",
        options: [
            { icon: "🔗", text: "Hatua zote kutoka shamba hadi mteja" },
            { icon: "⛓️", text: "Mnyororo wa chuma" },
            { icon: "🌧️", text: "Mnyororo wa mvua" },
            { icon: "☀️", text: "Mnyororo wa jua" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Value chain ni hatua zote za bidhaa: uzalishaji, usindikaji, usafirishaji, uuzaji."
    },
    {
        question: "Post-harvest handling ni nini?",
        type: "single",
        options: [
            { icon: "📦", text: "Kushughulikia mazao baada ya kuvuna" },
            { icon: "🌱", text: "Kupanda mbegu" },
            { icon: "🌧️", text: "Kusubiri mvua" },
            { icon: "☀️", text: "Kusubiri jua" }
        ],
        answer: 0,
        explanation: "Vizuri! Post-harvest handling ni kusafisha, kukaushia, na kuhifadhi mazao."
    },
    {
        question: "Grading na sorting vinafanywa kwa nini?",
        type: "single",
        options: [
            { icon: "⭐", text: "Kupanga mazao kulingana na ubora" },
            { icon: "🌧️", text: "Kupanga mvua" },
            { icon: "☀️", text: "Kupanga jua" },
            { icon: "💨", text: "Kupanga upepo" }
        ],
        answer: 0,
        explanation: "Sawa! Grading kunasaidia kupata bei bora kwa mazao bora."
    },
    {
        question: "Branding inaathiri biashara vipi?",
        type: "single",
        options: [
            { icon: "🏷️", text: "Husaidia wateja kutambua bidhaa yako" },
            { icon: "🌧️", text: "Huleta mvua" },
            { icon: "☀️", text: "Huleta jua" },
            { icon: "💨", text: "Huleta upepo" }
        ],
        answer: 0,
        explanation: "Umefanya vizuri! Brand nzuri inafanya wateja wakumbuke na kuamini bidhaa yako."
    },
    {
        question: "Certification (kibali) ni muhimu kwa nini?",
        type: "single",
        options: [
            { icon: "📜", text: "Inathibitisha ubora au uhalisia" },
            { icon: "🌧️", text: "Inahakikisha mvua" },
            { icon: "☀️", text: "Inahakikisha jua" },
            { icon: "💨", text: "Inahakikisha upepo" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Certification kama organic au fair trade huongeza bei na imani."
    },
    {
        question: "Packaging inaathiri uuzaji vipi?",
        type: "single",
        options: [
            { icon: "📦", text: "Ufungaji mzuri unavutia wateja" },
            { icon: "🌧️", text: "Huleta mvua" },
            { icon: "☀️", text: "Huleta jua" },
            { icon: "💨", text: "Huleta upepo" }
        ],
        answer: 0,
        explanation: "Vizuri! Ufungaji mzuri unaonyesha ubora na unalinda bidhaa."
    },
    {
        question: "E-commerce katika kilimo ni nini?",
        type: "single",
        options: [
            { icon: "💻", text: "Kuuza mazao kupitia internet" },
            { icon: "🌧️", text: "Kuuza mvua" },
            { icon: "☀️", text: "Kuuza jua" },
            { icon: "💨", text: "Kuuza upepo" }
        ],
        answer: 0,
        explanation: "Sawa! E-commerce kunakuwezesha kufikia wateja wengi kupitia internet."
    },
    {
        question: "Export market ni nini?",
        type: "single",
        options: [
            { icon: "🌍", text: "Soko la nje ya nchi" },
            { icon: "🏠", text: "Soko la nyumbani" },
            { icon: "🌧️", text: "Soko la mvua" },
            { icon: "☀️", text: "Soko la jua" }
        ],
        answer: 0,
        explanation: "Vizuri sana! Export market ni kuuza bidhaa nchi nyingine."
    },
    {
        question: "Quality standards ni nini?",
        type: "single",
        options: [
            { icon: "⭐", text: "Viwango vya ubora vinavyohitajika" },
            { icon: "🌧️", text: "Viwango vya mvua" },
            { icon: "☀️", text: "Viwango vya jua" },
            { icon: "💨", text: "Viwango vya upepo" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Quality standards zinaeleza sifa za bidhaa inayokubaliwa."
    },
    {
        question: "Traceability ni nini?",
        type: "single",
        options: [
            { icon: "🔍", text: "Kufuatilia bidhaa kutoka shamba hadi mteja" },
            { icon: "🌧️", text: "Kufuatilia mvua" },
            { icon: "☀️", text: "Kufuatilia jua" },
            { icon: "💨", text: "Kufuatilia upepo" }
        ],
        answer: 0,
        explanation: "Vizuri! Traceability inasaidia kujua bidhaa ilitoka wapi na ilikuwa vipi."
    }
];

const module9_level7 = [
    {
        question: "Cooperative society inasaidia wakulima vipi?",
        type: "single",
        options: [
            { icon: "👨‍👩‍👧‍👦", text: "Kununua na kuuza pamoja kwa nguvu" },
            { icon: "🌧️", text: "Kuleta mvua" },
            { icon: "☀️", text: "Kuleta jua" },
            { icon: "💨", text: "Kuleta upepo" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Cooperatives zinaunganisha wakulima kwa nguvu ya pamoja."
    },
    {
        question: "Farmers' association inafanya kazi gani?",
        type: "single",
        options: [
            { icon: "🤝", text: "Kuwakilisha na kusaidia wakulima" },
            { icon: "🌧️", text: "Kuleta mvua" },
            { icon: "☀️", text: "Kuleta jua" },
            { icon: "💨", text: "Kuleta upepo" }
        ],
        answer: 0,
        explanation: "Vizuri! Associations zinasaidia wakulima kupata huduma na kuwakilishwa."
    },
    {
        question: "Bulking center ni nini?",
        type: "single",
        options: [
            { icon: "🏪", text: "Mahali pa kukusanya mazao ya wakulima wengi" },
            { icon: "🌧️", text: "Mahali pa kukusanya mvua" },
            { icon: "☀️", text: "Mahali pa kukusanya jua" },
            { icon: "💨", text: "Mahali pa kukusanya upepo" }
        ],
        answer: 0,
        explanation: "Sawa! Bulking centers zinakusanya mazao ili kuuza kwa wingi."
    },
    {
        question: "Aggregator ni nani?",
        type: "single",
        options: [
            { icon: "👔", text: "Mtu anayekusanya mazao kutoka wakulima wengi" },
            { icon: "🌧️", text: "Mtu anayekusanya mvua" },
            { icon: "☀️", text: "Mtu anayekusanya jua" },
            { icon: "💨", text: "Mtu anayekusanya upepo" }
        ],
        answer: 0,
        explanation: "Umefanya vizuri! Aggregators wanakusanya mazao na kuuza kwa wanunuzi wakubwa."
    },
    {
        question: "Public-Private Partnership (PPP) katika kilimo ni nini?",
        type: "single",
        options: [
            { icon: "🤝", text: "Ushirikiano wa serikali na sekta binafsi" },
            { icon: "🌧️", text: "Ushirikiano na mvua" },
            { icon: "☀️", text: "Ushirikiano na jua" },
            { icon: "💨", text: "Ushirikiano na upepo" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! PPP inachanganya nguvu za serikali na kampuni binafsi."
    },
    {
        question: "Outgrower scheme ni nini?",
        type: "single",
        options: [
            { icon: "🌱", text: "Wakulima wanalima kwa ajili ya kampuni kubwa" },
            { icon: "🌧️", text: "Mvua inakua" },
            { icon: "☀️", text: "Jua linakua" },
            { icon: "💨", text: "Upepo unakua" }
        ],
        answer: 0,
        explanation: "Vizuri! Outgrower scheme inawapatia wakulima pembejeo na soko la uhakika."
    },
    {
        question: "Warehouse receipt system ni nini?",
        type: "single",
        options: [
            { icon: "📄", text: "Hati ya mazao yaliyohifadhiwa ghala" },
            { icon: "🌧️", text: "Hati ya mvua" },
            { icon: "☀️", text: "Hati ya jua" },
            { icon: "💨", text: "Hati ya upepo" }
        ],
        answer: 0,
        explanation: "Sawa! Warehouse receipt inaweza kutumika kama dhamana ya mkopo."
    },
    {
        question: "Commodity exchange ni nini?",
        type: "single",
        options: [
            { icon: "📊", text: "Soko la kununua na kuuza mazao kwa bei ya kawaida" },
            { icon: "🌧️", text: "Soko la mvua" },
            { icon: "☀️", text: "Soko la jua" },
            { icon: "💨", text: "Soko la upepo" }
        ],
        answer: 0,
        explanation: "Vizuri sana! Commodity exchange inafanya bei kuwa wazi na ya haki."
    },
    {
        question: "Value chain financing ni nini?",
        type: "single",
        options: [
            { icon: "💰", text: "Mikopo na huduma za fedha kwa hatua za value chain" },
            { icon: "🌧️", text: "Fedha za mvua" },
            { icon: "☀️", text: "Fedha za jua" },
            { icon: "💨", text: "Fedha za upepo" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Financing inayohusisha wadau wa value chain."
    },
    {
        question: "Market information systems zinasaidiaje?",
        type: "single",
        options: [
            { icon: "📱", text: "Kutoa habari za bei na masoko" },
            { icon: "🌧️", text: "Kutoa habari za mvua" },
            { icon: "☀️", text: "Kutoa habari za jua" },
            { icon: "💨", text: "Kutoa habari za upepo" }
        ],
        answer: 0,
        explanation: "Vizuri! MIS zinawezesha wakulima kujua bei na kupanga uuzaji."
    }
];

const module9_level8 = [
    {
        question: "Business plan ya kilimo inapaswa kuwa na nini?",
        type: "single",
        options: [
            { icon: "📋", text: "Malengo, mikakati, na bajeti" },
            { icon: "🌧️", text: "Mvua tu" },
            { icon: "☀️", text: "Jua tu" },
            { icon: "💨", text: "Upepo tu" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Business plan inaelezea nini unataka kufanya na vipi."
    },
    {
        question: "SWOT analysis ni nini?",
        type: "single",
        options: [
            { icon: "📊", text: "Nguvu, udhaifu, fursa, na hatari" },
            { icon: "🌧️", text: "Aina za mvua" },
            { icon: "☀️", text: "Aina za jua" },
            { icon: "💨", text: "Aina za upepo" }
        ],
        answer: 0,
        explanation: "Vizuri! SWOT = Strengths, Weaknesses, Opportunities, Threats."
    },
    {
        question: "Competitive advantage ni nini?",
        type: "single",
        options: [
            { icon: "🏆", text: "Sababu wateja wakuchague wewe" },
            { icon: "🌧️", text: "Mvua nyingi" },
            { icon: "☀️", text: "Jua kali" },
            { icon: "💨", text: "Upepo mkali" }
        ],
        answer: 0,
        explanation: "Sawa! Competitive advantage ni sababu wewe ni bora kuliko washindani."
    },
    {
        question: "Marketing mix (4Ps) ni nini?",
        type: "single",
        options: [
            { icon: "🎯", text: "Product, Price, Place, Promotion" },
            { icon: "🌧️", text: "Aina nne za mvua" },
            { icon: "☀️", text: "Aina nne za jua" },
            { icon: "💨", text: "Aina nne za upepo" }
        ],
        answer: 0,
        explanation: "Umefanya vizuri! 4Ps ni bidhaa, bei, mahali, na utangazaji."
    },
    {
        question: "Pricing strategy ni muhimu kwa nini?",
        type: "single",
        options: [
            { icon: "💰", text: "Huamua faida na ushindani" },
            { icon: "🌧️", text: "Huamua mvua" },
            { icon: "☀️", text: "Huamua jua" },
            { icon: "💨", text: "Huamua upepo" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Bei sahihi inasaidia kupata faida na kushindana."
    },
    {
        question: "Market penetration ni nini?",
        type: "single",
        options: [
            { icon: "📈", text: "Kuingia na kupata wateja katika soko" },
            { icon: "🌧️", text: "Mvua kupenya ardhi" },
            { icon: "☀️", text: "Jua kupenya mawingu" },
            { icon: "💨", text: "Upepo kupenya nyumba" }
        ],
        answer: 0,
        explanation: "Vizuri! Market penetration ni kupata wateja wengi sokoni."
    },
    {
        question: "Customer retention ni nini?",
        type: "single",
        options: [
            { icon: "❤️", text: "Kuwafanya wateja waendelee kununua" },
            { icon: "🌧️", text: "Kuhifadhi mvua" },
            { icon: "☀️", text: "Kuhifadhi jua" },
            { icon: "💨", text: "Kuhifadhi upepo" }
        ],
        answer: 0,
        explanation: "Sawa! Wateja wa kurudia ni muhimu kwa biashara endelevu."
    },
    {
        question: "Negotiation skills zinasaidia vipi?",
        type: "single",
        options: [
            { icon: "🤝", text: "Kupata bei na masharti bora" },
            { icon: "🌧️", text: "Kupata mvua" },
            { icon: "☀️", text: "Kupata jua" },
            { icon: "💨", text: "Kupata upepo" }
        ],
        answer: 0,
        explanation: "Vizuri sana! Kujadiliana vizuri kunasaidia kupata bei nzuri na masharti mazuri."
    },
    {
        question: "Cash management ni muhimu kwa nini?",
        type: "single",
        options: [
            { icon: "💵", text: "Kuhakikisha una pesa za kuendesha biashara" },
            { icon: "🌧️", text: "Kuhakikisha una mvua" },
            { icon: "☀️", text: "Kuhakikisha una jua" },
            { icon: "💨", text: "Kuhakikisha una upepo" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Cash management kunazuia kukwama kwa kukosa pesa."
    },
    {
        question: "Accounts payable na receivable ni nini?",
        type: "single",
        options: [
            { icon: "📊", text: "Madeni unayodaiwa na madeni yako" },
            { icon: "🌧️", text: "Aina za mvua" },
            { icon: "☀️", text: "Aina za jua" },
            { icon: "💨", text: "Aina za upepo" }
        ],
        answer: 0,
        explanation: "Vizuri! Payable = madeni yako, Receivable = watu wanaokudai."
    }
];

const module9_level9 = [
    {
        question: "Agribusiness incubator ni nini?",
        type: "single",
        options: [
            { icon: "🏢", text: "Programu ya kusaidia biashara mpya za kilimo" },
            { icon: "🐣", text: "Mahali pa kutotoleshea vifaranga" },
            { icon: "🌧️", text: "Mahali pa kukusanya mvua" },
            { icon: "☀️", text: "Mahali pa kukusanya jua" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Incubators zinasaidia vijana waanze biashara za kilimo."
    },
    {
        question: "Youth in agriculture program zinalenga nini?",
        type: "single",
        options: [
            { icon: "👨‍🌾", text: "Kuwasaidia vijana kuingia kilimo" },
            { icon: "🌧️", text: "Kuwasaidia vijana kupata mvua" },
            { icon: "☀️", text: "Kuwasaidia vijana kupata jua" },
            { icon: "💨", text: "Kuwasaidia vijana kupata upepo" }
        ],
        answer: 0,
        explanation: "Vizuri! Programu hizi zinafanya kilimo kivutie vijana."
    },
    {
        question: "Scaling up biashara ya kilimo inahitaji nini?",
        type: "single",
        options: [
            { icon: "📈", text: "Mtaji, wateja, na usimamizi bora" },
            { icon: "🌧️", text: "Mvua nyingi" },
            { icon: "☀️", text: "Jua kali" },
            { icon: "💨", text: "Upepo mkali" }
        ],
        answer: 0,
        explanation: "Sawa! Kukua kunahitaji pesa, soko kubwa, na usimamizi mzuri."
    },
    {
        question: "Franchise katika kilimo ni nini?",
        type: "single",
        options: [
            { icon: "🏪", text: "Kutumia brand na mfumo wa kampuni kubwa" },
            { icon: "🌧️", text: "Kutumia mvua" },
            { icon: "☀️", text: "Kutumia jua" },
            { icon: "💨", text: "Kutumia upepo" }
        ],
        answer: 0,
        explanation: "Umefanya vizuri! Franchise kunakuwezesha kutumia jina na mfumo wa kampuni iliyojulikana."
    },
    {
        question: "Joint venture katika kilimo ni nini?",
        type: "single",
        options: [
            { icon: "🤝", text: "Biashara ya pamoja kati ya wakulima au kampuni" },
            { icon: "🌧️", text: "Mvua ya pamoja" },
            { icon: "☀️", text: "Jua la pamoja" },
            { icon: "💨", text: "Upepo wa pamoja" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Joint venture ni kufanya biashara pamoja na kushiriki faida."
    },
    {
        question: "Succession planning shambani ni nini?",
        type: "single",
        options: [
            { icon: "👨‍👩‍👧", text: "Kupanga nani atarithi shamba" },
            { icon: "🌧️", text: "Kupanga mvua" },
            { icon: "☀️", text: "Kupanga jua" },
            { icon: "💨", text: "Kupanga upepo" }
        ],
        answer: 0,
        explanation: "Vizuri! Succession planning inahakikisha shamba linaendelea vizuri baada yako."
    },
    {
        question: "Exit strategy katika biashara ya kilimo ni nini?",
        type: "single",
        options: [
            { icon: "🚪", text: "Mpango wa kuondoka au kuuza biashara" },
            { icon: "🌧️", text: "Kutoka kwenye mvua" },
            { icon: "☀️", text: "Kutoka kwenye jua" },
            { icon: "💨", text: "Kutoka kwenye upepo" }
        ],
        answer: 0,
        explanation: "Sawa! Exit strategy ni mpango wa jinsi utakavyoachia biashara."
    },
    {
        question: "Impact investing katika kilimo ni nini?",
        type: "single",
        options: [
            { icon: "💚", text: "Uwekezaji unaoangalia faida na athari nzuri" },
            { icon: "🌧️", text: "Uwekezaji wa mvua" },
            { icon: "☀️", text: "Uwekezaji wa jua" },
            { icon: "💨", text: "Uwekezaji wa upepo" }
        ],
        answer: 0,
        explanation: "Vizuri sana! Impact investing huangalia faida na athari kwa jamii na mazingira."
    },
    {
        question: "Social enterprise katika kilimo ni nini?",
        type: "single",
        options: [
            { icon: "❤️", text: "Biashara inayoangalia faida na kusaidia jamii" },
            { icon: "🌧️", text: "Biashara ya mvua" },
            { icon: "☀️", text: "Biashara ya jua" },
            { icon: "💨", text: "Biashara ya upepo" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Social enterprise ina malengo ya kibiashara na kijamii."
    },
    {
        question: "Business networking katika kilimo husaidia vipi?",
        type: "single",
        options: [
            { icon: "🌐", text: "Kufahamiana na wadau wanaoweza kusaidia" },
            { icon: "🌧️", text: "Mvua" },
            { icon: "☀️", text: "Jua" },
            { icon: "💨", text: "Upepo" }
        ],
        answer: 0,
        explanation: "Vizuri! Networking kunasaidia kupata wateja, washauri, na wawekezaji."
    }
];

const module9_level10 = [
    {
        question: "Mkulima wa Kenya anapaswa kuangalia nini kabla ya kuanza biashara?",
        type: "single",
        options: [
            { icon: "📋", text: "Soko, gharama, na rasilimali zilizo" },
            { icon: "🌧️", text: "Mvua tu" },
            { icon: "☀️", text: "Jua tu" },
            { icon: "💨", text: "Upepo tu" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Kupanga vizuri kunasaidia biashara kufanikiwa."
    },
    {
        question: "Kenya Agricultural and Livestock Research Organization (KALRO) inasaidia vipi?",
        type: "single",
        options: [
            { icon: "🔬", text: "Utafiti na teknolojia mpya za kilimo" },
            { icon: "🌧️", text: "Kuleta mvua" },
            { icon: "☀️", text: "Kuleta jua" },
            { icon: "💨", text: "Kuleta upepo" }
        ],
        answer: 0,
        explanation: "Vizuri! KALRO inafanya utafiti na kutoa aina bora za mbegu na mifugo."
    },
    {
        question: "County government inasaidia wakulima vipi?",
        type: "single",
        options: [
            { icon: "🏛️", text: "Extension services na ruzuku" },
            { icon: "🌧️", text: "Kuleta mvua" },
            { icon: "☀️", text: "Kuleta jua" },
            { icon: "💨", text: "Kuleta upepo" }
        ],
        answer: 0,
        explanation: "Sawa! County governments zinatoa huduma za ugani na msaada kwa wakulima."
    },
    {
        question: "Agricultural extension officer anafanya kazi gani?",
        type: "single",
        options: [
            { icon: "👨‍🏫", text: "Kufundisha wakulima teknolojia mpya" },
            { icon: "🌧️", text: "Kuleta mvua" },
            { icon: "☀️", text: "Kuleta jua" },
            { icon: "💨", text: "Kuleta upepo" }
        ],
        answer: 0,
        explanation: "Umefanya vizuri! Extension officers wanasaidia wakulima kwa maarifa na ushauri."
    },
    {
        question: "Digital platforms kama M-Farm au iShamba zinasaidia vipi?",
        type: "single",
        options: [
            { icon: "📱", text: "Kutoa habari za soko na ushauri" },
            { icon: "🌧️", text: "Kuleta mvua" },
            { icon: "☀️", text: "Kuleta jua" },
            { icon: "💨", text: "Kuleta upepo" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Apps hizi zinawezesha wakulima kupata habari na masoko."
    },
    {
        question: "Kenya Vision 2030 inahusiana vipi na kilimo?",
        type: "single",
        options: [
            { icon: "🇰🇪", text: "Inakuza kilimo kama sekta muhimu ya uchumi" },
            { icon: "🌧️", text: "Inahusu mvua tu" },
            { icon: "☀️", text: "Inahusu jua tu" },
            { icon: "💨", text: "Inahusu upepo tu" }
        ],
        answer: 0,
        explanation: "Vizuri! Vision 2030 inalenga kukuza kilimo kama msingi wa uchumi wa Kenya."
    },
    {
        question: "Kenya Trade Network Agency (KenTrade) inasaidia vipi?",
        type: "single",
        options: [
            { icon: "🌍", text: "Kurahisisha biashara ya kimataifa" },
            { icon: "🌧️", text: "Kuleta mvua" },
            { icon: "☀️", text: "Kuleta jua" },
            { icon: "💨", text: "Kuleta upepo" }
        ],
        answer: 0,
        explanation: "Sawa! KenTrade inasaidia wakulima kuuza nje ya nchi kwa urahisi."
    },
    {
        question: "Horticultural Crops Directorate (HCD) inafanya nini?",
        type: "single",
        options: [
            { icon: "🥬", text: "Inasimamia uzalishaji na usafirishaji wa mboga na matunda" },
            { icon: "🌧️", text: "Inasimamia mvua" },
            { icon: "☀️", text: "Inasimamia jua" },
            { icon: "💨", text: "Inasimamia upepo" }
        ],
        answer: 0,
        explanation: "Vizuri sana! HCD inasimamia sekta ya horticulture Kenya."
    },
    {
        question: "Kenya Bureau of Standards (KEBS) inasaidia vipi?",
        type: "single",
        options: [
            { icon: "⭐", text: "Kuthibitisha ubora wa bidhaa" },
            { icon: "🌧️", text: "Kuthibitisha mvua" },
            { icon: "☀️", text: "Kuthibitisha jua" },
            { icon: "💨", text: "Kuthibitisha upepo" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! KEBS inahakikisha bidhaa zinakidhi viwango vya ubora."
    },
    {
        question: "Jumla ya maarifa: Mkulima mzuri wa biashara anafanya nini?",
        type: "single",
        options: [
            { icon: "💼", text: "Anapanga, anaweka kumbukumbu, na anatafuta masoko" },
            { icon: "😴", text: "Analala tu" },
            { icon: "🎮", text: "Anacheza tu" },
            { icon: "📺", text: "Anatazama TV tu" }
        ],
        answer: 0,
        explanation: "Vizuri sana! Mkulima bingwa anapanga vizuri, anaweka kumbukumbu, na anaangalia soko."
    }
];

// Export all levels
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        module9_level1,
        module9_level2,
        module9_level3,
        module9_level4,
        module9_level5,
        module9_level6,
        module9_level7,
        module9_level8,
        module9_level9,
        module9_level10
    };
}
