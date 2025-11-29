// Modul 3: Sklizeň a Prodej - 100 otázek (10 levelů x 10 otázek)
const MODULE3_QUESTIONS = {
    // Level 1 - Základy sklizně
    module3_level1: [
        {
            question: "Kdy je obilí zralé ke sklizni?",
            type: "multiple_choice",
            options: [
                { text: "Když má vlhkost kolem 14%", icon: "🌾", isCorrect: true },
                { text: "Když je zelené", icon: "🟢", isCorrect: false },
                { text: "Hned po kvetení", icon: "🌸", isCorrect: false },
                { text: "V zimě", icon: "❄️", isCorrect: false }
            ],
            explanation: "Optimální vlhkost pro sklizeň obilovin je 14-15% pro přímé skladování."
        },
        {
            question: "Co je kombajn?",
            type: "multiple_choice",
            options: [
                { text: "Stroj na sklizeň obilovin", icon: "🚜", isCorrect: true },
                { text: "Stroj na orbu", icon: "🌍", isCorrect: false },
                { text: "Stroj na setí", icon: "🌰", isCorrect: false },
                { text: "Stroj na postřik", icon: "💦", isCorrect: false }
            ],
            explanation: "Kombajn (sklízecí mlátička) žne, mlátí a čistí zrno v jedné operaci."
        },
        {
            question: "Co je to mlácení?",
            type: "multiple_choice",
            options: [
                { text: "Oddělení zrna od klasů", icon: "🌾", isCorrect: true },
                { text: "Setí semen", icon: "🌰", isCorrect: false },
                { text: "Orba pole", icon: "🚜", isCorrect: false },
                { text: "Zalévání", icon: "💧", isCorrect: false }
            ],
            explanation: "Mlácení je proces, při kterém se zrno odděluje od klasů a slámy."
        },
        {
            question: "Proč je důležité sklidit včas?",
            type: "multiple_choice",
            options: [
                { text: "Aby nedošlo ke ztrátám a zhoršení kvality", icon: "⏰", isCorrect: true },
                { text: "Kvůli barvě zrna", icon: "🎨", isCorrect: false },
                { text: "Protože to nařizuje zákon", icon: "⚖️", isCorrect: false },
                { text: "Nezáleží na termínu", icon: "🤷", isCorrect: false }
            ],
            explanation: "Opožděná sklizeň vede k osypání zrna, polehnutí a ztrátě kvality."
        },
        {
            question: "Co je sláma?",
            type: "multiple_choice",
            options: [
                { text: "Suché stonky obilovin po sklizni", icon: "🌾", isCorrect: true },
                { text: "Zrno obilovin", icon: "🌰", isCorrect: false },
                { text: "Kořeny rostlin", icon: "🌱", isCorrect: false },
                { text: "Listy rostlin", icon: "🍃", isCorrect: false }
            ],
            explanation: "Sláma je posklizňový zbytek, využívá se jako stelivo, krmivo nebo se zaoře."
        },
        {
            question: "Co jsou posklizňové zbytky?",
            type: "multiple_choice",
            options: [
                { text: "Sláma, strniště, plevy", icon: "🌾", isCorrect: true },
                { text: "Pouze zrno", icon: "🌰", isCorrect: false },
                { text: "Plevele", icon: "🌿", isCorrect: false },
                { text: "Hnojivo", icon: "🧪", isCorrect: false }
            ],
            explanation: "Posklizňové zbytky jsou vše, co zůstane na poli po sklizni hlavního produktu."
        },
        {
            question: "Jak se měří vlhkost zrna?",
            type: "multiple_choice",
            options: [
                { text: "Vlhkoměrem", icon: "📊", isCorrect: true },
                { text: "Teploměrem", icon: "🌡️", isCorrect: false },
                { text: "Váhou", icon: "⚖️", isCorrect: false },
                { text: "Metrem", icon: "📏", isCorrect: false }
            ],
            explanation: "Vlhkoměr měří obsah vody v zrnu, což je klíčové pro skladování."
        },
        {
            question: "Co je žňová zralost?",
            type: "multiple_choice",
            options: [
                { text: "Stádium vhodné pro sklizeň", icon: "✅", isCorrect: true },
                { text: "Zralost k setí", icon: "🌰", isCorrect: false },
                { text: "Zralost k hnojení", icon: "🧪", isCorrect: false },
                { text: "Zralost k orbě", icon: "🚜", isCorrect: false }
            ],
            explanation: "Žňová zralost nastává, když je plodina připravena ke sklizni kombajnem."
        },
        {
            question: "Strniště je:",
            type: "multiple_choice",
            options: [
                { text: "Zbytky stonků po sklizni na poli", icon: "🌾", isCorrect: true },
                { text: "Skladovaná sláma", icon: "📦", isCorrect: false },
                { text: "Druh plevele", icon: "🌿", isCorrect: false },
                { text: "Typ hnojiva", icon: "🧪", isCorrect: false }
            ],
            explanation: "Strniště jsou spodní části stonků zůstávající v zemi po sklizni."
        },
        {
            question: "Proč se sláma lisuje do balíků?",
            type: "multiple_choice",
            options: [
                { text: "Pro snadnější manipulaci a skladování", icon: "📦", isCorrect: true },
                { text: "Pro lepší chuť", icon: "😋", isCorrect: false },
                { text: "Protože je to povinné", icon: "⚖️", isCorrect: false },
                { text: "Pro zábavu", icon: "🎉", isCorrect: false }
            ],
            explanation: "Lisování zmenšuje objem slámy a usnadňuje transport a skladování."
        }
    ],

    // Level 2 - Sklizeň různých plodin
    module3_level2: [
        {
            question: "Brambory se sklízejí:",
            type: "multiple_choice",
            options: [
                { text: "Vyorávačem nebo kombajnem na brambory", icon: "🥔", isCorrect: true },
                { text: "Obilním kombajnem", icon: "🌾", isCorrect: false },
                { text: "Ručně vždy", icon: "✋", isCorrect: false },
                { text: "Postřikovačem", icon: "💦", isCorrect: false }
            ],
            explanation: "Bramborové kombajny vyrývají, třídí a nakládají hlízy v jedné operaci."
        },
        {
            question: "Cukrovka se sklízí:",
            type: "multiple_choice",
            options: [
                { text: "Na podzim speciálním kombajnem", icon: "🍬", isCorrect: true },
                { text: "V létě ručně", icon: "☀️", isCorrect: false },
                { text: "Na jaře", icon: "🌸", isCorrect: false },
                { text: "V zimě pod sněhem", icon: "❄️", isCorrect: false }
            ],
            explanation: "Cukrovku sklízíme na podzim, řepy se pak ihned zpracovávají v cukrovarech."
        },
        {
            question: "Kukuřice na zrno se sklízí při vlhkosti:",
            type: "multiple_choice",
            options: [
                { text: "Kolem 25-30%, pak se suší", icon: "🌽", isCorrect: true },
                { text: "Pod 10%", icon: "📉", isCorrect: false },
                { text: "Nad 50%", icon: "💧", isCorrect: false },
                { text: "Nezáleží na vlhkosti", icon: "🤷", isCorrect: false }
            ],
            explanation: "Kukuřice se sklízí při vyšší vlhkosti a následně se dosouší."
        },
        {
            question: "Řepka se sklízí:",
            type: "multiple_choice",
            options: [
                { text: "Když šešule hnědnou a semena tmavnou", icon: "🌼", isCorrect: true },
                { text: "Když kvete", icon: "🌸", isCorrect: false },
                { text: "V zimě", icon: "❄️", isCorrect: false },
                { text: "Hned po výsevu", icon: "🌱", isCorrect: false }
            ],
            explanation: "Řepka se sklízí přímou kombajnovou sklizní nebo po desikaci."
        },
        {
            question: "Co je desikace?",
            type: "multiple_choice",
            options: [
                { text: "Chemické urychlení dozrávání", icon: "🧪", isCorrect: true },
                { text: "Zalévání", icon: "💧", isCorrect: false },
                { text: "Hnojení", icon: "🌱", isCorrect: false },
                { text: "Setí", icon: "🌰", isCorrect: false }
            ],
            explanation: "Desikanty urychlují usychání porostu pro snadnější a rovnoměrnější sklizeň."
        },
        {
            question: "Silážní kukuřice se sklízí:",
            type: "multiple_choice",
            options: [
                { text: "Řezačkou na celé rostliny", icon: "🌽", isCorrect: true },
                { text: "Kombajnem na zrno", icon: "🌾", isCorrect: false },
                { text: "Pouze ručně", icon: "✋", isCorrect: false },
                { text: "Vyorávačem", icon: "🚜", isCorrect: false }
            ],
            explanation: "Řezačka seká celé rostliny na řezanku pro silážování."
        },
        {
            question: "Seno se sklízí:",
            type: "multiple_choice",
            options: [
                { text: "Sekáním, sušením a lisováním", icon: "🌿", isCorrect: true },
                { text: "Kombajnem", icon: "🌾", isCorrect: false },
                { text: "Vyoráváním", icon: "🚜", isCorrect: false },
                { text: "Postřikem", icon: "💦", isCorrect: false }
            ],
            explanation: "Tráva se poseká, suší se na poli a pak se lisuje nebo ukládá."
        },
        {
            question: "Kdy sklízet ovoce?",
            type: "multiple_choice",
            options: [
                { text: "Při optimální zralosti pro daný účel", icon: "🍎", isCorrect: true },
                { text: "Vždy přezrálé", icon: "🍌", isCorrect: false },
                { text: "Vždy nezralé", icon: "🟢", isCorrect: false },
                { text: "Kdykoliv", icon: "🤷", isCorrect: false }
            ],
            explanation: "Pro skladování se sklízí dříve, pro přímou konzumaci při plné zralosti."
        },
        {
            question: "Hroznové víno se sklízí:",
            type: "multiple_choice",
            options: [
                { text: "Ručně nebo kombajnem na víno", icon: "🍇", isCorrect: true },
                { text: "Obilním kombajnem", icon: "🌾", isCorrect: false },
                { text: "Řezačkou", icon: "✂️", isCorrect: false },
                { text: "Vyorávačem", icon: "🚜", isCorrect: false }
            ],
            explanation: "Kvalitní víno vyžaduje ruční sběr, pro průmyslové zpracování existují kombajny."
        },
        {
            question: "Česnek se sklízí:",
            type: "multiple_choice",
            options: [
                { text: "Když listy zežloutnou a usychají", icon: "🧄", isCorrect: true },
                { text: "Když má zelené listy", icon: "🟢", isCorrect: false },
                { text: "V zimě", icon: "❄️", isCorrect: false },
                { text: "Po prvním mrazu", icon: "🥶", isCorrect: false }
            ],
            explanation: "Česnek se sklízí, když 2/3 listů zežloutnou, pak se dosouší."
        }
    ],

    // Level 3 - Kvalita sklizně
    module3_level3: [
        {
            question: "Co ovlivňuje kvalitu zrna?",
            type: "multiple_choice",
            options: [
                { text: "Vlhkost, čistota, poškození", icon: "🌾", isCorrect: true },
                { text: "Pouze barva", icon: "🎨", isCorrect: false },
                { text: "Pouze váha", icon: "⚖️", isCorrect: false },
                { text: "Pouze vůně", icon: "👃", isCorrect: false }
            ],
            explanation: "Kvalitu zrna určuje vlhkost, příměsi, poškozená zrna, napadení škůdci."
        },
        {
            question: "Objemová hmotnost zrna udává:",
            type: "multiple_choice",
            options: [
                { text: "Hmotnost zrna v daném objemu (kg/hl)", icon: "⚖️", isCorrect: true },
                { text: "Počet zrn", icon: "🔢", isCorrect: false },
                { text: "Barvu zrna", icon: "🎨", isCorrect: false },
                { text: "Vlhkost zrna", icon: "💧", isCorrect: false }
            ],
            explanation: "Objemová (hektolitrová) hmotnost je ukazatel kvality - vyšší = kvalitnější zrno."
        },
        {
            question: "Pekařská jakost pšenice závisí na:",
            type: "multiple_choice",
            options: [
                { text: "Obsahu a kvalitě lepku", icon: "🍞", isCorrect: true },
                { text: "Pouze barvě", icon: "🎨", isCorrect: false },
                { text: "Pouze velikosti zrna", icon: "📏", isCorrect: false },
                { text: "Pouze vlhkosti", icon: "💧", isCorrect: false }
            ],
            explanation: "Pro pečivo je klíčový obsah bílkovin a vlastnosti lepku."
        },
        {
            question: "Co jsou příměsi v zrnu?",
            type: "multiple_choice",
            options: [
                { text: "Nečistoty, plevy, semena plevelů", icon: "🗑️", isCorrect: true },
                { text: "Vitamíny", icon: "💊", isCorrect: false },
                { text: "Hnojiva", icon: "🧪", isCorrect: false },
                { text: "Voda", icon: "💧", isCorrect: false }
            ],
            explanation: "Příměsi jsou vše, co není zrno dané plodiny - snižují kvalitu a cenu."
        },
        {
            question: "Padlé číslo u pšenice měří:",
            type: "multiple_choice",
            options: [
                { text: "Aktivitu enzymů (poškození naklíčením)", icon: "🔬", isCorrect: true },
                { text: "Hmotnost zrna", icon: "⚖️", isCorrect: false },
                { text: "Barvu zrna", icon: "🎨", isCorrect: false },
                { text: "Velikost zrna", icon: "📏", isCorrect: false }
            ],
            explanation: "Nízké padlé číslo značí naklíčené zrno s vysokou aktivitou enzymů, nevhodné pro pečení."
        },
        {
            question: "Sladovnický ječmen musí mít:",
            type: "multiple_choice",
            options: [
                { text: "Nízký obsah bílkovin, vysokou klíčivost", icon: "🍺", isCorrect: true },
                { text: "Vysoký obsah bílkovin", icon: "📈", isCorrect: false },
                { text: "Nízkou klíčivost", icon: "📉", isCorrect: false },
                { text: "Vysokou vlhkost", icon: "💧", isCorrect: false }
            ],
            explanation: "Pro výrobu sladu je důležitá vysoká klíčivost a nízký obsah bílkovin."
        },
        {
            question: "Cukernatost cukrovky se měří v:",
            type: "multiple_choice",
            options: [
                { text: "Procentech polarizace", icon: "📊", isCorrect: true },
                { text: "Kilogramech", icon: "⚖️", isCorrect: false },
                { text: "Litrech", icon: "🥛", isCorrect: false },
                { text: "Metrech", icon: "📏", isCorrect: false }
            ],
            explanation: "Cukernatost (polarizace) udává obsah sacharózy v řepě, typicky 15-20%."
        },
        {
            question: "Co je škrobnatost brambor?",
            type: "multiple_choice",
            options: [
                { text: "Obsah škrobu v hlízách", icon: "🥔", isCorrect: true },
                { text: "Barva slupky", icon: "🎨", isCorrect: false },
                { text: "Velikost hlíz", icon: "📏", isCorrect: false },
                { text: "Počet očí", icon: "👀", isCorrect: false }
            ],
            explanation: "Škrobnatost určuje využití brambor - vysoká pro výrobu škrobu, nižší pro konzum."
        },
        {
            question: "Olejnatost řepky by měla být:",
            type: "multiple_choice",
            options: [
                { text: "Co nejvyšší (nad 40%)", icon: "🛢️", isCorrect: true },
                { text: "Co nejnižší", icon: "📉", isCorrect: false },
                { text: "Přesně 10%", icon: "🔟", isCorrect: false },
                { text: "Nezáleží", icon: "🤷", isCorrect: false }
            ],
            explanation: "Vyšší obsah oleje znamená vyšší výtěžnost a lepší cenu za semeno."
        },
        {
            question: "GMO plodiny v ČR:",
            type: "multiple_choice",
            options: [
                { text: "Jsou regulovány a označovány", icon: "📋", isCorrect: true },
                { text: "Jsou zcela zakázány", icon: "⛔", isCorrect: false },
                { text: "Nejsou nijak kontrolovány", icon: "❌", isCorrect: false },
                { text: "Jsou povinné", icon: "✅", isCorrect: false }
            ],
            explanation: "GMO plodiny podléhají přísné regulaci EU a musí být označeny."
        }
    ],

    // Level 4 - Skladování
    module3_level4: [
        {
            question: "Ideální teplota pro skladování obilí je:",
            type: "multiple_choice",
            options: [
                { text: "Pod 15°C", icon: "🌡️", isCorrect: true },
                { text: "Nad 30°C", icon: "🔥", isCorrect: false },
                { text: "Přesně 25°C", icon: "☀️", isCorrect: false },
                { text: "Nezáleží", icon: "🤷", isCorrect: false }
            ],
            explanation: "Nízká teplota zpomaluje aktivitu škůdců a plísní."
        },
        {
            question: "Co je silážování?",
            type: "multiple_choice",
            options: [
                { text: "Konzervace píce mléčným kvašením", icon: "🌿", isCorrect: true },
                { text: "Sušení trávy", icon: "☀️", isCorrect: false },
                { text: "Spalování odpadu", icon: "🔥", isCorrect: false },
                { text: "Mletí zrna", icon: "⚙️", isCorrect: false }
            ],
            explanation: "Silážování konzervuje čerstvou píci anaerobním kvašením za tvorby kyseliny mléčné."
        },
        {
            question: "Silo slouží k:",
            type: "multiple_choice",
            options: [
                { text: "Skladování zrna nebo siláže", icon: "🏭", isCorrect: true },
                { text: "Bydlení", icon: "🏠", isCorrect: false },
                { text: "Parkování traktorů", icon: "🚜", isCorrect: false },
                { text: "Chovu zvířat", icon: "🐄", isCorrect: false }
            ],
            explanation: "Sila jsou speciální stavby pro skladování sypkých materiálů nebo siláže."
        },
        {
            question: "Proč se zrno provětrává?",
            type: "multiple_choice",
            options: [
                { text: "Pro snížení teploty a vlhkosti", icon: "💨", isCorrect: true },
                { text: "Pro lepší barvu", icon: "🎨", isCorrect: false },
                { text: "Pro zvýšení hmotnosti", icon: "⚖️", isCorrect: false },
                { text: "Neprovětrává se", icon: "⛔", isCorrect: false }
            ],
            explanation: "Aktivní větrání odvádí teplo a vlhkost, brání samozahřívání a plísním."
        },
        {
            question: "Co je senáž?",
            type: "multiple_choice",
            options: [
                { text: "Zavadlá konzervovaná píce", icon: "🌿", isCorrect: true },
                { text: "Sušené seno", icon: "☀️", isCorrect: false },
                { text: "Čerstvá tráva", icon: "🟢", isCorrect: false },
                { text: "Zrno", icon: "🌾", isCorrect: false }
            ],
            explanation: "Senáž je píce zavadlá na 40-60% sušiny, konzervovaná jako siláž."
        },
        {
            question: "Brambory se skladují při teplotě:",
            type: "multiple_choice",
            options: [
                { text: "4-8°C", icon: "❄️", isCorrect: true },
                { text: "Nad 20°C", icon: "🔥", isCorrect: false },
                { text: "Pod 0°C", icon: "🥶", isCorrect: false },
                { text: "Přesně 15°C", icon: "🌡️", isCorrect: false }
            ],
            explanation: "Brambory vyžadují chlad, ale ne mráz, jinak sladnou nebo mrznou."
        },
        {
            question: "Ovoce se často skladuje v:",
            type: "multiple_choice",
            options: [
                { text: "Kontrolované atmosféře (ULO)", icon: "🍎", isCorrect: true },
                { text: "Pouze venku", icon: "🌤️", isCorrect: false },
                { text: "V horkém skladu", icon: "🔥", isCorrect: false },
                { text: "Ve vodě", icon: "💧", isCorrect: false }
            ],
            explanation: "ULO sklady mají sníženou hladinu kyslíku, což zpomaluje zrání ovoce."
        },
        {
            question: "Co je samozahřívání zrna?",
            type: "multiple_choice",
            options: [
                { text: "Nárůst teploty metabolismem a plísněmi", icon: "🔥", isCorrect: true },
                { text: "Zahřívání sluncem", icon: "☀️", isCorrect: false },
                { text: "Umělé vytápění", icon: "🌡️", isCorrect: false },
                { text: "Normální jev", icon: "✅", isCorrect: false }
            ],
            explanation: "Samozahřívání je nebezpečné - může vést ke znehodnocení až požáru."
        },
        {
            question: "Sušička zrna:",
            type: "multiple_choice",
            options: [
                { text: "Snižuje vlhkost zrna pro skladování", icon: "💨", isCorrect: true },
                { text: "Zvyšuje vlhkost", icon: "💧", isCorrect: false },
                { text: "Mele zrno", icon: "⚙️", isCorrect: false },
                { text: "Třídí zrno", icon: "📊", isCorrect: false }
            ],
            explanation: "Sušení snižuje vlhkost na bezpečnou úroveň pro dlouhodobé skladování."
        },
        {
            question: "Při skladování je důležité sledovat:",
            type: "multiple_choice",
            options: [
                { text: "Teplotu, vlhkost, škůdce", icon: "📊", isCorrect: true },
                { text: "Pouze barvu", icon: "🎨", isCorrect: false },
                { text: "Pouze vůni", icon: "👃", isCorrect: false },
                { text: "Nic", icon: "😴", isCorrect: false }
            ],
            explanation: "Pravidelný monitoring je klíčový pro prevenci ztrát a udržení kvality."
        }
    ],

    // Level 5 - Zpracování plodin
    module3_level5: [
        {
            question: "Mlýn zpracovává:",
            type: "multiple_choice",
            options: [
                { text: "Obilí na mouku", icon: "🌾", isCorrect: true },
                { text: "Mléko na sýr", icon: "🧀", isCorrect: false },
                { text: "Maso na klobásy", icon: "🌭", isCorrect: false },
                { text: "Ovoce na džem", icon: "🍓", isCorrect: false }
            ],
            explanation: "Mlýny melou obilí na mouku různých druhů a hrubostí."
        },
        {
            question: "Lisovna olejů vyrábí:",
            type: "multiple_choice",
            options: [
                { text: "Rostlinné oleje z olejnin", icon: "🛢️", isCorrect: true },
                { text: "Mléčné výrobky", icon: "🥛", isCorrect: false },
                { text: "Cukr", icon: "🍬", isCorrect: false },
                { text: "Pivo", icon: "🍺", isCorrect: false }
            ],
            explanation: "Olejny lisují nebo extrahují olej ze semen řepky, slunečnice aj."
        },
        {
            question: "Cukrovar zpracovává:",
            type: "multiple_choice",
            options: [
                { text: "Cukrovou řepu na cukr", icon: "🍬", isCorrect: true },
                { text: "Obilí na mouku", icon: "🌾", isCorrect: false },
                { text: "Ovoce na džem", icon: "🍓", isCorrect: false },
                { text: "Mléko na máslo", icon: "🧈", isCorrect: false }
            ],
            explanation: "Cukrovary extrahují sacharózu z cukrové řepy."
        },
        {
            question: "Sladovna vyrábí:",
            type: "multiple_choice",
            options: [
                { text: "Slad z ječmene pro pivovarnictví", icon: "🍺", isCorrect: true },
                { text: "Sladkosti", icon: "🍭", isCorrect: false },
                { text: "Sladké nápoje", icon: "🥤", isCorrect: false },
                { text: "Cukr", icon: "🍬", isCorrect: false }
            ],
            explanation: "Sladovny řízeně klíčí ječmen pro vytvoření sladu, základu piva."
        },
        {
            question: "Co je rafinace oleje?",
            type: "multiple_choice",
            options: [
                { text: "Čištění a úprava surového oleje", icon: "🧪", isCorrect: true },
                { text: "Lisování oleje", icon: "⚙️", isCorrect: false },
                { text: "Sklizeň olejnin", icon: "🌻", isCorrect: false },
                { text: "Balení oleje", icon: "📦", isCorrect: false }
            ],
            explanation: "Rafinace odstraňuje nečistoty, zlepšuje barvu, vůni a trvanlivost oleje."
        },
        {
            question: "Lihovar vyrábí:",
            type: "multiple_choice",
            options: [
                { text: "Líh (ethanol) z obilí nebo brambor", icon: "🥃", isCorrect: true },
                { text: "Pivo", icon: "🍺", isCorrect: false },
                { text: "Víno", icon: "🍷", isCorrect: false },
                { text: "Džus", icon: "🧃", isCorrect: false }
            ],
            explanation: "Lihovary kvašením a destilací vyrábějí ethanol pro nápoje i průmysl."
        },
        {
            question: "Škrobárna zpracovává:",
            type: "multiple_choice",
            options: [
                { text: "Brambory nebo kukuřici na škrob", icon: "🥔", isCorrect: true },
                { text: "Obilí na mouku", icon: "🌾", isCorrect: false },
                { text: "Mléko na sýr", icon: "🧀", isCorrect: false },
                { text: "Ovoce na kompot", icon: "🍑", isCorrect: false }
            ],
            explanation: "Škrobárny extrahují škrob, používaný v potravinářství i průmyslu."
        },
        {
            question: "Mrazírna slouží k:",
            type: "multiple_choice",
            options: [
                { text: "Konzervaci potravin mrazením", icon: "❄️", isCorrect: true },
                { text: "Zahřívání potravin", icon: "🔥", isCorrect: false },
                { text: "Sušení potravin", icon: "☀️", isCorrect: false },
                { text: "Mletí potravin", icon: "⚙️", isCorrect: false }
            ],
            explanation: "Rychlé zmrazení zachovává kvalitu ovoce a zeleniny po dlouhou dobu."
        },
        {
            question: "Konzervárna vyrábí:",
            type: "multiple_choice",
            options: [
                { text: "Sterilované potraviny v obalech", icon: "🥫", isCorrect: true },
                { text: "Čerstvé potraviny", icon: "🥬", isCorrect: false },
                { text: "Mražené výrobky", icon: "❄️", isCorrect: false },
                { text: "Sušené potraviny", icon: "☀️", isCorrect: false }
            ],
            explanation: "Konzervárny tepelně ošetřují potraviny pro dlouhodobé skladování."
        },
        {
            question: "Výrobky z farmy mohou jít:",
            type: "multiple_choice",
            options: [
                { text: "Přímo spotřebiteli nebo do zpracování", icon: "🔄", isCorrect: true },
                { text: "Pouze do supermarketu", icon: "🛒", isCorrect: false },
                { text: "Pouze do zahraničí", icon: "✈️", isCorrect: false },
                { text: "Nikam", icon: "⛔", isCorrect: false }
            ],
            explanation: "Farmáři mohou prodávat přímo (farmářské trhy) nebo přes zpracovatele."
        }
    ],

    // Level 6 - Marketing a prodej
    module3_level6: [
        {
            question: "Co je farmářský trh?",
            type: "multiple_choice",
            options: [
                { text: "Místo přímého prodeje od farmářů", icon: "🏪", isCorrect: true },
                { text: "Burza cenných papírů", icon: "📈", isCorrect: false },
                { text: "Supermarket", icon: "🛒", isCorrect: false },
                { text: "Sklad obilí", icon: "🌾", isCorrect: false }
            ],
            explanation: "Farmářské trhy umožňují přímý kontakt výrobce se spotřebitelem."
        },
        {
            question: "Co je přímý prodej ze dvora?",
            type: "multiple_choice",
            options: [
                { text: "Prodej přímo z farmy zákazníkům", icon: "🏡", isCorrect: true },
                { text: "Prodej přes internet", icon: "💻", isCorrect: false },
                { text: "Prodej do supermarketu", icon: "🛒", isCorrect: false },
                { text: "Export do zahraničí", icon: "✈️", isCorrect: false }
            ],
            explanation: "Zákazníci přijíždějí přímo na farmu pro čerstvé produkty."
        },
        {
            question: "Co je bedýnkový systém?",
            type: "multiple_choice",
            options: [
                { text: "Pravidelný rozvoz sezónní zeleniny", icon: "📦", isCorrect: true },
                { text: "Skladování v bedýnkách", icon: "🗃️", isCorrect: false },
                { text: "Prodej bedýnek", icon: "🪵", isCorrect: false },
                { text: "Typ balení", icon: "📦", isCorrect: false }
            ],
            explanation: "Zákazníci odebírají pravidelně bedýnky se sezónními produkty z farmy."
        },
        {
            question: "Bio certifikace znamená:",
            type: "multiple_choice",
            options: [
                { text: "Potvrzení ekologického hospodaření", icon: "🌿", isCorrect: true },
                { text: "Vysokou kvalitu", icon: "⭐", isCorrect: false },
                { text: "Nízkou cenu", icon: "💰", isCorrect: false },
                { text: "Zahraniční původ", icon: "✈️", isCorrect: false }
            ],
            explanation: "Bio certifikát potvrzuje dodržování pravidel ekologického zemědělství."
        },
        {
            question: "Značka kvality KLASA označuje:",
            type: "multiple_choice",
            options: [
                { text: "České potraviny vysoké kvality", icon: "🏆", isCorrect: true },
                { text: "Dovážené potraviny", icon: "✈️", isCorrect: false },
                { text: "Nejlevnější potraviny", icon: "💰", isCorrect: false },
                { text: "Bio potraviny", icon: "🌿", isCorrect: false }
            ],
            explanation: "KLASA je česká národní značka pro kvalitní potravinářské výrobky."
        },
        {
            question: "Co je CHZO/CHOP?",
            type: "multiple_choice",
            options: [
                { text: "Chráněné označení původu/zeměpisné označení", icon: "🏅", isCorrect: true },
                { text: "Chemická zkratka", icon: "🧪", isCorrect: false },
                { text: "Typ hnojiva", icon: "🌱", isCorrect: false },
                { text: "Druh pesticidu", icon: "💊", isCorrect: false }
            ],
            explanation: "EU chrání tradiční regionální produkty těmito označeními."
        },
        {
            question: "Burza MATIF obchoduje s:",
            type: "multiple_choice",
            options: [
                { text: "Komoditami včetně obilovin", icon: "📊", isCorrect: true },
                { text: "Pouze akciemi", icon: "📈", isCorrect: false },
                { text: "Pouze měnami", icon: "💱", isCorrect: false },
                { text: "Pouze zlatem", icon: "🥇", isCorrect: false }
            ],
            explanation: "MATIF (nyní Euronext) je evropská komoditní burza pro zemědělské produkty."
        },
        {
            question: "Intervenční cena je:",
            type: "multiple_choice",
            options: [
                { text: "Minimální garantovaná cena od EU", icon: "💶", isCorrect: true },
                { text: "Tržní cena", icon: "📊", isCorrect: false },
                { text: "Maximální cena", icon: "📈", isCorrect: false },
                { text: "Průměrná cena", icon: "➗", isCorrect: false }
            ],
            explanation: "EU garantuje minimální ceny některých komodit jako pojistku pro farmáře."
        },
        {
            question: "E-shop s farmářskými produkty:",
            type: "multiple_choice",
            options: [
                { text: "Rozšiřuje dosah prodeje", icon: "🌐", isCorrect: true },
                { text: "Je zakázaný", icon: "⛔", isCorrect: false },
                { text: "Snižuje kvalitu", icon: "📉", isCorrect: false },
                { text: "Je příliš složitý", icon: "😵", isCorrect: false }
            ],
            explanation: "Online prodej umožňuje farmářům oslovit širší okruh zákazníků."
        },
        {
            question: "Co je vertikální integrace?",
            type: "multiple_choice",
            options: [
                { text: "Propojení výroby, zpracování a prodeje", icon: "🔗", isCorrect: true },
                { text: "Stavba výškových budov", icon: "🏢", isCorrect: false },
                { text: "Typ pěstování", icon: "🌱", isCorrect: false },
                { text: "Druh hnojení", icon: "🧪", isCorrect: false }
            ],
            explanation: "Vertikální integrace zvyšuje přidanou hodnotu a kontrolu nad celým řetězcem."
        }
    ],

    // Level 7 - Ekonomika farmy
    module3_level7: [
        {
            question: "Co jsou variabilní náklady?",
            type: "multiple_choice",
            options: [
                { text: "Náklady měnící se s objemem výroby", icon: "📊", isCorrect: true },
                { text: "Stálé náklady", icon: "➡️", isCorrect: false },
                { text: "Pouze mzdy", icon: "💰", isCorrect: false },
                { text: "Pouze energie", icon: "⚡", isCorrect: false }
            ],
            explanation: "Variabilní náklady (osivo, hnojiva, PHM) rostou s rozsahem výroby."
        },
        {
            question: "Fixní náklady zahrnují:",
            type: "multiple_choice",
            options: [
                { text: "Odpisy, pojištění, nájem", icon: "🏠", isCorrect: true },
                { text: "Pouze osivo", icon: "🌰", isCorrect: false },
                { text: "Pouze hnojiva", icon: "🧪", isCorrect: false },
                { text: "Pouze pohonné hmoty", icon: "⛽", isCorrect: false }
            ],
            explanation: "Fixní náklady zůstávají stejné bez ohledu na objem produkce."
        },
        {
            question: "Hrubá marže je:",
            type: "multiple_choice",
            options: [
                { text: "Tržby minus variabilní náklady", icon: "💵", isCorrect: true },
                { text: "Čistý zisk", icon: "💰", isCorrect: false },
                { text: "Celkové náklady", icon: "📊", isCorrect: false },
                { text: "Investice", icon: "📈", isCorrect: false }
            ],
            explanation: "Hrubá marže ukazuje příspěvek plodiny na úhradu fixních nákladů a zisku."
        },
        {
            question: "Co je bod zvratu?",
            type: "multiple_choice",
            options: [
                { text: "Objem výroby, kdy se tržby = náklady", icon: "⚖️", isCorrect: true },
                { text: "Maximum zisku", icon: "📈", isCorrect: false },
                { text: "Minimum nákladů", icon: "📉", isCorrect: false },
                { text: "Průměrný výnos", icon: "➗", isCorrect: false }
            ],
            explanation: "V bodě zvratu farma neprodělává ani nevydělává - pokrývá jen náklady."
        },
        {
            question: "Dotace SAPS jsou:",
            type: "multiple_choice",
            options: [
                { text: "Přímé platby na hektar", icon: "💶", isCorrect: true },
                { text: "Úvěry", icon: "🏦", isCorrect: false },
                { text: "Daně", icon: "📋", isCorrect: false },
                { text: "Pokuty", icon: "⚠️", isCorrect: false }
            ],
            explanation: "SAPS (Single Area Payment Scheme) jsou přímé platby EU na obhospodařovanou plochu."
        },
        {
            question: "Greeningové platby jsou za:",
            type: "multiple_choice",
            options: [
                { text: "Ekologické postupy (diverzifikace, EFA)", icon: "🌿", isCorrect: true },
                { text: "Zelený nátěr budov", icon: "🏠", isCorrect: false },
                { text: "Výsadbu stromů", icon: "🌳", isCorrect: false },
                { text: "Nákup zelené techniky", icon: "🚜", isCorrect: false }
            ],
            explanation: "Greening odměňuje farmáře za diverzifikaci plodin a plochy v ekologickém zájmu."
        },
        {
            question: "PRV je program pro:",
            type: "multiple_choice",
            options: [
                { text: "Rozvoj venkova", icon: "🏡", isCorrect: true },
                { text: "Rozvoj průmyslu", icon: "🏭", isCorrect: false },
                { text: "Rozvoj měst", icon: "🌆", isCorrect: false },
                { text: "Osobní rozvoj", icon: "📚", isCorrect: false }
            ],
            explanation: "Program rozvoje venkova podporuje investice, mladé farmáře, LFA aj."
        },
        {
            question: "LFA platby dostávají:",
            type: "multiple_choice",
            options: [
                { text: "Farmáři v méně příznivých oblastech", icon: "🏔️", isCorrect: true },
                { text: "Všichni farmáři", icon: "👨‍🌾", isCorrect: false },
                { text: "Pouze velkofarmáři", icon: "🏭", isCorrect: false },
                { text: "Pouze bio farmáři", icon: "🌿", isCorrect: false }
            ],
            explanation: "LFA kompenzuje farmářům horší přírodní podmínky (hory, sušší oblasti)."
        },
        {
            question: "Účetnictví farmy je důležité pro:",
            type: "multiple_choice",
            options: [
                { text: "Plánování, daně, úvěry", icon: "📊", isCorrect: true },
                { text: "Pouze daně", icon: "📋", isCorrect: false },
                { text: "Pouze úvěry", icon: "🏦", isCorrect: false },
                { text: "Není důležité", icon: "❌", isCorrect: false }
            ],
            explanation: "Správné účetnictví je základem pro rozhodování a ekonomické řízení farmy."
        },
        {
            question: "Pojištění plodin chrání proti:",
            type: "multiple_choice",
            options: [
                { text: "Přírodním rizikům (sucho, kroupy)", icon: "🛡️", isCorrect: true },
                { text: "Pouze krádeži", icon: "🔒", isCorrect: false },
                { text: "Pouze požáru", icon: "🔥", isCorrect: false },
                { text: "Ničemu", icon: "❌", isCorrect: false }
            ],
            explanation: "Pojištění plodin minimalizuje ekonomický dopad nepříznivých klimatických jevů."
        }
    ],

    // Level 8 - Hygiena a bezpečnost potravin
    module3_level8: [
        {
            question: "HACCP je systém pro:",
            type: "multiple_choice",
            options: [
                { text: "Kontrolu kritických bodů bezpečnosti potravin", icon: "✅", isCorrect: true },
                { text: "Účetnictví", icon: "📊", isCorrect: false },
                { text: "Marketing", icon: "📣", isCorrect: false },
                { text: "Dopravu", icon: "🚚", isCorrect: false }
            ],
            explanation: "HACCP identifikuje a kontroluje rizika ohrožující bezpečnost potravin."
        },
        {
            question: "Sledovatelnost potravin znamená:",
            type: "multiple_choice",
            options: [
                { text: "Možnost vystopovat původ potraviny", icon: "🔍", isCorrect: true },
                { text: "Sledování ceny", icon: "💰", isCorrect: false },
                { text: "Sledování počasí", icon: "🌤️", isCorrect: false },
                { text: "Sledování konkurence", icon: "👀", isCorrect: false }
            ],
            explanation: "Sledovatelnost umožňuje dohledat cestu produktu od pole ke stolu."
        },
        {
            question: "Co je kontaminace potravin?",
            type: "multiple_choice",
            options: [
                { text: "Znečištění nežádoucími látkami", icon: "☠️", isCorrect: true },
                { text: "Zlepšení chuti", icon: "😋", isCorrect: false },
                { text: "Balení potravin", icon: "📦", isCorrect: false },
                { text: "Chlazení potravin", icon: "❄️", isCorrect: false }
            ],
            explanation: "Kontaminace může být chemická, biologická nebo fyzikální."
        },
        {
            question: "Mykotoxiny jsou:",
            type: "multiple_choice",
            options: [
                { text: "Jedy produkované plísněmi", icon: "🍄", isCorrect: true },
                { text: "Vitamíny", icon: "💊", isCorrect: false },
                { text: "Hnojiva", icon: "🧪", isCorrect: false },
                { text: "Pesticidy", icon: "💦", isCorrect: false }
            ],
            explanation: "Mykotoxiny (aflatoxiny, ochratoxiny) vznikají v plesnivém zrnu a jsou karcinogenní."
        },
        {
            question: "Maximální rezidua pesticidů kontroluje:",
            type: "multiple_choice",
            options: [
                { text: "Státní veterinární a potravinová správa", icon: "🏛️", isCorrect: true },
                { text: "Nikdo", icon: "❌", isCorrect: false },
                { text: "Pouze farmář", icon: "👨‍🌾", isCorrect: false },
                { text: "Pouze zákazník", icon: "🛒", isCorrect: false }
            ],
            explanation: "SVS provádí kontroly reziduí pesticidů v potravinách."
        },
        {
            question: "Správná zemědělská praxe (GAP) zahrnuje:",
            type: "multiple_choice",
            options: [
                { text: "Postupy pro bezpečnou a kvalitní produkci", icon: "✅", isCorrect: true },
                { text: "Pouze maximalizaci zisku", icon: "💰", isCorrect: false },
                { text: "Pouze ekologii", icon: "🌿", isCorrect: false },
                { text: "Pouze tradici", icon: "📜", isCorrect: false }
            ],
            explanation: "GAP stanovuje zásady pro udržitelnou a bezpečnou zemědělskou výrobu."
        },
        {
            question: "Cross compliance je:",
            type: "multiple_choice",
            options: [
                { text: "Podmínky pro získání dotací", icon: "📋", isCorrect: true },
                { text: "Druh křížení plodin", icon: "🌱", isCorrect: false },
                { text: "Typ smlouvy", icon: "📄", isCorrect: false },
                { text: "Druh pojištění", icon: "🛡️", isCorrect: false }
            ],
            explanation: "Cross compliance vyžaduje dodržování standardů pro environmentální a bezpečnostní normy."
        },
        {
            question: "Označení spotřeby je povinné na:",
            type: "multiple_choice",
            options: [
                { text: "Většině balených potravin", icon: "📦", isCorrect: true },
                { text: "Pouze na lécích", icon: "💊", isCorrect: false },
                { text: "Pouze na hračkách", icon: "🧸", isCorrect: false },
                { text: "Na ničem", icon: "❌", isCorrect: false }
            ],
            explanation: "Datum spotřeby nebo minimální trvanlivosti informuje o čerstvosti produktu."
        },
        {
            question: "Chladící řetězec je důležitý pro:",
            type: "multiple_choice",
            options: [
                { text: "Zachování kvality a bezpečnosti", icon: "❄️", isCorrect: true },
                { text: "Pouze dopravu", icon: "🚚", isCorrect: false },
                { text: "Pouze skladování", icon: "🏭", isCorrect: false },
                { text: "Není důležitý", icon: "❌", isCorrect: false }
            ],
            explanation: "Nepřerušený chladící řetězec brání množení mikroorganismů v potravinách."
        },
        {
            question: "Potravinové právo EU zajišťuje:",
            type: "multiple_choice",
            options: [
                { text: "Ochranu spotřebitele a volný obchod", icon: "⚖️", isCorrect: true },
                { text: "Pouze volný obchod", icon: "🌍", isCorrect: false },
                { text: "Pouze ochranu farmářů", icon: "👨‍🌾", isCorrect: false },
                { text: "Nic", icon: "❌", isCorrect: false }
            ],
            explanation: "Jednotná pravidla chrání zdraví a umožňují volný pohyb potravin v EU."
        }
    ],

    // Level 9 - Logistika a doprava
    module3_level9: [
        {
            question: "Logistika v zemědělství zahrnuje:",
            type: "multiple_choice",
            options: [
                { text: "Transport, skladování, manipulaci", icon: "🚛", isCorrect: true },
                { text: "Pouze setí", icon: "🌰", isCorrect: false },
                { text: "Pouze sklizeň", icon: "🌾", isCorrect: false },
                { text: "Pouze prodej", icon: "💰", isCorrect: false }
            ],
            explanation: "Logistika řeší efektivní pohyb produktů od pole ke spotřebiteli."
        },
        {
            question: "Návěs na obiloviny musí mít:",
            type: "multiple_choice",
            options: [
                { text: "Vysoké nepropustné bočnice", icon: "🚛", isCorrect: true },
                { text: "Otevřenou korbu", icon: "📭", isCorrect: false },
                { text: "Chladicí jednotku", icon: "❄️", isCorrect: false },
                { text: "Nic speciálního", icon: "🤷", isCorrect: false }
            ],
            explanation: "Vysoké bočnice brání ztrátám při přepravě sypkých materiálů."
        },
        {
            question: "Přeprava ovoce vyžaduje:",
            type: "multiple_choice",
            options: [
                { text: "Šetrnou manipulaci a chlazení", icon: "🍎", isCorrect: true },
                { text: "Vysokou rychlost", icon: "⚡", isCorrect: false },
                { text: "Horké prostředí", icon: "🔥", isCorrect: false },
                { text: "Nic speciálního", icon: "🤷", isCorrect: false }
            ],
            explanation: "Ovoce je náchylné na poškození a vyžaduje kontrolovanou teplotu."
        },
        {
            question: "ADR je předpis pro:",
            type: "multiple_choice",
            options: [
                { text: "Přepravu nebezpečných věcí", icon: "⚠️", isCorrect: true },
                { text: "Přepravu osob", icon: "👥", isCorrect: false },
                { text: "Přepravu zvířat", icon: "🐄", isCorrect: false },
                { text: "Přepravu rostlin", icon: "🌱", isCorrect: false }
            ],
            explanation: "ADR reguluje přepravu pesticidů, hnojiv a dalších nebezpečných látek."
        },
        {
            question: "GPS tracking v zemědělství slouží k:",
            type: "multiple_choice",
            options: [
                { text: "Sledování polohy strojů a zásilek", icon: "📍", isCorrect: true },
                { text: "Měření teploty", icon: "🌡️", isCorrect: false },
                { text: "Měření vlhkosti", icon: "💧", isCorrect: false },
                { text: "Ničemu", icon: "❌", isCorrect: false }
            ],
            explanation: "GPS umožňuje sledovat pohyb techniky a optimalizovat logistiku."
        },
        {
            question: "Manipulační technika na farmě zahrnuje:",
            type: "multiple_choice",
            options: [
                { text: "Nakladače, dopravníky, zvedáky", icon: "🏗️", isCorrect: true },
                { text: "Pouze traktory", icon: "🚜", isCorrect: false },
                { text: "Pouze kombajny", icon: "🌾", isCorrect: false },
                { text: "Pouze ruční práci", icon: "✋", isCorrect: false }
            ],
            explanation: "Manipulační technika usnadňuje nakládání, překládání a skladování."
        },
        {
            question: "Přeprava živých zvířat vyžaduje:",
            type: "multiple_choice",
            options: [
                { text: "Speciální vozy a povolení", icon: "🐄", isCorrect: true },
                { text: "Běžný nákladní vůz", icon: "🚛", isCorrect: false },
                { text: "Osobní auto", icon: "🚗", isCorrect: false },
                { text: "Nic speciálního", icon: "🤷", isCorrect: false }
            ],
            explanation: "Přeprava zvířat je regulována pravidly welfare a vyžaduje certifikaci."
        },
        {
            question: "Železniční přeprava obilí je:",
            type: "multiple_choice",
            options: [
                { text: "Ekonomická pro velké vzdálenosti", icon: "🚂", isCorrect: true },
                { text: "Vždy dražší než silniční", icon: "💰", isCorrect: false },
                { text: "Nemožná", icon: "⛔", isCorrect: false },
                { text: "Pouze pro osoby", icon: "👥", isCorrect: false }
            ],
            explanation: "Železnice je efektivní pro přepravu velkých objemů na delší vzdálenosti."
        },
        {
            question: "Kontejnerizace umožňuje:",
            type: "multiple_choice",
            options: [
                { text: "Snadnou překládku mezi dopravními prostředky", icon: "📦", isCorrect: true },
                { text: "Pouze námořní dopravu", icon: "🚢", isCorrect: false },
                { text: "Pouze leteckou dopravu", icon: "✈️", isCorrect: false },
                { text: "Nic", icon: "❌", isCorrect: false }
            ],
            explanation: "Standardizované kontejnery zjednodušují kombinovanou dopravu."
        },
        {
            question: "Poslední míle v logistice je:",
            type: "multiple_choice",
            options: [
                { text: "Doručení konečnému zákazníkovi", icon: "🏠", isCorrect: true },
                { text: "Nejdelší část trasy", icon: "🛣️", isCorrect: false },
                { text: "Pouze 1 míle", icon: "📏", isCorrect: false },
                { text: "Cesta z farmy", icon: "🏡", isCorrect: false }
            ],
            explanation: "Poslední míle je často nejdražší a nejsložitější část dodávky."
        }
    ],

    // Level 10 - Trendy a budoucnost
    module3_level10: [
        {
            question: "Co je precizní sklizeň?",
            type: "multiple_choice",
            options: [
                { text: "Sklizeň s využitím senzorů a dat", icon: "📊", isCorrect: true },
                { text: "Ruční sklizeň", icon: "✋", isCorrect: false },
                { text: "Sklizeň v noci", icon: "🌙", isCorrect: false },
                { text: "Rychlá sklizeň", icon: "⚡", isCorrect: false }
            ],
            explanation: "Precizní sklizeň využívá senzory pro optimalizaci výnosu a kvality."
        },
        {
            question: "Yield mapping (mapování výnosů) slouží k:",
            type: "multiple_choice",
            options: [
                { text: "Analýze variability výnosů na poli", icon: "🗺️", isCorrect: true },
                { text: "Pouze navigaci", icon: "🧭", isCorrect: false },
                { text: "Měření vlhkosti", icon: "💧", isCorrect: false },
                { text: "Ničemu", icon: "❌", isCorrect: false }
            ],
            explanation: "Mapy výnosů identifikují produktivní a problematické zóny pole."
        },
        {
            question: "Autonomní kombajny:",
            type: "multiple_choice",
            options: [
                { text: "Mohou sklízet bez řidiče", icon: "🤖", isCorrect: true },
                { text: "Neexistují", icon: "❌", isCorrect: false },
                { text: "Jsou zakázány", icon: "⛔", isCorrect: false },
                { text: "Pouze v laboratořích", icon: "🔬", isCorrect: false }
            ],
            explanation: "Autonomní stroje jsou realitou a budou stále běžnější."
        },
        {
            question: "Blockchain v potravinářství zajišťuje:",
            type: "multiple_choice",
            options: [
                { text: "Transparentní sledovatelnost", icon: "🔗", isCorrect: true },
                { text: "Pouze platby", icon: "💳", isCorrect: false },
                { text: "Pouze emaily", icon: "📧", isCorrect: false },
                { text: "Nic", icon: "❌", isCorrect: false }
            ],
            explanation: "Blockchain umožňuje neměnný záznam cesty produktu od farmy ke spotřebiteli."
        },
        {
            question: "Vertikální farmy produkují:",
            type: "multiple_choice",
            options: [
                { text: "Zeleninu ve vícepatrových budovách", icon: "🏢", isCorrect: true },
                { text: "Pouze obilí", icon: "🌾", isCorrect: false },
                { text: "Pouze dobytek", icon: "🐄", isCorrect: false },
                { text: "Nic", icon: "❌", isCorrect: false }
            ],
            explanation: "Vertikální farmy umožňují celoroční produkci v městském prostředí."
        },
        {
            question: "Plant-based produkty jsou:",
            type: "multiple_choice",
            options: [
                { text: "Potraviny rostlinného původu nahrazující maso", icon: "🌱", isCorrect: true },
                { text: "Pouze ovoce", icon: "🍎", isCorrect: false },
                { text: "Pouze zelenina", icon: "🥬", isCorrect: false },
                { text: "Hnojiva", icon: "🧪", isCorrect: false }
            ],
            explanation: "Rostlinné alternativy masa jsou rostoucím trendem potravinářství."
        },
        {
            question: "Cirkulární ekonomika v zemědělství znamená:",
            type: "multiple_choice",
            options: [
                { text: "Minimalizaci odpadu a využití zdrojů", icon: "♻️", isCorrect: true },
                { text: "Kulaté pole", icon: "⭕", isCorrect: false },
                { text: "Střídání plodin", icon: "🔄", isCorrect: false },
                { text: "Pouze recyklaci", icon: "🔁", isCorrect: false }
            ],
            explanation: "Cirkulární přístup využívá odpady jako zdroje a uzavírá materiálové cykly."
        },
        {
            question: "Carbon farming odměňuje farmáře za:",
            type: "multiple_choice",
            options: [
                { text: "Ukládání uhlíku do půdy", icon: "🌍", isCorrect: true },
                { text: "Spalování uhlí", icon: "⬛", isCorrect: false },
                { text: "Těžbu uhlí", icon: "⛏️", isCorrect: false },
                { text: "Nákup aut", icon: "🚗", isCorrect: false }
            ],
            explanation: "Uhlíkové zemědělství je nový zdroj příjmů za klimaticky příznivé postupy."
        },
        {
            question: "Short food supply chains (krátké řetězce) znamenají:",
            type: "multiple_choice",
            options: [
                { text: "Méně prostředníků mezi farmářem a spotřebitelem", icon: "🔗", isCorrect: true },
                { text: "Krátké potraviny", icon: "📏", isCorrect: false },
                { text: "Rychlé potraviny", icon: "⚡", isCorrect: false },
                { text: "Levné potraviny", icon: "💰", isCorrect: false }
            ],
            explanation: "Krátké řetězce zvyšují podíl farmáře na ceně a čerstvost produktů."
        },
        {
            question: "Budoucnost zemědělství směřuje k:",
            type: "multiple_choice",
            options: [
                { text: "Udržitelnosti, digitalizaci, lokálnosti", icon: "🎯", isCorrect: true },
                { text: "Pouze maximalizaci produkce", icon: "📈", isCorrect: false },
                { text: "Opuštění venkova", icon: "🏃", isCorrect: false },
                { text: "Pouze tradičním metodám", icon: "📜", isCorrect: false }
            ],
            explanation: "Moderní zemědělství kombinuje technologie s udržitelností a lokálními systémy."
        }
    ]
};
