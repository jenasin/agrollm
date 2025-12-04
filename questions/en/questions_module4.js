// Module 4: Irrigation - 100 questions (10 levels x 10 questions)

const MODULE4_QUESTIONS = {
    "module4_level1": [
        {
            "question": "Why is water important for plants?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only for cooling",
                    "icon": "❄️",
                    "isCorrect": false
                },
                {
                    "text": "It's not important",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Only for appearance",
                    "icon": "🎨",
                    "isCorrect": false
                },
                {
                    "text": "For photosynthesis and nutrient transport",
                    "icon": "💧",
                    "isCorrect": true
                }
            ],
            "explanation": "Water is essential for photosynthesis, nutrient transport, and plant temperature regulation."
        },
        {
            "question": "How much water do plants consume?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Always the same amount",
                    "icon": "➡️",
                    "isCorrect": false
                },
                {
                    "text": "Depends on species and conditions",
                    "icon": "📊",
                    "isCorrect": true
                },
                {
                    "text": "Nothing",
                    "icon": "0️⃣",
                    "isCorrect": false
                },
                {
                    "text": "Very little",
                    "icon": "💧",
                    "isCorrect": false
                }
            ],
            "explanation": "Water consumption depends on plant species, temperature, humidity, and growth stage."
        },
        {
            "question": "What is evapotranspiration?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "A soil type",
                    "icon": "🌍",
                    "isCorrect": false
                },
                {
                    "text": "A type of fertilizer",
                    "icon": "🧪",
                    "isCorrect": false
                },
                {
                    "text": "Evaporation from soil and plants",
                    "icon": "☁️",
                    "isCorrect": true
                },
                {
                    "text": "Only rain",
                    "icon": "🌧️",
                    "isCorrect": false
                }
            ],
            "explanation": "Evapotranspiration is the sum of evaporation (from soil) and transpiration (from plants)."
        },
        {
            "question": "When do plants need the most water?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "At harvest",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "In winter",
                    "icon": "❄️",
                    "isCorrect": false
                },
                {
                    "text": "During growth and flowering periods",
                    "icon": "🌸",
                    "isCorrect": true
                },
                {
                    "text": "Never",
                    "icon": "⛔",
                    "isCorrect": false
                }
            ],
            "explanation": "Critical periods are germination, tillering, flowering, and grain filling."
        },
        {
            "question": "What is water deficit?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Excess water",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "Lack of water for optimal growth",
                    "icon": "🏜️",
                    "isCorrect": true
                },
                {
                    "text": "A type of irrigation",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Correct amount",
                    "icon": "✅",
                    "isCorrect": false
                }
            ],
            "explanation": "Water deficit causes plant stress, wilting, and reduced yields."
        },
        {
            "question": "What is irrigation?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Drainage",
                    "icon": "⬇️",
                    "isCorrect": false
                },
                {
                    "text": "Artificial water supply to plants",
                    "icon": "💦",
                    "isCorrect": true
                },
                {
                    "text": "Only rainfall",
                    "icon": "🌧️",
                    "isCorrect": false
                },
                {
                    "text": "Fertilization",
                    "icon": "🧪",
                    "isCorrect": false
                }
            ],
            "explanation": "Irrigation supplements natural rainfall to ensure adequate water supply."
        },
        {
            "question": "What are sources of irrigation water?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only rain",
                    "icon": "🌧️",
                    "isCorrect": false
                },
                {
                    "text": "Only ice",
                    "icon": "🧊",
                    "isCorrect": false
                },
                {
                    "text": "Only sea water",
                    "icon": "🌊",
                    "isCorrect": false
                },
                {
                    "text": "Rivers, wells, reservoirs, dams",
                    "icon": "🏞️",
                    "isCorrect": true
                }
            ],
            "explanation": "Water is drawn from surface and underground sources, stored in reservoirs."
        },
        {
            "question": "What is water stress?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Stress from excess water",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "Doesn't exist",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Plant condition due to water shortage",
                    "icon": "🥀",
                    "isCorrect": true
                },
                {
                    "text": "Farmer's stress",
                    "icon": "😰",
                    "isCorrect": false
                }
            ],
            "explanation": "Water stress causes stomata closure, slowed growth, and wilting."
        },
        {
            "question": "How to recognize when a plant needs water?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Fast growth",
                    "icon": "📈",
                    "isCorrect": false
                },
                {
                    "text": "Wilting, loss of leaf turgor",
                    "icon": "🍂",
                    "isCorrect": true
                },
                {
                    "text": "Flowering",
                    "icon": "🌸",
                    "isCorrect": false
                },
                {
                    "text": "Green leaves",
                    "icon": "🌿",
                    "isCorrect": false
                }
            ],
            "explanation": "Wilting leaves and loss of turgor are the first signs of water shortage."
        },
        {
            "question": "What is soil moisture?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Soil pH",
                    "icon": "📊",
                    "isCorrect": false
                },
                {
                    "text": "Soil temperature",
                    "icon": "🌡️",
                    "isCorrect": false
                },
                {
                    "text": "Soil color",
                    "icon": "🎨",
                    "isCorrect": false
                },
                {
                    "text": "Amount of water in the soil",
                    "icon": "💧",
                    "isCorrect": true
                }
            ],
            "explanation": "Soil moisture determines water availability for plant roots."
        }
    ],
    "module4_level2": [
        {
            "question": "What is surface irrigation?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Drip irrigation",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Water from the sky",
                    "icon": "🌧️",
                    "isCorrect": false
                },
                {
                    "text": "Underground water",
                    "icon": "⬇️",
                    "isCorrect": false
                },
                {
                    "text": "Water flows over the soil surface",
                    "icon": "🌊",
                    "isCorrect": true
                }
            ],
            "explanation": "Surface irrigation uses gravity to distribute water across the field."
        },
        {
            "question": "Drip irrigation delivers water:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Directly to plant roots",
                    "icon": "🎯",
                    "isCorrect": true
                },
                {
                    "text": "On the road",
                    "icon": "🛣️",
                    "isCorrect": false
                },
                {
                    "text": "On leaves",
                    "icon": "🍃",
                    "isCorrect": false
                },
                {
                    "text": "Into the air",
                    "icon": "💨",
                    "isCorrect": false
                }
            ],
            "explanation": "Drip irrigation is most efficient - delivering water exactly where needed."
        },
        {
            "question": "Sprinkler irrigation mimics:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Rain",
                    "icon": "🌧️",
                    "isCorrect": true
                },
                {
                    "text": "Snow",
                    "icon": "❄️",
                    "isCorrect": false
                },
                {
                    "text": "Fog",
                    "icon": "🌫️",
                    "isCorrect": false
                },
                {
                    "text": "Wind",
                    "icon": "💨",
                    "isCorrect": false
                }
            ],
            "explanation": "Sprinklers create artificial rain by spraying water into the air."
        },
        {
            "question": "A pivot is:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "A fertilizer",
                    "icon": "🧪",
                    "isCorrect": false
                },
                {
                    "text": "A circular irrigation system",
                    "icon": "⭕",
                    "isCorrect": true
                },
                {
                    "text": "A soil type",
                    "icon": "🌍",
                    "isCorrect": false
                },
                {
                    "text": "A type of tractor",
                    "icon": "🚜",
                    "isCorrect": false
                }
            ],
            "explanation": "A pivot is an irrigation arm that rotates around a central point."
        },
        {
            "question": "Subsurface irrigation:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only sprays",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "Delivers water below the surface",
                    "icon": "⬇️",
                    "isCorrect": true
                },
                {
                    "text": "Uses a helicopter",
                    "icon": "🚁",
                    "isCorrect": false
                },
                {
                    "text": "Doesn't exist",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "Subsurface tubes deliver water directly to the root zone."
        },
        {
            "question": "Micro-irrigation is suitable for:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only lawns",
                    "icon": "🏡",
                    "isCorrect": false
                },
                {
                    "text": "Vegetables, orchards, greenhouses",
                    "icon": "🌿",
                    "isCorrect": true
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Large grain fields",
                    "icon": "🌾",
                    "isCorrect": false
                }
            ],
            "explanation": "Micro-irrigation is precise and suitable for intensive crops."
        },
        {
            "question": "The advantage of drip irrigation is:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "High water use efficiency",
                    "icon": "✅",
                    "isCorrect": true
                },
                {
                    "text": "Low cost",
                    "icon": "💰",
                    "isCorrect": false
                },
                {
                    "text": "No maintenance needed",
                    "icon": "🔧",
                    "isCorrect": false
                },
                {
                    "text": "Simplicity",
                    "icon": "😊",
                    "isCorrect": false
                }
            ],
            "explanation": "Drip irrigation has up to 95% efficiency, minimizing losses."
        },
        {
            "question": "The disadvantage of sprinklers is:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Losses to evaporation and wind",
                    "icon": "💨",
                    "isCorrect": true
                },
                {
                    "text": "None",
                    "icon": "✅",
                    "isCorrect": false
                },
                {
                    "text": "Too precise",
                    "icon": "🎯",
                    "isCorrect": false
                },
                {
                    "text": "Too cheap",
                    "icon": "💰",
                    "isCorrect": false
                }
            ],
            "explanation": "Sprinklers lose water to evaporation and wind drift in windy conditions."
        },
        {
            "question": "Fertigation is:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "A type of sprinkler",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "Fermentation of fertilizers",
                    "icon": "🦠",
                    "isCorrect": false
                },
                {
                    "text": "Fertilizing through the irrigation system",
                    "icon": "🧪",
                    "isCorrect": true
                },
                {
                    "text": "A type of pump",
                    "icon": "⚙️",
                    "isCorrect": false
                }
            ],
            "explanation": "Fertigation combines irrigation with application of soluble fertilizers."
        },
        {
            "question": "Irrigation dose is:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Amount of water per irrigation event",
                    "icon": "📊",
                    "isCorrect": true
                },
                {
                    "text": "A type of hose",
                    "icon": "🔧",
                    "isCorrect": false
                },
                {
                    "text": "A type of sprinkler",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "Water price",
                    "icon": "💰",
                    "isCorrect": false
                }
            ],
            "explanation": "Irrigation dose is measured in mm or l/m² and depends on plant needs."
        }
    ],
    "module4_level3": [
        {
            "question": "What affects irrigation needs?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only weather",
                    "icon": "🌤️",
                    "isCorrect": false
                },
                {
                    "text": "Only plant type",
                    "icon": "🌱",
                    "isCorrect": false
                },
                {
                    "text": "Weather, crop, soil, growth stage",
                    "icon": "📊",
                    "isCorrect": true
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "Irrigation needs depend on many factors that change over time."
        },
        {
            "question": "ETc is:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Crop evapotranspiration",
                    "icon": "☁️",
                    "isCorrect": true
                },
                {
                    "text": "A type of pump",
                    "icon": "⚙️",
                    "isCorrect": false
                },
                {
                    "text": "A type of hose",
                    "icon": "🔧",
                    "isCorrect": false
                },
                {
                    "text": "A company abbreviation",
                    "icon": "🏢",
                    "isCorrect": false
                }
            ],
            "explanation": "ETc is the actual evapotranspiration of a specific crop."
        },
        {
            "question": "Reference evapotranspiration (ETo) is measured:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "By eye",
                    "icon": "👀",
                    "isCorrect": false
                },
                {
                    "text": "Using meteorological data",
                    "icon": "🌡️",
                    "isCorrect": true
                },
                {
                    "text": "Using scales",
                    "icon": "⚖️",
                    "isCorrect": false
                },
                {
                    "text": "It's not measured",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "ETo is calculated from temperature, humidity, wind, and radiation."
        },
        {
            "question": "Crop coefficient (Kc) indicates:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Crop color",
                    "icon": "🎨",
                    "isCorrect": false
                },
                {
                    "text": "Crop yield",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Ratio of crop water use to ETo",
                    "icon": "📐",
                    "isCorrect": true
                },
                {
                    "text": "Crop price",
                    "icon": "💰",
                    "isCorrect": false
                }
            ],
            "explanation": "Kc changes during the growing season - different at emergence vs. flowering."
        },
        {
            "question": "Soil sensors measure:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only temperature",
                    "icon": "🌡️",
                    "isCorrect": false
                },
                {
                    "text": "Only pH",
                    "icon": "📊",
                    "isCorrect": false
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Soil moisture in real time",
                    "icon": "📱",
                    "isCorrect": true
                }
            ],
            "explanation": "Sensors help optimize irrigation timing and amount."
        },
        {
            "question": "A tensiometer measures:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Air pressure",
                    "icon": "💨",
                    "isCorrect": false
                },
                {
                    "text": "Temperature",
                    "icon": "🌡️",
                    "isCorrect": false
                },
                {
                    "text": "Water suction pressure in soil",
                    "icon": "📏",
                    "isCorrect": true
                },
                {
                    "text": "pH",
                    "icon": "📊",
                    "isCorrect": false
                }
            ],
            "explanation": "Tensiometer shows how easily plants can draw water from soil."
        },
        {
            "question": "Water balance in a field includes:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only irrigation",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Only rainfall",
                    "icon": "🌧️",
                    "isCorrect": false
                },
                {
                    "text": "Rainfall + irrigation - evapotranspiration - runoff",
                    "icon": "⚖️",
                    "isCorrect": true
                }
            ],
            "explanation": "Water balance helps plan irrigation based on actual needs."
        },
        {
            "question": "Critical irrigation periods for cereals are:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Tillering, stem elongation, flowering",
                    "icon": "🌾",
                    "isCorrect": true
                },
                {
                    "text": "In winter",
                    "icon": "❄️",
                    "isCorrect": false
                },
                {
                    "text": "Only after harvest",
                    "icon": "✂️",
                    "isCorrect": false
                },
                {
                    "text": "Never",
                    "icon": "⛔",
                    "isCorrect": false
                }
            ],
            "explanation": "Water shortage during critical periods significantly reduces yield."
        },
        {
            "question": "Deficit irrigation is:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "No irrigation",
                    "icon": "⛔",
                    "isCorrect": false
                },
                {
                    "text": "A type of pump",
                    "icon": "⚙️",
                    "isCorrect": false
                },
                {
                    "text": "Excessive irrigation",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "Deliberately reduced irrigation for savings",
                    "icon": "💧",
                    "isCorrect": true
                }
            ],
            "explanation": "Controlled deficit can save water without major yield impact."
        },
        {
            "question": "Automatic irrigation control uses:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Sensors, computers, weather forecasts",
                    "icon": "🖥️",
                    "isCorrect": true
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Only manual control",
                    "icon": "✋",
                    "isCorrect": false
                },
                {
                    "text": "Only a timer",
                    "icon": "⏰",
                    "isCorrect": false
                }
            ],
            "explanation": "Smart systems optimize irrigation based on current data."
        }
    ],
    "module4_level4": [
        {
            "question": "A pump is used for:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Measuring water",
                    "icon": "📏",
                    "isCorrect": false
                },
                {
                    "text": "Transporting water from the source",
                    "icon": "⚙️",
                    "isCorrect": true
                },
                {
                    "text": "Filtering water",
                    "icon": "🔍",
                    "isCorrect": false
                },
                {
                    "text": "Heating water",
                    "icon": "🔥",
                    "isCorrect": false
                }
            ],
            "explanation": "Pumps create the pressure needed to distribute water through the system."
        },
        {
            "question": "Water filtration is important for:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Preventing dripper clogging",
                    "icon": "🔧",
                    "isCorrect": true
                },
                {
                    "text": "Better taste",
                    "icon": "😋",
                    "isCorrect": false
                },
                {
                    "text": "Heating",
                    "icon": "🔥",
                    "isCorrect": false
                },
                {
                    "text": "Not important",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "Clean water prevents emitter clogging and extends system life."
        },
        {
            "question": "A dripper (emitter) delivers:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Unlimited amount",
                    "icon": "🌊",
                    "isCorrect": false
                },
                {
                    "text": "Precise amount of water per hour",
                    "icon": "💧",
                    "isCorrect": true
                },
                {
                    "text": "Fertilizer",
                    "icon": "🧪",
                    "isCorrect": false
                },
                {
                    "text": "Only air",
                    "icon": "💨",
                    "isCorrect": false
                }
            ],
            "explanation": "Drippers have defined flow rates, e.g., 2 or 4 l/hour."
        },
        {
            "question": "System pressure is measured in:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Liters",
                    "icon": "🥛",
                    "isCorrect": false
                },
                {
                    "text": "Bar or kPa",
                    "icon": "📊",
                    "isCorrect": true
                },
                {
                    "text": "Meters",
                    "icon": "📏",
                    "isCorrect": false
                },
                {
                    "text": "Hours",
                    "icon": "⏰",
                    "isCorrect": false
                }
            ],
            "explanation": "Correct pressure is key for uniform irrigation."
        },
        {
            "question": "A pressure regulator:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Filters water",
                    "icon": "🔍",
                    "isCorrect": false
                },
                {
                    "text": "Increases pressure",
                    "icon": "⬆️",
                    "isCorrect": false
                },
                {
                    "text": "Reduces water pressure",
                    "icon": "⬇️",
                    "isCorrect": true
                },
                {
                    "text": "Measures flow",
                    "icon": "📊",
                    "isCorrect": false
                }
            ],
            "explanation": "Pressure regulators ensure optimal pressure for drippers."
        },
        {
            "question": "PE tubing is used for:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Electrical wiring",
                    "icon": "⚡",
                    "isCorrect": false
                },
                {
                    "text": "Water distribution in irrigation",
                    "icon": "🔧",
                    "isCorrect": true
                },
                {
                    "text": "Air exhaust",
                    "icon": "💨",
                    "isCorrect": false
                }
            ],
            "explanation": "Polyethylene tubing is standard for drip irrigation systems."
        },
        {
            "question": "A water meter measures:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Water pressure",
                    "icon": "📏",
                    "isCorrect": false
                },
                {
                    "text": "Water quality",
                    "icon": "✅",
                    "isCorrect": false
                },
                {
                    "text": "Water consumption",
                    "icon": "📊",
                    "isCorrect": true
                },
                {
                    "text": "Water temperature",
                    "icon": "🌡️",
                    "isCorrect": false
                }
            ],
            "explanation": "Water meter is important for tracking consumption and planning."
        },
        {
            "question": "An electromagnetic valve:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Generates electricity",
                    "icon": "⚡",
                    "isCorrect": false
                },
                {
                    "text": "Measures flow",
                    "icon": "📊",
                    "isCorrect": false
                },
                {
                    "text": "Enables automatic control",
                    "icon": "🔌",
                    "isCorrect": true
                },
                {
                    "text": "Filters water",
                    "icon": "🔍",
                    "isCorrect": false
                }
            ],
            "explanation": "Solenoid valves are controlled by the controller according to program."
        },
        {
            "question": "An irrigation controller:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Automatically starts and stops irrigation",
                    "icon": "🖥️",
                    "isCorrect": true
                },
                {
                    "text": "Only filters",
                    "icon": "🔍",
                    "isCorrect": false
                },
                {
                    "text": "Only measures",
                    "icon": "📊",
                    "isCorrect": false
                },
                {
                    "text": "Does nothing",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "Controllers can be programmed based on time or sensor input."
        },
        {
            "question": "A check valve prevents:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Measurement",
                    "icon": "📊",
                    "isCorrect": false
                },
                {
                    "text": "Water flow",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Filtration",
                    "icon": "🔍",
                    "isCorrect": false
                },
                {
                    "text": "Backflow of water",
                    "icon": "⛔",
                    "isCorrect": true
                }
            ],
            "explanation": "Check valves protect the water source from contamination."
        }
    ],
    "module4_level5": [
        {
            "question": "Irrigation water quality affects:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only price",
                    "icon": "💰",
                    "isCorrect": false
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Health of plants and soil",
                    "icon": "🌱",
                    "isCorrect": true
                },
                {
                    "text": "Only plant color",
                    "icon": "🎨",
                    "isCorrect": false
                }
            ],
            "explanation": "Unsuitable water can damage plants, salinize soil, or clog the system."
        },
        {
            "question": "EC of water indicates:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Color",
                    "icon": "🎨",
                    "isCorrect": false
                },
                {
                    "text": "Temperature",
                    "icon": "🌡️",
                    "isCorrect": false
                },
                {
                    "text": "Pressure",
                    "icon": "📏",
                    "isCorrect": false
                },
                {
                    "text": "Electrical conductivity (salts)",
                    "icon": "⚡",
                    "isCorrect": true
                }
            ],
            "explanation": "Higher EC means more dissolved salts, which can be problematic."
        },
        {
            "question": "Hard water contains:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only sodium",
                    "icon": "🧂",
                    "isCorrect": false
                },
                {
                    "text": "Only iron",
                    "icon": "⚙️",
                    "isCorrect": false
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Calcium and magnesium",
                    "icon": "⚪",
                    "isCorrect": true
                }
            ],
            "explanation": "Hard water can cause deposits and clog drippers."
        },
        {
            "question": "Sodic water is problematic because:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "It damages soil structure",
                    "icon": "🌍",
                    "isCorrect": true
                },
                {
                    "text": "It's expensive",
                    "icon": "💰",
                    "isCorrect": false
                },
                {
                    "text": "It has bad color",
                    "icon": "🎨",
                    "isCorrect": false
                },
                {
                    "text": "Nothing",
                    "icon": "✅",
                    "isCorrect": false
                }
            ],
            "explanation": "Sodium breaks down soil aggregates and reduces permeability."
        },
        {
            "question": "SAR is an indicator of:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Water temperature",
                    "icon": "🌡️",
                    "isCorrect": false
                },
                {
                    "text": "Water color",
                    "icon": "🎨",
                    "isCorrect": false
                },
                {
                    "text": "Sodium hazard to soil",
                    "icon": "⚠️",
                    "isCorrect": true
                },
                {
                    "text": "Water pressure",
                    "icon": "📏",
                    "isCorrect": false
                }
            ],
            "explanation": "Sodium Adsorption Ratio assesses sodium degradation risk to soil."
        },
        {
            "question": "Chlorine in water can:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Improve fruit taste",
                    "icon": "😋",
                    "isCorrect": false
                },
                {
                    "text": "Do nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Damage sensitive plants",
                    "icon": "🥀",
                    "isCorrect": true
                },
                {
                    "text": "Always help",
                    "icon": "✅",
                    "isCorrect": false
                }
            ],
            "explanation": "High chlorine concentrations cause leaf edge burn."
        },
        {
            "question": "Irrigation water pH should be:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Above 10",
                    "icon": "📈",
                    "isCorrect": false
                },
                {
                    "text": "Doesn't matter",
                    "icon": "🤷",
                    "isCorrect": false
                },
                {
                    "text": "Below 4",
                    "icon": "📉",
                    "isCorrect": false
                },
                {
                    "text": "6.0-7.5",
                    "icon": "⚖️",
                    "isCorrect": true
                }
            ],
            "explanation": "Extreme pH affects nutrient availability and can damage the system."
        },
        {
            "question": "Iron in water causes:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Better growth",
                    "icon": "📈",
                    "isCorrect": false
                },
                {
                    "text": "Emitter clogging",
                    "icon": "🔧",
                    "isCorrect": true
                },
                {
                    "text": "Cleaner water",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "Dissolved iron oxidizes and creates deposits in the system."
        },
        {
            "question": "Biological contamination of water includes:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only sand",
                    "icon": "🏖️",
                    "isCorrect": false
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Algae, bacteria, biofilm",
                    "icon": "🦠",
                    "isCorrect": true
                },
                {
                    "text": "Only stones",
                    "icon": "🪨",
                    "isCorrect": false
                }
            ],
            "explanation": "Organic matter and microorganisms can clog drippers."
        },
        {
            "question": "Chlorination of irrigation water:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Is prohibited",
                    "icon": "⛔",
                    "isCorrect": false
                },
                {
                    "text": "Does nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Always harmful",
                    "icon": "☠️",
                    "isCorrect": false
                },
                {
                    "text": "Disinfects and cleans the system",
                    "icon": "🧪",
                    "isCorrect": true
                }
            ],
            "explanation": "Occasional chlorination removes biofilm and bacteria from the system."
        }
    ],
    "module4_level6": [
        {
            "question": "Why conserve water in irrigation?",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "No reason",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "It's always free",
                    "icon": "💰",
                    "isCorrect": false
                },
                {
                    "text": "Plants don't need water",
                    "icon": "🌱",
                    "isCorrect": false
                },
                {
                    "text": "Water is a limited resource and expense",
                    "icon": "💧",
                    "isCorrect": true
                }
            ],
            "explanation": "Efficient water use saves costs and natural resources."
        },
        {
            "question": "Mulching reduces:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Fruit quality",
                    "icon": "🍎",
                    "isCorrect": false
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Water evaporation from soil",
                    "icon": "☁️",
                    "isCorrect": true
                },
                {
                    "text": "Plant growth",
                    "icon": "📉",
                    "isCorrect": false
                }
            ],
            "explanation": "Mulch creates a barrier that limits evaporation from soil surface."
        },
        {
            "question": "Night irrigation is better because:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "It's not better",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "It's cheaper",
                    "icon": "💰",
                    "isCorrect": false
                },
                {
                    "text": "Plants are sleeping",
                    "icon": "😴",
                    "isCorrect": false
                },
                {
                    "text": "Less evaporation and wind",
                    "icon": "🌙",
                    "isCorrect": true
                }
            ],
            "explanation": "Lower temperatures and calm air minimize water losses."
        },
        {
            "question": "Drip irrigation compared to sprinklers saves:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "5% water",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Uses more",
                    "icon": "📈",
                    "isCorrect": false
                },
                {
                    "text": "30-50% water",
                    "icon": "💧",
                    "isCorrect": true
                }
            ],
            "explanation": "Drip irrigation has up to 95% efficiency vs 60-70% for sprinklers."
        },
        {
            "question": "Wastewater recycling is:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Possible after treatment for irrigation",
                    "icon": "♻️",
                    "isCorrect": true
                },
                {
                    "text": "Prohibited",
                    "icon": "⛔",
                    "isCorrect": false
                },
                {
                    "text": "Impossible",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Always dangerous",
                    "icon": "☠️",
                    "isCorrect": false
                }
            ],
            "explanation": "Treated wastewater can be a source for irrigation."
        },
        {
            "question": "Rainwater harvesting:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Is useless",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Reduces need for other sources",
                    "icon": "🌧️",
                    "isCorrect": true
                },
                {
                    "text": "Is prohibited",
                    "icon": "⛔",
                    "isCorrect": false
                },
                {
                    "text": "Harms plants",
                    "icon": "☠️",
                    "isCorrect": false
                }
            ],
            "explanation": "Rainwater is a quality and cheap source for irrigation."
        },
        {
            "question": "Precision irrigation uses:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Random watering",
                    "icon": "🎲",
                    "isCorrect": false
                },
                {
                    "text": "Only guessing",
                    "icon": "🤔",
                    "isCorrect": false
                },
                {
                    "text": "Sensors and data for optimization",
                    "icon": "📊",
                    "isCorrect": true
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "Precision irrigation applies water only where actually needed."
        },
        {
            "question": "Drought-tolerant varieties:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Don't exist",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Are lower quality",
                    "icon": "📉",
                    "isCorrect": false
                },
                {
                    "text": "Require less water",
                    "icon": "🌵",
                    "isCorrect": true
                },
                {
                    "text": "Require more water",
                    "icon": "💦",
                    "isCorrect": false
                }
            ],
            "explanation": "Breeding for drought tolerance reduces irrigation needs."
        },
        {
            "question": "Proper irrigation timing:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Increases consumption",
                    "icon": "📈",
                    "isCorrect": false
                },
                {
                    "text": "Minimizes losses and maximizes effect",
                    "icon": "⏰",
                    "isCorrect": true
                },
                {
                    "text": "Depends on hose color",
                    "icon": "🎨",
                    "isCorrect": false
                },
                {
                    "text": "Is not important",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "Irrigating at the right time and amount is key to water savings."
        },
        {
            "question": "Deficit irrigation can:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Always increase yield",
                    "icon": "📈",
                    "isCorrect": false
                },
                {
                    "text": "Destroy the crop",
                    "icon": "☠️",
                    "isCorrect": false
                },
                {
                    "text": "Save water with minimal yield impact",
                    "icon": "💧",
                    "isCorrect": true
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "Controlled stress in some stages can improve quality and save water."
        }
    ],
    "module4_level7": [
        {
            "question": "Tomatoes need:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "No water",
                    "icon": "🏜️",
                    "isCorrect": false
                },
                {
                    "text": "Regular irrigation without stress",
                    "icon": "🍅",
                    "isCorrect": true
                },
                {
                    "text": "Salty water",
                    "icon": "🧂",
                    "isCorrect": false
                },
                {
                    "text": "Only rain",
                    "icon": "🌧️",
                    "isCorrect": false
                }
            ],
            "explanation": "Irregular tomato irrigation causes fruit cracking."
        },
        {
            "question": "Grapevines under deficit irrigation:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Can have better wine quality",
                    "icon": "🍇",
                    "isCorrect": true
                },
                {
                    "text": "No effect",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Always die",
                    "icon": "☠️",
                    "isCorrect": false
                },
                {
                    "text": "Lose leaves",
                    "icon": "🍂",
                    "isCorrect": false
                }
            ],
            "explanation": "Mild stress concentrates sugars and aromatic compounds in grapes."
        },
        {
            "question": "Corn is critical for water during:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Never",
                    "icon": "⛔",
                    "isCorrect": false
                },
                {
                    "text": "Tasseling and flowering period",
                    "icon": "🌽",
                    "isCorrect": true
                },
                {
                    "text": "In winter",
                    "icon": "❄️",
                    "isCorrect": false
                },
                {
                    "text": "After harvest",
                    "icon": "✂️",
                    "isCorrect": false
                }
            ],
            "explanation": "Water shortage during flowering causes poor pollination and empty ears."
        },
        {
            "question": "Potatoes require:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Even moisture for quality tubers",
                    "icon": "🥔",
                    "isCorrect": true
                },
                {
                    "text": "Drought",
                    "icon": "🏜️",
                    "isCorrect": false
                },
                {
                    "text": "Flooding",
                    "icon": "🌊",
                    "isCorrect": false
                },
                {
                    "text": "Salty water",
                    "icon": "🧂",
                    "isCorrect": false
                }
            ],
            "explanation": "Moisture fluctuations cause cracks and tuber deformities."
        },
        {
            "question": "Fruit trees have critical periods:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "During flowering and fruit filling",
                    "icon": "🍎",
                    "isCorrect": true
                },
                {
                    "text": "In winter",
                    "icon": "❄️",
                    "isCorrect": false
                },
                {
                    "text": "Only after harvest",
                    "icon": "✂️",
                    "isCorrect": false
                },
                {
                    "text": "Never",
                    "icon": "⛔",
                    "isCorrect": false
                }
            ],
            "explanation": "Water shortage in critical phases reduces fruit size and quality."
        },
        {
            "question": "Lettuce needs:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Hot water",
                    "icon": "🔥",
                    "isCorrect": false
                },
                {
                    "text": "No water",
                    "icon": "🏜️",
                    "isCorrect": false
                },
                {
                    "text": "Only leaf spraying",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "Frequent, light irrigation",
                    "icon": "🥬",
                    "isCorrect": true
                }
            ],
            "explanation": "Lettuce has shallow roots and requires constant surface moisture."
        },
        {
            "question": "Onions and garlic:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Love flooding",
                    "icon": "🌊",
                    "isCorrect": false
                },
                {
                    "text": "Need water until harvest",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Need dry conditions before harvest",
                    "icon": "🧅",
                    "isCorrect": true
                },
                {
                    "text": "Don't need water",
                    "icon": "🏜️",
                    "isCorrect": false
                }
            ],
            "explanation": "Drying before harvest improves storability of bulb crops."
        },
        {
            "question": "Wheat is most sensitive to drought during:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Stem elongation and grain filling",
                    "icon": "🌾",
                    "isCorrect": true
                },
                {
                    "text": "After harvest",
                    "icon": "✂️",
                    "isCorrect": false
                },
                {
                    "text": "At sowing",
                    "icon": "🌰",
                    "isCorrect": false
                },
                {
                    "text": "In winter",
                    "icon": "❄️",
                    "isCorrect": false
                }
            ],
            "explanation": "Drought in critical phases significantly reduces yield and grain quality."
        },
        {
            "question": "Strawberries require:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Spraying on fruit",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "Drip irrigation for quality fruit",
                    "icon": "🍓",
                    "isCorrect": true
                },
                {
                    "text": "Flooding",
                    "icon": "🌊",
                    "isCorrect": false
                },
                {
                    "text": "No water",
                    "icon": "🏜️",
                    "isCorrect": false
                }
            ],
            "explanation": "Wet strawberry fruit is prone to rot, drip irrigation is ideal."
        },
        {
            "question": "Rice is grown:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "In desert",
                    "icon": "🏜️",
                    "isCorrect": false
                },
                {
                    "text": "By drip irrigation",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Without water",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "By flooding fields with water",
                    "icon": "🌾",
                    "isCorrect": true
                }
            ],
            "explanation": "Rice traditionally grows in flooded paddies, though more efficient methods exist."
        }
    ],
    "module4_level8": [
        {
            "question": "Clogged drippers cause:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Uneven irrigation",
                    "icon": "🔧",
                    "isCorrect": true
                },
                {
                    "text": "Better growth",
                    "icon": "📈",
                    "isCorrect": false
                },
                {
                    "text": "Water savings",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "Clogged drippers mean some plants don't receive water."
        },
        {
            "question": "System flushing is done:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only at installation",
                    "icon": "🔧",
                    "isCorrect": false
                },
                {
                    "text": "Regularly to remove deposits",
                    "icon": "🔄",
                    "isCorrect": true
                },
                {
                    "text": "Never",
                    "icon": "⛔",
                    "isCorrect": false
                },
                {
                    "text": "Only when broken",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "Regular flushing extends system lifespan."
        },
        {
            "question": "A leak in the system:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Improves irrigation",
                    "icon": "📈",
                    "isCorrect": false
                },
                {
                    "text": "Causes nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Is desirable",
                    "icon": "✅",
                    "isCorrect": false
                },
                {
                    "text": "Causes water and pressure losses",
                    "icon": "💦",
                    "isCorrect": true
                }
            ],
            "explanation": "Leaks must be repaired immediately to maintain efficiency."
        },
        {
            "question": "Filters should be:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Regularly cleaned or replaced",
                    "icon": "🔧",
                    "isCorrect": true
                },
                {
                    "text": "Ignored",
                    "icon": "🙈",
                    "isCorrect": false
                },
                {
                    "text": "Never cleaned",
                    "icon": "⛔",
                    "isCorrect": false
                },
                {
                    "text": "Thrown away",
                    "icon": "🗑️",
                    "isCorrect": false
                }
            ],
            "explanation": "Clogged filters reduce flow and pressure in the system."
        },
        {
            "question": "Winterizing the system includes:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Draining water before freezing",
                    "icon": "❄️",
                    "isCorrect": true
                },
                {
                    "text": "Only turning off",
                    "icon": "🔌",
                    "isCorrect": false
                },
                {
                    "text": "Filling with water",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "Water in pipes would freeze and damage the system."
        },
        {
            "question": "Pressure check is done:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "By smell",
                    "icon": "👃",
                    "isCorrect": false
                },
                {
                    "text": "By listening",
                    "icon": "👂",
                    "isCorrect": false
                },
                {
                    "text": "By sight",
                    "icon": "👀",
                    "isCorrect": false
                },
                {
                    "text": "With a pressure gauge at various points",
                    "icon": "📊",
                    "isCorrect": true
                }
            ],
            "explanation": "Pressure drop indicates a leak or blockage."
        },
        {
            "question": "Rodents can:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Clean filters",
                    "icon": "🔧",
                    "isCorrect": false
                },
                {
                    "text": "Do nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Chew through hoses",
                    "icon": "🐀",
                    "isCorrect": true
                },
                {
                    "text": "Improve the system",
                    "icon": "📈",
                    "isCorrect": false
                }
            ],
            "explanation": "Rodent protection is important especially for subsurface irrigation."
        },
        {
            "question": "UV radiation damages:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Plastic components",
                    "icon": "☀️",
                    "isCorrect": true
                },
                {
                    "text": "Only water",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Only metal",
                    "icon": "⚙️",
                    "isCorrect": false
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "Hoses exposed to sunlight degrade faster."
        },
        {
            "question": "Chemical system cleaning:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Always harmful",
                    "icon": "☠️",
                    "isCorrect": false
                },
                {
                    "text": "Removes deposits and biofilm",
                    "icon": "🧪",
                    "isCorrect": true
                },
                {
                    "text": "Does nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Is prohibited",
                    "icon": "⛔",
                    "isCorrect": false
                }
            ],
            "explanation": "Acid or oxidizing agents clean clogged drippers."
        },
        {
            "question": "Warranty period for irrigation systems is usually:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "1 day",
                    "icon": "📆",
                    "isCorrect": false
                },
                {
                    "text": "None",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "1-5 years depending on component",
                    "icon": "📅",
                    "isCorrect": true
                },
                {
                    "text": "Forever",
                    "icon": "♾️",
                    "isCorrect": false
                }
            ],
            "explanation": "Quality components have warranties, lifespan can be longer."
        }
    ],
    "module4_level9": [
        {
            "question": "IoT in irrigation means:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Connected smart devices",
                    "icon": "📱",
                    "isCorrect": true
                },
                {
                    "text": "A type of water",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "A type of hose",
                    "icon": "🔧",
                    "isCorrect": false
                }
            ],
            "explanation": "Internet of Things enables remote monitoring and control of irrigation."
        },
        {
            "question": "Soil moisture sensors:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Measure nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Measure current conditions in real time",
                    "icon": "📊",
                    "isCorrect": true
                },
                {
                    "text": "Only measure temperature",
                    "icon": "🌡️",
                    "isCorrect": false
                },
                {
                    "text": "Only predict",
                    "icon": "🔮",
                    "isCorrect": false
                }
            ],
            "explanation": "Capacitance or tensiometric sensors provide accurate moisture data."
        },
        {
            "question": "A weather station on the farm:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Is useless",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Only measures rain",
                    "icon": "🌧️",
                    "isCorrect": false
                },
                {
                    "text": "Predicts yield",
                    "icon": "🌾",
                    "isCorrect": false
                },
                {
                    "text": "Provides data for calculating water needs",
                    "icon": "🌤️",
                    "isCorrect": true
                }
            ],
            "explanation": "Local data is more accurate than general forecasts."
        },
        {
            "question": "Smartphone apps enable:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Nothing useful",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Only games",
                    "icon": "🎮",
                    "isCorrect": false
                },
                {
                    "text": "Remote control and monitoring",
                    "icon": "📱",
                    "isCorrect": true
                },
                {
                    "text": "Only calling",
                    "icon": "📞",
                    "isCorrect": false
                }
            ],
            "explanation": "Mobile apps provide overview and control from anywhere."
        },
        {
            "question": "Drones in irrigation are used for:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Only spraying",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "Only entertainment",
                    "icon": "🎉",
                    "isCorrect": false
                },
                {
                    "text": "Monitoring crop conditions",
                    "icon": "🛸",
                    "isCorrect": true
                }
            ],
            "explanation": "Drones with multispectral cameras detect plant stress."
        },
        {
            "question": "NDVI index shows:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Vegetation health status",
                    "icon": "🌿",
                    "isCorrect": true
                },
                {
                    "text": "Only temperature",
                    "icon": "🌡️",
                    "isCorrect": false
                },
                {
                    "text": "Crop prices",
                    "icon": "💰",
                    "isCorrect": false
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "NDVI from satellites or drones identifies stressed areas."
        },
        {
            "question": "Predictive irrigation uses:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only history",
                    "icon": "📜",
                    "isCorrect": false
                },
                {
                    "text": "Randomness",
                    "icon": "🎲",
                    "isCorrect": false
                },
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Weather forecasts and AI",
                    "icon": "🤖",
                    "isCorrect": true
                }
            ],
            "explanation": "The system predicts needs and sets irrigation proactively."
        },
        {
            "question": "Cloud computing in irrigation:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Is useless",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Processes and stores data online",
                    "icon": "☁️",
                    "isCorrect": true
                },
                {
                    "text": "Only backs up",
                    "icon": "💾",
                    "isCorrect": false
                },
                {
                    "text": "Creates clouds for rain",
                    "icon": "🌧️",
                    "isCorrect": false
                }
            ],
            "explanation": "Cloud platforms analyze data and optimize decision-making."
        },
        {
            "question": "Machine learning in irrigation:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Learns from data and improves control",
                    "icon": "🧠",
                    "isCorrect": true
                },
                {
                    "text": "Replaces plants",
                    "icon": "🤖",
                    "isCorrect": false
                },
                {
                    "text": "Does nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Is dangerous",
                    "icon": "⚠️",
                    "isCorrect": false
                }
            ],
            "explanation": "AI algorithms learn from historical data and optimize irrigation."
        },
        {
            "question": "A digital twin of a farm is:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "A farm copy",
                    "icon": "📋",
                    "isCorrect": false
                },
                {
                    "text": "A virtual model for simulations",
                    "icon": "💻",
                    "isCorrect": true
                },
                {
                    "text": "A second farm",
                    "icon": "🏡",
                    "isCorrect": false
                }
            ],
            "explanation": "Digital twin allows testing scenarios without risk."
        }
    ],
    "module4_level10": [
        {
            "question": "Water scarcity is:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Not a problem",
                    "icon": "✅",
                    "isCorrect": false
                },
                {
                    "text": "A global challenge for agriculture",
                    "icon": "🌍",
                    "isCorrect": true
                },
                {
                    "text": "A solved problem",
                    "icon": "✅",
                    "isCorrect": false
                },
                {
                    "text": "Only a local problem",
                    "icon": "📍",
                    "isCorrect": false
                }
            ],
            "explanation": "Climate change and population growth increase pressure on water resources."
        },
        {
            "question": "Desalination is:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Heating water",
                    "icon": "🔥",
                    "isCorrect": false
                },
                {
                    "text": "Filtration",
                    "icon": "🔍",
                    "isCorrect": false
                },
                {
                    "text": "Adding salt to water",
                    "icon": "🧂",
                    "isCorrect": false
                },
                {
                    "text": "Removing salt from seawater",
                    "icon": "🌊",
                    "isCorrect": true
                }
            ],
            "explanation": "Desalination can be a water source in coastal areas."
        },
        {
            "question": "Greywater recycling:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Is prohibited",
                    "icon": "⛔",
                    "isCorrect": false
                },
                {
                    "text": "Harms plants",
                    "icon": "☠️",
                    "isCorrect": false
                },
                {
                    "text": "Uses household wastewater",
                    "icon": "♻️",
                    "isCorrect": true
                },
                {
                    "text": "Is impossible",
                    "icon": "❌",
                    "isCorrect": false
                }
            ],
            "explanation": "Greywater (from sinks, showers) can be used after treatment."
        },
        {
            "question": "Water footprint is:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "A type of irrigation",
                    "icon": "💧",
                    "isCorrect": false
                },
                {
                    "text": "A footprint in water",
                    "icon": "🦶",
                    "isCorrect": false
                },
                {
                    "text": "Water use of a product or activity",
                    "icon": "👣",
                    "isCorrect": true
                }
            ],
            "explanation": "Water footprint measures total water consumption in a life cycle."
        },
        {
            "question": "Virtual water is:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Doesn't exist",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Water used to produce a product",
                    "icon": "💧",
                    "isCorrect": true
                },
                {
                    "text": "Artificial water",
                    "icon": "🤖",
                    "isCorrect": false
                },
                {
                    "text": "Water in a video game",
                    "icon": "🎮",
                    "isCorrect": false
                }
            ],
            "explanation": "Importing food is actually importing virtual water from other regions."
        },
        {
            "question": "Aquaponics combines:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Nothing",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Only fish",
                    "icon": "🐠",
                    "isCorrect": false
                },
                {
                    "text": "Only plants",
                    "icon": "🌱",
                    "isCorrect": false
                },
                {
                    "text": "Fish farming and plant growing",
                    "icon": "🐟",
                    "isCorrect": true
                }
            ],
            "explanation": "Aquaponics uses fish waste water as fertilizer for plants."
        },
        {
            "question": "Atmospheric water is obtained from:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only rivers",
                    "icon": "🏞️",
                    "isCorrect": false
                },
                {
                    "text": "Not possible",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Fog and air humidity",
                    "icon": "🌫️",
                    "isCorrect": true
                },
                {
                    "text": "Only rain",
                    "icon": "🌧️",
                    "isCorrect": false
                }
            ],
            "explanation": "Special nets and devices can collect water from air."
        },
        {
            "question": "Future precision irrigation:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Will disappear",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Won't exist",
                    "icon": "⛔",
                    "isCorrect": false
                },
                {
                    "text": "Will be fully automatic and predictive",
                    "icon": "🤖",
                    "isCorrect": true
                },
                {
                    "text": "Will be only manual",
                    "icon": "✋",
                    "isCorrect": false
                }
            ],
            "explanation": "AI and sensors will enable irrigation precisely according to each plant's needs."
        },
        {
            "question": "Responsible water management requires:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Nobody",
                    "icon": "❌",
                    "isCorrect": false
                },
                {
                    "text": "Only government",
                    "icon": "🏛️",
                    "isCorrect": false
                },
                {
                    "text": "Only farmers",
                    "icon": "👨‍🌾",
                    "isCorrect": false
                },
                {
                    "text": "Cooperation of all users",
                    "icon": "🤝",
                    "isCorrect": true
                }
            ],
            "explanation": "Sustainable water use is a shared responsibility."
        },
        {
            "question": "The future of irrigation is heading towards:",
            "type": "multiple_choice",
            "options": [
                {
                    "text": "Only traditional methods",
                    "icon": "📜",
                    "isCorrect": false
                },
                {
                    "text": "Efficiency, recycling, smart systems",
                    "icon": "🎯",
                    "isCorrect": true
                },
                {
                    "text": "Wasting water",
                    "icon": "💦",
                    "isCorrect": false
                },
                {
                    "text": "Abolishing irrigation",
                    "icon": "⛔",
                    "isCorrect": false
                }
            ],
            "explanation": "Innovation and sustainability will be key to ensuring food production."
        }
    ]
};

window.MODULE4_QUESTIONS = MODULE4_QUESTIONS;
