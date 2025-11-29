// Modul 1: Půda a Základy - 100 otázek (10 levelů x 10 otázek)
const MODULE1_QUESTIONS = {
    // Level 1 - Základy půdy
    module1_level1: [
        {
            question: "Co je hlavní složkou zdravé půdy?",
            type: "multiple_choice",
            options: [
                { text: "Humus", icon: "🌱", isCorrect: true },
                { text: "Písek", icon: "🏖️", isCorrect: false },
                { text: "Kámen", icon: "🪨", isCorrect: false },
                { text: "Plast", icon: "🧴", isCorrect: false }
            ],
            explanation: "Humus je rozložená organická hmota, která dodává půdě živiny a zlepšuje její strukturu."
        },
        {
            question: "Jaká je ideální hodnota pH pro většinu plodin?",
            type: "multiple_choice",
            options: [
                { text: "2-3 (velmi kyselé)", icon: "🍋", isCorrect: false },
                { text: "6-7 (mírně kyselé až neutrální)", icon: "✅", isCorrect: true },
                { text: "10-12 (velmi zásadité)", icon: "🧪", isCorrect: false },
                { text: "0-1 (extrémně kyselé)", icon: "⚠️", isCorrect: false }
            ],
            explanation: "Většina plodin roste nejlépe v mírně kyselé až neutrální půdě s pH 6-7."
        },
        {
            question: "Co znamená zkratka NPK?",
            type: "multiple_choice",
            options: [
                { text: "Dusík, Fosfor, Draslík", icon: "🧪", isCorrect: true },
                { text: "Nikl, Platina, Kobalt", icon: "⚗️", isCorrect: false },
                { text: "Nový Pěstební Komplex", icon: "📦", isCorrect: false },
                { text: "Národní Park Krkonoše", icon: "🏔️", isCorrect: false }
            ],
            explanation: "NPK jsou tři základní živiny pro rostliny: Dusík (N), Fosfor (P) a Draslík (K)."
        },
        {
            question: "Která vrstva půdy obsahuje nejvíce organické hmoty?",
            type: "multiple_choice",
            options: [
                { text: "Ornice (vrchní vrstva)", icon: "🌱", isCorrect: true },
                { text: "Podorničí", icon: "⬇️", isCorrect: false },
                { text: "Matečná hornina", icon: "🪨", isCorrect: false },
                { text: "Spodní voda", icon: "💧", isCorrect: false }
            ],
            explanation: "Ornice je vrchní vrstva půdy bohatá na organickou hmotu a mikroorganismy."
        },
        {
            question: "Proč je důležité střídat plodiny na poli?",
            type: "multiple_choice",
            options: [
                { text: "Pro zábavu farmáře", icon: "😄", isCorrect: false },
                { text: "Aby se vyčerpaly živiny", icon: "📉", isCorrect: false },
                { text: "Pro prevenci chorob a zlepšení půdy", icon: "✅", isCorrect: true },
                { text: "Protože to nařizuje zákon", icon: "📜", isCorrect: false }
            ],
            explanation: "Střídání plodin zabraňuje hromadění škůdců a chorob a obnovuje živiny v půdě."
        },
        {
            question: "Co je kompost?",
            type: "multiple_choice",
            options: [
                { text: "Chemické hnojivo", icon: "🧪", isCorrect: false },
                { text: "Rozložená organická hmota", icon: "🌿", isCorrect: true },
                { text: "Typ pesticidu", icon: "🐛", isCorrect: false },
                { text: "Plastový materiál", icon: "🧴", isCorrect: false }
            ],
            explanation: "Kompost je přírodní hnojivo vzniklé rozkladem organických materiálů jako listí, tráva a zbytky jídla."
        },
        {
            question: "Jaký typ půdy nejlépe zadržuje vodu?",
            type: "multiple_choice",
            options: [
                { text: "Písčitá", icon: "🏖️", isCorrect: false },
                { text: "Jílovitá", icon: "🧱", isCorrect: true },
                { text: "Kamenitá", icon: "🪨", isCorrect: false },
                { text: "Štěrkovitá", icon: "⚪", isCorrect: false }
            ],
            explanation: "Jílovitá půda má velmi jemné částice, které dobře zadržují vodu, ale může být špatně propustná."
        },
        {
            question: "Co dělají žížaly v půdě?",
            type: "multiple_choice",
            options: [
                { text: "Ničí kořeny rostlin", icon: "❌", isCorrect: false },
                { text: "Provzdušňují půdu a tvoří humus", icon: "✅", isCorrect: true },
                { text: "Jedí semena", icon: "🌰", isCorrect: false },
                { text: "Nic užitečného", icon: "🤷", isCorrect: false }
            ],
            explanation: "Žížaly jsou velmi užitečné - provzdušňují půdu svými chodbami a jejich trus je vynikající hnojivo."
        },
        {
            question: "Jak poznáme kyselou půdu bez měření?",
            type: "multiple_choice",
            options: [
                { text: "Roste tam mech a šťovík", icon: "🌿", isCorrect: true },
                { text: "Je tam hodně žížal", icon: "🪱", isCorrect: false },
                { text: "Půda je červená", icon: "🔴", isCorrect: false },
                { text: "Voní po citronech", icon: "🍋", isCorrect: false }
            ],
            explanation: "Mech, šťovík a přeslička jsou indikátory kyselé půdy."
        },
        {
            question: "Co je eroze půdy?",
            type: "multiple_choice",
            options: [
                { text: "Obohacení půdy živinami", icon: "📈", isCorrect: false },
                { text: "Odnos půdy vodou nebo větrem", icon: "💨", isCorrect: true },
                { text: "Růst rostlin", icon: "🌱", isCorrect: false },
                { text: "Hnojení pole", icon: "🧪", isCorrect: false }
            ],
            explanation: "Eroze je ztráta úrodné vrchní vrstvy půdy působením vody, větru nebo nevhodného hospodaření."
        }
    ],

    // Level 2 - Typy půd
    module1_level2: [
        {
            question: "Která půda je nejúrodnější?",
            type: "multiple_choice",
            options: [
                { text: "Černozem", icon: "⬛", isCorrect: true },
                { text: "Podzol", icon: "🟤", isCorrect: false },
                { text: "Solončak", icon: "🧂", isCorrect: false },
                { text: "Rendzina", icon: "⚪", isCorrect: false }
            ],
            explanation: "Černozem je neúrodnější typ půdy s vysokým obsahem humusu, typická pro stepi."
        },
        {
            question: "Co charakterizuje písčitou půdu?",
            type: "multiple_choice",
            options: [
                { text: "Dobře propustná, rychle vysychá", icon: "🏜️", isCorrect: true },
                { text: "Těžká, špatně propustná", icon: "🧱", isCorrect: false },
                { text: "Velmi úrodná", icon: "🌾", isCorrect: false },
                { text: "Tmavě zbarvená", icon: "⬛", isCorrect: false }
            ],
            explanation: "Písčitá půda má velké částice, voda jí rychle protéká a snadno vysychá."
        },
        {
            question: "Jak zlepšit jílovitou půdu?",
            type: "multiple_choice",
            options: [
                { text: "Přidat písek a organickou hmotu", icon: "✅", isCorrect: true },
                { text: "Přidat více jílu", icon: "🧱", isCorrect: false },
                { text: "Zalévat slanou vodou", icon: "🧂", isCorrect: false },
                { text: "Nechat ladem 10 let", icon: "⏳", isCorrect: false }
            ],
            explanation: "Přidáním písku a kompostu zlepšíme propustnost a strukturu jílovité půdy."
        },
        {
            question: "Co je hlinitá půda?",
            type: "multiple_choice",
            options: [
                { text: "Směs písku, jílu a prachu", icon: "✅", isCorrect: true },
                { text: "Čistý písek", icon: "🏖️", isCorrect: false },
                { text: "Pouze jíl", icon: "🧱", isCorrect: false },
                { text: "Kamenité podloží", icon: "🪨", isCorrect: false }
            ],
            explanation: "Hlinitá půda je ideální směs písku, jílu a prachu s dobrými vlastnostmi pro pěstování."
        },
        {
            question: "Rašelinová půda obsahuje hlavně:",
            type: "multiple_choice",
            options: [
                { text: "Nerozloženou organickou hmotu", icon: "🌿", isCorrect: true },
                { text: "Písek", icon: "🏖️", isCorrect: false },
                { text: "Vápenec", icon: "�ite", isCorrect: false },
                { text: "Železnou rudu", icon: "⚙️", isCorrect: false }
            ],
            explanation: "Rašelina vzniká ve vlhkém prostředí z neúplně rozložených rostlin."
        },
        {
            question: "Jakou barvu má půda bohatá na železo?",
            type: "multiple_choice",
            options: [
                { text: "Černou", icon: "⬛", isCorrect: false },
                { text: "Červenou až oranžovou", icon: "🟠", isCorrect: true },
                { text: "Modrou", icon: "🔵", isCorrect: false },
                { text: "Zelenou", icon: "🟢", isCorrect: false }
            ],
            explanation: "Oxidy železa dávají půdě charakteristickou červenou nebo oranžovou barvu."
        },
        {
            question: "Co je to půdní profil?",
            type: "multiple_choice",
            options: [
                { text: "Svislý řez půdou ukazující vrstvy", icon: "📊", isCorrect: true },
                { text: "Mapa pozemku", icon: "🗺️", isCorrect: false },
                { text: "Seznam plodin", icon: "📋", isCorrect: false },
                { text: "Rozbor vody", icon: "💧", isCorrect: false }
            ],
            explanation: "Půdní profil ukazuje jednotlivé vrstvy (horizonty) půdy od povrchu až po matečnou horninu."
        },
        {
            question: "Který horizont označujeme písmenem A?",
            type: "multiple_choice",
            options: [
                { text: "Vrchní vrstva (ornice)", icon: "🌱", isCorrect: true },
                { text: "Matečná hornina", icon: "🪨", isCorrect: false },
                { text: "Podzemní voda", icon: "💧", isCorrect: false },
                { text: "Vzduch nad povrchem", icon: "💨", isCorrect: false }
            ],
            explanation: "Horizont A je vrchní vrstva půdy bohatá na organickou hmotu."
        },
        {
            question: "Co způsobuje zasolení půdy?",
            type: "multiple_choice",
            options: [
                { text: "Nadměrné zavlažování v suchých oblastech", icon: "🏜️", isCorrect: true },
                { text: "Příliš mnoho deště", icon: "🌧️", isCorrect: false },
                { text: "Pěstování zeleniny", icon: "🥬", isCorrect: false },
                { text: "Sázení stromů", icon: "🌳", isCorrect: false }
            ],
            explanation: "V suchých oblastech se při odpařování zavlažovací vody hromadí soli v povrchové vrstvě."
        },
        {
            question: "Jak se nazývá půda vzniklá na vápenci?",
            type: "multiple_choice",
            options: [
                { text: "Rendzina", icon: "�ite", isCorrect: true },
                { text: "Podzol", icon: "🟤", isCorrect: false },
                { text: "Černozem", icon: "⬛", isCorrect: false },
                { text: "Glej", icon: "💧", isCorrect: false }
            ],
            explanation: "Rendzina je mělká půda vzniklá na vápencovém podloží, typická pro krasové oblasti."
        }
    ],

    // Level 3 - Výživa rostlin
    module1_level3: [
        {
            question: "K čemu rostliny potřebují dusík (N)?",
            type: "multiple_choice",
            options: [
                { text: "K růstu listů a stonků", icon: "🌿", isCorrect: true },
                { text: "K tvorbě květů", icon: "🌸", isCorrect: false },
                { text: "K tvorbě kořenů", icon: "🌱", isCorrect: false },
                { text: "K odpuzování hmyzu", icon: "🐛", isCorrect: false }
            ],
            explanation: "Dusík je základní stavební kámen bílkovin a chlorofylu, podporuje růst zelených částí."
        },
        {
            question: "Fosfor (P) podporuje především:",
            type: "multiple_choice",
            options: [
                { text: "Růst listů", icon: "🌿", isCorrect: false },
                { text: "Tvorbu kořenů a květů", icon: "🌸", isCorrect: true },
                { text: "Barvu plodů", icon: "🎨", isCorrect: false },
                { text: "Chuť ovoce", icon: "🍎", isCorrect: false }
            ],
            explanation: "Fosfor je důležitý pro energetický metabolismus, tvorbu kořenů, květů a semen."
        },
        {
            question: "Draslík (K) pomáhá rostlinám:",
            type: "multiple_choice",
            options: [
                { text: "Odolávat suchu a mrazu", icon: "❄️", isCorrect: true },
                { text: "Růst rychleji do výšky", icon: "📏", isCorrect: false },
                { text: "Mít větší listy", icon: "🍃", isCorrect: false },
                { text: "Vonět příjemněji", icon: "👃", isCorrect: false }
            ],
            explanation: "Draslík reguluje vodní režim rostlin a zvyšuje odolnost vůči stresu."
        },
        {
            question: "Žluté listy mohou signalizovat nedostatek:",
            type: "multiple_choice",
            options: [
                { text: "Dusíku", icon: "🟡", isCorrect: true },
                { text: "Vápníku", icon: "⚪", isCorrect: false },
                { text: "Světla", icon: "☀️", isCorrect: false },
                { text: "Oxidu uhličitého", icon: "💨", isCorrect: false }
            ],
            explanation: "Nedostatek dusíku způsobuje chlorózu - žloutnutí listů od spodních částí rostliny."
        },
        {
            question: "Které hnojivo dodává hlavně dusík?",
            type: "multiple_choice",
            options: [
                { text: "Ledek amonný", icon: "🧪", isCorrect: true },
                { text: "Superfosfát", icon: "📦", isCorrect: false },
                { text: "Draselná sůl", icon: "🧂", isCorrect: false },
                { text: "Vápenec", icon: "⚪", isCorrect: false }
            ],
            explanation: "Ledek amonný (NH4NO3) je koncentrované dusíkaté hnojivo."
        },
        {
            question: "Co jsou mikroživiny?",
            type: "multiple_choice",
            options: [
                { text: "Živiny potřebné ve stopových množstvích", icon: "🔬", isCorrect: true },
                { text: "Malá semena", icon: "🌰", isCorrect: false },
                { text: "Mikroorganismy", icon: "🦠", isCorrect: false },
                { text: "Mladé rostlinky", icon: "🌱", isCorrect: false }
            ],
            explanation: "Mikroživiny (Fe, Zn, Mn, Cu, B, Mo) jsou potřebné v malém množství, ale jsou nezbytné."
        },
        {
            question: "Nedostatek železa se projevuje:",
            type: "multiple_choice",
            options: [
                { text: "Žloutnutím mladých listů", icon: "🌿", isCorrect: true },
                { text: "Hnědnutím kořenů", icon: "🟤", isCorrect: false },
                { text: "Opadáváním květů", icon: "🌸", isCorrect: false },
                { text: "Zvětšením plodů", icon: "🍎", isCorrect: false }
            ],
            explanation: "Chloróza způsobená nedostatkem železa postihuje nejprve nejmladší listy."
        },
        {
            question: "Vápník je důležitý pro:",
            type: "multiple_choice",
            options: [
                { text: "Pevnost buněčných stěn", icon: "🧱", isCorrect: true },
                { text: "Barvu květů", icon: "🌺", isCorrect: false },
                { text: "Rychlost růstu", icon: "⚡", isCorrect: false },
                { text: "Vůni rostlin", icon: "👃", isCorrect: false }
            ],
            explanation: "Vápník je stavební součástí buněčných stěn a zajišťuje pevnost rostlinných pletiv."
        },
        {
            question: "Hořčík je součástí:",
            type: "multiple_choice",
            options: [
                { text: "Chlorofylu", icon: "🌿", isCorrect: true },
                { text: "Kořenů", icon: "🌱", isCorrect: false },
                { text: "Semen", icon: "🌰", isCorrect: false },
                { text: "Květů", icon: "🌸", isCorrect: false }
            ],
            explanation: "Hořčík je centrálním atomem molekuly chlorofylu, bez něj by rostliny nemohly fotosyntetizovat."
        },
        {
            question: "Co je to listová výživa?",
            type: "multiple_choice",
            options: [
                { text: "Aplikace hnojiv na listy postřikem", icon: "💦", isCorrect: true },
                { text: "Krmení listů hmyzem", icon: "🐛", isCorrect: false },
                { text: "Ořezávání listů", icon: "✂️", isCorrect: false },
                { text: "Sběr listů", icon: "🍂", isCorrect: false }
            ],
            explanation: "Listová výživa umožňuje rychlé dodání živin přímo přes listy, využívá se při akutním nedostatku."
        }
    ],

    // Level 4 - Zpracování půdy
    module1_level4: [
        {
            question: "Co je orba?",
            type: "multiple_choice",
            options: [
                { text: "Obracení půdy pluhem", icon: "🚜", isCorrect: true },
                { text: "Setí semen", icon: "🌰", isCorrect: false },
                { text: "Sklizeň obilí", icon: "🌾", isCorrect: false },
                { text: "Zalévání pole", icon: "💧", isCorrect: false }
            ],
            explanation: "Orba je základní způsob zpracování půdy, při kterém se půda obrací a kypří."
        },
        {
            question: "Kdy je nejlepší orat?",
            type: "multiple_choice",
            options: [
                { text: "Na podzim po sklizni", icon: "🍂", isCorrect: true },
                { text: "V létě za horka", icon: "☀️", isCorrect: false },
                { text: "Když je půda zmrzlá", icon: "❄️", isCorrect: false },
                { text: "Během silného deště", icon: "🌧️", isCorrect: false }
            ],
            explanation: "Podzimní orba umožňuje promrznutí půdy, což zlepšuje její strukturu."
        },
        {
            question: "Co je minimalizační zpracování půdy?",
            type: "multiple_choice",
            options: [
                { text: "Omezení intenzity zpracování půdy", icon: "♻️", isCorrect: true },
                { text: "Malé pole", icon: "📏", isCorrect: false },
                { text: "Použití malého traktoru", icon: "🚜", isCorrect: false },
                { text: "Minimum hnojiv", icon: "🧪", isCorrect: false }
            ],
            explanation: "Minimalizace omezuje orbu a chrání strukturu půdy, šetří čas a pohonné hmoty."
        },
        {
            question: "K čemu slouží brány?",
            type: "multiple_choice",
            options: [
                { text: "K drobení a urovnání půdy", icon: "✅", isCorrect: true },
                { text: "K orání", icon: "🚜", isCorrect: false },
                { text: "K zavlažování", icon: "💧", isCorrect: false },
                { text: "K postřiku", icon: "💦", isCorrect: false }
            ],
            explanation: "Brány se používají po orbě k rozdrobení hrud a přípravě seťového lůžka."
        },
        {
            question: "Co je to bezorebné hospodaření?",
            type: "multiple_choice",
            options: [
                { text: "Pěstování bez orání půdy", icon: "🌱", isCorrect: true },
                { text: "Pěstování bez hnojiv", icon: "🧪", isCorrect: false },
                { text: "Pěstování bez vody", icon: "💧", isCorrect: false },
                { text: "Pěstování bez semen", icon: "🌰", isCorrect: false }
            ],
            explanation: "Bezorebné (no-till) hospodaření chrání půdní strukturu a život v půdě."
        },
        {
            question: "Proč se dělá válení půdy?",
            type: "multiple_choice",
            options: [
                { text: "Pro utužení a lepší kontakt semen s půdou", icon: "✅", isCorrect: true },
                { text: "Pro zábavu", icon: "😄", isCorrect: false },
                { text: "Pro odvodnění", icon: "💧", isCorrect: false },
                { text: "Pro ohřev půdy", icon: "🌡️", isCorrect: false }
            ],
            explanation: "Válení zlepšuje kontakt semen s půdou a podporuje vzcházení."
        },
        {
            question: "Co je to podmítka?",
            type: "multiple_choice",
            options: [
                { text: "Mělké zpracování strniště po sklizni", icon: "🌾", isCorrect: true },
                { text: "Hluboká orba", icon: "⬇️", isCorrect: false },
                { text: "Setí pod podmínkou", icon: "❓", isCorrect: false },
                { text: "Typ pluhu", icon: "🔧", isCorrect: false }
            ],
            explanation: "Podmítka zapraví posklizňové zbytky a podporuje klíčení plevelů, které se pak zničí."
        },
        {
            question: "Jaká je ideální hloubka orby pro obiloviny?",
            type: "multiple_choice",
            options: [
                { text: "20-25 cm", icon: "📏", isCorrect: true },
                { text: "5 cm", icon: "📐", isCorrect: false },
                { text: "50 cm", icon: "📏", isCorrect: false },
                { text: "1 metr", icon: "📏", isCorrect: false }
            ],
            explanation: "Pro běžné plodiny stačí orba do hloubky 20-25 cm."
        },
        {
            question: "Co způsobuje utužení půdy?",
            type: "multiple_choice",
            options: [
                { text: "Pojezdy těžké techniky", icon: "🚜", isCorrect: true },
                { text: "Příliš mnoho žížal", icon: "🪱", isCorrect: false },
                { text: "Setí na jaře", icon: "🌱", isCorrect: false },
                { text: "Pěstování trávy", icon: "🌿", isCorrect: false }
            ],
            explanation: "Těžká technika, zejména na vlhké půdě, způsobuje zhutnění půdních vrstev."
        },
        {
            question: "Jak bojovat proti utužení půdy?",
            type: "multiple_choice",
            options: [
                { text: "Hluboké kypření a střídání plodin", icon: "✅", isCorrect: true },
                { text: "Více jezdit traktorem", icon: "🚜", isCorrect: false },
                { text: "Přidat více jílu", icon: "🧱", isCorrect: false },
                { text: "Zastavit pěstování", icon: "⛔", isCorrect: false }
            ],
            explanation: "Hluboké kypření poruší zhutněné vrstvy, hlubokokořenící plodiny též pomáhají."
        }
    ],

    // Level 5 - Osevní postupy
    module1_level5: [
        {
            question: "Co je osevní postup?",
            type: "multiple_choice",
            options: [
                { text: "Plánované střídání plodin na poli", icon: "📅", isCorrect: true },
                { text: "Způsob setí", icon: "🌰", isCorrect: false },
                { text: "Rychlost klíčení", icon: "⏱️", isCorrect: false },
                { text: "Hloubka setí", icon: "📏", isCorrect: false }
            ],
            explanation: "Osevní postup určuje, které plodiny se budou pěstovat po sobě v průběhu let."
        },
        {
            question: "Proč se nemá pěstovat stejná plodina opakovaně?",
            type: "multiple_choice",
            options: [
                { text: "Hromadí se choroby a škůdci", icon: "🦠", isCorrect: true },
                { text: "Je to zakázáno", icon: "⛔", isCorrect: false },
                { text: "Půda změní barvu", icon: "🎨", isCorrect: false },
                { text: "Rostliny se nudí", icon: "😴", isCorrect: false }
            ],
            explanation: "Monokultury vedou k šíření specifických chorob, škůdců a jednostrannému vyčerpání živin."
        },
        {
            question: "Která plodina obohacuje půdu dusíkem?",
            type: "multiple_choice",
            options: [
                { text: "Hrách, fazole, jetel", icon: "🌿", isCorrect: true },
                { text: "Pšenice", icon: "🌾", isCorrect: false },
                { text: "Brambory", icon: "🥔", isCorrect: false },
                { text: "Kukuřice", icon: "🌽", isCorrect: false }
            ],
            explanation: "Luskoviny (bobovité) žijí v symbiose s bakteriemi, které vážou vzdušný dusík."
        },
        {
            question: "Co je předplodina?",
            type: "multiple_choice",
            options: [
                { text: "Plodina pěstovaná před hlavní plodinou", icon: "⏮️", isCorrect: true },
                { text: "Plodina před sklizní", icon: "🌾", isCorrect: false },
                { text: "Nezralá plodina", icon: "🌱", isCorrect: false },
                { text: "Plevel", icon: "🌿", isCorrect: false }
            ],
            explanation: "Předplodina ovlivňuje stav půdy a podmínky pro následující hlavní plodinu."
        },
        {
            question: "Jaká je dobrá předplodina pro pšenici?",
            type: "multiple_choice",
            options: [
                { text: "Řepka nebo luskoviny", icon: "✅", isCorrect: true },
                { text: "Pšenice", icon: "🌾", isCorrect: false },
                { text: "Ječmen", icon: "🌾", isCorrect: false },
                { text: "Žito", icon: "🌾", isCorrect: false }
            ],
            explanation: "Po řepce a luskovinách zůstává v půdě více živin a je menší tlak chorob obilovin."
        },
        {
            question: "Co je meziplodina?",
            type: "multiple_choice",
            options: [
                { text: "Plodina pěstovaná mezi dvěma hlavními", icon: "🌱", isCorrect: true },
                { text: "Plodina v meziřadí", icon: "↔️", isCorrect: false },
                { text: "Střední velikost plodiny", icon: "📏", isCorrect: false },
                { text: "Poloviční sklizeň", icon: "🌾", isCorrect: false }
            ],
            explanation: "Meziplodiny (např. hořčice) se pěstují po sklizni hlavní plodiny pro zlepšení půdy."
        },
        {
            question: "Účelem zeleného hnojení je:",
            type: "multiple_choice",
            options: [
                { text: "Zaorání rostlin pro obohacení půdy", icon: "🌿", isCorrect: true },
                { text: "Barvení hnojiva na zeleno", icon: "🎨", isCorrect: false },
                { text: "Prodej zelených plodin", icon: "💰", isCorrect: false },
                { text: "Krmení dobytka", icon: "🐄", isCorrect: false }
            ],
            explanation: "Zelené hnojení dodává půdě organickou hmotu a zlepšuje její strukturu."
        },
        {
            question: "Typický osevní postup trvá:",
            type: "multiple_choice",
            options: [
                { text: "4-6 let", icon: "📅", isCorrect: true },
                { text: "1 rok", icon: "📆", isCorrect: false },
                { text: "20 let", icon: "📅", isCorrect: false },
                { text: "100 let", icon: "📅", isCorrect: false }
            ],
            explanation: "Běžný osevní postup má 4-6 let, aby se plodiny dostatečně prostřídaly."
        },
        {
            question: "Úhor znamená:",
            type: "multiple_choice",
            options: [
                { text: "Pole ponechané bez plodiny k regeneraci", icon: "🏜️", isCorrect: true },
                { text: "Pole s uhynutými rostlinami", icon: "☠️", isCorrect: false },
                { text: "Úhlopříčné setí", icon: "↗️", isCorrect: false },
                { text: "Uhlí v půdě", icon: "⬛", isCorrect: false }
            ],
            explanation: "Úhor je tradiční způsob regenerace půdy, dnes se většinou nahrazuje meziplodinami."
        },
        {
            question: "Po kterých plodinách nesmí následovat cukrovka?",
            type: "multiple_choice",
            options: [
                { text: "Po cukrovce a řepce (brukvovité)", icon: "⛔", isCorrect: true },
                { text: "Po pšenici", icon: "🌾", isCorrect: false },
                { text: "Po jeteli", icon: "🍀", isCorrect: false },
                { text: "Po kukuřici", icon: "🌽", isCorrect: false }
            ],
            explanation: "Cukrovka a řepka jsou příbuzné a mají společné choroby jako háďátko."
        }
    ],

    // Level 6 - Setí a sázení
    module1_level6: [
        {
            question: "Co je výsevek?",
            type: "multiple_choice",
            options: [
                { text: "Množství osiva na hektar", icon: "🌰", isCorrect: true },
                { text: "Cena osiva", icon: "💰", isCorrect: false },
                { text: "Barva semen", icon: "🎨", isCorrect: false },
                { text: "Věk semen", icon: "📅", isCorrect: false }
            ],
            explanation: "Výsevek udává, kolik kilogramů nebo kusů osiva se vysévá na jeden hektar."
        },
        {
            question: "Co je klíčivost osiva?",
            type: "multiple_choice",
            options: [
                { text: "Procento semen schopných vyklíčit", icon: "🌱", isCorrect: true },
                { text: "Rychlost růstu", icon: "⚡", isCorrect: false },
                { text: "Velikost semen", icon: "📏", isCorrect: false },
                { text: "Barva klíčků", icon: "🎨", isCorrect: false }
            ],
            explanation: "Klíčivost vyjadřuje kvalitu osiva - jaké procento semen skutečně vzklíčí."
        },
        {
            question: "Jaká je optimální hloubka setí pšenice?",
            type: "multiple_choice",
            options: [
                { text: "3-5 cm", icon: "📏", isCorrect: true },
                { text: "0,5 cm", icon: "📐", isCorrect: false },
                { text: "15 cm", icon: "📏", isCorrect: false },
                { text: "30 cm", icon: "📏", isCorrect: false }
            ],
            explanation: "Pšenice se seje do hloubky 3-5 cm pro optimální vzcházení."
        },
        {
            question: "Co je to moření osiva?",
            type: "multiple_choice",
            options: [
                { text: "Ošetření semen proti chorobám", icon: "💊", isCorrect: true },
                { text: "Barvení semen", icon: "🎨", isCorrect: false },
                { text: "Sušení semen", icon: "☀️", isCorrect: false },
                { text: "Máčení v moři", icon: "🌊", isCorrect: false }
            ],
            explanation: "Moření chrání osivo před houbovými chorobami a škůdci v počátečních fázích."
        },
        {
            question: "Řádkový výsev znamená:",
            type: "multiple_choice",
            options: [
                { text: "Setí do řádků s určitým rozestupem", icon: "📐", isCorrect: true },
                { text: "Setí v řadě za sebou", icon: "👥", isCorrect: false },
                { text: "Řádné setí", icon: "✅", isCorrect: false },
                { text: "Výsev řídkého osiva", icon: "🌾", isCorrect: false }
            ],
            explanation: "Řádkový výsev umožňuje mechanickou kultivaci meziřadí a lepší využití prostoru."
        },
        {
            question: "Kdy se seje jarní ječmen?",
            type: "multiple_choice",
            options: [
                { text: "Na jaře (březen-duben)", icon: "🌸", isCorrect: true },
                { text: "V létě", icon: "☀️", isCorrect: false },
                { text: "Na podzim", icon: "🍂", isCorrect: false },
                { text: "V zimě", icon: "❄️", isCorrect: false }
            ],
            explanation: "Jarní obiloviny se sejí na jaře, jakmile to podmínky dovolí."
        },
        {
            question: "Jaká je výhoda certifikovaného osiva?",
            type: "multiple_choice",
            options: [
                { text: "Zaručená čistota a klíčivost", icon: "✅", isCorrect: true },
                { text: "Nižší cena", icon: "💰", isCorrect: false },
                { text: "Větší semena", icon: "📏", isCorrect: false },
                { text: "Barevný obal", icon: "🎨", isCorrect: false }
            ],
            explanation: "Certifikované osivo má garantované vlastnosti a je bez příměsí a chorob."
        },
        {
            question: "Co je přesný výsev?",
            type: "multiple_choice",
            options: [
                { text: "Setí jednotlivých semen na přesné vzdálenosti", icon: "🎯", isCorrect: true },
                { text: "Velmi přesné vážení osiva", icon: "⚖️", isCorrect: false },
                { text: "Setí přesně v poledne", icon: "🕛", isCorrect: false },
                { text: "Setí pouze kvalitního osiva", icon: "✅", isCorrect: false }
            ],
            explanation: "Přesný výsev (např. u kukuřice, cukrovky) ukládá semena jednotlivě v přesných rozestupech."
        },
        {
            question: "Proč se brambory sází hluboko?",
            type: "multiple_choice",
            options: [
                { text: "Aby měly hlízy prostor růst", icon: "🥔", isCorrect: true },
                { text: "Aby se zahřály", icon: "🌡️", isCorrect: false },
                { text: "Kvůli škůdcům", icon: "🐛", isCorrect: false },
                { text: "Protože jsou těžké", icon: "⚖️", isCorrect: false }
            ],
            explanation: "Hlubší sázení a následné hrůbkování vytváří prostor pro tvorbu hlíz."
        },
        {
            question: "Co je předklíčení brambor?",
            type: "multiple_choice",
            options: [
                { text: "Naklíčení hlíz před výsadbou", icon: "🌱", isCorrect: true },
                { text: "Předběžná sklizeň", icon: "🌾", isCorrect: false },
                { text: "Třídění brambor", icon: "📊", isCorrect: false },
                { text: "Mytí brambor", icon: "💧", isCorrect: false }
            ],
            explanation: "Předklíčené brambory rychleji vzcházejí a lépe využijí vegetační období."
        }
    ],

    // Level 7 - Plevele
    module1_level7: [
        {
            question: "Co je plevel?",
            type: "multiple_choice",
            options: [
                { text: "Rostlina rostoucí na nežádoucím místě", icon: "🌿", isCorrect: true },
                { text: "Jedovatá rostlina", icon: "☠️", isCorrect: false },
                { text: "Rostlina s ostrými listy", icon: "🌵", isCorrect: false },
                { text: "Pouze bodláky", icon: "🌸", isCorrect: false }
            ],
            explanation: "Plevel je jakákoliv rostlina, která roste tam, kde ji nechceme - konkuruje plodinám."
        },
        {
            question: "Jak se plevele šíří?",
            type: "multiple_choice",
            options: [
                { text: "Semeny, oddenky, větrem, vodou", icon: "💨", isCorrect: true },
                { text: "Pouze semeny", icon: "🌰", isCorrect: false },
                { text: "Pouze větrem", icon: "🌬️", isCorrect: false },
                { text: "Lidskou činností", icon: "👷", isCorrect: false }
            ],
            explanation: "Plevele mají různé strategie šíření - semena, podzemní oddenky, vítr, vodu i zvířata."
        },
        {
            question: "Příklad vytrvalého plevele je:",
            type: "multiple_choice",
            options: [
                { text: "Pýr plazivý", icon: "🌿", isCorrect: true },
                { text: "Mák vlčí", icon: "🌺", isCorrect: false },
                { text: "Heřmánek", icon: "🌼", isCorrect: false },
                { text: "Koukol", icon: "💜", isCorrect: false }
            ],
            explanation: "Pýr je velmi obtížný vytrvalý plevel šířící se podzemními oddenky."
        },
        {
            question: "Co je herbicid?",
            type: "multiple_choice",
            options: [
                { text: "Přípravek na hubení plevelů", icon: "🧪", isCorrect: true },
                { text: "Přípravek na hubení hmyzu", icon: "🐛", isCorrect: false },
                { text: "Hnojivo", icon: "🌱", isCorrect: false },
                { text: "Přípravek na choroby", icon: "💊", isCorrect: false }
            ],
            explanation: "Herbicidy jsou chemické přípravky určené k likvidaci nežádoucích rostlin."
        },
        {
            question: "Co je selektivní herbicid?",
            type: "multiple_choice",
            options: [
                { text: "Hubí jen určité druhy rostlin", icon: "🎯", isCorrect: true },
                { text: "Hubí všechny rostliny", icon: "☠️", isCorrect: false },
                { text: "Vybírá si sám", icon: "🤖", isCorrect: false },
                { text: "Je dražší", icon: "💰", isCorrect: false }
            ],
            explanation: "Selektivní herbicidy hubí plevele, ale nepoškozují kulturní plodinu."
        },
        {
            question: "Mechanická ochrana proti plevelům zahrnuje:",
            type: "multiple_choice",
            options: [
                { text: "Plečkování, okopávání, mulčování", icon: "🔧", isCorrect: true },
                { text: "Pouze postřik", icon: "💦", isCorrect: false },
                { text: "Pouze ruční trhání", icon: "✋", isCorrect: false },
                { text: "Nic nedělat", icon: "😴", isCorrect: false }
            ],
            explanation: "Mechanické metody fyzicky odstraňují nebo potlačují plevele bez chemie."
        },
        {
            question: "Co je to mulč?",
            type: "multiple_choice",
            options: [
                { text: "Pokryvná vrstva na půdě", icon: "🍂", isCorrect: true },
                { text: "Druh hnojiva", icon: "🧪", isCorrect: false },
                { text: "Plevel", icon: "🌿", isCorrect: false },
                { text: "Zavlažovací systém", icon: "💧", isCorrect: false }
            ],
            explanation: "Mulč (sláma, kůra, folie) brání růstu plevelů a udržuje vlhkost půdy."
        },
        {
            question: "Pcháč je:",
            type: "multiple_choice",
            options: [
                { text: "Obtížný vytrvalý plevel", icon: "🌿", isCorrect: true },
                { text: "Kulturní plodina", icon: "🌾", isCorrect: false },
                { text: "Okrasná květina", icon: "🌸", isCorrect: false },
                { text: "Léčivá bylina", icon: "💊", isCorrect: false }
            ],
            explanation: "Pcháč oset je jeden z nejhorších vytrvalých plevelů s hlubokými kořeny."
        },
        {
            question: "Proč je důležité hubit plevele před kvetením?",
            type: "multiple_choice",
            options: [
                { text: "Aby se nezasemenily", icon: "🌰", isCorrect: true },
                { text: "Květy jsou jedovaté", icon: "☠️", isCorrect: false },
                { text: "Jsou pak krásnější", icon: "🌸", isCorrect: false },
                { text: "Je to jednodušší", icon: "✅", isCorrect: false }
            ],
            explanation: "Jeden plevel může vyprodukovat tisíce semen, která vydrží v půdě roky."
        },
        {
            question: "Integrovaná ochrana proti plevelům znamená:",
            type: "multiple_choice",
            options: [
                { text: "Kombinace více metod ochrany", icon: "🔄", isCorrect: true },
                { text: "Pouze chemická ochrana", icon: "🧪", isCorrect: false },
                { text: "Integrace plevelů do osevního postupu", icon: "📅", isCorrect: false },
                { text: "Ignorování plevelů", icon: "🙈", isCorrect: false }
            ],
            explanation: "Integrovaná ochrana kombinuje prevenci, mechanické a chemické metody."
        }
    ],

    // Level 8 - Voda v půdě
    module1_level8: [
        {
            question: "Co je polní vodní kapacita?",
            type: "multiple_choice",
            options: [
                { text: "Maximum vody, které půda udrží", icon: "💧", isCorrect: true },
                { text: "Množství vody na poli", icon: "🏞️", isCorrect: false },
                { text: "Kapacita zavlažování", icon: "🚿", isCorrect: false },
                { text: "Objem nádrže", icon: "🛢️", isCorrect: false }
            ],
            explanation: "Polní vodní kapacita je množství vody, které půda udrží proti gravitaci."
        },
        {
            question: "Co je bod vadnutí?",
            type: "multiple_choice",
            options: [
                { text: "Vlhkost, při které rostliny vadnou", icon: "🥀", isCorrect: true },
                { text: "Místo kde rostliny vadnou", icon: "📍", isCorrect: false },
                { text: "Čas vadnutí", icon: "⏰", isCorrect: false },
                { text: "Teplota vadnutí", icon: "🌡️", isCorrect: false }
            ],
            explanation: "Při bodu vadnutí je voda v půdě tak pevně vázána, že ji kořeny nedokáží čerpat."
        },
        {
            question: "Která půda má největší vodní kapacitu?",
            type: "multiple_choice",
            options: [
                { text: "Jílovitá", icon: "🧱", isCorrect: true },
                { text: "Písčitá", icon: "🏖️", isCorrect: false },
                { text: "Štěrkovitá", icon: "⚪", isCorrect: false },
                { text: "Kamenitá", icon: "🪨", isCorrect: false }
            ],
            explanation: "Jílovitá půda má nejmenší póry a váže nejvíce vody, ale ne vždy je dostupná rostlinám."
        },
        {
            question: "Co způsobuje zamokření půdy?",
            type: "multiple_choice",
            options: [
                { text: "Vysoká hladina spodní vody", icon: "💧", isCorrect: true },
                { text: "Příliš mnoho slunce", icon: "☀️", isCorrect: false },
                { text: "Silný vítr", icon: "💨", isCorrect: false },
                { text: "Nedostatek hnojiv", icon: "🧪", isCorrect: false }
            ],
            explanation: "Zamokření vzniká při vysoké hladině spodní vody nebo špatném odvodnění."
        },
        {
            question: "K čemu slouží drenáž?",
            type: "multiple_choice",
            options: [
                { text: "K odvodnění přebytečné vody", icon: "🔽", isCorrect: true },
                { text: "K zavlažování", icon: "💦", isCorrect: false },
                { text: "K hnojení", icon: "🧪", isCorrect: false },
                { text: "K setí", icon: "🌰", isCorrect: false }
            ],
            explanation: "Drenážní systém odvádí přebytečnou vodu z půdy a zlepšuje provzdušnění."
        },
        {
            question: "Co je evapotranspirace?",
            type: "multiple_choice",
            options: [
                { text: "Výpar z půdy a rostlin", icon: "☁️", isCorrect: true },
                { text: "Druh dopravy", icon: "🚚", isCorrect: false },
                { text: "Typ hnojiva", icon: "🧪", isCorrect: false },
                { text: "Nemoc rostlin", icon: "🦠", isCorrect: false }
            ],
            explanation: "Evapotranspirace je součet výparu z půdy (evaporace) a z rostlin (transpirace)."
        },
        {
            question: "Jak snížit výpar z půdy?",
            type: "multiple_choice",
            options: [
                { text: "Mulčováním", icon: "🍂", isCorrect: true },
                { text: "Častým kypřením", icon: "🔧", isCorrect: false },
                { text: "Přidáním soli", icon: "🧂", isCorrect: false },
                { text: "Odstraněním rostlin", icon: "✂️", isCorrect: false }
            ],
            explanation: "Mulč vytváří bariéru, která omezuje přímý výpar vody z povrchu půdy."
        },
        {
            question: "Co je kapilární vzlínavost?",
            type: "multiple_choice",
            options: [
                { text: "Vzestup vody v úzkých pórech", icon: "⬆️", isCorrect: true },
                { text: "Pokles vody", icon: "⬇️", isCorrect: false },
                { text: "Odpařování vody", icon: "💨", isCorrect: false },
                { text: "Zamrzání vody", icon: "❄️", isCorrect: false }
            ],
            explanation: "Kapilární síly umožňují vzestup vody v úzkých půdních pórech proti gravitaci."
        },
        {
            question: "Půdní sucho lze rozpoznat podle:",
            type: "multiple_choice",
            options: [
                { text: "Prasklin v půdě a vadnutí rostlin", icon: "🥀", isCorrect: true },
                { text: "Zelených listů", icon: "🌿", isCorrect: false },
                { text: "Rychlého růstu", icon: "📈", isCorrect: false },
                { text: "Hodně žížal", icon: "🪱", isCorrect: false }
            ],
            explanation: "Sucho se projevuje prasklinami, tvrdou půdou a vadnoucími rostlinami."
        },
        {
            question: "Co je infiltrace?",
            type: "multiple_choice",
            options: [
                { text: "Vsakování vody do půdy", icon: "⬇️", isCorrect: true },
                { text: "Vypařování vody", icon: "☁️", isCorrect: false },
                { text: "Zamrzání vody", icon: "❄️", isCorrect: false },
                { text: "Znečištění vody", icon: "🏭", isCorrect: false }
            ],
            explanation: "Infiltrace je proces, kdy voda proniká z povrchu do půdy."
        }
    ],

    // Level 9 - Půdní život
    module1_level9: [
        {
            question: "Co je půdní mikrobiom?",
            type: "multiple_choice",
            options: [
                { text: "Společenstvo mikroorganismů v půdě", icon: "🦠", isCorrect: true },
                { text: "Malé kamínky", icon: "🪨", isCorrect: false },
                { text: "Kořeny rostlin", icon: "🌱", isCorrect: false },
                { text: "Podzemní voda", icon: "💧", isCorrect: false }
            ],
            explanation: "Půdní mikrobiom zahrnuje bakterie, houby, prvky a další mikroorganismy."
        },
        {
            question: "Co je mykorhiza?",
            type: "multiple_choice",
            options: [
                { text: "Symbióza hub s kořeny rostlin", icon: "🍄", isCorrect: true },
                { text: "Druh hnojiva", icon: "🧪", isCorrect: false },
                { text: "Nemoc hub", icon: "🦠", isCorrect: false },
                { text: "Typ půdy", icon: "🌍", isCorrect: false }
            ],
            explanation: "Mykorhizní houby pomáhají rostlinám získávat vodu a živiny výměnou za cukry."
        },
        {
            question: "Hlízkové bakterie na luskovinách:",
            type: "multiple_choice",
            options: [
                { text: "Vážou vzdušný dusík", icon: "🌿", isCorrect: true },
                { text: "Způsobují choroby", icon: "🦠", isCorrect: false },
                { text: "Produkují kyslík", icon: "💨", isCorrect: false },
                { text: "Ničí kořeny", icon: "❌", isCorrect: false }
            ],
            explanation: "Rhizobium bakterie v hlízkách luskovin fixují atmosférický dusík do dostupné formy."
        },
        {
            question: "Kolik živých organismů je v hrsti zdravé půdy?",
            type: "multiple_choice",
            options: [
                { text: "Miliardy", icon: "🔬", isCorrect: true },
                { text: "Stovky", icon: "💯", isCorrect: false },
                { text: "Desítky", icon: "🔟", isCorrect: false },
                { text: "Žádné", icon: "0️⃣", isCorrect: false }
            ],
            explanation: "V jednom gramu zdravé půdy mohou být miliardy bakterií a miliony hub."
        },
        {
            question: "Co dělají rozkladači v půdě?",
            type: "multiple_choice",
            options: [
                { text: "Rozkládají organickou hmotu", icon: "♻️", isCorrect: true },
                { text: "Staví nory", icon: "🕳️", isCorrect: false },
                { text: "Jedí rostliny", icon: "🌿", isCorrect: false },
                { text: "Produkují kyslík", icon: "💨", isCorrect: false }
            ],
            explanation: "Rozkladači (bakterie, houby, žížaly) přeměňují mrtvou organickou hmotu na humus."
        },
        {
            question: "Půdní fauna zahrnuje:",
            type: "multiple_choice",
            options: [
                { text: "Žížaly, stonožky, roztoče, hmyz", icon: "🪱", isCorrect: true },
                { text: "Pouze žížaly", icon: "🐛", isCorrect: false },
                { text: "Pouze bakterie", icon: "🦠", isCorrect: false },
                { text: "Pouze houby", icon: "🍄", isCorrect: false }
            ],
            explanation: "Půdní fauna je rozmanitá - od mikroskopických roztočů po žížaly a hmyz."
        },
        {
            question: "Proč je důležitá půdní biodiverzita?",
            type: "multiple_choice",
            options: [
                { text: "Zajišťuje koloběh živin a zdraví půdy", icon: "🔄", isCorrect: true },
                { text: "Je to jen zajímavost", icon: "🤔", isCorrect: false },
                { text: "Nemá význam", icon: "❌", isCorrect: false },
                { text: "Škodí rostlinám", icon: "☠️", isCorrect: false }
            ],
            explanation: "Rozmanitost půdního života zajišťuje stabilitu ekosystému a odolnost vůči stresu."
        },
        {
            question: "Co škodí půdnímu životu?",
            type: "multiple_choice",
            options: [
                { text: "Nadměrná chemie a utužení", icon: "⚠️", isCorrect: true },
                { text: "Organické hnojení", icon: "🌿", isCorrect: false },
                { text: "Střídání plodin", icon: "🔄", isCorrect: false },
                { text: "Kompostování", icon: "♻️", isCorrect: false }
            ],
            explanation: "Pesticidy, umělá hnojiva a utužení půdy negativně ovlivňují půdní organismy."
        },
        {
            question: "Actinomycety jsou:",
            type: "multiple_choice",
            options: [
                { text: "Bakterie s houbovitým růstem", icon: "🦠", isCorrect: true },
                { text: "Druh žížal", icon: "🪱", isCorrect: false },
                { text: "Plevel", icon: "🌿", isCorrect: false },
                { text: "Hnojivo", icon: "🧪", isCorrect: false }
            ],
            explanation: "Actinomycety dodávají půdě charakteristickou vůni a rozkládají těžko rozložitelné látky."
        },
        {
            question: "Jak podpořit život v půdě?",
            type: "multiple_choice",
            options: [
                { text: "Přidávat organickou hmotu, minimalizovat chemii", icon: "✅", isCorrect: true },
                { text: "Používat více pesticidů", icon: "🧪", isCorrect: false },
                { text: "Nechat půdu bez rostlin", icon: "🏜️", isCorrect: false },
                { text: "Zalévat slanou vodou", icon: "🧂", isCorrect: false }
            ],
            explanation: "Organická hmota je potrava pro půdní život, chemie ho naopak ničí."
        }
    ],

    // Level 10 - Pokročilé téma: Půda a klima
    module1_level10: [
        {
            question: "Půda může ukládat:",
            type: "multiple_choice",
            options: [
                { text: "Uhlík z atmosféry", icon: "🌍", isCorrect: true },
                { text: "Pouze vodu", icon: "💧", isCorrect: false },
                { text: "Pouze živiny", icon: "🧪", isCorrect: false },
                { text: "Nic", icon: "❌", isCorrect: false }
            ],
            explanation: "Půda je významný zásobník uhlíku - obsahuje více C než atmosféra a vegetace dohromady."
        },
        {
            question: "Co je sekvestrace uhlíku?",
            type: "multiple_choice",
            options: [
                { text: "Ukládání uhlíku do půdy", icon: "⬇️", isCorrect: true },
                { text: "Uvolňování CO2", icon: "☁️", isCorrect: false },
                { text: "Spalování biomasy", icon: "🔥", isCorrect: false },
                { text: "Druh hnojiva", icon: "🧪", isCorrect: false }
            ],
            explanation: "Sekvestrace uhlíku je proces, kdy se CO2 z atmosféry ukládá do půdy jako organická hmota."
        },
        {
            question: "Jak zemědělství přispívá ke změně klimatu?",
            type: "multiple_choice",
            options: [
                { text: "Emisemi N2O, CH4 a CO2", icon: "☁️", isCorrect: true },
                { text: "Nijak", icon: "❌", isCorrect: false },
                { text: "Pouze pozitivně", icon: "✅", isCorrect: false },
                { text: "Pouze zavlažováním", icon: "💧", isCorrect: false }
            ],
            explanation: "Zemědělství produkuje skleníkové plyny z hnojiv, chovu zvířat a zpracování půdy."
        },
        {
            question: "Regenerativní zemědělství se zaměřuje na:",
            type: "multiple_choice",
            options: [
                { text: "Obnovu zdraví půdy a ukládání uhlíku", icon: "♻️", isCorrect: true },
                { text: "Maximalizaci výnosů", icon: "📈", isCorrect: false },
                { text: "Používání více chemie", icon: "🧪", isCorrect: false },
                { text: "Monokulturní pěstování", icon: "🌾", isCorrect: false }
            ],
            explanation: "Regenerativní zemědělství obnovuje půdní ekosystém a pomáhá zmírňovat klimatickou změnu."
        },
        {
            question: "Biochar je:",
            type: "multiple_choice",
            options: [
                { text: "Uhlík z pyrolýzy biomasy pro půdu", icon: "⬛", isCorrect: true },
                { text: "Biologické hnojivo", icon: "🌿", isCorrect: false },
                { text: "Druh kompostu", icon: "♻️", isCorrect: false },
                { text: "Pesticid", icon: "🧪", isCorrect: false }
            ],
            explanation: "Biochar je stabilní forma uhlíku, která zlepšuje půdu a váže uhlík na tisíce let."
        },
        {
            question: "Agrolesnictví kombinuje:",
            type: "multiple_choice",
            options: [
                { text: "Stromy s plodinami nebo zvířaty", icon: "🌳", isCorrect: true },
                { text: "Pouze stromy", icon: "🌲", isCorrect: false },
                { text: "Pouze plodiny", icon: "🌾", isCorrect: false },
                { text: "Pouze zvířata", icon: "🐄", isCorrect: false }
            ],
            explanation: "Agrolesnictví integruje stromy do zemědělských systémů pro větší udržitelnost."
        },
        {
            question: "Cover crops (pokryvné plodiny) pomáhají:",
            type: "multiple_choice",
            options: [
                { text: "Chránit půdu a vázat uhlík", icon: "🌱", isCorrect: true },
                { text: "Pouze vypadat hezky", icon: "🎨", isCorrect: false },
                { text: "Zvyšovat erozi", icon: "💨", isCorrect: false },
                { text: "Ničit škůdce chemicky", icon: "🧪", isCorrect: false }
            ],
            explanation: "Pokryvné plodiny chrání půdu před erozí, udržují vlhkost a přidávají organickou hmotu."
        },
        {
            question: "Půdní respirace je:",
            type: "multiple_choice",
            options: [
                { text: "Uvolňování CO2 z půdy", icon: "☁️", isCorrect: true },
                { text: "Dýchání rostlin", icon: "🌿", isCorrect: false },
                { text: "Absorpce kyslíku", icon: "💨", isCorrect: false },
                { text: "Fotosyntéza", icon: "☀️", isCorrect: false }
            ],
            explanation: "Půdní respirace je metabolická činnost organismů v půdě, která uvolňuje CO2."
        },
        {
            question: "No-till farming (bezorebné) snižuje:",
            type: "multiple_choice",
            options: [
                { text: "Emise CO2 z půdy", icon: "⬇️", isCorrect: true },
                { text: "Výnosy", icon: "📉", isCorrect: false },
                { text: "Obsah humusu", icon: "🌿", isCorrect: false },
                { text: "Počet žížal", icon: "🪱", isCorrect: false }
            ],
            explanation: "Bez orby zůstává uhlík v půdě a neoxiduje se při kontaktu se vzduchem."
        },
        {
            question: "Půda zdravá pro klima má:",
            type: "multiple_choice",
            options: [
                { text: "Vysoký obsah organické hmoty a biodiverzitu", icon: "✅", isCorrect: true },
                { text: "Hodně chemických hnojiv", icon: "🧪", isCorrect: false },
                { text: "Žádný život", icon: "☠️", isCorrect: false },
                { text: "Pouze minerály", icon: "💎", isCorrect: false }
            ],
            explanation: "Zdravá půda bohatá na organickou hmotu a život efektivně ukládá uhlík."
        }
    ]
};
