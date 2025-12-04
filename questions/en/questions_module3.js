// Module 3: Harvest & Sales - 100 questions (10 levels x 10 questions)

const MODULE3_QUESTIONS = {
    "module3_level1": [
        {
            "question": "When is grain ready for harvest?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "When moisture is around 14%",
                    "icon": "🌾",
                    "isCorrect": true
                },
                {
                    "text": "In winter",
                    "icon": "❄️",
                    "isCorrect": false
                },
                {
                    "text": "When it's green",
                    "icon": "🟢",
                    "isCorrect": false
                },
                {
                    "text": "Right after flowering",
                    "icon": "🌸",
                    "isCorrect": false
                }
            ],
            "explanation": "Optimal moisture for cereal harvest is 14-15% for direct storage."
        },
        {
            "question": "What is a combine harvester?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Machine for harvesting cereals",
                    "icon": "🚜",
                    "isCorrect": true
                },
                {
                    "text": "Plowing machine",
                    "icon": "🌍",
                    "isCorrect": false
                },
                {
                    "text": "Seeding machine",
                    "icon": "🌰",
                    "isCorrect": false
                },
                {
                    "text": "Spraying machine",
                    "icon": "💦",
                    "isCorrect": false
                }
            ],
            "explanation": "A combine harvester cuts, threshes, and cleans grain in one operation."
        },
        {
            "question": "What is threshing?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Sowing seeds",
                    "icon": "🌰",
                    "isCorrect": false
                },
                {
                    "text": "Watering",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Separating grain from ears",
                    "icon": "🌾",
                    "isCorrect": true
                },
                {
                    "text": "Plowing fields",
                    "icon": "🚜",
                    "isCorrect": false
                }
            ],
            "explanation": "Threshing is the process of separating grain from ears and straw."
        },
        {
            "question": "Why is timely harvest important?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "For grain color",
                    "icon": "🎨",
                    "isCorrect": false
                },
                {
                    "text": "Timing doesn't matter",
                    "icon": "🤷",
                    "isCorrect": false
                },
                {
                    "text": "Because the law requires it",
                    "icon": "⚖️",
                    "isCorrect": false
                },
                {
                    "text": "To prevent losses and quality degradation",
                    "icon": "⏰",
                    "isCorrect": true
                }
            ],
            "explanation": "Delayed harvest leads to grain shedding, lodging, and quality loss."
        },
        {
            "question": "What is straw?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Plant leaves",
                    "icon": "🍃",
                    "isCorrect": false
                },
                {
                    "text": "Dry cereal stalks after harvest",
                    "icon": "🌾",
                    "isCorrect": true
                },
                {
                    "text": "Plant roots",
                    "icon": "🌱",
                    "isCorrect": false
                },
                {
                    "text": "Cereal grain",
                    "icon": "🌰",
                    "isCorrect": false
                }
            ],
            "explanation": "Straw is a harvest residue used as bedding, feed, or incorporated into soil."
        },
        {
            "question": "What are crop residues?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Weeds",
                    "icon": "🌿",
                    "isCorrect": false
                },
                {
                    "text": "Fertilizer",
                    "icon": "🧪",
                    "isCorrect": false
                },
                {
                    "text": "Straw, stubble, chaff",
                    "icon": "🌾",
                    "isCorrect": true
                },
                {
                    "text": "Only grain",
                    "icon": "🌰",
                    "isCorrect": false
                }
            ],
            "explanation": "Crop residues are everything left in the field after harvesting the main product."
        },
        {
            "question": "How is grain moisture measured?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "With a thermometer",
                    "icon": "🌡️",
                    "isCorrect": false
                },
                {
                    "text": "With a ruler",
                    "icon": "📏",
                    "isCorrect": false
                },
                {
                    "text": "With a scale",
                    "icon": "⚖️",
                    "isCorrect": false
                },
                {
                    "text": "With a moisture meter",
                    "icon": "📊",
                    "isCorrect": true
                }
            ],
            "explanation": "A moisture meter measures water content in grain, crucial for storage."
        },
        {
            "question": "What is harvest maturity?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Maturity for sowing",
                    "icon": "🌰",
                    "isCorrect": false
                },
                {
                    "text": "Stage suitable for harvest",
                    "icon": "✅",
                    "isCorrect": true
                },
                {
                    "text": "Maturity for plowing",
                    "icon": "🚜",
                    "isCorrect": false
                },
                {
                    "text": "Maturity for fertilizing",
                    "icon": "🧪",
                    "isCorrect": false
                }
            ],
            "explanation": "Harvest maturity occurs when the crop is ready for combine harvesting."
        },
        {
            "question": "Stubble is:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Stalk remnants in the field after harvest",
                    "icon": "🌾",
                    "isCorrect": true
                },
                {
                    "text": "Type of weed",
                    "icon": "🌿",
                    "isCorrect": false
                },
                {
                    "text": "Stored straw",
                    "icon": "📦",
                    "isCorrect": false
                },
                {
                    "text": "Type of fertilizer",
                    "icon": "🧪",
                    "isCorrect": false
                }
            ],
            "explanation": "Stubble is the lower part of stalks remaining in the ground after harvest."
        },
        {
            "question": "Why is straw pressed into bales?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "For fun",
                    "icon": "🎉",
                    "isCorrect": false
                },
                {
                    "text": "For easier handling and storage",
                    "icon": "📦",
                    "isCorrect": true
                },
                {
                    "text": "For better taste",
                    "icon": "😋",
                    "isCorrect": false
                },
                {
                    "text": "Because it's mandatory",
                    "icon": "⚖️",
                    "isCorrect": false
                }
            ],
            "explanation": "Baling reduces straw volume and facilitates transport and storage."
        }
    ],
    "module3_level2": [
        {
            "question": "Potatoes are harvested:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Always by hand",
                    "icon": "✋",
                    "isCorrect": false
                },
                {
                    "text": "With a grain combine",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "With a sprayer",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "With a digger or potato harvester",
                    "icon": "🥔",
                    "isCorrect": true
                }
            ],
            "explanation": "Potato harvesters dig, sort, and load tubers in one operation."
        },
        {
            "question": "Sugar beets are harvested:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "In spring",
                    "icon": "🌸",
                    "isCorrect": false
                },
                {
                    "text": "In summer by hand",
                    "icon": "☀️",
                    "isCorrect": false
                },
                {
                    "text": "In winter under snow",
                    "icon": "❄️",
                    "isCorrect": false
                },
                {
                    "text": "In autumn with a special harvester",
                    "icon": "🍬",
                    "isCorrect": true
                }
            ],
            "explanation": "Sugar beets are harvested in autumn, then immediately processed at sugar factories."
        },
        {
            "question": "Grain corn is harvested at moisture:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Below 10%",
                    "icon": "📉",
                    "isCorrect": false
                },
                {
                    "text": "Moisture doesn't matter",
                    "icon": "🤷",
                    "isCorrect": false
                },
                {
                    "text": "Around 25-30%, then dried",
                    "icon": "🌽",
                    "isCorrect": true
                },
                {
                    "text": "Above 50%",
                    "icon": "💧",
                    "isCorrect": false
                }
            ],
            "explanation": "Corn is harvested at higher moisture and then dried."
        },
        {
            "question": "Rapeseed is harvested:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Right after sowing",
                    "icon": "🌱",
                    "isCorrect": false
                },
                {
                    "text": "When flowering",
                    "icon": "🌸",
                    "isCorrect": false
                },
                {
                    "text": "In winter",
                    "icon": "❄️",
                    "isCorrect": false
                },
                {
                    "text": "When pods brown and seeds darken",
                    "icon": "🌼",
                    "isCorrect": true
                }
            ],
            "explanation": "Rapeseed is harvested by direct combining or after desiccation."
        },
        {
            "question": "What is desiccation?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Watering",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Fertilizing",
                    "icon": "🌱",
                    "isCorrect": false
                },
                {
                    "text": "Sowing",
                    "icon": "🌰",
                    "isCorrect": false
                },
                {
                    "text": "Chemical acceleration of ripening",
                    "icon": "🧪",
                    "isCorrect": true
                }
            ],
            "explanation": "Desiccants accelerate crop drying for easier and more uniform harvest."
        },
        {
            "question": "Silage corn is harvested:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "With a grain combine",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Only by hand",
                    "icon": "✋",
                    "isCorrect": false
                },
                {
                    "text": "With a potato digger",
                    "icon": "🚜",
                    "isCorrect": false
                },
                {
                    "text": "With a forage harvester for whole plants",
                    "icon": "🌽",
                    "isCorrect": true
                }
            ],
            "explanation": "Forage harvesters chop whole plants into chaff for ensiling."
        },
        {
            "question": "Hay is harvested:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "By spraying",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "By digging",
                    "icon": "🚜",
                    "isCorrect": false
                },
                {
                    "text": "By mowing, drying, and baling",
                    "icon": "🌿",
                    "isCorrect": true
                },
                {
                    "text": "With a combine",
                    "icon": "🌾",
                    "isCorrect": false
                }
            ],
            "explanation": "Grass is mowed, dried in the field, then baled or stored."
        },
        {
            "question": "When to harvest fruit?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Always unripe",
                    "icon": "🟢",
                    "isCorrect": false
                },
                {
                    "text": "At optimal maturity for intended use",
                    "icon": "🍎",
                    "isCorrect": true
                },
                {
                    "text": "Anytime",
                    "icon": "🤷",
                    "isCorrect": false
                },
                {
                    "text": "Always overripe",
                    "icon": "🍌",
                    "isCorrect": false
                }
            ],
            "explanation": "For storage harvest earlier, for direct consumption at full ripeness."
        },
        {
            "question": "Grapes are harvested:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "With a forage harvester",
                    "icon": "✂️",
                    "isCorrect": false
                },
                {
                    "text": "With a grain combine",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "With a potato digger",
                    "icon": "🚜",
                    "isCorrect": false
                },
                {
                    "text": "By hand or with a grape harvester",
                    "icon": "🍇",
                    "isCorrect": true
                }
            ],
            "explanation": "Quality wine requires hand picking, harvesters are used for industrial processing."
        },
        {
            "question": "Garlic is harvested:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "When leaves yellow and dry",
                    "icon": "🧄",
                    "isCorrect": true
                },
                {
                    "text": "After first frost",
                    "icon": "🥶",
                    "isCorrect": false
                },
                {
                    "text": "When leaves are green",
                    "icon": "🟢",
                    "isCorrect": false
                },
                {
                    "text": "In winter",
                    "icon": "❄️",
                    "isCorrect": false
                }
            ],
            "explanation": "Garlic is harvested when 2/3 of leaves turn yellow, then cured."
        }
    ],
    "module3_level3": [
        {
            "question": "What affects grain quality?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only color",
                    "icon": "🎨",
                    "isCorrect": false
                },
                {
                    "text": "Only smell",
                    "icon": "👃",
                    "isCorrect": false
                },
                {
                    "text": "Moisture, cleanliness, damage",
                    "icon": "🌾",
                    "isCorrect": true
                },
                {
                    "text": "Only weight",
                    "icon": "⚖️",
                    "isCorrect": false
                }
            ],
            "explanation": "Grain quality is determined by moisture, impurities, damaged kernels, pest infestation."
        },
        {
            "question": "Test weight indicates:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Grain color",
                    "icon": "🎨",
                    "isCorrect": false
                },
                {
                    "text": "Grain weight in a given volume (kg/hl)",
                    "icon": "⚖️",
                    "isCorrect": true
                },
                {
                    "text": "Number of grains",
                    "icon": "🔢",
                    "isCorrect": false
                },
                {
                    "text": "Grain moisture",
                    "icon": "💧",
                    "isCorrect": false
                }
            ],
            "explanation": "Test (hectoliter) weight is a quality indicator - higher = better quality grain."
        },
        {
            "question": "Baking quality of wheat depends on:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only moisture",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Only grain size",
                    "icon": "📏",
                    "isCorrect": false
                },
                {
                    "text": "Only color",
                    "icon": "🎨",
                    "isCorrect": false
                },
                {
                    "text": "Gluten content and quality",
                    "icon": "🍞",
                    "isCorrect": true
                }
            ],
            "explanation": "For baking, protein content and gluten properties are key."
        },
        {
            "question": "What are impurities in grain?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Fertilizers",
                    "icon": "🧪",
                    "isCorrect": false
                },
                {
                    "text": "Vitamins",
                    "icon": "💊",
                    "isCorrect": false
                },
                {
                    "text": "Water",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Dirt, chaff, weed seeds",
                    "icon": "🗑️",
                    "isCorrect": true
                }
            ],
            "explanation": "Impurities are anything that isn't grain of that crop - they reduce quality and price."
        },
        {
            "question": "Falling number in wheat measures:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Grain weight",
                    "icon": "⚖️",
                    "isCorrect": false
                },
                {
                    "text": "Enzyme activity (sprout damage)",
                    "icon": "🔬",
                    "isCorrect": true
                },
                {
                    "text": "Grain size",
                    "icon": "📏",
                    "isCorrect": false
                },
                {
                    "text": "Grain color",
                    "icon": "🎨",
                    "isCorrect": false
                }
            ],
            "explanation": "Low falling number indicates sprouted grain with high enzyme activity, unsuitable for baking."
        },
        {
            "question": "Malting barley must have:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "High protein",
                    "icon": "📈",
                    "isCorrect": false
                },
                {
                    "text": "Low protein, high germination",
                    "icon": "🍺",
                    "isCorrect": true
                },
                {
                    "text": "Low germination",
                    "icon": "📉",
                    "isCorrect": false
                },
                {
                    "text": "High moisture",
                    "icon": "💧",
                    "isCorrect": false
                }
            ],
            "explanation": "For malt production, high germination and low protein content are important."
        },
        {
            "question": "Sugar content in beets is measured in:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Liters",
                    "icon": "🥛",
                    "isCorrect": false
                },
                {
                    "text": "Kilograms",
                    "icon": "⚖️",
                    "isCorrect": false
                },
                {
                    "text": "Percentage of polarization",
                    "icon": "📊",
                    "isCorrect": true
                },
                {
                    "text": "Meters",
                    "icon": "📏",
                    "isCorrect": false
                }
            ],
            "explanation": "Sugar content (polarization) indicates sucrose content in beets, typically 15-20%."
        },
        {
            "question": "What is potato starch content?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Tuber size",
                    "icon": "📏",
                    "isCorrect": false
                },
                {
                    "text": "Skin color",
                    "icon": "🎨",
                    "isCorrect": false
                },
                {
                    "text": "Starch amount in tubers",
                    "icon": "🥔",
                    "isCorrect": true
                },
                {
                    "text": "Number of eyes",
                    "icon": "👀",
                    "isCorrect": false
                }
            ],
            "explanation": "Starch content determines potato use - high for starch production, lower for consumption."
        },
        {
            "question": "Rapeseed oil content should be:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Doesn't matter",
                    "icon": "🤷",
                    "isCorrect": false
                },
                {
                    "text": "As low as possible",
                    "icon": "📉",
                    "isCorrect": false
                },
                {
                    "text": "Exactly 10%",
                    "icon": "🔟",
                    "isCorrect": false
                },
                {
                    "text": "As high as possible (above 40%)",
                    "icon": "🛢️",
                    "isCorrect": true
                }
            ],
            "explanation": "Higher oil content means better yield and better price for seed."
        },
        {
            "question": "GMO crops in EU are:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Regulated and labeled",
                    "icon": "📋",
                    "isCorrect": true
                },
                {
                    "text": "Mandatory",
                    "icon": "✅",
                    "isCorrect": false
                },
                {
                    "text": "Completely banned",
                    "icon": "⛔",
                    "isCorrect": false
                },
                {
                    "text": "Not controlled at all",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "GMO crops are strictly regulated by EU and must be labeled."
        }
    ],
    "module3_level4": [
        {
            "question": "Ideal temperature for grain storage is:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Below 15°C",
                    "icon": "🌡️",
                    "isCorrect": true
                },
                {
                    "text": "Doesn't matter",
                    "icon": "🤷",
                    "isCorrect": false
                },
                {
                    "text": "Above 30°C",
                    "icon": "🔥",
                    "isCorrect": false
                },
                {
                    "text": "Exactly 25°C",
                    "icon": "☀️",
                    "isCorrect": false
                }
            ],
            "explanation": "Low temperature slows pest and mold activity."
        },
        {
            "question": "What is ensiling?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Drying grass",
                    "icon": "☀️",
                    "isCorrect": false
                },
                {
                    "text": "Grinding grain",
                    "icon": "⚙️",
                    "isCorrect": false
                },
                {
                    "text": "Forage preservation by lactic fermentation",
                    "icon": "🌿",
                    "isCorrect": true
                },
                {
                    "text": "Burning waste",
                    "icon": "🔥",
                    "isCorrect": false
                }
            ],
            "explanation": "Ensiling preserves fresh forage by anaerobic fermentation producing lactic acid."
        },
        {
            "question": "A silo is used for:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Storing grain or silage",
                    "icon": "🏭",
                    "isCorrect": true
                },
                {
                    "text": "Housing",
                    "icon": "🏠",
                    "isCorrect": false
                },
                {
                    "text": "Parking tractors",
                    "icon": "🚜",
                    "isCorrect": false
                },
                {
                    "text": "Animal husbandry",
                    "icon": "🐄",
                    "isCorrect": false
                }
            ],
            "explanation": "Silos are special structures for storing bulk materials or silage."
        },
        {
            "question": "Why is grain aerated?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "To reduce temperature and moisture",
                    "icon": "💨",
                    "isCorrect": true
                },
                {
                    "text": "To increase weight",
                    "icon": "⚖️",
                    "isCorrect": false
                },
                {
                    "text": "It's not aerated",
                    "icon": "⛔",
                    "isCorrect": false
                },
                {
                    "text": "For better color",
                    "icon": "🎨",
                    "isCorrect": false
                }
            ],
            "explanation": "Active aeration removes heat and moisture, preventing self-heating and mold."
        },
        {
            "question": "What is haylage?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Fresh grass",
                    "icon": "🟢",
                    "isCorrect": false
                },
                {
                    "text": "Dried hay",
                    "icon": "☀️",
                    "isCorrect": false
                },
                {
                    "text": "Wilted conserved forage",
                    "icon": "🌿",
                    "isCorrect": true
                },
                {
                    "text": "Grain",
                    "icon": "🌾",
                    "isCorrect": false
                }
            ],
            "explanation": "Haylage is forage wilted to 40-60% dry matter, conserved like silage."
        },
        {
            "question": "Potatoes are stored at temperature:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Below 0°C",
                    "icon": "🥶",
                    "isCorrect": false
                },
                {
                    "text": "4-8°C",
                    "icon": "❄️",
                    "isCorrect": true
                },
                {
                    "text": "Exactly 15°C",
                    "icon": "🌡️",
                    "isCorrect": false
                },
                {
                    "text": "Above 20°C",
                    "icon": "🔥",
                    "isCorrect": false
                }
            ],
            "explanation": "Potatoes need cold but not freezing temperatures, otherwise they sweeten or freeze."
        },
        {
            "question": "Fruit is often stored in:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "In water",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Controlled atmosphere (ULO)",
                    "icon": "🍎",
                    "isCorrect": true
                },
                {
                    "text": "Only outside",
                    "icon": "🌤️",
                    "isCorrect": false
                },
                {
                    "text": "Hot storage",
                    "icon": "🔥",
                    "isCorrect": false
                }
            ],
            "explanation": "ULO (Ultra Low Oxygen) storage slows fruit ripening."
        },
        {
            "question": "What is grain self-heating?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Temperature rise from metabolism and molds",
                    "icon": "🔥",
                    "isCorrect": true
                },
                {
                    "text": "Heating by sun",
                    "icon": "☀️",
                    "isCorrect": false
                },
                {
                    "text": "Artificial heating",
                    "icon": "🌡️",
                    "isCorrect": false
                },
                {
                    "text": "Normal phenomenon",
                    "icon": "✅",
                    "isCorrect": false
                }
            ],
            "explanation": "Self-heating is dangerous - can lead to spoilage or even fire."
        },
        {
            "question": "A grain dryer:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Sorts grain",
                    "icon": "📊",
                    "isCorrect": false
                },
                {
                    "text": "Increases moisture",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Reduces grain moisture for storage",
                    "icon": "💨",
                    "isCorrect": true
                },
                {
                    "text": "Grinds grain",
                    "icon": "⚙️",
                    "isCorrect": false
                }
            ],
            "explanation": "Drying reduces moisture to safe levels for long-term storage."
        },
        {
            "question": "During storage it's important to monitor:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Nothing",
                    "icon": "😴",
                    "isCorrect": false
                },
                {
                    "text": "Only color",
                    "icon": "🎨",
                    "isCorrect": false
                },
                {
                    "text": "Only smell",
                    "icon": "👃",
                    "isCorrect": false
                },
                {
                    "text": "Temperature, moisture, pests",
                    "icon": "📊",
                    "isCorrect": true
                }
            ],
            "explanation": "Regular monitoring is key to preventing losses and maintaining quality."
        }
    ],
    "module3_level5": [
        {
            "question": "A mill processes:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Milk into cheese",
                    "icon": "🧀",
                    "isCorrect": false
                },
                {
                    "text": "Grain into flour",
                    "icon": "🌾",
                    "isCorrect": true
                },
                {
                    "text": "Meat into sausages",
                    "icon": "🌭",
                    "isCorrect": false
                },
                {
                    "text": "Fruit into jam",
                    "icon": "🍓",
                    "isCorrect": false
                }
            ],
            "explanation": "Mills grind grain into flour of various types and grades."
        },
        {
            "question": "An oil mill produces:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Beer",
                    "icon": "🍺",
                    "isCorrect": false
                },
                {
                    "text": "Vegetable oils from oilseeds",
                    "icon": "🛢️",
                    "isCorrect": true
                },
                {
                    "text": "Sugar",
                    "icon": "🍬",
                    "isCorrect": false
                },
                {
                    "text": "Dairy products",
                    "icon": "🥛",
                    "isCorrect": false
                }
            ],
            "explanation": "Oil mills press or extract oil from rapeseed, sunflower seeds, etc."
        },
        {
            "question": "A sugar factory processes:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Grain into flour",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Sugar beets into sugar",
                    "icon": "🍬",
                    "isCorrect": true
                },
                {
                    "text": "Fruit into jam",
                    "icon": "🍓",
                    "isCorrect": false
                },
                {
                    "text": "Milk into butter",
                    "icon": "🧈",
                    "isCorrect": false
                }
            ],
            "explanation": "Sugar factories extract sucrose from sugar beets."
        },
        {
            "question": "A malthouse produces:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Malt from barley for brewing",
                    "icon": "🍺",
                    "isCorrect": true
                },
                {
                    "text": "Sweet drinks",
                    "icon": "🥤",
                    "isCorrect": false
                },
                {
                    "text": "Sweets",
                    "icon": "🍭",
                    "isCorrect": false
                },
                {
                    "text": "Sugar",
                    "icon": "🍬",
                    "isCorrect": false
                }
            ],
            "explanation": "Malthouses germinate barley under controlled conditions to produce malt for beer."
        },
        {
            "question": "What is oil refining?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Oilseed harvest",
                    "icon": "🌻",
                    "isCorrect": false
                },
                {
                    "text": "Oil pressing",
                    "icon": "⚙️",
                    "isCorrect": false
                },
                {
                    "text": "Oil packaging",
                    "icon": "📦",
                    "isCorrect": false
                },
                {
                    "text": "Purifying and processing crude oil",
                    "icon": "🧪",
                    "isCorrect": true
                }
            ],
            "explanation": "Refining removes impurities, improves color, smell, and shelf life."
        },
        {
            "question": "A distillery produces:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Juice",
                    "icon": "🧃",
                    "isCorrect": false
                },
                {
                    "text": "Beer",
                    "icon": "🍺",
                    "isCorrect": false
                },
                {
                    "text": "Alcohol (ethanol) from grain or potatoes",
                    "icon": "🥃",
                    "isCorrect": true
                },
                {
                    "text": "Wine",
                    "icon": "🍷",
                    "isCorrect": false
                }
            ],
            "explanation": "Distilleries produce ethanol by fermentation and distillation for beverages and industry."
        },
        {
            "question": "A starch factory processes:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Grain into flour",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Milk into cheese",
                    "icon": "🧀",
                    "isCorrect": false
                },
                {
                    "text": "Fruit into compote",
                    "icon": "🍑",
                    "isCorrect": false
                },
                {
                    "text": "Potatoes or corn into starch",
                    "icon": "🥔",
                    "isCorrect": true
                }
            ],
            "explanation": "Starch factories extract starch used in food and industry."
        },
        {
            "question": "A freezing plant is used for:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Heating food",
                    "icon": "🔥",
                    "isCorrect": false
                },
                {
                    "text": "Grinding food",
                    "icon": "⚙️",
                    "isCorrect": false
                },
                {
                    "text": "Food preservation by freezing",
                    "icon": "❄️",
                    "isCorrect": true
                },
                {
                    "text": "Drying food",
                    "icon": "☀️",
                    "isCorrect": false
                }
            ],
            "explanation": "Quick freezing preserves fruit and vegetable quality for long periods."
        },
        {
            "question": "A canning factory produces:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Dried foods",
                    "icon": "☀️",
                    "isCorrect": false
                },
                {
                    "text": "Frozen products",
                    "icon": "❄️",
                    "isCorrect": false
                },
                {
                    "text": "Fresh foods",
                    "icon": "🥬",
                    "isCorrect": false
                },
                {
                    "text": "Sterilized foods in containers",
                    "icon": "🥫",
                    "isCorrect": true
                }
            ],
            "explanation": "Canning factories heat-treat foods for long-term storage."
        },
        {
            "question": "Farm products can go:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only to supermarket",
                    "icon": "🛒",
                    "isCorrect": false
                },
                {
                    "text": "Only abroad",
                    "icon": "✈️",
                    "isCorrect": false
                },
                {
                    "text": "Directly to consumers or to processing",
                    "icon": "🔄",
                    "isCorrect": true
                },
                {
                    "text": "Nowhere",
                    "icon": "⛔",
                    "isCorrect": false
                }
            ],
            "explanation": "Farmers can sell directly (farmers markets) or through processors."
        }
    ],
    "module3_level6": [
        {
            "question": "What is a farmers market?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Supermarket",
                    "icon": "🛒",
                    "isCorrect": false
                },
                {
                    "text": "Stock exchange",
                    "icon": "📈",
                    "isCorrect": false
                },
                {
                    "text": "Grain warehouse",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Place for direct sales by farmers",
                    "icon": "🏪",
                    "isCorrect": true
                }
            ],
            "explanation": "Farmers markets enable direct contact between producer and consumer."
        },
        {
            "question": "What is farm gate sales?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Direct sales from farm to customers",
                    "icon": "🏡",
                    "isCorrect": true
                },
                {
                    "text": "Sales to supermarket",
                    "icon": "🛒",
                    "isCorrect": false
                },
                {
                    "text": "Export abroad",
                    "icon": "✈️",
                    "isCorrect": false
                },
                {
                    "text": "Internet sales",
                    "icon": "💻",
                    "isCorrect": false
                }
            ],
            "explanation": "Customers come directly to the farm for fresh products."
        },
        {
            "question": "What is a box scheme?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Regular delivery of seasonal vegetables",
                    "icon": "📦",
                    "isCorrect": true
                },
                {
                    "text": "Storage in boxes",
                    "icon": "🗃️",
                    "isCorrect": false
                },
                {
                    "text": "Type of packaging",
                    "icon": "📦",
                    "isCorrect": false
                },
                {
                    "text": "Selling boxes",
                    "icon": "🪵",
                    "isCorrect": false
                }
            ],
            "explanation": "Customers regularly receive boxes of seasonal farm products."
        },
        {
            "question": "Organic certification means:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "High quality",
                    "icon": "⭐",
                    "isCorrect": false
                },
                {
                    "text": "Low price",
                    "icon": "💰",
                    "isCorrect": false
                },
                {
                    "text": "Confirmation of ecological farming",
                    "icon": "🌿",
                    "isCorrect": true
                },
                {
                    "text": "Foreign origin",
                    "icon": "✈️",
                    "isCorrect": false
                }
            ],
            "explanation": "Organic certificate confirms compliance with organic farming rules."
        },
        {
            "question": "Quality label schemes indicate:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Organic foods",
                    "icon": "🌿",
                    "isCorrect": false
                },
                {
                    "text": "Imported foods",
                    "icon": "✈️",
                    "isCorrect": false
                },
                {
                    "text": "Cheapest foods",
                    "icon": "💰",
                    "isCorrect": false
                },
                {
                    "text": "High quality local products",
                    "icon": "🏆",
                    "isCorrect": true
                }
            ],
            "explanation": "Quality labels identify high-quality food products from specific regions."
        },
        {
            "question": "What is PDO/PGI?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Type of fertilizer",
                    "icon": "🌱",
                    "isCorrect": false
                },
                {
                    "text": "Type of pesticide",
                    "icon": "💊",
                    "isCorrect": false
                },
                {
                    "text": "Chemical abbreviation",
                    "icon": "🧪",
                    "isCorrect": false
                },
                {
                    "text": "Protected designation of origin/geographical indication",
                    "icon": "🏅",
                    "isCorrect": true
                }
            ],
            "explanation": "EU protects traditional regional products with these designations."
        },
        {
            "question": "Commodity exchanges trade:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only stocks",
                    "icon": "📈",
                    "isCorrect": false
                },
                {
                    "text": "Only currencies",
                    "icon": "💱",
                    "isCorrect": false
                },
                {
                    "text": "Only gold",
                    "icon": "🥇",
                    "isCorrect": false
                },
                {
                    "text": "Commodities including cereals",
                    "icon": "📊",
                    "isCorrect": true
                }
            ],
            "explanation": "Agricultural commodity exchanges set reference prices for farm products."
        },
        {
            "question": "Intervention price is:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Minimum guaranteed price from EU",
                    "icon": "💶",
                    "isCorrect": true
                },
                {
                    "text": "Average price",
                    "icon": "➗",
                    "isCorrect": false
                },
                {
                    "text": "Market price",
                    "icon": "📊",
                    "isCorrect": false
                },
                {
                    "text": "Maximum price",
                    "icon": "📈",
                    "isCorrect": false
                }
            ],
            "explanation": "EU guarantees minimum prices for some commodities as a safety net for farmers."
        },
        {
            "question": "E-shop with farm products:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Is prohibited",
                    "icon": "⛔",
                    "isCorrect": false
                },
                {
                    "text": "Extends sales reach",
                    "icon": "🌐",
                    "isCorrect": true
                },
                {
                    "text": "Reduces quality",
                    "icon": "📉",
                    "isCorrect": false
                },
                {
                    "text": "Is too complicated",
                    "icon": "😵",
                    "isCorrect": false
                }
            ],
            "explanation": "Online sales allow farmers to reach a wider customer base."
        },
        {
            "question": "What is vertical integration?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Building tall buildings",
                    "icon": "🏢",
                    "isCorrect": false
                },
                {
                    "text": "Type of cultivation",
                    "icon": "🌱",
                    "isCorrect": false
                },
                {
                    "text": "Linking production, processing, and sales",
                    "icon": "🔗",
                    "isCorrect": true
                },
                {
                    "text": "Type of fertilizing",
                    "icon": "🧪",
                    "isCorrect": false
                }
            ],
            "explanation": "Vertical integration increases added value and control over the entire chain."
        }
    ],
    "module3_level7": [
        {
            "question": "What are variable costs?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Costs changing with production volume",
                    "icon": "📊",
                    "isCorrect": true
                },
                {
                    "text": "Only wages",
                    "icon": "💰",
                    "isCorrect": false
                },
                {
                    "text": "Fixed costs",
                    "icon": "➡️",
                    "isCorrect": false
                },
                {
                    "text": "Only energy",
                    "icon": "⚡",
                    "isCorrect": false
                }
            ],
            "explanation": "Variable costs (seed, fertilizer, fuel) increase with production scale."
        },
        {
            "question": "Fixed costs include:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only seed",
                    "icon": "🌰",
                    "isCorrect": false
                },
                {
                    "text": "Depreciation, insurance, rent",
                    "icon": "🏠",
                    "isCorrect": true
                },
                {
                    "text": "Only fuel",
                    "icon": "⛽",
                    "isCorrect": false
                },
                {
                    "text": "Only fertilizer",
                    "icon": "🧪",
                    "isCorrect": false
                }
            ],
            "explanation": "Fixed costs remain the same regardless of production volume."
        },
        {
            "question": "Gross margin is:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Revenue minus variable costs",
                    "icon": "💵",
                    "isCorrect": true
                },
                {
                    "text": "Net profit",
                    "icon": "💰",
                    "isCorrect": false
                },
                {
                    "text": "Investment",
                    "icon": "📈",
                    "isCorrect": false
                },
                {
                    "text": "Total costs",
                    "icon": "📊",
                    "isCorrect": false
                }
            ],
            "explanation": "Gross margin shows crop contribution to covering fixed costs and profit."
        },
        {
            "question": "What is break-even point?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Average yield",
                    "icon": "➗",
                    "isCorrect": false
                },
                {
                    "text": "Production volume where revenue = costs",
                    "icon": "⚖️",
                    "isCorrect": true
                },
                {
                    "text": "Minimum costs",
                    "icon": "📉",
                    "isCorrect": false
                },
                {
                    "text": "Maximum profit",
                    "icon": "📈",
                    "isCorrect": false
                }
            ],
            "explanation": "At break-even, the farm neither loses nor gains - just covers costs."
        },
        {
            "question": "Direct payments are:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Per-hectare payments",
                    "icon": "💶",
                    "isCorrect": true
                },
                {
                    "text": "Fines",
                    "icon": "⚠️",
                    "isCorrect": false
                },
                {
                    "text": "Taxes",
                    "icon": "📋",
                    "isCorrect": false
                },
                {
                    "text": "Loans",
                    "icon": "🏦",
                    "isCorrect": false
                }
            ],
            "explanation": "Direct payments from EU are based on cultivated area."
        },
        {
            "question": "Greening payments are for:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Tree planting",
                    "icon": "🌳",
                    "isCorrect": false
                },
                {
                    "text": "Buying green equipment",
                    "icon": "🚜",
                    "isCorrect": false
                },
                {
                    "text": "Environmental practices (diversification, EFA)",
                    "icon": "🌿",
                    "isCorrect": true
                },
                {
                    "text": "Green building paint",
                    "icon": "🏠",
                    "isCorrect": false
                }
            ],
            "explanation": "Greening rewards farmers for crop diversification and ecological focus areas."
        },
        {
            "question": "Rural Development Programme is for:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Urban development",
                    "icon": "🌆",
                    "isCorrect": false
                },
                {
                    "text": "Industrial development",
                    "icon": "🏭",
                    "isCorrect": false
                },
                {
                    "text": "Personal development",
                    "icon": "📚",
                    "isCorrect": false
                },
                {
                    "text": "Rural development",
                    "icon": "🏡",
                    "isCorrect": true
                }
            ],
            "explanation": "RDP supports investments, young farmers, less favored areas, etc."
        },
        {
            "question": "LFA payments go to:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only organic farmers",
                    "icon": "🌿",
                    "isCorrect": false
                },
                {
                    "text": "Only large farms",
                    "icon": "🏭",
                    "isCorrect": false
                },
                {
                    "text": "All farmers",
                    "icon": "👨‍🌾",
                    "isCorrect": false
                },
                {
                    "text": "Farmers in less favored areas",
                    "icon": "🏔️",
                    "isCorrect": true
                }
            ],
            "explanation": "LFA compensates farmers for worse natural conditions (mountains, dry areas)."
        },
        {
            "question": "Farm accounting is important for:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Planning, taxes, loans",
                    "icon": "📊",
                    "isCorrect": true
                },
                {
                    "text": "Only loans",
                    "icon": "🏦",
                    "isCorrect": false
                },
                {
                    "text": "Not important",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Only taxes",
                    "icon": "📋",
                    "isCorrect": false
                }
            ],
            "explanation": "Proper accounting is the basis for decision-making and farm management."
        },
        {
            "question": "Crop insurance protects against:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only fire",
                    "icon": "🔥",
                    "isCorrect": false
                },
                {
                    "text": "Only theft",
                    "icon": "🔒",
                    "isCorrect": false
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Natural risks (drought, hail)",
                    "icon": "🛡️",
                    "isCorrect": true
                }
            ],
            "explanation": "Crop insurance minimizes economic impact of adverse weather events."
        }
    ],
    "module3_level8": [
        {
            "question": "HACCP is a system for:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Controlling critical food safety points",
                    "icon": "✅",
                    "isCorrect": true
                },
                {
                    "text": "Accounting",
                    "icon": "📊",
                    "isCorrect": false
                },
                {
                    "text": "Marketing",
                    "icon": "📣",
                    "isCorrect": false
                },
                {
                    "text": "Transportation",
                    "icon": "🚚",
                    "isCorrect": false
                }
            ],
            "explanation": "HACCP identifies and controls risks threatening food safety."
        },
        {
            "question": "Food traceability means:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Ability to trace food origin",
                    "icon": "🔍",
                    "isCorrect": true
                },
                {
                    "text": "Tracking weather",
                    "icon": "🌤️",
                    "isCorrect": false
                },
                {
                    "text": "Tracking competition",
                    "icon": "👀",
                    "isCorrect": false
                },
                {
                    "text": "Tracking price",
                    "icon": "💰",
                    "isCorrect": false
                }
            ],
            "explanation": "Traceability allows tracking product journey from farm to table."
        },
        {
            "question": "What is food contamination?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Pollution with unwanted substances",
                    "icon": "☠️",
                    "isCorrect": true
                },
                {
                    "text": "Food packaging",
                    "icon": "📦",
                    "isCorrect": false
                },
                {
                    "text": "Taste improvement",
                    "icon": "😋",
                    "isCorrect": false
                },
                {
                    "text": "Food cooling",
                    "icon": "❄️",
                    "isCorrect": false
                }
            ],
            "explanation": "Contamination can be chemical, biological, or physical."
        },
        {
            "question": "Mycotoxins are:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Fertilizers",
                    "icon": "🧪",
                    "isCorrect": false
                },
                {
                    "text": "Pesticides",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "Vitamins",
                    "icon": "💊",
                    "isCorrect": false
                },
                {
                    "text": "Toxins produced by molds",
                    "icon": "🍄",
                    "isCorrect": true
                }
            ],
            "explanation": "Mycotoxins (aflatoxins, ochratoxins) form in moldy grain and are carcinogenic."
        },
        {
            "question": "Maximum pesticide residues are controlled by:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Nobody",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Only customers",
                    "icon": "🛒",
                    "isCorrect": false
                },
                {
                    "text": "Food safety authorities",
                    "icon": "🏛️",
                    "isCorrect": true
                },
                {
                    "text": "Only farmers",
                    "icon": "👨‍🌾",
                    "isCorrect": false
                }
            ],
            "explanation": "Food safety authorities conduct pesticide residue checks in food."
        },
        {
            "question": "Good Agricultural Practice (GAP) includes:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only tradition",
                    "icon": "📜",
                    "isCorrect": false
                },
                {
                    "text": "Only ecology",
                    "icon": "🌿",
                    "isCorrect": false
                },
                {
                    "text": "Only profit maximization",
                    "icon": "💰",
                    "isCorrect": false
                },
                {
                    "text": "Procedures for safe and quality production",
                    "icon": "✅",
                    "isCorrect": true
                }
            ],
            "explanation": "GAP sets principles for sustainable and safe agricultural production."
        },
        {
            "question": "Cross compliance is:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Type of crop crossing",
                    "icon": "🌱",
                    "isCorrect": false
                },
                {
                    "text": "Type of contract",
                    "icon": "📄",
                    "isCorrect": false
                },
                {
                    "text": "Conditions for receiving subsidies",
                    "icon": "📋",
                    "isCorrect": true
                },
                {
                    "text": "Type of insurance",
                    "icon": "🛡️",
                    "isCorrect": false
                }
            ],
            "explanation": "Cross compliance requires meeting environmental and safety standards."
        },
        {
            "question": "Use-by date is mandatory on:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only medicines",
                    "icon": "💊",
                    "isCorrect": false
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Only toys",
                    "icon": "🧸",
                    "isCorrect": false
                },
                {
                    "text": "Most packaged foods",
                    "icon": "📦",
                    "isCorrect": true
                }
            ],
            "explanation": "Use-by or best-before date informs about product freshness."
        },
        {
            "question": "Cold chain is important for:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Not important",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Only storage",
                    "icon": "🏭",
                    "isCorrect": false
                },
                {
                    "text": "Maintaining quality and safety",
                    "icon": "❄️",
                    "isCorrect": true
                },
                {
                    "text": "Only transport",
                    "icon": "🚚",
                    "isCorrect": false
                }
            ],
            "explanation": "Unbroken cold chain prevents microorganism growth in food."
        },
        {
            "question": "EU food law ensures:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Only farmer protection",
                    "icon": "👨‍🌾",
                    "isCorrect": false
                },
                {
                    "text": "Consumer protection and free trade",
                    "icon": "⚖️",
                    "isCorrect": true
                },
                {
                    "text": "Only free trade",
                    "icon": "🌍",
                    "isCorrect": false
                }
            ],
            "explanation": "Unified rules protect health and enable free movement of food in EU."
        }
    ],
    "module3_level9": [
        {
            "question": "Agricultural logistics includes:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only sales",
                    "icon": "💰",
                    "isCorrect": false
                },
                {
                    "text": "Only harvest",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Transport, storage, handling",
                    "icon": "🚛",
                    "isCorrect": true
                },
                {
                    "text": "Only sowing",
                    "icon": "🌰",
                    "isCorrect": false
                }
            ],
            "explanation": "Logistics handles efficient product movement from field to consumer."
        },
        {
            "question": "A grain trailer must have:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "High watertight sides",
                    "icon": "🚛",
                    "isCorrect": true
                },
                {
                    "text": "Cooling unit",
                    "icon": "❄️",
                    "isCorrect": false
                },
                {
                    "text": "Nothing special",
                    "icon": "🤷",
                    "isCorrect": false
                },
                {
                    "text": "Open bed",
                    "icon": "📭",
                    "isCorrect": false
                }
            ],
            "explanation": "High sides prevent losses when transporting bulk materials."
        },
        {
            "question": "Fruit transport requires:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "High speed",
                    "icon": "⚡",
                    "isCorrect": false
                },
                {
                    "text": "Gentle handling and cooling",
                    "icon": "🍎",
                    "isCorrect": true
                },
                {
                    "text": "Nothing special",
                    "icon": "🤷",
                    "isCorrect": false
                },
                {
                    "text": "Hot environment",
                    "icon": "🔥",
                    "isCorrect": false
                }
            ],
            "explanation": "Fruit is prone to damage and requires controlled temperature."
        },
        {
            "question": "ADR regulations are for:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Transport of dangerous goods",
                    "icon": "⚠️",
                    "isCorrect": true
                },
                {
                    "text": "Transport of persons",
                    "icon": "👥",
                    "isCorrect": false
                },
                {
                    "text": "Transport of plants",
                    "icon": "🌱",
                    "isCorrect": false
                },
                {
                    "text": "Transport of animals",
                    "icon": "🐄",
                    "isCorrect": false
                }
            ],
            "explanation": "ADR regulates transport of pesticides, fertilizers, and other hazardous materials."
        },
        {
            "question": "GPS tracking in agriculture is used for:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Measuring temperature",
                    "icon": "🌡️",
                    "isCorrect": false
                },
                {
                    "text": "Measuring moisture",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Tracking machinery and shipments",
                    "icon": "📍",
                    "isCorrect": true
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "GPS enables tracking equipment movement and optimizing logistics."
        },
        {
            "question": "Farm handling equipment includes:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only combines",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Only manual work",
                    "icon": "✋",
                    "isCorrect": false
                },
                {
                    "text": "Only tractors",
                    "icon": "🚜",
                    "isCorrect": false
                },
                {
                    "text": "Loaders, conveyors, lifts",
                    "icon": "🏗️",
                    "isCorrect": true
                }
            ],
            "explanation": "Handling equipment facilitates loading, transferring, and storage."
        },
        {
            "question": "Live animal transport requires:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Special vehicles and permits",
                    "icon": "🐄",
                    "isCorrect": true
                },
                {
                    "text": "Regular truck",
                    "icon": "🚛",
                    "isCorrect": false
                },
                {
                    "text": "Nothing special",
                    "icon": "🤷",
                    "isCorrect": false
                },
                {
                    "text": "Personal car",
                    "icon": "🚗",
                    "isCorrect": false
                }
            ],
            "explanation": "Animal transport is regulated by welfare rules and requires certification."
        },
        {
            "question": "Rail transport of grain is:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Economic for long distances",
                    "icon": "🚂",
                    "isCorrect": true
                },
                {
                    "text": "Impossible",
                    "icon": "⛔",
                    "isCorrect": false
                },
                {
                    "text": "Always more expensive than road",
                    "icon": "💰",
                    "isCorrect": false
                },
                {
                    "text": "Only for people",
                    "icon": "👥",
                    "isCorrect": false
                }
            ],
            "explanation": "Rail is efficient for transporting large volumes over longer distances."
        },
        {
            "question": "Containerization enables:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only sea transport",
                    "icon": "🚢",
                    "isCorrect": false
                },
                {
                    "text": "Only air transport",
                    "icon": "✈️",
                    "isCorrect": false
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Easy transfer between transport modes",
                    "icon": "📦",
                    "isCorrect": true
                }
            ],
            "explanation": "Standardized containers simplify intermodal transport."
        },
        {
            "question": "Last mile in logistics is:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Delivery to end customer",
                    "icon": "🏠",
                    "isCorrect": true
                },
                {
                    "text": "Longest part of route",
                    "icon": "🛣️",
                    "isCorrect": false
                },
                {
                    "text": "Only 1 mile",
                    "icon": "📏",
                    "isCorrect": false
                },
                {
                    "text": "Journey from farm",
                    "icon": "🏡",
                    "isCorrect": false
                }
            ],
            "explanation": "Last mile is often the most expensive and complex part of delivery."
        }
    ],
    "module3_level10": [
        {
            "question": "What is precision harvesting?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Manual harvesting",
                    "icon": "✋",
                    "isCorrect": false
                },
                {
                    "text": "Night harvesting",
                    "icon": "🌙",
                    "isCorrect": false
                },
                {
                    "text": "Fast harvesting",
                    "icon": "⚡",
                    "isCorrect": false
                },
                {
                    "text": "Harvesting using sensors and data",
                    "icon": "📊",
                    "isCorrect": true
                }
            ],
            "explanation": "Precision harvesting uses sensors to optimize yield and quality."
        },
        {
            "question": "Yield mapping is used for:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Analyzing yield variability in fields",
                    "icon": "🗺️",
                    "isCorrect": true
                },
                {
                    "text": "Measuring moisture",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Only navigation",
                    "icon": "🧭",
                    "isCorrect": false
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "Yield maps identify productive and problematic zones in fields."
        },
        {
            "question": "Autonomous combines:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Can harvest without a driver",
                    "icon": "🤖",
                    "isCorrect": true
                },
                {
                    "text": "Only in laboratories",
                    "icon": "🔬",
                    "isCorrect": false
                },
                {
                    "text": "Are prohibited",
                    "icon": "⛔",
                    "isCorrect": false
                },
                {
                    "text": "Don't exist",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "Autonomous machines are reality and will become more common."
        },
        {
            "question": "Blockchain in food ensures:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Only payments",
                    "icon": "💳",
                    "isCorrect": false
                },
                {
                    "text": "Only emails",
                    "icon": "📧",
                    "isCorrect": false
                },
                {
                    "text": "Transparent traceability",
                    "icon": "🔗",
                    "isCorrect": true
                }
            ],
            "explanation": "Blockchain enables immutable record of product journey from farm to consumer."
        },
        {
            "question": "Vertical farms produce:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only grain",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Vegetables in multi-story buildings",
                    "icon": "🏢",
                    "isCorrect": true
                },
                {
                    "text": "Only livestock",
                    "icon": "🐄",
                    "isCorrect": false
                }
            ],
            "explanation": "Vertical farms enable year-round production in urban environments."
        },
        {
            "question": "Plant-based products are:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only vegetables",
                    "icon": "🥬",
                    "isCorrect": false
                },
                {
                    "text": "Plant foods replacing meat",
                    "icon": "🌱",
                    "isCorrect": true
                },
                {
                    "text": "Fertilizers",
                    "icon": "🧪",
                    "isCorrect": false
                },
                {
                    "text": "Only fruit",
                    "icon": "🍎",
                    "isCorrect": false
                }
            ],
            "explanation": "Plant-based meat alternatives are a growing food trend."
        },
        {
            "question": "Circular economy in agriculture means:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only recycling",
                    "icon": "🔁",
                    "isCorrect": false
                },
                {
                    "text": "Round fields",
                    "icon": "⭕",
                    "isCorrect": false
                },
                {
                    "text": "Crop rotation",
                    "icon": "🔄",
                    "isCorrect": false
                },
                {
                    "text": "Minimizing waste and resource use",
                    "icon": "♻️",
                    "isCorrect": true
                }
            ],
            "explanation": "Circular approach uses waste as resources and closes material cycles."
        },
        {
            "question": "Carbon farming rewards farmers for:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Buying cars",
                    "icon": "🚗",
                    "isCorrect": false
                },
                {
                    "text": "Mining coal",
                    "icon": "⛏️",
                    "isCorrect": false
                },
                {
                    "text": "Burning coal",
                    "icon": "⬛",
                    "isCorrect": false
                },
                {
                    "text": "Storing carbon in soil",
                    "icon": "🌍",
                    "isCorrect": true
                }
            ],
            "explanation": "Carbon farming is a new income source for climate-friendly practices."
        },
        {
            "question": "Short food supply chains mean:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Cheap foods",
                    "icon": "💰",
                    "isCorrect": false
                },
                {
                    "text": "Fast foods",
                    "icon": "⚡",
                    "isCorrect": false
                },
                {
                    "text": "Short foods",
                    "icon": "📏",
                    "isCorrect": false
                },
                {
                    "text": "Fewer intermediaries between farmer and consumer",
                    "icon": "🔗",
                    "isCorrect": true
                }
            ],
            "explanation": "Short chains increase farmer's share of price and product freshness."
        },
        {
            "question": "Future of agriculture is heading toward:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Sustainability, digitalization, locality",
                    "icon": "🎯",
                    "isCorrect": true
                },
                {
                    "text": "Abandoning rural areas",
                    "icon": "🏃",
                    "isCorrect": false
                },
                {
                    "text": "Only maximizing production",
                    "icon": "📈",
                    "isCorrect": false
                },
                {
                    "text": "Only traditional methods",
                    "icon": "📜",
                    "isCorrect": false
                }
            ],
            "explanation": "Modern agriculture combines technology with sustainability and local systems."
        }
    ]
};

window.MODULE3_QUESTIONS = MODULE3_QUESTIONS;
