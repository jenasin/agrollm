// Module 5: Machinery - 100 questions (10 levels x 10 questions)

const MODULE5_QUESTIONS = {
    "module5_level1": [
        {
            "question": "What is a tractor?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "A passenger car",
                    "icon": "🚗",
                    "isCorrect": false
                },
                {
                    "text": "Basic pulling machine in agriculture",
                    "icon": "🚜",
                    "isCorrect": true
                },
                {
                    "text": "A ship",
                    "icon": "🚢",
                    "isCorrect": false
                },
                {
                    "text": "An airplane",
                    "icon": "✈️",
                    "isCorrect": false
                }
            ],
            "explanation": "A tractor is a universal machine for pulling implements and powering machinery."
        },
        {
            "question": "Tractor power is measured in:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Meters",
                    "icon": "📏",
                    "isCorrect": false
                },
                {
                    "text": "Horsepower (kW or HP)",
                    "icon": "🐴",
                    "isCorrect": true
                },
                {
                    "text": "Liters",
                    "icon": "🥛",
                    "isCorrect": false
                },
                {
                    "text": "Kilograms",
                    "icon": "⚖️",
                    "isCorrect": false
                }
            ],
            "explanation": "Power indicates the tractor's ability to perform work."
        },
        {
            "question": "PTO (Power Take-Off) is used for:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Braking",
                    "icon": "🛑",
                    "isCorrect": false
                },
                {
                    "text": "Transferring power to attached machines",
                    "icon": "⚙️",
                    "isCorrect": true
                },
                {
                    "text": "Lighting",
                    "icon": "💡",
                    "isCorrect": false
                },
                {
                    "text": "Steering",
                    "icon": "🎮",
                    "isCorrect": false
                }
            ],
            "explanation": "PTO transfers rotational power from the engine to powered implements."
        },
        {
            "question": "Hydraulics in a tractor:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Does nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Only lubricates",
                    "icon": "🛢️",
                    "isCorrect": false
                },
                {
                    "text": "Controls implements and lifting",
                    "icon": "🔧",
                    "isCorrect": true
                },
                {
                    "text": "Only cools the engine",
                    "icon": "❄️",
                    "isCorrect": false
                }
            ],
            "explanation": "The hydraulic system enables control of attached implements."
        },
        {
            "question": "Three-point hitch is used for:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Refueling",
                    "icon": "⛽",
                    "isCorrect": false
                },
                {
                    "text": "Lighting",
                    "icon": "💡",
                    "isCorrect": false
                },
                {
                    "text": "Attaching implements to the tractor",
                    "icon": "🔗",
                    "isCorrect": true
                },
                {
                    "text": "Driver seating",
                    "icon": "🪑",
                    "isCorrect": false
                }
            ],
            "explanation": "Three-point hitch is a standardized system for attaching implements."
        },
        {
            "question": "Differential in a tractor:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Allows different wheel speeds in turns",
                    "icon": "🔄",
                    "isCorrect": true
                },
                {
                    "text": "Does nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Increases power",
                    "icon": "📈",
                    "isCorrect": false
                },
                {
                    "text": "Reduces consumption",
                    "icon": "📉",
                    "isCorrect": false
                }
            ],
            "explanation": "Differential distributes driving power between wheels."
        },
        {
            "question": "4x4 drive means:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "4 engines",
                    "icon": "⚙️",
                    "isCorrect": false
                },
                {
                    "text": "4 drivers",
                    "icon": "👥",
                    "isCorrect": false
                },
                {
                    "text": "All four wheels driven",
                    "icon": "🚜",
                    "isCorrect": true
                },
                {
                    "text": "4 tractors",
                    "icon": "4️⃣",
                    "isCorrect": false
                }
            ],
            "explanation": "All-wheel drive improves traction in difficult terrain."
        },
        {
            "question": "Tractor cab provides:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only shade",
                    "icon": "🌤️",
                    "isCorrect": false
                },
                {
                    "text": "Protection and comfort for operator",
                    "icon": "🏠",
                    "isCorrect": true
                },
                {
                    "text": "Only visibility",
                    "icon": "👀",
                    "isCorrect": false
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "Modern cabs have air conditioning, filtration, and ROPS protection."
        },
        {
            "question": "GPS in a tractor is used for:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only maps",
                    "icon": "🗺️",
                    "isCorrect": false
                },
                {
                    "text": "Precise navigation and automatic steering",
                    "icon": "📍",
                    "isCorrect": true
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Phone calls",
                    "icon": "📞",
                    "isCorrect": false
                }
            ],
            "explanation": "GPS enables precision farming and autosteering."
        },
        {
            "question": "What fuel do tractors use?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Water",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Only electricity",
                    "icon": "⚡",
                    "isCorrect": false
                },
                {
                    "text": "Mostly diesel",
                    "icon": "⛽",
                    "isCorrect": true
                },
                {
                    "text": "Only gasoline",
                    "icon": "🔥",
                    "isCorrect": false
                }
            ],
            "explanation": "Diesel engines are standard, with growing share of alternatives."
        }
    ],
    "module5_level2": [
        {
            "question": "A plow is used for:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Sowing",
                    "icon": "🌰",
                    "isCorrect": false
                },
                {
                    "text": "Harvesting",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Turning and loosening soil",
                    "icon": "🌍",
                    "isCorrect": true
                },
                {
                    "text": "Spraying",
                    "icon": "💦",
                    "isCorrect": false
                }
            ],
            "explanation": "A plow turns soil and incorporates crop residues."
        },
        {
            "question": "A moldboard plow has:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Moldboards for cutting and turning soil",
                    "icon": "🔪",
                    "isCorrect": true
                },
                {
                    "text": "An engine",
                    "icon": "⚙️",
                    "isCorrect": false
                },
                {
                    "text": "A container",
                    "icon": "📦",
                    "isCorrect": false
                },
                {
                    "text": "Only wheels",
                    "icon": "🛞",
                    "isCorrect": false
                }
            ],
            "explanation": "Moldboards cut and turn the soil slice."
        },
        {
            "question": "A chisel plow:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Deep loosens without turning",
                    "icon": "⬇️",
                    "isCorrect": true
                },
                {
                    "text": "Harvests",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Sows seeds",
                    "icon": "🌰",
                    "isCorrect": false
                },
                {
                    "text": "Sprays",
                    "icon": "💦",
                    "isCorrect": false
                }
            ],
            "explanation": "Chisel plow breaks up compacted layers without turning soil."
        },
        {
            "question": "Harrows are used for:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Harvesting",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Breaking clods and leveling",
                    "icon": "🧹",
                    "isCorrect": true
                },
                {
                    "text": "Plowing",
                    "icon": "🚜",
                    "isCorrect": false
                },
                {
                    "text": "Spraying",
                    "icon": "💦",
                    "isCorrect": false
                }
            ],
            "explanation": "Harrows prepare the seedbed after plowing."
        },
        {
            "question": "A rotavator:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Irrigates",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Harvests",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Sows",
                    "icon": "🌰",
                    "isCorrect": false
                },
                {
                    "text": "Loosens soil with rotating blades",
                    "icon": "🔄",
                    "isCorrect": true
                }
            ],
            "explanation": "Rotavator intensively loosens and mixes soil."
        },
        {
            "question": "A cultivator:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Plows",
                    "icon": "🚜",
                    "isCorrect": false
                },
                {
                    "text": "Shallow works the soil",
                    "icon": "🌱",
                    "isCorrect": true
                },
                {
                    "text": "Sprays",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "Harvests",
                    "icon": "🌾",
                    "isCorrect": false
                }
            ],
            "explanation": "Cultivators work soil without turning it."
        },
        {
            "question": "A roller compacts soil for:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Better seed-to-soil contact",
                    "icon": "🌰",
                    "isCorrect": true
                },
                {
                    "text": "Drainage",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Fun",
                    "icon": "🎉",
                    "isCorrect": false
                }
            ],
            "explanation": "Rolling improves seed emergence."
        },
        {
            "question": "A stubble cultivator is used for:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Harvesting",
                    "icon": "✂️",
                    "isCorrect": false
                },
                {
                    "text": "Shallow working of stubble",
                    "icon": "🌾",
                    "isCorrect": true
                },
                {
                    "text": "Spraying",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "Deep plowing",
                    "icon": "⬇️",
                    "isCorrect": false
                }
            ],
            "explanation": "Stubble tillage incorporates residues and promotes weed germination."
        },
        {
            "question": "A leveler is used for:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Surface leveling",
                    "icon": "➡️",
                    "isCorrect": true
                },
                {
                    "text": "Plowing",
                    "icon": "🚜",
                    "isCorrect": false
                },
                {
                    "text": "Harvesting",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Sowing",
                    "icon": "🌰",
                    "isCorrect": false
                }
            ],
            "explanation": "Leveler smooths the surface before or after sowing."
        },
        {
            "question": "Combination machines:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Don't exist",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Are prohibited",
                    "icon": "⛔",
                    "isCorrect": false
                },
                {
                    "text": "Perform multiple operations at once",
                    "icon": "🔧",
                    "isCorrect": true
                },
                {
                    "text": "Are slow",
                    "icon": "🐌",
                    "isCorrect": false
                }
            ],
            "explanation": "Combination machines save time and field passes."
        }
    ],
    "module5_level3": [
        {
            "question": "A seed drill is used for:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Sowing seeds into soil",
                    "icon": "🌰",
                    "isCorrect": true
                },
                {
                    "text": "Plowing",
                    "icon": "🚜",
                    "isCorrect": false
                },
                {
                    "text": "Spraying",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "Harvesting",
                    "icon": "🌾",
                    "isCorrect": false
                }
            ],
            "explanation": "Seed drills place seeds at precise amounts and depths."
        },
        {
            "question": "A pneumatic seed drill:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Is manual",
                    "icon": "✋",
                    "isCorrect": false
                },
                {
                    "text": "Is inflatable",
                    "icon": "🎈",
                    "isCorrect": false
                },
                {
                    "text": "Uses air to transport seeds",
                    "icon": "💨",
                    "isCorrect": true
                },
                {
                    "text": "Has no wheels",
                    "icon": "🛞",
                    "isCorrect": false
                }
            ],
            "explanation": "Air stream distributes seeds to the seeding coulters."
        },
        {
            "question": "A precision planter:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Harvests",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Places individual seeds at exact spacing",
                    "icon": "🎯",
                    "isCorrect": true
                },
                {
                    "text": "Sows randomly",
                    "icon": "🎲",
                    "isCorrect": false
                },
                {
                    "text": "Only plows",
                    "icon": "🚜",
                    "isCorrect": false
                }
            ],
            "explanation": "For corn, sugar beet, and vegetables, precision planting is key."
        },
        {
            "question": "A potato planter:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Plants tubers in rows",
                    "icon": "🥔",
                    "isCorrect": true
                },
                {
                    "text": "Harvests potatoes",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Plows",
                    "icon": "🚜",
                    "isCorrect": false
                },
                {
                    "text": "Sprays",
                    "icon": "💦",
                    "isCorrect": false
                }
            ],
            "explanation": "Planters automatically place seed tubers in prepared soil."
        },
        {
            "question": "A seed coulter:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Does nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Protects foot",
                    "icon": "🦶",
                    "isCorrect": false
                },
                {
                    "text": "Creates furrow and places seed",
                    "icon": "👢",
                    "isCorrect": true
                },
                {
                    "text": "Is decoration",
                    "icon": "🎀",
                    "isCorrect": false
                }
            ],
            "explanation": "Coulter opens soil, places seed, and covers again."
        },
        {
            "question": "A seed hopper:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Contains water",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Is empty",
                    "icon": "⬜",
                    "isCorrect": false
                },
                {
                    "text": "Contains fuel",
                    "icon": "⛽",
                    "isCorrect": false
                },
                {
                    "text": "Contains seeds for sowing",
                    "icon": "📦",
                    "isCorrect": true
                }
            ],
            "explanation": "Hopper must be clean and seed properly calibrated."
        },
        {
            "question": "A row marker:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Sows",
                    "icon": "🌰",
                    "isCorrect": false
                },
                {
                    "text": "Paints lines",
                    "icon": "🎨",
                    "isCorrect": false
                },
                {
                    "text": "Harvests",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Marks track for next pass",
                    "icon": "📍",
                    "isCorrect": true
                }
            ],
            "explanation": "Marker ensures parallel passes without gaps or overlaps."
        },
        {
            "question": "Seeding depth is set:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Always the same",
                    "icon": "➡️",
                    "isCorrect": false
                },
                {
                    "text": "Randomly",
                    "icon": "🎲",
                    "isCorrect": false
                },
                {
                    "text": "According to crop type",
                    "icon": "📏",
                    "isCorrect": true
                },
                {
                    "text": "It's not set",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "Correct depth is key for emergence."
        },
        {
            "question": "GPS-guided seeding:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Is useless",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Does nothing",
                    "icon": "⛔",
                    "isCorrect": false
                },
                {
                    "text": "Only navigates",
                    "icon": "🧭",
                    "isCorrect": false
                },
                {
                    "text": "Ensures precise rows without overlaps",
                    "icon": "📍",
                    "isCorrect": true
                }
            ],
            "explanation": "GPS enables centimeter precision even in night or fog."
        },
        {
            "question": "Strip-till is:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Spraying",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "Full-width plowing",
                    "icon": "🌍",
                    "isCorrect": false
                },
                {
                    "text": "Harvesting",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Working only a strip of soil for seeding",
                    "icon": "➖",
                    "isCorrect": true
                }
            ],
            "explanation": "Strip-till combines benefits of no-till and conventional systems."
        }
    ],
    "module5_level4": [
        {
            "question": "A fertilizer spreader:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Evenly applies granular fertilizers",
                    "icon": "🧪",
                    "isCorrect": true
                },
                {
                    "text": "Harvests",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Sows",
                    "icon": "🌰",
                    "isCorrect": false
                },
                {
                    "text": "Plows",
                    "icon": "🚜",
                    "isCorrect": false
                }
            ],
            "explanation": "Spreaders ensure even fertilizer distribution on the field."
        },
        {
            "question": "A sprayer applies:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only water",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Only seeds",
                    "icon": "🌰",
                    "isCorrect": false
                },
                {
                    "text": "Pesticides and liquid fertilizers",
                    "icon": "💦",
                    "isCorrect": true
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "Sprayers apply crop protection products."
        },
        {
            "question": "A spray nozzle determines:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only color",
                    "icon": "🎨",
                    "isCorrect": false
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Only pressure",
                    "icon": "📊",
                    "isCorrect": false
                },
                {
                    "text": "Droplet size and coverage",
                    "icon": "💧",
                    "isCorrect": true
                }
            ],
            "explanation": "The right nozzle is key for effective application."
        },
        {
            "question": "A self-propelled sprayer:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Is manual",
                    "icon": "✋",
                    "isCorrect": false
                },
                {
                    "text": "Has its own drive and high clearance",
                    "icon": "🚜",
                    "isCorrect": true
                },
                {
                    "text": "Is trailed",
                    "icon": "🔗",
                    "isCorrect": false
                },
                {
                    "text": "Doesn't exist",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "Self-propelled machines pass through tall crops."
        },
        {
            "question": "A slurry tanker:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only stores",
                    "icon": "📦",
                    "isCorrect": false
                },
                {
                    "text": "Sprays pesticides",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "Transports and applies liquid manure",
                    "icon": "🛢️",
                    "isCorrect": true
                },
                {
                    "text": "Harvests",
                    "icon": "🌾",
                    "isCorrect": false
                }
            ],
            "explanation": "Slurry tankers apply organic fertilizers to fields."
        },
        {
            "question": "A trailing hose slurry applicator:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Sprays into air",
                    "icon": "💨",
                    "isCorrect": false
                },
                {
                    "text": "Places slurry in rows on surface",
                    "icon": "〰️",
                    "isCorrect": true
                },
                {
                    "text": "Injects into soil",
                    "icon": "⬇️",
                    "isCorrect": false
                },
                {
                    "text": "Does nothing",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "Trailing hose application reduces ammonia losses."
        },
        {
            "question": "Slurry injection:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Doesn't exist",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Spreads on surface",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "Only transports",
                    "icon": "🚛",
                    "isCorrect": false
                },
                {
                    "text": "Injects slurry directly into soil",
                    "icon": "⬇️",
                    "isCorrect": true
                }
            ],
            "explanation": "Injection minimizes losses and odor."
        },
        {
            "question": "Variable rate application:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Applies nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Changes rate based on maps or sensors",
                    "icon": "📊",
                    "isCorrect": true
                },
                {
                    "text": "Is random",
                    "icon": "🎲",
                    "isCorrect": false
                },
                {
                    "text": "Always applies same",
                    "icon": "➡️",
                    "isCorrect": false
                }
            ],
            "explanation": "Variable application optimizes input use."
        },
        {
            "question": "Sensors on a sprayer:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Detect weeds or crops",
                    "icon": "👀",
                    "isCorrect": true
                },
                {
                    "text": "Play music",
                    "icon": "🎵",
                    "isCorrect": false
                },
                {
                    "text": "Detect nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Only measure speed",
                    "icon": "⏱️",
                    "isCorrect": false
                }
            ],
            "explanation": "Sensors enable targeted application only where needed."
        },
        {
            "question": "Drones for spraying:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Apply products on small areas",
                    "icon": "🛸",
                    "isCorrect": true
                },
                {
                    "text": "Harvest",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Are prohibited",
                    "icon": "⛔",
                    "isCorrect": false
                },
                {
                    "text": "Only photograph",
                    "icon": "📷",
                    "isCorrect": false
                }
            ],
            "explanation": "Drones are suitable for hard-to-reach terrain."
        }
    ],
    "module5_level5": [
        {
            "question": "A combine harvester:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only sprays",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "Only sows",
                    "icon": "🌰",
                    "isCorrect": false
                },
                {
                    "text": "Cuts, threshes, and cleans grain",
                    "icon": "🌾",
                    "isCorrect": true
                },
                {
                    "text": "Only plows",
                    "icon": "🚜",
                    "isCorrect": false
                }
            ],
            "explanation": "A combine performs cereal harvest in one operation."
        },
        {
            "question": "Combine header:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Threshes grain",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Cuts and gathers the crop",
                    "icon": "✂️",
                    "isCorrect": true
                },
                {
                    "text": "Cleans grain",
                    "icon": "🧹",
                    "isCorrect": false
                },
                {
                    "text": "Stores grain",
                    "icon": "📦",
                    "isCorrect": false
                }
            ],
            "explanation": "Cutter bar cuts the crop and feeds it to the threshing unit."
        },
        {
            "question": "Threshing drum:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Cleans grain",
                    "icon": "🧹",
                    "isCorrect": false
                },
                {
                    "text": "Stores straw",
                    "icon": "📦",
                    "isCorrect": false
                },
                {
                    "text": "Cuts crop",
                    "icon": "✂️",
                    "isCorrect": false
                },
                {
                    "text": "Separates grain from heads",
                    "icon": "🥁",
                    "isCorrect": true
                }
            ],
            "explanation": "Rotating drum beats grain from the heads."
        },
        {
            "question": "Separation unit:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Separates grain from straw",
                    "icon": "🔄",
                    "isCorrect": true
                },
                {
                    "text": "Does nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Only threshes",
                    "icon": "🥁",
                    "isCorrect": false
                },
                {
                    "text": "Only cuts",
                    "icon": "✂️",
                    "isCorrect": false
                }
            ],
            "explanation": "Straw walkers or rotors complete grain separation."
        },
        {
            "question": "Combine cleaning unit:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Separates impurities from grain",
                    "icon": "🧹",
                    "isCorrect": true
                },
                {
                    "text": "Washes grain",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Colors grain",
                    "icon": "🎨",
                    "isCorrect": false
                },
                {
                    "text": "Does nothing",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "Sieves and air stream clean grain from chaff and dust."
        },
        {
            "question": "Grain tank on a combine:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Is always empty",
                    "icon": "⬜",
                    "isCorrect": false
                },
                {
                    "text": "Contains water",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Contains fuel",
                    "icon": "⛽",
                    "isCorrect": false
                },
                {
                    "text": "Temporarily stores harvested grain",
                    "icon": "📦",
                    "isCorrect": true
                }
            ],
            "explanation": "Tank is unloaded to trailers or silos."
        },
        {
            "question": "A forage harvester:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only harvests grain",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Only sows",
                    "icon": "🌰",
                    "isCorrect": false
                },
                {
                    "text": "Cuts and chops whole plants for silage",
                    "icon": "🌽",
                    "isCorrect": true
                },
                {
                    "text": "Sprays",
                    "icon": "💦",
                    "isCorrect": false
                }
            ],
            "explanation": "Forage harvester creates chopped material for ensiling."
        },
        {
            "question": "A potato harvester:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Sprays potatoes",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "Digs, cleans, and loads tubers",
                    "icon": "🥔",
                    "isCorrect": true
                },
                {
                    "text": "Plants potatoes",
                    "icon": "🌰",
                    "isCorrect": false
                },
                {
                    "text": "Only transports",
                    "icon": "🚛",
                    "isCorrect": false
                }
            ],
            "explanation": "Potato harvesters are complex machines with many separation stages."
        },
        {
            "question": "Rapeseed harvest is challenging due to:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Easy pod shattering",
                    "icon": "💥",
                    "isCorrect": true
                },
                {
                    "text": "Low price",
                    "icon": "💰",
                    "isCorrect": false
                },
                {
                    "text": "Nothing",
                    "icon": "✅",
                    "isCorrect": false
                },
                {
                    "text": "Great height",
                    "icon": "📏",
                    "isCorrect": false
                }
            ],
            "explanation": "Rapeseed requires gentle handling and often desiccation."
        },
        {
            "question": "Yield monitor in a combine:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Measures fuel",
                    "icon": "⛽",
                    "isCorrect": false
                },
                {
                    "text": "Measures yield in real time",
                    "icon": "📊",
                    "isCorrect": true
                },
                {
                    "text": "Only plays music",
                    "icon": "🎵",
                    "isCorrect": false
                },
                {
                    "text": "Measures nothing",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "Yield monitor creates field productivity maps."
        }
    ],
    "module5_level6": [
        {
            "question": "A mower is used for:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Cutting grass and forage crops",
                    "icon": "🌿",
                    "isCorrect": true
                },
                {
                    "text": "Sowing",
                    "icon": "🌰",
                    "isCorrect": false
                },
                {
                    "text": "Plowing",
                    "icon": "🚜",
                    "isCorrect": false
                },
                {
                    "text": "Spraying",
                    "icon": "💦",
                    "isCorrect": false
                }
            ],
            "explanation": "Mowers prepare forage for hay or silage."
        },
        {
            "question": "A drum mower:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Has rotating drums with blades",
                    "icon": "🔄",
                    "isCorrect": true
                },
                {
                    "text": "Doesn't exist",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Has a cutter bar",
                    "icon": "➖",
                    "isCorrect": false
                },
                {
                    "text": "Is manual",
                    "icon": "✋",
                    "isCorrect": false
                }
            ],
            "explanation": "Drum mowers are fast and suitable for high yields."
        },
        {
            "question": "A tedder:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Turns cut material for drying",
                    "icon": "🔄",
                    "isCorrect": true
                },
                {
                    "text": "Cuts grass",
                    "icon": "✂️",
                    "isCorrect": false
                },
                {
                    "text": "Presses bales",
                    "icon": "📦",
                    "isCorrect": false
                },
                {
                    "text": "Sows",
                    "icon": "🌰",
                    "isCorrect": false
                }
            ],
            "explanation": "Turning speeds up even hay drying."
        },
        {
            "question": "A rake creates:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Windrows for baler collection",
                    "icon": "➖",
                    "isCorrect": true
                },
                {
                    "text": "Only turns",
                    "icon": "🔄",
                    "isCorrect": false
                },
                {
                    "text": "Sows",
                    "icon": "🌰",
                    "isCorrect": false
                },
                {
                    "text": "Bales",
                    "icon": "📦",
                    "isCorrect": false
                }
            ],
            "explanation": "Raked material is then collected by baler or loader."
        },
        {
            "question": "A round baler:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only cuts",
                    "icon": "✂️",
                    "isCorrect": false
                },
                {
                    "text": "Only turns",
                    "icon": "🔄",
                    "isCorrect": false
                },
                {
                    "text": "Creates square bales",
                    "icon": "⬜",
                    "isCorrect": false
                },
                {
                    "text": "Creates cylindrical bales of hay/straw",
                    "icon": "⭕",
                    "isCorrect": true
                }
            ],
            "explanation": "Round bales are common for smaller farms."
        },
        {
            "question": "A large square baler:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Sprays",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "Creates large rectangular bales",
                    "icon": "📦",
                    "isCorrect": true
                },
                {
                    "text": "Creates small round bales",
                    "icon": "⭕",
                    "isCorrect": false
                },
                {
                    "text": "Only cuts",
                    "icon": "✂️",
                    "isCorrect": false
                }
            ],
            "explanation": "Large bales are more efficient for transport and storage."
        },
        {
            "question": "A bale wrapper:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only presses",
                    "icon": "📦",
                    "isCorrect": false
                },
                {
                    "text": "Only cuts",
                    "icon": "✂️",
                    "isCorrect": false
                },
                {
                    "text": "Only transports",
                    "icon": "🚛",
                    "isCorrect": false
                },
                {
                    "text": "Wraps bales in film for haylage",
                    "icon": "🎁",
                    "isCorrect": true
                }
            ],
            "explanation": "Film creates anaerobic environment for fermentation."
        },
        {
            "question": "A forage wagon:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Sprays",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "Only cuts",
                    "icon": "✂️",
                    "isCorrect": false
                },
                {
                    "text": "Collects and transports forage from windrows",
                    "icon": "🚛",
                    "isCorrect": true
                },
                {
                    "text": "Only presses",
                    "icon": "📦",
                    "isCorrect": false
                }
            ],
            "explanation": "Forage wagons are an alternative to baling."
        },
        {
            "question": "A bale loader:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Plows",
                    "icon": "🚜",
                    "isCorrect": false
                },
                {
                    "text": "Presses bales",
                    "icon": "🔧",
                    "isCorrect": false
                },
                {
                    "text": "Cuts grass",
                    "icon": "✂️",
                    "isCorrect": false
                },
                {
                    "text": "Loads bales onto trailers",
                    "icon": "📦",
                    "isCorrect": true
                }
            ],
            "explanation": "Loaders save manual labor during harvest."
        },
        {
            "question": "A silage harvester:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Sprays",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "Only transports",
                    "icon": "🚛",
                    "isCorrect": false
                },
                {
                    "text": "Only presses",
                    "icon": "📦",
                    "isCorrect": false
                },
                {
                    "text": "Cuts and chops forage for silage",
                    "icon": "🌿",
                    "isCorrect": true
                }
            ],
            "explanation": "Chopper creates fine chop for quality silage."
        }
    ],
    "module5_level7": [
        {
            "question": "A front loader on a tractor:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only plows",
                    "icon": "🌍",
                    "isCorrect": false
                },
                {
                    "text": "Only drives",
                    "icon": "🚜",
                    "isCorrect": false
                },
                {
                    "text": "Only sprays",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "Loads and handles materials",
                    "icon": "🏗️",
                    "isCorrect": true
                }
            ],
            "explanation": "Front loader is a universal tool for material handling."
        },
        {
            "question": "A telehandler:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Has no boom",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Has telescopic boom for greater reach",
                    "icon": "📏",
                    "isCorrect": true
                },
                {
                    "text": "Has only forks",
                    "icon": "🍴",
                    "isCorrect": false
                },
                {
                    "text": "Only drives",
                    "icon": "🚜",
                    "isCorrect": false
                }
            ],
            "explanation": "Telehandler reaches height and distance."
        },
        {
            "question": "A forklift:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only drives",
                    "icon": "🚗",
                    "isCorrect": false
                },
                {
                    "text": "Harvests",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Lifts and moves pallets",
                    "icon": "📦",
                    "isCorrect": true
                },
                {
                    "text": "Only plows",
                    "icon": "🚜",
                    "isCorrect": false
                }
            ],
            "explanation": "Forklifts are essential in warehouses."
        },
        {
            "question": "A grain conveyor:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only threshes",
                    "icon": "🥁",
                    "isCorrect": false
                },
                {
                    "text": "Transports bulk materials",
                    "icon": "〰️",
                    "isCorrect": true
                },
                {
                    "text": "Sprays",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "Only stores",
                    "icon": "📦",
                    "isCorrect": false
                }
            ],
            "explanation": "Auger or belt conveyors fill silos and stores."
        },
        {
            "question": "A grain trailer:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Sprays",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "Plows",
                    "icon": "🚜",
                    "isCorrect": false
                },
                {
                    "text": "Sows",
                    "icon": "🌰",
                    "isCorrect": false
                },
                {
                    "text": "Transports harvested grain",
                    "icon": "🚛",
                    "isCorrect": true
                }
            ],
            "explanation": "Trailers must have sealed sides."
        },
        {
            "question": "A manure spreader:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only stores",
                    "icon": "📦",
                    "isCorrect": false
                },
                {
                    "text": "Spreads manure on fields",
                    "icon": "💩",
                    "isCorrect": true
                },
                {
                    "text": "Sprays pesticides",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "Only transports",
                    "icon": "🚛",
                    "isCorrect": false
                }
            ],
            "explanation": "Spreaders evenly distribute organic matter."
        },
        {
            "question": "A mixer wagon (feed wagon):",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only stores",
                    "icon": "📦",
                    "isCorrect": false
                },
                {
                    "text": "Only transports",
                    "icon": "🚛",
                    "isCorrect": false
                },
                {
                    "text": "Milks cows",
                    "icon": "🐄",
                    "isCorrect": false
                },
                {
                    "text": "Mixes and dispenses feed ration",
                    "icon": "🔄",
                    "isCorrect": true
                }
            ],
            "explanation": "TMR wagon creates balanced feed ration."
        },
        {
            "question": "A silage pit is filled:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "By trailers and compacted by tractor",
                    "icon": "🚜",
                    "isCorrect": true
                },
                {
                    "text": "By itself",
                    "icon": "🤖",
                    "isCorrect": false
                },
                {
                    "text": "By combine",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "By hand",
                    "icon": "✋",
                    "isCorrect": false
                }
            ],
            "explanation": "Proper compaction is key for silage quality."
        },
        {
            "question": "An inline wrapper:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only transports",
                    "icon": "🚛",
                    "isCorrect": false
                },
                {
                    "text": "Cuts",
                    "icon": "✂️",
                    "isCorrect": false
                },
                {
                    "text": "Wraps multiple bales in film",
                    "icon": "🎁",
                    "isCorrect": true
                },
                {
                    "text": "Only presses",
                    "icon": "📦",
                    "isCorrect": false
                }
            ],
            "explanation": "Group wrapping is faster and more economical."
        },
        {
            "question": "A bale shredder:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Presses bales",
                    "icon": "📦",
                    "isCorrect": false
                },
                {
                    "text": "Harvests",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Breaks bales for bedding or feeding",
                    "icon": "💥",
                    "isCorrect": true
                },
                {
                    "text": "Sprays",
                    "icon": "💦",
                    "isCorrect": false
                }
            ],
            "explanation": "Shredder eases handling of baled straw."
        }
    ],
    "module5_level8": [
        {
            "question": "ISOBUS is:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "A tractor type",
                    "icon": "🚜",
                    "isCorrect": false
                },
                {
                    "text": "Standard communication between tractor and implement",
                    "icon": "🔌",
                    "isCorrect": true
                },
                {
                    "text": "A fuel type",
                    "icon": "⛽",
                    "isCorrect": false
                },
                {
                    "text": "A navigation system",
                    "icon": "🧭",
                    "isCorrect": false
                }
            ],
            "explanation": "ISOBUS enables universal connection of various machines."
        },
        {
            "question": "Autosteering (automatic steering):",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only navigates",
                    "icon": "🧭",
                    "isCorrect": false
                },
                {
                    "text": "Doesn't exist",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Tractor drives alone without operator",
                    "icon": "🤖",
                    "isCorrect": false
                },
                {
                    "text": "GPS guides tractor on precise lines",
                    "icon": "📍",
                    "isCorrect": true
                }
            ],
            "explanation": "Autosteering increases precision and reduces driver fatigue."
        },
        {
            "question": "RTK correction:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Is a fertilizer type",
                    "icon": "🧪",
                    "isCorrect": false
                },
                {
                    "text": "Increases GPS accuracy to centimeters",
                    "icon": "🎯",
                    "isCorrect": true
                },
                {
                    "text": "Is a tractor type",
                    "icon": "🚜",
                    "isCorrect": false
                },
                {
                    "text": "Doesn't exist",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "RTK provides accuracy to 2 cm for precision work."
        },
        {
            "question": "Telematics in tractors:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only GPS",
                    "icon": "📍",
                    "isCorrect": false
                },
                {
                    "text": "Only phone",
                    "icon": "📞",
                    "isCorrect": false
                },
                {
                    "text": "Remote monitoring and diagnostics",
                    "icon": "📱",
                    "isCorrect": true
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "Telematics enables fleet tracking and preventive maintenance."
        },
        {
            "question": "Variable rate application:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Doesn't exist",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Is random",
                    "icon": "🎲",
                    "isCorrect": false
                },
                {
                    "text": "Changes rate based on prescription or sensors",
                    "icon": "📊",
                    "isCorrect": true
                },
                {
                    "text": "Is always same",
                    "icon": "➡️",
                    "isCorrect": false
                }
            ],
            "explanation": "VRA optimizes inputs according to zone needs."
        },
        {
            "question": "Task controller:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only plays music",
                    "icon": "🎵",
                    "isCorrect": false
                },
                {
                    "text": "Only measures time",
                    "icon": "⏱️",
                    "isCorrect": false
                },
                {
                    "text": "Controls machine operation according to prescription",
                    "icon": "🖥️",
                    "isCorrect": true
                },
                {
                    "text": "Does nothing",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "Task controller automatically sets machine according to maps."
        },
        {
            "question": "Section control:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only measures",
                    "icon": "📏",
                    "isCorrect": false
                },
                {
                    "text": "Automatically turns off sections in overlaps",
                    "icon": "⛔",
                    "isCorrect": true
                },
                {
                    "text": "Does nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Only counts",
                    "icon": "🔢",
                    "isCorrect": false
                }
            ],
            "explanation": "Section control saves seed, fertilizer, and pesticides."
        },
        {
            "question": "AEF certification:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Is a fertilizer brand",
                    "icon": "🧪",
                    "isCorrect": false
                },
                {
                    "text": "Is a tractor type",
                    "icon": "🚜",
                    "isCorrect": false
                },
                {
                    "text": "Confirms ISOBUS device compatibility",
                    "icon": "✅",
                    "isCorrect": true
                },
                {
                    "text": "Doesn't exist",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "AEF certification ensures cooperation between different manufacturers."
        },
        {
            "question": "Fleet management:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only counting machines",
                    "icon": "🔢",
                    "isCorrect": false
                },
                {
                    "text": "Only parking",
                    "icon": "🅿️",
                    "isCorrect": false
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Management and tracking of vehicle fleet",
                    "icon": "📊",
                    "isCorrect": true
                }
            ],
            "explanation": "Fleet management optimizes machine utilization."
        },
        {
            "question": "Data logging:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only communication",
                    "icon": "📞",
                    "isCorrect": false
                },
                {
                    "text": "Recording machine operation data",
                    "icon": "📝",
                    "isCorrect": true
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Only navigation",
                    "icon": "🧭",
                    "isCorrect": false
                }
            ],
            "explanation": "Recorded data is the basis for analysis and improvement."
        }
    ],
    "module5_level9": [
        {
            "question": "An autonomous tractor:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Has only GPS",
                    "icon": "📍",
                    "isCorrect": false
                },
                {
                    "text": "Works without an operator",
                    "icon": "🤖",
                    "isCorrect": true
                },
                {
                    "text": "Is manual",
                    "icon": "✋",
                    "isCorrect": false
                },
                {
                    "text": "Doesn't exist",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "Autonomous machines are reality and will become more common."
        },
        {
            "question": "An electric tractor:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Is powered by electric motor and battery",
                    "icon": "⚡",
                    "isCorrect": true
                },
                {
                    "text": "Doesn't exist",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Runs on steam",
                    "icon": "💨",
                    "isCorrect": false
                },
                {
                    "text": "Has only diesel",
                    "icon": "⛽",
                    "isCorrect": false
                }
            ],
            "explanation": "Electric tractors are suitable for smaller farms and greenhouses."
        },
        {
            "question": "Robotic weeders:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Don't exist",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Only drive",
                    "icon": "🚗",
                    "isCorrect": false
                },
                {
                    "text": "Harvest",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Autonomously destroy weeds",
                    "icon": "🤖",
                    "isCorrect": true
                }
            ],
            "explanation": "Robots can mechanically remove weeds without herbicides."
        },
        {
            "question": "Swarm robotics:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "One large robot",
                    "icon": "🤖",
                    "isCorrect": false
                },
                {
                    "text": "Doesn't exist",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Only drones",
                    "icon": "🛸",
                    "isCorrect": false
                },
                {
                    "text": "Cooperation of many small robots",
                    "icon": "🐝",
                    "isCorrect": true
                }
            ],
            "explanation": "Swarms of small robots can be alternative to large machines."
        },
        {
            "question": "Hydrogen-powered tractors:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Use hydrogen fuel cells",
                    "icon": "💧",
                    "isCorrect": true
                },
                {
                    "text": "Don't exist",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Are prohibited",
                    "icon": "⛔",
                    "isCorrect": false
                },
                {
                    "text": "Burn water",
                    "icon": "🔥",
                    "isCorrect": false
                }
            ],
            "explanation": "Hydrogen is a potential clean fuel of the future."
        },
        {
            "question": "3D printing in agriculture:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Manufacturing spare parts on farm",
                    "icon": "🖨️",
                    "isCorrect": true
                },
                {
                    "text": "Printing crops",
                    "icon": "🌱",
                    "isCorrect": false
                },
                {
                    "text": "Printing tractors",
                    "icon": "🚜",
                    "isCorrect": false
                },
                {
                    "text": "Doesn't exist",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "3D printing can shorten waiting time for spare parts."
        },
        {
            "question": "Exoskeleton for farmers:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Supports body during heavy work",
                    "icon": "💪",
                    "isCorrect": true
                },
                {
                    "text": "Replaces farmer",
                    "icon": "🤖",
                    "isCorrect": false
                },
                {
                    "text": "Is a suit",
                    "icon": "👔",
                    "isCorrect": false
                },
                {
                    "text": "Doesn't exist",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "Exoskeleton reduces strain during manual work."
        },
        {
            "question": "Mixed reality in machine service:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only video",
                    "icon": "📹",
                    "isCorrect": false
                },
                {
                    "text": "AR/VR helps with repairs",
                    "icon": "🥽",
                    "isCorrect": true
                },
                {
                    "text": "Doesn't exist",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Only games",
                    "icon": "🎮",
                    "isCorrect": false
                }
            ],
            "explanation": "AR glasses can display instructions directly on machine."
        },
        {
            "question": "Predictive maintenance:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Repair after failure",
                    "icon": "🔧",
                    "isCorrect": false
                },
                {
                    "text": "AI predicts failures before they occur",
                    "icon": "🔮",
                    "isCorrect": true
                },
                {
                    "text": "No maintenance",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Only scheduled",
                    "icon": "📅",
                    "isCorrect": false
                }
            ],
            "explanation": "Sensors and AI minimize unplanned downtime."
        },
        {
            "question": "Digital twin of a machine:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only photo",
                    "icon": "📷",
                    "isCorrect": false
                },
                {
                    "text": "Doesn't exist",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Virtual copy for simulations",
                    "icon": "💻",
                    "isCorrect": true
                },
                {
                    "text": "Second machine",
                    "icon": "🚜",
                    "isCorrect": false
                }
            ],
            "explanation": "Digital twin enables testing and optimization."
        }
    ],
    "module5_level10": [
        {
            "question": "Investing in machinery requires:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Random selection",
                    "icon": "🎲",
                    "isCorrect": false
                },
                {
                    "text": "Return and utilization analysis",
                    "icon": "📊",
                    "isCorrect": true
                },
                {
                    "text": "Only cheapest machine",
                    "icon": "💰",
                    "isCorrect": false
                },
                {
                    "text": "Only most expensive machine",
                    "icon": "💎",
                    "isCorrect": false
                }
            ],
            "explanation": "Economic analysis is the basis for correct decisions."
        },
        {
            "question": "Machine sharing (ring) enables:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Reduced mechanization costs",
                    "icon": "🤝",
                    "isCorrect": true
                },
                {
                    "text": "Higher costs",
                    "icon": "📈",
                    "isCorrect": false
                },
                {
                    "text": "Only problems",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Nothing",
                    "icon": "⛔",
                    "isCorrect": false
                }
            ],
            "explanation": "Machinery rings increase utilization of expensive machines."
        },
        {
            "question": "Contract services in agriculture:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Are always more expensive",
                    "icon": "💰",
                    "isCorrect": false
                },
                {
                    "text": "Alternative to owning machines",
                    "icon": "🛠️",
                    "isCorrect": true
                },
                {
                    "text": "Don't exist",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Are prohibited",
                    "icon": "⛔",
                    "isCorrect": false
                }
            ],
            "explanation": "Services can be more economical than ownership."
        },
        {
            "question": "Machinery leasing:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only loan",
                    "icon": "🏦",
                    "isCorrect": false
                },
                {
                    "text": "Rental with purchase option",
                    "icon": "📄",
                    "isCorrect": true
                },
                {
                    "text": "Doesn't exist",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Only sale",
                    "icon": "💰",
                    "isCorrect": false
                }
            ],
            "explanation": "Leasing reduces initial investment and spreads costs."
        },
        {
            "question": "Machinery depreciation:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only tax",
                    "icon": "💰",
                    "isCorrect": false
                },
                {
                    "text": "Accounting for wear and tear",
                    "icon": "📉",
                    "isCorrect": true
                },
                {
                    "text": "Only repairs",
                    "icon": "🔧",
                    "isCorrect": false
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "Depreciation is an expense and reduces tax base."
        },
        {
            "question": "TCO (Total Cost of Ownership):",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Total costs of ownership",
                    "icon": "💰",
                    "isCorrect": true
                },
                {
                    "text": "Only repairs",
                    "icon": "🔧",
                    "isCorrect": false
                },
                {
                    "text": "Only fuel",
                    "icon": "⛽",
                    "isCorrect": false
                },
                {
                    "text": "Only purchase price",
                    "icon": "💵",
                    "isCorrect": false
                }
            ],
            "explanation": "TCO includes purchase, operation, maintenance, and resale."
        },
        {
            "question": "Work safety with machinery:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Is not important",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Is a priority and requires training",
                    "icon": "⚠️",
                    "isCorrect": true
                },
                {
                    "text": "Depends on weather",
                    "icon": "🌤️",
                    "isCorrect": false
                },
                {
                    "text": "Is only recommended",
                    "icon": "🤷",
                    "isCorrect": false
                }
            ],
            "explanation": "Agriculture is among high-risk industries."
        },
        {
            "question": "ROPS on a tractor:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Tire type",
                    "icon": "🛞",
                    "isCorrect": false
                },
                {
                    "text": "Engine type",
                    "icon": "⚙️",
                    "isCorrect": false
                },
                {
                    "text": "Roll-over protective structure",
                    "icon": "🛡️",
                    "isCorrect": true
                }
            ],
            "explanation": "ROPS protects operator during tractor rollover."
        },
        {
            "question": "Cab ergonomics:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Is useless",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Only appearance",
                    "icon": "🎨",
                    "isCorrect": false
                },
                {
                    "text": "Reduces fatigue and increases productivity",
                    "icon": "🪑",
                    "isCorrect": true
                },
                {
                    "text": "Only increases costs",
                    "icon": "💰",
                    "isCorrect": false
                }
            ],
            "explanation": "Comfortable cab is important for long working days."
        },
        {
            "question": "The future of mechanization is heading towards:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "End of mechanization",
                    "icon": "⛔",
                    "isCorrect": false
                },
                {
                    "text": "Only large machines",
                    "icon": "🚜",
                    "isCorrect": false
                },
                {
                    "text": "Automation, electrification, precision",
                    "icon": "🎯",
                    "isCorrect": true
                },
                {
                    "text": "More manual work",
                    "icon": "✋",
                    "isCorrect": false
                }
            ],
            "explanation": "Innovation will lead to more sustainable and efficient production."
        }
    ]
};

window.MODULE5_QUESTIONS = MODULE5_QUESTIONS;
