// Module 1: Soil & Basics - 100 questions (10 levels x 10 questions)

const MODULE1_QUESTIONS = {
    "module1_level1": [
        {
            "question": "What is the main component of healthy soil?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Sand",
                    "icon": "🏖️",
                    "isCorrect": false
                },
                {
                    "text": "Stone",
                    "icon": "🪨",
                    "isCorrect": false
                },
                {
                    "text": "Plastic",
                    "icon": "🧴",
                    "isCorrect": false
                },
                {
                    "text": "Humus",
                    "icon": "🌱",
                    "isCorrect": true
                }
            ],
            "explanation": "Humus is decomposed organic matter that provides nutrients to soil and improves its structure."
        },
        {
            "question": "What is the ideal pH value for most crops?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "2-3 (very acidic)",
                    "icon": "🍋",
                    "isCorrect": false
                },
                {
                    "text": "10-12 (very alkaline)",
                    "icon": "🧪",
                    "isCorrect": false
                },
                {
                    "text": "6-7 (slightly acidic to neutral)",
                    "icon": "✅",
                    "isCorrect": true
                },
                {
                    "text": "0-1 (extremely acidic)",
                    "icon": "⚠️",
                    "isCorrect": false
                }
            ],
            "explanation": "Most crops grow best in slightly acidic to neutral soil with pH 6-7."
        },
        {
            "question": "What does NPK stand for?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Nitrogen, Phosphorus, Potassium",
                    "icon": "🧪",
                    "isCorrect": true
                },
                {
                    "text": "Nickel, Platinum, Cobalt",
                    "icon": "⚗️",
                    "isCorrect": false
                },
                {
                    "text": "New Plant Kit",
                    "icon": "📦",
                    "isCorrect": false
                },
                {
                    "text": "National Park Keeper",
                    "icon": "🏔️",
                    "isCorrect": false
                }
            ],
            "explanation": "NPK are the three essential nutrients for plants: Nitrogen (N), Phosphorus (P), and Potassium (K)."
        },
        {
            "question": "Which soil layer contains the most organic matter?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Subsoil",
                    "icon": "⬇️",
                    "isCorrect": false
                },
                {
                    "text": "Groundwater",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Bedrock",
                    "icon": "🪨",
                    "isCorrect": false
                },
                {
                    "text": "Topsoil (upper layer)",
                    "icon": "🌱",
                    "isCorrect": true
                }
            ],
            "explanation": "Topsoil is the upper layer of soil rich in organic matter and microorganisms."
        },
        {
            "question": "Why is it important to rotate crops in a field?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Because the law requires it",
                    "icon": "📜",
                    "isCorrect": false
                },
                {
                    "text": "To deplete nutrients",
                    "icon": "📉",
                    "isCorrect": false
                },
                {
                    "text": "For farmer's entertainment",
                    "icon": "😄",
                    "isCorrect": false
                },
                {
                    "text": "To prevent diseases and improve soil",
                    "icon": "✅",
                    "isCorrect": true
                }
            ],
            "explanation": "Crop rotation prevents pest and disease buildup and restores nutrients in the soil."
        },
        {
            "question": "What is compost?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Chemical fertilizer",
                    "icon": "🧪",
                    "isCorrect": false
                },
                {
                    "text": "Plastic material",
                    "icon": "🧴",
                    "isCorrect": false
                },
                {
                    "text": "A type of pesticide",
                    "icon": "🐛",
                    "isCorrect": false
                },
                {
                    "text": "Decomposed organic matter",
                    "icon": "🌿",
                    "isCorrect": true
                }
            ],
            "explanation": "Compost is natural fertilizer made from decomposed organic materials like leaves, grass, and food scraps."
        },
        {
            "question": "Which soil type holds water best?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Sandy",
                    "icon": "🏖️",
                    "isCorrect": false
                },
                {
                    "text": "Gravelly",
                    "icon": "⚪",
                    "isCorrect": false
                },
                {
                    "text": "Clay",
                    "icon": "🧱",
                    "isCorrect": true
                },
                {
                    "text": "Rocky",
                    "icon": "🪨",
                    "isCorrect": false
                }
            ],
            "explanation": "Clay soil has very fine particles that hold water well, but can have poor drainage."
        },
        {
            "question": "What do earthworms do in soil?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Aerate soil and create humus",
                    "icon": "✅",
                    "isCorrect": true
                },
                {
                    "text": "Nothing useful",
                    "icon": "🤷",
                    "isCorrect": false
                },
                {
                    "text": "Destroy plant roots",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Eat seeds",
                    "icon": "🌰",
                    "isCorrect": false
                }
            ],
            "explanation": "Earthworms are very beneficial - they aerate soil through their tunnels and their castings are excellent fertilizer."
        },
        {
            "question": "How can we identify acidic soil without testing?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Moss and sorrel grow there",
                    "icon": "🌿",
                    "isCorrect": true
                },
                {
                    "text": "Soil is red",
                    "icon": "🔴",
                    "isCorrect": false
                },
                {
                    "text": "Lots of earthworms",
                    "icon": "🪱",
                    "isCorrect": false
                },
                {
                    "text": "Smells like lemons",
                    "icon": "🍋",
                    "isCorrect": false
                }
            ],
            "explanation": "Moss, sorrel, and horsetail are indicators of acidic soil."
        },
        {
            "question": "What is soil erosion?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Fertilizing the field",
                    "icon": "🧪",
                    "isCorrect": false
                },
                {
                    "text": "Enriching soil with nutrients",
                    "icon": "📈",
                    "isCorrect": false
                },
                {
                    "text": "Removal of soil by water or wind",
                    "icon": "💨",
                    "isCorrect": true
                },
                {
                    "text": "Plant growth",
                    "icon": "🌱",
                    "isCorrect": false
                }
            ],
            "explanation": "Erosion is the loss of fertile topsoil caused by water, wind, or improper farming practices."
        }
    ],
    "module1_level2": [
        {
            "question": "Which soil is most fertile?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Saline soil",
                    "icon": "🧂",
                    "isCorrect": false
                },
                {
                    "text": "Podzol",
                    "icon": "🟤",
                    "isCorrect": false
                },
                {
                    "text": "Chernozem (black soil)",
                    "icon": "⬛",
                    "isCorrect": true
                },
                {
                    "text": "Rendzina",
                    "icon": "⚪",
                    "isCorrect": false
                }
            ],
            "explanation": "Chernozem is the most fertile soil type with high humus content, typical of grasslands."
        },
        {
            "question": "What characterizes sandy soil?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Dark colored",
                    "icon": "⬛",
                    "isCorrect": false
                },
                {
                    "text": "Well-drained, dries quickly",
                    "icon": "🏜️",
                    "isCorrect": true
                },
                {
                    "text": "Very fertile",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Heavy, poorly drained",
                    "icon": "🧱",
                    "isCorrect": false
                }
            ],
            "explanation": "Sandy soil has large particles, water passes through quickly and it dries easily."
        },
        {
            "question": "How to improve clay soil?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Leave fallow for 10 years",
                    "icon": "⏳",
                    "isCorrect": false
                },
                {
                    "text": "Add sand and organic matter",
                    "icon": "✅",
                    "isCorrect": true
                },
                {
                    "text": "Water with salty water",
                    "icon": "🧂",
                    "isCorrect": false
                },
                {
                    "text": "Add more clay",
                    "icon": "🧱",
                    "isCorrect": false
                }
            ],
            "explanation": "Adding sand and compost improves the drainage and structure of clay soil."
        },
        {
            "question": "What is loam soil?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only clay",
                    "icon": "🧱",
                    "isCorrect": false
                },
                {
                    "text": "Rocky foundation",
                    "icon": "🪨",
                    "isCorrect": false
                },
                {
                    "text": "A mixture of sand, clay, and silt",
                    "icon": "✅",
                    "isCorrect": true
                },
                {
                    "text": "Pure sand",
                    "icon": "🏖️",
                    "isCorrect": false
                }
            ],
            "explanation": "Loam soil is an ideal mixture of sand, clay, and silt with good growing properties."
        },
        {
            "question": "Peat soil mainly contains:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Sand",
                    "icon": "🏖️",
                    "isCorrect": false
                },
                {
                    "text": "Undecomposed organic matter",
                    "icon": "🌿",
                    "isCorrect": true
                },
                {
                    "text": "Limestone",
                    "icon": "�ite",
                    "isCorrect": false
                },
                {
                    "text": "Iron ore",
                    "icon": "⚙️",
                    "isCorrect": false
                }
            ],
            "explanation": "Peat forms in wet environments from incompletely decomposed plants."
        },
        {
            "question": "What color does iron-rich soil have?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Blue",
                    "icon": "🔵",
                    "isCorrect": false
                },
                {
                    "text": "Black",
                    "icon": "⬛",
                    "isCorrect": false
                },
                {
                    "text": "Green",
                    "icon": "🟢",
                    "isCorrect": false
                },
                {
                    "text": "Red to orange",
                    "icon": "🟠",
                    "isCorrect": true
                }
            ],
            "explanation": "Iron oxides give soil a characteristic red or orange color."
        },
        {
            "question": "What is a soil profile?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Water analysis",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "List of crops",
                    "icon": "📋",
                    "isCorrect": false
                },
                {
                    "text": "Vertical cross-section showing soil layers",
                    "icon": "📊",
                    "isCorrect": true
                },
                {
                    "text": "Map of the land",
                    "icon": "🗺️",
                    "isCorrect": false
                }
            ],
            "explanation": "A soil profile shows individual layers (horizons) from surface down to bedrock."
        },
        {
            "question": "Which horizon is designated by letter A?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Top layer (topsoil)",
                    "icon": "🌱",
                    "isCorrect": true
                },
                {
                    "text": "Air above surface",
                    "icon": "💨",
                    "isCorrect": false
                },
                {
                    "text": "Groundwater",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Bedrock",
                    "icon": "🪨",
                    "isCorrect": false
                }
            ],
            "explanation": "The A horizon is the top layer of soil rich in organic matter."
        },
        {
            "question": "What causes soil salinization?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Excessive irrigation in dry areas",
                    "icon": "🏜️",
                    "isCorrect": true
                },
                {
                    "text": "Growing vegetables",
                    "icon": "🥬",
                    "isCorrect": false
                },
                {
                    "text": "Planting trees",
                    "icon": "🌳",
                    "isCorrect": false
                },
                {
                    "text": "Too much rain",
                    "icon": "🌧️",
                    "isCorrect": false
                }
            ],
            "explanation": "In dry areas, salts accumulate on the surface as irrigation water evaporates."
        },
        {
            "question": "What is soil formed on limestone called?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Podzol",
                    "icon": "🟤",
                    "isCorrect": false
                },
                {
                    "text": "Rendzina",
                    "icon": "⚪",
                    "isCorrect": true
                },
                {
                    "text": "Chernozem",
                    "icon": "⬛",
                    "isCorrect": false
                },
                {
                    "text": "Gley",
                    "icon": "💧",
                    "isCorrect": false
                }
            ],
            "explanation": "Rendzina is shallow soil formed on limestone bedrock, typical in karst regions."
        }
    ],
    "module1_level3": [
        {
            "question": "What do plants need nitrogen (N) for?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "For flower formation",
                    "icon": "🌸",
                    "isCorrect": false
                },
                {
                    "text": "For root development",
                    "icon": "🌱",
                    "isCorrect": false
                },
                {
                    "text": "For repelling insects",
                    "icon": "🐛",
                    "isCorrect": false
                },
                {
                    "text": "For leaf and stem growth",
                    "icon": "🌿",
                    "isCorrect": true
                }
            ],
            "explanation": "Nitrogen is a basic building block of proteins and chlorophyll, promoting growth of green parts."
        },
        {
            "question": "Phosphorus (P) mainly supports:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Root and flower formation",
                    "icon": "🌸",
                    "isCorrect": true
                },
                {
                    "text": "Fruit color",
                    "icon": "🎨",
                    "isCorrect": false
                },
                {
                    "text": "Fruit taste",
                    "icon": "🍎",
                    "isCorrect": false
                },
                {
                    "text": "Leaf growth",
                    "icon": "🌿",
                    "isCorrect": false
                }
            ],
            "explanation": "Phosphorus is important for energy metabolism, root, flower, and seed formation."
        },
        {
            "question": "Potassium (K) helps plants:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Smell better",
                    "icon": "👃",
                    "isCorrect": false
                },
                {
                    "text": "Grow taller faster",
                    "icon": "📏",
                    "isCorrect": false
                },
                {
                    "text": "Resist drought and frost",
                    "icon": "❄️",
                    "isCorrect": true
                },
                {
                    "text": "Have larger leaves",
                    "icon": "🍃",
                    "isCorrect": false
                }
            ],
            "explanation": "Potassium regulates water balance in plants and increases stress resistance."
        },
        {
            "question": "Yellow leaves may indicate deficiency of:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Light",
                    "icon": "☀️",
                    "isCorrect": false
                },
                {
                    "text": "Calcium",
                    "icon": "⚪",
                    "isCorrect": false
                },
                {
                    "text": "Nitrogen",
                    "icon": "🟡",
                    "isCorrect": true
                },
                {
                    "text": "Carbon dioxide",
                    "icon": "💨",
                    "isCorrect": false
                }
            ],
            "explanation": "Nitrogen deficiency causes chlorosis - yellowing of leaves starting from lower parts of the plant."
        },
        {
            "question": "Which fertilizer mainly provides nitrogen?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Potash",
                    "icon": "🧂",
                    "isCorrect": false
                },
                {
                    "text": "Superphosphate",
                    "icon": "📦",
                    "isCorrect": false
                },
                {
                    "text": "Ammonium nitrate",
                    "icon": "🧪",
                    "isCorrect": true
                },
                {
                    "text": "Limestone",
                    "icon": "⚪",
                    "isCorrect": false
                }
            ],
            "explanation": "Ammonium nitrate (NH4NO3) is a concentrated nitrogen fertilizer."
        },
        {
            "question": "What are micronutrients?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Small seeds",
                    "icon": "🌰",
                    "isCorrect": false
                },
                {
                    "text": "Young seedlings",
                    "icon": "🌱",
                    "isCorrect": false
                },
                {
                    "text": "Nutrients needed in trace amounts",
                    "icon": "🔬",
                    "isCorrect": true
                },
                {
                    "text": "Microorganisms",
                    "icon": "🦠",
                    "isCorrect": false
                }
            ],
            "explanation": "Micronutrients (Fe, Zn, Mn, Cu, B, Mo) are needed in small amounts but are essential."
        },
        {
            "question": "Iron deficiency shows as:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Yellowing of young leaves",
                    "icon": "🌿",
                    "isCorrect": true
                },
                {
                    "text": "Flower drop",
                    "icon": "🌸",
                    "isCorrect": false
                },
                {
                    "text": "Larger fruits",
                    "icon": "🍎",
                    "isCorrect": false
                },
                {
                    "text": "Brown roots",
                    "icon": "🟤",
                    "isCorrect": false
                }
            ],
            "explanation": "Chlorosis caused by iron deficiency affects the youngest leaves first."
        },
        {
            "question": "Calcium is important for:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Flower color",
                    "icon": "🌺",
                    "isCorrect": false
                },
                {
                    "text": "Growth speed",
                    "icon": "⚡",
                    "isCorrect": false
                },
                {
                    "text": "Plant fragrance",
                    "icon": "👃",
                    "isCorrect": false
                },
                {
                    "text": "Cell wall strength",
                    "icon": "🧱",
                    "isCorrect": true
                }
            ],
            "explanation": "Calcium is a building component of cell walls and ensures plant tissue strength."
        },
        {
            "question": "Magnesium is part of:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Chlorophyll",
                    "icon": "🌿",
                    "isCorrect": true
                },
                {
                    "text": "Seeds",
                    "icon": "🌰",
                    "isCorrect": false
                },
                {
                    "text": "Flowers",
                    "icon": "🌸",
                    "isCorrect": false
                },
                {
                    "text": "Roots",
                    "icon": "🌱",
                    "isCorrect": false
                }
            ],
            "explanation": "Magnesium is the central atom in chlorophyll molecules - without it plants couldn't photosynthesize."
        },
        {
            "question": "What is foliar feeding?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Feeding leaves to insects",
                    "icon": "🐛",
                    "isCorrect": false
                },
                {
                    "text": "Applying fertilizers to leaves by spraying",
                    "icon": "💦",
                    "isCorrect": true
                },
                {
                    "text": "Pruning leaves",
                    "icon": "✂️",
                    "isCorrect": false
                },
                {
                    "text": "Collecting leaves",
                    "icon": "🍂",
                    "isCorrect": false
                }
            ],
            "explanation": "Foliar feeding delivers nutrients quickly through leaves, used for acute deficiencies."
        }
    ],
    "module1_level4": [
        {
            "question": "What is plowing?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Sowing seeds",
                    "icon": "🌰",
                    "isCorrect": false
                },
                {
                    "text": "Watering the field",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Turning soil with a plow",
                    "icon": "🚜",
                    "isCorrect": true
                },
                {
                    "text": "Harvesting grain",
                    "icon": "🌾",
                    "isCorrect": false
                }
            ],
            "explanation": "Plowing is the basic method of soil cultivation where soil is turned and loosened."
        },
        {
            "question": "When is the best time to plow?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "In summer during heat",
                    "icon": "☀️",
                    "isCorrect": false
                },
                {
                    "text": "In autumn after harvest",
                    "icon": "🍂",
                    "isCorrect": true
                },
                {
                    "text": "During heavy rain",
                    "icon": "🌧️",
                    "isCorrect": false
                },
                {
                    "text": "When soil is frozen",
                    "icon": "❄️",
                    "isCorrect": false
                }
            ],
            "explanation": "Autumn plowing allows soil to freeze, which improves its structure."
        },
        {
            "question": "What is minimum tillage?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Using a small tractor",
                    "icon": "🚜",
                    "isCorrect": false
                },
                {
                    "text": "Minimum fertilizers",
                    "icon": "🧪",
                    "isCorrect": false
                },
                {
                    "text": "Reducing intensity of soil cultivation",
                    "icon": "♻️",
                    "isCorrect": true
                },
                {
                    "text": "Small field",
                    "icon": "📏",
                    "isCorrect": false
                }
            ],
            "explanation": "Minimum tillage reduces plowing to protect soil structure, saving time and fuel."
        },
        {
            "question": "What are harrows used for?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Plowing",
                    "icon": "🚜",
                    "isCorrect": false
                },
                {
                    "text": "Breaking up and leveling soil",
                    "icon": "✅",
                    "isCorrect": true
                },
                {
                    "text": "Spraying",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "Irrigating",
                    "icon": "💧",
                    "isCorrect": false
                }
            ],
            "explanation": "Harrows are used after plowing to break up clods and prepare the seedbed."
        },
        {
            "question": "What is no-till farming?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Growing without water",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Growing without seeds",
                    "icon": "🌰",
                    "isCorrect": false
                },
                {
                    "text": "Growing crops without plowing",
                    "icon": "🌱",
                    "isCorrect": true
                },
                {
                    "text": "Growing without fertilizers",
                    "icon": "🧪",
                    "isCorrect": false
                }
            ],
            "explanation": "No-till farming protects soil structure and life in the soil."
        },
        {
            "question": "Why is soil rolling done?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "For compaction and better seed-soil contact",
                    "icon": "✅",
                    "isCorrect": true
                },
                {
                    "text": "For drainage",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "For soil warming",
                    "icon": "🌡️",
                    "isCorrect": false
                },
                {
                    "text": "For fun",
                    "icon": "😄",
                    "isCorrect": false
                }
            ],
            "explanation": "Rolling improves seed-soil contact and promotes germination."
        },
        {
            "question": "What is stubble cultivation?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Conditional sowing",
                    "icon": "❓",
                    "isCorrect": false
                },
                {
                    "text": "Type of plow",
                    "icon": "🔧",
                    "isCorrect": false
                },
                {
                    "text": "Deep plowing",
                    "icon": "⬇️",
                    "isCorrect": false
                },
                {
                    "text": "Shallow tillage of stubble after harvest",
                    "icon": "🌾",
                    "isCorrect": true
                }
            ],
            "explanation": "Stubble cultivation incorporates crop residues and promotes weed germination for later destruction."
        },
        {
            "question": "What is ideal plowing depth for cereals?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "1 meter",
                    "icon": "📏",
                    "isCorrect": false
                },
                {
                    "text": "20-25 cm",
                    "icon": "📏",
                    "isCorrect": true
                },
                {
                    "text": "50 cm",
                    "icon": "📏",
                    "isCorrect": false
                },
                {
                    "text": "5 cm",
                    "icon": "📐",
                    "isCorrect": false
                }
            ],
            "explanation": "For common crops, plowing depth of 20-25 cm is sufficient."
        },
        {
            "question": "What causes soil compaction?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Heavy machinery traffic",
                    "icon": "🚜",
                    "isCorrect": true
                },
                {
                    "text": "Growing grass",
                    "icon": "🌿",
                    "isCorrect": false
                },
                {
                    "text": "Spring sowing",
                    "icon": "🌱",
                    "isCorrect": false
                },
                {
                    "text": "Too many earthworms",
                    "icon": "🪱",
                    "isCorrect": false
                }
            ],
            "explanation": "Heavy machinery, especially on wet soil, causes compaction of soil layers."
        },
        {
            "question": "How to combat soil compaction?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Stop farming",
                    "icon": "⛔",
                    "isCorrect": false
                },
                {
                    "text": "More tractor driving",
                    "icon": "🚜",
                    "isCorrect": false
                },
                {
                    "text": "Add more clay",
                    "icon": "🧱",
                    "isCorrect": false
                },
                {
                    "text": "Deep loosening and crop rotation",
                    "icon": "✅",
                    "isCorrect": true
                }
            ],
            "explanation": "Deep loosening breaks up compacted layers, deep-rooted crops also help."
        }
    ],
    "module1_level5": [
        {
            "question": "What is crop rotation?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Planned sequence of crops on a field",
                    "icon": "📅",
                    "isCorrect": true
                },
                {
                    "text": "Method of sowing",
                    "icon": "🌰",
                    "isCorrect": false
                },
                {
                    "text": "Sowing depth",
                    "icon": "📏",
                    "isCorrect": false
                },
                {
                    "text": "Germination speed",
                    "icon": "⏱️",
                    "isCorrect": false
                }
            ],
            "explanation": "Crop rotation determines which crops will be grown in sequence over years."
        },
        {
            "question": "Why shouldn't the same crop be grown repeatedly?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Soil changes color",
                    "icon": "🎨",
                    "isCorrect": false
                },
                {
                    "text": "Diseases and pests accumulate",
                    "icon": "🦠",
                    "isCorrect": true
                },
                {
                    "text": "Plants get bored",
                    "icon": "😴",
                    "isCorrect": false
                },
                {
                    "text": "It's forbidden",
                    "icon": "⛔",
                    "isCorrect": false
                }
            ],
            "explanation": "Monocultures lead to spread of specific diseases, pests, and one-sided nutrient depletion."
        },
        {
            "question": "Which crop enriches soil with nitrogen?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Corn",
                    "icon": "🌽",
                    "isCorrect": false
                },
                {
                    "text": "Potatoes",
                    "icon": "🥔",
                    "isCorrect": false
                },
                {
                    "text": "Wheat",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Peas, beans, clover",
                    "icon": "🌿",
                    "isCorrect": true
                }
            ],
            "explanation": "Legumes live in symbiosis with bacteria that fix atmospheric nitrogen."
        },
        {
            "question": "What is a preceding crop?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Unripe crop",
                    "icon": "🌱",
                    "isCorrect": false
                },
                {
                    "text": "Crop grown before the main crop",
                    "icon": "⏮️",
                    "isCorrect": true
                },
                {
                    "text": "Weed",
                    "icon": "🌿",
                    "isCorrect": false
                },
                {
                    "text": "Crop before harvest",
                    "icon": "🌾",
                    "isCorrect": false
                }
            ],
            "explanation": "The preceding crop affects soil condition and conditions for the following main crop."
        },
        {
            "question": "What is a good preceding crop for wheat?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Rapeseed or legumes",
                    "icon": "✅",
                    "isCorrect": true
                },
                {
                    "text": "Wheat",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Rye",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Barley",
                    "icon": "🌾",
                    "isCorrect": false
                }
            ],
            "explanation": "After rapeseed and legumes, more nutrients remain in soil and there's less disease pressure."
        },
        {
            "question": "What is a cover crop?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Crop between rows",
                    "icon": "↔️",
                    "isCorrect": false
                },
                {
                    "text": "Half harvest",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Medium-sized crop",
                    "icon": "📏",
                    "isCorrect": false
                },
                {
                    "text": "Crop grown between two main crops",
                    "icon": "🌱",
                    "isCorrect": true
                }
            ],
            "explanation": "Cover crops (e.g., mustard) are grown after main crop harvest to improve soil."
        },
        {
            "question": "The purpose of green manuring is:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Selling green crops",
                    "icon": "💰",
                    "isCorrect": false
                },
                {
                    "text": "Plowing in plants to enrich soil",
                    "icon": "🌿",
                    "isCorrect": true
                },
                {
                    "text": "Dyeing fertilizer green",
                    "icon": "🎨",
                    "isCorrect": false
                },
                {
                    "text": "Feeding cattle",
                    "icon": "🐄",
                    "isCorrect": false
                }
            ],
            "explanation": "Green manuring adds organic matter to soil and improves its structure."
        },
        {
            "question": "A typical crop rotation lasts:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "20 years",
                    "icon": "📅",
                    "isCorrect": false
                },
                {
                    "text": "4-6 years",
                    "icon": "📅",
                    "isCorrect": true
                },
                {
                    "text": "1 year",
                    "icon": "📆",
                    "isCorrect": false
                },
                {
                    "text": "100 years",
                    "icon": "📅",
                    "isCorrect": false
                }
            ],
            "explanation": "Common crop rotation is 4-6 years for sufficient crop alternation."
        },
        {
            "question": "Fallow means:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Field left without crop for regeneration",
                    "icon": "🏜️",
                    "isCorrect": true
                },
                {
                    "text": "Field with dead plants",
                    "icon": "☠️",
                    "isCorrect": false
                },
                {
                    "text": "Diagonal sowing",
                    "icon": "↗️",
                    "isCorrect": false
                },
                {
                    "text": "Coal in soil",
                    "icon": "⬛",
                    "isCorrect": false
                }
            ],
            "explanation": "Fallow is a traditional soil regeneration method, now mostly replaced by cover crops."
        },
        {
            "question": "Which crops should not follow sugar beet?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Corn",
                    "icon": "🌽",
                    "isCorrect": false
                },
                {
                    "text": "Clover",
                    "icon": "🍀",
                    "isCorrect": false
                },
                {
                    "text": "Sugar beet and rapeseed (brassicas)",
                    "icon": "⛔",
                    "isCorrect": true
                },
                {
                    "text": "Wheat",
                    "icon": "🌾",
                    "isCorrect": false
                }
            ],
            "explanation": "Sugar beet and rapeseed are related and share common diseases like cyst nematode."
        }
    ],
    "module1_level6": [
        {
            "question": "What is seeding rate?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Amount of seed per hectare",
                    "icon": "🌰",
                    "isCorrect": true
                },
                {
                    "text": "Seed color",
                    "icon": "🎨",
                    "isCorrect": false
                },
                {
                    "text": "Seed age",
                    "icon": "📅",
                    "isCorrect": false
                },
                {
                    "text": "Seed price",
                    "icon": "💰",
                    "isCorrect": false
                }
            ],
            "explanation": "Seeding rate indicates how many kilograms or pieces of seed are sown per hectare."
        },
        {
            "question": "What is seed germination?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Growth rate",
                    "icon": "⚡",
                    "isCorrect": false
                },
                {
                    "text": "Seed size",
                    "icon": "📏",
                    "isCorrect": false
                },
                {
                    "text": "Percentage of seeds able to sprout",
                    "icon": "🌱",
                    "isCorrect": true
                },
                {
                    "text": "Sprout color",
                    "icon": "🎨",
                    "isCorrect": false
                }
            ],
            "explanation": "Germination expresses seed quality - what percentage of seeds will actually sprout."
        },
        {
            "question": "What is optimal sowing depth for wheat?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "15 cm",
                    "icon": "📏",
                    "isCorrect": false
                },
                {
                    "text": "0.5 cm",
                    "icon": "📐",
                    "isCorrect": false
                },
                {
                    "text": "30 cm",
                    "icon": "📏",
                    "isCorrect": false
                },
                {
                    "text": "3-5 cm",
                    "icon": "📏",
                    "isCorrect": true
                }
            ],
            "explanation": "Wheat is sown 3-5 cm deep for optimal emergence."
        },
        {
            "question": "What is seed treatment?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Treating seeds against diseases",
                    "icon": "💊",
                    "isCorrect": true
                },
                {
                    "text": "Soaking in sea",
                    "icon": "🌊",
                    "isCorrect": false
                },
                {
                    "text": "Drying seeds",
                    "icon": "☀️",
                    "isCorrect": false
                },
                {
                    "text": "Dyeing seeds",
                    "icon": "🎨",
                    "isCorrect": false
                }
            ],
            "explanation": "Seed treatment protects seed from fungal diseases and pests in early stages."
        },
        {
            "question": "Row sowing means:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Sowing in line one after another",
                    "icon": "👥",
                    "isCorrect": false
                },
                {
                    "text": "Sowing sparse seed",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Proper sowing",
                    "icon": "✅",
                    "isCorrect": false
                },
                {
                    "text": "Sowing in rows with specific spacing",
                    "icon": "📐",
                    "isCorrect": true
                }
            ],
            "explanation": "Row sowing allows mechanical cultivation between rows and better space utilization."
        },
        {
            "question": "When is spring barley sown?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "In autumn",
                    "icon": "🍂",
                    "isCorrect": false
                },
                {
                    "text": "In spring (March-April)",
                    "icon": "🌸",
                    "isCorrect": true
                },
                {
                    "text": "In winter",
                    "icon": "❄️",
                    "isCorrect": false
                },
                {
                    "text": "In summer",
                    "icon": "☀️",
                    "isCorrect": false
                }
            ],
            "explanation": "Spring cereals are sown in spring as soon as conditions allow."
        },
        {
            "question": "What is the advantage of certified seed?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Lower price",
                    "icon": "💰",
                    "isCorrect": false
                },
                {
                    "text": "Colorful packaging",
                    "icon": "🎨",
                    "isCorrect": false
                },
                {
                    "text": "Guaranteed purity and germination",
                    "icon": "✅",
                    "isCorrect": true
                },
                {
                    "text": "Larger seeds",
                    "icon": "📏",
                    "isCorrect": false
                }
            ],
            "explanation": "Certified seed has guaranteed properties and is free from contamination and diseases."
        },
        {
            "question": "What is precision sowing?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Very precise seed weighing",
                    "icon": "⚖️",
                    "isCorrect": false
                },
                {
                    "text": "Sowing individual seeds at exact distances",
                    "icon": "🎯",
                    "isCorrect": true
                },
                {
                    "text": "Sowing exactly at noon",
                    "icon": "🕛",
                    "isCorrect": false
                },
                {
                    "text": "Sowing only quality seed",
                    "icon": "✅",
                    "isCorrect": false
                }
            ],
            "explanation": "Precision sowing (e.g., for corn, sugar beet) places seeds individually at exact intervals."
        },
        {
            "question": "Why are potatoes planted deep?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "So tubers have room to grow",
                    "icon": "🥔",
                    "isCorrect": true
                },
                {
                    "text": "To warm them up",
                    "icon": "🌡️",
                    "isCorrect": false
                },
                {
                    "text": "Because of pests",
                    "icon": "🐛",
                    "isCorrect": false
                },
                {
                    "text": "Because they're heavy",
                    "icon": "⚖️",
                    "isCorrect": false
                }
            ],
            "explanation": "Deeper planting and hilling creates space for tuber formation."
        },
        {
            "question": "What is potato chitting?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Sorting potatoes",
                    "icon": "📊",
                    "isCorrect": false
                },
                {
                    "text": "Early harvest",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Pre-sprouting tubers before planting",
                    "icon": "🌱",
                    "isCorrect": true
                },
                {
                    "text": "Washing potatoes",
                    "icon": "💧",
                    "isCorrect": false
                }
            ],
            "explanation": "Pre-sprouted potatoes emerge faster and better utilize the growing season."
        }
    ],
    "module1_level7": [
        {
            "question": "What is a weed?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Plant with sharp leaves",
                    "icon": "🌵",
                    "isCorrect": false
                },
                {
                    "text": "Plant growing in an unwanted place",
                    "icon": "🌿",
                    "isCorrect": true
                },
                {
                    "text": "Only thistles",
                    "icon": "🌸",
                    "isCorrect": false
                },
                {
                    "text": "Poisonous plant",
                    "icon": "☠️",
                    "isCorrect": false
                }
            ],
            "explanation": "A weed is any plant growing where we don't want it - it competes with crops."
        },
        {
            "question": "How do weeds spread?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only by wind",
                    "icon": "🌬️",
                    "isCorrect": false
                },
                {
                    "text": "By human activity only",
                    "icon": "👷",
                    "isCorrect": false
                },
                {
                    "text": "Only by seeds",
                    "icon": "🌰",
                    "isCorrect": false
                },
                {
                    "text": "By seeds, rhizomes, wind, water",
                    "icon": "💨",
                    "isCorrect": true
                }
            ],
            "explanation": "Weeds have various spreading strategies - seeds, underground rhizomes, wind, water, and animals."
        },
        {
            "question": "An example of a perennial weed is:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Corncockle",
                    "icon": "💜",
                    "isCorrect": false
                },
                {
                    "text": "Poppy",
                    "icon": "🌺",
                    "isCorrect": false
                },
                {
                    "text": "Chamomile",
                    "icon": "🌼",
                    "isCorrect": false
                },
                {
                    "text": "Couch grass",
                    "icon": "🌿",
                    "isCorrect": true
                }
            ],
            "explanation": "Couch grass is a very troublesome perennial weed spreading by underground rhizomes."
        },
        {
            "question": "What is a herbicide?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Product for diseases",
                    "icon": "💊",
                    "isCorrect": false
                },
                {
                    "text": "Product for killing insects",
                    "icon": "🐛",
                    "isCorrect": false
                },
                {
                    "text": "Product for killing weeds",
                    "icon": "🧪",
                    "isCorrect": true
                },
                {
                    "text": "Fertilizer",
                    "icon": "🌱",
                    "isCorrect": false
                }
            ],
            "explanation": "Herbicides are chemical products designed to eliminate unwanted plants."
        },
        {
            "question": "What is a selective herbicide?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Is more expensive",
                    "icon": "💰",
                    "isCorrect": false
                },
                {
                    "text": "Selects itself",
                    "icon": "🤖",
                    "isCorrect": false
                },
                {
                    "text": "Kills all plants",
                    "icon": "☠️",
                    "isCorrect": false
                },
                {
                    "text": "Kills only certain plant species",
                    "icon": "🎯",
                    "isCorrect": true
                }
            ],
            "explanation": "Selective herbicides kill weeds but don't damage the cultivated crop."
        },
        {
            "question": "Mechanical weed control includes:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only spraying",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "Doing nothing",
                    "icon": "😴",
                    "isCorrect": false
                },
                {
                    "text": "Only hand pulling",
                    "icon": "✋",
                    "isCorrect": false
                },
                {
                    "text": "Hoeing, cultivation, mulching",
                    "icon": "🔧",
                    "isCorrect": true
                }
            ],
            "explanation": "Mechanical methods physically remove or suppress weeds without chemicals."
        },
        {
            "question": "What is mulch?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Covering layer on soil",
                    "icon": "🍂",
                    "isCorrect": true
                },
                {
                    "text": "Weed",
                    "icon": "🌿",
                    "isCorrect": false
                },
                {
                    "text": "Type of fertilizer",
                    "icon": "🧪",
                    "isCorrect": false
                },
                {
                    "text": "Irrigation system",
                    "icon": "💧",
                    "isCorrect": false
                }
            ],
            "explanation": "Mulch (straw, bark, plastic) prevents weed growth and maintains soil moisture."
        },
        {
            "question": "Creeping thistle is:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "A cultivated crop",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "A difficult perennial weed",
                    "icon": "🌿",
                    "isCorrect": true
                },
                {
                    "text": "A medicinal herb",
                    "icon": "💊",
                    "isCorrect": false
                },
                {
                    "text": "An ornamental flower",
                    "icon": "🌸",
                    "isCorrect": false
                }
            ],
            "explanation": "Creeping thistle is one of the worst perennial weeds with deep roots."
        },
        {
            "question": "Why is it important to kill weeds before flowering?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "It's easier",
                    "icon": "✅",
                    "isCorrect": false
                },
                {
                    "text": "Flowers are poisonous",
                    "icon": "☠️",
                    "isCorrect": false
                },
                {
                    "text": "So they don't produce seeds",
                    "icon": "🌰",
                    "isCorrect": true
                },
                {
                    "text": "They look nicer",
                    "icon": "🌸",
                    "isCorrect": false
                }
            ],
            "explanation": "One weed can produce thousands of seeds that survive in soil for years."
        },
        {
            "question": "Integrated weed control means:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Ignoring weeds",
                    "icon": "🙈",
                    "isCorrect": false
                },
                {
                    "text": "Combination of multiple control methods",
                    "icon": "🔄",
                    "isCorrect": true
                },
                {
                    "text": "Only chemical control",
                    "icon": "🧪",
                    "isCorrect": false
                },
                {
                    "text": "Integrating weeds into crop rotation",
                    "icon": "📅",
                    "isCorrect": false
                }
            ],
            "explanation": "Integrated control combines prevention, mechanical, and chemical methods."
        }
    ],
    "module1_level8": [
        {
            "question": "What is field capacity?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Maximum water soil can hold",
                    "icon": "💧",
                    "isCorrect": true
                },
                {
                    "text": "Amount of water on field",
                    "icon": "🏞️",
                    "isCorrect": false
                },
                {
                    "text": "Irrigation capacity",
                    "icon": "🚿",
                    "isCorrect": false
                },
                {
                    "text": "Tank volume",
                    "icon": "🛢️",
                    "isCorrect": false
                }
            ],
            "explanation": "Field capacity is the amount of water soil holds against gravity."
        },
        {
            "question": "What is wilting point?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Moisture at which plants wilt",
                    "icon": "🥀",
                    "isCorrect": true
                },
                {
                    "text": "Place where plants wilt",
                    "icon": "📍",
                    "isCorrect": false
                },
                {
                    "text": "Wilting temperature",
                    "icon": "🌡️",
                    "isCorrect": false
                },
                {
                    "text": "Time of wilting",
                    "icon": "⏰",
                    "isCorrect": false
                }
            ],
            "explanation": "At wilting point, water in soil is held so tightly that roots cannot extract it."
        },
        {
            "question": "Which soil has the greatest water capacity?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Clay",
                    "icon": "🧱",
                    "isCorrect": true
                },
                {
                    "text": "Sandy",
                    "icon": "🏖️",
                    "isCorrect": false
                },
                {
                    "text": "Gravelly",
                    "icon": "⚪",
                    "isCorrect": false
                },
                {
                    "text": "Rocky",
                    "icon": "🪨",
                    "isCorrect": false
                }
            ],
            "explanation": "Clay soil has the smallest pores and holds the most water, though not all is available to plants."
        },
        {
            "question": "What causes waterlogging?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Strong wind",
                    "icon": "💨",
                    "isCorrect": false
                },
                {
                    "text": "Lack of fertilizers",
                    "icon": "🧪",
                    "isCorrect": false
                },
                {
                    "text": "Too much sunshine",
                    "icon": "☀️",
                    "isCorrect": false
                },
                {
                    "text": "High groundwater table",
                    "icon": "💧",
                    "isCorrect": true
                }
            ],
            "explanation": "Waterlogging occurs with high groundwater or poor drainage."
        },
        {
            "question": "What is drainage used for?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Sowing",
                    "icon": "🌰",
                    "isCorrect": false
                },
                {
                    "text": "Removing excess water",
                    "icon": "🔽",
                    "isCorrect": true
                },
                {
                    "text": "Fertilizing",
                    "icon": "🧪",
                    "isCorrect": false
                },
                {
                    "text": "Irrigation",
                    "icon": "💦",
                    "isCorrect": false
                }
            ],
            "explanation": "Drainage systems remove excess water from soil and improve aeration."
        },
        {
            "question": "What is evapotranspiration?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Type of fertilizer",
                    "icon": "🧪",
                    "isCorrect": false
                },
                {
                    "text": "Type of transport",
                    "icon": "🚚",
                    "isCorrect": false
                },
                {
                    "text": "Plant disease",
                    "icon": "🦠",
                    "isCorrect": false
                },
                {
                    "text": "Evaporation from soil and plants",
                    "icon": "☁️",
                    "isCorrect": true
                }
            ],
            "explanation": "Evapotranspiration is the sum of evaporation from soil and transpiration from plants."
        },
        {
            "question": "How to reduce soil evaporation?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "By removing plants",
                    "icon": "✂️",
                    "isCorrect": false
                },
                {
                    "text": "By mulching",
                    "icon": "🍂",
                    "isCorrect": true
                },
                {
                    "text": "By adding salt",
                    "icon": "🧂",
                    "isCorrect": false
                },
                {
                    "text": "By frequent cultivation",
                    "icon": "🔧",
                    "isCorrect": false
                }
            ],
            "explanation": "Mulch creates a barrier that limits direct evaporation from soil surface."
        },
        {
            "question": "What is capillary rise?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Water evaporating",
                    "icon": "💨",
                    "isCorrect": false
                },
                {
                    "text": "Water rising in narrow pores",
                    "icon": "⬆️",
                    "isCorrect": true
                },
                {
                    "text": "Water freezing",
                    "icon": "❄️",
                    "isCorrect": false
                },
                {
                    "text": "Water falling",
                    "icon": "⬇️",
                    "isCorrect": false
                }
            ],
            "explanation": "Capillary forces enable water to rise in narrow soil pores against gravity."
        },
        {
            "question": "Soil drought can be recognized by:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Many earthworms",
                    "icon": "🪱",
                    "isCorrect": false
                },
                {
                    "text": "Cracks in soil and wilting plants",
                    "icon": "🥀",
                    "isCorrect": true
                },
                {
                    "text": "Green leaves",
                    "icon": "🌿",
                    "isCorrect": false
                },
                {
                    "text": "Fast growth",
                    "icon": "📈",
                    "isCorrect": false
                }
            ],
            "explanation": "Drought shows as cracks, hard soil, and wilting plants."
        },
        {
            "question": "What is infiltration?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Water freezing",
                    "icon": "❄️",
                    "isCorrect": false
                },
                {
                    "text": "Water evaporating",
                    "icon": "☁️",
                    "isCorrect": false
                },
                {
                    "text": "Water pollution",
                    "icon": "🏭",
                    "isCorrect": false
                },
                {
                    "text": "Water soaking into soil",
                    "icon": "⬇️",
                    "isCorrect": true
                }
            ],
            "explanation": "Infiltration is the process of water penetrating from surface into soil."
        }
    ],
    "module1_level9": [
        {
            "question": "What is soil microbiome?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Groundwater",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Community of microorganisms in soil",
                    "icon": "🦠",
                    "isCorrect": true
                },
                {
                    "text": "Small pebbles",
                    "icon": "🪨",
                    "isCorrect": false
                },
                {
                    "text": "Plant roots",
                    "icon": "🌱",
                    "isCorrect": false
                }
            ],
            "explanation": "Soil microbiome includes bacteria, fungi, protozoa, and other microorganisms."
        },
        {
            "question": "What is mycorrhiza?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Type of soil",
                    "icon": "🌍",
                    "isCorrect": false
                },
                {
                    "text": "Fungal disease",
                    "icon": "🦠",
                    "isCorrect": false
                },
                {
                    "text": "Symbiosis of fungi with plant roots",
                    "icon": "🍄",
                    "isCorrect": true
                },
                {
                    "text": "Type of fertilizer",
                    "icon": "🧪",
                    "isCorrect": false
                }
            ],
            "explanation": "Mycorrhizal fungi help plants obtain water and nutrients in exchange for sugars."
        },
        {
            "question": "Nodule bacteria on legumes:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Destroy roots",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Cause diseases",
                    "icon": "🦠",
                    "isCorrect": false
                },
                {
                    "text": "Produce oxygen",
                    "icon": "💨",
                    "isCorrect": false
                },
                {
                    "text": "Fix atmospheric nitrogen",
                    "icon": "🌿",
                    "isCorrect": true
                }
            ],
            "explanation": "Rhizobium bacteria in legume nodules fix atmospheric nitrogen into available form."
        },
        {
            "question": "How many living organisms are in a handful of healthy soil?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Tens",
                    "icon": "🔟",
                    "isCorrect": false
                },
                {
                    "text": "Billions",
                    "icon": "🔬",
                    "isCorrect": true
                },
                {
                    "text": "None",
                    "icon": "0️⃣",
                    "isCorrect": false
                },
                {
                    "text": "Hundreds",
                    "icon": "💯",
                    "isCorrect": false
                }
            ],
            "explanation": "One gram of healthy soil can contain billions of bacteria and millions of fungi."
        },
        {
            "question": "What do decomposers do in soil?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Eat plants",
                    "icon": "🌿",
                    "isCorrect": false
                },
                {
                    "text": "Build burrows",
                    "icon": "🕳️",
                    "isCorrect": false
                },
                {
                    "text": "Produce oxygen",
                    "icon": "💨",
                    "isCorrect": false
                },
                {
                    "text": "Break down organic matter",
                    "icon": "♻️",
                    "isCorrect": true
                }
            ],
            "explanation": "Decomposers (bacteria, fungi, earthworms) transform dead organic matter into humus."
        },
        {
            "question": "Soil fauna includes:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only earthworms",
                    "icon": "🐛",
                    "isCorrect": false
                },
                {
                    "text": "Only bacteria",
                    "icon": "🦠",
                    "isCorrect": false
                },
                {
                    "text": "Only fungi",
                    "icon": "🍄",
                    "isCorrect": false
                },
                {
                    "text": "Earthworms, centipedes, mites, insects",
                    "icon": "🪱",
                    "isCorrect": true
                }
            ],
            "explanation": "Soil fauna is diverse - from microscopic mites to earthworms and insects."
        },
        {
            "question": "Why is soil biodiversity important?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Ensures nutrient cycling and soil health",
                    "icon": "🔄",
                    "isCorrect": true
                },
                {
                    "text": "Harms plants",
                    "icon": "☠️",
                    "isCorrect": false
                },
                {
                    "text": "It's not important",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "It's just interesting",
                    "icon": "🤔",
                    "isCorrect": false
                }
            ],
            "explanation": "Diversity of soil life ensures ecosystem stability and stress resistance."
        },
        {
            "question": "What harms soil life?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Organic fertilizing",
                    "icon": "🌿",
                    "isCorrect": false
                },
                {
                    "text": "Excessive chemicals and compaction",
                    "icon": "⚠️",
                    "isCorrect": true
                },
                {
                    "text": "Crop rotation",
                    "icon": "🔄",
                    "isCorrect": false
                },
                {
                    "text": "Composting",
                    "icon": "♻️",
                    "isCorrect": false
                }
            ],
            "explanation": "Pesticides, artificial fertilizers, and soil compaction negatively affect soil organisms."
        },
        {
            "question": "Actinomycetes are:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Weed",
                    "icon": "🌿",
                    "isCorrect": false
                },
                {
                    "text": "Type of earthworm",
                    "icon": "🪱",
                    "isCorrect": false
                },
                {
                    "text": "Bacteria with fungus-like growth",
                    "icon": "🦠",
                    "isCorrect": true
                },
                {
                    "text": "Fertilizer",
                    "icon": "🧪",
                    "isCorrect": false
                }
            ],
            "explanation": "Actinomycetes give soil its characteristic smell and break down hard-to-decompose substances."
        },
        {
            "question": "How to support soil life?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Leave soil without plants",
                    "icon": "🏜️",
                    "isCorrect": false
                },
                {
                    "text": "Use more pesticides",
                    "icon": "🧪",
                    "isCorrect": false
                },
                {
                    "text": "Add organic matter, minimize chemicals",
                    "icon": "✅",
                    "isCorrect": true
                },
                {
                    "text": "Water with salty water",
                    "icon": "🧂",
                    "isCorrect": false
                }
            ],
            "explanation": "Organic matter is food for soil life, while chemicals destroy it."
        }
    ],
    "module1_level10": [
        {
            "question": "Soil can store:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only nutrients",
                    "icon": "🧪",
                    "isCorrect": false
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Only water",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Carbon from atmosphere",
                    "icon": "🌍",
                    "isCorrect": true
                }
            ],
            "explanation": "Soil is a significant carbon reservoir - containing more C than atmosphere and vegetation combined."
        },
        {
            "question": "What is carbon sequestration?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Releasing CO2",
                    "icon": "☁️",
                    "isCorrect": false
                },
                {
                    "text": "Type of fertilizer",
                    "icon": "🧪",
                    "isCorrect": false
                },
                {
                    "text": "Storing carbon in soil",
                    "icon": "⬇️",
                    "isCorrect": true
                },
                {
                    "text": "Burning biomass",
                    "icon": "🔥",
                    "isCorrect": false
                }
            ],
            "explanation": "Carbon sequestration is the process where atmospheric CO2 is stored in soil as organic matter."
        },
        {
            "question": "How does agriculture contribute to climate change?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Not at all",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Only through irrigation",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Only positively",
                    "icon": "✅",
                    "isCorrect": false
                },
                {
                    "text": "By N2O, CH4, and CO2 emissions",
                    "icon": "☁️",
                    "isCorrect": true
                }
            ],
            "explanation": "Agriculture produces greenhouse gases from fertilizers, livestock, and soil cultivation."
        },
        {
            "question": "Regenerative agriculture focuses on:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Maximizing yields",
                    "icon": "📈",
                    "isCorrect": false
                },
                {
                    "text": "Monoculture farming",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Using more chemicals",
                    "icon": "🧪",
                    "isCorrect": false
                },
                {
                    "text": "Restoring soil health and storing carbon",
                    "icon": "♻️",
                    "isCorrect": true
                }
            ],
            "explanation": "Regenerative agriculture restores soil ecosystem and helps mitigate climate change."
        },
        {
            "question": "Biochar is:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Carbon from biomass pyrolysis for soil",
                    "icon": "⬛",
                    "isCorrect": true
                },
                {
                    "text": "Type of compost",
                    "icon": "♻️",
                    "isCorrect": false
                },
                {
                    "text": "Biological fertilizer",
                    "icon": "🌿",
                    "isCorrect": false
                },
                {
                    "text": "Pesticide",
                    "icon": "🧪",
                    "isCorrect": false
                }
            ],
            "explanation": "Biochar is a stable form of carbon that improves soil and stores carbon for thousands of years."
        },
        {
            "question": "Agroforestry combines:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Trees with crops or livestock",
                    "icon": "🌳",
                    "isCorrect": true
                },
                {
                    "text": "Only crops",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Only trees",
                    "icon": "🌲",
                    "isCorrect": false
                },
                {
                    "text": "Only livestock",
                    "icon": "🐄",
                    "isCorrect": false
                }
            ],
            "explanation": "Agroforestry integrates trees into agricultural systems for greater sustainability."
        },
        {
            "question": "Cover crops help to:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Protect soil and store carbon",
                    "icon": "🌱",
                    "isCorrect": true
                },
                {
                    "text": "Kill pests chemically",
                    "icon": "🧪",
                    "isCorrect": false
                },
                {
                    "text": "Increase erosion",
                    "icon": "💨",
                    "isCorrect": false
                },
                {
                    "text": "Only look nice",
                    "icon": "🎨",
                    "isCorrect": false
                }
            ],
            "explanation": "Cover crops protect soil from erosion, maintain moisture, and add organic matter."
        },
        {
            "question": "Soil respiration is:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Oxygen absorption",
                    "icon": "💨",
                    "isCorrect": false
                },
                {
                    "text": "Photosynthesis",
                    "icon": "☀️",
                    "isCorrect": false
                },
                {
                    "text": "Plant breathing",
                    "icon": "🌿",
                    "isCorrect": false
                },
                {
                    "text": "CO2 release from soil",
                    "icon": "☁️",
                    "isCorrect": true
                }
            ],
            "explanation": "Soil respiration is the metabolic activity of organisms in soil that releases CO2."
        },
        {
            "question": "No-till farming reduces:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Earthworm numbers",
                    "icon": "🪱",
                    "isCorrect": false
                },
                {
                    "text": "Humus content",
                    "icon": "🌿",
                    "isCorrect": false
                },
                {
                    "text": "Yields",
                    "icon": "📉",
                    "isCorrect": false
                },
                {
                    "text": "CO2 emissions from soil",
                    "icon": "⬇️",
                    "isCorrect": true
                }
            ],
            "explanation": "Without plowing, carbon stays in soil and doesn't oxidize when exposed to air."
        },
        {
            "question": "Climate-healthy soil has:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "No life",
                    "icon": "☠️",
                    "isCorrect": false
                },
                {
                    "text": "Only minerals",
                    "icon": "💎",
                    "isCorrect": false
                },
                {
                    "text": "High organic matter content and biodiversity",
                    "icon": "✅",
                    "isCorrect": true
                },
                {
                    "text": "Lots of chemical fertilizers",
                    "icon": "🧪",
                    "isCorrect": false
                }
            ],
            "explanation": "Healthy soil rich in organic matter and life effectively stores carbon."
        }
    ]
};

window.MODULE1_QUESTIONS = MODULE1_QUESTIONS;
