// Module 8: Hali ya Hewa (Climate & Weather) - Swahili
// 100 questions (10 levels × 10 questions)

const module8_level1 = [
    {
        question: "Msimu wa mvua nchini Kenya huanza lini?",
        type: "single",
        options: [
            { icon: "🌧️", text: "Machi-Mei" },
            { icon: "☀️", text: "Januari-Februari" },
            { icon: "🍂", text: "Juni-Agosti" },
            { icon: "❄️", text: "Novemba-Desemba" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Mvua kubwa (long rains) huanza Machi hadi Mei nchini Kenya."
    },
    {
        question: "Ni ishara gani ya mvua inayokuja?",
        type: "single",
        options: [
            { icon: "☁️", text: "Mawingu meusi" },
            { icon: "☀️", text: "Jua kali" },
            { icon: "🌙", text: "Mwezi mweupe" },
            { icon: "⭐", text: "Nyota nyingi" }
        ],
        answer: 0,
        explanation: "Vizuri sana! Mawingu meusi na mazito ni ishara ya mvua inayokuja."
    },
    {
        question: "Joto kali sana linaweza kusababisha nini kwa mimea?",
        type: "single",
        options: [
            { icon: "🥀", text: "Kunyauka" },
            { icon: "🌱", text: "Kukua haraka" },
            { icon: "🌸", text: "Kuchanua" },
            { icon: "🍎", text: "Kuzaa zaidi" }
        ],
        answer: 0,
        explanation: "Umefanya vizuri! Joto kali husababisha mimea kupoteza maji na kunyauka."
    },
    {
        question: "Mvua nyingi mno inaweza kusababisha nini?",
        type: "single",
        options: [
            { icon: "🌊", text: "Mafuriko" },
            { icon: "🏜️", text: "Ukame" },
            { icon: "❄️", text: "Theluji" },
            { icon: "🔥", text: "Moto" }
        ],
        answer: 0,
        explanation: "Sawa! Mvua kubwa inaweza kusababisha mafuriko na kuharibu mazao."
    },
    {
        question: "Ukame ni nini?",
        type: "single",
        options: [
            { icon: "🏜️", text: "Kukosa mvua kwa muda mrefu" },
            { icon: "🌧️", text: "Mvua nyingi" },
            { icon: "❄️", text: "Baridi kali" },
            { icon: "💨", text: "Upepo mkali" }
        ],
        answer: 0,
        explanation: "Vizuri! Ukame hutokea wakati hakuna mvua kwa muda mrefu."
    },
    {
        question: "Ni wakati gani mzuri wa kupanda mazao?",
        type: "single",
        options: [
            { icon: "🌧️", text: "Mwanzo wa msimu wa mvua" },
            { icon: "☀️", text: "Kiangazi kikali" },
            { icon: "❄️", text: "Baridi kali" },
            { icon: "🌪️", text: "Wakati wa dhoruba" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Kupanda mwanzo wa mvua husaidia mbegu kuota vizuri."
    },
    {
        question: "Upepo mkali unaweza kufanya nini kwa mimea?",
        type: "single",
        options: [
            { icon: "🌪️", text: "Kuangusha mimea" },
            { icon: "🌱", text: "Kusaidia kukua" },
            { icon: "🌸", text: "Kuchanua" },
            { icon: "💧", text: "Kumwagilia" }
        ],
        answer: 0,
        explanation: "Umefanya vizuri! Upepo mkali unaweza kuvunja au kuangusha mimea."
    },
    {
        question: "Mvua ya mawe (hailstorm) inaweza kufanya nini?",
        type: "single",
        options: [
            { icon: "💔", text: "Kuharibu mazao" },
            { icon: "🌱", text: "Kusaidia ukuaji" },
            { icon: "💧", text: "Kumwagilia vizuri" },
            { icon: "🌡️", text: "Kupoza udongo" }
        ],
        answer: 0,
        explanation: "Sawa! Mvua ya mawe inaweza kuharibu majani na matunda."
    },
    {
        question: "Jua muhimu kwa mimea kwa sababu gani?",
        type: "single",
        options: [
            { icon: "☀️", text: "Husaidia kutengeneza chakula" },
            { icon: "🌙", text: "Husaidia kulala" },
            { icon: "💨", text: "Huleta upepo" },
            { icon: "🌧️", text: "Huleta mvua" }
        ],
        answer: 0,
        explanation: "Vizuri sana! Mimea hutumia jua kutengeneza chakula (photosynthesis)."
    },
    {
        question: "Ni msimu gani wa pili wa mvua nchini Kenya?",
        type: "single",
        options: [
            { icon: "🌧️", text: "Oktoba-Desemba" },
            { icon: "☀️", text: "Januari-Machi" },
            { icon: "🍂", text: "Juni-Agosti" },
            { icon: "❄️", text: "Februari-Aprili" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Mvua fupi (short rains) huwa Oktoba hadi Desemba."
    }
];

const module8_level2 = [
    {
        question: "Thermometer inatumika kupima nini?",
        type: "single",
        options: [
            { icon: "🌡️", text: "Joto" },
            { icon: "💧", text: "Mvua" },
            { icon: "💨", text: "Upepo" },
            { icon: "☁️", text: "Mawingu" }
        ],
        answer: 0,
        explanation: "Vizuri! Thermometer hupima kiwango cha joto hewani."
    },
    {
        question: "Rain gauge inatumika kupima nini?",
        type: "single",
        options: [
            { icon: "🌧️", text: "Kiasi cha mvua" },
            { icon: "🌡️", text: "Joto" },
            { icon: "💨", text: "Upepo" },
            { icon: "☀️", text: "Mwanga" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Rain gauge hupima milimita za mvua iliyonyesha."
    },
    {
        question: "El Niño huleta hali gani ya hewa?",
        type: "single",
        options: [
            { icon: "🌧️", text: "Mvua nyingi kuliko kawaida" },
            { icon: "🏜️", text: "Ukame mkubwa" },
            { icon: "❄️", text: "Baridi kali" },
            { icon: "☀️", text: "Jua la kawaida" }
        ],
        answer: 0,
        explanation: "Umefanya vizuri! El Niño huleta mvua nyingi zaidi Afrika Mashariki."
    },
    {
        question: "La Niña huleta hali gani?",
        type: "single",
        options: [
            { icon: "🏜️", text: "Ukame na mvua kidogo" },
            { icon: "🌧️", text: "Mvua nyingi" },
            { icon: "❄️", text: "Theluji" },
            { icon: "🌪️", text: "Vimbunga" }
        ],
        answer: 0,
        explanation: "Sawa! La Niña husababisha mvua chache Afrika Mashariki."
    },
    {
        question: "Anemometer inatumika kupima nini?",
        type: "single",
        options: [
            { icon: "💨", text: "Kasi ya upepo" },
            { icon: "🌡️", text: "Joto" },
            { icon: "🌧️", text: "Mvua" },
            { icon: "☁️", text: "Aina ya mawingu" }
        ],
        answer: 0,
        explanation: "Vizuri sana! Anemometer hupima kasi na nguvu ya upepo."
    },
    {
        question: "Humidity ni nini?",
        type: "single",
        options: [
            { icon: "💧", text: "Unyevu hewani" },
            { icon: "🌡️", text: "Joto" },
            { icon: "💨", text: "Upepo" },
            { icon: "☀️", text: "Mwanga" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Humidity ni kiasi cha mvuke wa maji hewani."
    },
    {
        question: "Mawingu ya Cumulus yanaonyesha nini?",
        type: "single",
        options: [
            { icon: "⛅", text: "Hewa nzuri, labda mvua" },
            { icon: "🌧️", text: "Mvua kubwa sana" },
            { icon: "❄️", text: "Theluji" },
            { icon: "🌪️", text: "Kimbunga" }
        ],
        answer: 0,
        explanation: "Vizuri! Mawingu ya cumulus ni ya kawaida siku nzuri, lakini yanaweza kuleta mvua."
    },
    {
        question: "Barometer inapima nini?",
        type: "single",
        options: [
            { icon: "📊", text: "Shinikizo la hewa" },
            { icon: "🌡️", text: "Joto" },
            { icon: "💧", text: "Unyevu" },
            { icon: "💨", text: "Upepo" }
        ],
        answer: 0,
        explanation: "Umefanya vizuri! Barometer hupima shinikizo la hewa kutabiri hali ya hewa."
    },
    {
        question: "Dew point ni nini?",
        type: "single",
        options: [
            { icon: "💧", text: "Joto ambalo hewa huwa na umande" },
            { icon: "🌡️", text: "Joto la juu zaidi" },
            { icon: "❄️", text: "Joto la chini zaidi" },
            { icon: "☀️", text: "Joto la jua" }
        ],
        answer: 0,
        explanation: "Sawa! Dew point ni joto ambalo mvuke hugeuka kuwa matone ya maji."
    },
    {
        question: "Mawingu ya Stratus yanaonyesha nini?",
        type: "single",
        options: [
            { icon: "🌫️", text: "Siku ya mawingu, mvua nyepesi" },
            { icon: "☀️", text: "Siku ya jua kali" },
            { icon: "🌪️", text: "Dhoruba kali" },
            { icon: "❄️", text: "Theluji" }
        ],
        answer: 0,
        explanation: "Vizuri sana! Mawingu ya stratus ni tambarare na yanaweza kuleta mvua nyepesi."
    }
];

const module8_level3 = [
    {
        question: "Mkulima anaweza kufanya nini kukabiliana na ukame?",
        type: "single",
        options: [
            { icon: "💧", text: "Kutumia umwagiliaji" },
            { icon: "🌧️", text: "Kuomba mvua" },
            { icon: "❄️", text: "Kusubiri baridi" },
            { icon: "🔥", text: "Kuchoma shamba" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Umwagiliaji husaidia mazao wakati wa ukame."
    },
    {
        question: "Mulching husaidia vipi wakati wa joto?",
        type: "single",
        options: [
            { icon: "🌿", text: "Huhifadhi unyevu ardhini" },
            { icon: "☀️", text: "Huongeza joto" },
            { icon: "💨", text: "Huleta upepo" },
            { icon: "🌧️", text: "Huleta mvua" }
        ],
        answer: 0,
        explanation: "Vizuri! Mulch hupunguza uvukizi na kuhifadhi maji ardhini."
    },
    {
        question: "Mazao yanayostahimili ukame ni yepi?",
        type: "single",
        options: [
            { icon: "🌾", text: "Mtama na ulezi" },
            { icon: "🍚", text: "Mpunga" },
            { icon: "🥬", text: "Sukuma wiki" },
            { icon: "🥒", text: "Matango" }
        ],
        answer: 0,
        explanation: "Umefanya vizuri! Mtama na ulezi vinastahimili ukame vizuri."
    },
    {
        question: "Wakati wa mvua kubwa, mkulima afanye nini?",
        type: "single",
        options: [
            { icon: "🚿", text: "Kuchimba mifereji ya maji" },
            { icon: "💧", text: "Kumwagilia zaidi" },
            { icon: "🔥", text: "Kuchoma shamba" },
            { icon: "❄️", text: "Kufunika kwa theluji" }
        ],
        answer: 0,
        explanation: "Sawa! Mifereji husaidia kupeleka maji ya ziada mbali na mazao."
    },
    {
        question: "Greenhouse husaidia vipi kudhibiti hali ya hewa?",
        type: "single",
        options: [
            { icon: "🏠", text: "Huzuia mvua na kudhibiti joto" },
            { icon: "💨", text: "Huleta upepo ndani" },
            { icon: "❄️", text: "Hufanya baridi zaidi" },
            { icon: "☁️", text: "Huleta mawingu" }
        ],
        answer: 0,
        explanation: "Vizuri sana! Greenhouse hulinda mimea kutoka mvua na kudhibiti joto."
    },
    {
        question: "Windbreaks ni nini?",
        type: "single",
        options: [
            { icon: "🌳", text: "Miti inayozuia upepo" },
            { icon: "🌧️", text: "Mvua ya kawaida" },
            { icon: "☀️", text: "Jua kali" },
            { icon: "❄️", text: "Theluji" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Windbreaks ni miti au vichaka vinavyolinda mazao kutoka upepo."
    },
    {
        question: "Frost inaweza kufanya nini kwa mimea?",
        type: "single",
        options: [
            { icon: "❄️", text: "Kuharibu seli za mimea" },
            { icon: "🌱", text: "Kusaidia kukua" },
            { icon: "🌸", text: "Kuchanua" },
            { icon: "💧", text: "Kumwagilia" }
        ],
        answer: 0,
        explanation: "Umefanya vizuri! Baridi kali inaweza kugandisha na kuharibu seli za mimea."
    },
    {
        question: "Shade nets zinatumika kwa nini?",
        type: "single",
        options: [
            { icon: "🌿", text: "Kupunguza jua kali" },
            { icon: "🌧️", text: "Kukusanya mvua" },
            { icon: "💨", text: "Kuleta upepo" },
            { icon: "❄️", text: "Kuleta baridi" }
        ],
        answer: 0,
        explanation: "Sawa! Shade nets hulinda mimea kutoka jua kali sana."
    },
    {
        question: "Mkulima anaweza kupata taarifa za hali ya hewa wapi?",
        type: "single",
        options: [
            { icon: "📱", text: "Radio, TV, na simu" },
            { icon: "🌙", text: "Kuangalia mwezi" },
            { icon: "⭐", text: "Kuangalia nyota" },
            { icon: "🐦", text: "Kuuliza ndege" }
        ],
        answer: 0,
        explanation: "Vizuri sana! Radio, televisheni na simu hutoa taarifa za hali ya hewa."
    },
    {
        question: "Crop calendar ni nini?",
        type: "single",
        options: [
            { icon: "📅", text: "Ratiba ya shughuli za kilimo kulingana na msimu" },
            { icon: "🌙", text: "Kalenda ya mwezi" },
            { icon: "☀️", text: "Kalenda ya jua" },
            { icon: "⭐", text: "Kalenda ya nyota" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Crop calendar inaonyesha wakati mzuri wa kupanda na kuvuna."
    }
];

const module8_level4 = [
    {
        question: "Climate change inaathiri kilimo vipi?",
        type: "single",
        options: [
            { icon: "🌡️", text: "Mabadiliko ya msimu na mvua" },
            { icon: "📈", text: "Mavuno yanakuwa bora" },
            { icon: "💰", text: "Bei zinapungua" },
            { icon: "👨‍🌾", text: "Wakulima wanafuraha" }
        ],
        answer: 0,
        explanation: "Vizuri! Climate change inasababisha msimu kubadilika na kutokuwa na uhakika."
    },
    {
        question: "Carbon sequestration katika kilimo ni nini?",
        type: "single",
        options: [
            { icon: "🌱", text: "Kuhifadhi carbon ardhini kupitia mimea" },
            { icon: "🔥", text: "Kuchoma mabaki" },
            { icon: "💨", text: "Kutoa gesi hewani" },
            { icon: "🏭", text: "Kujenga viwanda" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Mimea inachukua CO2 na kuihifadhi ardhini."
    },
    {
        question: "Conservation agriculture husaidiaje kukabiliana na hali ya hewa?",
        type: "single",
        options: [
            { icon: "🌿", text: "Huhifadhi maji na udongo" },
            { icon: "🔥", text: "Huchoma mabaki" },
            { icon: "💧", text: "Hutumia maji mengi" },
            { icon: "🚜", text: "Hulima kwa kina" }
        ],
        answer: 0,
        explanation: "Vizuri sana! Conservation agriculture hulinda udongo na kuhifadhi unyevu."
    },
    {
        question: "Agroforestry husaidiaje kudhibiti hali ya hewa shambani?",
        type: "single",
        options: [
            { icon: "🌳", text: "Miti huleta kivuli na kupunguza joto" },
            { icon: "🔥", text: "Miti huongeza joto" },
            { icon: "💨", text: "Miti huleta upepo mkali" },
            { icon: "🌧️", text: "Miti huzuia mvua" }
        ],
        answer: 0,
        explanation: "Umefanya vizuri! Miti hutoa kivuli, kupunguza joto na kuzuia upepo."
    },
    {
        question: "Rainwater harvesting ni nini?",
        type: "single",
        options: [
            { icon: "💧", text: "Kukusanya na kuhifadhi maji ya mvua" },
            { icon: "🌧️", text: "Kuomba mvua" },
            { icon: "☀️", text: "Kukausha maji" },
            { icon: "🔥", text: "Kupasha maji moto" }
        ],
        answer: 0,
        explanation: "Sawa! Rainwater harvesting ni kukusanya mvua kwa matumizi ya baadaye."
    },
    {
        question: "Drought-resistant varieties ni nini?",
        type: "single",
        options: [
            { icon: "🌱", text: "Aina za mazao yanayostahimili ukame" },
            { icon: "💧", text: "Mazao yanayohitaji maji mengi" },
            { icon: "❄️", text: "Mazao ya baridi" },
            { icon: "🌧️", text: "Mazao ya mvua" }
        ],
        answer: 0,
        explanation: "Vizuri sana! Hizi ni aina zilizoundwa kustahimili ukiwa na maji kidogo."
    },
    {
        question: "Weather index insurance ni nini?",
        type: "single",
        options: [
            { icon: "📊", text: "Bima inayolipa kulingana na hali ya hewa" },
            { icon: "🌡️", text: "Kipimo cha joto" },
            { icon: "💨", text: "Kipimo cha upepo" },
            { icon: "☁️", text: "Aina ya mawingu" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Bima hii hulipa wakulima wakati mvua ni chache au nyingi mno."
    },
    {
        question: "Irrigation scheduling kulingana na hali ya hewa husaidiaje?",
        type: "single",
        options: [
            { icon: "💧", text: "Hupunguza upotevu wa maji" },
            { icon: "🔥", text: "Huongeza joto" },
            { icon: "💨", text: "Huleta upepo" },
            { icon: "☁️", text: "Huleta mawingu" }
        ],
        answer: 0,
        explanation: "Vizuri! Kumwagilia kulingana na hali ya hewa huokoa maji."
    },
    {
        question: "Early warning systems za hali ya hewa husaidiaje?",
        type: "single",
        options: [
            { icon: "⚠️", text: "Huonya mapema kuhusu hali mbaya" },
            { icon: "🌧️", text: "Huleta mvua" },
            { icon: "☀️", text: "Huleta jua" },
            { icon: "💨", text: "Huzuia upepo" }
        ],
        answer: 0,
        explanation: "Umefanya vizuri! Mifumo ya onyo hutoa habari mapema kujiandaa."
    },
    {
        question: "Heat stress kwa mimea ni nini?",
        type: "single",
        options: [
            { icon: "🌡️", text: "Madhara ya joto kali kwa mimea" },
            { icon: "❄️", text: "Madhara ya baridi" },
            { icon: "💧", text: "Maji mengi" },
            { icon: "🌱", text: "Ukuaji mzuri" }
        ],
        answer: 0,
        explanation: "Sawa! Heat stress hutokea joto linapozidi kiwango kinachofaa kwa mimea."
    }
];

const module8_level5 = [
    {
        question: "Microclimate ni nini?",
        type: "single",
        options: [
            { icon: "🌡️", text: "Hali ya hewa ya eneo dogo" },
            { icon: "🌍", text: "Hali ya hewa ya dunia" },
            { icon: "🌊", text: "Hali ya bahari" },
            { icon: "🏔️", text: "Hali ya mlima" }
        ],
        answer: 0,
        explanation: "Vizuri sana! Microclimate ni hali ya hewa katika eneo dogo kama shamba."
    },
    {
        question: "Mkulima anaweza kubadilisha microclimate vipi?",
        type: "single",
        options: [
            { icon: "🌳", text: "Kupanda miti na vichaka" },
            { icon: "🔥", text: "Kuchoma shamba" },
            { icon: "🏭", text: "Kujenga kiwanda" },
            { icon: "🚗", text: "Kutumia magari" }
        ],
        answer: 0,
        explanation: "Sawa! Miti na vichaka vinaweza kubadilisha joto, upepo na unyevu."
    },
    {
        question: "Evapotranspiration ni nini?",
        type: "single",
        options: [
            { icon: "💨", text: "Uvukizi wa maji kutoka udongo na mimea" },
            { icon: "🌧️", text: "Mvua inayonyesha" },
            { icon: "❄️", text: "Theluji inayoyeyuka" },
            { icon: "☀️", text: "Jua linalochomoza" }
        ],
        answer: 0,
        explanation: "Vizuri! Evapotranspiration ni jinsi maji yanavyopotea kutoka udongo na mimea."
    },
    {
        question: "Growing degree days (GDD) ni nini?",
        type: "single",
        options: [
            { icon: "📊", text: "Kipimo cha joto linalofaa kwa ukuaji" },
            { icon: "📅", text: "Siku za mwezi" },
            { icon: "🌙", text: "Siku za mwezi mpya" },
            { icon: "☀️", text: "Siku za jua" }
        ],
        answer: 0,
        explanation: "Umefanya vizuri! GDD hupima joto linalosaidia ukuaji wa mimea."
    },
    {
        question: "Phenology katika kilimo ni nini?",
        type: "single",
        options: [
            { icon: "🌱", text: "Hatua za ukuaji kulingana na hali ya hewa" },
            { icon: "📚", text: "Kusoma vitabu" },
            { icon: "🔬", text: "Kupima kemikali" },
            { icon: "🏭", text: "Kutengeneza bidhaa" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Phenology inasoma uhusiano wa ukuaji wa mimea na msimu."
    },
    {
        question: "Albedo ya ardhi inaathiri hali ya hewa vipi?",
        type: "single",
        options: [
            { icon: "☀️", text: "Ardhi nyeupe hurudisha joto, nyeusi inachukua" },
            { icon: "🌧️", text: "Huleta mvua" },
            { icon: "💨", text: "Huleta upepo" },
            { icon: "❄️", text: "Huleta theluji" }
        ],
        answer: 0,
        explanation: "Vizuri! Rangi ya ardhi huathiri kiasi cha joto kinachofyonzwa."
    },
    {
        question: "Inversion layer ni nini?",
        type: "single",
        options: [
            { icon: "🌫️", text: "Tabaka la hewa baridi chini ya joto" },
            { icon: "☁️", text: "Mawingu ya juu" },
            { icon: "🌧️", text: "Mvua kubwa" },
            { icon: "💨", text: "Upepo mkali" }
        ],
        answer: 0,
        explanation: "Sawa! Inversion hutokea usiku baridi na inaweza kusababisha frost."
    },
    {
        question: "Orographic rainfall ni nini?",
        type: "single",
        options: [
            { icon: "🏔️", text: "Mvua inayosababishwa na milima" },
            { icon: "🌊", text: "Mvua ya bahari" },
            { icon: "🏜️", text: "Mvua ya jangwa" },
            { icon: "🌳", text: "Mvua ya msitu" }
        ],
        answer: 0,
        explanation: "Vizuri sana! Milima hulazimisha hewa kupanda na kuleta mvua."
    },
    {
        question: "Convective rainfall hutokea vipi?",
        type: "single",
        options: [
            { icon: "☀️", text: "Jua hupasha ardhi moto, hewa hupanda" },
            { icon: "🏔️", text: "Milima inazuia upepo" },
            { icon: "🌊", text: "Bahari inayeyuka" },
            { icon: "❄️", text: "Theluji inayeyuka" }
        ],
        answer: 0,
        explanation: "Umefanya vizuri! Joto kali husababisha hewa kupanda na kuleta mvua."
    },
    {
        question: "Frost pocket ni nini?",
        type: "single",
        options: [
            { icon: "❄️", text: "Eneo la chini ambapo baridi hukusanyika" },
            { icon: "☀️", text: "Eneo la joto" },
            { icon: "💧", text: "Eneo la maji" },
            { icon: "🌱", text: "Eneo la mimea" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Frost pockets ni maeneo ya chini ambapo hewa baridi hukaa."
    }
];

const module8_level6 = [
    {
        question: "Satellite imagery inatumika vipi katika kilimo?",
        type: "single",
        options: [
            { icon: "🛰️", text: "Kuona hali ya mazao na hewa" },
            { icon: "📱", text: "Kupiga simu" },
            { icon: "📺", text: "Kutazama TV" },
            { icon: "🎵", text: "Kusikiliza muziki" }
        ],
        answer: 0,
        explanation: "Vizuri! Picha za satellite zinaonyesha hali ya mazao na hewa."
    },
    {
        question: "NDVI (vegetation index) inaonyesha nini?",
        type: "single",
        options: [
            { icon: "🌿", text: "Afya ya mimea kutoka anga" },
            { icon: "💧", text: "Kiasi cha maji" },
            { icon: "🌡️", text: "Joto la hewa" },
            { icon: "💨", text: "Kasi ya upepo" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! NDVI inaonyesha jinsi mimea ilivyo afya kutoka picha za satellite."
    },
    {
        question: "Climate-smart agriculture ni nini?",
        type: "single",
        options: [
            { icon: "🌱", text: "Kilimo kinachokabiliana na climate change" },
            { icon: "🤖", text: "Kilimo cha roboti" },
            { icon: "📱", text: "Kilimo cha simu" },
            { icon: "💻", text: "Kilimo cha kompyuta" }
        ],
        answer: 0,
        explanation: "Vizuri sana! Climate-smart agriculture husaidia kukabiliana na mabadiliko ya hali ya hewa."
    },
    {
        question: "Precision agriculture inatumia taarifa za hali ya hewa vipi?",
        type: "single",
        options: [
            { icon: "📊", text: "Kuamua ni lini na kiasi gani cha kumwagilia" },
            { icon: "🌧️", text: "Kuomba mvua" },
            { icon: "☀️", text: "Kuomba jua" },
            { icon: "💨", text: "Kuomba upepo" }
        ],
        answer: 0,
        explanation: "Sawa! Taarifa za hewa husaidia kufanya maamuzi sahihi ya kilimo."
    },
    {
        question: "Weather stations shambani zinafanya kazi gani?",
        type: "single",
        options: [
            { icon: "📡", text: "Kupima na kutuma taarifa za hali ya hewa" },
            { icon: "📱", text: "Kupiga simu" },
            { icon: "📺", text: "Kutazama TV" },
            { icon: "🎵", text: "Kucheza muziki" }
        ],
        answer: 0,
        explanation: "Vizuri! Weather stations hupima joto, upepo, mvua na unyevu."
    },
    {
        question: "Soil temperature inaathiri ukuaji wa mimea vipi?",
        type: "single",
        options: [
            { icon: "🌡️", text: "Huathiri kuota kwa mbegu na mizizi" },
            { icon: "💧", text: "Huathiri maji hewani" },
            { icon: "☁️", text: "Huathiri mawingu" },
            { icon: "💨", text: "Huathiri upepo" }
        ],
        answer: 0,
        explanation: "Umefanya vizuri! Joto la udongo huathiri kuota na ukuaji wa mizizi."
    },
    {
        question: "Diurnal temperature range ni nini?",
        type: "single",
        options: [
            { icon: "🌡️", text: "Tofauti ya joto mchana na usiku" },
            { icon: "🌧️", text: "Kiasi cha mvua" },
            { icon: "💨", text: "Kasi ya upepo" },
            { icon: "☁️", text: "Aina ya mawingu" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Hii ni tofauti kati ya joto la juu na la chini kwa siku."
    },
    {
        question: "Photoperiod inaathiri mimea vipi?",
        type: "single",
        options: [
            { icon: "☀️", text: "Urefu wa mchana huathiri maua na matunda" },
            { icon: "🌧️", text: "Kiasi cha mvua" },
            { icon: "💨", text: "Nguvu ya upepo" },
            { icon: "❄️", text: "Kiasi cha baridi" }
        ],
        answer: 0,
        explanation: "Vizuri sana! Baadhi ya mimea inachanua kulingana na urefu wa mchana."
    },
    {
        question: "Vapor pressure deficit (VPD) ni nini?",
        type: "single",
        options: [
            { icon: "💨", text: "Tofauti ya unyevu kati ya hewa na mimea" },
            { icon: "🌧️", text: "Shinikizo la mvua" },
            { icon: "🌡️", text: "Shinikizo la joto" },
            { icon: "☁️", text: "Shinikizo la mawingu" }
        ],
        answer: 0,
        explanation: "Sawa! VPD huathiri jinsi mimea inavyofungua stomata na kupoteza maji."
    },
    {
        question: "Chilling hours ni nini?",
        type: "single",
        options: [
            { icon: "❄️", text: "Saa za baridi zinazohitajika na matunda" },
            { icon: "☀️", text: "Saa za jua" },
            { icon: "🌧️", text: "Saa za mvua" },
            { icon: "💨", text: "Saa za upepo" }
        ],
        answer: 0,
        explanation: "Vizuri! Matunda kama apples yanahitaji saa za baridi ili kuzaa vizuri."
    }
];

const module8_level7 = [
    {
        question: "Ni greenhouse gas gani kuu inayotolewa na kilimo?",
        type: "single",
        options: [
            { icon: "🐄", text: "Methane kutoka mifugo" },
            { icon: "💧", text: "Mvuke wa maji" },
            { icon: "🌬️", text: "Oksijeni" },
            { icon: "🍃", text: "Nitrogen" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Mifugo, hasa ng'ombe, hutoa methane nyingi."
    },
    {
        question: "Mkulima anaweza kupunguza carbon footprint vipi?",
        type: "single",
        options: [
            { icon: "🌳", text: "Kupanda miti na kutumia mbolea kidogo" },
            { icon: "🔥", text: "Kuchoma mabaki yote" },
            { icon: "🚜", text: "Kutumia trekta kubwa zaidi" },
            { icon: "✈️", text: "Kusafirisha mazao kwa ndege" }
        ],
        answer: 0,
        explanation: "Vizuri! Miti inachukua CO2 na kutumia mbolea vizuri hupunguza emissions."
    },
    {
        question: "No-till farming husaidiaje hali ya hewa?",
        type: "single",
        options: [
            { icon: "🌿", text: "Huhifadhi carbon ardhini" },
            { icon: "🔥", text: "Huongeza moto" },
            { icon: "💨", text: "Huongeza upepo" },
            { icon: "🌧️", text: "Huongeza mvua" }
        ],
        answer: 0,
        explanation: "Umefanya vizuri! Kulima kidogo kunazuia carbon kutoka ardhini."
    },
    {
        question: "Cover crops husaidiaje kukabiliana na hali ya hewa?",
        type: "single",
        options: [
            { icon: "🌱", text: "Hulinda udongo na kuhifadhi unyevu" },
            { icon: "🔥", text: "Huongeza joto" },
            { icon: "💨", text: "Huleta upepo" },
            { icon: "🌧️", text: "Huzuia mvua" }
        ],
        answer: 0,
        explanation: "Sawa! Cover crops hulinda udongo na kuhifadhi maji wakati wa msimu mkavu."
    },
    {
        question: "Integrated pest management (IPM) inahusiana vipi na hali ya hewa?",
        type: "single",
        options: [
            { icon: "🐛", text: "Hali ya hewa huathiri wadudu na magonjwa" },
            { icon: "💧", text: "IPM huleta mvua" },
            { icon: "☀️", text: "IPM huleta jua" },
            { icon: "❄️", text: "IPM huleta baridi" }
        ],
        answer: 0,
        explanation: "Vizuri sana! Joto na unyevu huathiri idadi na aina ya wadudu."
    },
    {
        question: "Mitigation vs Adaptation katika kilimo ni nini?",
        type: "single",
        options: [
            { icon: "🌍", text: "Mitigation = kupunguza, Adaptation = kuzoea" },
            { icon: "🌧️", text: "Zote zinahusiana na mvua" },
            { icon: "☀️", text: "Zote zinahusiana na jua" },
            { icon: "💨", text: "Zote zinahusiana na upepo" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Mitigation ni kupunguza emissions, adaptation ni kuzoea mabadiliko."
    },
    {
        question: "Pasture management inahusiana vipi na climate?",
        type: "single",
        options: [
            { icon: "🐄", text: "Malisho mazuri huhifadhi carbon" },
            { icon: "🔥", text: "Malisho huleta moto" },
            { icon: "❄️", text: "Malisho huleta baridi" },
            { icon: "🌧️", text: "Malisho huleta mvua" }
        ],
        answer: 0,
        explanation: "Vizuri! Malisho yenye afya huhifadhi carbon ardhini."
    },
    {
        question: "Rice paddies hutoa gesi gani?",
        type: "single",
        options: [
            { icon: "🍚", text: "Methane" },
            { icon: "💨", text: "Oksijeni" },
            { icon: "🌬️", text: "Nitrogen" },
            { icon: "☁️", text: "Mvuke wa maji tu" }
        ],
        answer: 0,
        explanation: "Umefanya vizuri! Mashamba ya mpunga yenye maji hutoa methane."
    },
    {
        question: "Biochar ni nini na inasaidiaje?",
        type: "single",
        options: [
            { icon: "⚫", text: "Mkaa unaowekwa ardhini kuhifadhi carbon" },
            { icon: "🔥", text: "Moto wa kupikia" },
            { icon: "💧", text: "Maji ya umwagiliaji" },
            { icon: "🌱", text: "Mbegu za kupanda" }
        ],
        answer: 0,
        explanation: "Sawa! Biochar ni mkaa unaohifadhi carbon ardhini kwa miaka mingi."
    },
    {
        question: "Silvopasture ni nini?",
        type: "single",
        options: [
            { icon: "🌳", text: "Mchanganyiko wa miti, malisho na mifugo" },
            { icon: "🌾", text: "Kulima nafaka tu" },
            { icon: "🐟", text: "Ufugaji wa samaki" },
            { icon: "🏠", text: "Nyumba za kuku" }
        ],
        answer: 0,
        explanation: "Vizuri sana! Silvopasture inachanganya miti na malisho kwa faida nyingi."
    }
];

const module8_level8 = [
    {
        question: "Seasonal forecasting ni muhimu kwa nini?",
        type: "single",
        options: [
            { icon: "📅", text: "Husaidia kupanga msimu wa kilimo" },
            { icon: "📱", text: "Kupiga simu" },
            { icon: "📺", text: "Kutazama TV" },
            { icon: "🎵", text: "Kusikiliza muziki" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Kutabiri msimu kunasaidia mkulima kupanga vizuri."
    },
    {
        question: "Wakulima wa Kenya wanaweza kutumia KMD (Kenya Meteorological Department) vipi?",
        type: "single",
        options: [
            { icon: "📡", text: "Kupata taarifa za hali ya hewa" },
            { icon: "🌧️", text: "Kuomba mvua" },
            { icon: "☀️", text: "Kuomba jua" },
            { icon: "💨", text: "Kuomba upepo" }
        ],
        answer: 0,
        explanation: "Vizuri! KMD hutoa taarifa za hali ya hewa kwa wakulima."
    },
    {
        question: "Teleconnections katika hali ya hewa ni nini?",
        type: "single",
        options: [
            { icon: "🌍", text: "Uhusiano wa hali ya hewa kati ya maeneo mbali" },
            { icon: "📱", text: "Mawasiliano ya simu" },
            { icon: "📺", text: "Matangazo ya TV" },
            { icon: "🎵", text: "Muziki wa mbali" }
        ],
        answer: 0,
        explanation: "Umefanya vizuri! El Niño na La Niña zinaathiri hali ya hewa Afrika kutoka Pacific."
    },
    {
        question: "Indian Ocean Dipole (IOD) inaathiri Kenya vipi?",
        type: "single",
        options: [
            { icon: "🌊", text: "Huathiri kiasi cha mvua" },
            { icon: "🏔️", text: "Huathiri milima" },
            { icon: "🌳", text: "Huathiri miti" },
            { icon: "🐄", text: "Huathiri ng'ombe" }
        ],
        answer: 0,
        explanation: "Sawa! IOD ya positive huleta mvua nyingi Afrika Mashariki."
    },
    {
        question: "Inter-Tropical Convergence Zone (ITCZ) ni nini?",
        type: "single",
        options: [
            { icon: "🌧️", text: "Ukanda wa mvua unaosogea na msimu" },
            { icon: "❄️", text: "Ukanda wa baridi" },
            { icon: "☀️", text: "Ukanda wa jua" },
            { icon: "💨", text: "Ukanda wa upepo" }
        ],
        answer: 0,
        explanation: "Vizuri sana! ITCZ ni ukanda wa mvua unaosogea kaskazini na kusini kwa msimu."
    },
    {
        question: "Climate variability inaathiri vipi mipango ya kilimo?",
        type: "single",
        options: [
            { icon: "📊", text: "Husababisha kutokuwa na uhakika wa msimu" },
            { icon: "📅", text: "Hufanya mipango iwe rahisi" },
            { icon: "💰", text: "Hupunguza gharama" },
            { icon: "👨‍🌾", text: "Hupunguza kazi" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Mabadiliko ya hali ya hewa hufanya kupanga kuwa vigumu."
    },
    {
        question: "Agrometeorological bulletins ni nini?",
        type: "single",
        options: [
            { icon: "📰", text: "Taarifa za hali ya hewa kwa wakulima" },
            { icon: "🍎", text: "Taarifa za bei za matunda" },
            { icon: "🚜", text: "Taarifa za mashine" },
            { icon: "👨‍🌾", text: "Habari za wakulima" }
        ],
        answer: 0,
        explanation: "Vizuri! Bulletins hizi hutoa taarifa za hewa na ushauri kwa wakulima."
    },
    {
        question: "Downscaling katika climate modeling ni nini?",
        type: "single",
        options: [
            { icon: "📊", text: "Kubadilisha taarifa za kimataifa kuwa za eneo" },
            { icon: "📉", text: "Kupunguza bei" },
            { icon: "⬇️", text: "Kushuka chini" },
            { icon: "📱", text: "Kupunguza simu" }
        ],
        answer: 0,
        explanation: "Umefanya vizuri! Downscaling inafanya taarifa za hali ya hewa ziwe za eneo."
    },
    {
        question: "Ensemble forecasting ni nini?",
        type: "single",
        options: [
            { icon: "📊", text: "Kutumia mifumo mingi kutabiri" },
            { icon: "🎵", text: "Muziki wa pamoja" },
            { icon: "👨‍🌾", text: "Kilimo cha pamoja" },
            { icon: "🏠", text: "Nyumba za pamoja" }
        ],
        answer: 0,
        explanation: "Sawa! Ensemble inatumia mifumo mingi kupata utabiri bora."
    },
    {
        question: "Probabilistic forecasts zinaonyesha nini?",
        type: "single",
        options: [
            { icon: "📈", text: "Uwezekano wa hali ya hewa" },
            { icon: "🌧️", text: "Kiasi halisi cha mvua" },
            { icon: "☀️", text: "Joto halisi" },
            { icon: "💨", text: "Upepo halisi" }
        ],
        answer: 0,
        explanation: "Vizuri sana! Probabilistic forecasts zinaonyesha uwezekano, sio uhakika."
    }
];

const module8_level9 = [
    {
        question: "Wakulima wa Kenya wanaweza kukabiliana na mvua isiyo ya kawaida vipi?",
        type: "single",
        options: [
            { icon: "🌱", text: "Kupanda mazao mbalimbali na kuhifadhi maji" },
            { icon: "🌧️", text: "Kusubiri mvua" },
            { icon: "☀️", text: "Kusubiri jua" },
            { icon: "💨", text: "Kusubiri upepo" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Kupanda mazao mengi na kuhifadhi maji ni mikakati mizuri."
    },
    {
        question: "Climate-resilient crop varieties zinasaidiaje?",
        type: "single",
        options: [
            { icon: "🌾", text: "Zinastahimili ukame na mafuriko" },
            { icon: "💰", text: "Zinapunguza bei" },
            { icon: "👨‍🌾", text: "Zinapunguza kazi" },
            { icon: "🚜", text: "Zinaongeza mashine" }
        ],
        answer: 0,
        explanation: "Vizuri! Aina hizi zimefanywa kustahimili hali mbaya ya hewa."
    },
    {
        question: "Crop diversification inahusiana vipi na hali ya hewa?",
        type: "single",
        options: [
            { icon: "🌿", text: "Mazao mengi yanapunguza hatari" },
            { icon: "🌧️", text: "Huleta mvua zaidi" },
            { icon: "☀️", text: "Huleta jua zaidi" },
            { icon: "💨", text: "Huleta upepo zaidi" }
        ],
        answer: 0,
        explanation: "Umefanya vizuri! Kupanda mazao mengi kunapunguza hatari ya kupoteza yote."
    },
    {
        question: "Water harvesting structures ni zipi?",
        type: "single",
        options: [
            { icon: "💧", text: "Mabwawa, matangi, na mikebe" },
            { icon: "🏠", text: "Nyumba za kulala" },
            { icon: "🚗", text: "Maegesho ya magari" },
            { icon: "🏭", text: "Viwanda" }
        ],
        answer: 0,
        explanation: "Sawa! Miundo hii inakusanya na kuhifadhi maji ya mvua."
    },
    {
        question: "Index-based livestock insurance (IBLI) inafanya kazi vipi?",
        type: "single",
        options: [
            { icon: "🐄", text: "Hulipa kulingana na hali ya malisho" },
            { icon: "💰", text: "Hulipa kila mwezi" },
            { icon: "📅", text: "Hulipa kila mwaka" },
            { icon: "🏠", text: "Hulipa kwa nyumba" }
        ],
        answer: 0,
        explanation: "Vizuri sana! IBLI inatumia satellite kuona hali ya malisho na kulipa."
    },
    {
        question: "Community-based adaptation ni nini?",
        type: "single",
        options: [
            { icon: "👨‍👩‍👧‍👦", text: "Jamii inashirikiana kukabiliana na mabadiliko" },
            { icon: "👨‍🌾", text: "Mkulima mmoja peke yake" },
            { icon: "🏭", text: "Viwanda peke yake" },
            { icon: "🏛️", text: "Serikali peke yake" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Kufanya kazi pamoja kunasaidia kukabiliana na changamoto."
    },
    {
        question: "Early maturing varieties zinasaidiaje?",
        type: "single",
        options: [
            { icon: "⏰", text: "Zinakuwa haraka, hivyo zinaepuka ukame" },
            { icon: "🐌", text: "Zinakuwa polepole" },
            { icon: "💰", text: "Zinagharimu zaidi" },
            { icon: "👨‍🌾", text: "Zinahitaji kazi zaidi" }
        ],
        answer: 0,
        explanation: "Vizuri! Aina za mapema zinaweza kuvunwa kabla ya ukame kuanza."
    },
    {
        question: "Zai pits ni nini na zinasaidiaje?",
        type: "single",
        options: [
            { icon: "🕳️", text: "Mashimo yanayokusanya maji na mbolea" },
            { icon: "🏠", text: "Nyumba ndogo" },
            { icon: "🐄", text: "Banda la ng'ombe" },
            { icon: "🌳", text: "Shimo la mti" }
        ],
        answer: 0,
        explanation: "Umefanya vizuri! Zai pits zinakusanya maji na mbolea kwa mimea."
    },
    {
        question: "Contour farming inasaidiaje wakati wa mvua?",
        type: "single",
        options: [
            { icon: "🌾", text: "Hupunguza mmomonyoko na kuhifadhi maji" },
            { icon: "☀️", text: "Huongeza jua" },
            { icon: "💨", text: "Huongeza upepo" },
            { icon: "❄️", text: "Huongeza baridi" }
        ],
        answer: 0,
        explanation: "Sawa! Kulima kwa kufuata contour kunazuia maji kukimbia haraka."
    },
    {
        question: "Agroecological zones zinatumika vipi kupanga kilimo?",
        type: "single",
        options: [
            { icon: "🗺️", text: "Zinaonyesha mazao yanayofaa kwa eneo" },
            { icon: "🌧️", text: "Zinaonyesha mvua tu" },
            { icon: "☀️", text: "Zinaonyesha jua tu" },
            { icon: "💨", text: "Zinaonyesha upepo tu" }
        ],
        answer: 0,
        explanation: "Vizuri sana! Zones zinasaidia kuchagua mazao yanayofaa kwa hali ya hewa."
    }
];

const module8_level10 = [
    {
        question: "Katika muktadha wa Kenya, mikakati gani ya kukabiliana na climate change ni bora?",
        type: "single",
        options: [
            { icon: "🌍", text: "Mazao yanayostahimili, umwagiliaji, na agroforestry" },
            { icon: "🌧️", text: "Kusubiri mvua tu" },
            { icon: "🔥", text: "Kuchoma mashamba" },
            { icon: "💨", text: "Kusubiri upepo" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Kenya inahitaji mkakati wa pamoja: mazao bora, maji, na miti."
    },
    {
        question: "Kenya Climate Smart Agriculture Project (KCSAP) inafanya nini?",
        type: "single",
        options: [
            { icon: "🇰🇪", text: "Husaidia wakulima kukabiliana na climate change" },
            { icon: "🌧️", text: "Huleta mvua" },
            { icon: "☀️", text: "Huleta jua" },
            { icon: "💨", text: "Huleta upepo" }
        ],
        answer: 0,
        explanation: "Vizuri! KCSAP inasaidia wakulima wa Kenya kwa teknolojia na maarifa."
    },
    {
        question: "Nationally Determined Contributions (NDCs) zinahusiana vipi na kilimo?",
        type: "single",
        options: [
            { icon: "🌍", text: "Nchi zinaahidi kupunguza emissions kutoka kilimo" },
            { icon: "💰", text: "Zinahusiana na pesa tu" },
            { icon: "🚗", text: "Zinahusiana na magari tu" },
            { icon: "🏠", text: "Zinahusiana na nyumba tu" }
        ],
        answer: 0,
        explanation: "Umefanya vizuri! NDCs ni ahadi za nchi kupunguza greenhouse gases."
    },
    {
        question: "Digital extension services zinasaidiaje wakulima kujua hali ya hewa?",
        type: "single",
        options: [
            { icon: "📱", text: "Hutuma taarifa za hewa na ushauri kwa simu" },
            { icon: "🌧️", text: "Huleta mvua" },
            { icon: "☀️", text: "Huleta jua" },
            { icon: "💨", text: "Huleta upepo" }
        ],
        answer: 0,
        explanation: "Sawa! Apps na SMS hutuma taarifa za hali ya hewa kwa wakulima."
    },
    {
        question: "Climate risk assessment shambani inafanywa vipi?",
        type: "single",
        options: [
            { icon: "📊", text: "Kupima hatari za hali ya hewa kwa mazao" },
            { icon: "🌧️", text: "Kupima mvua tu" },
            { icon: "☀️", text: "Kupima jua tu" },
            { icon: "💨", text: "Kupima upepo tu" }
        ],
        answer: 0,
        explanation: "Vizuri sana! Assessment inapima hatari zote za hali ya hewa kwa shamba."
    },
    {
        question: "Climate-proofing ya kilimo ni nini?",
        type: "single",
        options: [
            { icon: "🛡️", text: "Kufanya kilimo kistahimili mabadiliko ya hewa" },
            { icon: "🌧️", text: "Kuleta mvua zaidi" },
            { icon: "☀️", text: "Kuleta jua zaidi" },
            { icon: "💨", text: "Kuleta upepo zaidi" }
        ],
        answer: 0,
        explanation: "Sawa kabisa! Climate-proofing ni kuhakikisha kilimo kinafanya kazi hata hewa ikibadilika."
    },
    {
        question: "Green bonds na climate finance zinasaidiaje kilimo?",
        type: "single",
        options: [
            { icon: "💵", text: "Hutoa pesa kwa miradi ya kilimo endelevu" },
            { icon: "🌧️", text: "Huleta mvua" },
            { icon: "☀️", text: "Huleta jua" },
            { icon: "💨", text: "Huleta upepo" }
        ],
        answer: 0,
        explanation: "Vizuri! Climate finance inasaidia wakulima kupata pesa kwa miradi bora."
    },
    {
        question: "Carbon credits kutoka kilimo ni nini?",
        type: "single",
        options: [
            { icon: "🌱", text: "Malipo kwa kuhifadhi carbon ardhini" },
            { icon: "💳", text: "Kadi ya benki" },
            { icon: "📚", text: "Alama za shule" },
            { icon: "🎫", text: "Tiketi za basi" }
        ],
        answer: 0,
        explanation: "Umefanya vizuri! Wakulima wanaweza kupata pesa kwa kuhifadhi carbon."
    },
    {
        question: "Regenerative agriculture inahusiana vipi na climate?",
        type: "single",
        options: [
            { icon: "🌿", text: "Inaboresha udongo na kuhifadhi carbon" },
            { icon: "🔥", text: "Inaongeza moto" },
            { icon: "❄️", text: "Inaongeza baridi" },
            { icon: "💨", text: "Inaongeza upepo" }
        ],
        answer: 0,
        explanation: "Sawa! Regenerative agriculture inaboresha afya ya udongo na kuhifadhi carbon."
    },
    {
        question: "Jumla ya maarifa: Je, mkulima wa Kenya anapaswa kufanya nini kukabiliana na climate change?",
        type: "single",
        options: [
            { icon: "🌍", text: "Kutumia taarifa za hewa, mazao bora, na kilimo endelevu" },
            { icon: "🌧️", text: "Kusubiri mvua tu" },
            { icon: "❌", text: "Kuacha kilimo" },
            { icon: "💰", text: "Kuuza shamba" }
        ],
        answer: 0,
        explanation: "Vizuri sana! Mkulima mzuri anatumia taarifa za hewa, anachagua mazao bora, na analinda udongo."
    }
];

// Export all levels
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        module8_level1,
        module8_level2,
        module8_level3,
        module8_level4,
        module8_level5,
        module8_level6,
        module8_level7,
        module8_level8,
        module8_level9,
        module8_level10
    };
}
