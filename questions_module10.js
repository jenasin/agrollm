// Module 10: Innovation & Technology - 100 questions (10 levels x 10 questions)
const MODULE10_QUESTIONS = {
    // Level 1 - Technology Basics
    module10_level1: [
        {
            question: "What is agricultural technology?",
            type: "multiple_choice",
            options: [
                { text: "Tools and methods to improve farming", icon: "🔧", isCorrect: true },
                { text: "Only computers", icon: "💻", isCorrect: false },
                { text: "Just tractors", icon: "🚜", isCorrect: false },
                { text: "Factory equipment", icon: "🏭", isCorrect: false }
            ],
            explanation: "Agricultural technology includes all tools, techniques, and innovations that help farmers produce food more efficiently."
        },
        {
            question: "How can smartphones help farmers?",
            type: "multiple_choice",
            options: [
                { text: "Weather apps, market prices, learning resources", icon: "📱", isCorrect: true },
                { text: "Only for games", icon: "🎮", isCorrect: false },
                { text: "No use for farming", icon: "❌", isCorrect: false },
                { text: "Only phone calls", icon: "📞", isCorrect: false }
            ],
            explanation: "Smartphones give farmers access to weather forecasts, market prices, farming advice, and communication tools."
        },
        {
            question: "What is GPS used for in farming?",
            type: "multiple_choice",
            options: [
                { text: "Navigation and precise field mapping", icon: "🛰️", isCorrect: true },
                { text: "Watching television", icon: "📺", isCorrect: false },
                { text: "Making phone calls", icon: "📞", isCorrect: false },
                { text: "Playing music", icon: "🎵", isCorrect: false }
            ],
            explanation: "GPS helps farmers navigate fields precisely, create maps, and apply inputs exactly where needed."
        },
        {
            question: "What is solar power used for on farms?",
            type: "multiple_choice",
            options: [
                { text: "Powering pumps, lights, and equipment", icon: "☀️", isCorrect: true },
                { text: "Growing plants indoors only", icon: "🌱", isCorrect: false },
                { text: "Heating water for cooking", icon: "🍳", isCorrect: false },
                { text: "No farming use", icon: "❌", isCorrect: false }
            ],
            explanation: "Solar panels convert sunlight to electricity for irrigation pumps, lighting, fencing, and other farm equipment."
        },
        {
            question: "What is a weather app useful for?",
            type: "multiple_choice",
            options: [
                { text: "Planning farm activities based on forecasts", icon: "🌤️", isCorrect: true },
                { text: "Changing the weather", icon: "🌪️", isCorrect: false },
                { text: "Entertainment only", icon: "🎬", isCorrect: false },
                { text: "No farming use", icon: "❌", isCorrect: false }
            ],
            explanation: "Weather apps help farmers plan planting, harvesting, spraying, and irrigation based on upcoming conditions."
        },
        {
            question: "What is mechanization?",
            type: "multiple_choice",
            options: [
                { text: "Using machines instead of manual labor", icon: "🚜", isCorrect: true },
                { text: "Building mechanical toys", icon: "🤖", isCorrect: false },
                { text: "Repairing cars", icon: "🚗", isCorrect: false },
                { text: "Making metal products", icon: "⚙️", isCorrect: false }
            ],
            explanation: "Mechanization replaces human and animal labor with machines, increasing efficiency and productivity."
        },
        {
            question: "How does technology help with pest identification?",
            type: "multiple_choice",
            options: [
                { text: "Apps can identify pests from photos", icon: "📸", isCorrect: true },
                { text: "Technology can't help with pests", icon: "❌", isCorrect: false },
                { text: "Only books help", icon: "📚", isCorrect: false },
                { text: "Pests don't need identification", icon: "🐛", isCorrect: false }
            ],
            explanation: "Mobile apps use image recognition to identify pests and diseases, often suggesting treatments."
        },
        {
            question: "What is a simple innovation for water storage?",
            type: "multiple_choice",
            options: [
                { text: "Rainwater harvesting tanks", icon: "🪣", isCorrect: true },
                { text: "Leaving taps running", icon: "🚿", isCorrect: false },
                { text: "Wasting water", icon: "💧", isCorrect: false },
                { text: "Using more groundwater", icon: "⬇️", isCorrect: false }
            ],
            explanation: "Simple rainwater harvesting systems collect and store rain for use during dry periods."
        },
        {
            question: "What is drip irrigation?",
            type: "multiple_choice",
            options: [
                { text: "Slow water delivery directly to plant roots", icon: "💧", isCorrect: true },
                { text: "Flooding entire fields", icon: "🌊", isCorrect: false },
                { text: "Spraying water in air", icon: "🌧️", isCorrect: false },
                { text: "Using rain only", icon: "☔", isCorrect: false }
            ],
            explanation: "Drip irrigation delivers water slowly through tubes directly to plant roots, saving 30-50% water."
        },
        {
            question: "Why is internet access valuable for farmers?",
            type: "multiple_choice",
            options: [
                { text: "Access to information, markets, and communication", icon: "🌐", isCorrect: true },
                { text: "Only for entertainment", icon: "🎬", isCorrect: false },
                { text: "No farming value", icon: "❌", isCorrect: false },
                { text: "Only for rich farmers", icon: "💰", isCorrect: false }
            ],
            explanation: "Internet connects farmers to knowledge, market prices, buyers, weather data, and extension services."
        }
    ],

    // Level 2 - Precision Agriculture
    module10_level2: [
        {
            question: "What is precision agriculture?",
            type: "multiple_choice",
            options: [
                { text: "Using technology for site-specific farm management", icon: "🎯", isCorrect: true },
                { text: "Being precise about timing only", icon: "⏰", isCorrect: false },
                { text: "Traditional farming methods", icon: "👨‍🌾", isCorrect: false },
                { text: "Using less equipment", icon: "📉", isCorrect: false }
            ],
            explanation: "Precision agriculture uses technology to optimize inputs like water, fertilizer, and pesticides for each part of a field."
        },
        {
            question: "What is variable rate application?",
            type: "multiple_choice",
            options: [
                { text: "Applying different amounts based on field needs", icon: "📊", isCorrect: true },
                { text: "Same amount everywhere", icon: "➡️", isCorrect: false },
                { text: "Random application", icon: "🎲", isCorrect: false },
                { text: "No application", icon: "❌", isCorrect: false }
            ],
            explanation: "Variable rate technology adjusts fertilizer, seed, or pesticide amounts based on specific field zone needs."
        },
        {
            question: "What is yield mapping?",
            type: "multiple_choice",
            options: [
                { text: "Creating maps showing harvest amounts across fields", icon: "🗺️", isCorrect: true },
                { text: "Drawing field boundaries", icon: "📏", isCorrect: false },
                { text: "Mapping roads", icon: "🛣️", isCorrect: false },
                { text: "Weather mapping", icon: "🌤️", isCorrect: false }
            ],
            explanation: "Yield maps show which parts of fields produce more or less, helping target improvements."
        },
        {
            question: "What is soil sampling?",
            type: "multiple_choice",
            options: [
                { text: "Testing soil to determine nutrient levels", icon: "🧪", isCorrect: true },
                { text: "Taking soil to sell", icon: "💰", isCorrect: false },
                { text: "Moving soil between fields", icon: "🚛", isCorrect: false },
                { text: "Removing all soil", icon: "🏜️", isCorrect: false }
            ],
            explanation: "Soil samples are analyzed to determine nutrient levels, pH, and organic matter for targeted fertilization."
        },
        {
            question: "What is auto-steering on tractors?",
            type: "multiple_choice",
            options: [
                { text: "GPS-guided automatic steering", icon: "🛰️", isCorrect: true },
                { text: "Self-driving on roads", icon: "🚗", isCorrect: false },
                { text: "Steering wheel removal", icon: "❌", isCorrect: false },
                { text: "Manual steering only", icon: "🖐️", isCorrect: false }
            ],
            explanation: "Auto-steer uses GPS to guide tractors precisely, reducing overlaps and gaps in field operations."
        },
        {
            question: "What are the benefits of precision agriculture?",
            type: "multiple_choice",
            options: [
                { text: "Less waste, higher yields, lower costs", icon: "📈", isCorrect: true },
                { text: "More work for farmers", icon: "😰", isCorrect: false },
                { text: "Higher input costs", icon: "💸", isCorrect: false },
                { text: "No benefits", icon: "❌", isCorrect: false }
            ],
            explanation: "Precision farming reduces input waste, optimizes yields, lowers costs, and helps the environment."
        },
        {
            question: "What is a soil sensor?",
            type: "multiple_choice",
            options: [
                { text: "Device measuring soil moisture, temperature, or nutrients", icon: "📡", isCorrect: true },
                { text: "Alarm system", icon: "🚨", isCorrect: false },
                { text: "Security camera", icon: "📹", isCorrect: false },
                { text: "Sound recorder", icon: "🎙️", isCorrect: false }
            ],
            explanation: "Soil sensors measure conditions like moisture, temperature, and nutrient levels to guide irrigation and fertilization."
        },
        {
            question: "What is a prescription map?",
            type: "multiple_choice",
            options: [
                { text: "Map telling equipment how much input to apply where", icon: "🗺️", isCorrect: true },
                { text: "Doctor's prescription", icon: "💊", isCorrect: false },
                { text: "Weather forecast map", icon: "🌤️", isCorrect: false },
                { text: "Road map", icon: "🛣️", isCorrect: false }
            ],
            explanation: "Prescription maps guide variable rate equipment on how much fertilizer, seed, or chemical to apply in each zone."
        },
        {
            question: "What is NDVI?",
            type: "multiple_choice",
            options: [
                { text: "Vegetation index measuring crop health from images", icon: "🌿", isCorrect: true },
                { text: "Type of fertilizer", icon: "🧪", isCorrect: false },
                { text: "Tractor model", icon: "🚜", isCorrect: false },
                { text: "Weather measurement", icon: "🌡️", isCorrect: false }
            ],
            explanation: "NDVI (Normalized Difference Vegetation Index) uses satellite or drone images to assess crop health and vigor."
        },
        {
            question: "Why divide fields into management zones?",
            type: "multiple_choice",
            options: [
                { text: "Different areas need different treatment", icon: "🗺️", isCorrect: true },
                { text: "Makes fields look nice", icon: "🎨", isCorrect: false },
                { text: "No reason", icon: "❓", isCorrect: false },
                { text: "Legal requirement", icon: "📜", isCorrect: false }
            ],
            explanation: "Management zones group areas with similar characteristics so inputs can be tailored to specific needs."
        }
    ],

    // Level 3 - Drones & Sensors
    module10_level3: [
        {
            question: "How are drones used in farming?",
            type: "multiple_choice",
            options: [
                { text: "Crop monitoring, spraying, and mapping", icon: "🚁", isCorrect: true },
                { text: "Only for photography hobby", icon: "📸", isCorrect: false },
                { text: "Package delivery only", icon: "📦", isCorrect: false },
                { text: "No farming use", icon: "❌", isCorrect: false }
            ],
            explanation: "Agricultural drones monitor crop health, spray pesticides precisely, and create detailed field maps."
        },
        {
            question: "What is remote sensing?",
            type: "multiple_choice",
            options: [
                { text: "Collecting data without touching the subject", icon: "🛰️", isCorrect: true },
                { text: "Controlling TV remotely", icon: "📺", isCorrect: false },
                { text: "Feeling emotions from far", icon: "❤️", isCorrect: false },
                { text: "Phone calls", icon: "📞", isCorrect: false }
            ],
            explanation: "Remote sensing uses satellites, aircraft, or drones to gather information about crops and land from above."
        },
        {
            question: "What can multispectral cameras detect?",
            type: "multiple_choice",
            options: [
                { text: "Plant stress, disease, and nutrient deficiency", icon: "📷", isCorrect: true },
                { text: "Only visible colors", icon: "🌈", isCorrect: false },
                { text: "Underground water", icon: "💧", isCorrect: false },
                { text: "Future weather", icon: "🔮", isCorrect: false }
            ],
            explanation: "Multispectral cameras capture light wavelengths invisible to humans, revealing crop stress before it's visible."
        },
        {
            question: "What is a weather station sensor?",
            type: "multiple_choice",
            options: [
                { text: "Device measuring local weather conditions", icon: "🌡️", isCorrect: true },
                { text: "TV channel", icon: "📺", isCorrect: false },
                { text: "Radio station", icon: "📻", isCorrect: false },
                { text: "Train station", icon: "🚂", isCorrect: false }
            ],
            explanation: "On-farm weather stations provide real-time local data for temperature, humidity, rain, and wind."
        },
        {
            question: "What is an IoT device?",
            type: "multiple_choice",
            options: [
                { text: "Internet-connected sensor or device", icon: "📡", isCorrect: true },
                { text: "Type of crop", icon: "🌾", isCorrect: false },
                { text: "Farming tool", icon: "🔧", isCorrect: false },
                { text: "Storage container", icon: "📦", isCorrect: false }
            ],
            explanation: "Internet of Things devices connect sensors and equipment to share data and enable remote monitoring."
        },
        {
            question: "How do moisture sensors help irrigation?",
            type: "multiple_choice",
            options: [
                { text: "Show when and how much to water", icon: "💧", isCorrect: true },
                { text: "Measure rainfall only", icon: "🌧️", isCorrect: false },
                { text: "Pump water automatically", icon: "⛽", isCorrect: false },
                { text: "No irrigation help", icon: "❌", isCorrect: false }
            ],
            explanation: "Soil moisture sensors indicate when soil needs water, preventing over or under-watering."
        },
        {
            question: "What is thermal imaging in agriculture?",
            type: "multiple_choice",
            options: [
                { text: "Detecting temperature differences in crops", icon: "🌡️", isCorrect: true },
                { text: "Heating greenhouses", icon: "🏠", isCorrect: false },
                { text: "Cooking food", icon: "🍳", isCorrect: false },
                { text: "Warming animals", icon: "🐄", isCorrect: false }
            ],
            explanation: "Thermal cameras detect temperature variations that indicate water stress, disease, or irrigation problems."
        },
        {
            question: "What data can livestock sensors collect?",
            type: "multiple_choice",
            options: [
                { text: "Location, health, activity, and feeding", icon: "🐄", isCorrect: true },
                { text: "Only weight", icon: "⚖️", isCorrect: false },
                { text: "Only location", icon: "📍", isCorrect: false },
                { text: "No useful data", icon: "❌", isCorrect: false }
            ],
            explanation: "Animal sensors track location, movement, temperature, eating patterns, and health indicators."
        },
        {
            question: "What is LiDAR used for in farming?",
            type: "multiple_choice",
            options: [
                { text: "Creating 3D maps of terrain and crops", icon: "🗺️", isCorrect: true },
                { text: "Lighting fields at night", icon: "💡", isCorrect: false },
                { text: "Communication", icon: "📞", isCorrect: false },
                { text: "Pest control", icon: "🐛", isCorrect: false }
            ],
            explanation: "LiDAR uses laser pulses to create detailed 3D maps showing elevation, plant height, and terrain."
        },
        {
            question: "Why use drone spraying?",
            type: "multiple_choice",
            options: [
                { text: "Precise application, less chemical, access difficult areas", icon: "🚁", isCorrect: true },
                { text: "More expensive always", icon: "💸", isCorrect: false },
                { text: "Less accurate than manual", icon: "📉", isCorrect: false },
                { text: "Only for large farms", icon: "🏞️", isCorrect: false }
            ],
            explanation: "Drone sprayers apply chemicals precisely where needed, reducing waste and reaching difficult terrain."
        }
    ],

    // Level 4 - Smart Irrigation
    module10_level4: [
        {
            question: "What is smart irrigation?",
            type: "multiple_choice",
            options: [
                { text: "Automated watering based on actual plant needs", icon: "💧", isCorrect: true },
                { text: "Watering on fixed schedule", icon: "📅", isCorrect: false },
                { text: "Manual watering", icon: "🖐️", isCorrect: false },
                { text: "No watering system", icon: "❌", isCorrect: false }
            ],
            explanation: "Smart irrigation uses sensors and data to water crops only when and where needed, saving water."
        },
        {
            question: "What triggers automatic irrigation?",
            type: "multiple_choice",
            options: [
                { text: "Soil moisture sensors detecting dry conditions", icon: "📡", isCorrect: true },
                { text: "Time clock only", icon: "⏰", isCorrect: false },
                { text: "Random activation", icon: "🎲", isCorrect: false },
                { text: "Manual switch only", icon: "🔘", isCorrect: false }
            ],
            explanation: "Sensors detect when soil moisture drops below set levels, automatically triggering irrigation."
        },
        {
            question: "What is fertigation?",
            type: "multiple_choice",
            options: [
                { text: "Applying fertilizer through irrigation water", icon: "💧", isCorrect: true },
                { text: "Spreading dry fertilizer", icon: "🌾", isCorrect: false },
                { text: "Organic composting", icon: "🍂", isCorrect: false },
                { text: "Crop rotation", icon: "🔄", isCorrect: false }
            ],
            explanation: "Fertigation dissolves fertilizer in irrigation water, delivering nutrients directly to plant roots."
        },
        {
            question: "How much water can drip irrigation save?",
            type: "multiple_choice",
            options: [
                { text: "30-50% compared to flood irrigation", icon: "💧", isCorrect: true },
                { text: "No savings", icon: "❌", isCorrect: false },
                { text: "Uses more water", icon: "📈", isCorrect: false },
                { text: "Only 5%", icon: "5️⃣", isCorrect: false }
            ],
            explanation: "Drip irrigation delivers water directly to roots, saving 30-50% compared to flood irrigation."
        },
        {
            question: "What is center pivot irrigation?",
            type: "multiple_choice",
            options: [
                { text: "Rotating sprinkler system on wheels", icon: "🔄", isCorrect: true },
                { text: "Drip irrigation", icon: "💧", isCorrect: false },
                { text: "Flood irrigation", icon: "🌊", isCorrect: false },
                { text: "Rain only", icon: "🌧️", isCorrect: false }
            ],
            explanation: "Center pivot systems rotate around a central point, efficiently irrigating large circular areas."
        },
        {
            question: "What is evapotranspiration data used for?",
            type: "multiple_choice",
            options: [
                { text: "Calculating how much water crops need", icon: "📊", isCorrect: true },
                { text: "Measuring rainfall", icon: "🌧️", isCorrect: false },
                { text: "Testing soil pH", icon: "🧪", isCorrect: false },
                { text: "Counting plants", icon: "🌱", isCorrect: false }
            ],
            explanation: "ET data shows how much water plants lose through evaporation and transpiration, guiding irrigation amounts."
        },
        {
            question: "What is deficit irrigation?",
            type: "multiple_choice",
            options: [
                { text: "Deliberately applying less water at certain stages", icon: "💧", isCorrect: true },
                { text: "Over-watering crops", icon: "🌊", isCorrect: false },
                { text: "No irrigation at all", icon: "❌", isCorrect: false },
                { text: "Flood irrigation", icon: "🌊", isCorrect: false }
            ],
            explanation: "Deficit irrigation strategically reduces water at less critical growth stages to save water without losing yield."
        },
        {
            question: "What is a solenoid valve in irrigation?",
            type: "multiple_choice",
            options: [
                { text: "Electric valve controlling water flow", icon: "🔌", isCorrect: true },
                { text: "Type of pump", icon: "⛽", isCorrect: false },
                { text: "Water filter", icon: "🧪", isCorrect: false },
                { text: "Storage tank", icon: "🪣", isCorrect: false }
            ],
            explanation: "Solenoid valves open and close electronically, allowing automated control of irrigation zones."
        },
        {
            question: "Why use multiple irrigation zones?",
            type: "multiple_choice",
            options: [
                { text: "Different crops or soils need different amounts", icon: "🗺️", isCorrect: true },
                { text: "Looks more organized", icon: "📐", isCorrect: false },
                { text: "Uses more water", icon: "💧", isCorrect: false },
                { text: "No benefit", icon: "❌", isCorrect: false }
            ],
            explanation: "Zones allow different watering schedules for crops with different needs or soil types."
        },
        {
            question: "What is subsurface drip irrigation?",
            type: "multiple_choice",
            options: [
                { text: "Drip lines buried underground near roots", icon: "⬇️", isCorrect: true },
                { text: "Sprinklers underground", icon: "🌊", isCorrect: false },
                { text: "Flood irrigation", icon: "💧", isCorrect: false },
                { text: "Rain harvesting", icon: "🌧️", isCorrect: false }
            ],
            explanation: "Subsurface drip places irrigation lines below soil surface, reducing evaporation and weed growth."
        }
    ],

    // Level 5 - Data & Farm Management
    module10_level5: [
        {
            question: "What is farm management software?",
            type: "multiple_choice",
            options: [
                { text: "Digital tools for planning and tracking farm operations", icon: "💻", isCorrect: true },
                { text: "Video games", icon: "🎮", isCorrect: false },
                { text: "Social media", icon: "📱", isCorrect: false },
                { text: "Email only", icon: "📧", isCorrect: false }
            ],
            explanation: "Farm management software helps track records, plan activities, manage finances, and analyze performance."
        },
        {
            question: "What is big data in agriculture?",
            type: "multiple_choice",
            options: [
                { text: "Large amounts of farm data for analysis", icon: "📊", isCorrect: true },
                { text: "Large farm size", icon: "🏞️", isCorrect: false },
                { text: "Big tractors", icon: "🚜", isCorrect: false },
                { text: "Large harvests", icon: "🌾", isCorrect: false }
            ],
            explanation: "Big data combines information from many sources to find patterns and improve farming decisions."
        },
        {
            question: "What is cloud storage for farm data?",
            type: "multiple_choice",
            options: [
                { text: "Storing data online accessible from anywhere", icon: "☁️", isCorrect: true },
                { text: "Storing in actual clouds", icon: "🌥️", isCorrect: false },
                { text: "Paper files only", icon: "📄", isCorrect: false },
                { text: "USB drives", icon: "💾", isCorrect: false }
            ],
            explanation: "Cloud storage keeps farm data secure online, accessible from any device with internet."
        },
        {
            question: "Why is data backup important?",
            type: "multiple_choice",
            options: [
                { text: "Protects against data loss", icon: "🛡️", isCorrect: true },
                { text: "Makes computers faster", icon: "⚡", isCorrect: false },
                { text: "Not important", icon: "❌", isCorrect: false },
                { text: "Only for banks", icon: "🏦", isCorrect: false }
            ],
            explanation: "Backups protect valuable farm records from device failure, theft, or accidental deletion."
        },
        {
            question: "What is data-driven decision making?",
            type: "multiple_choice",
            options: [
                { text: "Using information to guide farming choices", icon: "📈", isCorrect: true },
                { text: "Guessing randomly", icon: "🎲", isCorrect: false },
                { text: "Following tradition only", icon: "📜", isCorrect: false },
                { text: "Asking neighbors", icon: "👥", isCorrect: false }
            ],
            explanation: "Data-driven farming uses collected information rather than intuition to make better decisions."
        },
        {
            question: "What can analytics show farmers?",
            type: "multiple_choice",
            options: [
                { text: "Patterns, trends, and improvement opportunities", icon: "📊", isCorrect: true },
                { text: "Only past data", icon: "📅", isCorrect: false },
                { text: "Nothing useful", icon: "❌", isCorrect: false },
                { text: "Weather only", icon: "🌤️", isCorrect: false }
            ],
            explanation: "Analytics reveal patterns in yields, costs, and performance that help identify improvements."
        },
        {
            question: "What is a dashboard in farm software?",
            type: "multiple_choice",
            options: [
                { text: "Visual summary of key farm information", icon: "📺", isCorrect: true },
                { text: "Car dashboard", icon: "🚗", isCorrect: false },
                { text: "Wooden board", icon: "🪵", isCorrect: false },
                { text: "Message board", icon: "📋", isCorrect: false }
            ],
            explanation: "Dashboards display important metrics and data visually for quick understanding of farm status."
        },
        {
            question: "How do digital records compare to paper?",
            type: "multiple_choice",
            options: [
                { text: "Easier to search, analyze, and share", icon: "💻", isCorrect: true },
                { text: "Exactly the same", icon: "➡️", isCorrect: false },
                { text: "Paper is always better", icon: "📄", isCorrect: false },
                { text: "Digital is harder", icon: "😰", isCorrect: false }
            ],
            explanation: "Digital records are searchable, can be analyzed automatically, backed up, and shared easily."
        },
        {
            question: "What is integration between farm systems?",
            type: "multiple_choice",
            options: [
                { text: "Different software sharing data automatically", icon: "🔗", isCorrect: true },
                { text: "Combining farms together", icon: "🏞️", isCorrect: false },
                { text: "Mixing crops", icon: "🌾", isCorrect: false },
                { text: "Combining animals", icon: "🐄", isCorrect: false }
            ],
            explanation: "Integration allows weather stations, sensors, and management software to share data seamlessly."
        },
        {
            question: "What are KPIs in farming?",
            type: "multiple_choice",
            options: [
                { text: "Key Performance Indicators measuring success", icon: "📊", isCorrect: true },
                { text: "Type of seeds", icon: "🌱", isCorrect: false },
                { text: "Tractor parts", icon: "🚜", isCorrect: false },
                { text: "Pest names", icon: "🐛", isCorrect: false }
            ],
            explanation: "KPIs are metrics like yield per hectare, cost per unit, or water efficiency that measure farm performance."
        }
    ],

    // Level 6 - Biotechnology
    module10_level6: [
        {
            question: "What is plant breeding?",
            type: "multiple_choice",
            options: [
                { text: "Developing improved crop varieties", icon: "🌱", isCorrect: true },
                { text: "Raising animals", icon: "🐄", isCorrect: false },
                { text: "Selling seeds", icon: "💰", isCorrect: false },
                { text: "Harvesting crops", icon: "🌾", isCorrect: false }
            ],
            explanation: "Plant breeding develops new crop varieties with better yields, disease resistance, or quality."
        },
        {
            question: "What are hybrid seeds?",
            type: "multiple_choice",
            options: [
                { text: "Seeds from crossing two different parent plants", icon: "🌱", isCorrect: true },
                { text: "Seeds from same plant", icon: "1️⃣", isCorrect: false },
                { text: "Artificial seeds", icon: "🤖", isCorrect: false },
                { text: "Ancient seeds", icon: "📜", isCorrect: false }
            ],
            explanation: "Hybrid seeds come from controlled crossing of different parent lines, often producing higher yields."
        },
        {
            question: "What is tissue culture?",
            type: "multiple_choice",
            options: [
                { text: "Growing plants from small tissue samples in labs", icon: "🔬", isCorrect: true },
                { text: "Type of fabric", icon: "🧵", isCorrect: false },
                { text: "Soil testing", icon: "🧪", isCorrect: false },
                { text: "Plant disease", icon: "🤒", isCorrect: false }
            ],
            explanation: "Tissue culture produces many identical disease-free plants from tiny pieces in sterile laboratory conditions."
        },
        {
            question: "What is marker-assisted selection?",
            type: "multiple_choice",
            options: [
                { text: "Using DNA markers to speed breeding", icon: "🧬", isCorrect: true },
                { text: "Marking fields", icon: "📍", isCorrect: false },
                { text: "Labeling products", icon: "🏷️", isCorrect: false },
                { text: "Painting tractors", icon: "🎨", isCorrect: false }
            ],
            explanation: "Marker-assisted selection uses DNA markers to identify plants with desired traits, speeding up breeding."
        },
        {
            question: "What are biopesticides?",
            type: "multiple_choice",
            options: [
                { text: "Pest control from natural sources", icon: "🌿", isCorrect: true },
                { text: "Chemical pesticides", icon: "🧪", isCorrect: false },
                { text: "Robot pest killers", icon: "🤖", isCorrect: false },
                { text: "No pest control", icon: "❌", isCorrect: false }
            ],
            explanation: "Biopesticides come from natural materials like bacteria, plants, or minerals for eco-friendly pest control."
        },
        {
            question: "What is biofertilizer?",
            type: "multiple_choice",
            options: [
                { text: "Fertilizer containing living microorganisms", icon: "🦠", isCorrect: true },
                { text: "Chemical fertilizer", icon: "🧪", isCorrect: false },
                { text: "Compost only", icon: "🍂", isCorrect: false },
                { text: "No fertilizer", icon: "❌", isCorrect: false }
            ],
            explanation: "Biofertilizers contain beneficial microbes that help plants absorb nutrients from soil."
        },
        {
            question: "What is crop genomics?",
            type: "multiple_choice",
            options: [
                { text: "Study of plant genes and DNA", icon: "🧬", isCorrect: true },
                { text: "Counting crops", icon: "🔢", isCorrect: false },
                { text: "Plant geography", icon: "🗺️", isCorrect: false },
                { text: "Crop diseases", icon: "🤒", isCorrect: false }
            ],
            explanation: "Genomics studies plant DNA to understand traits and develop improved varieties."
        },
        {
            question: "What are nitrogen-fixing bacteria?",
            type: "multiple_choice",
            options: [
                { text: "Microbes that convert air nitrogen for plants", icon: "🦠", isCorrect: true },
                { text: "Harmful bacteria", icon: "☠️", isCorrect: false },
                { text: "Soil pests", icon: "🐛", isCorrect: false },
                { text: "Chemical fixers", icon: "🧪", isCorrect: false }
            ],
            explanation: "Nitrogen-fixing bacteria, especially in legume roots, convert atmospheric nitrogen into plant-usable forms."
        },
        {
            question: "What is micropropagation?",
            type: "multiple_choice",
            options: [
                { text: "Mass producing plants from tiny pieces", icon: "🌱", isCorrect: true },
                { text: "Growing small plants", icon: "🔬", isCorrect: false },
                { text: "Using microscopes", icon: "👀", isCorrect: false },
                { text: "Selling seedlings", icon: "💰", isCorrect: false }
            ],
            explanation: "Micropropagation uses tissue culture to rapidly multiply plants, producing thousands of identical clones."
        },
        {
            question: "Why are disease-resistant varieties important?",
            type: "multiple_choice",
            options: [
                { text: "Reduce pesticide use and crop losses", icon: "🛡️", isCorrect: true },
                { text: "Look prettier", icon: "🌸", isCorrect: false },
                { text: "Taste better", icon: "😋", isCorrect: false },
                { text: "No importance", icon: "❌", isCorrect: false }
            ],
            explanation: "Disease-resistant varieties reduce chemical treatments, lower costs, and prevent yield losses."
        }
    ],

    // Level 7 - Automation & Robotics
    module10_level7: [
        {
            question: "What is agricultural robotics?",
            type: "multiple_choice",
            options: [
                { text: "Machines performing farm tasks automatically", icon: "🤖", isCorrect: true },
                { text: "Robot toys on farms", icon: "🎮", isCorrect: false },
                { text: "Human workers", icon: "👷", isCorrect: false },
                { text: "Computer games", icon: "💻", isCorrect: false }
            ],
            explanation: "Agricultural robots automate tasks like planting, weeding, harvesting, and milking."
        },
        {
            question: "What is autonomous tractors?",
            type: "multiple_choice",
            options: [
                { text: "Self-driving tractors without human operators", icon: "🚜", isCorrect: true },
                { text: "Very large tractors", icon: "📏", isCorrect: false },
                { text: "Electric tractors", icon: "⚡", isCorrect: false },
                { text: "Old tractors", icon: "📜", isCorrect: false }
            ],
            explanation: "Autonomous tractors use GPS and sensors to operate without a human driver in the cab."
        },
        {
            question: "What are robotic milking systems?",
            type: "multiple_choice",
            options: [
                { text: "Machines that milk cows automatically", icon: "🐄", isCorrect: true },
                { text: "Milk storage tanks", icon: "🪣", isCorrect: false },
                { text: "Milk delivery trucks", icon: "🚚", isCorrect: false },
                { text: "Milk processing plants", icon: "🏭", isCorrect: false }
            ],
            explanation: "Robotic milkers allow cows to be milked whenever they choose, increasing comfort and production."
        },
        {
            question: "What is a weeding robot?",
            type: "multiple_choice",
            options: [
                { text: "Machine that identifies and removes weeds", icon: "🤖", isCorrect: true },
                { text: "Chemical sprayer", icon: "🧪", isCorrect: false },
                { text: "Tractor attachment", icon: "🚜", isCorrect: false },
                { text: "Hand tool", icon: "🔧", isCorrect: false }
            ],
            explanation: "Weeding robots use cameras to identify weeds and remove them mechanically or with targeted spray."
        },
        {
            question: "What are harvesting robots?",
            type: "multiple_choice",
            options: [
                { text: "Machines that pick crops automatically", icon: "🤖", isCorrect: true },
                { text: "Storage containers", icon: "📦", isCorrect: false },
                { text: "Transport vehicles", icon: "🚛", isCorrect: false },
                { text: "Packaging machines", icon: "🎁", isCorrect: false }
            ],
            explanation: "Harvesting robots can pick delicate crops like strawberries or apples using cameras and gentle grippers."
        },
        {
            question: "What is automation's main benefit?",
            type: "multiple_choice",
            options: [
                { text: "Reduce labor needs and increase efficiency", icon: "📈", isCorrect: true },
                { text: "More fun for farmers", icon: "🎉", isCorrect: false },
                { text: "Make farms look modern", icon: "🆕", isCorrect: false },
                { text: "No real benefit", icon: "❌", isCorrect: false }
            ],
            explanation: "Automation addresses labor shortages, works 24/7, and improves consistency and efficiency."
        },
        {
            question: "What is machine vision?",
            type: "multiple_choice",
            options: [
                { text: "Computers analyzing images to guide robots", icon: "👁️", isCorrect: true },
                { text: "Glasses for machines", icon: "👓", isCorrect: false },
                { text: "Night vision", icon: "🌙", isCorrect: false },
                { text: "Magnifying glass", icon: "🔍", isCorrect: false }
            ],
            explanation: "Machine vision uses cameras and AI to help robots see, identify objects, and navigate."
        },
        {
            question: "What are automated feeding systems?",
            type: "multiple_choice",
            options: [
                { text: "Machines delivering feed to animals automatically", icon: "🍽️", isCorrect: true },
                { text: "Self-feeding animals", icon: "🐄", isCorrect: false },
                { text: "Manual feeding", icon: "🖐️", isCorrect: false },
                { text: "Feed storage only", icon: "📦", isCorrect: false }
            ],
            explanation: "Automated feeders deliver precise amounts of feed to animals at optimal times."
        },
        {
            question: "What is swarm robotics?",
            type: "multiple_choice",
            options: [
                { text: "Many small robots working together", icon: "🤖", isCorrect: true },
                { text: "Bee farming", icon: "🐝", isCorrect: false },
                { text: "One large robot", icon: "🦾", isCorrect: false },
                { text: "Flying drones only", icon: "🚁", isCorrect: false }
            ],
            explanation: "Swarm robotics uses many small robots coordinating to cover large areas for planting or monitoring."
        },
        {
            question: "What challenges do farm robots face?",
            type: "multiple_choice",
            options: [
                { text: "Variable conditions, cost, and complexity", icon: "⚠️", isCorrect: true },
                { text: "No challenges", icon: "✅", isCorrect: false },
                { text: "Only weather", icon: "🌤️", isCorrect: false },
                { text: "Only power supply", icon: "⚡", isCorrect: false }
            ],
            explanation: "Farm robots must handle unpredictable outdoor conditions, varied crops, and high initial costs."
        }
    ],

    // Level 8 - Controlled Environment
    module10_level8: [
        {
            question: "What is vertical farming?",
            type: "multiple_choice",
            options: [
                { text: "Growing crops in stacked layers indoors", icon: "🏢", isCorrect: true },
                { text: "Farming on hills", icon: "🏔️", isCorrect: false },
                { text: "Growing tall crops", icon: "🌽", isCorrect: false },
                { text: "Vertical plowing", icon: "🚜", isCorrect: false }
            ],
            explanation: "Vertical farms stack growing layers in buildings, producing food year-round in controlled conditions."
        },
        {
            question: "What is hydroponics?",
            type: "multiple_choice",
            options: [
                { text: "Growing plants in nutrient water without soil", icon: "💧", isCorrect: true },
                { text: "Water storage", icon: "🪣", isCorrect: false },
                { text: "Underwater farming", icon: "🐟", isCorrect: false },
                { text: "Flood irrigation", icon: "🌊", isCorrect: false }
            ],
            explanation: "Hydroponics grows plants with roots in nutrient-rich water, without any soil."
        },
        {
            question: "What is aquaponics?",
            type: "multiple_choice",
            options: [
                { text: "Combining fish farming with plant growing", icon: "🐟", isCorrect: true },
                { text: "Only fish farming", icon: "🎣", isCorrect: false },
                { text: "Aquarium hobby", icon: "🐠", isCorrect: false },
                { text: "Water sports", icon: "🏊", isCorrect: false }
            ],
            explanation: "Aquaponics combines fish raising with plant growing - fish waste fertilizes plants, plants clean water."
        },
        {
            question: "What are LED grow lights?",
            type: "multiple_choice",
            options: [
                { text: "Efficient lights for indoor plant growth", icon: "💡", isCorrect: true },
                { text: "Decorative lights", icon: "🎄", isCorrect: false },
                { text: "Street lights", icon: "🏙️", isCorrect: false },
                { text: "Car headlights", icon: "🚗", isCorrect: false }
            ],
            explanation: "LED grow lights provide specific light wavelengths plants need, using less energy than traditional lights."
        },
        {
            question: "What is climate control in greenhouses?",
            type: "multiple_choice",
            options: [
                { text: "Managing temperature, humidity, and airflow", icon: "🌡️", isCorrect: true },
                { text: "Weather forecasting", icon: "🌤️", isCorrect: false },
                { text: "Global climate", icon: "🌍", isCorrect: false },
                { text: "Air conditioning only", icon: "❄️", isCorrect: false }
            ],
            explanation: "Greenhouse climate control maintains optimal growing conditions regardless of outside weather."
        },
        {
            question: "What is aeroponics?",
            type: "multiple_choice",
            options: [
                { text: "Growing plants with roots in misted air", icon: "💨", isCorrect: true },
                { text: "Growing in airplanes", icon: "✈️", isCorrect: false },
                { text: "Air freshener plants", icon: "🌸", isCorrect: false },
                { text: "Wind farming", icon: "🌪️", isCorrect: false }
            ],
            explanation: "Aeroponics suspends plants with roots hanging in air, misted with nutrient solution."
        },
        {
            question: "Benefits of controlled environment agriculture?",
            type: "multiple_choice",
            options: [
                { text: "Year-round production, less water, no pesticides", icon: "✅", isCorrect: true },
                { text: "Lower costs always", icon: "💰", isCorrect: false },
                { text: "Only for lettuce", icon: "🥬", isCorrect: false },
                { text: "No real benefits", icon: "❌", isCorrect: false }
            ],
            explanation: "Controlled environments allow consistent production, use 90% less water, and often eliminate pesticide needs."
        },
        {
            question: "What is a plant factory?",
            type: "multiple_choice",
            options: [
                { text: "Fully automated indoor growing facility", icon: "🏭", isCorrect: true },
                { text: "Factory making plants", icon: "🔧", isCorrect: false },
                { text: "Plant nursery", icon: "🌱", isCorrect: false },
                { text: "Flower shop", icon: "💐", isCorrect: false }
            ],
            explanation: "Plant factories are highly automated indoor farms with full control over light, climate, and nutrients."
        },
        {
            question: "What crops grow well in vertical farms?",
            type: "multiple_choice",
            options: [
                { text: "Leafy greens, herbs, strawberries", icon: "🥬", isCorrect: true },
                { text: "Wheat and corn", icon: "🌾", isCorrect: false },
                { text: "Trees and orchards", icon: "🌳", isCorrect: false },
                { text: "Root vegetables only", icon: "🥕", isCorrect: false }
            ],
            explanation: "Vertical farms excel at fast-growing, high-value crops like lettuce, herbs, and strawberries."
        },
        {
            question: "What is the main challenge of indoor farming?",
            type: "multiple_choice",
            options: [
                { text: "High energy costs for lighting", icon: "💡", isCorrect: true },
                { text: "Too much space", icon: "🏞️", isCorrect: false },
                { text: "Weather damage", icon: "⛈️", isCorrect: false },
                { text: "Pest problems", icon: "🐛", isCorrect: false }
            ],
            explanation: "Energy for artificial lighting is the biggest operating cost for indoor vertical farms."
        }
    ],

    // Level 9 - Artificial Intelligence
    module10_level9: [
        {
            question: "What is AI in agriculture?",
            type: "multiple_choice",
            options: [
                { text: "Computers making farming decisions", icon: "🤖", isCorrect: true },
                { text: "Alien insects", icon: "👽", isCorrect: false },
                { text: "Alternative irrigation", icon: "💧", isCorrect: false },
                { text: "Animal intelligence", icon: "🐄", isCorrect: false }
            ],
            explanation: "Agricultural AI uses computer systems to analyze data and make or recommend farming decisions."
        },
        {
            question: "How can AI identify plant diseases?",
            type: "multiple_choice",
            options: [
                { text: "Analyzing photos to recognize disease patterns", icon: "📸", isCorrect: true },
                { text: "Smelling plants", icon: "👃", isCorrect: false },
                { text: "Tasting leaves", icon: "👅", isCorrect: false },
                { text: "Listening to plants", icon: "👂", isCorrect: false }
            ],
            explanation: "AI analyzes images of plants to detect disease symptoms, often before they're visible to humans."
        },
        {
            question: "What is machine learning?",
            type: "multiple_choice",
            options: [
                { text: "Computers improving from experience", icon: "📈", isCorrect: true },
                { text: "Machines going to school", icon: "🏫", isCorrect: false },
                { text: "Learning to operate machines", icon: "🚜", isCorrect: false },
                { text: "Reading instruction manuals", icon: "📖", isCorrect: false }
            ],
            explanation: "Machine learning enables computers to improve their predictions and decisions through experience with data."
        },
        {
            question: "What can predictive analytics forecast?",
            type: "multiple_choice",
            options: [
                { text: "Yields, diseases, and market prices", icon: "🔮", isCorrect: true },
                { text: "Only weather", icon: "🌤️", isCorrect: false },
                { text: "Lottery numbers", icon: "🎰", isCorrect: false },
                { text: "Nothing accurately", icon: "❌", isCorrect: false }
            ],
            explanation: "Predictive analytics uses historical data to forecast yields, disease outbreaks, and price trends."
        },
        {
            question: "How does AI help with weed control?",
            type: "multiple_choice",
            options: [
                { text: "Identifying weeds and targeting treatment", icon: "🎯", isCorrect: true },
                { text: "Pulling weeds manually", icon: "🖐️", isCorrect: false },
                { text: "Flooding fields", icon: "🌊", isCorrect: false },
                { text: "Growing more weeds", icon: "🌿", isCorrect: false }
            ],
            explanation: "AI-powered systems identify weeds among crops and spray or remove only the weeds."
        },
        {
            question: "What are chatbots for farmers?",
            type: "multiple_choice",
            options: [
                { text: "AI programs answering farming questions", icon: "💬", isCorrect: true },
                { text: "Robots that chat together", icon: "🤖", isCorrect: false },
                { text: "Social media apps", icon: "📱", isCorrect: false },
                { text: "Phone operators", icon: "📞", isCorrect: false }
            ],
            explanation: "Agricultural chatbots use AI to answer farmers' questions about crops, weather, and best practices."
        },
        {
            question: "What is computer vision in farming?",
            type: "multiple_choice",
            options: [
                { text: "AI analyzing images of crops and fields", icon: "👁️", isCorrect: true },
                { text: "Computers watching TV", icon: "📺", isCorrect: false },
                { text: "Virtual reality farming", icon: "🥽", isCorrect: false },
                { text: "Security cameras", icon: "📹", isCorrect: false }
            ],
            explanation: "Computer vision processes images from cameras, drones, or satellites to monitor crop health and identify problems."
        },
        {
            question: "How can AI optimize fertilizer use?",
            type: "multiple_choice",
            options: [
                { text: "Analyzing soil and crop data to recommend amounts", icon: "📊", isCorrect: true },
                { text: "Applying maximum everywhere", icon: "📈", isCorrect: false },
                { text: "Eliminating fertilizer", icon: "❌", isCorrect: false },
                { text: "Random application", icon: "🎲", isCorrect: false }
            ],
            explanation: "AI analyzes soil tests, weather, and crop data to recommend precise fertilizer amounts for each field zone."
        },
        {
            question: "What is a digital twin?",
            type: "multiple_choice",
            options: [
                { text: "Virtual model of a real farm", icon: "💻", isCorrect: true },
                { text: "Clone of farmer", icon: "👥", isCorrect: false },
                { text: "Two identical tractors", icon: "🚜", isCorrect: false },
                { text: "Twin crops", icon: "🌱", isCorrect: false }
            ],
            explanation: "A digital twin is a virtual simulation of a farm used to test scenarios and optimize operations."
        },
        {
            question: "What is the benefit of AI-powered pest prediction?",
            type: "multiple_choice",
            options: [
                { text: "Early warning allows prevention", icon: "⚠️", isCorrect: true },
                { text: "Eliminates all pests", icon: "🐛", isCorrect: false },
                { text: "No spraying ever needed", icon: "❌", isCorrect: false },
                { text: "Pests become helpful", icon: "🦋", isCorrect: false }
            ],
            explanation: "AI predicts pest outbreaks from weather and historical data, allowing early preventive action."
        }
    ],

    // Level 10 - Future of Farming
    module10_level10: [
        {
            question: "What is blockchain in agriculture?",
            type: "multiple_choice",
            options: [
                { text: "Secure system tracking food from farm to table", icon: "🔗", isCorrect: true },
                { text: "Building blocks for barns", icon: "🧱", isCorrect: false },
                { text: "Cryptocurrency only", icon: "💰", isCorrect: false },
                { text: "Chain link fencing", icon: "⛓️", isCorrect: false }
            ],
            explanation: "Blockchain creates tamper-proof records tracking food origin, handling, and quality through the supply chain."
        },
        {
            question: "What is gene editing in crops?",
            type: "multiple_choice",
            options: [
                { text: "Precisely changing plant DNA for improvements", icon: "🧬", isCorrect: true },
                { text: "Editing plant photos", icon: "📸", isCorrect: false },
                { text: "Cutting plant leaves", icon: "✂️", isCorrect: false },
                { text: "Selecting seeds manually", icon: "🖐️", isCorrect: false }
            ],
            explanation: "Gene editing tools like CRISPR make precise DNA changes to improve crop traits faster than traditional breeding."
        },
        {
            question: "What is carbon farming?",
            type: "multiple_choice",
            options: [
                { text: "Practices that store carbon in soil", icon: "🌱", isCorrect: true },
                { text: "Burning coal", icon: "🔥", isCorrect: false },
                { text: "Growing carbon fibers", icon: "🧵", isCorrect: false },
                { text: "Carbon dioxide production", icon: "💨", isCorrect: false }
            ],
            explanation: "Carbon farming uses practices like cover crops and no-till to capture and store carbon in soil."
        },
        {
            question: "What is cellular agriculture?",
            type: "multiple_choice",
            options: [
                { text: "Growing meat and products from cells in labs", icon: "🔬", isCorrect: true },
                { text: "Using cell phones for farming", icon: "📱", isCorrect: false },
                { text: "Prison farming", icon: "🔒", isCorrect: false },
                { text: "Single-cell crops", icon: "🦠", isCorrect: false }
            ],
            explanation: "Cellular agriculture produces meat, dairy, and other products by growing cells in bioreactors."
        },
        {
            question: "What are biostimulants?",
            type: "multiple_choice",
            options: [
                { text: "Natural products enhancing plant growth", icon: "🌿", isCorrect: true },
                { text: "Chemical fertilizers", icon: "🧪", isCorrect: false },
                { text: "Energy drinks for farmers", icon: "☕", isCorrect: false },
                { text: "Electric stimulation", icon: "⚡", isCorrect: false }
            ],
            explanation: "Biostimulants are natural substances that enhance plant growth, stress tolerance, and nutrient uptake."
        },
        {
            question: "What is regenerative agriculture?",
            type: "multiple_choice",
            options: [
                { text: "Farming that improves soil and ecosystem health", icon: "🌍", isCorrect: true },
                { text: "Intensive farming", icon: "🏭", isCorrect: false },
                { text: "Using more chemicals", icon: "🧪", isCorrect: false },
                { text: "Abandoning farms", icon: "🏚️", isCorrect: false }
            ],
            explanation: "Regenerative agriculture goes beyond sustainability to actively rebuild soil health and biodiversity."
        },
        {
            question: "What is precision fermentation?",
            type: "multiple_choice",
            options: [
                { text: "Using microbes to produce food ingredients", icon: "🦠", isCorrect: true },
                { text: "Exact beer brewing", icon: "🍺", isCorrect: false },
                { text: "Yogurt making only", icon: "🥛", isCorrect: false },
                { text: "Composting", icon: "🍂", isCorrect: false }
            ],
            explanation: "Precision fermentation programs microbes to produce specific proteins, fats, or other food ingredients."
        },
        {
            question: "What is the Internet of Food?",
            type: "multiple_choice",
            options: [
                { text: "Connected systems tracking food through supply chain", icon: "🌐", isCorrect: true },
                { text: "Food ordering apps", icon: "📱", isCorrect: false },
                { text: "Recipe websites", icon: "👨‍🍳", isCorrect: false },
                { text: "Social media for food", icon: "📸", isCorrect: false }
            ],
            explanation: "Internet of Food connects sensors and systems to track food quality, safety, and freshness throughout distribution."
        },
        {
            question: "What is agrivoltaics?",
            type: "multiple_choice",
            options: [
                { text: "Growing crops under solar panels", icon: "☀️", isCorrect: true },
                { text: "Electric farming vehicles", icon: "🚜", isCorrect: false },
                { text: "Battery storage for farms", icon: "🔋", isCorrect: false },
                { text: "Voltage regulation", icon: "⚡", isCorrect: false }
            ],
            explanation: "Agrivoltaics combines solar energy generation with crop production on the same land."
        },
        {
            question: "What does the future of farming require?",
            type: "multiple_choice",
            options: [
                { text: "Combining technology with sustainable practices", icon: "🌱", isCorrect: true },
                { text: "Abandoning all technology", icon: "❌", isCorrect: false },
                { text: "Only chemicals and machines", icon: "🏭", isCorrect: false },
                { text: "Return to ancient methods only", icon: "📜", isCorrect: false }
            ],
            explanation: "Future farming will combine smart technology with sustainable practices to feed growing populations while protecting the environment."
        }
    ]
};

// Register module globally
if (typeof window !== 'undefined') {
    window.MODULE10_QUESTIONS = MODULE10_QUESTIONS;
}
