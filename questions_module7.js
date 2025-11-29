// Modul 7: Živočišná Výroba - 100 otázek (10 levelů x 10 otázek)
const MODULE7_QUESTIONS = {
    // Level 1 - Základy chovu
    module7_level1: [
        {
            question: "Které zvíře je přežvýkavec?",
            type: "multiple_choice",
            options: [
                { text: "Kráva", icon: "🐄", isCorrect: true },
                { text: "Prase", icon: "🐷", isCorrect: false },
                { text: "Slepice", icon: "🐔", isCorrect: false },
                { text: "Kůň", icon: "🐴", isCorrect: false }
            ],
            explanation: "Kráva je přežvýkavec s čtyřkomorovým žaludkem, který umožňuje trávit travní porosty."
        },
        {
            question: "Kolik žaludkových komor má kráva?",
            type: "multiple_choice",
            options: [
                { text: "1", icon: "1️⃣", isCorrect: false },
                { text: "2", icon: "2️⃣", isCorrect: false },
                { text: "4", icon: "4️⃣", isCorrect: true },
                { text: "3", icon: "3️⃣", isCorrect: false }
            ],
            explanation: "Kráva má 4 žaludeční komory: bachor, čepec, kniha a slez."
        },
        {
            question: "Co je hlavní produkt dojnic?",
            type: "multiple_choice",
            options: [
                { text: "Mléko", icon: "🥛", isCorrect: true },
                { text: "Vejce", icon: "🥚", isCorrect: false },
                { text: "Vlna", icon: "🧶", isCorrect: false },
                { text: "Med", icon: "🍯", isCorrect: false }
            ],
            explanation: "Dojnice jsou krávy chované primárně pro produkci mléka."
        },
        {
            question: "Které zvíře snáší vejce?",
            type: "multiple_choice",
            options: [
                { text: "Slepice", icon: "🐔", isCorrect: true },
                { text: "Kráva", icon: "🐄", isCorrect: false },
                { text: "Prase", icon: "🐷", isCorrect: false },
                { text: "Ovce", icon: "🐑", isCorrect: false }
            ],
            explanation: "Slepice jsou drůbež chovaná pro produkci vajec a masa."
        },
        {
            question: "Co je selátko?",
            type: "multiple_choice",
            options: [
                { text: "Mládě prasete", icon: "🐷", isCorrect: true },
                { text: "Mládě krávy", icon: "🐄", isCorrect: false },
                { text: "Mládě ovce", icon: "🐑", isCorrect: false },
                { text: "Mládě kozy", icon: "🐐", isCorrect: false }
            ],
            explanation: "Selátko je mládě prasete, jehož matka se nazývá prasnice."
        },
        {
            question: "Z čeho se vyrábí vlna?",
            type: "multiple_choice",
            options: [
                { text: "Ze srsti ovcí", icon: "🐑", isCorrect: true },
                { text: "Z kravské kůže", icon: "🐄", isCorrect: false },
                { text: "Z prasečí štětiny", icon: "🐷", isCorrect: false },
                { text: "Ze slepičího peří", icon: "🐔", isCorrect: false }
            ],
            explanation: "Vlna se získává stříháním srsti ovcí, obvykle na jaře."
        },
        {
            question: "Jak se nazývá mládě krávy?",
            type: "multiple_choice",
            options: [
                { text: "Tele", icon: "🐄", isCorrect: true },
                { text: "Hříbě", icon: "🐴", isCorrect: false },
                { text: "Jehně", icon: "🐑", isCorrect: false },
                { text: "Kůzle", icon: "🐐", isCorrect: false }
            ],
            explanation: "Tele je mládě krávy do věku přibližně jednoho roku."
        },
        {
            question: "Co produkují včely?",
            type: "multiple_choice",
            options: [
                { text: "Med", icon: "🍯", isCorrect: true },
                { text: "Mléko", icon: "🥛", isCorrect: false },
                { text: "Vejce", icon: "🥚", isCorrect: false },
                { text: "Vlnu", icon: "🧶", isCorrect: false }
            ],
            explanation: "Včely produkují med z nektaru květin a také vosk a propolis."
        },
        {
            question: "Které zvíře dává kozí mléko?",
            type: "multiple_choice",
            options: [
                { text: "Koza", icon: "🐐", isCorrect: true },
                { text: "Ovce", icon: "🐑", isCorrect: false },
                { text: "Kráva", icon: "🐄", isCorrect: false },
                { text: "Kůň", icon: "🐴", isCorrect: false }
            ],
            explanation: "Koza produkuje kozí mléko, které je lehce stravitelné a vhodné pro alergiky."
        },
        {
            question: "Co je kurník?",
            type: "multiple_choice",
            options: [
                { text: "Příbytek pro slepice", icon: "🏠", isCorrect: true },
                { text: "Místo pro krávy", icon: "🐄", isCorrect: false },
                { text: "Domov pro prasata", icon: "🐷", isCorrect: false },
                { text: "Úl pro včely", icon: "🐝", isCorrect: false }
            ],
            explanation: "Kurník je stavba určená pro chov drůbeže, především slepic."
        }
    ],
    // Level 2 - Krmení zvířat
    module7_level2: [
        {
            question: "Co je základní krmivo pro krávy?",
            type: "multiple_choice",
            options: [
                { text: "Seno a tráva", icon: "🌾", isCorrect: true },
                { text: "Maso", icon: "🥩", isCorrect: false },
                { text: "Ryby", icon: "🐟", isCorrect: false },
                { text: "Ovoce", icon: "🍎", isCorrect: false }
            ],
            explanation: "Krávy jsou býložravci a jejich základem potravy je seno, tráva a siláž."
        },
        {
            question: "Co je siláž?",
            type: "multiple_choice",
            options: [
                { text: "Kvašená zelená píce", icon: "🌿", isCorrect: true },
                { text: "Sušené maso", icon: "🥩", isCorrect: false },
                { text: "Zmražené ovoce", icon: "🍇", isCorrect: false },
                { text: "Uzené seno", icon: "🌾", isCorrect: false }
            ],
            explanation: "Siláž je konzervovaná zelená píce pomocí mléčného kvašení bez přístupu vzduchu."
        },
        {
            question: "Čím krmíme slepice pro lepší snášku?",
            type: "multiple_choice",
            options: [
                { text: "Obilím a vápníkem", icon: "🌾", isCorrect: true },
                { text: "Jen vodou", icon: "💧", isCorrect: false },
                { text: "Masem", icon: "🥩", isCorrect: false },
                { text: "Cukrem", icon: "🍬", isCorrect: false }
            ],
            explanation: "Slepice potřebují obiloviny pro energii a vápník pro tvorbu vaječných skořápek."
        },
        {
            question: "Proč prasata potřebují bílkoviny?",
            type: "multiple_choice",
            options: [
                { text: "Pro růst svalů", icon: "💪", isCorrect: true },
                { text: "Pro barvu kůže", icon: "🎨", isCorrect: false },
                { text: "Pro lepší sluch", icon: "👂", isCorrect: false },
                { text: "Pro delší ocas", icon: "🐷", isCorrect: false }
            ],
            explanation: "Bílkoviny jsou nezbytné pro růst svalové hmoty a celkový vývoj prasat."
        },
        {
            question: "Co je koncentrované krmivo?",
            type: "multiple_choice",
            options: [
                { text: "Krmivo bohaté na živiny", icon: "🥣", isCorrect: true },
                { text: "Zředěná voda", icon: "💧", isCorrect: false },
                { text: "Pouze seno", icon: "🌾", isCorrect: false },
                { text: "Prázdná sláma", icon: "🥀", isCorrect: false }
            ],
            explanation: "Koncentráty jsou krmiva s vysokým obsahem energie a bílkovin (obilí, šroty)."
        },
        {
            question: "Kolikrát denně by měla být krmena prasata?",
            type: "multiple_choice",
            options: [
                { text: "2-3x denně", icon: "🕐", isCorrect: true },
                { text: "1x týdně", icon: "📅", isCorrect: false },
                { text: "10x denně", icon: "🔟", isCorrect: false },
                { text: "1x měsíčně", icon: "📆", isCorrect: false }
            ],
            explanation: "Prasata by měla být krmena pravidelně 2-3x denně pro optimální růst."
        },
        {
            question: "Proč je důležitá čerstvá voda pro zvířata?",
            type: "multiple_choice",
            options: [
                { text: "Pro trávení a zdraví", icon: "💧", isCorrect: true },
                { text: "Pro lepší barvu srsti", icon: "🎨", isCorrect: false },
                { text: "Není důležitá", icon: "❌", isCorrect: false },
                { text: "Pouze pro koupání", icon: "🛁", isCorrect: false }
            ],
            explanation: "Čerstvá voda je nezbytná pro trávení, termoregulaci a všechny životní funkce."
        },
        {
            question: "Co je minerální liz?",
            type: "multiple_choice",
            options: [
                { text: "Blok s minerály pro zvířata", icon: "🧂", isCorrect: true },
                { text: "Sladkost pro děti", icon: "🍭", isCorrect: false },
                { text: "Druh houby", icon: "🍄", isCorrect: false },
                { text: "Zemědělský stroj", icon: "🚜", isCorrect: false }
            ],
            explanation: "Minerální liz je blok obsahující sůl a minerály, který si zvířata olizují."
        },
        {
            question: "Jaké krmivo potřebují jehňata po odstavu?",
            type: "multiple_choice",
            options: [
                { text: "Kvalitní seno a koncentráty", icon: "🌾", isCorrect: true },
                { text: "Pouze vodu", icon: "💧", isCorrect: false },
                { text: "Maso", icon: "🥩", isCorrect: false },
                { text: "Zmrzlinu", icon: "🍦", isCorrect: false }
            ],
            explanation: "Po odstavu jehňata potřebují kvalitní seno a postupně koncentráty pro správný růst."
        },
        {
            question: "Co je TMR krmení?",
            type: "multiple_choice",
            options: [
                { text: "Celková směsná krmná dávka", icon: "🥗", isCorrect: true },
                { text: "Typ traktoru", icon: "🚜", isCorrect: false },
                { text: "Veterinární lék", icon: "💊", isCorrect: false },
                { text: "Druh obilí", icon: "🌾", isCorrect: false }
            ],
            explanation: "TMR (Total Mixed Ration) je kompletní směs všech krmiv v jedné dávce."
        }
    ],
    // Level 3 - Zdraví zvířat
    module7_level3: [
        {
            question: "Co je vakcinace zvířat?",
            type: "multiple_choice",
            options: [
                { text: "Očkování proti nemocem", icon: "💉", isCorrect: true },
                { text: "Krmení vitamíny", icon: "💊", isCorrect: false },
                { text: "Stříhání srsti", icon: "✂️", isCorrect: false },
                { text: "Čištění stáje", icon: "🧹", isCorrect: false }
            ],
            explanation: "Vakcinace je preventivní očkování, které chrání zvířata před infekčními nemocemi."
        },
        {
            question: "Proč je důležitá karanténa nových zvířat?",
            type: "multiple_choice",
            options: [
                { text: "Prevence šíření nemocí", icon: "🔒", isCorrect: true },
                { text: "Aby se naučila nové triky", icon: "🎪", isCorrect: false },
                { text: "Pro lepší chuť masa", icon: "🥩", isCorrect: false },
                { text: "Není důležitá", icon: "❌", isCorrect: false }
            ],
            explanation: "Karanténa zabraňuje zavlečení nemocí do stáda od nově přijatých zvířat."
        },
        {
            question: "Co je odčervení?",
            type: "multiple_choice",
            options: [
                { text: "Odstranění parazitů", icon: "🐛", isCorrect: true },
                { text: "Přidávání červů do krmiva", icon: "🪱", isCorrect: false },
                { text: "Barvení srsti", icon: "🎨", isCorrect: false },
                { text: "Trénink zvířat", icon: "🏋️", isCorrect: false }
            ],
            explanation: "Odčervení je léčba proti vnitřním parazitům (červům) pomocí antiparazitik."
        },
        {
            question: "Jaký je normální tělesná teplota krávy?",
            type: "multiple_choice",
            options: [
                { text: "38-39°C", icon: "🌡️", isCorrect: true },
                { text: "20-25°C", icon: "❄️", isCorrect: false },
                { text: "45-50°C", icon: "🔥", isCorrect: false },
                { text: "10-15°C", icon: "🥶", isCorrect: false }
            ],
            explanation: "Normální tělesná teplota krávy je 38-39°C, vyšší teplota značí horečku."
        },
        {
            question: "Co je mastitis?",
            type: "multiple_choice",
            options: [
                { text: "Zánět mléčné žlázy", icon: "🐄", isCorrect: true },
                { text: "Druh krmiva", icon: "🌾", isCorrect: false },
                { text: "Plemeno krávy", icon: "🏷️", isCorrect: false },
                { text: "Typ stáje", icon: "🏠", isCorrect: false }
            ],
            explanation: "Mastitis je bolestivý zánět vemene, který snižuje kvalitu i množství mléka."
        },
        {
            question: "Jak poznáme zdravou slepici?",
            type: "multiple_choice",
            options: [
                { text: "Červený hřebínek, lesklé peří", icon: "🐔", isCorrect: true },
                { text: "Bledý hřebínek, ospalost", icon: "😴", isCorrect: false },
                { text: "Nechce jíst", icon: "🚫", isCorrect: false },
                { text: "Neklade vejce", icon: "🥚", isCorrect: false }
            ],
            explanation: "Zdravá slepice má jasně červený hřebínek, lesklé peří a je aktivní."
        },
        {
            question: "Co je kulhání u skotu?",
            type: "multiple_choice",
            options: [
                { text: "Problém s končetinami", icon: "🦶", isCorrect: true },
                { text: "Druh tance", icon: "💃", isCorrect: false },
                { text: "Způsob krmení", icon: "🍽️", isCorrect: false },
                { text: "Typ dojení", icon: "🥛", isCorrect: false }
            ],
            explanation: "Kulhání je bolestivý problém paznehtů nebo končetin vyžadující veterinární péči."
        },
        {
            question: "Proč jsou důležité pravidelné prohlídky veterinářem?",
            type: "multiple_choice",
            options: [
                { text: "Včasné odhalení nemocí", icon: "👨‍⚕️", isCorrect: true },
                { text: "Jsou zbytečné", icon: "❌", isCorrect: false },
                { text: "Jen kvůli papírům", icon: "📄", isCorrect: false },
                { text: "Pro zábavu", icon: "🎉", isCorrect: false }
            ],
            explanation: "Pravidelné veterinární prohlídky umožňují včas odhalit a léčit zdravotní problémy."
        },
        {
            question: "Co je biosekurita na farmě?",
            type: "multiple_choice",
            options: [
                { text: "Ochrana před nákazami", icon: "🛡️", isCorrect: true },
                { text: "Typ pojištění", icon: "📋", isCorrect: false },
                { text: "Značka krmiva", icon: "🏷️", isCorrect: false },
                { text: "Druh traktoru", icon: "🚜", isCorrect: false }
            ],
            explanation: "Biosekurita zahrnuje opatření zabraňující zavlečení a šíření nemocí na farmě."
        },
        {
            question: "Jak často by se měly čistit stáje?",
            type: "multiple_choice",
            options: [
                { text: "Denně", icon: "📅", isCorrect: true },
                { text: "Jednou ročně", icon: "📆", isCorrect: false },
                { text: "Nikdy", icon: "❌", isCorrect: false },
                { text: "Pouze před inspekcí", icon: "👀", isCorrect: false }
            ],
            explanation: "Denní čištění stájí je nezbytné pro zdraví zvířat a prevenci nemocí."
        }
    ],
    // Level 4 - Reprodukce
    module7_level4: [
        {
            question: "Jak dlouho trvá březost krávy?",
            type: "multiple_choice",
            options: [
                { text: "Přibližně 9 měsíců (283 dní)", icon: "📅", isCorrect: true },
                { text: "3 měsíce", icon: "🗓️", isCorrect: false },
                { text: "1 rok", icon: "📆", isCorrect: false },
                { text: "2 týdny", icon: "⏰", isCorrect: false }
            ],
            explanation: "Březost krávy trvá přibližně 283 dní, tedy asi 9 měsíců."
        },
        {
            question: "Co je inseminace?",
            type: "multiple_choice",
            options: [
                { text: "Umělé oplodnění", icon: "💉", isCorrect: true },
                { text: "Krmení zvířat", icon: "🍽️", isCorrect: false },
                { text: "Léčba nemoci", icon: "💊", isCorrect: false },
                { text: "Stříhání srsti", icon: "✂️", isCorrect: false }
            ],
            explanation: "Inseminace je umělé oplodnění samice spermatem vybraného samce."
        },
        {
            question: "Kolik selat může mít prasnice v jednom vrhu?",
            type: "multiple_choice",
            options: [
                { text: "8-14 selat", icon: "🐷", isCorrect: true },
                { text: "1-2 selata", icon: "1️⃣", isCorrect: false },
                { text: "50 selat", icon: "5️⃣0️⃣", isCorrect: false },
                { text: "100 selat", icon: "💯", isCorrect: false }
            ],
            explanation: "Prasnice obvykle rodí 8-14 selat, někdy i více."
        },
        {
            question: "Co je říje u krávy?",
            type: "multiple_choice",
            options: [
                { text: "Období plodnosti", icon: "💕", isCorrect: true },
                { text: "Nemoc", icon: "🤒", isCorrect: false },
                { text: "Druh krmiva", icon: "🌾", isCorrect: false },
                { text: "Typ stáje", icon: "🏠", isCorrect: false }
            ],
            explanation: "Říje je období, kdy je kráva plodná a připravená k oplodnění."
        },
        {
            question: "Jak dlouho slepice sedí na vejcích?",
            type: "multiple_choice",
            options: [
                { text: "21 dní", icon: "🥚", isCorrect: true },
                { text: "3 dny", icon: "3️⃣", isCorrect: false },
                { text: "6 měsíců", icon: "📅", isCorrect: false },
                { text: "1 rok", icon: "📆", isCorrect: false }
            ],
            explanation: "Inkubace kuřecích vajec trvá 21 dní, než se vylíhnou kuřata."
        },
        {
            question: "Co je odchov mláďat?",
            type: "multiple_choice",
            options: [
                { text: "Péče o mladá zvířata", icon: "👶", isCorrect: true },
                { text: "Prodej zvířat", icon: "💰", isCorrect: false },
                { text: "Porážka zvířat", icon: "🔪", isCorrect: false },
                { text: "Transport zvířat", icon: "🚛", isCorrect: false }
            ],
            explanation: "Odchov je komplexní péče o mláďata od narození do dospělosti."
        },
        {
            question: "Proč je důležité mlezivo pro telata?",
            type: "multiple_choice",
            options: [
                { text: "Obsahuje protilátky", icon: "🛡️", isCorrect: true },
                { text: "Je levné", icon: "💰", isCorrect: false },
                { text: "Má hezkou barvu", icon: "🎨", isCorrect: false },
                { text: "Není důležité", icon: "❌", isCorrect: false }
            ],
            explanation: "Mlezivo je první mléko matky bohaté na protilátky nezbytné pro imunitu telete."
        },
        {
            question: "Co je odstav?",
            type: "multiple_choice",
            options: [
                { text: "Oddělení mláděte od matky", icon: "👋", isCorrect: true },
                { text: "Druh nemoci", icon: "🤒", isCorrect: false },
                { text: "Typ krmiva", icon: "🌾", isCorrect: false },
                { text: "Veterinární zákrok", icon: "💉", isCorrect: false }
            ],
            explanation: "Odstav je proces, kdy se mládě přestane kojit a začne přijímat pevnou stravu."
        },
        {
            question: "V jakém věku začínají slepice snášet vejce?",
            type: "multiple_choice",
            options: [
                { text: "18-22 týdnů", icon: "🐔", isCorrect: true },
                { text: "1 týden", icon: "1️⃣", isCorrect: false },
                { text: "5 let", icon: "5️⃣", isCorrect: false },
                { text: "Hned po vylíhnutí", icon: "🐣", isCorrect: false }
            ],
            explanation: "Slepice začínají snášet první vejce obvykle ve věku 18-22 týdnů."
        },
        {
            question: "Co je plemenná kniha?",
            type: "multiple_choice",
            options: [
                { text: "Evidence původu zvířat", icon: "📚", isCorrect: true },
                { text: "Kuchařka", icon: "👨‍🍳", isCorrect: false },
                { text: "Veterinární příručka", icon: "📖", isCorrect: false },
                { text: "Účetní kniha", icon: "📒", isCorrect: false }
            ],
            explanation: "Plemenná kniha je oficiální evidence plemenných zvířat a jejich původu."
        }
    ],
    // Level 5 - Ustájení
    module7_level5: [
        {
            question: "Co je volné ustájení?",
            type: "multiple_choice",
            options: [
                { text: "Zvířata se volně pohybují", icon: "🐄", isCorrect: true },
                { text: "Zvířata jsou uvázaná", icon: "⛓️", isCorrect: false },
                { text: "Zvířata jsou v klecích", icon: "🗄️", isCorrect: false },
                { text: "Venkovní chov", icon: "🌳", isCorrect: false }
            ],
            explanation: "Ve volném ustájení se zvířata mohou volně pohybovat v prostoru stáje."
        },
        {
            question: "Proč je důležité větrání stáje?",
            type: "multiple_choice",
            options: [
                { text: "Čerstvý vzduch a odvod plynů", icon: "💨", isCorrect: true },
                { text: "Pro lepší osvětlení", icon: "💡", isCorrect: false },
                { text: "Pro hluk", icon: "🔊", isCorrect: false },
                { text: "Není důležité", icon: "❌", isCorrect: false }
            ],
            explanation: "Správné větrání zajišťuje přísun čerstvého vzduchu a odvádí škodlivé plyny."
        },
        {
            question: "Co je podestýlka?",
            type: "multiple_choice",
            options: [
                { text: "Materiál na podlaze pro zvířata", icon: "🌾", isCorrect: true },
                { text: "Typ krmiva", icon: "🍽️", isCorrect: false },
                { text: "Veterinární přípravek", icon: "💊", isCorrect: false },
                { text: "Druh ohrady", icon: "🏗️", isCorrect: false }
            ],
            explanation: "Podestýlka (sláma, piliny) poskytuje zvířatům měkké a suché lože."
        },
        {
            question: "Jaká je ideální teplota v prasečáku?",
            type: "multiple_choice",
            options: [
                { text: "18-22°C pro dospělá prasata", icon: "🌡️", isCorrect: true },
                { text: "0°C", icon: "❄️", isCorrect: false },
                { text: "40°C", icon: "🔥", isCorrect: false },
                { text: "-10°C", icon: "🥶", isCorrect: false }
            ],
            explanation: "Dospělá prasata potřebují teplotu 18-22°C, selata pak vyšší (28-32°C)."
        },
        {
            question: "Co je napáječka?",
            type: "multiple_choice",
            options: [
                { text: "Zařízení pro přísun vody", icon: "💧", isCorrect: true },
                { text: "Krmný automat", icon: "🍽️", isCorrect: false },
                { text: "Typ ohrady", icon: "🏗️", isCorrect: false },
                { text: "Veterinární nástroj", icon: "🔧", isCorrect: false }
            ],
            explanation: "Napáječka je zařízení umožňující zvířatům přístup k čerstvé vodě."
        },
        {
            question: "Proč potřebují slepice hřady?",
            type: "multiple_choice",
            options: [
                { text: "Pro odpočinek a spaní", icon: "😴", isCorrect: true },
                { text: "Pro snášení vajec", icon: "🥚", isCorrect: false },
                { text: "Pro krmení", icon: "🍽️", isCorrect: false },
                { text: "Nepotřebují je", icon: "❌", isCorrect: false }
            ],
            explanation: "Slepice přirozeně odpočívají na vyvýšených místech - hřadech."
        },
        {
            question: "Co je boxové ustájení?",
            type: "multiple_choice",
            options: [
                { text: "Individuální boxy pro zvířata", icon: "📦", isCorrect: true },
                { text: "Volný výběh", icon: "🌳", isCorrect: false },
                { text: "Společná ohrada", icon: "🏟️", isCorrect: false },
                { text: "Transportní klec", icon: "🚛", isCorrect: false }
            ],
            explanation: "V boxovém ustájení má každé zvíře vlastní oddělený prostor."
        },
        {
            question: "Proč je důležité osvětlení v kurníku?",
            type: "multiple_choice",
            options: [
                { text: "Ovlivňuje snášku vajec", icon: "💡", isCorrect: true },
                { text: "Pro krásu", icon: "✨", isCorrect: false },
                { text: "Není důležité", icon: "❌", isCorrect: false },
                { text: "Pouze pro lidi", icon: "👁️", isCorrect: false }
            ],
            explanation: "Délka osvětlení (16 hodin) stimuluje slepice k vyšší produkci vajec."
        },
        {
            question: "Co je výběh?",
            type: "multiple_choice",
            options: [
                { text: "Venkovní ohrazený prostor", icon: "🌳", isCorrect: true },
                { text: "Vnitřek stáje", icon: "🏠", isCorrect: false },
                { text: "Krmné korýtko", icon: "🍽️", isCorrect: false },
                { text: "Dopravní prostředek", icon: "🚛", isCorrect: false }
            ],
            explanation: "Výběh je oplocená venkovní plocha, kde se zvířata mohou pohybovat."
        },
        {
            question: "Jaké jsou požadavky na prostor pro dojnice?",
            type: "multiple_choice",
            options: [
                { text: "Minimálně 6-8 m² na krávu", icon: "📐", isCorrect: true },
                { text: "0,5 m² na krávu", icon: "📏", isCorrect: false },
                { text: "100 m² na krávu", icon: "🏟️", isCorrect: false },
                { text: "Prostor není důležitý", icon: "❌", isCorrect: false }
            ],
            explanation: "Dojnice potřebují dostatečný prostor (6-8 m²) pro pohyb a welfare."
        }
    ],
    // Level 6 - Dojení
    module7_level6: [
        {
            question: "Kolikrát denně se obvykle dojí krávy?",
            type: "multiple_choice",
            options: [
                { text: "2x denně", icon: "2️⃣", isCorrect: true },
                { text: "1x týdně", icon: "📅", isCorrect: false },
                { text: "10x denně", icon: "🔟", isCorrect: false },
                { text: "1x měsíčně", icon: "📆", isCorrect: false }
            ],
            explanation: "Krávy se standardně dojí 2x denně, některé vysoce produkční i 3x."
        },
        {
            question: "Co je dojírna?",
            type: "multiple_choice",
            options: [
                { text: "Místo pro strojní dojení", icon: "🏭", isCorrect: true },
                { text: "Sklad mléka", icon: "🥛", isCorrect: false },
                { text: "Krmírna", icon: "🍽️", isCorrect: false },
                { text: "Porodna", icon: "👶", isCorrect: false }
            ],
            explanation: "Dojírna je speciální prostor vybavený pro hygienické a efektivní dojení."
        },
        {
            question: "Proč je hygiena při dojení důležitá?",
            type: "multiple_choice",
            options: [
                { text: "Prevence mastitidy a kvalita mléka", icon: "🧼", isCorrect: true },
                { text: "Pouze pro vzhled", icon: "✨", isCorrect: false },
                { text: "Není důležitá", icon: "❌", isCorrect: false },
                { text: "Kvůli zápachu", icon: "👃", isCorrect: false }
            ],
            explanation: "Čistota při dojení zabraňuje infekci vemene a kontaminaci mléka."
        },
        {
            question: "Co je laktace?",
            type: "multiple_choice",
            options: [
                { text: "Období produkce mléka", icon: "🥛", isCorrect: true },
                { text: "Druh krmiva", icon: "🌾", isCorrect: false },
                { text: "Nemoc vemene", icon: "🤒", isCorrect: false },
                { text: "Typ dojícího stroje", icon: "⚙️", isCorrect: false }
            ],
            explanation: "Laktace je období, kdy kráva produkuje mléko po otelení."
        },
        {
            question: "Kolik litrů mléka dává dobrá dojnice denně?",
            type: "multiple_choice",
            options: [
                { text: "25-40 litrů", icon: "🥛", isCorrect: true },
                { text: "1-2 litry", icon: "🫗", isCorrect: false },
                { text: "100-200 litrů", icon: "🛢️", isCorrect: false },
                { text: "0,5 litru", icon: "💧", isCorrect: false }
            ],
            explanation: "Moderní dojnice produkují průměrně 25-40 litrů mléka denně."
        },
        {
            question: "Co je zasušení krávy?",
            type: "multiple_choice",
            options: [
                { text: "Ukončení dojení před porodem", icon: "⏸️", isCorrect: true },
                { text: "Dehydratace krávy", icon: "💧", isCorrect: false },
                { text: "Sušení sena", icon: "🌾", isCorrect: false },
                { text: "Léčba nemoci", icon: "💊", isCorrect: false }
            ],
            explanation: "Zasušení je období před porodem, kdy se kráva přestane dojit pro regeneraci."
        },
        {
            question: "Co je mléčný tank?",
            type: "multiple_choice",
            options: [
                { text: "Nádrž na chlazení mléka", icon: "🧊", isCorrect: true },
                { text: "Vojenské vozidlo", icon: "🪖", isCorrect: false },
                { text: "Krmné korýtko", icon: "🍽️", isCorrect: false },
                { text: "Dopravní prostředek", icon: "🚛", isCorrect: false }
            ],
            explanation: "Mléčný tank je chladicí nádrž, která uchovává mléko při 4°C."
        },
        {
            question: "Na jakou teplotu se chladí mléko?",
            type: "multiple_choice",
            options: [
                { text: "4°C", icon: "🌡️", isCorrect: true },
                { text: "20°C", icon: "🌞", isCorrect: false },
                { text: "-20°C", icon: "❄️", isCorrect: false },
                { text: "37°C", icon: "🔥", isCorrect: false }
            ],
            explanation: "Mléko se ihned po nadojení chladí na 4°C pro zachování kvality."
        },
        {
            question: "Co je robotické dojení?",
            type: "multiple_choice",
            options: [
                { text: "Automatické dojení bez obsluhy", icon: "🤖", isCorrect: true },
                { text: "Ruční dojení", icon: "✋", isCorrect: false },
                { text: "Dojení do kbelíku", icon: "🪣", isCorrect: false },
                { text: "Dojení v noci", icon: "🌙", isCorrect: false }
            ],
            explanation: "Dojící robot umožňuje krávám nechat se podojit kdykoliv samy."
        },
        {
            question: "Co je podmáslí?",
            type: "multiple_choice",
            options: [
                { text: "Vedlejší produkt výroby másla", icon: "🧈", isCorrect: true },
                { text: "Smetana", icon: "🥛", isCorrect: false },
                { text: "Plnotučné mléko", icon: "🍼", isCorrect: false },
                { text: "Sýr", icon: "🧀", isCorrect: false }
            ],
            explanation: "Podmáslí je tekutina zbylá po stloukání másla, bohatá na bílkoviny."
        }
    ],
    // Level 7 - Drůbež
    module7_level7: [
        {
            question: "Co je nosnice?",
            type: "multiple_choice",
            options: [
                { text: "Slepice chovaná pro vejce", icon: "🥚", isCorrect: true },
                { text: "Slepice na maso", icon: "🍗", isCorrect: false },
                { text: "Kohout", icon: "🐓", isCorrect: false },
                { text: "Kuře", icon: "🐣", isCorrect: false }
            ],
            explanation: "Nosnice jsou slepice specializovaných plemen pro produkci vajec."
        },
        {
            question: "Kolik vajec snese dobrá nosnice za rok?",
            type: "multiple_choice",
            options: [
                { text: "280-320 vajec", icon: "🥚", isCorrect: true },
                { text: "10-20 vajec", icon: "🔟", isCorrect: false },
                { text: "1000 vajec", icon: "💯", isCorrect: false },
                { text: "1 vejce", icon: "1️⃣", isCorrect: false }
            ],
            explanation: "Moderní nosnice snášejí 280-320 vajec ročně."
        },
        {
            question: "Co je brojler?",
            type: "multiple_choice",
            options: [
                { text: "Kuře na maso", icon: "🍗", isCorrect: true },
                { text: "Nosná slepice", icon: "🥚", isCorrect: false },
                { text: "Kohout", icon: "🐓", isCorrect: false },
                { text: "Kachna", icon: "🦆", isCorrect: false }
            ],
            explanation: "Brojler je kuře rychle rostoucího plemene chované pro produkci masa."
        },
        {
            question: "Za jak dlouho je brojler připraven k porážce?",
            type: "multiple_choice",
            options: [
                { text: "5-7 týdnů", icon: "📅", isCorrect: true },
                { text: "1 rok", icon: "📆", isCorrect: false },
                { text: "1 den", icon: "☀️", isCorrect: false },
                { text: "5 let", icon: "🗓️", isCorrect: false }
            ],
            explanation: "Brojleři dosahují porážkové hmotnosti (2-2,5 kg) za 5-7 týdnů."
        },
        {
            question: "Co je snášková špička?",
            type: "multiple_choice",
            options: [
                { text: "Období nejvyšší produkce vajec", icon: "📈", isCorrect: true },
                { text: "Konec snášky", icon: "📉", isCorrect: false },
                { text: "Druh krmiva", icon: "🌾", isCorrect: false },
                { text: "Nemoc slepic", icon: "🤒", isCorrect: false }
            ],
            explanation: "Snášková špička je období, kdy nosnice snášejí nejvíce vajec."
        },
        {
            question: "Proč potřebují slepice snášková hnízda?",
            type: "multiple_choice",
            options: [
                { text: "Pro klid při snášení", icon: "🪺", isCorrect: true },
                { text: "Pro spaní", icon: "😴", isCorrect: false },
                { text: "Pro krmení", icon: "🍽️", isCorrect: false },
                { text: "Nepotřebují je", icon: "❌", isCorrect: false }
            ],
            explanation: "Snášková hnízda poskytují slepicím klid a soukromí pro snášení vajec."
        },
        {
            question: "Co je pelichání?",
            type: "multiple_choice",
            options: [
                { text: "Výměna peří", icon: "🪶", isCorrect: true },
                { text: "Nemoc", icon: "🤒", isCorrect: false },
                { text: "Typ krmiva", icon: "🌾", isCorrect: false },
                { text: "Způsob chovu", icon: "🏠", isCorrect: false }
            ],
            explanation: "Pelichání je přirozená roční výměna peří, během které slepice méně snášejí."
        },
        {
            question: "Co je líheň?",
            type: "multiple_choice",
            options: [
                { text: "Zařízení pro líhnutí vajec", icon: "🐣", isCorrect: true },
                { text: "Sklad vajec", icon: "📦", isCorrect: false },
                { text: "Kurník", icon: "🏠", isCorrect: false },
                { text: "Krmítko", icon: "🍽️", isCorrect: false }
            ],
            explanation: "Líheň je zařízení s kontrolovanou teplotou a vlhkostí pro umělý odchov kuřat."
        },
        {
            question: "Jaká je ideální teplota v líhni?",
            type: "multiple_choice",
            options: [
                { text: "37,5-37,8°C", icon: "🌡️", isCorrect: true },
                { text: "20°C", icon: "❄️", isCorrect: false },
                { text: "50°C", icon: "🔥", isCorrect: false },
                { text: "0°C", icon: "🥶", isCorrect: false }
            ],
            explanation: "Pro úspěšné líhnutí je potřeba udržovat teplotu 37,5-37,8°C."
        },
        {
            question: "Co je klecový chov nosnic?",
            type: "multiple_choice",
            options: [
                { text: "Chov v obohacených klecích", icon: "🗄️", isCorrect: true },
                { text: "Volný výběh", icon: "🌳", isCorrect: false },
                { text: "Podlahový chov", icon: "🏠", isCorrect: false },
                { text: "Bio chov", icon: "🌿", isCorrect: false }
            ],
            explanation: "Klecový chov využívá obohacené klece s hřady a hnízdy pro nosnice."
        }
    ],
    // Level 8 - Prasata
    module7_level8: [
        {
            question: "Co je vepřín?",
            type: "multiple_choice",
            options: [
                { text: "Stáj pro prasata", icon: "🐷", isCorrect: true },
                { text: "Kravín", icon: "🐄", isCorrect: false },
                { text: "Kurník", icon: "🐔", isCorrect: false },
                { text: "Ovčín", icon: "🐑", isCorrect: false }
            ],
            explanation: "Vepřín je specializovaná stáj pro chov prasat."
        },
        {
            question: "Jak dlouho trvá březost prasnice?",
            type: "multiple_choice",
            options: [
                { text: "114 dní (3 měsíce, 3 týdny, 3 dny)", icon: "📅", isCorrect: true },
                { text: "30 dní", icon: "📆", isCorrect: false },
                { text: "1 rok", icon: "🗓️", isCorrect: false },
                { text: "2 týdny", icon: "⏰", isCorrect: false }
            ],
            explanation: "Březost prasnice trvá přibližně 114 dní - snadno zapamatovatelné jako 3-3-3."
        },
        {
            question: "Co je kastrace selat?",
            type: "multiple_choice",
            options: [
                { text: "Odstranění pohlavních žláz", icon: "✂️", isCorrect: true },
                { text: "Očkování", icon: "💉", isCorrect: false },
                { text: "Označení", icon: "🏷️", isCorrect: false },
                { text: "Vážení", icon: "⚖️", isCorrect: false }
            ],
            explanation: "Kastrace samčích selat se provádí pro zabránění zápachu masa."
        },
        {
            question: "Co je porodní kotec?",
            type: "multiple_choice",
            options: [
                { text: "Speciální box pro porod prasnice", icon: "👶", isCorrect: true },
                { text: "Krmítko", icon: "🍽️", isCorrect: false },
                { text: "Transportní klec", icon: "🚛", isCorrect: false },
                { text: "Veterinární ordinace", icon: "🏥", isCorrect: false }
            ],
            explanation: "Porodní kotec chrání selata před zalehlnutím prasnicí."
        },
        {
            question: "Co je odchovna selat?",
            type: "multiple_choice",
            options: [
                { text: "Prostor pro selata po odstavu", icon: "🐷", isCorrect: true },
                { text: "Porodna", icon: "👶", isCorrect: false },
                { text: "Výkrmna", icon: "🍖", isCorrect: false },
                { text: "Jatka", icon: "🔪", isCorrect: false }
            ],
            explanation: "V odchovně jsou selata od odstavu (28 dní) do přesunu do výkrmu."
        },
        {
            question: "Jaká je ideální porážková hmotnost prasete?",
            type: "multiple_choice",
            options: [
                { text: "110-120 kg", icon: "⚖️", isCorrect: true },
                { text: "10-20 kg", icon: "🔟", isCorrect: false },
                { text: "500 kg", icon: "🐘", isCorrect: false },
                { text: "5 kg", icon: "5️⃣", isCorrect: false }
            ],
            explanation: "Optimální jateční hmotnost prasete je 110-120 kg živé váhy."
        },
        {
            question: "Co je kanec?",
            type: "multiple_choice",
            options: [
                { text: "Samec prasete", icon: "🐗", isCorrect: true },
                { text: "Samice prasete", icon: "🐷", isCorrect: false },
                { text: "Mládě prasete", icon: "🐽", isCorrect: false },
                { text: "Kastrovaný samec", icon: "✂️", isCorrect: false }
            ],
            explanation: "Kanec je nekastrovaný dospělý samec prasete používaný k plemenitbě."
        },
        {
            question: "Proč prasata potřebují bahniště?",
            type: "multiple_choice",
            options: [
                { text: "Pro ochlazení těla", icon: "🌊", isCorrect: true },
                { text: "Pro pití", icon: "💧", isCorrect: false },
                { text: "Pro zábavu", icon: "🎉", isCorrect: false },
                { text: "Nepotřebují", icon: "❌", isCorrect: false }
            ],
            explanation: "Prasata nemají potní žlázy, proto se válí v blátě k ochlazení."
        },
        {
            question: "Co je výkrm prasat?",
            type: "multiple_choice",
            options: [
                { text: "Období intenzivního růstu před porážkou", icon: "📈", isCorrect: true },
                { text: "Léčba nemoci", icon: "💊", isCorrect: false },
                { text: "Reprodukce", icon: "💕", isCorrect: false },
                { text: "Transport", icon: "🚛", isCorrect: false }
            ],
            explanation: "Výkrm je období od 25-30 kg do jateční hmotnosti 110-120 kg."
        },
        {
            question: "Jaká plemena prasat znáte?",
            type: "multiple_choice",
            options: [
                { text: "Bílé ušlechtilé, Landrace", icon: "🐷", isCorrect: true },
                { text: "Holstein, Jersey", icon: "🐄", isCorrect: false },
                { text: "Leghorn, Rhode Island", icon: "🐔", isCorrect: false },
                { text: "Suffolk, Merino", icon: "🐑", isCorrect: false }
            ],
            explanation: "Bílé ušlechtilé a Landrace jsou nejrozšířenější masná plemena prasat."
        }
    ],
    // Level 9 - Ovce a kozy
    module7_level9: [
        {
            question: "Co je stříž ovcí?",
            type: "multiple_choice",
            options: [
                { text: "Stříhání vlny", icon: "✂️", isCorrect: true },
                { text: "Dojení", icon: "🥛", isCorrect: false },
                { text: "Krmení", icon: "🍽️", isCorrect: false },
                { text: "Léčení", icon: "💊", isCorrect: false }
            ],
            explanation: "Stříž je pravidelné stříhání vlny z ovcí, obvykle na jaře."
        },
        {
            question: "Kolik vlny dává ovce ročně?",
            type: "multiple_choice",
            options: [
                { text: "4-8 kg", icon: "🧶", isCorrect: true },
                { text: "100 kg", icon: "💯", isCorrect: false },
                { text: "0,1 kg", icon: "🔢", isCorrect: false },
                { text: "50 kg", icon: "5️⃣0️⃣", isCorrect: false }
            ],
            explanation: "Průměrná ovce dává 4-8 kg vlny ročně v závislosti na plemeni."
        },
        {
            question: "Co je jehně?",
            type: "multiple_choice",
            options: [
                { text: "Mládě ovce", icon: "🐑", isCorrect: true },
                { text: "Mládě kozy", icon: "🐐", isCorrect: false },
                { text: "Dospělá ovce", icon: "🐏", isCorrect: false },
                { text: "Samec ovce", icon: "🐏", isCorrect: false }
            ],
            explanation: "Jehně je mládě ovce do věku přibližně jednoho roku."
        },
        {
            question: "Co je beran?",
            type: "multiple_choice",
            options: [
                { text: "Samec ovce", icon: "🐏", isCorrect: true },
                { text: "Samice ovce", icon: "🐑", isCorrect: false },
                { text: "Mládě ovce", icon: "🐑", isCorrect: false },
                { text: "Druh kozy", icon: "🐐", isCorrect: false }
            ],
            explanation: "Beran je dospělý samec ovce používaný k rozmnožování."
        },
        {
            question: "Proč jsou kozy dobré pro údržbu krajiny?",
            type: "multiple_choice",
            options: [
                { text: "Spásají i keře a plevele", icon: "🌿", isCorrect: true },
                { text: "Produkují hodně mléka", icon: "🥛", isCorrect: false },
                { text: "Jsou hezké", icon: "✨", isCorrect: false },
                { text: "Nejsou dobré", icon: "❌", isCorrect: false }
            ],
            explanation: "Kozy jsou nenáročné a spásají i rostliny, které jiná zvířata odmítají."
        },
        {
            question: "Co je kůzle?",
            type: "multiple_choice",
            options: [
                { text: "Mládě kozy", icon: "🐐", isCorrect: true },
                { text: "Mládě ovce", icon: "🐑", isCorrect: false },
                { text: "Dospělá koza", icon: "🐐", isCorrect: false },
                { text: "Samec kozy", icon: "🐐", isCorrect: false }
            ],
            explanation: "Kůzle je mládě kozy, velmi oblíbené pro jemné maso."
        },
        {
            question: "Jak dlouho trvá březost ovce?",
            type: "multiple_choice",
            options: [
                { text: "Přibližně 5 měsíců (150 dní)", icon: "📅", isCorrect: true },
                { text: "1 měsíc", icon: "📆", isCorrect: false },
                { text: "1 rok", icon: "🗓️", isCorrect: false },
                { text: "2 týdny", icon: "⏰", isCorrect: false }
            ],
            explanation: "Březost ovce trvá přibližně 150 dní, tedy asi 5 měsíců."
        },
        {
            question: "Co je ovčí sýr?",
            type: "multiple_choice",
            options: [
                { text: "Sýr z ovčího mléka", icon: "🧀", isCorrect: true },
                { text: "Sýr z kravského mléka", icon: "🥛", isCorrect: false },
                { text: "Sýr z kozího mléka", icon: "🐐", isCorrect: false },
                { text: "Rostlinný sýr", icon: "🌿", isCorrect: false }
            ],
            explanation: "Ovčí sýr (např. brynza, pecorino) se vyrábí z ovčího mléka."
        },
        {
            question: "Co je pastevectví?",
            type: "multiple_choice",
            options: [
                { text: "Chov zvířat na pastvě", icon: "🌳", isCorrect: true },
                { text: "Chov v hale", icon: "🏭", isCorrect: false },
                { text: "Chov v klecích", icon: "🗄️", isCorrect: false },
                { text: "Vodní chov", icon: "💧", isCorrect: false }
            ],
            explanation: "Pastevectví je způsob chovu, kdy se zvířata pasou na volných plochách."
        },
        {
            question: "Která plemena ovcí jsou v ČR nejrozšířenější?",
            type: "multiple_choice",
            options: [
                { text: "Suffolk, Šumavka", icon: "🐑", isCorrect: true },
                { text: "Holstein, Jersey", icon: "🐄", isCorrect: false },
                { text: "Landrace, Duroc", icon: "🐷", isCorrect: false },
                { text: "Leghorn, Plymouth", icon: "🐔", isCorrect: false }
            ],
            explanation: "V ČR se chovají především Suffolk a česká Šumavka."
        }
    ],
    // Level 10 - Welfare a etika
    module7_level10: [
        {
            question: "Co je welfare zvířat?",
            type: "multiple_choice",
            options: [
                { text: "Pohoda a kvalita života zvířat", icon: "😊", isCorrect: true },
                { text: "Produkce masa", icon: "🥩", isCorrect: false },
                { text: "Ekonomika chovu", icon: "💰", isCorrect: false },
                { text: "Druh krmiva", icon: "🌾", isCorrect: false }
            ],
            explanation: "Welfare znamená zajištění dobrých životních podmínek a pohody zvířat."
        },
        {
            question: "Kolik svobod má zvíře podle welfare?",
            type: "multiple_choice",
            options: [
                { text: "5 svobod", icon: "5️⃣", isCorrect: true },
                { text: "1 svoboda", icon: "1️⃣", isCorrect: false },
                { text: "100 svobod", icon: "💯", isCorrect: false },
                { text: "Žádné", icon: "0️⃣", isCorrect: false }
            ],
            explanation: "5 svobod: bez hladu, bez nepohodlí, bez bolesti, přirozené chování, bez strachu."
        },
        {
            question: "Co je bio chov?",
            type: "multiple_choice",
            options: [
                { text: "Ekologický chov dle předpisů", icon: "🌿", isCorrect: true },
                { text: "Intenzivní velkovýroba", icon: "🏭", isCorrect: false },
                { text: "Chov v laboratoři", icon: "🔬", isCorrect: false },
                { text: "Geneticky modifikovaná zvířata", icon: "🧬", isCorrect: false }
            ],
            explanation: "Bio chov dodržuje přísná pravidla pro welfare, krmení a ustájení."
        },
        {
            question: "Proč je důležitý volný výběh?",
            type: "multiple_choice",
            options: [
                { text: "Přirozené chování zvířat", icon: "🌳", isCorrect: true },
                { text: "Levnější chov", icon: "💰", isCorrect: false },
                { text: "Rychlejší růst", icon: "📈", isCorrect: false },
                { text: "Není důležitý", icon: "❌", isCorrect: false }
            ],
            explanation: "Volný výběh umožňuje zvířatům přirozený pohyb a chování."
        },
        {
            question: "Co je humánní porážka?",
            type: "multiple_choice",
            options: [
                { text: "Porážka minimalizující stres a bolest", icon: "💚", isCorrect: true },
                { text: "Rychlá porážka", icon: "⚡", isCorrect: false },
                { text: "Levná porážka", icon: "💰", isCorrect: false },
                { text: "Domácí porážka", icon: "🏠", isCorrect: false }
            ],
            explanation: "Humánní porážka zajišťuje rychlé a bezbolestné usmrcení zvířete."
        },
        {
            question: "Co je omračování před porážkou?",
            type: "multiple_choice",
            options: [
                { text: "Uvedení do bezvědomí", icon: "😵", isCorrect: true },
                { text: "Uspání", icon: "😴", isCorrect: false },
                { text: "Krmení", icon: "🍽️", isCorrect: false },
                { text: "Transport", icon: "🚛", isCorrect: false }
            ],
            explanation: "Omračování zajišťuje, že zvíře necítí bolest při porážce."
        },
        {
            question: "Proč je sociální kontakt důležitý pro zvířata?",
            type: "multiple_choice",
            options: [
                { text: "Jsou to stádová zvířata", icon: "👥", isCorrect: true },
                { text: "Kvůli rychlejšímu růstu", icon: "📈", isCorrect: false },
                { text: "Není důležitý", icon: "❌", isCorrect: false },
                { text: "Pro lepší chuť masa", icon: "🥩", isCorrect: false }
            ],
            explanation: "Většina hospodářských zvířat je stádových a potřebuje sociální kontakt."
        },
        {
            question: "Co je obohacení prostředí?",
            type: "multiple_choice",
            options: [
                { text: "Prvky pro přirozené chování", icon: "🎯", isCorrect: true },
                { text: "Více krmiva", icon: "🍽️", isCorrect: false },
                { text: "Teplejší stáj", icon: "🔥", isCorrect: false },
                { text: "Více zvířat", icon: "📈", isCorrect: false }
            ],
            explanation: "Obohacení prostředí zahrnuje hračky, podestýlku k hrabání apod."
        },
        {
            question: "Co je trackovatelnost masa?",
            type: "multiple_choice",
            options: [
                { text: "Sledování původu produktu", icon: "🔍", isCorrect: true },
                { text: "Sledování hmotnosti", icon: "⚖️", isCorrect: false },
                { text: "Sledování barvy", icon: "🎨", isCorrect: false },
                { text: "Sledování ceny", icon: "💰", isCorrect: false }
            ],
            explanation: "Trackovatelnost umožňuje dohledat původ masa od farmy až k spotřebiteli."
        },
        {
            question: "Proč je důležité vzdělávání chovatelů o welfare?",
            type: "multiple_choice",
            options: [
                { text: "Lepší péče o zvířata", icon: "📚", isCorrect: true },
                { text: "Není důležité", icon: "❌", isCorrect: false },
                { text: "Pouze pro certifikaci", icon: "📜", isCorrect: false },
                { text: "Pro vyšší dotace", icon: "💶", isCorrect: false }
            ],
            explanation: "Vzdělaní chovatelé lépe rozumí potřebám zvířat a poskytují lepší péči."
        }
    ]
};

// Export do window
window.MODULE7_QUESTIONS = MODULE7_QUESTIONS;