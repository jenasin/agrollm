// Module 2: Plant Protection - 100 questions (10 levels x 10 questions)
const MODULE2_QUESTIONS = {
    // Level 1 - Plant Protection Basics
    module2_level1: [
        {
            question: "What is a pest?",
            type: "multiple_choice",
            options: [
                { text: "Organism that damages plants", icon: "🐛", isCorrect: true },
                { text: "Beneficial insect", icon: "🐝", isCorrect: false },
                { text: "Fertilizer", icon: "🧪", isCorrect: false },
                { text: "Weed", icon: "🌿", isCorrect: false }
            ],
            explanation: "Pests are organisms (insects, rodents, mites) that damage crops."
        },
        {
            question: "What is a plant disease?",
            type: "multiple_choice",
            options: [
                { text: "Disorder caused by a pathogen", icon: "🦠", isCorrect: true },
                { text: "Lack of water", icon: "💧", isCorrect: false },
                { text: "Too much sun", icon: "☀️", isCorrect: false },
                { text: "Lack of space", icon: "📏", isCorrect: false }
            ],
            explanation: "Diseases are caused by fungi, bacteria, viruses, or phytoplasmas."
        },
        {
            question: "What is a pesticide?",
            type: "multiple_choice",
            options: [
                { text: "Plant protection product", icon: "🧪", isCorrect: true },
                { text: "Fertilizer", icon: "🌱", isCorrect: false },
                { text: "Seed", icon: "🌰", isCorrect: false },
                { text: "Feed", icon: "🥬", isCorrect: false }
            ],
            explanation: "Pesticides are chemical or biological products for killing harmful organisms."
        },
        {
            question: "Insecticide is used to kill:",
            type: "multiple_choice",
            options: [
                { text: "Insects", icon: "🐛", isCorrect: true },
                { text: "Weeds", icon: "🌿", isCorrect: false },
                { text: "Fungi", icon: "🍄", isCorrect: false },
                { text: "Rodents", icon: "🐀", isCorrect: false }
            ],
            explanation: "Insecticides are products designed to kill insect pests."
        },
        {
            question: "Fungicide is used against:",
            type: "multiple_choice",
            options: [
                { text: "Fungal diseases", icon: "🍄", isCorrect: true },
                { text: "Insects", icon: "🐛", isCorrect: false },
                { text: "Weeds", icon: "🌿", isCorrect: false },
                { text: "Birds", icon: "🐦", isCorrect: false }
            ],
            explanation: "Fungicides suppress fungal pathogens causing plant diseases."
        },
        {
            question: "What is preventive protection?",
            type: "multiple_choice",
            options: [
                { text: "Measures before problem occurs", icon: "🛡️", isCorrect: true },
                { text: "Treatment of infected plants", icon: "💊", isCorrect: false },
                { text: "Harvesting sick plants", icon: "🌾", isCorrect: false },
                { text: "Do nothing", icon: "😴", isCorrect: false }
            ],
            explanation: "Prevention includes measures that prevent problems - crop rotation, hygiene."
        },
        {
            question: "What is economic threshold?",
            type: "multiple_choice",
            options: [
                { text: "Infestation level when treatment pays off", icon: "📊", isCorrect: true },
                { text: "Field entrance", icon: "🚪", isCorrect: false },
                { text: "Maximum yield", icon: "📈", isCorrect: false },
                { text: "Minimum pesticide dose", icon: "💧", isCorrect: false }
            ],
            explanation: "Economic threshold determines when economic losses exceed treatment costs."
        },
        {
            question: "What is a quarantine pest?",
            type: "multiple_choice",
            options: [
                { text: "Dangerous pest subject to regulation", icon: "⚠️", isCorrect: true },
                { text: "Pest in quarantine", icon: "🏥", isCorrect: false },
                { text: "Common pest", icon: "🐛", isCorrect: false },
                { text: "Extinct pest", icon: "☠️", isCorrect: false }
            ],
            explanation: "Quarantine organisms are regulated and their occurrence must be reported."
        },
        {
            question: "Disease symptoms can include:",
            type: "multiple_choice",
            options: [
                { text: "Spots, wilting, deformations", icon: "🍂", isCorrect: true },
                { text: "Only yellow leaves", icon: "🟡", isCorrect: false },
                { text: "Fast growth", icon: "📈", isCorrect: false },
                { text: "Larger fruits", icon: "🍎", isCorrect: false }
            ],
            explanation: "Diseases manifest in various ways - spots, rot, wilting, deformations, stunting."
        },
        {
            question: "Most important in plant protection is:",
            type: "multiple_choice",
            options: [
                { text: "Prevention and early diagnosis", icon: "✅", isCorrect: true },
                { text: "As many pesticides as possible", icon: "🧪", isCorrect: false },
                { text: "Ignore problems", icon: "🙈", isCorrect: false },
                { text: "Chemicals at any cost", icon: "💰", isCorrect: false }
            ],
            explanation: "Prevention is cheaper and more effective than treating widespread problems."
        }
    ],

    // Level 2 - Insect Pests
    module2_level2: [
        {
            question: "Aphids damage plants by:",
            type: "multiple_choice",
            options: [
                { text: "Sucking sap and transmitting viruses", icon: "🦟", isCorrect: true },
                { text: "Chewing leaves", icon: "🍃", isCorrect: false },
                { text: "Boring into stems", icon: "🕳️", isCorrect: false },
                { text: "Eating roots", icon: "🌱", isCorrect: false }
            ],
            explanation: "Aphids suck plant sap and are significant vectors of viral diseases."
        },
        {
            question: "Natural enemy of aphids is:",
            type: "multiple_choice",
            options: [
                { text: "Ladybug", icon: "🐞", isCorrect: true },
                { text: "Bee", icon: "🐝", isCorrect: false },
                { text: "Butterfly", icon: "🦋", isCorrect: false },
                { text: "Fly", icon: "🪰", isCorrect: false }
            ],
            explanation: "Ladybugs and their larvae are important predators of aphids."
        },
        {
            question: "Colorado potato beetle is recognized by:",
            type: "multiple_choice",
            options: [
                { text: "Yellow-black stripes", icon: "🟡", isCorrect: true },
                { text: "Red color", icon: "🔴", isCorrect: false },
                { text: "Green color", icon: "🟢", isCorrect: false },
                { text: "Blue color", icon: "🔵", isCorrect: false }
            ],
            explanation: "Colorado potato beetle has characteristic yellow-black stripes on wing covers."
        },
        {
            question: "Caterpillars damage by:",
            type: "multiple_choice",
            options: [
                { text: "Chewing leaves and fruits", icon: "🐛", isCorrect: true },
                { text: "Sucking sap", icon: "🥤", isCorrect: false },
                { text: "Transmitting diseases", icon: "🦠", isCorrect: false },
                { text: "Destroying roots", icon: "🌱", isCorrect: false }
            ],
            explanation: "Caterpillars of butterflies have chewing mouthparts and eat leaf tissue."
        },
        {
            question: "European corn borer attacks:",
            type: "multiple_choice",
            options: [
                { text: "Corn ears and stalks", icon: "🌽", isCorrect: true },
                { text: "Only roots", icon: "🌱", isCorrect: false },
                { text: "Only leaves", icon: "🍃", isCorrect: false },
                { text: "Only flowers", icon: "🌸", isCorrect: false }
            ],
            explanation: "Corn borer larvae bore into ears and stalks of corn causing major damage."
        },
        {
            question: "Wireworms are larvae of:",
            type: "multiple_choice",
            options: [
                { text: "Click beetles", icon: "🪲", isCorrect: true },
                { text: "Butterflies", icon: "🦋", isCorrect: false },
                { text: "Flies", icon: "🪰", isCorrect: false },
                { text: "Bees", icon: "🐝", isCorrect: false }
            ],
            explanation: "Wireworms are yellow, hard larvae of click beetles that eat roots and tubers."
        },
        {
            question: "Hessian fly damages mainly:",
            type: "multiple_choice",
            options: [
                { text: "Cereals by forming galls", icon: "🌾", isCorrect: true },
                { text: "Fruits", icon: "🍎", isCorrect: false },
                { text: "Vegetables", icon: "🥬", isCorrect: false },
                { text: "Trees", icon: "🌳", isCorrect: false }
            ],
            explanation: "Hessian flies are small midges whose larvae form galls on cereals."
        },
        {
            question: "Thrips are:",
            type: "multiple_choice",
            options: [
                { text: "Tiny insects damaging leaves and flowers", icon: "🐛", isCorrect: true },
                { text: "Large beetles", icon: "🪲", isCorrect: false },
                { text: "Butterflies", icon: "🦋", isCorrect: false },
                { text: "Spiders", icon: "🕷️", isCorrect: false }
            ],
            explanation: "Thrips are tiny insects with fringed wings that feed on leaves and flowers."
        },
        {
            question: "Spider mites are:",
            type: "multiple_choice",
            options: [
                { text: "Mites feeding on leaves", icon: "🔴", isCorrect: true },
                { text: "Insects", icon: "🐛", isCorrect: false },
                { text: "Fungi", icon: "🍄", isCorrect: false },
                { text: "Bacteria", icon: "🦠", isCorrect: false }
            ],
            explanation: "Spider mites are microscopic mites that form webs on leaf undersides."
        },
        {
            question: "How to control pests without chemicals?",
            type: "multiple_choice",
            options: [
                { text: "By supporting natural enemies", icon: "🐞", isCorrect: true },
                { text: "By ignoring them", icon: "🙈", isCorrect: false },
                { text: "More fertilization", icon: "🧪", isCorrect: false },
                { text: "Less watering", icon: "💧", isCorrect: false }
            ],
            explanation: "Biological control uses predators, parasitoids, and pathogens of pests."
        }
    ],

    // Level 3 - Fungal Diseases
    module2_level3: [
        {
            question: "Powdery mildew appears as:",
            type: "multiple_choice",
            options: [
                { text: "White coating on leaves", icon: "⚪", isCorrect: true },
                { text: "Yellow spots", icon: "🟡", isCorrect: false },
                { text: "Black dots", icon: "⚫", isCorrect: false },
                { text: "Wilting", icon: "🥀", isCorrect: false }
            ],
            explanation: "Powdery mildew forms characteristic white powdery coating on plant surfaces."
        },
        {
            question: "Late blight of potato causes:",
            type: "multiple_choice",
            options: [
                { text: "Brown spots and rot", icon: "🟤", isCorrect: true },
                { text: "White coating", icon: "⚪", isCorrect: false },
                { text: "Faster growth", icon: "📈", isCorrect: false },
                { text: "Larger tubers", icon: "🥔", isCorrect: false }
            ],
            explanation: "Phytophthora infestans causes devastating disease of potatoes and tomatoes."
        },
        {
            question: "Wheat rust is recognized by:",
            type: "multiple_choice",
            options: [
                { text: "Orange to brown pustules", icon: "🟠", isCorrect: true },
                { text: "White coating", icon: "⚪", isCorrect: false },
                { text: "Green spots", icon: "🟢", isCorrect: false },
                { text: "Blue stripes", icon: "🔵", isCorrect: false }
            ],
            explanation: "Rusts form characteristic rust-colored spore pustules on cereal leaves."
        },
        {
            question: "Smut attacks:",
            type: "multiple_choice",
            options: [
                { text: "Cereal grains", icon: "🌾", isCorrect: true },
                { text: "Roots", icon: "🌱", isCorrect: false },
                { text: "Stems", icon: "🌿", isCorrect: false },
                { text: "Flowers", icon: "🌸", isCorrect: false }
            ],
            explanation: "Smuts transform cereal grains into black masses of spores."
        },
        {
            question: "Gray mold (Botrytis) affects:",
            type: "multiple_choice",
            options: [
                { text: "Fruits, flowers, leaves", icon: "🍇", isCorrect: true },
                { text: "Only roots", icon: "🌱", isCorrect: false },
                { text: "Only stems", icon: "🌿", isCorrect: false },
                { text: "Only seeds", icon: "🌰", isCorrect: false }
            ],
            explanation: "Botrytis cinerea is a polyphagous fungus affecting many crops, especially in humid conditions."
        },
        {
            question: "Fusarium diseases cause:",
            type: "multiple_choice",
            options: [
                { text: "Wilting and rot", icon: "🥀", isCorrect: true },
                { text: "White coating", icon: "⚪", isCorrect: false },
                { text: "Faster growth", icon: "📈", isCorrect: false },
                { text: "Larger fruits", icon: "🍎", isCorrect: false }
            ],
            explanation: "Fusarium causes wilting, root and ear rots, and produces dangerous mycotoxins."
        },
        {
            question: "How do fungal diseases spread?",
            type: "multiple_choice",
            options: [
                { text: "Spores by wind, water, insects", icon: "💨", isCorrect: true },
                { text: "Only by touch", icon: "✋", isCorrect: false },
                { text: "Only through soil", icon: "🌍", isCorrect: false },
                { text: "They don't spread", icon: "⛔", isCorrect: false }
            ],
            explanation: "Fungal spores spread through air, rain, irrigation, and on tools."
        },
        {
            question: "Prevention of fungal diseases includes:",
            type: "multiple_choice",
            options: [
                { text: "Crop rotation, resistant varieties", icon: "🔄", isCorrect: true },
                { text: "More watering", icon: "💧", isCorrect: false },
                { text: "Denser seeding", icon: "🌾", isCorrect: false },
                { text: "Do nothing", icon: "😴", isCorrect: false }
            ],
            explanation: "Prevention is key - healthy seed, crop rotation, crop canopy ventilation."
        },
        {
            question: "Seed treatment protects against:",
            type: "multiple_choice",
            options: [
                { text: "Seed-borne diseases", icon: "🌰", isCorrect: true },
                { text: "Drought", icon: "🏜️", isCorrect: false },
                { text: "Frost", icon: "❄️", isCorrect: false },
                { text: "Weeds", icon: "🌿", isCorrect: false }
            ],
            explanation: "Fungicide seed treatment protects germinating plants from seed and soil-borne diseases."
        },
        {
            question: "Ideal conditions for fungi are:",
            type: "multiple_choice",
            options: [
                { text: "Warm and humid", icon: "🌡️", isCorrect: true },
                { text: "Dry and cold", icon: "❄️", isCorrect: false },
                { text: "Frost", icon: "🥶", isCorrect: false },
                { text: "Extreme heat", icon: "🔥", isCorrect: false }
            ],
            explanation: "Most fungal pathogens need moisture and warmth for sporulation and infection."
        }
    ],

    // Level 4 - Viral and Bacterial Diseases
    module2_level4: [
        {
            question: "Viral diseases appear as:",
            type: "multiple_choice",
            options: [
                { text: "Mosaic, stunting, deformations", icon: "🦠", isCorrect: true },
                { text: "White coating", icon: "⚪", isCorrect: false },
                { text: "Black spots", icon: "⚫", isCorrect: false },
                { text: "Better growth", icon: "📈", isCorrect: false }
            ],
            explanation: "Viruses cause mosaic patterns, stunting, leaf curling, and deformations."
        },
        {
            question: "Viruses are mainly transmitted by:",
            type: "multiple_choice",
            options: [
                { text: "Aphids and other insects", icon: "🦟", isCorrect: true },
                { text: "Wind", icon: "💨", isCorrect: false },
                { text: "Rain", icon: "🌧️", isCorrect: false },
                { text: "Sun", icon: "☀️", isCorrect: false }
            ],
            explanation: "Most plant viruses are transmitted by sucking insects, especially aphids."
        },
        {
            question: "Can viral diseases be cured?",
            type: "multiple_choice",
            options: [
                { text: "No, only prevention", icon: "⛔", isCorrect: true },
                { text: "Yes, with fungicides", icon: "🧪", isCorrect: false },
                { text: "Yes, with antibiotics", icon: "💊", isCorrect: false },
                { text: "Yes, with more water", icon: "💧", isCorrect: false }
            ],
            explanation: "Viral diseases cannot be cured, prevention is important - healthy material, vector control."
        },
        {
            question: "Bacterial diseases cause:",
            type: "multiple_choice",
            options: [
                { text: "Rots, tumors, wilting", icon: "🦠", isCorrect: true },
                { text: "Only colored spots", icon: "🎨", isCorrect: false },
                { text: "Faster growth", icon: "📈", isCorrect: false },
                { text: "Larger fruits", icon: "🍎", isCorrect: false }
            ],
            explanation: "Bacteria cause soft rots, tumors, wilting, and necrotic spots."
        },
        {
            question: "Bacterial ring rot of potato is recognized by:",
            type: "multiple_choice",
            options: [
                { text: "Wilting and browning of vascular tissue", icon: "🥔", isCorrect: true },
                { text: "White coating", icon: "⚪", isCorrect: false },
                { text: "Green spots", icon: "🟢", isCorrect: false },
                { text: "Tuber enlargement", icon: "📈", isCorrect: false }
            ],
            explanation: "When cutting a tuber, brown vascular bundles in circular arrangement are visible."
        },
        {
            question: "Fire blight of apple appears as:",
            type: "multiple_choice",
            options: [
                { text: "Blackening and drying of shoots", icon: "🍎", isCorrect: true },
                { text: "White flowers", icon: "🌸", isCorrect: false },
                { text: "Larger fruits", icon: "📈", isCorrect: false },
                { text: "Faster growth", icon: "⚡", isCorrect: false }
            ],
            explanation: "Erwinia amylovora causes rapid drying of flowers and shoots resembling fire damage."
        },
        {
            question: "Phytoplasma diseases are spread by:",
            type: "multiple_choice",
            options: [
                { text: "Leafhoppers and psyllids", icon: "🦗", isCorrect: true },
                { text: "Wind", icon: "💨", isCorrect: false },
                { text: "Water", icon: "💧", isCorrect: false },
                { text: "Birds", icon: "🐦", isCorrect: false }
            ],
            explanation: "Phytoplasmas are transmitted by piercing-sucking insects, especially leafhoppers."
        },
        {
            question: "Stolbur of tomato causes:",
            type: "multiple_choice",
            options: [
                { text: "Deformations and stunting", icon: "🍅", isCorrect: true },
                { text: "Larger fruits", icon: "📈", isCorrect: false },
                { text: "Better taste", icon: "😋", isCorrect: false },
                { text: "Faster ripening", icon: "⏰", isCorrect: false }
            ],
            explanation: "Stolbur is a phytoplasma disease causing stunting and fruit deformations."
        },
        {
            question: "Prevention of viral diseases includes:",
            type: "multiple_choice",
            options: [
                { text: "Vector control and healthy planting material", icon: "✅", isCorrect: true },
                { text: "More watering", icon: "💧", isCorrect: false },
                { text: "More fertilizing", icon: "🧪", isCorrect: false },
                { text: "Do nothing", icon: "😴", isCorrect: false }
            ],
            explanation: "Key is vector control (aphids), certified virus-free materials, and hygiene."
        },
        {
            question: "Barley yellow dwarf virus is transmitted by:",
            type: "multiple_choice",
            options: [
                { text: "Aphids", icon: "🦟", isCorrect: true },
                { text: "Mites", icon: "🕷️", isCorrect: false },
                { text: "Fungi", icon: "🍄", isCorrect: false },
                { text: "Birds", icon: "🐦", isCorrect: false }
            ],
            explanation: "BYDV is one of the most damaging cereal viruses, transmitted by aphids."
        }
    ],

    // Level 5 - Integrated Protection
    module2_level5: [
        {
            question: "What is Integrated Pest Management (IPM)?",
            type: "multiple_choice",
            options: [
                { text: "Combination of all protection methods", icon: "🔄", isCorrect: true },
                { text: "Only chemical protection", icon: "🧪", isCorrect: false },
                { text: "Only biological protection", icon: "🐞", isCorrect: false },
                { text: "No protection", icon: "⛔", isCorrect: false }
            ],
            explanation: "IPM combines prevention, biological, physical, and as last resort chemical protection."
        },
        {
            question: "Biological control uses:",
            type: "multiple_choice",
            options: [
                { text: "Natural enemies of pests", icon: "🐞", isCorrect: true },
                { text: "Synthetic chemicals", icon: "🧪", isCorrect: false },
                { text: "Only water", icon: "💧", isCorrect: false },
                { text: "Only heat", icon: "🌡️", isCorrect: false }
            ],
            explanation: "Biological control uses predators, parasitoids, entomopathogenic fungi, etc."
        },
        {
            question: "Pheromone traps are used for:",
            type: "multiple_choice",
            options: [
                { text: "Monitoring and catching insects", icon: "🪤", isCorrect: true },
                { text: "Fertilizing", icon: "🧪", isCorrect: false },
                { text: "Irrigation", icon: "💧", isCorrect: false },
                { text: "Lighting", icon: "💡", isCorrect: false }
            ],
            explanation: "Pheromones are insect chemical signals, traps use them for monitoring and capture."
        },
        {
            question: "Entomopathogenic fungi kill:",
            type: "multiple_choice",
            options: [
                { text: "Insects through infection", icon: "🍄", isCorrect: true },
                { text: "Weeds", icon: "🌿", isCorrect: false },
                { text: "Plant diseases", icon: "🦠", isCorrect: false },
                { text: "Rodents", icon: "🐀", isCorrect: false }
            ],
            explanation: "Fungi like Beauveria bassiana infect and kill insect pests."
        },
        {
            question: "Bacillus thuringiensis (Bt) is:",
            type: "multiple_choice",
            options: [
                { text: "Bacteria that kills caterpillars", icon: "🦠", isCorrect: true },
                { text: "Chemical insecticide", icon: "🧪", isCorrect: false },
                { text: "Fertilizer", icon: "🌱", isCorrect: false },
                { text: "Weed", icon: "🌿", isCorrect: false }
            ],
            explanation: "Bt produces toxins lethal to caterpillars but safe for other organisms."
        },
        {
            question: "Trichogramma is:",
            type: "multiple_choice",
            options: [
                { text: "Parasitic wasp killing pest eggs", icon: "🐝", isCorrect: true },
                { text: "Type of pesticide", icon: "🧪", isCorrect: false },
                { text: "Weed", icon: "🌿", isCorrect: false },
                { text: "Fungus", icon: "🍄", isCorrect: false }
            ],
            explanation: "Trichogramma are tiny parasitoids that lay eggs inside pest eggs."
        },
        {
            question: "Mechanical protection includes:",
            type: "multiple_choice",
            options: [
                { text: "Nets, sticky traps, hand picking", icon: "🔧", isCorrect: true },
                { text: "Spraying", icon: "💦", isCorrect: false },
                { text: "Fertilizing", icon: "🧪", isCorrect: false },
                { text: "Genetic modification", icon: "🧬", isCorrect: false }
            ],
            explanation: "Mechanical methods physically prevent pest access or remove them."
        },
        {
            question: "Cultural control is:",
            type: "multiple_choice",
            options: [
                { text: "Adjusting cultivation practices", icon: "🌾", isCorrect: true },
                { text: "Using robots", icon: "🤖", isCorrect: false },
                { text: "Chemical spraying", icon: "🧪", isCorrect: false },
                { text: "Do nothing", icon: "😴", isCorrect: false }
            ],
            explanation: "Cultural practices include crop rotation, sowing date, plant density, etc."
        },
        {
            question: "Why is IPM important?",
            type: "multiple_choice",
            options: [
                { text: "Reduces chemical dependence and resistance", icon: "✅", isCorrect: true },
                { text: "It's cheapest", icon: "💰", isCorrect: false },
                { text: "It's easiest", icon: "😊", isCorrect: false },
                { text: "It's not important", icon: "❌", isCorrect: false }
            ],
            explanation: "IPM slows resistance development, protects environment, and is more sustainable."
        },
        {
            question: "IPM in EU is:",
            type: "multiple_choice",
            options: [
                { text: "Mandatory by law", icon: "⚖️", isCorrect: true },
                { text: "Voluntary", icon: "🤷", isCorrect: false },
                { text: "Prohibited", icon: "⛔", isCorrect: false },
                { text: "Doesn't exist", icon: "❌", isCorrect: false }
            ],
            explanation: "Since 2014, IPM is mandatory for all professional pesticide users in EU."
        }
    ],

    // Level 6 - Safe Pesticide Use
    module2_level6: [
        {
            question: "What is pre-harvest interval?",
            type: "multiple_choice",
            options: [
                { text: "Time from application to harvest", icon: "⏰", isCorrect: true },
                { text: "Pesticide storage time", icon: "📦", isCorrect: false },
                { text: "Duration of effectiveness", icon: "⚡", isCorrect: false },
                { text: "Purchase time", icon: "🛒", isCorrect: false }
            ],
            explanation: "Pre-harvest interval ensures pesticide residues decompose before consumption."
        },
        {
            question: "PPE stands for:",
            type: "multiple_choice",
            options: [
                { text: "Personal Protective Equipment", icon: "🧤", isCorrect: true },
                { text: "Official Protection Program", icon: "📋", isCorrect: false },
                { text: "Optimal Protection Procedure", icon: "✅", isCorrect: false },
                { text: "Pruning Protection Product", icon: "✂️", isCorrect: false }
            ],
            explanation: "PPE includes gloves, protective clothing, respirator, goggles for pesticide work."
        },
        {
            question: "When spraying, you must protect:",
            type: "multiple_choice",
            options: [
                { text: "Skin, eyes, respiratory system", icon: "🛡️", isCorrect: true },
                { text: "Only hands", icon: "🤲", isCorrect: false },
                { text: "Only eyes", icon: "👀", isCorrect: false },
                { text: "Nothing", icon: "❌", isCorrect: false }
            ],
            explanation: "Pesticides can enter the body through skin, inhalation, and ingestion."
        },
        {
            question: "Empty pesticide containers:",
            type: "multiple_choice",
            options: [
                { text: "Must be properly disposed", icon: "♻️", isCorrect: true },
                { text: "Go in regular trash", icon: "🗑️", isCorrect: false },
                { text: "Are burned", icon: "🔥", isCorrect: false },
                { text: "Are buried", icon: "⬇️", isCorrect: false }
            ],
            explanation: "Containers are hazardous waste and must be disposed of by specialists."
        },
        {
            question: "Pesticides are stored in:",
            type: "multiple_choice",
            options: [
                { text: "Locked, ventilated storage", icon: "🔒", isCorrect: true },
                { text: "Kitchen", icon: "🍳", isCorrect: false },
                { text: "Greenhouse", icon: "🏡", isCorrect: false },
                { text: "Outside in sun", icon: "☀️", isCorrect: false }
            ],
            explanation: "Storage must be secure, dry, ventilated, and marked with warning symbols."
        },
        {
            question: "What does skull symbol on pesticide mean?",
            type: "multiple_choice",
            options: [
                { text: "Toxic product", icon: "☠️", isCorrect: true },
                { text: "Pirate product", icon: "🏴‍☠️", isCorrect: false },
                { text: "Natural product", icon: "🌿", isCorrect: false },
                { text: "Safe product", icon: "✅", isCorrect: false }
            ],
            explanation: "Skull and crossbones indicates acute toxicity of the product."
        },
        {
            question: "When not to spray?",
            type: "multiple_choice",
            options: [
                { text: "In wind, rain, midday heat", icon: "🌪️", isCorrect: true },
                { text: "In morning", icon: "🌅", isCorrect: false },
                { text: "In evening", icon: "🌆", isCorrect: false },
                { text: "In calm weather", icon: "🍃", isCorrect: false }
            ],
            explanation: "Wind causes drift, rain washes off product, heat can damage plants."
        },
        {
            question: "Maximum Residue Limit (MRL) is:",
            type: "multiple_choice",
            options: [
                { text: "Maximum allowed pesticide in food", icon: "📊", isCorrect: true },
                { text: "Minimum pesticide dose", icon: "📉", isCorrect: false },
                { text: "Maximum price", icon: "💰", isCorrect: false },
                { text: "Duration of effectiveness", icon: "⏰", isCorrect: false }
            ],
            explanation: "MRL determines how much pesticide may be in food - protects consumer health."
        },
        {
            question: "Pest resistance means:",
            type: "multiple_choice",
            options: [
                { text: "Tolerance to pesticide", icon: "💪", isCorrect: true },
                { text: "Greater sensitivity", icon: "😢", isCorrect: false },
                { text: "Faster death", icon: "☠️", isCorrect: false },
                { text: "Better health", icon: "❤️", isCorrect: false }
            ],
            explanation: "Repeated use of same pesticides leads to development of resistant populations."
        },
        {
            question: "How to prevent resistance?",
            type: "multiple_choice",
            options: [
                { text: "Rotate products with different modes of action", icon: "🔄", isCorrect: true },
                { text: "Use more of same product", icon: "📈", isCorrect: false },
                { text: "Never spray", icon: "⛔", isCorrect: false },
                { text: "Rotate product colors", icon: "🎨", isCorrect: false }
            ],
            explanation: "Rotating active ingredients with different modes of action slows resistance."
        }
    ],

    // Level 7 - Stored Product Pests
    module2_level7: [
        {
            question: "Sawtoothed grain beetle attacks:",
            type: "multiple_choice",
            options: [
                { text: "Stored grain", icon: "🌾", isCorrect: true },
                { text: "Growing grain", icon: "🌱", isCorrect: false },
                { text: "Fruit on tree", icon: "🍎", isCorrect: false },
                { text: "Vegetables in field", icon: "🥬", isCorrect: false }
            ],
            explanation: "Sawtoothed grain beetle is one of the most important stored grain pests."
        },
        {
            question: "Mediterranean flour moth damages:",
            type: "multiple_choice",
            options: [
                { text: "Flour and grain", icon: "🌾", isCorrect: true },
                { text: "Fruit", icon: "🍎", isCorrect: false },
                { text: "Vegetables", icon: "🥬", isCorrect: false },
                { text: "Dairy products", icon: "🥛", isCorrect: false }
            ],
            explanation: "Flour moth larvae contaminate flour with webbing."
        },
        {
            question: "Rats and mice in storage cause:",
            type: "multiple_choice",
            options: [
                { text: "Contamination and losses", icon: "🐀", isCorrect: true },
                { text: "Only noise", icon: "🔊", isCorrect: false },
                { text: "Quality improvement", icon: "📈", isCorrect: false },
                { text: "Nothing harmful", icon: "✅", isCorrect: false }
            ],
            explanation: "Rodents consume stores and contaminate them with droppings and urine."
        },
        {
            question: "Prevention of storage pests includes:",
            type: "multiple_choice",
            options: [
                { text: "Cleanliness, cooling, humidity control", icon: "✅", isCorrect: true },
                { text: "Open windows", icon: "🪟", isCorrect: false },
                { text: "High temperature", icon: "🌡️", isCorrect: false },
                { text: "Humid environment", icon: "💧", isCorrect: false }
            ],
            explanation: "Clean, dry, and cool storage minimizes pest infestation risk."
        },
        {
            question: "Fumigation is:",
            type: "multiple_choice",
            options: [
                { text: "Gas treatment", icon: "💨", isCorrect: true },
                { text: "Water spraying", icon: "💧", isCorrect: false },
                { text: "Mechanical cleaning", icon: "🔧", isCorrect: false },
                { text: "Heating", icon: "🔥", isCorrect: false }
            ],
            explanation: "Fumigation uses gases (e.g., phosphine) to kill pests in enclosed spaces."
        },
        {
            question: "Ideal moisture for grain storage is:",
            type: "multiple_choice",
            options: [
                { text: "Below 14%", icon: "📊", isCorrect: true },
                { text: "Above 20%", icon: "💧", isCorrect: false },
                { text: "Above 30%", icon: "💦", isCorrect: false },
                { text: "Doesn't matter", icon: "🤷", isCorrect: false }
            ],
            explanation: "Low moisture prevents pest and mold development in stored grain."
        },
        {
            question: "Flour mite is:",
            type: "multiple_choice",
            options: [
                { text: "Microscopic flour pest", icon: "🔬", isCorrect: true },
                { text: "Large beetle", icon: "🪲", isCorrect: false },
                { text: "Moth", icon: "🦋", isCorrect: false },
                { text: "Fungus", icon: "🍄", isCorrect: false }
            ],
            explanation: "Mites are tiny arthropods that contaminate flour and grain."
        },
        {
            question: "Damaged grain in storage can:",
            type: "multiple_choice",
            options: [
                { text: "Attract more pests", icon: "🐛", isCorrect: true },
                { text: "Repel pests", icon: "🛡️", isCorrect: false },
                { text: "Self-repair", icon: "🔧", isCorrect: false },
                { text: "Be better quality", icon: "⭐", isCorrect: false }
            ],
            explanation: "Damaged grains are entry points for secondary pests and molds."
        },
        {
            question: "Potato tuber moth is:",
            type: "multiple_choice",
            options: [
                { text: "Nothing good - it's a potato pest", icon: "🥔", isCorrect: true },
                { text: "For storage lighting", icon: "💡", isCorrect: false },
                { text: "For killing mice", icon: "🐀", isCorrect: false },
                { text: "For quality improvement", icon: "📈", isCorrect: false }
            ],
            explanation: "Potato tuber moth is a dangerous pest of stored potatoes."
        },
        {
            question: "HACCP in storage means:",
            type: "multiple_choice",
            options: [
                { text: "Critical control point system", icon: "✅", isCorrect: true },
                { text: "Type of pesticide", icon: "🧪", isCorrect: false },
                { text: "Type of storage", icon: "🏭", isCorrect: false },
                { text: "Grain brand", icon: "🌾", isCorrect: false }
            ],
            explanation: "HACCP is a preventive food safety control system."
        }
    ],

    // Level 8 - Orchard Pests
    module2_level8: [
        {
            question: "Codling moth causes:",
            type: "multiple_choice",
            options: [
                { text: "Wormy apples", icon: "🍎", isCorrect: true },
                { text: "Leaf yellowing", icon: "🍂", isCorrect: false },
                { text: "Branch blackening", icon: "⬛", isCorrect: false },
                { text: "Fruit enlargement", icon: "📈", isCorrect: false }
            ],
            explanation: "Codling moth larvae bore into apples causing typical worminess."
        },
        {
            question: "Green apple aphid:",
            type: "multiple_choice",
            options: [
                { text: "Curls leaves and shoots", icon: "🌿", isCorrect: true },
                { text: "Enlarges fruits", icon: "🍎", isCorrect: false },
                { text: "Improves taste", icon: "😋", isCorrect: false },
                { text: "Causes no damage", icon: "✅", isCorrect: false }
            ],
            explanation: "Aphids feed on shoots and cause leaf deformations and growth disorders."
        },
        {
            question: "San Jose scale is:",
            type: "multiple_choice",
            options: [
                { text: "Quarantine apple pest", icon: "⚠️", isCorrect: true },
                { text: "Beneficial insect", icon: "🐝", isCorrect: false },
                { text: "Type of fertilizer", icon: "🧪", isCorrect: false },
                { text: "Disease", icon: "🦠", isCorrect: false }
            ],
            explanation: "San Jose scale is a serious quarantine pest from North America."
        },
        {
            question: "Apple sawfly damages by:",
            type: "multiple_choice",
            options: [
                { text: "Larvae boring in young fruits", icon: "🍎", isCorrect: true },
                { text: "Chewing leaves", icon: "🍃", isCorrect: false },
                { text: "Damaging roots", icon: "🌱", isCorrect: false },
                { text: "Destroying flowers", icon: "🌸", isCorrect: false }
            ],
            explanation: "Sawfly larvae bore into young fruitlets which then drop."
        },
        {
            question: "European red mite causes:",
            type: "multiple_choice",
            options: [
                { text: "Bronzing and leaf drop", icon: "🍂", isCorrect: true },
                { text: "Fruit enlargement", icon: "📈", isCorrect: false },
                { text: "Better color", icon: "🎨", isCorrect: false },
                { text: "Faster growth", icon: "⚡", isCorrect: false }
            ],
            explanation: "Mites feeding damages leaves which bronze and drop prematurely."
        },
        {
            question: "Monilia is:",
            type: "multiple_choice",
            options: [
                { text: "Fungal disease of fruit", icon: "🍄", isCorrect: true },
                { text: "Insect pest", icon: "🐛", isCorrect: false },
                { text: "Viral disease", icon: "🦠", isCorrect: false },
                { text: "Fertilizer", icon: "🧪", isCorrect: false }
            ],
            explanation: "Monilia causes brown rot of fruit with typical whitish cushions."
        },
        {
            question: "Apple scab appears as:",
            type: "multiple_choice",
            options: [
                { text: "Dark spots on leaves and fruit", icon: "🍎", isCorrect: true },
                { text: "White coating", icon: "⚪", isCorrect: false },
                { text: "Worminess", icon: "🐛", isCorrect: false },
                { text: "Fruit enlargement", icon: "📈", isCorrect: false }
            ],
            explanation: "Scab forms olive-brown to black spots, fruits crack."
        },
        {
            question: "Winter orchard protection includes:",
            type: "multiple_choice",
            options: [
                { text: "Oil spray against overwintering pests", icon: "💧", isCorrect: true },
                { text: "Nothing is done", icon: "😴", isCorrect: false },
                { text: "Only fertilizing", icon: "🧪", isCorrect: false },
                { text: "Harvesting", icon: "🍎", isCorrect: false }
            ],
            explanation: "Winter oil sprays kill overwintering eggs of aphids and mites."
        },
        {
            question: "Pear is mainly attacked by:",
            type: "multiple_choice",
            options: [
                { text: "Pear psylla", icon: "🐛", isCorrect: true },
                { text: "Colorado beetle", icon: "🪲", isCorrect: false },
                { text: "Slug", icon: "🐌", isCorrect: false },
                { text: "Mouse", icon: "🐀", isCorrect: false }
            ],
            explanation: "Pear psylla is the main pear pest, it transmits phytoplasma disease."
        },
        {
            question: "Plums mainly suffer from:",
            type: "multiple_choice",
            options: [
                { text: "Plum pox (virus)", icon: "🦠", isCorrect: true },
                { text: "Only insects", icon: "🐛", isCorrect: false },
                { text: "Only fungi", icon: "🍄", isCorrect: false },
                { text: "Nothing", icon: "✅", isCorrect: false }
            ],
            explanation: "Plum pox is a serious viral disease of plums transmitted by aphids."
        }
    ],

    // Level 9 - Vegetable Pests
    module2_level9: [
        {
            question: "Flea beetles damage:",
            type: "multiple_choice",
            options: [
                { text: "Brassicas (cabbage, rapeseed)", icon: "🥬", isCorrect: true },
                { text: "Only fruit", icon: "🍎", isCorrect: false },
                { text: "Only cereals", icon: "🌾", isCorrect: false },
                { text: "Only potatoes", icon: "🥔", isCorrect: false }
            ],
            explanation: "Flea beetles chew brassica leaves, typical are small holes in leaves."
        },
        {
            question: "Cabbage white butterfly is pest of:",
            type: "multiple_choice",
            options: [
                { text: "Cabbage and related vegetables", icon: "🥬", isCorrect: true },
                { text: "Tomatoes", icon: "🍅", isCorrect: false },
                { text: "Carrots", icon: "🥕", isCorrect: false },
                { text: "Onions", icon: "🧅", isCorrect: false }
            ],
            explanation: "Cabbage white caterpillars eat leaves of cabbage, cauliflower, and other brassicas."
        },
        {
            question: "Cabbage aphid occurs on:",
            type: "multiple_choice",
            options: [
                { text: "Underside of cabbage leaves", icon: "🥬", isCorrect: true },
                { text: "Only flowers", icon: "🌸", isCorrect: false },
                { text: "Only roots", icon: "🌱", isCorrect: false },
                { text: "Only stems", icon: "🌿", isCorrect: false }
            ],
            explanation: "Cabbage aphid forms colonies on leaf undersides and deforms plants."
        },
        {
            question: "Potato cyst nematode causes:",
            type: "multiple_choice",
            options: [
                { text: "Stunting and yellowing of potatoes", icon: "🥔", isCorrect: true },
                { text: "Larger tubers", icon: "📈", isCorrect: false },
                { text: "Better taste", icon: "😋", isCorrect: false },
                { text: "Faster growth", icon: "⚡", isCorrect: false }
            ],
            explanation: "Nematodes are microscopic worms attacking roots, quarantine pest."
        },
        {
            question: "Slugs cause most damage:",
            type: "multiple_choice",
            options: [
                { text: "In wet weather at night", icon: "🌙", isCorrect: true },
                { text: "In dry weather during day", icon: "☀️", isCorrect: false },
                { text: "In winter", icon: "❄️", isCorrect: false },
                { text: "Never", icon: "⛔", isCorrect: false }
            ],
            explanation: "Slugs are active in wet weather, especially at night."
        },
        {
            question: "How to fight slugs?",
            type: "multiple_choice",
            options: [
                { text: "Pellets, traps, hand picking", icon: "🪤", isCorrect: true },
                { text: "Water spraying", icon: "💧", isCorrect: false },
                { text: "More watering", icon: "💦", isCorrect: false },
                { text: "Do nothing", icon: "😴", isCorrect: false }
            ],
            explanation: "Effective are pellets (metaldehyde, iron phosphate), beer traps, hand picking."
        },
        {
            question: "Leek moth is recognized by:",
            type: "multiple_choice",
            options: [
                { text: "Mines (tunnels) in leaves", icon: "〰️", isCorrect: true },
                { text: "Large holes", icon: "⭕", isCorrect: false },
                { text: "Black spots", icon: "⚫", isCorrect: false },
                { text: "White coating", icon: "⚪", isCorrect: false }
            ],
            explanation: "Leek moth larvae eat tunnels (mines) inside leek and onion leaves."
        },
        {
            question: "Carrot fly:",
            type: "multiple_choice",
            options: [
                { text: "Its larvae damage carrot roots", icon: "🥕", isCorrect: true },
                { text: "Flies around carrots", icon: "🪰", isCorrect: false },
                { text: "Eats leaves", icon: "🍃", isCorrect: false },
                { text: "Causes no damage", icon: "✅", isCorrect: false }
            ],
            explanation: "Carrot fly larvae bore tunnels in roots of carrots and parsley."
        },
        {
            question: "Cucumber downy mildew is:",
            type: "multiple_choice",
            options: [
                { text: "Fungal disease of cucurbits", icon: "🥒", isCorrect: true },
                { text: "Insect pest", icon: "🐛", isCorrect: false },
                { text: "Viral disease", icon: "🦠", isCorrect: false },
                { text: "Bacteria", icon: "🦠", isCorrect: false }
            ],
            explanation: "Cucumber downy mildew causes yellow spots on leaves of cucumbers and other cucurbits."
        },
        {
            question: "Colorado potato beetle is controlled by:",
            type: "multiple_choice",
            options: [
                { text: "Insecticides or hand picking", icon: "🐛", isCorrect: true },
                { text: "Fungicides", icon: "🍄", isCorrect: false },
                { text: "Herbicides", icon: "🌿", isCorrect: false },
                { text: "More watering", icon: "💧", isCorrect: false }
            ],
            explanation: "On small areas hand picking helps, otherwise insecticides are used."
        }
    ],

    // Level 10 - Advanced Protection and New Trends
    module2_level10: [
        {
            question: "Precision plant protection uses:",
            type: "multiple_choice",
            options: [
                { text: "GPS, sensors, drones for targeted application", icon: "🛸", isCorrect: true },
                { text: "Only traditional sprayers", icon: "🚜", isCorrect: false },
                { text: "Only manual work", icon: "✋", isCorrect: false },
                { text: "No technology", icon: "❌", isCorrect: false }
            ],
            explanation: "Precision agriculture allows applying pesticides only where needed."
        },
        {
            question: "RNA interference (RNAi) in plant protection:",
            type: "multiple_choice",
            options: [
                { text: "Specifically silences pest genes", icon: "🧬", isCorrect: true },
                { text: "Is a type of pesticide", icon: "🧪", isCorrect: false },
                { text: "Is a type of fertilizer", icon: "🌱", isCorrect: false },
                { text: "Doesn't exist", icon: "❌", isCorrect: false }
            ],
            explanation: "RNAi technology allows development of specific biopesticides working at molecular level."
        },
        {
            question: "CRISPR in agriculture can:",
            type: "multiple_choice",
            options: [
                { text: "Create more resistant varieties", icon: "🧬", isCorrect: true },
                { text: "Only kill pests", icon: "🐛", isCorrect: false },
                { text: "Only fertilize", icon: "🧪", isCorrect: false },
                { text: "Nothing", icon: "❌", isCorrect: false }
            ],
            explanation: "CRISPR gene editing allows rapid development of disease-resistant varieties."
        },
        {
            question: "Biopesticides are:",
            type: "multiple_choice",
            options: [
                { text: "Natural origin (organisms, extracts)", icon: "🌿", isCorrect: true },
                { text: "Synthetic chemicals", icon: "🧪", isCorrect: false },
                { text: "Radioactive substances", icon: "☢️", isCorrect: false },
                { text: "Don't exist", icon: "❌", isCorrect: false }
            ],
            explanation: "Biopesticides include microorganisms, plant extracts, and other natural substances."
        },
        {
            question: "Push-pull strategy means:",
            type: "multiple_choice",
            options: [
                { text: "Repelling from crop and attracting elsewhere", icon: "↔️", isCorrect: true },
                { text: "Pushing and pulling tractors", icon: "🚜", isCorrect: false },
                { text: "Type of sprayer", icon: "💦", isCorrect: false },
                { text: "Type of fertilizing", icon: "🧪", isCorrect: false }
            ],
            explanation: "Push-pull uses repellent and attractive plants to manage pests without chemicals."
        },
        {
            question: "Mating disruption uses:",
            type: "multiple_choice",
            options: [
                { text: "Pheromones to confuse males", icon: "💨", isCorrect: true },
                { text: "Loud music", icon: "🎵", isCorrect: false },
                { text: "Colorful colors", icon: "🎨", isCorrect: false },
                { text: "Bright light", icon: "💡", isCorrect: false }
            ],
            explanation: "Saturating environment with pheromones prevents males from finding females."
        },
        {
            question: "Sterile insect technique (SIT):",
            type: "multiple_choice",
            options: [
                { text: "Releases sterile males", icon: "🐛", isCorrect: true },
                { text: "Sterilizes plants", icon: "🌱", isCorrect: false },
                { text: "Cleans sprayers", icon: "🧹", isCorrect: false },
                { text: "Sterilizes soil", icon: "🌍", isCorrect: false }
            ],
            explanation: "SIT uses release of sterilized males to reduce pest populations."
        },
        {
            question: "Foundation of IPM (Integrated Pest Management) is:",
            type: "multiple_choice",
            options: [
                { text: "Monitoring and economic thresholds", icon: "📊", isCorrect: true },
                { text: "Preventive spraying", icon: "💦", isCorrect: false },
                { text: "Ignoring pests", icon: "🙈", isCorrect: false },
                { text: "Only bio products", icon: "🌿", isCorrect: false }
            ],
            explanation: "IPM is based on pest monitoring and intervention after exceeding economic threshold."
        },
        {
            question: "Microbiome engineering in plant protection:",
            type: "multiple_choice",
            options: [
                { text: "Uses beneficial microorganisms", icon: "🦠", isCorrect: true },
                { text: "Is prohibited", icon: "⛔", isCorrect: false },
                { text: "Doesn't exist", icon: "❌", isCorrect: false },
                { text: "Only harms", icon: "☠️", isCorrect: false }
            ],
            explanation: "Manipulating plant microbiome can increase disease resistance."
        },
        {
            question: "Future of plant protection is heading toward:",
            type: "multiple_choice",
            options: [
                { text: "Biological and precision protection", icon: "🎯", isCorrect: true },
                { text: "More chemicals", icon: "🧪", isCorrect: false },
                { text: "No protection", icon: "⛔", isCorrect: false },
                { text: "Only GMO", icon: "🧬", isCorrect: false }
            ],
            explanation: "The trend is sustainable protection with minimal environmental impact."
        }
    ]
};

// Export to window
window.MODULE2_QUESTIONS = MODULE2_QUESTIONS;
