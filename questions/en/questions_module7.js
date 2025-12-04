// Module 7: Livestock - 100 questions (10 levels x 10 questions)

const MODULE7_QUESTIONS = {
    "module7_level1": [
        {
            "question": "Which animal is a ruminant?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Horse",
                    "icon": "🐴",
                    "isCorrect": false
                },
                {
                    "text": "Cow",
                    "icon": "🐄",
                    "isCorrect": true
                },
                {
                    "text": "Chicken",
                    "icon": "🐔",
                    "isCorrect": false
                },
                {
                    "text": "Pig",
                    "icon": "🐷",
                    "isCorrect": false
                }
            ],
            "explanation": "A cow is a ruminant with a four-compartment stomach that allows it to digest grass."
        },
        {
            "question": "How many stomach compartments does a cow have?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "1",
                    "icon": "1️⃣",
                    "isCorrect": false
                },
                {
                    "text": "2",
                    "icon": "2️⃣",
                    "isCorrect": false
                },
                {
                    "text": "4",
                    "icon": "4️⃣",
                    "isCorrect": true
                },
                {
                    "text": "3",
                    "icon": "3️⃣",
                    "isCorrect": false
                }
            ],
            "explanation": "A cow has 4 stomach compartments: rumen, reticulum, omasum, and abomasum."
        },
        {
            "question": "What is the main product of dairy cows?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Wool",
                    "icon": "🧶",
                    "isCorrect": false
                },
                {
                    "text": "Eggs",
                    "icon": "🥚",
                    "isCorrect": false
                },
                {
                    "text": "Honey",
                    "icon": "🍯",
                    "isCorrect": false
                },
                {
                    "text": "Milk",
                    "icon": "🥛",
                    "isCorrect": true
                }
            ],
            "explanation": "Dairy cows are cattle raised primarily for milk production."
        },
        {
            "question": "Which animal lays eggs?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Pig",
                    "icon": "🐷",
                    "isCorrect": false
                },
                {
                    "text": "Cow",
                    "icon": "🐄",
                    "isCorrect": false
                },
                {
                    "text": "Chicken",
                    "icon": "🐔",
                    "isCorrect": true
                },
                {
                    "text": "Sheep",
                    "icon": "🐑",
                    "isCorrect": false
                }
            ],
            "explanation": "Chickens are poultry raised for egg and meat production."
        },
        {
            "question": "What is a piglet?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "A baby pig",
                    "icon": "🐷",
                    "isCorrect": true
                },
                {
                    "text": "A baby cow",
                    "icon": "🐄",
                    "isCorrect": false
                },
                {
                    "text": "A baby sheep",
                    "icon": "🐑",
                    "isCorrect": false
                },
                {
                    "text": "A baby goat",
                    "icon": "🐐",
                    "isCorrect": false
                }
            ],
            "explanation": "A piglet is a young pig whose mother is called a sow."
        },
        {
            "question": "What is wool made from?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Sheep's fleece",
                    "icon": "🐑",
                    "isCorrect": true
                },
                {
                    "text": "Cow's hide",
                    "icon": "🐄",
                    "isCorrect": false
                },
                {
                    "text": "Pig's bristles",
                    "icon": "🐷",
                    "isCorrect": false
                },
                {
                    "text": "Chicken feathers",
                    "icon": "🐔",
                    "isCorrect": false
                }
            ],
            "explanation": "Wool is obtained by shearing sheep, usually in spring."
        },
        {
            "question": "What is a baby cow called?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Foal",
                    "icon": "🐴",
                    "isCorrect": false
                },
                {
                    "text": "Kid",
                    "icon": "🐐",
                    "isCorrect": false
                },
                {
                    "text": "Lamb",
                    "icon": "🐑",
                    "isCorrect": false
                },
                {
                    "text": "Calf",
                    "icon": "🐄",
                    "isCorrect": true
                }
            ],
            "explanation": "A calf is a young cow up to approximately one year of age."
        },
        {
            "question": "What do bees produce?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Milk",
                    "icon": "🥛",
                    "isCorrect": false
                },
                {
                    "text": "Honey",
                    "icon": "🍯",
                    "isCorrect": true
                },
                {
                    "text": "Wool",
                    "icon": "🧶",
                    "isCorrect": false
                },
                {
                    "text": "Eggs",
                    "icon": "🥚",
                    "isCorrect": false
                }
            ],
            "explanation": "Bees produce honey from flower nectar, as well as wax and propolis."
        },
        {
            "question": "Which animal gives goat's milk?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Cow",
                    "icon": "🐄",
                    "isCorrect": false
                },
                {
                    "text": "Sheep",
                    "icon": "🐑",
                    "isCorrect": false
                },
                {
                    "text": "Goat",
                    "icon": "🐐",
                    "isCorrect": true
                },
                {
                    "text": "Horse",
                    "icon": "🐴",
                    "isCorrect": false
                }
            ],
            "explanation": "Goats produce goat's milk, which is easily digestible and suitable for allergy sufferers."
        },
        {
            "question": "What is a chicken coop?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Home for pigs",
                    "icon": "🐷",
                    "isCorrect": false
                },
                {
                    "text": "Place for cows",
                    "icon": "🐄",
                    "isCorrect": false
                },
                {
                    "text": "Hive for bees",
                    "icon": "🐝",
                    "isCorrect": false
                },
                {
                    "text": "Housing for chickens",
                    "icon": "🏠",
                    "isCorrect": true
                }
            ],
            "explanation": "A chicken coop is a building designed for raising poultry, mainly chickens."
        }
    ],
    "module7_level2": [
        {
            "question": "What is the basic feed for cows?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Fruit",
                    "icon": "🍎",
                    "isCorrect": false
                },
                {
                    "text": "Fish",
                    "icon": "🐟",
                    "isCorrect": false
                },
                {
                    "text": "Meat",
                    "icon": "🥩",
                    "isCorrect": false
                },
                {
                    "text": "Hay and grass",
                    "icon": "🌾",
                    "isCorrect": true
                }
            ],
            "explanation": "Cows are herbivores and their diet consists mainly of hay, grass, and silage."
        },
        {
            "question": "What is silage?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Frozen fruit",
                    "icon": "🍇",
                    "isCorrect": false
                },
                {
                    "text": "Smoked hay",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Dried meat",
                    "icon": "🥩",
                    "isCorrect": false
                },
                {
                    "text": "Fermented green forage",
                    "icon": "🌿",
                    "isCorrect": true
                }
            ],
            "explanation": "Silage is preserved green forage through anaerobic lactic acid fermentation."
        },
        {
            "question": "What do we feed chickens for better egg production?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Grain and calcium",
                    "icon": "🌾",
                    "isCorrect": true
                },
                {
                    "text": "Only water",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Meat",
                    "icon": "🥩",
                    "isCorrect": false
                },
                {
                    "text": "Sugar",
                    "icon": "🍬",
                    "isCorrect": false
                }
            ],
            "explanation": "Chickens need grains for energy and calcium for forming eggshells."
        },
        {
            "question": "Why do pigs need protein?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "For longer tail",
                    "icon": "🐷",
                    "isCorrect": false
                },
                {
                    "text": "For skin color",
                    "icon": "🎨",
                    "isCorrect": false
                },
                {
                    "text": "For muscle growth",
                    "icon": "💪",
                    "isCorrect": true
                },
                {
                    "text": "For better hearing",
                    "icon": "👂",
                    "isCorrect": false
                }
            ],
            "explanation": "Proteins are essential for muscle growth and overall pig development."
        },
        {
            "question": "What is concentrate feed?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Diluted water",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Only hay",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Empty straw",
                    "icon": "🥀",
                    "isCorrect": false
                },
                {
                    "text": "Feed rich in nutrients",
                    "icon": "🥣",
                    "isCorrect": true
                }
            ],
            "explanation": "Concentrates are feeds high in energy and protein (grains, meals)."
        },
        {
            "question": "How many times a day should pigs be fed?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Once a week",
                    "icon": "📅",
                    "isCorrect": false
                },
                {
                    "text": "Once a month",
                    "icon": "📆",
                    "isCorrect": false
                },
                {
                    "text": "10 times daily",
                    "icon": "🔟",
                    "isCorrect": false
                },
                {
                    "text": "2-3 times daily",
                    "icon": "🕐",
                    "isCorrect": true
                }
            ],
            "explanation": "Pigs should be fed regularly 2-3 times daily for optimal growth."
        },
        {
            "question": "Why is fresh water important for animals?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Not important",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "For digestion and health",
                    "icon": "💧",
                    "isCorrect": true
                },
                {
                    "text": "For better coat color",
                    "icon": "🎨",
                    "isCorrect": false
                },
                {
                    "text": "Only for bathing",
                    "icon": "🛁",
                    "isCorrect": false
                }
            ],
            "explanation": "Fresh water is essential for digestion, thermoregulation, and all vital functions."
        },
        {
            "question": "What is a mineral lick?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Type of mushroom",
                    "icon": "🍄",
                    "isCorrect": false
                },
                {
                    "text": "Farm machinery",
                    "icon": "🚜",
                    "isCorrect": false
                },
                {
                    "text": "Candy for children",
                    "icon": "🍭",
                    "isCorrect": false
                },
                {
                    "text": "Block of minerals for animals",
                    "icon": "🧂",
                    "isCorrect": true
                }
            ],
            "explanation": "A mineral lick is a block containing salt and minerals that animals lick."
        },
        {
            "question": "What feed do lambs need after weaning?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Quality hay and concentrates",
                    "icon": "🌾",
                    "isCorrect": true
                },
                {
                    "text": "Ice cream",
                    "icon": "🍦",
                    "isCorrect": false
                },
                {
                    "text": "Only water",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Meat",
                    "icon": "🥩",
                    "isCorrect": false
                }
            ],
            "explanation": "After weaning, lambs need quality hay and gradually concentrates for proper growth."
        },
        {
            "question": "What is TMR feeding?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Veterinary medicine",
                    "icon": "💊",
                    "isCorrect": false
                },
                {
                    "text": "Type of tractor",
                    "icon": "🚜",
                    "isCorrect": false
                },
                {
                    "text": "Type of grain",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Total Mixed Ration",
                    "icon": "🥗",
                    "isCorrect": true
                }
            ],
            "explanation": "TMR (Total Mixed Ration) is a complete mixture of all feeds in one serving."
        }
    ],
    "module7_level3": [
        {
            "question": "What is animal vaccination?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Immunization against diseases",
                    "icon": "💉",
                    "isCorrect": true
                },
                {
                    "text": "Feeding vitamins",
                    "icon": "💊",
                    "isCorrect": false
                },
                {
                    "text": "Cleaning the barn",
                    "icon": "🧹",
                    "isCorrect": false
                },
                {
                    "text": "Shearing fur",
                    "icon": "✂️",
                    "isCorrect": false
                }
            ],
            "explanation": "Vaccination is preventive immunization that protects animals from infectious diseases."
        },
        {
            "question": "Why is quarantine of new animals important?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "So they learn new tricks",
                    "icon": "🎪",
                    "isCorrect": false
                },
                {
                    "text": "Not important",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Prevention of disease spread",
                    "icon": "🔒",
                    "isCorrect": true
                },
                {
                    "text": "For better meat taste",
                    "icon": "🥩",
                    "isCorrect": false
                }
            ],
            "explanation": "Quarantine prevents introduction of diseases from newly received animals into the herd."
        },
        {
            "question": "What is deworming?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Training animals",
                    "icon": "🏋️",
                    "isCorrect": false
                },
                {
                    "text": "Adding worms to feed",
                    "icon": "🪱",
                    "isCorrect": false
                },
                {
                    "text": "Removal of parasites",
                    "icon": "🐛",
                    "isCorrect": true
                },
                {
                    "text": "Dyeing fur",
                    "icon": "🎨",
                    "isCorrect": false
                }
            ],
            "explanation": "Deworming is treatment against internal parasites (worms) using antiparasitics."
        },
        {
            "question": "What is the normal body temperature of a cow?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "20-25°C",
                    "icon": "❄️",
                    "isCorrect": false
                },
                {
                    "text": "45-50°C",
                    "icon": "🔥",
                    "isCorrect": false
                },
                {
                    "text": "38-39°C",
                    "icon": "🌡️",
                    "isCorrect": true
                },
                {
                    "text": "10-15°C",
                    "icon": "🥶",
                    "isCorrect": false
                }
            ],
            "explanation": "Normal body temperature for a cow is 38-39°C; higher indicates fever."
        },
        {
            "question": "What is mastitis?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Cattle breed",
                    "icon": "🏷️",
                    "isCorrect": false
                },
                {
                    "text": "Type of barn",
                    "icon": "🏠",
                    "isCorrect": false
                },
                {
                    "text": "Type of feed",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Udder infection",
                    "icon": "🐄",
                    "isCorrect": true
                }
            ],
            "explanation": "Mastitis is a painful udder inflammation that reduces milk quality and quantity."
        },
        {
            "question": "How do we recognize a healthy chicken?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Red comb, shiny feathers",
                    "icon": "🐔",
                    "isCorrect": true
                },
                {
                    "text": "Won't eat",
                    "icon": "🚫",
                    "isCorrect": false
                },
                {
                    "text": "Pale comb, sleepy",
                    "icon": "😴",
                    "isCorrect": false
                },
                {
                    "text": "Doesn't lay eggs",
                    "icon": "🥚",
                    "isCorrect": false
                }
            ],
            "explanation": "A healthy chicken has a bright red comb, shiny feathers, and is active."
        },
        {
            "question": "What is lameness in cattle?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Feeding method",
                    "icon": "🍽️",
                    "isCorrect": false
                },
                {
                    "text": "Type of milking",
                    "icon": "🥛",
                    "isCorrect": false
                },
                {
                    "text": "Type of dance",
                    "icon": "💃",
                    "isCorrect": false
                },
                {
                    "text": "Problem with legs",
                    "icon": "🦶",
                    "isCorrect": true
                }
            ],
            "explanation": "Lameness is a painful hoof or leg problem requiring veterinary care."
        },
        {
            "question": "Why are regular veterinary checkups important?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "For fun",
                    "icon": "🎉",
                    "isCorrect": false
                },
                {
                    "text": "Only for paperwork",
                    "icon": "📄",
                    "isCorrect": false
                },
                {
                    "text": "They're unnecessary",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Early disease detection",
                    "icon": "👨‍⚕️",
                    "isCorrect": true
                }
            ],
            "explanation": "Regular veterinary checkups allow early detection and treatment of health problems."
        },
        {
            "question": "What is farm biosecurity?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Type of insurance",
                    "icon": "📋",
                    "isCorrect": false
                },
                {
                    "text": "Protection against disease outbreaks",
                    "icon": "🛡️",
                    "isCorrect": true
                },
                {
                    "text": "Feed brand",
                    "icon": "🏷️",
                    "isCorrect": false
                },
                {
                    "text": "Type of tractor",
                    "icon": "🚜",
                    "isCorrect": false
                }
            ],
            "explanation": "Biosecurity includes measures to prevent disease introduction and spread on farm."
        },
        {
            "question": "How often should barns be cleaned?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Daily",
                    "icon": "📅",
                    "isCorrect": true
                },
                {
                    "text": "Only before inspections",
                    "icon": "👀",
                    "isCorrect": false
                },
                {
                    "text": "Once a year",
                    "icon": "📆",
                    "isCorrect": false
                },
                {
                    "text": "Never",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "Daily barn cleaning is essential for animal health and disease prevention."
        }
    ],
    "module7_level4": [
        {
            "question": "How long is a cow's pregnancy?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "3 months",
                    "icon": "🗓️",
                    "isCorrect": false
                },
                {
                    "text": "2 weeks",
                    "icon": "⏰",
                    "isCorrect": false
                },
                {
                    "text": "Approximately 9 months (283 days)",
                    "icon": "📅",
                    "isCorrect": true
                },
                {
                    "text": "1 year",
                    "icon": "📆",
                    "isCorrect": false
                }
            ],
            "explanation": "Cow pregnancy lasts approximately 283 days, about 9 months."
        },
        {
            "question": "What is insemination?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Artificial fertilization",
                    "icon": "💉",
                    "isCorrect": true
                },
                {
                    "text": "Feeding animals",
                    "icon": "🍽️",
                    "isCorrect": false
                },
                {
                    "text": "Disease treatment",
                    "icon": "💊",
                    "isCorrect": false
                },
                {
                    "text": "Shearing fur",
                    "icon": "✂️",
                    "isCorrect": false
                }
            ],
            "explanation": "Insemination is artificial fertilization of a female with sperm from a selected male."
        },
        {
            "question": "How many piglets can a sow have in one litter?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "1-2 piglets",
                    "icon": "1️⃣",
                    "isCorrect": false
                },
                {
                    "text": "50 piglets",
                    "icon": "5️⃣0️⃣",
                    "isCorrect": false
                },
                {
                    "text": "8-14 piglets",
                    "icon": "🐷",
                    "isCorrect": true
                },
                {
                    "text": "100 piglets",
                    "icon": "💯",
                    "isCorrect": false
                }
            ],
            "explanation": "Sows typically give birth to 8-14 piglets, sometimes more."
        },
        {
            "question": "What is estrus in a cow?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Type of feed",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Fertile period",
                    "icon": "💕",
                    "isCorrect": true
                },
                {
                    "text": "Disease",
                    "icon": "🤒",
                    "isCorrect": false
                },
                {
                    "text": "Type of barn",
                    "icon": "🏠",
                    "isCorrect": false
                }
            ],
            "explanation": "Estrus is the period when a cow is fertile and ready for fertilization."
        },
        {
            "question": "How long does a chicken sit on eggs?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "3 days",
                    "icon": "3️⃣",
                    "isCorrect": false
                },
                {
                    "text": "21 days",
                    "icon": "🥚",
                    "isCorrect": true
                },
                {
                    "text": "1 year",
                    "icon": "📆",
                    "isCorrect": false
                },
                {
                    "text": "6 months",
                    "icon": "📅",
                    "isCorrect": false
                }
            ],
            "explanation": "Incubation of chicken eggs takes 21 days before chicks hatch."
        },
        {
            "question": "What is raising young animals?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Selling animals",
                    "icon": "💰",
                    "isCorrect": false
                },
                {
                    "text": "Transporting animals",
                    "icon": "🚛",
                    "isCorrect": false
                },
                {
                    "text": "Care for young animals",
                    "icon": "👶",
                    "isCorrect": true
                },
                {
                    "text": "Slaughtering animals",
                    "icon": "🔪",
                    "isCorrect": false
                }
            ],
            "explanation": "Rearing is comprehensive care for young animals from birth to adulthood."
        },
        {
            "question": "Why is colostrum important for calves?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Has nice color",
                    "icon": "🎨",
                    "isCorrect": false
                },
                {
                    "text": "It's cheap",
                    "icon": "💰",
                    "isCorrect": false
                },
                {
                    "text": "Contains antibodies",
                    "icon": "🛡️",
                    "isCorrect": true
                },
                {
                    "text": "Not important",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "Colostrum is the first milk rich in antibodies essential for calf immunity."
        },
        {
            "question": "What is weaning?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Separating young from mother",
                    "icon": "👋",
                    "isCorrect": true
                },
                {
                    "text": "Type of disease",
                    "icon": "🤒",
                    "isCorrect": false
                },
                {
                    "text": "Type of feed",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Veterinary procedure",
                    "icon": "💉",
                    "isCorrect": false
                }
            ],
            "explanation": "Weaning is when a young animal stops nursing and starts eating solid food."
        },
        {
            "question": "At what age do hens start laying eggs?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Right after hatching",
                    "icon": "🐣",
                    "isCorrect": false
                },
                {
                    "text": "5 years",
                    "icon": "5️⃣",
                    "isCorrect": false
                },
                {
                    "text": "1 week",
                    "icon": "1️⃣",
                    "isCorrect": false
                },
                {
                    "text": "18-22 weeks",
                    "icon": "🐔",
                    "isCorrect": true
                }
            ],
            "explanation": "Hens typically start laying their first eggs at 18-22 weeks of age."
        },
        {
            "question": "What is a herd book?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Accounting book",
                    "icon": "📒",
                    "isCorrect": false
                },
                {
                    "text": "Cookbook",
                    "icon": "👨‍🍳",
                    "isCorrect": false
                },
                {
                    "text": "Record of animal ancestry",
                    "icon": "📚",
                    "isCorrect": true
                },
                {
                    "text": "Veterinary manual",
                    "icon": "📖",
                    "isCorrect": false
                }
            ],
            "explanation": "A herd book is an official record of breeding animals and their ancestry."
        }
    ],
    "module7_level5": [
        {
            "question": "What is loose housing?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Animals are in cages",
                    "icon": "🗄️",
                    "isCorrect": false
                },
                {
                    "text": "Outdoor keeping",
                    "icon": "🌳",
                    "isCorrect": false
                },
                {
                    "text": "Animals move freely",
                    "icon": "🐄",
                    "isCorrect": true
                },
                {
                    "text": "Animals are tied",
                    "icon": "⛓️",
                    "isCorrect": false
                }
            ],
            "explanation": "In loose housing, animals can move freely within the barn space."
        },
        {
            "question": "Why is barn ventilation important?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "For noise",
                    "icon": "🔊",
                    "isCorrect": false
                },
                {
                    "text": "For better lighting",
                    "icon": "💡",
                    "isCorrect": false
                },
                {
                    "text": "Not important",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Fresh air and gas removal",
                    "icon": "💨",
                    "isCorrect": true
                }
            ],
            "explanation": "Proper ventilation ensures fresh air supply and removes harmful gases."
        },
        {
            "question": "What is bedding?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Floor material for animals",
                    "icon": "🌾",
                    "isCorrect": true
                },
                {
                    "text": "Type of feed",
                    "icon": "🍽️",
                    "isCorrect": false
                },
                {
                    "text": "Veterinary product",
                    "icon": "💊",
                    "isCorrect": false
                },
                {
                    "text": "Type of fence",
                    "icon": "🏗️",
                    "isCorrect": false
                }
            ],
            "explanation": "Bedding (straw, sawdust) provides animals with a soft and dry lying area."
        },
        {
            "question": "What is the ideal temperature in a pig barn?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "40°C",
                    "icon": "🔥",
                    "isCorrect": false
                },
                {
                    "text": "-10°C",
                    "icon": "🥶",
                    "isCorrect": false
                },
                {
                    "text": "18-22°C for adult pigs",
                    "icon": "🌡️",
                    "isCorrect": true
                },
                {
                    "text": "0°C",
                    "icon": "❄️",
                    "isCorrect": false
                }
            ],
            "explanation": "Adult pigs need 18-22°C, piglets need higher (28-32°C)."
        },
        {
            "question": "What is a water drinker?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Device for water supply",
                    "icon": "💧",
                    "isCorrect": true
                },
                {
                    "text": "Type of fence",
                    "icon": "🏗️",
                    "isCorrect": false
                },
                {
                    "text": "Veterinary tool",
                    "icon": "🔧",
                    "isCorrect": false
                },
                {
                    "text": "Feed dispenser",
                    "icon": "🍽️",
                    "isCorrect": false
                }
            ],
            "explanation": "A water drinker is a device allowing animals access to fresh water."
        },
        {
            "question": "Why do chickens need perches?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "For laying eggs",
                    "icon": "🥚",
                    "isCorrect": false
                },
                {
                    "text": "They don't need them",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "For feeding",
                    "icon": "🍽️",
                    "isCorrect": false
                },
                {
                    "text": "For resting and sleeping",
                    "icon": "😴",
                    "isCorrect": true
                }
            ],
            "explanation": "Chickens naturally rest on elevated places - perches."
        },
        {
            "question": "What is individual housing?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Free range",
                    "icon": "🌳",
                    "isCorrect": false
                },
                {
                    "text": "Transport crate",
                    "icon": "🚛",
                    "isCorrect": false
                },
                {
                    "text": "Common pen",
                    "icon": "🏟️",
                    "isCorrect": false
                },
                {
                    "text": "Individual pens for animals",
                    "icon": "📦",
                    "isCorrect": true
                }
            ],
            "explanation": "In individual housing, each animal has its own separate space."
        },
        {
            "question": "Why is lighting important in a chicken coop?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only for humans",
                    "icon": "👁️",
                    "isCorrect": false
                },
                {
                    "text": "Not important",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "For beauty",
                    "icon": "✨",
                    "isCorrect": false
                },
                {
                    "text": "Affects egg production",
                    "icon": "💡",
                    "isCorrect": true
                }
            ],
            "explanation": "Light duration (16 hours) stimulates hens to produce more eggs."
        },
        {
            "question": "What is an outdoor run?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Fenced outdoor space",
                    "icon": "🌳",
                    "isCorrect": true
                },
                {
                    "text": "Inside the barn",
                    "icon": "🏠",
                    "isCorrect": false
                },
                {
                    "text": "Feed trough",
                    "icon": "🍽️",
                    "isCorrect": false
                },
                {
                    "text": "Transport vehicle",
                    "icon": "🚛",
                    "isCorrect": false
                }
            ],
            "explanation": "An outdoor run is a fenced outdoor area where animals can move around."
        },
        {
            "question": "What are the space requirements for dairy cows?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "0.5 m² per cow",
                    "icon": "📏",
                    "isCorrect": false
                },
                {
                    "text": "100 m² per cow",
                    "icon": "🏟️",
                    "isCorrect": false
                },
                {
                    "text": "Space doesn't matter",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Minimum 6-8 m² per cow",
                    "icon": "📐",
                    "isCorrect": true
                }
            ],
            "explanation": "Dairy cows need adequate space (6-8 m²) for movement and welfare."
        }
    ],
    "module7_level6": [
        {
            "question": "How many times a day are cows usually milked?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Once a week",
                    "icon": "📅",
                    "isCorrect": false
                },
                {
                    "text": "Once a month",
                    "icon": "📆",
                    "isCorrect": false
                },
                {
                    "text": "10 times daily",
                    "icon": "🔟",
                    "isCorrect": false
                },
                {
                    "text": "2 times daily",
                    "icon": "2️⃣",
                    "isCorrect": true
                }
            ],
            "explanation": "Cows are typically milked 2 times daily, some high-producing cows even 3 times."
        },
        {
            "question": "What is a milking parlor?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Calving area",
                    "icon": "👶",
                    "isCorrect": false
                },
                {
                    "text": "Place for machine milking",
                    "icon": "🏭",
                    "isCorrect": true
                },
                {
                    "text": "Milk storage",
                    "icon": "🥛",
                    "isCorrect": false
                },
                {
                    "text": "Feeding area",
                    "icon": "🍽️",
                    "isCorrect": false
                }
            ],
            "explanation": "A milking parlor is a special area equipped for hygienic and efficient milking."
        },
        {
            "question": "Why is milking hygiene important?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Not important",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Mastitis prevention and milk quality",
                    "icon": "🧼",
                    "isCorrect": true
                },
                {
                    "text": "For smell",
                    "icon": "👃",
                    "isCorrect": false
                },
                {
                    "text": "Only for appearance",
                    "icon": "✨",
                    "isCorrect": false
                }
            ],
            "explanation": "Cleanliness during milking prevents udder infection and milk contamination."
        },
        {
            "question": "What is lactation?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Type of milking machine",
                    "icon": "⚙️",
                    "isCorrect": false
                },
                {
                    "text": "Udder disease",
                    "icon": "🤒",
                    "isCorrect": false
                },
                {
                    "text": "Type of feed",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Milk production period",
                    "icon": "🥛",
                    "isCorrect": true
                }
            ],
            "explanation": "Lactation is the period when a cow produces milk after calving."
        },
        {
            "question": "How much milk does a good dairy cow give daily?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "25-40 liters",
                    "icon": "🥛",
                    "isCorrect": true
                },
                {
                    "text": "100-200 liters",
                    "icon": "🛢️",
                    "isCorrect": false
                },
                {
                    "text": "0.5 liters",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "1-2 liters",
                    "icon": "🫗",
                    "isCorrect": false
                }
            ],
            "explanation": "Modern dairy cows produce an average of 25-40 liters of milk daily."
        },
        {
            "question": "What is drying off a cow?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Stopping milking before calving",
                    "icon": "⏸️",
                    "isCorrect": true
                },
                {
                    "text": "Dehydrating the cow",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Disease treatment",
                    "icon": "💊",
                    "isCorrect": false
                },
                {
                    "text": "Drying hay",
                    "icon": "🌾",
                    "isCorrect": false
                }
            ],
            "explanation": "Drying off is a period before calving when milking stops for udder recovery."
        },
        {
            "question": "What is a milk tank?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Feed trough",
                    "icon": "🍽️",
                    "isCorrect": false
                },
                {
                    "text": "Transport vehicle",
                    "icon": "🚛",
                    "isCorrect": false
                },
                {
                    "text": "Military vehicle",
                    "icon": "🪖",
                    "isCorrect": false
                },
                {
                    "text": "Cooling tank for milk",
                    "icon": "🧊",
                    "isCorrect": true
                }
            ],
            "explanation": "A milk tank is a cooling container that keeps milk at 4°C."
        },
        {
            "question": "What temperature is milk cooled to?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "37°C",
                    "icon": "🔥",
                    "isCorrect": false
                },
                {
                    "text": "-20°C",
                    "icon": "❄️",
                    "isCorrect": false
                },
                {
                    "text": "4°C",
                    "icon": "🌡️",
                    "isCorrect": true
                },
                {
                    "text": "20°C",
                    "icon": "🌞",
                    "isCorrect": false
                }
            ],
            "explanation": "Milk is cooled to 4°C immediately after milking to preserve quality."
        },
        {
            "question": "What is robotic milking?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Milking into bucket",
                    "icon": "🪣",
                    "isCorrect": false
                },
                {
                    "text": "Night milking",
                    "icon": "🌙",
                    "isCorrect": false
                },
                {
                    "text": "Hand milking",
                    "icon": "✋",
                    "isCorrect": false
                },
                {
                    "text": "Automatic milking without operator",
                    "icon": "🤖",
                    "isCorrect": true
                }
            ],
            "explanation": "A milking robot allows cows to be milked automatically whenever they want."
        },
        {
            "question": "What is buttermilk?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Cream",
                    "icon": "🥛",
                    "isCorrect": false
                },
                {
                    "text": "Cheese",
                    "icon": "🧀",
                    "isCorrect": false
                },
                {
                    "text": "Byproduct of butter making",
                    "icon": "🧈",
                    "isCorrect": true
                },
                {
                    "text": "Whole milk",
                    "icon": "🍼",
                    "isCorrect": false
                }
            ],
            "explanation": "Buttermilk is the liquid remaining after churning butter, rich in protein."
        }
    ],
    "module7_level7": [
        {
            "question": "What is a layer hen?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Chicken raised for eggs",
                    "icon": "🥚",
                    "isCorrect": true
                },
                {
                    "text": "Chicken for meat",
                    "icon": "🍗",
                    "isCorrect": false
                },
                {
                    "text": "Rooster",
                    "icon": "🐓",
                    "isCorrect": false
                },
                {
                    "text": "Chick",
                    "icon": "🐣",
                    "isCorrect": false
                }
            ],
            "explanation": "Layer hens are chickens of specialized breeds for egg production."
        },
        {
            "question": "How many eggs does a good layer hen produce per year?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "280-320 eggs",
                    "icon": "🥚",
                    "isCorrect": true
                },
                {
                    "text": "10-20 eggs",
                    "icon": "🔟",
                    "isCorrect": false
                },
                {
                    "text": "1 egg",
                    "icon": "1️⃣",
                    "isCorrect": false
                },
                {
                    "text": "1000 eggs",
                    "icon": "💯",
                    "isCorrect": false
                }
            ],
            "explanation": "Modern layer hens produce 280-320 eggs per year."
        },
        {
            "question": "What is a broiler?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Duck",
                    "icon": "🦆",
                    "isCorrect": false
                },
                {
                    "text": "Chicken for meat",
                    "icon": "🍗",
                    "isCorrect": true
                },
                {
                    "text": "Layer hen",
                    "icon": "🥚",
                    "isCorrect": false
                },
                {
                    "text": "Rooster",
                    "icon": "🐓",
                    "isCorrect": false
                }
            ],
            "explanation": "A broiler is a fast-growing chicken raised for meat production."
        },
        {
            "question": "How long until a broiler is ready for slaughter?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "5-7 weeks",
                    "icon": "📅",
                    "isCorrect": true
                },
                {
                    "text": "1 year",
                    "icon": "📆",
                    "isCorrect": false
                },
                {
                    "text": "5 years",
                    "icon": "🗓️",
                    "isCorrect": false
                },
                {
                    "text": "1 day",
                    "icon": "☀️",
                    "isCorrect": false
                }
            ],
            "explanation": "Broilers reach slaughter weight (2-2.5 kg) in 5-7 weeks."
        },
        {
            "question": "What is peak egg production?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Type of feed",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Chicken disease",
                    "icon": "🤒",
                    "isCorrect": false
                },
                {
                    "text": "Period of highest egg production",
                    "icon": "📈",
                    "isCorrect": true
                },
                {
                    "text": "End of laying",
                    "icon": "📉",
                    "isCorrect": false
                }
            ],
            "explanation": "Peak production is the period when layers produce the most eggs."
        },
        {
            "question": "Why do hens need nest boxes?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "For feeding",
                    "icon": "🍽️",
                    "isCorrect": false
                },
                {
                    "text": "They don't need them",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "For privacy while laying",
                    "icon": "🪺",
                    "isCorrect": true
                },
                {
                    "text": "For sleeping",
                    "icon": "😴",
                    "isCorrect": false
                }
            ],
            "explanation": "Nest boxes provide hens with peace and privacy for laying eggs."
        },
        {
            "question": "What is molting?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Disease",
                    "icon": "🤒",
                    "isCorrect": false
                },
                {
                    "text": "Feather shedding",
                    "icon": "🪶",
                    "isCorrect": true
                },
                {
                    "text": "Housing method",
                    "icon": "🏠",
                    "isCorrect": false
                },
                {
                    "text": "Type of feed",
                    "icon": "🌾",
                    "isCorrect": false
                }
            ],
            "explanation": "Molting is natural annual feather replacement, during which hens lay fewer eggs."
        },
        {
            "question": "What is a hatchery?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Egg storage",
                    "icon": "📦",
                    "isCorrect": false
                },
                {
                    "text": "Equipment for hatching eggs",
                    "icon": "🐣",
                    "isCorrect": true
                },
                {
                    "text": "Feeder",
                    "icon": "🍽️",
                    "isCorrect": false
                },
                {
                    "text": "Chicken coop",
                    "icon": "🏠",
                    "isCorrect": false
                }
            ],
            "explanation": "A hatchery is equipment with controlled temperature and humidity for artificial chick rearing."
        },
        {
            "question": "What is the ideal hatchery temperature?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "37.5-37.8°C",
                    "icon": "🌡️",
                    "isCorrect": true
                },
                {
                    "text": "20°C",
                    "icon": "❄️",
                    "isCorrect": false
                },
                {
                    "text": "0°C",
                    "icon": "🥶",
                    "isCorrect": false
                },
                {
                    "text": "50°C",
                    "icon": "🔥",
                    "isCorrect": false
                }
            ],
            "explanation": "Successful hatching requires maintaining temperature of 37.5-37.8°C."
        },
        {
            "question": "What is cage housing for layers?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Free range",
                    "icon": "🌳",
                    "isCorrect": false
                },
                {
                    "text": "Floor housing",
                    "icon": "🏠",
                    "isCorrect": false
                },
                {
                    "text": "Keeping in enriched cages",
                    "icon": "🗄️",
                    "isCorrect": true
                },
                {
                    "text": "Organic housing",
                    "icon": "🌿",
                    "isCorrect": false
                }
            ],
            "explanation": "Cage housing uses enriched cages with perches and nests for layers."
        }
    ],
    "module7_level8": [
        {
            "question": "What is a piggery?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Barn for pigs",
                    "icon": "🐷",
                    "isCorrect": true
                },
                {
                    "text": "Sheep barn",
                    "icon": "🐑",
                    "isCorrect": false
                },
                {
                    "text": "Chicken coop",
                    "icon": "🐔",
                    "isCorrect": false
                },
                {
                    "text": "Cow barn",
                    "icon": "🐄",
                    "isCorrect": false
                }
            ],
            "explanation": "A piggery is a specialized barn for raising pigs."
        },
        {
            "question": "How long is a sow's pregnancy?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "2 weeks",
                    "icon": "⏰",
                    "isCorrect": false
                },
                {
                    "text": "30 days",
                    "icon": "📆",
                    "isCorrect": false
                },
                {
                    "text": "1 year",
                    "icon": "🗓️",
                    "isCorrect": false
                },
                {
                    "text": "114 days (3 months, 3 weeks, 3 days)",
                    "icon": "📅",
                    "isCorrect": true
                }
            ],
            "explanation": "Sow pregnancy lasts approximately 114 days - easy to remember as 3-3-3."
        },
        {
            "question": "What is piglet castration?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Weighing",
                    "icon": "⚖️",
                    "isCorrect": false
                },
                {
                    "text": "Removal of reproductive glands",
                    "icon": "✂️",
                    "isCorrect": true
                },
                {
                    "text": "Tagging",
                    "icon": "🏷️",
                    "isCorrect": false
                },
                {
                    "text": "Vaccination",
                    "icon": "💉",
                    "isCorrect": false
                }
            ],
            "explanation": "Castration of male piglets is done to prevent meat odor (boar taint)."
        },
        {
            "question": "What is a farrowing crate?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Special pen for sow giving birth",
                    "icon": "👶",
                    "isCorrect": true
                },
                {
                    "text": "Transport crate",
                    "icon": "🚛",
                    "isCorrect": false
                },
                {
                    "text": "Veterinary clinic",
                    "icon": "🏥",
                    "isCorrect": false
                },
                {
                    "text": "Feeder",
                    "icon": "🍽️",
                    "isCorrect": false
                }
            ],
            "explanation": "A farrowing crate protects piglets from being crushed by the sow."
        },
        {
            "question": "What is a nursery for piglets?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Farrowing area",
                    "icon": "👶",
                    "isCorrect": false
                },
                {
                    "text": "Finishing barn",
                    "icon": "🍖",
                    "isCorrect": false
                },
                {
                    "text": "Space for piglets after weaning",
                    "icon": "🐷",
                    "isCorrect": true
                },
                {
                    "text": "Slaughterhouse",
                    "icon": "🔪",
                    "isCorrect": false
                }
            ],
            "explanation": "In the nursery, piglets stay from weaning (28 days) until moving to finishing."
        },
        {
            "question": "What is the ideal slaughter weight for pigs?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "5 kg",
                    "icon": "5️⃣",
                    "isCorrect": false
                },
                {
                    "text": "110-120 kg",
                    "icon": "⚖️",
                    "isCorrect": true
                },
                {
                    "text": "10-20 kg",
                    "icon": "🔟",
                    "isCorrect": false
                },
                {
                    "text": "500 kg",
                    "icon": "🐘",
                    "isCorrect": false
                }
            ],
            "explanation": "Optimal slaughter weight for pigs is 110-120 kg live weight."
        },
        {
            "question": "What is a boar?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Male pig",
                    "icon": "🐗",
                    "isCorrect": true
                },
                {
                    "text": "Young pig",
                    "icon": "🐽",
                    "isCorrect": false
                },
                {
                    "text": "Female pig",
                    "icon": "🐷",
                    "isCorrect": false
                },
                {
                    "text": "Castrated male",
                    "icon": "✂️",
                    "isCorrect": false
                }
            ],
            "explanation": "A boar is an uncastrated adult male pig used for breeding."
        },
        {
            "question": "Why do pigs need a wallow?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "For fun",
                    "icon": "🎉",
                    "isCorrect": false
                },
                {
                    "text": "They don't need it",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "For drinking",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "For body cooling",
                    "icon": "🌊",
                    "isCorrect": true
                }
            ],
            "explanation": "Pigs don't have sweat glands, so they wallow in mud to cool down."
        },
        {
            "question": "What is pig finishing?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Transport",
                    "icon": "🚛",
                    "isCorrect": false
                },
                {
                    "text": "Reproduction",
                    "icon": "💕",
                    "isCorrect": false
                },
                {
                    "text": "Intensive growth period before slaughter",
                    "icon": "📈",
                    "isCorrect": true
                },
                {
                    "text": "Disease treatment",
                    "icon": "💊",
                    "isCorrect": false
                }
            ],
            "explanation": "Finishing is the period from 25-30 kg to slaughter weight of 110-120 kg."
        },
        {
            "question": "What pig breeds do you know?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Holstein, Jersey",
                    "icon": "🐄",
                    "isCorrect": false
                },
                {
                    "text": "Large White, Landrace",
                    "icon": "🐷",
                    "isCorrect": true
                },
                {
                    "text": "Suffolk, Merino",
                    "icon": "🐑",
                    "isCorrect": false
                },
                {
                    "text": "Leghorn, Rhode Island",
                    "icon": "🐔",
                    "isCorrect": false
                }
            ],
            "explanation": "Large White and Landrace are the most common meat pig breeds."
        }
    ],
    "module7_level9": [
        {
            "question": "What is shearing sheep?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Treating",
                    "icon": "💊",
                    "isCorrect": false
                },
                {
                    "text": "Cutting wool",
                    "icon": "✂️",
                    "isCorrect": true
                },
                {
                    "text": "Milking",
                    "icon": "🥛",
                    "isCorrect": false
                },
                {
                    "text": "Feeding",
                    "icon": "🍽️",
                    "isCorrect": false
                }
            ],
            "explanation": "Shearing is regular cutting of wool from sheep, usually in spring."
        },
        {
            "question": "How much wool does a sheep give per year?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "100 kg",
                    "icon": "💯",
                    "isCorrect": false
                },
                {
                    "text": "50 kg",
                    "icon": "5️⃣0️⃣",
                    "isCorrect": false
                },
                {
                    "text": "4-8 kg",
                    "icon": "🧶",
                    "isCorrect": true
                },
                {
                    "text": "0.1 kg",
                    "icon": "🔢",
                    "isCorrect": false
                }
            ],
            "explanation": "An average sheep gives 4-8 kg of wool per year depending on breed."
        },
        {
            "question": "What is a lamb?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Young goat",
                    "icon": "🐐",
                    "isCorrect": false
                },
                {
                    "text": "Adult sheep",
                    "icon": "🐏",
                    "isCorrect": false
                },
                {
                    "text": "Male sheep",
                    "icon": "🐏",
                    "isCorrect": false
                },
                {
                    "text": "Young sheep",
                    "icon": "🐑",
                    "isCorrect": true
                }
            ],
            "explanation": "A lamb is a young sheep up to approximately one year of age."
        },
        {
            "question": "What is a ram?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Type of goat",
                    "icon": "🐐",
                    "isCorrect": false
                },
                {
                    "text": "Male sheep",
                    "icon": "🐏",
                    "isCorrect": true
                },
                {
                    "text": "Young sheep",
                    "icon": "🐑",
                    "isCorrect": false
                },
                {
                    "text": "Female sheep",
                    "icon": "🐑",
                    "isCorrect": false
                }
            ],
            "explanation": "A ram is an adult male sheep used for breeding."
        },
        {
            "question": "Why are goats good for landscape maintenance?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "They produce a lot of milk",
                    "icon": "🥛",
                    "isCorrect": false
                },
                {
                    "text": "They're beautiful",
                    "icon": "✨",
                    "isCorrect": false
                },
                {
                    "text": "They're not good",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "They graze even shrubs and weeds",
                    "icon": "🌿",
                    "isCorrect": true
                }
            ],
            "explanation": "Goats are hardy and graze plants that other animals refuse."
        },
        {
            "question": "What is a kid?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Young goat",
                    "icon": "🐐",
                    "isCorrect": true
                },
                {
                    "text": "Young sheep",
                    "icon": "🐑",
                    "isCorrect": false
                },
                {
                    "text": "Adult goat",
                    "icon": "🐐",
                    "isCorrect": false
                },
                {
                    "text": "Male goat",
                    "icon": "🐐",
                    "isCorrect": false
                }
            ],
            "explanation": "A kid is a young goat, prized for its tender meat."
        },
        {
            "question": "How long is a sheep's pregnancy?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "2 weeks",
                    "icon": "⏰",
                    "isCorrect": false
                },
                {
                    "text": "Approximately 5 months (150 days)",
                    "icon": "📅",
                    "isCorrect": true
                },
                {
                    "text": "1 month",
                    "icon": "📆",
                    "isCorrect": false
                },
                {
                    "text": "1 year",
                    "icon": "🗓️",
                    "isCorrect": false
                }
            ],
            "explanation": "Sheep pregnancy lasts approximately 150 days, about 5 months."
        },
        {
            "question": "What is sheep's cheese?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Plant-based cheese",
                    "icon": "🌿",
                    "isCorrect": false
                },
                {
                    "text": "Cheese from cow's milk",
                    "icon": "🥛",
                    "isCorrect": false
                },
                {
                    "text": "Cheese from goat's milk",
                    "icon": "🐐",
                    "isCorrect": false
                },
                {
                    "text": "Cheese from sheep's milk",
                    "icon": "🧀",
                    "isCorrect": true
                }
            ],
            "explanation": "Sheep's cheese (e.g., feta, pecorino) is made from sheep's milk."
        },
        {
            "question": "What is pastoralism?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Raising in cages",
                    "icon": "🗄️",
                    "isCorrect": false
                },
                {
                    "text": "Raising animals on pasture",
                    "icon": "🌳",
                    "isCorrect": true
                },
                {
                    "text": "Aquaculture",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Raising in barns",
                    "icon": "🏭",
                    "isCorrect": false
                }
            ],
            "explanation": "Pastoralism is a way of raising animals where they graze on open areas."
        },
        {
            "question": "Which sheep breeds are most common?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Holstein, Jersey",
                    "icon": "🐄",
                    "isCorrect": false
                },
                {
                    "text": "Suffolk, Merino",
                    "icon": "🐑",
                    "isCorrect": true
                },
                {
                    "text": "Landrace, Duroc",
                    "icon": "🐷",
                    "isCorrect": false
                },
                {
                    "text": "Leghorn, Plymouth",
                    "icon": "🐔",
                    "isCorrect": false
                }
            ],
            "explanation": "Suffolk for meat and Merino for wool are popular sheep breeds."
        }
    ],
    "module7_level10": [
        {
            "question": "What is animal welfare?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Type of feed",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Economics of farming",
                    "icon": "💰",
                    "isCorrect": false
                },
                {
                    "text": "Meat production",
                    "icon": "🥩",
                    "isCorrect": false
                },
                {
                    "text": "Well-being and quality of life",
                    "icon": "😊",
                    "isCorrect": true
                }
            ],
            "explanation": "Welfare means ensuring good living conditions and well-being for animals."
        },
        {
            "question": "How many freedoms do animals have according to welfare?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "None",
                    "icon": "0️⃣",
                    "isCorrect": false
                },
                {
                    "text": "1 freedom",
                    "icon": "1️⃣",
                    "isCorrect": false
                },
                {
                    "text": "100 freedoms",
                    "icon": "💯",
                    "isCorrect": false
                },
                {
                    "text": "5 freedoms",
                    "icon": "5️⃣",
                    "isCorrect": true
                }
            ],
            "explanation": "5 freedoms: from hunger, discomfort, pain, to express behavior, from fear."
        },
        {
            "question": "What is organic farming?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Laboratory farming",
                    "icon": "🔬",
                    "isCorrect": false
                },
                {
                    "text": "Intensive factory farming",
                    "icon": "🏭",
                    "isCorrect": false
                },
                {
                    "text": "Ecological farming following regulations",
                    "icon": "🌿",
                    "isCorrect": true
                },
                {
                    "text": "Genetically modified animals",
                    "icon": "🧬",
                    "isCorrect": false
                }
            ],
            "explanation": "Organic farming follows strict rules for welfare, feeding, and housing."
        },
        {
            "question": "Why is free range important?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Natural animal behavior",
                    "icon": "🌳",
                    "isCorrect": true
                },
                {
                    "text": "Faster growth",
                    "icon": "📈",
                    "isCorrect": false
                },
                {
                    "text": "Not important",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Cheaper farming",
                    "icon": "💰",
                    "isCorrect": false
                }
            ],
            "explanation": "Free range allows animals natural movement and behavior."
        },
        {
            "question": "What is humane slaughter?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Slaughter minimizing stress and pain",
                    "icon": "💚",
                    "isCorrect": true
                },
                {
                    "text": "Home slaughter",
                    "icon": "🏠",
                    "isCorrect": false
                },
                {
                    "text": "Cheap slaughter",
                    "icon": "💰",
                    "isCorrect": false
                },
                {
                    "text": "Fast slaughter",
                    "icon": "⚡",
                    "isCorrect": false
                }
            ],
            "explanation": "Humane slaughter ensures quick and painless death of the animal."
        },
        {
            "question": "What is stunning before slaughter?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Putting to sleep",
                    "icon": "😴",
                    "isCorrect": false
                },
                {
                    "text": "Feeding",
                    "icon": "🍽️",
                    "isCorrect": false
                },
                {
                    "text": "Rendering unconscious",
                    "icon": "😵",
                    "isCorrect": true
                },
                {
                    "text": "Transport",
                    "icon": "🚛",
                    "isCorrect": false
                }
            ],
            "explanation": "Stunning ensures the animal doesn't feel pain during slaughter."
        },
        {
            "question": "Why is social contact important for animals?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "For faster growth",
                    "icon": "📈",
                    "isCorrect": false
                },
                {
                    "text": "Not important",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "They are herd animals",
                    "icon": "👥",
                    "isCorrect": true
                },
                {
                    "text": "For better meat taste",
                    "icon": "🥩",
                    "isCorrect": false
                }
            ],
            "explanation": "Most farm animals are social and need contact with others."
        },
        {
            "question": "What is environmental enrichment?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Elements for natural behavior",
                    "icon": "🎯",
                    "isCorrect": true
                },
                {
                    "text": "Warmer barn",
                    "icon": "🔥",
                    "isCorrect": false
                },
                {
                    "text": "More feed",
                    "icon": "🍽️",
                    "isCorrect": false
                },
                {
                    "text": "More animals",
                    "icon": "📈",
                    "isCorrect": false
                }
            ],
            "explanation": "Environmental enrichment includes toys, bedding for scratching, etc."
        },
        {
            "question": "What is meat traceability?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Tracking price",
                    "icon": "💰",
                    "isCorrect": false
                },
                {
                    "text": "Tracking product origin",
                    "icon": "🔍",
                    "isCorrect": true
                },
                {
                    "text": "Tracking color",
                    "icon": "🎨",
                    "isCorrect": false
                },
                {
                    "text": "Tracking weight",
                    "icon": "⚖️",
                    "isCorrect": false
                }
            ],
            "explanation": "Traceability allows tracking meat origin from farm to consumer."
        },
        {
            "question": "Why is farmer education about welfare important?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only for certification",
                    "icon": "📜",
                    "isCorrect": false
                },
                {
                    "text": "Better care for animals",
                    "icon": "📚",
                    "isCorrect": true
                },
                {
                    "text": "Not important",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "For higher subsidies",
                    "icon": "💶",
                    "isCorrect": false
                }
            ],
            "explanation": "Educated farmers better understand animal needs and provide better care."
        }
    ]
};

window.MODULE7_QUESTIONS = MODULE7_QUESTIONS;
