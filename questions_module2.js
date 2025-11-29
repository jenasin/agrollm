// Modul 2: Ochrana Rostlin - 100 otázek (10 levelů x 10 otázek)
const MODULE2_QUESTIONS = {
    // Level 1 - Základy ochrany rostlin
    module2_level1: [
        {
            question: "Co je škůdce?",
            type: "multiple_choice",
            options: [
                { text: "Organismus poškozující rostliny", icon: "🐛", isCorrect: true },
                { text: "Užitečný hmyz", icon: "🐝", isCorrect: false },
                { text: "Hnojivo", icon: "🧪", isCorrect: false },
                { text: "Plevel", icon: "🌿", isCorrect: false }
            ],
            explanation: "Škůdci jsou organismy (hmyz, hlodavci, roztoči), které poškozují plodiny."
        },
        {
            question: "Co je choroba rostlin?",
            type: "multiple_choice",
            options: [
                { text: "Porucha způsobená patogenem", icon: "🦠", isCorrect: true },
                { text: "Nedostatek vody", icon: "💧", isCorrect: false },
                { text: "Příliš mnoho slunce", icon: "☀️", isCorrect: false },
                { text: "Nedostatek prostoru", icon: "📏", isCorrect: false }
            ],
            explanation: "Choroby jsou způsobeny houbami, bakteriemi, viry nebo fytoplazmami."
        },
        {
            question: "Co je pesticid?",
            type: "multiple_choice",
            options: [
                { text: "Přípravek na ochranu rostlin", icon: "🧪", isCorrect: true },
                { text: "Hnojivo", icon: "🌱", isCorrect: false },
                { text: "Osivo", icon: "🌰", isCorrect: false },
                { text: "Krmivo", icon: "🥬", isCorrect: false }
            ],
            explanation: "Pesticidy jsou chemické nebo biologické přípravky k hubení škodlivých organismů."
        },
        {
            question: "Insekticid slouží k hubení:",
            type: "multiple_choice",
            options: [
                { text: "Hmyzu", icon: "🐛", isCorrect: true },
                { text: "Plevelů", icon: "🌿", isCorrect: false },
                { text: "Hub", icon: "🍄", isCorrect: false },
                { text: "Hlodavců", icon: "🐀", isCorrect: false }
            ],
            explanation: "Insekticidy jsou přípravky určené k hubení hmyzích škůdců."
        },
        {
            question: "Fungicid se používá proti:",
            type: "multiple_choice",
            options: [
                { text: "Houbovým chorobám", icon: "🍄", isCorrect: true },
                { text: "Hmyzu", icon: "🐛", isCorrect: false },
                { text: "Plevelům", icon: "🌿", isCorrect: false },
                { text: "Ptákům", icon: "🐦", isCorrect: false }
            ],
            explanation: "Fungicidy potlačují houbové patogeny způsobující choroby rostlin."
        },
        {
            question: "Co je preventivní ochrana?",
            type: "multiple_choice",
            options: [
                { text: "Opatření před výskytem problému", icon: "🛡️", isCorrect: true },
                { text: "Léčba již napadených rostlin", icon: "💊", isCorrect: false },
                { text: "Sklizeň nemocných rostlin", icon: "🌾", isCorrect: false },
                { text: "Nic nedělat", icon: "😴", isCorrect: false }
            ],
            explanation: "Prevence zahrnuje opatření, která brání vzniku problému - střídání plodin, hygiena."
        },
        {
            question: "Co je práh škodlivosti?",
            type: "multiple_choice",
            options: [
                { text: "Míra napadení, kdy se vyplatí zásah", icon: "📊", isCorrect: true },
                { text: "Práh do pole", icon: "🚪", isCorrect: false },
                { text: "Maximální výnos", icon: "📈", isCorrect: false },
                { text: "Minimální dávka pesticidu", icon: "💧", isCorrect: false }
            ],
            explanation: "Práh škodlivosti určuje, kdy ekonomické ztráty překročí náklady na ošetření."
        },
        {
            question: "Co je karanténní škůdce?",
            type: "multiple_choice",
            options: [
                { text: "Nebezpečný škůdce podléhající regulaci", icon: "⚠️", isCorrect: true },
                { text: "Škůdce v karanténě", icon: "🏥", isCorrect: false },
                { text: "Běžný škůdce", icon: "🐛", isCorrect: false },
                { text: "Vymřelý škůdce", icon: "☠️", isCorrect: false }
            ],
            explanation: "Karanténní organismy jsou regulované a jejich výskyt se hlásí rostlinolékařské správě."
        },
        {
            question: "Příznaky choroby mohou být:",
            type: "multiple_choice",
            options: [
                { text: "Skvrny, vadnutí, deformace", icon: "🍂", isCorrect: true },
                { text: "Pouze žluté listy", icon: "🟡", isCorrect: false },
                { text: "Rychlý růst", icon: "📈", isCorrect: false },
                { text: "Větší plody", icon: "🍎", isCorrect: false }
            ],
            explanation: "Choroby se projevují různě - skvrnami, hnilobou, vadnutím, deformacemi, zakrslostí."
        },
        {
            question: "Nejdůležitější v ochraně rostlin je:",
            type: "multiple_choice",
            options: [
                { text: "Prevence a včasná diagnostika", icon: "✅", isCorrect: true },
                { text: "Co nejvíce pesticidů", icon: "🧪", isCorrect: false },
                { text: "Ignorovat problémy", icon: "🙈", isCorrect: false },
                { text: "Chemie za každou cenu", icon: "💰", isCorrect: false }
            ],
            explanation: "Prevence je levnější a účinnější než léčba již rozšířeného problému."
        }
    ],

    // Level 2 - Hmyzí škůdci
    module2_level2: [
        {
            question: "Mšice škodí rostlinám tím, že:",
            type: "multiple_choice",
            options: [
                { text: "Sají šťávu a přenášejí viry", icon: "🦟", isCorrect: true },
                { text: "Okusují listy", icon: "🍃", isCorrect: false },
                { text: "Vrtají do stonků", icon: "🕳️", isCorrect: false },
                { text: "Jedí kořeny", icon: "🌱", isCorrect: false }
            ],
            explanation: "Mšice sají rostlinné šťávy a jsou významnými přenašeči virových chorob."
        },
        {
            question: "Přirozeným nepřítelem mšic je:",
            type: "multiple_choice",
            options: [
                { text: "Slunéčko sedmitečné", icon: "🐞", isCorrect: true },
                { text: "Včela", icon: "🐝", isCorrect: false },
                { text: "Motýl", icon: "🦋", isCorrect: false },
                { text: "Moucha", icon: "🪰", isCorrect: false }
            ],
            explanation: "Slunéčka a jejich larvy jsou významní predátoři mšic."
        },
        {
            question: "Mandelinka bramborová se pozná podle:",
            type: "multiple_choice",
            options: [
                { text: "Žluto-černého pruhování", icon: "🟡", isCorrect: true },
                { text: "Červené barvy", icon: "🔴", isCorrect: false },
                { text: "Zelené barvy", icon: "🟢", isCorrect: false },
                { text: "Modré barvy", icon: "🔵", isCorrect: false }
            ],
            explanation: "Mandelinka bramborová má charakteristické žluto-černé pruhy na krovkách."
        },
        {
            question: "Housenky škodí:",
            type: "multiple_choice",
            options: [
                { text: "Okusováním listů a plodů", icon: "🐛", isCorrect: true },
                { text: "Sáním šťávy", icon: "🥤", isCorrect: false },
                { text: "Přenášením chorob", icon: "🦠", isCorrect: false },
                { text: "Ničením kořenů", icon: "🌱", isCorrect: false }
            ],
            explanation: "Housenky motýlů mají kousací ústní ústrojí a žerou listovou hmotu."
        },
        {
            question: "Zavíječ kukuřičný napadá:",
            type: "multiple_choice",
            options: [
                { text: "Palice a stonky kukuřice", icon: "🌽", isCorrect: true },
                { text: "Pouze kořeny", icon: "🌱", isCorrect: false },
                { text: "Pouze listy", icon: "🍃", isCorrect: false },
                { text: "Pouze květy", icon: "🌸", isCorrect: false }
            ],
            explanation: "Housenky zavíječe vrtají do palic a stonků kukuřice a způsobují velké škody."
        },
        {
            question: "Drátovci jsou larvy:",
            type: "multiple_choice",
            options: [
                { text: "Kovaříků", icon: "🪲", isCorrect: true },
                { text: "Motýlů", icon: "🦋", isCorrect: false },
                { text: "Much", icon: "🪰", isCorrect: false },
                { text: "Včel", icon: "🐝", isCorrect: false }
            ],
            explanation: "Drátovci jsou žluté, tuhé larvy kovaříků, které žerou kořeny a hlízy."
        },
        {
            question: "Bejlomorka škodí především:",
            type: "multiple_choice",
            options: [
                { text: "Obilí tvorbou hálek", icon: "🌾", isCorrect: true },
                { text: "Ovoci", icon: "🍎", isCorrect: false },
                { text: "Zelenině", icon: "🥬", isCorrect: false },
                { text: "Stromům", icon: "🌳", isCorrect: false }
            ],
            explanation: "Bejlomorky jsou drobné mušky, jejichž larvy tvoří na obilí hálky."
        },
        {
            question: "Třásněnky (trips) jsou:",
            type: "multiple_choice",
            options: [
                { text: "Drobný hmyz poškozující listy a květy", icon: "🐛", isCorrect: true },
                { text: "Velcí brouci", icon: "🪲", isCorrect: false },
                { text: "Motýli", icon: "🦋", isCorrect: false },
                { text: "Pavouci", icon: "🕷️", isCorrect: false }
            ],
            explanation: "Třásněnky jsou drobný hmyz s třásnitými křídly, který saje na listech a květech."
        },
        {
            question: "Svilušky jsou:",
            type: "multiple_choice",
            options: [
                { text: "Roztoči sající na listech", icon: "🔴", isCorrect: true },
                { text: "Hmyz", icon: "🐛", isCorrect: false },
                { text: "Houby", icon: "🍄", isCorrect: false },
                { text: "Bakterie", icon: "🦠", isCorrect: false }
            ],
            explanation: "Svilušky jsou mikroskopičtí roztoči tvořící pavučinky na spodní straně listů."
        },
        {
            question: "Jak se bránit škůdcům bez chemie?",
            type: "multiple_choice",
            options: [
                { text: "Podporou přirozených nepřátel", icon: "🐞", isCorrect: true },
                { text: "Ignorováním", icon: "🙈", isCorrect: false },
                { text: "Více hnojením", icon: "🧪", isCorrect: false },
                { text: "Méně zaléváním", icon: "💧", isCorrect: false }
            ],
            explanation: "Biologická ochrana využívá predátory, parazitoidy a patogeny škůdců."
        }
    ],

    // Level 3 - Houbové choroby
    module2_level3: [
        {
            question: "Padlí se projevuje:",
            type: "multiple_choice",
            options: [
                { text: "Bílým povlakem na listech", icon: "⚪", isCorrect: true },
                { text: "Žlutými skvrnami", icon: "🟡", isCorrect: false },
                { text: "Černými tečkami", icon: "⚫", isCorrect: false },
                { text: "Vadnutím", icon: "🥀", isCorrect: false }
            ],
            explanation: "Padlí tvoří charakteristický bílý moučnatý povlak na površích rostlin."
        },
        {
            question: "Plíseň bramborová způsobuje:",
            type: "multiple_choice",
            options: [
                { text: "Hnědé skvrny a hnilobu", icon: "🟤", isCorrect: true },
                { text: "Bílý povlak", icon: "⚪", isCorrect: false },
                { text: "Rychlejší růst", icon: "📈", isCorrect: false },
                { text: "Větší hlízy", icon: "🥔", isCorrect: false }
            ],
            explanation: "Phytophthora infestans způsobuje devastující chorobu brambor a rajčat."
        },
        {
            question: "Rez obilná se pozná podle:",
            type: "multiple_choice",
            options: [
                { text: "Oranžových až hnědých pustul", icon: "🟠", isCorrect: true },
                { text: "Bílého povlaku", icon: "⚪", isCorrect: false },
                { text: "Zelených skvrn", icon: "🟢", isCorrect: false },
                { text: "Modrých pruhů", icon: "🔵", isCorrect: false }
            ],
            explanation: "Rzi tvoří charakteristické rezavé výtrusnice (pustuly) na listech obilovin."
        },
        {
            question: "Sněť mazlavá napadá:",
            type: "multiple_choice",
            options: [
                { text: "Zrna obilovin", icon: "🌾", isCorrect: true },
                { text: "Kořeny", icon: "🌱", isCorrect: false },
                { text: "Stonky", icon: "🌿", isCorrect: false },
                { text: "Květy", icon: "🌸", isCorrect: false }
            ],
            explanation: "Sněti přeměňují zrna obilovin na černou masu výtrusů."
        },
        {
            question: "Šedá hniloba (botrytis) postihuje:",
            type: "multiple_choice",
            options: [
                { text: "Plody, květy, listy", icon: "🍇", isCorrect: true },
                { text: "Pouze kořeny", icon: "🌱", isCorrect: false },
                { text: "Pouze stonky", icon: "🌿", isCorrect: false },
                { text: "Pouze semena", icon: "🌰", isCorrect: false }
            ],
            explanation: "Botrytis cinerea je polyfágní houba napadající mnoho plodin, zejména v podmínkách vysoké vlhkosti."
        },
        {
            question: "Fuzariózy způsobují:",
            type: "multiple_choice",
            options: [
                { text: "Vadnutí a hniloby", icon: "🥀", isCorrect: true },
                { text: "Bílý povlak", icon: "⚪", isCorrect: false },
                { text: "Rychlejší růst", icon: "📈", isCorrect: false },
                { text: "Větší plody", icon: "🍎", isCorrect: false }
            ],
            explanation: "Fuzária způsobují vadnutí, hniloby kořenů a klasů, produkují nebezpečné mykotoxiny."
        },
        {
            question: "Jak se šíří houbové choroby?",
            type: "multiple_choice",
            options: [
                { text: "Výtrusy větrem, vodou, hmyzem", icon: "💨", isCorrect: true },
                { text: "Pouze dotykem", icon: "✋", isCorrect: false },
                { text: "Pouze půdou", icon: "🌍", isCorrect: false },
                { text: "Nešíří se", icon: "⛔", isCorrect: false }
            ],
            explanation: "Houbové výtrusy se šíří vzduchem, deštěm, zavlažováním i na nářadí."
        },
        {
            question: "Prevence houbových chorob zahrnuje:",
            type: "multiple_choice",
            options: [
                { text: "Střídání plodin, odolné odrůdy", icon: "🔄", isCorrect: true },
                { text: "Více zalévat", icon: "💧", isCorrect: false },
                { text: "Hustší výsev", icon: "🌾", isCorrect: false },
                { text: "Nic nedělat", icon: "😴", isCorrect: false }
            ],
            explanation: "Prevence je klíčová - zdravé osivo, střídání plodin, větrání porostů."
        },
        {
            question: "Moření osiva chrání proti:",
            type: "multiple_choice",
            options: [
                { text: "Chorobám přenosným osivem", icon: "🌰", isCorrect: true },
                { text: "Suchu", icon: "🏜️", isCorrect: false },
                { text: "Mrazu", icon: "❄️", isCorrect: false },
                { text: "Plevelům", icon: "🌿", isCorrect: false }
            ],
            explanation: "Moření osiva fungicidy chrání klíčící rostliny před chorobami z osiva i půdy."
        },
        {
            question: "Ideální podmínky pro houby jsou:",
            type: "multiple_choice",
            options: [
                { text: "Vlhko a teplo", icon: "🌡️", isCorrect: true },
                { text: "Sucho a chlad", icon: "❄️", isCorrect: false },
                { text: "Mráz", icon: "🥶", isCorrect: false },
                { text: "Extrémní horko", icon: "🔥", isCorrect: false }
            ],
            explanation: "Většina houbových patogenů potřebuje ke sporulaci a infekci vlhkost a teplo."
        }
    ],

    // Level 4 - Virové a bakteriální choroby
    module2_level4: [
        {
            question: "Virové choroby se projevují:",
            type: "multiple_choice",
            options: [
                { text: "Mozaikou, zakrslostí, deformacemi", icon: "🦠", isCorrect: true },
                { text: "Bílým povlakem", icon: "⚪", isCorrect: false },
                { text: "Černými skvrnami", icon: "⚫", isCorrect: false },
                { text: "Lepším růstem", icon: "📈", isCorrect: false }
            ],
            explanation: "Viry způsobují mozaikové zbarvení, zakrslost, zkadeření listů a deformace."
        },
        {
            question: "Viry se přenášejí hlavně:",
            type: "multiple_choice",
            options: [
                { text: "Mšicemi a dalším hmyzem", icon: "🦟", isCorrect: true },
                { text: "Větrem", icon: "💨", isCorrect: false },
                { text: "Deštěm", icon: "🌧️", isCorrect: false },
                { text: "Sluncem", icon: "☀️", isCorrect: false }
            ],
            explanation: "Většina rostlinných virů je přenášena sáním hmyzem, zejména mšicemi."
        },
        {
            question: "Lze léčit virové choroby rostlin?",
            type: "multiple_choice",
            options: [
                { text: "Ne, pouze prevence", icon: "⛔", isCorrect: true },
                { text: "Ano, fungicidy", icon: "🧪", isCorrect: false },
                { text: "Ano, antibiotiky", icon: "💊", isCorrect: false },
                { text: "Ano, více vody", icon: "💧", isCorrect: false }
            ],
            explanation: "Virové choroby nelze léčit, důležitá je prevence - zdravý materiál, hubení přenašečů."
        },
        {
            question: "Bakteriální choroby způsobují:",
            type: "multiple_choice",
            options: [
                { text: "Hniloby, nádory, vadnutí", icon: "🦠", isCorrect: true },
                { text: "Pouze barevné skvrny", icon: "🎨", isCorrect: false },
                { text: "Zrychlený růst", icon: "📈", isCorrect: false },
                { text: "Větší plody", icon: "🍎", isCorrect: false }
            ],
            explanation: "Bakterie způsobují měkké hniloby, nádory, vadnutí a nekrotické skvrny."
        },
        {
            question: "Bakteriální kroužkovitost brambor se pozná:",
            type: "multiple_choice",
            options: [
                { text: "Vadnutí a hnědnutí cévních svazků", icon: "🥔", isCorrect: true },
                { text: "Bílý povlak", icon: "⚪", isCorrect: false },
                { text: "Zelené skvrny", icon: "🟢", isCorrect: false },
                { text: "Zvětšení hlíz", icon: "📈", isCorrect: false }
            ],
            explanation: "Při průřezu hlízy jsou viditelné zhnědlé cévní svazky v kruhovitém uspořádání."
        },
        {
            question: "Bakteriální spála jabloní se projevuje:",
            type: "multiple_choice",
            options: [
                { text: "Černáním a usycháním výhonů", icon: "🍎", isCorrect: true },
                { text: "Bílými květy", icon: "🌸", isCorrect: false },
                { text: "Většími plody", icon: "📈", isCorrect: false },
                { text: "Rychlejším růstem", icon: "⚡", isCorrect: false }
            ],
            explanation: "Erwinia amylovora způsobuje rychlé usychání květů a výhonů připomínající spálení."
        },
        {
            question: "Fytoplazmové choroby se šíří:",
            type: "multiple_choice",
            options: [
                { text: "Křísy a mery", icon: "🦗", isCorrect: true },
                { text: "Větrem", icon: "💨", isCorrect: false },
                { text: "Vodou", icon: "💧", isCorrect: false },
                { text: "Ptáky", icon: "🐦", isCorrect: false }
            ],
            explanation: "Fytoplazmy jsou přenášeny bodavě sajícím hmyzem, zejména křísami."
        },
        {
            question: "Stolbur rajčat způsobuje:",
            type: "multiple_choice",
            options: [
                { text: "Deformace a zakrslost", icon: "🍅", isCorrect: true },
                { text: "Větší plody", icon: "📈", isCorrect: false },
                { text: "Lepší chuť", icon: "😋", isCorrect: false },
                { text: "Rychlejší zrání", icon: "⏰", isCorrect: false }
            ],
            explanation: "Stolbur je fytoplazmová choroba způsobující zakrslost a deformace plodů."
        },
        {
            question: "Prevence virových chorob zahrnuje:",
            type: "multiple_choice",
            options: [
                { text: "Hubení přenašečů a zdravý sadební materiál", icon: "✅", isCorrect: true },
                { text: "Více zalévat", icon: "💧", isCorrect: false },
                { text: "Více hnojit", icon: "🧪", isCorrect: false },
                { text: "Nic nedělat", icon: "😴", isCorrect: false }
            ],
            explanation: "Klíčová je kontrola vektorů (mšice), certifikované bezvirózní materiály a hygiena."
        },
        {
            question: "Virus žluté zakrslosti ječmene přenáší:",
            type: "multiple_choice",
            options: [
                { text: "Mšice", icon: "🦟", isCorrect: true },
                { text: "Roztoči", icon: "🕷️", isCorrect: false },
                { text: "Houby", icon: "🍄", isCorrect: false },
                { text: "Ptáci", icon: "🐦", isCorrect: false }
            ],
            explanation: "BYDV je jedním z nejškodlivějších virů obilovin, přenášený mšicemi."
        }
    ],

    // Level 5 - Integrovaná ochrana
    module2_level5: [
        {
            question: "Co je integrovaná ochrana rostlin (IOR)?",
            type: "multiple_choice",
            options: [
                { text: "Kombinace všech metod ochrany", icon: "🔄", isCorrect: true },
                { text: "Pouze chemická ochrana", icon: "🧪", isCorrect: false },
                { text: "Pouze biologická ochrana", icon: "🐞", isCorrect: false },
                { text: "Žádná ochrana", icon: "⛔", isCorrect: false }
            ],
            explanation: "IOR kombinuje prevenci, biologickou, fyzikální a jako poslední chemickou ochranu."
        },
        {
            question: "Biologická ochrana využívá:",
            type: "multiple_choice",
            options: [
                { text: "Přirozené nepřátele škůdců", icon: "🐞", isCorrect: true },
                { text: "Syntetické chemikálie", icon: "🧪", isCorrect: false },
                { text: "Pouze vodu", icon: "💧", isCorrect: false },
                { text: "Pouze teplo", icon: "🌡️", isCorrect: false }
            ],
            explanation: "Biologická ochrana používá predátory, parazitoidy, entomopatogenní houby aj."
        },
        {
            question: "Feromonové lapáky slouží k:",
            type: "multiple_choice",
            options: [
                { text: "Monitoringu a odchytu hmyzu", icon: "🪤", isCorrect: true },
                { text: "Hnojení", icon: "🧪", isCorrect: false },
                { text: "Zavlažování", icon: "💧", isCorrect: false },
                { text: "Osvětlení", icon: "💡", isCorrect: false }
            ],
            explanation: "Feromony jsou chemické signály hmyzu, lapáky je využívají k monitoringu a odchytu."
        },
        {
            question: "Entomopatogenní houby hubí:",
            type: "multiple_choice",
            options: [
                { text: "Hmyz pomocí infekce", icon: "🍄", isCorrect: true },
                { text: "Plevele", icon: "🌿", isCorrect: false },
                { text: "Rostlinné choroby", icon: "🦠", isCorrect: false },
                { text: "Hlodavce", icon: "🐀", isCorrect: false }
            ],
            explanation: "Houby jako Beauveria bassiana infikují a usmrcují hmyzí škůdce."
        },
        {
            question: "Bacillus thuringiensis (Bt) je:",
            type: "multiple_choice",
            options: [
                { text: "Bakterie hubící housenky", icon: "🦠", isCorrect: true },
                { text: "Chemický insekticid", icon: "🧪", isCorrect: false },
                { text: "Hnojivo", icon: "🌱", isCorrect: false },
                { text: "Plevel", icon: "🌿", isCorrect: false }
            ],
            explanation: "Bt produkuje toxiny smrtelné pro housenky, ale bezpečné pro ostatní organismy."
        },
        {
            question: "Trichogramma je:",
            type: "multiple_choice",
            options: [
                { text: "Parazitická vosička hubící vejíčka škůdců", icon: "🐝", isCorrect: true },
                { text: "Druh pesticidu", icon: "🧪", isCorrect: false },
                { text: "Plevel", icon: "🌿", isCorrect: false },
                { text: "Houba", icon: "🍄", isCorrect: false }
            ],
            explanation: "Trichogramma jsou drobní parazitoidi, kteří kladou vajíčka do vajíček škůdců."
        },
        {
            question: "Mechanická ochrana zahrnuje:",
            type: "multiple_choice",
            options: [
                { text: "Sítě, pásky, ruční sběr", icon: "🔧", isCorrect: true },
                { text: "Postřiky", icon: "💦", isCorrect: false },
                { text: "Hnojení", icon: "🧪", isCorrect: false },
                { text: "Genetickou modifikaci", icon: "🧬", isCorrect: false }
            ],
            explanation: "Mechanické metody fyzicky brání škůdcům v přístupu nebo je odstraňují."
        },
        {
            question: "Agrotechnická ochrana je:",
            type: "multiple_choice",
            options: [
                { text: "Úprava pěstitelských postupů", icon: "🌾", isCorrect: true },
                { text: "Použití robotů", icon: "🤖", isCorrect: false },
                { text: "Chemický postřik", icon: "🧪", isCorrect: false },
                { text: "Nic nedělat", icon: "😴", isCorrect: false }
            ],
            explanation: "Agrotechnika zahrnuje střídání plodin, termín setí, hustotu porostu aj."
        },
        {
            question: "Proč je IOR důležitá?",
            type: "multiple_choice",
            options: [
                { text: "Snižuje závislost na chemii a rezistenci", icon: "✅", isCorrect: true },
                { text: "Je nejlevnější", icon: "💰", isCorrect: false },
                { text: "Je nejjednodušší", icon: "😊", isCorrect: false },
                { text: "Není důležitá", icon: "❌", isCorrect: false }
            ],
            explanation: "IOR zpomaluje vznik rezistence, chrání životní prostředí a je udržitelnější."
        },
        {
            question: "IOR v EU je:",
            type: "multiple_choice",
            options: [
                { text: "Povinná ze zákona", icon: "⚖️", isCorrect: true },
                { text: "Dobrovolná", icon: "🤷", isCorrect: false },
                { text: "Zakázaná", icon: "⛔", isCorrect: false },
                { text: "Neexistuje", icon: "❌", isCorrect: false }
            ],
            explanation: "Od roku 2014 je IOR povinná pro všechny profesionální uživatele pesticidů v EU."
        }
    ],

    // Level 6 - Bezpečné používání pesticidů
    module2_level6: [
        {
            question: "Co je ochranná lhůta?",
            type: "multiple_choice",
            options: [
                { text: "Doba od aplikace do sklizně", icon: "⏰", isCorrect: true },
                { text: "Doba skladování pesticidu", icon: "📦", isCorrect: false },
                { text: "Doba účinnosti", icon: "⚡", isCorrect: false },
                { text: "Doba nákupu", icon: "🛒", isCorrect: false }
            ],
            explanation: "Ochranná lhůta zajišťuje, že rezidua pesticidu se rozloží před konzumací."
        },
        {
            question: "OOP znamená:",
            type: "multiple_choice",
            options: [
                { text: "Osobní ochranné prostředky", icon: "🧤", isCorrect: true },
                { text: "Oficiální ochranný program", icon: "📋", isCorrect: false },
                { text: "Optimální ochranný postup", icon: "✅", isCorrect: false },
                { text: "Ořezávací ochranný přípravek", icon: "✂️", isCorrect: false }
            ],
            explanation: "OOP zahrnují rukavice, ochranný oděv, respirátor, brýle pro práci s pesticidy."
        },
        {
            question: "Při postřiku je nutné chránit:",
            type: "multiple_choice",
            options: [
                { text: "Kůži, oči, dýchací cesty", icon: "🛡️", isCorrect: true },
                { text: "Pouze ruce", icon: "🤲", isCorrect: false },
                { text: "Pouze oči", icon: "👀", isCorrect: false },
                { text: "Nic", icon: "❌", isCorrect: false }
            ],
            explanation: "Pesticidy mohou vstupovat do těla kůží, vdechnutím i polknutím."
        },
        {
            question: "Prázdné obaly od pesticidů:",
            type: "multiple_choice",
            options: [
                { text: "Se odevzdávají k odborné likvidaci", icon: "♻️", isCorrect: true },
                { text: "Se vyhazují do koše", icon: "🗑️", isCorrect: false },
                { text: "Se pálí", icon: "🔥", isCorrect: false },
                { text: "Se zakopávají", icon: "⬇️", isCorrect: false }
            ],
            explanation: "Obaly jsou nebezpečný odpad a musí se likvidovat specializovaně."
        },
        {
            question: "Pesticidy se skladují:",
            type: "multiple_choice",
            options: [
                { text: "V uzamčeném, větraném skladu", icon: "🔒", isCorrect: true },
                { text: "V kuchyni", icon: "🍳", isCorrect: false },
                { text: "Ve skleníku", icon: "🏡", isCorrect: false },
                { text: "Venku na slunci", icon: "☀️", isCorrect: false }
            ],
            explanation: "Sklad musí být zabezpečený, suchý, větraný a označený výstražnými symboly."
        },
        {
            question: "Co znamená symbol lebky na pesticidu?",
            type: "multiple_choice",
            options: [
                { text: "Toxický přípravek", icon: "☠️", isCorrect: true },
                { text: "Pirátský přípravek", icon: "🏴‍☠️", isCorrect: false },
                { text: "Přírodní přípravek", icon: "🌿", isCorrect: false },
                { text: "Bezpečný přípravek", icon: "✅", isCorrect: false }
            ],
            explanation: "Lebka s překříženými kostmi značí akutní toxicitu přípravku."
        },
        {
            question: "Kdy nepostřikovat?",
            type: "multiple_choice",
            options: [
                { text: "Za větru, deště, v poledním horku", icon: "🌪️", isCorrect: true },
                { text: "Ráno", icon: "🌅", isCorrect: false },
                { text: "Večer", icon: "🌆", isCorrect: false },
                { text: "Za bezvětří", icon: "🍃", isCorrect: false }
            ],
            explanation: "Vítr způsobuje úlet, déšť smývá přípravek, horko může poškodit rostliny."
        },
        {
            question: "Maximální reziduální limit (MRL) je:",
            type: "multiple_choice",
            options: [
                { text: "Maximální povolené množství pesticidu v potravině", icon: "📊", isCorrect: true },
                { text: "Minimální dávka pesticidu", icon: "📉", isCorrect: false },
                { text: "Maximální cena", icon: "💰", isCorrect: false },
                { text: "Doba účinnosti", icon: "⏰", isCorrect: false }
            ],
            explanation: "MRL určuje, kolik pesticidu smí být v potravinách - chrání zdraví spotřebitelů."
        },
        {
            question: "Rezistence škůdců znamená:",
            type: "multiple_choice",
            options: [
                { text: "Odolnost vůči pesticidu", icon: "💪", isCorrect: true },
                { text: "Větší citlivost", icon: "😢", isCorrect: false },
                { text: "Rychlejší úhyn", icon: "☠️", isCorrect: false },
                { text: "Lepší zdraví", icon: "❤️", isCorrect: false }
            ],
            explanation: "Opakované používání stejných pesticidů vede k vývoji odolných populací."
        },
        {
            question: "Jak předcházet rezistenci?",
            type: "multiple_choice",
            options: [
                { text: "Střídat přípravky s různým mechanismem", icon: "🔄", isCorrect: true },
                { text: "Používat více stejného přípravku", icon: "📈", isCorrect: false },
                { text: "Nikdy nepostřikovat", icon: "⛔", isCorrect: false },
                { text: "Střídat barvy přípravků", icon: "🎨", isCorrect: false }
            ],
            explanation: "Střídání účinných látek s různým mechanismem účinku zpomaluje vznik rezistence."
        }
    ],

    // Level 7 - Škůdci skladovaných plodin
    module2_level7: [
        {
            question: "Pilous černý napadá:",
            type: "multiple_choice",
            options: [
                { text: "Skladované obilí", icon: "🌾", isCorrect: true },
                { text: "Rostoucí obilí", icon: "🌱", isCorrect: false },
                { text: "Ovoce na stromě", icon: "🍎", isCorrect: false },
                { text: "Zeleninu na záhonu", icon: "🥬", isCorrect: false }
            ],
            explanation: "Pilous černý je jeden z nejvýznamnějších škůdců skladovaného obilí."
        },
        {
            question: "Zavíječ moučný škodí v:",
            type: "multiple_choice",
            options: [
                { text: "Mouce a obilí", icon: "🌾", isCorrect: true },
                { text: "Ovoci", icon: "🍎", isCorrect: false },
                { text: "Zelenině", icon: "🥬", isCorrect: false },
                { text: "Mléčných výrobcích", icon: "🥛", isCorrect: false }
            ],
            explanation: "Housenky zavíječe moučného znehodnocují mouku pavučinovými předivami."
        },
        {
            question: "Potkani a myši ve skladu způsobují:",
            type: "multiple_choice",
            options: [
                { text: "Kontaminaci a ztráty", icon: "🐀", isCorrect: true },
                { text: "Pouze hluk", icon: "🔊", isCorrect: false },
                { text: "Zlepšení kvality", icon: "📈", isCorrect: false },
                { text: "Nic škodlivého", icon: "✅", isCorrect: false }
            ],
            explanation: "Hlodavci konzumují zásoby a kontaminují je výkaly a močí."
        },
        {
            question: "Prevence škůdců ve skladu zahrnuje:",
            type: "multiple_choice",
            options: [
                { text: "Čistotu, chlazení, kontrolu vlhkosti", icon: "✅", isCorrect: true },
                { text: "Otevřená okna", icon: "🪟", isCorrect: false },
                { text: "Vysokou teplotu", icon: "🌡️", isCorrect: false },
                { text: "Vlhké prostředí", icon: "💧", isCorrect: false }
            ],
            explanation: "Čistý, suchý a chladný sklad minimalizuje riziko napadení škůdci."
        },
        {
            question: "Fumigace je:",
            type: "multiple_choice",
            options: [
                { text: "Ošetření plynem", icon: "💨", isCorrect: true },
                { text: "Postřik vodou", icon: "💧", isCorrect: false },
                { text: "Mechanické čištění", icon: "🔧", isCorrect: false },
                { text: "Zahřívání", icon: "🔥", isCorrect: false }
            ],
            explanation: "Fumigace využívá plyny (např. fosforovodík) k hubení škůdců v uzavřených prostorách."
        },
        {
            question: "Ideální vlhkost pro skladování obilí je:",
            type: "multiple_choice",
            options: [
                { text: "Pod 14%", icon: "📊", isCorrect: true },
                { text: "Nad 20%", icon: "💧", isCorrect: false },
                { text: "Nad 30%", icon: "💦", isCorrect: false },
                { text: "Nezáleží", icon: "🤷", isCorrect: false }
            ],
            explanation: "Nízká vlhkost brání rozvoji škůdců a plísní ve skladovaném obilí."
        },
        {
            question: "Roztoč moučný je:",
            type: "multiple_choice",
            options: [
                { text: "Mikroskopický škůdce mouky", icon: "🔬", isCorrect: true },
                { text: "Velký brouk", icon: "🪲", isCorrect: false },
                { text: "Motýl", icon: "🦋", isCorrect: false },
                { text: "Houba", icon: "🍄", isCorrect: false }
            ],
            explanation: "Roztoči jsou drobní členovci, kteří znehodnocují mouku a obilí."
        },
        {
            question: "Poškozené zrno ve skladu může:",
            type: "multiple_choice",
            options: [
                { text: "Přitahovat další škůdce", icon: "🐛", isCorrect: true },
                { text: "Odpuzovat škůdce", icon: "🛡️", isCorrect: false },
                { text: "Se samo opravit", icon: "🔧", isCorrect: false },
                { text: "Být kvalitnější", icon: "⭐", isCorrect: false }
            ],
            explanation: "Poškozená zrna jsou vstupní branou pro sekundární škůdce a plísně."
        },
        {
            question: "Světlušky se používají k:",
            type: "multiple_choice",
            options: [
                { text: "Ničemu - jsou to škůdci brambor", icon: "🥔", isCorrect: true },
                { text: "Osvětlení skladu", icon: "💡", isCorrect: false },
                { text: "Hubení myší", icon: "🐀", isCorrect: false },
                { text: "Zlepšení kvality", icon: "📈", isCorrect: false }
            ],
            explanation: "Světlušky jsou nebezpečnými škůdci skladovaných brambor."
        },
        {
            question: "HACCP ve skladování znamená:",
            type: "multiple_choice",
            options: [
                { text: "Systém kontroly kritických bodů", icon: "✅", isCorrect: true },
                { text: "Druh pesticidu", icon: "🧪", isCorrect: false },
                { text: "Typ skladu", icon: "🏭", isCorrect: false },
                { text: "Značka obilí", icon: "🌾", isCorrect: false }
            ],
            explanation: "HACCP je systém preventivní kontroly bezpečnosti potravin."
        }
    ],

    // Level 8 - Škůdci ovocných sadů
    module2_level8: [
        {
            question: "Obaleč jablečný způsobuje:",
            type: "multiple_choice",
            options: [
                { text: "Červivost jablek", icon: "🍎", isCorrect: true },
                { text: "Žloutnutí listů", icon: "🍂", isCorrect: false },
                { text: "Černání větví", icon: "⬛", isCorrect: false },
                { text: "Zvětšení plodů", icon: "📈", isCorrect: false }
            ],
            explanation: "Housenky obaleče vrtají do jablek a způsobují typickou červivost."
        },
        {
            question: "Mšice jabloňová zelená:",
            type: "multiple_choice",
            options: [
                { text: "Zkrucuje listy a výhony", icon: "🌿", isCorrect: true },
                { text: "Zvětšuje plody", icon: "🍎", isCorrect: false },
                { text: "Zlepšuje chuť", icon: "😋", isCorrect: false },
                { text: "Nezpůsobuje škody", icon: "✅", isCorrect: false }
            ],
            explanation: "Mšice sají na výhonech a způsobují deformace listů a růstové poruchy."
        },
        {
            question: "Štítenka zhoubná je:",
            type: "multiple_choice",
            options: [
                { text: "Karanténní škůdce jabloní", icon: "⚠️", isCorrect: true },
                { text: "Užitečný hmyz", icon: "🐝", isCorrect: false },
                { text: "Druh hnojiva", icon: "🧪", isCorrect: false },
                { text: "Choroba", icon: "🦠", isCorrect: false }
            ],
            explanation: "Štítenka zhoubná je závažný karanténní škůdce původem ze Severní Ameriky."
        },
        {
            question: "Pilatka jablečná škodí:",
            type: "multiple_choice",
            options: [
                { text: "Vrtáním larev v mladých plodech", icon: "🍎", isCorrect: true },
                { text: "Okusováním listů", icon: "🍃", isCorrect: false },
                { text: "Poškozováním kořenů", icon: "🌱", isCorrect: false },
                { text: "Ničením květů", icon: "🌸", isCorrect: false }
            ],
            explanation: "Larvy pilatky vrtají v mladých plůdcích, které pak opadávají."
        },
        {
            question: "Sviluška ovocná způsobuje:",
            type: "multiple_choice",
            options: [
                { text: "Bronzování a opad listů", icon: "🍂", isCorrect: true },
                { text: "Zvětšení plodů", icon: "📈", isCorrect: false },
                { text: "Lepší barvu", icon: "🎨", isCorrect: false },
                { text: "Rychlejší růst", icon: "⚡", isCorrect: false }
            ],
            explanation: "Svilušky sáním poškozují listy, které bronzovatí a předčasně opadávají."
        },
        {
            question: "Monilióza je:",
            type: "multiple_choice",
            options: [
                { text: "Houbová choroba plodů", icon: "🍄", isCorrect: true },
                { text: "Hmyzí škůdce", icon: "🐛", isCorrect: false },
                { text: "Virová choroba", icon: "🦠", isCorrect: false },
                { text: "Hnojivo", icon: "🧪", isCorrect: false }
            ],
            explanation: "Monilióza způsobuje hnědou hnilobu plodů s typickými bělavými polštářky."
        },
        {
            question: "Strupovitost jabloně se projevuje:",
            type: "multiple_choice",
            options: [
                { text: "Tmavými skvrnami na listech a plodech", icon: "🍎", isCorrect: true },
                { text: "Bílým povlakem", icon: "⚪", isCorrect: false },
                { text: "Červivostí", icon: "🐛", isCorrect: false },
                { text: "Zvětšením plodů", icon: "📈", isCorrect: false }
            ],
            explanation: "Strupovitost tvoří olivově hnědé až černé skvrny, plody praskají."
        },
        {
            question: "Ochrana sadů v zimě zahrnuje:",
            type: "multiple_choice",
            options: [
                { text: "Postřik olejem proti přezimujícím škůdcům", icon: "💧", isCorrect: true },
                { text: "Nic se nedělá", icon: "😴", isCorrect: false },
                { text: "Pouze hnojení", icon: "🧪", isCorrect: false },
                { text: "Sklizeň", icon: "🍎", isCorrect: false }
            ],
            explanation: "Zimní postřiky olejem likvidují přezimující vajíčka mšic a roztočů."
        },
        {
            question: "Hrušeň napadá především:",
            type: "multiple_choice",
            options: [
                { text: "Mera hrušňová", icon: "🐛", isCorrect: true },
                { text: "Mandelinka", icon: "🪲", isCorrect: false },
                { text: "Slimák", icon: "🐌", isCorrect: false },
                { text: "Myš", icon: "🐀", isCorrect: false }
            ],
            explanation: "Mera hrušňová je hlavní škůdce hrušní, přenáší fytoplazmovou chorobu."
        },
        {
            question: "Švestky trpí hlavně na:",
            type: "multiple_choice",
            options: [
                { text: "Šárku švestky (virus)", icon: "🦠", isCorrect: true },
                { text: "Pouze hmyz", icon: "🐛", isCorrect: false },
                { text: "Pouze houby", icon: "🍄", isCorrect: false },
                { text: "Nic", icon: "✅", isCorrect: false }
            ],
            explanation: "Šárka je závažná virová choroba švestek přenášená mšicemi."
        }
    ],

    // Level 9 - Škůdci zeleniny
    module2_level9: [
        {
            question: "Dřepčíci škodí na:",
            type: "multiple_choice",
            options: [
                { text: "Brukvovité zelenině (zelí, řepka)", icon: "🥬", isCorrect: true },
                { text: "Pouze na ovoci", icon: "🍎", isCorrect: false },
                { text: "Pouze na obilí", icon: "🌾", isCorrect: false },
                { text: "Pouze na bramborách", icon: "🥔", isCorrect: false }
            ],
            explanation: "Dřepčíci okusují listy brukvovité zeleniny, typické jsou dírky v listech."
        },
        {
            question: "Bělásek zelný je škůdce:",
            type: "multiple_choice",
            options: [
                { text: "Zelí a příbuzné zeleniny", icon: "🥬", isCorrect: true },
                { text: "Rajčat", icon: "🍅", isCorrect: false },
                { text: "Mrkve", icon: "🥕", isCorrect: false },
                { text: "Cibule", icon: "🧅", isCorrect: false }
            ],
            explanation: "Housenky běláska zelného ožírají listy zelí, květáku a dalších brukvovitých."
        },
        {
            question: "Mšice zelná se vyskytuje na:",
            type: "multiple_choice",
            options: [
                { text: "Spodní straně listů zelí", icon: "🥬", isCorrect: true },
                { text: "Pouze na květech", icon: "🌸", isCorrect: false },
                { text: "Pouze na kořenech", icon: "🌱", isCorrect: false },
                { text: "Pouze na stonku", icon: "🌿", isCorrect: false }
            ],
            explanation: "Mšice zelná tvoří kolonie na spodní straně listů a deformuje rostliny."
        },
        {
            question: "Háďátko bramborové způsobuje:",
            type: "multiple_choice",
            options: [
                { text: "Zakrslost a žloutnutí brambor", icon: "🥔", isCorrect: true },
                { text: "Větší hlízy", icon: "📈", isCorrect: false },
                { text: "Lepší chuť", icon: "😋", isCorrect: false },
                { text: "Rychlejší růst", icon: "⚡", isCorrect: false }
            ],
            explanation: "Háďátka jsou mikroskopičtí červi napadající kořeny, karanténní škůdce."
        },
        {
            question: "Slimáci nejvíce škodí:",
            type: "multiple_choice",
            options: [
                { text: "Za vlhka v noci", icon: "🌙", isCorrect: true },
                { text: "Za sucha ve dne", icon: "☀️", isCorrect: false },
                { text: "V zimě", icon: "❄️", isCorrect: false },
                { text: "Nikdy", icon: "⛔", isCorrect: false }
            ],
            explanation: "Slimáci jsou aktivní za vlhkého počasí, zejména v noci."
        },
        {
            question: "Jak bojovat se slimáky?",
            type: "multiple_choice",
            options: [
                { text: "Granule, pasti, sběr", icon: "🪤", isCorrect: true },
                { text: "Postřik vodou", icon: "💧", isCorrect: false },
                { text: "Více zalévat", icon: "💦", isCorrect: false },
                { text: "Nic nedělat", icon: "😴", isCorrect: false }
            ],
            explanation: "Účinné jsou granule (metaldehyd, železité fosfáty), pivní pasti, ruční sběr."
        },
        {
            question: "Vrtalka pórkovou poznáme podle:",
            type: "multiple_choice",
            options: [
                { text: "Min v listech (chodbiček)", icon: "〰️", isCorrect: true },
                { text: "Velkých děr", icon: "⭕", isCorrect: false },
                { text: "Černých skvrn", icon: "⚫", isCorrect: false },
                { text: "Bílého povlaku", icon: "⚪", isCorrect: false }
            ],
            explanation: "Larvy vrtalky vyžírají chodbiček (miny) uvnitř listů póru a cibule."
        },
        {
            question: "Mrkvová muška:",
            type: "multiple_choice",
            options: [
                { text: "Její larvy poškozují kořeny mrkve", icon: "🥕", isCorrect: true },
                { text: "Létá kolem mrkve", icon: "🪰", isCorrect: false },
                { text: "Jí listy", icon: "🍃", isCorrect: false },
                { text: "Nezpůsobuje škody", icon: "✅", isCorrect: false }
            ],
            explanation: "Larvy mrkvové mušky vrtají chodby v kořenech mrkve a petržele."
        },
        {
            question: "Plíseň okurkových je:",
            type: "multiple_choice",
            options: [
                { text: "Houbová choroba tykvovitých", icon: "🥒", isCorrect: true },
                { text: "Hmyzí škůdce", icon: "🐛", isCorrect: false },
                { text: "Virová choroba", icon: "🦠", isCorrect: false },
                { text: "Bakterie", icon: "🦠", isCorrect: false }
            ],
            explanation: "Plíseň okurková způsobuje žluté skvrny na listech okurek a dalších tykvovitých."
        },
        {
            question: "Mandelinka bramborová se hubí:",
            type: "multiple_choice",
            options: [
                { text: "Insekticidy nebo ručním sběrem", icon: "🐛", isCorrect: true },
                { text: "Fungicidy", icon: "🍄", isCorrect: false },
                { text: "Herbicidy", icon: "🌿", isCorrect: false },
                { text: "Více zaléváním", icon: "💧", isCorrect: false }
            ],
            explanation: "Na malých plochách pomůže ruční sběr, jinak se používají insekticidy."
        }
    ],

    // Level 10 - Pokročilá ochrana a nové trendy
    module2_level10: [
        {
            question: "Precizní ochrana rostlin využívá:",
            type: "multiple_choice",
            options: [
                { text: "GPS, senzory, drony pro cílený zásah", icon: "🛸", isCorrect: true },
                { text: "Pouze tradiční postřikovače", icon: "🚜", isCorrect: false },
                { text: "Pouze ruční práci", icon: "✋", isCorrect: false },
                { text: "Žádnou technologii", icon: "❌", isCorrect: false }
            ],
            explanation: "Precizní zemědělství umožňuje aplikovat pesticidy pouze tam, kde je potřeba."
        },
        {
            question: "RNA interference (RNAi) v ochraně rostlin:",
            type: "multiple_choice",
            options: [
                { text: "Cíleně umlčuje geny škůdců", icon: "🧬", isCorrect: true },
                { text: "Je typ pesticidu", icon: "🧪", isCorrect: false },
                { text: "Je druh hnojiva", icon: "🌱", isCorrect: false },
                { text: "Neexistuje", icon: "❌", isCorrect: false }
            ],
            explanation: "RNAi technologie umožňuje vývoj specifických biopesticidů působících na molekulární úrovni."
        },
        {
            question: "CRISPR v zemědělství může:",
            type: "multiple_choice",
            options: [
                { text: "Vytvářet odolnější odrůdy", icon: "🧬", isCorrect: true },
                { text: "Pouze hubit škůdce", icon: "🐛", isCorrect: false },
                { text: "Pouze hnojit", icon: "🧪", isCorrect: false },
                { text: "Nic", icon: "❌", isCorrect: false }
            ],
            explanation: "Genové editace CRISPR umožňuje rychlý vývoj odrůd odolných vůči chorobám."
        },
        {
            question: "Biopesticidy jsou:",
            type: "multiple_choice",
            options: [
                { text: "Přírodního původu (organismy, extrakty)", icon: "🌿", isCorrect: true },
                { text: "Syntetické chemikálie", icon: "🧪", isCorrect: false },
                { text: "Radioaktivní látky", icon: "☢️", isCorrect: false },
                { text: "Neexistují", icon: "❌", isCorrect: false }
            ],
            explanation: "Biopesticidy zahrnují mikroorganismy, rostlinné extrakty a další přírodní látky."
        },
        {
            question: "Push-pull strategie znamená:",
            type: "multiple_choice",
            options: [
                { text: "Odpuzování od plodiny a lákání jinam", icon: "↔️", isCorrect: true },
                { text: "Tlačení a tahání traktorů", icon: "🚜", isCorrect: false },
                { text: "Typ postřikovače", icon: "💦", isCorrect: false },
                { text: "Druh hnojení", icon: "🧪", isCorrect: false }
            ],
            explanation: "Push-pull využívá odpuzující a lákavé rostliny k řízení škůdců bez chemie."
        },
        {
            question: "Konfuzní metoda využívá:",
            type: "multiple_choice",
            options: [
                { text: "Feromony k matení samců", icon: "💨", isCorrect: true },
                { text: "Hlasitou hudbu", icon: "🎵", isCorrect: false },
                { text: "Pestré barvy", icon: "🎨", isCorrect: false },
                { text: "Silné světlo", icon: "💡", isCorrect: false }
            ],
            explanation: "Nasycení prostředí feromony brání samcům najít samice k páření."
        },
        {
            question: "Sterile insect technique (SIT):",
            type: "multiple_choice",
            options: [
                { text: "Vypouští sterilní samce", icon: "🐛", isCorrect: true },
                { text: "Sterilizuje rostliny", icon: "🌱", isCorrect: false },
                { text: "Čistí postřikovače", icon: "🧹", isCorrect: false },
                { text: "Sterilizuje půdu", icon: "🌍", isCorrect: false }
            ],
            explanation: "SIT využívá vypouštění sterilizovaných samců k redukci populace škůdců."
        },
        {
            question: "Základem IPM (Integrated Pest Management) je:",
            type: "multiple_choice",
            options: [
                { text: "Monitoring a prahy škodlivosti", icon: "📊", isCorrect: true },
                { text: "Preventivní postřiky", icon: "💦", isCorrect: false },
                { text: "Ignorování škůdců", icon: "🙈", isCorrect: false },
                { text: "Pouze bio přípravky", icon: "🌿", isCorrect: false }
            ],
            explanation: "IPM je založeno na sledování škůdců a zásahu až po překročení prahu škodlivosti."
        },
        {
            question: "Microbiome engineering v ochraně rostlin:",
            type: "multiple_choice",
            options: [
                { text: "Využívá prospěšné mikroorganismy", icon: "🦠", isCorrect: true },
                { text: "Je zakázáno", icon: "⛔", isCorrect: false },
                { text: "Neexistuje", icon: "❌", isCorrect: false },
                { text: "Pouze škodí", icon: "☠️", isCorrect: false }
            ],
            explanation: "Manipulace s rostlinným mikrobiomem může zvýšit odolnost vůči chorobám."
        },
        {
            question: "Budoucnost ochrany rostlin směřuje k:",
            type: "multiple_choice",
            options: [
                { text: "Biologické a precizní ochraně", icon: "🎯", isCorrect: true },
                { text: "Více chemikálií", icon: "🧪", isCorrect: false },
                { text: "Žádné ochraně", icon: "⛔", isCorrect: false },
                { text: "Pouze GMO", icon: "🧬", isCorrect: false }
            ],
            explanation: "Trendem je udržitelná ochrana s minimálním dopadem na životní prostředí."
        }
    ]
};
