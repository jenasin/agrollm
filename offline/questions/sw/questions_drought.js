// Drought & Climate Adaptation Questions - Swahili
// Maswali ya Ukame na Kukabiliana na Hali ya Hewa

const droughtQuestions = {
    // Level 1 - Misingi ya Ukame (5 questions - short intro)
    "drought_level1": [
        {
            question: "Ukame ni nini?",
            options: [
                { text: "🏜️ Kipindi kirefu bila mvua ya kutosha", isCorrect: true },
                { text: "🌧️ Mvua nyingi sana", isCorrect: false },
                { text: "❄️ Theluji nyingi", isCorrect: false },
                { text: "🌊 Mafuriko makubwa", isCorrect: false }
            ]
        },
        {
            question: "Ukame unaathiri mimea vipi?",
            options: [
                { text: "🥀 Mimea inanyauka na kufa", isCorrect: true },
                { text: "🌿 Mimea inakuwa kijani zaidi", isCorrect: false },
                { text: "🌸 Maua mengi zaidi", isCorrect: false },
                { text: "📈 Mavuno yanaongezeka", isCorrect: false }
            ]
        },
        {
            question: "Nini dalili ya kwanza ya ukame kwenye mimea?",
            options: [
                { text: "🍂 Majani kunyauka na kujikunja", isCorrect: true },
                { text: "🟢 Majani kuwa makubwa", isCorrect: false },
                { text: "🌸 Maua mengi", isCorrect: false },
                { text: "🥜 Matunda makubwa", isCorrect: false }
            ]
        },
        {
            question: "Ukame unaweza kudumu kwa muda gani?",
            options: [
                { text: "📅 Wiki, miezi, au hata miaka", isCorrect: true },
                { text: "📅 Siku moja tu", isCorrect: false },
                { text: "📅 Saa moja", isCorrect: false },
                { text: "📅 Dakika kumi", isCorrect: false }
            ]
        },
        {
            question: "Wakulima wanaweza kujua ukame unakuja vipi?",
            options: [
                { text: "📻 Kusikiliza utabiri wa hali ya hewa", isCorrect: true },
                { text: "🎵 Kusikiliza muziki", isCorrect: false },
                { text: "📺 Kutazama filamu", isCorrect: false },
                { text: "🙈 Hakuna njia", isCorrect: false }
            ]
        }
    ],

    // Level 2 - Kuhifadhi Maji (6 questions)
    "drought_level2": [
        {
            question: "Kutandaza (mulching) kunasaidia vipi wakati wa ukame?",
            options: [
                { text: "💧 Kuhifadhi unyevu ardhini", isCorrect: true },
                { text: "🔥 Kuongeza joto", isCorrect: false },
                { text: "🌧️ Kuleta mvua", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Vifaa gani vinafaa kwa kutandaza?",
            options: [
                { text: "🌿 Majani makavu, nyasi, au maganda", isCorrect: true },
                { text: "🪨 Mawe makubwa", isCorrect: false },
                { text: "🛢️ Plastiki nyeusi", isCorrect: false },
                { text: "🧱 Matofali", isCorrect: false }
            ]
        },
        {
            question: "Wakati gani mzuri wa kumwagilia wakati wa ukame?",
            options: [
                { text: "🌅 Asubuhi au jioni", isCorrect: true },
                { text: "☀️ Saa sita mchana", isCorrect: false },
                { text: "🌡️ Wakati wa joto kali", isCorrect: false },
                { text: "🚫 Kamwe", isCorrect: false }
            ]
        },
        {
            question: "Kuvuna maji ya mvua kunafanyikaje?",
            options: [
                { text: "🏠 Kukusanya maji kutoka paa kwenye tanki", isCorrect: true },
                { text: "☁️ Kungojea maji yashuke kutoka mawinguni", isCorrect: false },
                { text: "🏊 Kwenda kuogelea", isCorrect: false },
                { text: "🚫 Haiwezekani", isCorrect: false }
            ]
        },
        {
            question: "Umwagiliaji kwa matone (drip) una faida gani?",
            options: [
                { text: "💧 Kutumia maji kidogo lakini kwa ufanisi", isCorrect: true },
                { text: "🌊 Kutumia maji mengi sana", isCorrect: false },
                { text: "🔥 Kuongeza joto", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Mashimo ya kuhifadhi maji (water pans) yanasaidia nini?",
            options: [
                { text: "💧 Kuhifadhi maji ya mvua kwa msimu wa ukame", isCorrect: true },
                { text: "🐟 Kufuga samaki tu", isCorrect: false },
                { text: "🏊 Kuogelea", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        }
    ],

    // Level 3 - Mazao Yanayostahimili Ukame (7 questions)
    "drought_level3": [
        {
            question: "Zao gani linastahimili ukame vizuri?",
            options: [
                { text: "🌾 Mtama (sorghum)", isCorrect: true },
                { text: "🍚 Mpunga (rice)", isCorrect: false },
                { text: "🥬 Lettuce", isCorrect: false },
                { text: "🍉 Tikiti maji", isCorrect: false }
            ]
        },
        {
            question: "Kwa nini kunde (cowpeas) ni nzuri wakati wa ukame?",
            options: [
                { text: "🌿 Zinastahimili ukame na kurutubisha udongo", isCorrect: true },
                { text: "💧 Zinahitaji maji mengi", isCorrect: false },
                { text: "❄️ Zinapenda baridi", isCorrect: false },
                { text: "🚫 Si nzuri", isCorrect: false }
            ]
        },
        {
            question: "Muhogo (cassava) unastahimili ukame kwa sababu gani?",
            options: [
                { text: "🥔 Una mizizi mikubwa inayohifadhi maji", isCorrect: true },
                { text: "🍃 Una majani madogo", isCorrect: false },
                { text: "🌳 Ni mti mrefu", isCorrect: false },
                { text: "🚫 Haustahimili ukame", isCorrect: false }
            ]
        },
        {
            question: "Aina gani ya mahindi inafaa kwa maeneo ya ukame?",
            options: [
                { text: "🌽 Aina za mapema na zinazostahimili ukame", isCorrect: true },
                { text: "🌽 Aina za kawaida", isCorrect: false },
                { text: "🌽 Aina za muda mrefu", isCorrect: false },
                { text: "🌽 Aina yoyote", isCorrect: false }
            ]
        },
        {
            question: "Wimbi (millet) linafaa kwa ukame kwa sababu gani?",
            options: [
                { text: "🌾 Linakomaa haraka na kustahimili joto", isCorrect: true },
                { text: "💧 Linahitaji maji mengi", isCorrect: false },
                { text: "❄️ Linapenda baridi", isCorrect: false },
                { text: "🌧️ Linahitaji mvua nyingi", isCorrect: false }
            ]
        },
        {
            question: "Nini faida ya kupanda mazao mchanganyiko wakati wa ukame?",
            options: [
                { text: "🌿 Kupunguza hatari - kama moja linashindwa, lingine linabaki", isCorrect: true },
                { text: "📉 Kupunguza mavuno", isCorrect: false },
                { text: "🐛 Kuvutia wadudu", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Mbegu za aina zinazostahimili ukame zinapatikana wapi?",
            options: [
                { text: "🏪 Vituo vya kilimo na maduka ya mbegu", isCorrect: true },
                { text: "🏪 Maduka ya nguo", isCorrect: false },
                { text: "🏥 Hospitali", isCorrect: false },
                { text: "🚫 Hazipatikani", isCorrect: false }
            ]
        }
    ],

    // Level 4 - Utunzaji wa Udongo (8 questions)
    "drought_level4": [
        {
            question: "Udongo ulio na afya unasaidia vipi wakati wa ukame?",
            options: [
                { text: "💧 Unahifadhi maji vizuri zaidi", isCorrect: true },
                { text: "🔥 Unakuwa na joto zaidi", isCorrect: false },
                { text: "🌧️ Unaleta mvua", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Mbolea ya samadi inasaidia udongo vipi wakati wa ukame?",
            options: [
                { text: "🌿 Inaboresha uwezo wa kuhifadhi maji", isCorrect: true },
                { text: "🔥 Inachoma mizizi", isCorrect: false },
                { text: "💧 Inapunguza maji", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Kulima kwa mistari ya kontua (contour farming) kunasaidia nini?",
            options: [
                { text: "💧 Kuzuia maji kutiririka na kupotea", isCorrect: true },
                { text: "🌧️ Kuleta mvua zaidi", isCorrect: false },
                { text: "🔥 Kuongeza joto", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Kwa nini ni vizuri kufunika udongo wakati wa ukame?",
            options: [
                { text: "☀️ Kuzuia jua kuchomea udongo na kupoteza maji", isCorrect: true },
                { text: "🌧️ Kuleta mvua", isCorrect: false },
                { text: "❄️ Kuleta baridi kali", isCorrect: false },
                { text: "🚫 Si vizuri", isCorrect: false }
            ]
        },
        {
            question: "Kilimo cha uhifadhi (conservation agriculture) ni nini?",
            options: [
                { text: "🌿 Kulima kidogo, kufunika udongo, na kubadilisha mazao", isCorrect: true },
                { text: "🔥 Kuchoma mashamba", isCorrect: false },
                { text: "🚜 Kulima sana", isCorrect: false },
                { text: "🚫 Kutolima kabisa", isCorrect: false }
            ]
        },
        {
            question: "Mashimo ya maji (zai pits) yanasaidia vipi wakati wa ukame?",
            options: [
                { text: "💧 Kukusanya maji na mbolea kwa mimea", isCorrect: true },
                { text: "🐟 Kufuga samaki", isCorrect: false },
                { text: "🏊 Kuogelea", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Kupanda nyasi au mimea kati ya mazao kunasaidia nini?",
            options: [
                { text: "🌿 Kuzuia mmomonyoko na kuhifadhi unyevu", isCorrect: true },
                { text: "🔥 Kuongeza joto", isCorrect: false },
                { text: "📉 Kupunguza mavuno", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Biochar ni nini na inasaidia vipi wakati wa ukame?",
            options: [
                { text: "🔥 Mkaa wa mimea unaoboresha udongo na kuhifadhi maji", isCorrect: true },
                { text: "🧱 Jiwe la kujenga", isCorrect: false },
                { text: "🧪 Kemikali hatari", isCorrect: false },
                { text: "🚫 Haina faida", isCorrect: false }
            ]
        }
    ],

    // Level 5 - Mifugo na Ukame (8 questions)
    "drought_level5": [
        {
            question: "Mifugo inaathiriwa vipi na ukame?",
            options: [
                { text: "🐄 Kukosa maji na chakula", isCorrect: true },
                { text: "📈 Kunenepa zaidi", isCorrect: false },
                { text: "🥛 Kutoa maziwa mengi", isCorrect: false },
                { text: "🚫 Haiathiriwi", isCorrect: false }
            ]
        },
        {
            question: "Mfugo gani anastahimili ukame vizuri zaidi?",
            options: [
                { text: "🐐 Mbuzi", isCorrect: true },
                { text: "🐄 Ng'ombe wa maziwa", isCorrect: false },
                { text: "🐷 Nguruwe", isCorrect: false },
                { text: "🐔 Kuku wa mayai", isCorrect: false }
            ]
        },
        {
            question: "Wakati wa ukame, mifugo inapaswa kupewa maji mara ngapi?",
            options: [
                { text: "💧 Angalau mara 2-3 kwa siku", isCorrect: true },
                { text: "💧 Mara moja kwa wiki", isCorrect: false },
                { text: "💧 Mara moja kwa mwezi", isCorrect: false },
                { text: "💧 Hawahitaji maji", isCorrect: false }
            ]
        },
        {
            question: "Chakula gani kinafaa kwa mifugo wakati wa ukame?",
            options: [
                { text: "🌿 Nyasi zilizohifadhiwa (hay) na mashudu", isCorrect: true },
                { text: "🍬 Pipi na sukari", isCorrect: false },
                { text: "🍕 Pizza", isCorrect: false },
                { text: "🚫 Hakuna chakula", isCorrect: false }
            ]
        },
        {
            question: "Kupunguza idadi ya mifugo wakati wa ukame kunasaidia nini?",
            options: [
                { text: "🐄 Kuwepo chakula na maji ya kutosha kwa waliobaki", isCorrect: true },
                { text: "📉 Kupoteza pesa", isCorrect: false },
                { text: "🔥 Kuongeza joto", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Miti kama mgama (acacia) inasaidia mifugo vipi wakati wa ukame?",
            options: [
                { text: "🌳 Inatoa majani na kivuli", isCorrect: true },
                { text: "🔥 Inachoma mifugo", isCorrect: false },
                { text: "💧 Inapunguza maji", isCorrect: false },
                { text: "🚫 Hakuna msaada", isCorrect: false }
            ]
        },
        {
            question: "Kuhifadhi nyasi kwa msimu wa ukame kunafanyikaje?",
            options: [
                { text: "🌿 Kukata na kukausha wakati wa mvua", isCorrect: true },
                { text: "🔥 Kuchoma nyasi", isCorrect: false },
                { text: "💧 Kuloweka majini", isCorrect: false },
                { text: "🚫 Haiwezekani", isCorrect: false }
            ]
        },
        {
            question: "Bima ya mifugo inasaidia vipi wakati wa ukame?",
            options: [
                { text: "🛡️ Kulipa fidia kama mifugo ikifa", isCorrect: true },
                { text: "🌧️ Kuleta mvua", isCorrect: false },
                { text: "🍃 Kulea mifugo", isCorrect: false },
                { text: "🚫 Hakuna msaada", isCorrect: false }
            ]
        }
    ],

    // Level 6 - Teknolojia za Ukame (8 questions)
    "drought_level6": [
        {
            question: "Simu za mkononi zinasaidia vipi wakati wa ukame?",
            options: [
                { text: "📱 Kupata taarifa za hali ya hewa na masoko", isCorrect: true },
                { text: "🌧️ Kuleta mvua", isCorrect: false },
                { text: "💧 Kutoa maji", isCorrect: false },
                { text: "🚫 Hazisaidii", isCorrect: false }
            ]
        },
        {
            question: "Sensori za unyevu wa udongo zinafanya nini?",
            options: [
                { text: "💧 Kupima unyevu na kusaidia kumwagilia kwa ufanisi", isCorrect: true },
                { text: "🌧️ Kuleta mvua", isCorrect: false },
                { text: "🔥 Kuongeza joto", isCorrect: false },
                { text: "🚫 Hazifanyi chochote", isCorrect: false }
            ]
        },
        {
            question: "Greenhouse (nyumba ya kijani) inasaidia vipi wakati wa ukame?",
            options: [
                { text: "🏠 Kupunguza uvukizi na kudhibiti hali ya hewa", isCorrect: true },
                { text: "🌧️ Kuleta mvua ndani", isCorrect: false },
                { text: "❄️ Kuleta baridi kali", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Mfumo wa umwagiliaji wa kiotomatiki una faida gani?",
            options: [
                { text: "💧 Kutumia maji kidogo na kwa wakati unaofaa", isCorrect: true },
                { text: "🌊 Kutumia maji mengi", isCorrect: false },
                { text: "🔥 Kuongeza joto", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Utabiri wa hali ya hewa kwa satelaiti unasaidia nini?",
            options: [
                { text: "📡 Kujua mvua itakuja lini na kiasi", isCorrect: true },
                { text: "🎵 Kucheza muziki", isCorrect: false },
                { text: "📺 Kutazama filamu", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Mifumo ya kusukuma maji kwa nguvu ya jua inafaa kwa nini?",
            options: [
                { text: "☀️ Hakuna gharama ya mafuta na umeme", isCorrect: true },
                { text: "🌧️ Kuleta mvua", isCorrect: false },
                { text: "❄️ Kuleta baridi", isCorrect: false },
                { text: "🚫 Haifai", isCorrect: false }
            ]
        },
        {
            question: "Programu za simu za kilimo zinaweza kutoa taarifa gani?",
            options: [
                { text: "📱 Bei za soko, hali ya hewa, na ushauri wa kilimo", isCorrect: true },
                { text: "🎮 Michezo ya video", isCorrect: false },
                { text: "🎵 Muziki tu", isCorrect: false },
                { text: "🚫 Hakuna taarifa", isCorrect: false }
            ]
        },
        {
            question: "Hydroponics (kilimo cha maji) kinasaidia vipi wakati wa ukame?",
            options: [
                { text: "💧 Kutumia maji asilimia 90 chini ya kilimo cha kawaida", isCorrect: true },
                { text: "🌊 Kutumia maji mengi sana", isCorrect: false },
                { text: "🔥 Kuongeza joto", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        }
    ],

    // Level 7 - Mipango na Maandalizi (7 questions)
    "drought_level7": [
        {
            question: "Wakulima wanapaswa kuanza maandalizi ya ukame lini?",
            options: [
                { text: "📅 Mwanzo wa msimu wa mvua (kabla ya ukame)", isCorrect: true },
                { text: "📅 Baada ya ukame kuisha", isCorrect: false },
                { text: "📅 Wakati wa ukame mkali", isCorrect: false },
                { text: "📅 Hakuna haja ya maandalizi", isCorrect: false }
            ]
        },
        {
            question: "Kuhifadhi mbegu kunasaidia vipi kwa ukame ujao?",
            options: [
                { text: "🌱 Kuwa na mbegu za kupanda msimu ujao", isCorrect: true },
                { text: "💰 Kupoteza pesa", isCorrect: false },
                { text: "🔥 Kuchoma mbegu", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Akiba ya fedha inasaidia vipi wakati wa ukame?",
            options: [
                { text: "💰 Kununua chakula na mahitaji mengine", isCorrect: true },
                { text: "🌧️ Kuleta mvua", isCorrect: false },
                { text: "💧 Kununua maji mengi", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Vikundi vya wakulima vinasaidia vipi wakati wa ukame?",
            options: [
                { text: "🤝 Kusaidiana na kubadilishana rasilimali", isCorrect: true },
                { text: "🔥 Kupigana", isCorrect: false },
                { text: "💰 Kupoteza pesa", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Rekodi za hali ya hewa za zamani zinasaidia nini?",
            options: [
                { text: "📊 Kujua mifumo ya ukame na kupanga vizuri", isCorrect: true },
                { text: "🎵 Kucheza muziki", isCorrect: false },
                { text: "📺 Kutazama filamu", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Mipango ya dharura ya ukame inapaswa kujumuisha nini?",
            options: [
                { text: "📋 Akiba ya maji, chakula, mbegu, na fedha", isCorrect: true },
                { text: "🎮 Michezo ya video", isCorrect: false },
                { text: "🎵 Muziki", isCorrect: false },
                { text: "🚫 Hakuna mpango", isCorrect: false }
            ]
        },
        {
            question: "Serikali na mashirika yanasaidia vipi wakati wa ukame?",
            options: [
                { text: "🏛️ Kusambaza chakula, maji, na msaada wa dharura", isCorrect: true },
                { text: "🎵 Kucheza muziki", isCorrect: false },
                { text: "🔥 Kuchoma mashamba", isCorrect: false },
                { text: "🚫 Hawasaidii", isCorrect: false }
            ]
        }
    ],

    // Level 8 - Mabadiliko ya Hali ya Hewa (8 questions)
    "drought_level8": [
        {
            question: "Mabadiliko ya hali ya hewa yanasababisha nini?",
            options: [
                { text: "🌡️ Ukame zaidi, mvua isiyotabirika, na joto kupanda", isCorrect: true },
                { text: "❄️ Theluji kila siku", isCorrect: false },
                { text: "🌧️ Mvua kila siku", isCorrect: false },
                { text: "🚫 Hakuna mabadiliko", isCorrect: false }
            ]
        },
        {
            question: "Gesi za chafu (greenhouse gases) zinaathiri hali ya hewa vipi?",
            options: [
                { text: "🌡️ Zinafanya dunia kuwa na joto zaidi", isCorrect: true },
                { text: "❄️ Zinafanya baridi zaidi", isCorrect: false },
                { text: "🌧️ Zinaleta mvua kila siku", isCorrect: false },
                { text: "🚫 Hakuna athari", isCorrect: false }
            ]
        },
        {
            question: "Wakulima wanaweza kupunguza gesi za chafu vipi?",
            options: [
                { text: "🌳 Kupanda miti na kutumia mbolea ya asili", isCorrect: true },
                { text: "🔥 Kuchoma plastiki", isCorrect: false },
                { text: "🚗 Kutumia magari mengi", isCorrect: false },
                { text: "🏭 Kuongeza viwanda", isCorrect: false }
            ]
        },
        {
            question: "Kilimo cha hali ya hewa (climate-smart agriculture) ni nini?",
            options: [
                { text: "🌍 Kilimo kinachostahimili mabadiliko na kupunguza athari", isCorrect: true },
                { text: "🔥 Kutumia kemikali nyingi", isCorrect: false },
                { text: "🏭 Kuchafua mazingira", isCorrect: false },
                { text: "🚫 Hakuna kilimo", isCorrect: false }
            ]
        },
        {
            question: "Kupanda miti kunasaidia vipi dhidi ya mabadiliko ya hali ya hewa?",
            options: [
                { text: "🌳 Kunafyonza kaboni dioksidi na kuleta mvua", isCorrect: true },
                { text: "🔥 Kuongeza joto", isCorrect: false },
                { text: "💨 Kuchafua hewa", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Nchi gani zinaathiriwa zaidi na mabadiliko ya hali ya hewa?",
            options: [
                { text: "🌍 Nchi za Afrika na visiwa vidogo", isCorrect: true },
                { text: "❄️ Nchi za Ulaya tu", isCorrect: false },
                { text: "🏔️ Nchi za milimani tu", isCorrect: false },
                { text: "🚫 Hakuna nchi", isCorrect: false }
            ]
        },
        {
            question: "Kilimo cha kuzingatia mazingira (sustainable farming) kinajumuisha nini?",
            options: [
                { text: "🌿 Kutunza udongo, maji, na bioanuwai", isCorrect: true },
                { text: "🔥 Kuchoma mashamba", isCorrect: false },
                { text: "🧪 Kutumia kemikali nyingi", isCorrect: false },
                { text: "🚫 Kutokujali mazingira", isCorrect: false }
            ]
        },
        {
            question: "Makubaliano ya Paris (Paris Agreement) yanalenga nini?",
            options: [
                { text: "🌍 Kupunguza ongezeko la joto duniani", isCorrect: true },
                { text: "🔥 Kuongeza joto", isCorrect: false },
                { text: "💨 Kuchafua hewa zaidi", isCorrect: false },
                { text: "🚫 Hakuna lengo", isCorrect: false }
            ]
        }
    ],

    // Level 9 - Hatua za Jumuiya (8 questions)
    "drought_level9": [
        {
            question: "Jumuiya inaweza kusaidiana vipi wakati wa ukame?",
            options: [
                { text: "🤝 Kushiriki maji, chakula, na rasilimali", isCorrect: true },
                { text: "🔥 Kupigana", isCorrect: false },
                { text: "🙈 Kujificha", isCorrect: false },
                { text: "🚫 Hakuna njia", isCorrect: false }
            ]
        },
        {
            question: "Vyama vya ushirika wa maji vinasaidia nini?",
            options: [
                { text: "💧 Kusimamia na kugawana maji kwa haki", isCorrect: true },
                { text: "🔥 Kuchoma mashamba", isCorrect: false },
                { text: "🎵 Kucheza muziki", isCorrect: false },
                { text: "🚫 Hakuna msaada", isCorrect: false }
            ]
        },
        {
            question: "Maarifa ya jadi ya ukame yanaweza kusaidia vipi?",
            options: [
                { text: "🧓 Kujua dalili za asili na mbinu za zamani", isCorrect: true },
                { text: "📱 Kutumia simu za kisasa tu", isCorrect: false },
                { text: "🚫 Hayasaidii", isCorrect: false },
                { text: "🔥 Kuchoma mashamba", isCorrect: false }
            ]
        },
        {
            question: "Kampeni za upandaji miti zinafanyikaje?",
            options: [
                { text: "🌳 Jumuiya inashiriki kupanda miti kwa pamoja", isCorrect: true },
                { text: "🔥 Kukata miti yote", isCorrect: false },
                { text: "🙈 Kukaa nyumbani", isCorrect: false },
                { text: "🚫 Hazifanyiki", isCorrect: false }
            ]
        },
        {
            question: "Shule zinaweza kufundisha nini kuhusu ukame?",
            options: [
                { text: "📚 Kuhifadhi maji, mazingira, na kilimo bora", isCorrect: true },
                { text: "🎮 Michezo ya video tu", isCorrect: false },
                { text: "🔥 Kuchoma miti", isCorrect: false },
                { text: "🚫 Hakuna la kufundisha", isCorrect: false }
            ]
        },
        {
            question: "Wanawake wana jukumu gani wakati wa ukame?",
            options: [
                { text: "👩 Kusimamia maji, chakula, na familia", isCorrect: true },
                { text: "🙈 Kukaa nyumbani tu", isCorrect: false },
                { text: "🚫 Hawana jukumu", isCorrect: false },
                { text: "🔥 Kuchoma mashamba", isCorrect: false }
            ]
        },
        {
            question: "Vijana wanaweza kusaidia vipi wakati wa ukame?",
            options: [
                { text: "👨‍💻 Kutumia teknolojia na nguvu zao kusaidia", isCorrect: true },
                { text: "🎮 Kucheza tu", isCorrect: false },
                { text: "🙈 Kukaa ndani", isCorrect: false },
                { text: "🚫 Hawawezi kusaidia", isCorrect: false }
            ]
        },
        {
            question: "Habari na vyombo vya habari vinasaidia vipi wakati wa ukame?",
            options: [
                { text: "📻 Kutoa taarifa na kuhamasisha msaada", isCorrect: true },
                { text: "🔥 Kusababisha hofu tu", isCorrect: false },
                { text: "🎵 Kucheza muziki tu", isCorrect: false },
                { text: "🚫 Havisaidii", isCorrect: false }
            ]
        }
    ],

    // Level 10 - Mustakabali na Ubunifu (8 questions)
    "drought_level10": [
        {
            question: "Teknolojia mpya zinaweza kusaidia vipi dhidi ya ukame?",
            options: [
                { text: "🔬 Mbegu bora, umwagiliaji wa kisasa, na utabiri", isCorrect: true },
                { text: "🔥 Kuchoma zaidi", isCorrect: false },
                { text: "🚫 Hazisaidii", isCorrect: false },
                { text: "💨 Kuchafua hewa", isCorrect: false }
            ]
        },
        {
            question: "Mbegu zilizofanyiwa utafiti (improved seeds) zina faida gani?",
            options: [
                { text: "🌱 Zinastahimili ukame na kutoa mavuno mengi", isCorrect: true },
                { text: "📉 Zina mavuno madogo", isCorrect: false },
                { text: "💧 Zinahitaji maji mengi", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Mashamba ya anga (vertical farms) yanasaidia vipi?",
            options: [
                { text: "🏢 Kuzalisha chakula kwa maji kidogo sana", isCorrect: true },
                { text: "🌊 Kutumia maji mengi", isCorrect: false },
                { text: "🔥 Kuongeza joto", isCorrect: false },
                { text: "🚫 Hayasaidii", isCorrect: false }
            ]
        },
        {
            question: "Artificial intelligence (AI) inaweza kusaidia kilimo vipi?",
            options: [
                { text: "🤖 Kutabiri hali ya hewa na kushauri wakulima", isCorrect: true },
                { text: "🔥 Kuchoma mashamba", isCorrect: false },
                { text: "🚫 Haisaidii", isCorrect: false },
                { text: "💧 Kuleta mvua", isCorrect: false }
            ]
        },
        {
            question: "Desalination (kutoa chumvi majini) inaweza kusaidia vipi?",
            options: [
                { text: "💧 Kufanya maji ya bahari yawe salama kwa umwagiliaji", isCorrect: true },
                { text: "🔥 Kuongeza chumvi", isCorrect: false },
                { text: "🌧️ Kuleta mvua", isCorrect: false },
                { text: "🚫 Haiwezekani", isCorrect: false }
            ]
        },
        {
            question: "Drone (ndege ndogo) zinasaidia kilimo vipi wakati wa ukame?",
            options: [
                { text: "📷 Kupima afya ya mimea na kumwagilia kwa usahihi", isCorrect: true },
                { text: "🌧️ Kuleta mvua", isCorrect: false },
                { text: "🔥 Kuchoma mashamba", isCorrect: false },
                { text: "🚫 Hazisaidii", isCorrect: false }
            ]
        },
        {
            question: "Nishati mbadala (renewable energy) inasaidia vipi wakati wa ukame?",
            options: [
                { text: "☀️ Kusukuma maji bila gharama ya mafuta", isCorrect: true },
                { text: "🔥 Kuongeza joto", isCorrect: false },
                { text: "💨 Kuchafua hewa", isCorrect: false },
                { text: "🚫 Hakuna faida", isCorrect: false }
            ]
        },
        {
            question: "Mustakabali wa kilimo unahitaji nini zaidi?",
            options: [
                { text: "🌍 Ushirikiano, teknolojia, na kujali mazingira", isCorrect: true },
                { text: "🔥 Kemikali zaidi", isCorrect: false },
                { text: "💨 Uchafuzi zaidi", isCorrect: false },
                { text: "🚫 Hakuna mabadiliko", isCorrect: false }
            ]
        }
    ]
};

window.droughtQuestions = droughtQuestions;
