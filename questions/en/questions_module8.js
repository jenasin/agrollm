// Module 8: Climate & Weather - 100 questions (10 levels x 10 questions)
const MODULE8_QUESTIONS = {
    // Level 1 - Weather Basics
    module8_level1: [
        {
            question: "What is the water cycle?",
            type: "multiple_choice",
            options: [
                { text: "Evaporation, condensation, precipitation", icon: "🔄", isCorrect: true },
                { text: "Only rain falling", icon: "🌧️", isCorrect: false },
                { text: "Water in rivers only", icon: "🏞️", isCorrect: false },
                { text: "Ice melting", icon: "🧊", isCorrect: false }
            ],
            explanation: "The water cycle includes evaporation from water bodies, condensation into clouds, and precipitation as rain or snow."
        },
        {
            question: "What does humidity measure?",
            type: "multiple_choice",
            options: [
                { text: "Temperature", icon: "🌡️", isCorrect: false },
                { text: "Water vapor in air", icon: "💧", isCorrect: true },
                { text: "Wind speed", icon: "💨", isCorrect: false },
                { text: "Sunlight intensity", icon: "☀️", isCorrect: false }
            ],
            explanation: "Humidity measures the amount of water vapor present in the air, affecting plant transpiration and disease pressure."
        },
        {
            question: "Which season is best for planting most crops?",
            type: "multiple_choice",
            options: [
                { text: "Winter", icon: "❄️", isCorrect: false },
                { text: "Spring", icon: "🌸", isCorrect: true },
                { text: "Late autumn", icon: "🍂", isCorrect: false },
                { text: "Any time", icon: "📅", isCorrect: false }
            ],
            explanation: "Spring provides warming soil temperatures, longer days, and adequate moisture for seed germination and early growth."
        },
        {
            question: "What is frost?",
            type: "multiple_choice",
            options: [
                { text: "Ice crystals forming when temperature drops below 0°C", icon: "🥶", isCorrect: true },
                { text: "Heavy rain", icon: "🌧️", isCorrect: false },
                { text: "Strong wind", icon: "💨", isCorrect: false },
                { text: "Hot weather", icon: "🔥", isCorrect: false }
            ],
            explanation: "Frost forms when air temperature drops to 0°C or below, causing water vapor to freeze on surfaces and potentially damaging crops."
        },
        {
            question: "Why do farmers check weather forecasts?",
            type: "multiple_choice",
            options: [
                { text: "For entertainment", icon: "📺", isCorrect: false },
                { text: "To plan farming activities", icon: "📋", isCorrect: true },
                { text: "Because it's required by law", icon: "📜", isCorrect: false },
                { text: "To watch clouds", icon: "☁️", isCorrect: false }
            ],
            explanation: "Weather forecasts help farmers plan planting, harvesting, irrigation, and pest control activities effectively."
        },
        {
            question: "What causes rain?",
            type: "multiple_choice",
            options: [
                { text: "Clouds releasing water droplets", icon: "🌧️", isCorrect: true },
                { text: "Sun heating the ground", icon: "☀️", isCorrect: false },
                { text: "Wind blowing", icon: "💨", isCorrect: false },
                { text: "Moon phases", icon: "🌙", isCorrect: false }
            ],
            explanation: "Rain occurs when water droplets in clouds combine and become heavy enough to fall to the ground."
        },
        {
            question: "What is drought?",
            type: "multiple_choice",
            options: [
                { text: "Too much rain", icon: "🌊", isCorrect: false },
                { text: "Extended period without rain", icon: "🏜️", isCorrect: true },
                { text: "Very cold weather", icon: "❄️", isCorrect: false },
                { text: "Strong storms", icon: "⛈️", isCorrect: false }
            ],
            explanation: "Drought is a prolonged period of abnormally low rainfall, leading to water shortage and crop stress."
        },
        {
            question: "What is the rainy season important for?",
            type: "multiple_choice",
            options: [
                { text: "Crop growth and water storage", icon: "🌱", isCorrect: true },
                { text: "Staying indoors", icon: "🏠", isCorrect: false },
                { text: "Machine maintenance", icon: "🔧", isCorrect: false },
                { text: "Selling produce", icon: "💰", isCorrect: false }
            ],
            explanation: "The rainy season provides essential water for crop growth and replenishes water sources for the dry season."
        },
        {
            question: "What does temperature affect in plants?",
            type: "multiple_choice",
            options: [
                { text: "Only leaf color", icon: "🍃", isCorrect: false },
                { text: "Growth rate and development", icon: "📈", isCorrect: true },
                { text: "Nothing important", icon: "❓", isCorrect: false },
                { text: "Only flower size", icon: "🌸", isCorrect: false }
            ],
            explanation: "Temperature affects seed germination, plant growth rate, flowering, fruiting, and overall crop development."
        },
        {
            question: "What is a weather station?",
            type: "multiple_choice",
            options: [
                { text: "A train station", icon: "🚂", isCorrect: false },
                { text: "Equipment measuring weather conditions", icon: "🌡️", isCorrect: true },
                { text: "A radio station", icon: "📻", isCorrect: false },
                { text: "A power station", icon: "⚡", isCorrect: false }
            ],
            explanation: "A weather station contains instruments that measure temperature, humidity, rainfall, wind speed, and other weather data."
        }
    ],

    // Level 2 - Rainfall & Water
    module8_level2: [
        {
            question: "How is rainfall measured?",
            type: "multiple_choice",
            options: [
                { text: "In millimeters or inches", icon: "📏", isCorrect: true },
                { text: "In kilograms", icon: "⚖️", isCorrect: false },
                { text: "In degrees", icon: "🌡️", isCorrect: false },
                { text: "In liters per hour", icon: "⏱️", isCorrect: false }
            ],
            explanation: "Rainfall is measured in millimeters (mm) or inches, representing the depth of water that would accumulate on a flat surface."
        },
        {
            question: "What is a rain gauge?",
            type: "multiple_choice",
            options: [
                { text: "Tool to measure rainfall amount", icon: "🌧️", isCorrect: true },
                { text: "Tool to predict rain", icon: "🔮", isCorrect: false },
                { text: "Tool to stop rain", icon: "🛑", isCorrect: false },
                { text: "Tool to make rain", icon: "💨", isCorrect: false }
            ],
            explanation: "A rain gauge is a simple instrument that collects and measures the amount of rainfall over a period of time."
        },
        {
            question: "What happens during a flood?",
            type: "multiple_choice",
            options: [
                { text: "Land becomes covered with water", icon: "🌊", isCorrect: true },
                { text: "Water disappears", icon: "🏜️", isCorrect: false },
                { text: "Temperature rises", icon: "🔥", isCorrect: false },
                { text: "Wind increases", icon: "💨", isCorrect: false }
            ],
            explanation: "Flooding occurs when water overflows onto normally dry land, potentially damaging crops and washing away soil."
        },
        {
            question: "Why is rainwater good for crops?",
            type: "multiple_choice",
            options: [
                { text: "It's naturally soft and contains nitrogen", icon: "✅", isCorrect: true },
                { text: "It's salty", icon: "🧂", isCorrect: false },
                { text: "It's always warm", icon: "🌡️", isCorrect: false },
                { text: "It contains fertilizer", icon: "🧪", isCorrect: false }
            ],
            explanation: "Rainwater is naturally soft, free of chemicals, and contains small amounts of nitrogen absorbed from the atmosphere."
        },
        {
            question: "What is groundwater?",
            type: "multiple_choice",
            options: [
                { text: "Water stored underground", icon: "⬇️", isCorrect: true },
                { text: "Water on the surface", icon: "🌊", isCorrect: false },
                { text: "Water in clouds", icon: "☁️", isCorrect: false },
                { text: "Bottled water", icon: "🍶", isCorrect: false }
            ],
            explanation: "Groundwater is water stored in underground aquifers, accessed through wells for irrigation during dry periods."
        },
        {
            question: "What causes soil erosion during heavy rain?",
            type: "multiple_choice",
            options: [
                { text: "Water washing away topsoil", icon: "🌧️", isCorrect: true },
                { text: "Plants growing faster", icon: "🌱", isCorrect: false },
                { text: "Soil getting harder", icon: "🪨", isCorrect: false },
                { text: "Temperature changes", icon: "🌡️", isCorrect: false }
            ],
            explanation: "Heavy rain can wash away valuable topsoil, especially on slopes and bare ground without plant cover."
        },
        {
            question: "How can farmers conserve water?",
            type: "multiple_choice",
            options: [
                { text: "Mulching and drip irrigation", icon: "💧", isCorrect: true },
                { text: "Watering during midday heat", icon: "☀️", isCorrect: false },
                { text: "Leaving soil bare", icon: "🏜️", isCorrect: false },
                { text: "Using more water", icon: "🌊", isCorrect: false }
            ],
            explanation: "Mulching reduces evaporation and drip irrigation delivers water directly to plant roots, minimizing waste."
        },
        {
            question: "What is water harvesting?",
            type: "multiple_choice",
            options: [
                { text: "Collecting and storing rainwater", icon: "🪣", isCorrect: true },
                { text: "Throwing water away", icon: "🗑️", isCorrect: false },
                { text: "Buying water", icon: "💰", isCorrect: false },
                { text: "Heating water", icon: "🔥", isCorrect: false }
            ],
            explanation: "Water harvesting involves collecting rainwater from roofs, surfaces, or land and storing it for later use in farming."
        },
        {
            question: "When is the best time to irrigate crops?",
            type: "multiple_choice",
            options: [
                { text: "Early morning or evening", icon: "🌅", isCorrect: true },
                { text: "Noon when it's hottest", icon: "☀️", isCorrect: false },
                { text: "Only when it rains", icon: "🌧️", isCorrect: false },
                { text: "Never", icon: "❌", isCorrect: false }
            ],
            explanation: "Early morning or evening irrigation reduces water loss through evaporation and allows plants to absorb water effectively."
        },
        {
            question: "What is a watershed?",
            type: "multiple_choice",
            options: [
                { text: "Area where water drains to a common point", icon: "🏞️", isCorrect: true },
                { text: "A shed for storing water", icon: "🏠", isCorrect: false },
                { text: "A type of crop", icon: "🌾", isCorrect: false },
                { text: "A water filter", icon: "🧪", isCorrect: false }
            ],
            explanation: "A watershed is a land area where all water drains to a common outlet like a river, lake, or ocean."
        }
    ],

    // Level 3 - Temperature Effects
    module8_level3: [
        {
            question: "What is the optimal temperature for most crop germination?",
            type: "multiple_choice",
            options: [
                { text: "Below 0°C", icon: "❄️", isCorrect: false },
                { text: "15-25°C", icon: "✅", isCorrect: true },
                { text: "Above 45°C", icon: "🔥", isCorrect: false },
                { text: "Exactly 0°C", icon: "🧊", isCorrect: false }
            ],
            explanation: "Most crops germinate best between 15-25°C when soil is warm enough for enzyme activity but not too hot."
        },
        {
            question: "What is heat stress in plants?",
            type: "multiple_choice",
            options: [
                { text: "Damage from excessive heat", icon: "🥵", isCorrect: true },
                { text: "Plants feeling happy", icon: "😊", isCorrect: false },
                { text: "Cold damage", icon: "❄️", isCorrect: false },
                { text: "Water damage", icon: "💧", isCorrect: false }
            ],
            explanation: "Heat stress occurs when temperatures exceed plant tolerance, causing wilting, reduced growth, and potential crop loss."
        },
        {
            question: "How do plants cool themselves?",
            type: "multiple_choice",
            options: [
                { text: "Through transpiration", icon: "💨", isCorrect: true },
                { text: "By moving to shade", icon: "🌳", isCorrect: false },
                { text: "By drinking cold water", icon: "🧊", isCorrect: false },
                { text: "They cannot cool down", icon: "❌", isCorrect: false }
            ],
            explanation: "Plants release water through leaf pores (stomata) in a process called transpiration, which cools them like sweating."
        },
        {
            question: "What is a cold-hardy crop?",
            type: "multiple_choice",
            options: [
                { text: "Plant that survives low temperatures", icon: "❄️", isCorrect: true },
                { text: "Plant that needs hot weather", icon: "☀️", isCorrect: false },
                { text: "Plant that grows in water", icon: "💧", isCorrect: false },
                { text: "Plant that grows fast", icon: "🚀", isCorrect: false }
            ],
            explanation: "Cold-hardy crops like cabbage, kale, and carrots can tolerate frost and cool temperatures without damage."
        },
        {
            question: "What is the frost-free period?",
            type: "multiple_choice",
            options: [
                { text: "Time between last and first frost", icon: "📅", isCorrect: true },
                { text: "Winter months", icon: "❄️", isCorrect: false },
                { text: "Rainy season", icon: "🌧️", isCorrect: false },
                { text: "One specific day", icon: "1️⃣", isCorrect: false }
            ],
            explanation: "The frost-free period is the number of days between the last spring frost and first fall frost when crops can grow safely."
        },
        {
            question: "Why do farmers use greenhouses?",
            type: "multiple_choice",
            options: [
                { text: "To control temperature and extend growing season", icon: "🏠", isCorrect: true },
                { text: "To paint plants green", icon: "🎨", isCorrect: false },
                { text: "To store harvested crops", icon: "📦", isCorrect: false },
                { text: "To raise animals", icon: "🐄", isCorrect: false }
            ],
            explanation: "Greenhouses trap heat and allow farmers to grow crops year-round regardless of outside weather conditions."
        },
        {
            question: "What is thermal mass in farming?",
            type: "multiple_choice",
            options: [
                { text: "Materials that store and release heat", icon: "🪨", isCorrect: true },
                { text: "Weight of crops", icon: "⚖️", isCorrect: false },
                { text: "Hot air balloons", icon: "🎈", isCorrect: false },
                { text: "Fire in fields", icon: "🔥", isCorrect: false }
            ],
            explanation: "Thermal mass like water barrels or stone walls absorbs heat during the day and releases it at night, moderating temperatures."
        },
        {
            question: "How does mulch help regulate soil temperature?",
            type: "multiple_choice",
            options: [
                { text: "Insulates soil from extreme temperatures", icon: "🛡️", isCorrect: true },
                { text: "Heats up the soil", icon: "🔥", isCorrect: false },
                { text: "Makes soil colder", icon: "❄️", isCorrect: false },
                { text: "Has no effect", icon: "❓", isCorrect: false }
            ],
            explanation: "Mulch acts as insulation, keeping soil cooler in summer and warmer in winter, protecting plant roots."
        },
        {
            question: "What happens to plants during a heatwave?",
            type: "multiple_choice",
            options: [
                { text: "They wilt and may stop growing", icon: "🥀", isCorrect: true },
                { text: "They grow faster", icon: "🚀", isCorrect: false },
                { text: "They produce more fruit", icon: "🍎", isCorrect: false },
                { text: "Nothing changes", icon: "➖", isCorrect: false }
            ],
            explanation: "Heatwaves cause plants to wilt, close stomata, stop photosynthesis, and potentially suffer permanent damage."
        },
        {
            question: "What is vernalization?",
            type: "multiple_choice",
            options: [
                { text: "Cold treatment needed for some plants to flower", icon: "❄️", isCorrect: true },
                { text: "Adding fertilizer", icon: "🧪", isCorrect: false },
                { text: "Watering plants", icon: "💧", isCorrect: false },
                { text: "Pruning branches", icon: "✂️", isCorrect: false }
            ],
            explanation: "Some plants like winter wheat need a cold period (vernalization) to trigger flowering and seed production."
        }
    ],

    // Level 4 - Wind & Storms
    module8_level4: [
        {
            question: "How does wind affect crops?",
            type: "multiple_choice",
            options: [
                { text: "Can damage, dry out, or help pollinate", icon: "💨", isCorrect: true },
                { text: "Only helps crops grow", icon: "✅", isCorrect: false },
                { text: "Has no effect", icon: "❓", isCorrect: false },
                { text: "Only damages crops", icon: "❌", isCorrect: false }
            ],
            explanation: "Wind can damage plants through physical force, increase water loss, but also helps with pollination and disease prevention."
        },
        {
            question: "What is a windbreak?",
            type: "multiple_choice",
            options: [
                { text: "Row of trees or barrier to block wind", icon: "🌳", isCorrect: true },
                { text: "A broken wind turbine", icon: "⚡", isCorrect: false },
                { text: "A type of storm", icon: "⛈️", isCorrect: false },
                { text: "Wind measurement tool", icon: "📏", isCorrect: false }
            ],
            explanation: "Windbreaks are rows of trees, shrubs, or fences that protect crops and soil from wind damage and erosion."
        },
        {
            question: "What is a monsoon?",
            type: "multiple_choice",
            options: [
                { text: "Seasonal wind bringing heavy rains", icon: "🌧️", isCorrect: true },
                { text: "A type of fruit", icon: "🥭", isCorrect: false },
                { text: "Dry desert wind", icon: "🏜️", isCorrect: false },
                { text: "Cold winter storm", icon: "❄️", isCorrect: false }
            ],
            explanation: "Monsoons are seasonal winds that bring heavy rainfall, critical for agriculture in many tropical regions."
        },
        {
            question: "What causes dust storms?",
            type: "multiple_choice",
            options: [
                { text: "Strong winds over dry, loose soil", icon: "💨", isCorrect: true },
                { text: "Heavy rain", icon: "🌧️", isCorrect: false },
                { text: "Cold temperatures", icon: "❄️", isCorrect: false },
                { text: "Healthy vegetation", icon: "🌿", isCorrect: false }
            ],
            explanation: "Dust storms occur when strong winds lift loose, dry topsoil into the air, often worsened by drought and poor land management."
        },
        {
            question: "How can farmers protect crops from strong winds?",
            type: "multiple_choice",
            options: [
                { text: "Plant windbreaks and use staking", icon: "🌳", isCorrect: true },
                { text: "Remove all trees", icon: "🪓", isCorrect: false },
                { text: "Water more during wind", icon: "💧", isCorrect: false },
                { text: "Harvest immediately", icon: "🌾", isCorrect: false }
            ],
            explanation: "Windbreaks reduce wind speed, and staking supports tall plants, preventing wind damage to crops."
        },
        {
            question: "What is hail?",
            type: "multiple_choice",
            options: [
                { text: "Ice balls falling from clouds", icon: "🧊", isCorrect: true },
                { text: "Frozen rain on ground", icon: "❄️", isCorrect: false },
                { text: "Light snow", icon: "🌨️", isCorrect: false },
                { text: "Heavy fog", icon: "🌫️", isCorrect: false }
            ],
            explanation: "Hail forms when water droplets are carried up by strong updrafts, freeze, and fall as ice balls that can damage crops."
        },
        {
            question: "What is a hurricane/cyclone?",
            type: "multiple_choice",
            options: [
                { text: "Large rotating storm with strong winds and rain", icon: "🌀", isCorrect: true },
                { text: "Light breeze", icon: "💨", isCorrect: false },
                { text: "Dry spell", icon: "☀️", isCorrect: false },
                { text: "Earthquake", icon: "🌍", isCorrect: false }
            ],
            explanation: "Hurricanes are massive storms with rotating winds exceeding 119 km/h, bringing destructive winds, rain, and flooding."
        },
        {
            question: "How does wind erosion damage farmland?",
            type: "multiple_choice",
            options: [
                { text: "Blows away fertile topsoil", icon: "💨", isCorrect: true },
                { text: "Makes soil more fertile", icon: "✅", isCorrect: false },
                { text: "Adds water to soil", icon: "💧", isCorrect: false },
                { text: "Compacts the soil", icon: "🪨", isCorrect: false }
            ],
            explanation: "Wind erosion removes the nutrient-rich topsoil layer, reducing soil fertility and crop productivity over time."
        },
        {
            question: "What is a tornado?",
            type: "multiple_choice",
            options: [
                { text: "Violent rotating column of air", icon: "🌪️", isCorrect: true },
                { text: "Heavy rain", icon: "🌧️", isCorrect: false },
                { text: "Gentle breeze", icon: "🍃", isCorrect: false },
                { text: "Snow storm", icon: "❄️", isCorrect: false }
            ],
            explanation: "Tornadoes are extremely destructive rotating air columns that can destroy everything in their path, including crops and farm structures."
        },
        {
            question: "Why is wind important for some crops?",
            type: "multiple_choice",
            options: [
                { text: "Helps with pollination", icon: "🌾", isCorrect: true },
                { text: "Makes them grow taller", icon: "📏", isCorrect: false },
                { text: "Adds nutrients", icon: "🧪", isCorrect: false },
                { text: "Keeps pests away forever", icon: "🐛", isCorrect: false }
            ],
            explanation: "Wind-pollinated crops like corn, wheat, and grasses rely on wind to carry pollen between plants for reproduction."
        }
    ],

    // Level 5 - Seasons & Planning
    module8_level5: [
        {
            question: "What determines growing seasons?",
            type: "multiple_choice",
            options: [
                { text: "Temperature and daylight hours", icon: "☀️", isCorrect: true },
                { text: "Only calendar dates", icon: "📅", isCorrect: false },
                { text: "Soil color", icon: "🟤", isCorrect: false },
                { text: "Moon phases only", icon: "🌙", isCorrect: false }
            ],
            explanation: "Growing seasons are determined by temperature ranges and daylight hours that support plant growth in a region."
        },
        {
            question: "What is a planting calendar?",
            type: "multiple_choice",
            options: [
                { text: "Guide for when to plant different crops", icon: "📅", isCorrect: true },
                { text: "Calendar with plant pictures", icon: "🖼️", isCorrect: false },
                { text: "List of plant prices", icon: "💰", isCorrect: false },
                { text: "Record of harvests", icon: "📝", isCorrect: false }
            ],
            explanation: "A planting calendar tells farmers the best times to plant specific crops based on local climate and frost dates."
        },
        {
            question: "Why do some crops grow better in certain seasons?",
            type: "multiple_choice",
            options: [
                { text: "Different temperature and light requirements", icon: "🌡️", isCorrect: true },
                { text: "Farmers' preference", icon: "👨‍🌾", isCorrect: false },
                { text: "Random chance", icon: "🎲", isCorrect: false },
                { text: "Soil changes color", icon: "🟤", isCorrect: false }
            ],
            explanation: "Each crop has specific temperature, daylight, and moisture needs that match certain seasons for optimal growth."
        },
        {
            question: "What is crop rotation planning?",
            type: "multiple_choice",
            options: [
                { text: "Changing crops grown in each field yearly", icon: "🔄", isCorrect: true },
                { text: "Spinning plants around", icon: "🌀", isCorrect: false },
                { text: "Growing same crop always", icon: "➡️", isCorrect: false },
                { text: "Moving fields", icon: "🚜", isCorrect: false }
            ],
            explanation: "Crop rotation involves growing different crops in sequence to maintain soil health, reduce pests, and improve yields."
        },
        {
            question: "What is succession planting?",
            type: "multiple_choice",
            options: [
                { text: "Planting same crop at intervals for continuous harvest", icon: "📆", isCorrect: true },
                { text: "Planting one time only", icon: "1️⃣", isCorrect: false },
                { text: "Replacing dead plants", icon: "💀", isCorrect: false },
                { text: "Planting by the moon", icon: "🌙", isCorrect: false }
            ],
            explanation: "Succession planting means sowing crops every few weeks to ensure continuous harvest throughout the season."
        },
        {
            question: "How do day length changes affect plants?",
            type: "multiple_choice",
            options: [
                { text: "Triggers flowering in some plants", icon: "🌸", isCorrect: true },
                { text: "No effect", icon: "❓", isCorrect: false },
                { text: "Makes all plants die", icon: "💀", isCorrect: false },
                { text: "Changes leaf color only", icon: "🍂", isCorrect: false }
            ],
            explanation: "Photoperiod (day length) triggers flowering in many plants - some need long days, others short days to bloom."
        },
        {
            question: "What is a microclimate?",
            type: "multiple_choice",
            options: [
                { text: "Small area with different climate than surroundings", icon: "🏔️", isCorrect: true },
                { text: "Very small thermometer", icon: "🌡️", isCorrect: false },
                { text: "Tiny clouds", icon: "☁️", isCorrect: false },
                { text: "Indoor climate", icon: "🏠", isCorrect: false }
            ],
            explanation: "Microclimates are small areas where conditions differ from surroundings, like south-facing slopes being warmer."
        },
        {
            question: "Why is last frost date important?",
            type: "multiple_choice",
            options: [
                { text: "Determines safe time to plant tender crops", icon: "📅", isCorrect: true },
                { text: "Marks end of winter", icon: "❄️", isCorrect: false },
                { text: "Time to harvest", icon: "🌾", isCorrect: false },
                { text: "Best day to sell crops", icon: "💰", isCorrect: false }
            ],
            explanation: "The last frost date indicates when it's safe to transplant frost-sensitive crops outdoors without freeze damage."
        },
        {
            question: "What is dormancy in plants?",
            type: "multiple_choice",
            options: [
                { text: "Period of reduced growth during unfavorable conditions", icon: "😴", isCorrect: true },
                { text: "When plants grow fastest", icon: "🚀", isCorrect: false },
                { text: "Plant death", icon: "💀", isCorrect: false },
                { text: "Disease symptom", icon: "🤒", isCorrect: false }
            ],
            explanation: "Dormancy is a survival strategy where plants slow or stop growth during cold winters or dry seasons."
        },
        {
            question: "How do farmers prepare for dry season?",
            type: "multiple_choice",
            options: [
                { text: "Store water and choose drought-tolerant crops", icon: "💧", isCorrect: true },
                { text: "Plant water-loving crops", icon: "🌊", isCorrect: false },
                { text: "Do nothing different", icon: "➖", isCorrect: false },
                { text: "Wait for rain", icon: "🌧️", isCorrect: false }
            ],
            explanation: "Smart farmers harvest water during rainy season, improve irrigation, and select crops adapted to dry conditions."
        }
    ],

    // Level 6 - Climate Zones
    module8_level6: [
        {
            question: "What is a tropical climate?",
            type: "multiple_choice",
            options: [
                { text: "Hot and humid year-round near equator", icon: "🌴", isCorrect: true },
                { text: "Cold with snow", icon: "❄️", isCorrect: false },
                { text: "Dry desert", icon: "🏜️", isCorrect: false },
                { text: "Mild with four seasons", icon: "🍂", isCorrect: false }
            ],
            explanation: "Tropical climates near the equator have warm temperatures and high humidity throughout the year with no winter."
        },
        {
            question: "What crops grow well in tropical climates?",
            type: "multiple_choice",
            options: [
                { text: "Bananas, rice, cocoa", icon: "🍌", isCorrect: true },
                { text: "Wheat and barley", icon: "🌾", isCorrect: false },
                { text: "Apples and cherries", icon: "🍎", isCorrect: false },
                { text: "Pine trees", icon: "🌲", isCorrect: false }
            ],
            explanation: "Tropical crops like bananas, rice, cocoa, and mangoes thrive in the warm, humid conditions near the equator."
        },
        {
            question: "What is an arid climate?",
            type: "multiple_choice",
            options: [
                { text: "Very dry with little rainfall", icon: "🏜️", isCorrect: true },
                { text: "Very wet", icon: "🌧️", isCorrect: false },
                { text: "Very cold", icon: "❄️", isCorrect: false },
                { text: "Very windy", icon: "💨", isCorrect: false }
            ],
            explanation: "Arid climates receive less than 250mm of rain annually and require irrigation for most farming."
        },
        {
            question: "What is a temperate climate?",
            type: "multiple_choice",
            options: [
                { text: "Moderate temperatures with distinct seasons", icon: "🍂", isCorrect: true },
                { text: "Always hot", icon: "🔥", isCorrect: false },
                { text: "Always cold", icon: "❄️", isCorrect: false },
                { text: "No seasons", icon: "➖", isCorrect: false }
            ],
            explanation: "Temperate climates have moderate temperatures and four distinct seasons, supporting diverse agriculture."
        },
        {
            question: "How does altitude affect climate?",
            type: "multiple_choice",
            options: [
                { text: "Higher altitude means cooler temperatures", icon: "🏔️", isCorrect: true },
                { text: "Higher altitude is warmer", icon: "🔥", isCorrect: false },
                { text: "No effect", icon: "❓", isCorrect: false },
                { text: "Only affects rainfall", icon: "🌧️", isCorrect: false }
            ],
            explanation: "Temperature drops about 6.5°C for every 1000m increase in altitude, affecting what crops can grow."
        },
        {
            question: "What is a Mediterranean climate?",
            type: "multiple_choice",
            options: [
                { text: "Hot dry summers, mild wet winters", icon: "🌊", isCorrect: true },
                { text: "Cold all year", icon: "❄️", isCorrect: false },
                { text: "Wet all year", icon: "🌧️", isCorrect: false },
                { text: "Hot and humid", icon: "🌴", isCorrect: false }
            ],
            explanation: "Mediterranean climates have warm, dry summers and mild, rainy winters - ideal for grapes, olives, and citrus."
        },
        {
            question: "What crops suit semi-arid regions?",
            type: "multiple_choice",
            options: [
                { text: "Millet, sorghum, drought-resistant varieties", icon: "🌾", isCorrect: true },
                { text: "Rice paddies", icon: "🍚", isCorrect: false },
                { text: "Tropical fruits", icon: "🥭", isCorrect: false },
                { text: "Water chestnuts", icon: "💧", isCorrect: false }
            ],
            explanation: "Semi-arid regions with 250-500mm rainfall suit drought-tolerant crops like millet, sorghum, and certain legumes."
        },
        {
            question: "What is a continental climate?",
            type: "multiple_choice",
            options: [
                { text: "Hot summers, cold winters, far from ocean", icon: "🌡️", isCorrect: true },
                { text: "Always mild", icon: "😊", isCorrect: false },
                { text: "Coastal and humid", icon: "🌊", isCorrect: false },
                { text: "Tropical", icon: "🌴", isCorrect: false }
            ],
            explanation: "Continental climates in interior regions have extreme temperature differences between hot summers and cold winters."
        },
        {
            question: "How do oceans affect nearby land climate?",
            type: "multiple_choice",
            options: [
                { text: "Moderate temperatures, more moisture", icon: "🌊", isCorrect: true },
                { text: "Make it drier", icon: "🏜️", isCorrect: false },
                { text: "Cause extreme temperatures", icon: "🌡️", isCorrect: false },
                { text: "No effect", icon: "❓", isCorrect: false }
            ],
            explanation: "Oceans store heat and release moisture, moderating coastal temperatures and providing more rainfall."
        },
        {
            question: "What is the Sahel region known for?",
            type: "multiple_choice",
            options: [
                { text: "Semi-arid zone prone to drought", icon: "🏜️", isCorrect: true },
                { text: "Rainforest", icon: "🌳", isCorrect: false },
                { text: "Arctic tundra", icon: "❄️", isCorrect: false },
                { text: "Coastal fishing", icon: "🐟", isCorrect: false }
            ],
            explanation: "The Sahel is the semi-arid transition zone south of the Sahara, experiencing frequent droughts and desertification."
        }
    ],

    // Level 7 - Climate Change
    module8_level7: [
        {
            question: "What is climate change?",
            type: "multiple_choice",
            options: [
                { text: "Long-term shift in global weather patterns", icon: "🌍", isCorrect: true },
                { text: "Daily weather changes", icon: "☀️", isCorrect: false },
                { text: "Seasonal changes", icon: "🍂", isCorrect: false },
                { text: "Moving to new location", icon: "🚗", isCorrect: false }
            ],
            explanation: "Climate change refers to long-term shifts in temperatures and weather patterns, increasingly driven by human activities."
        },
        {
            question: "How does climate change affect farming?",
            type: "multiple_choice",
            options: [
                { text: "Changes growing seasons and water availability", icon: "📉", isCorrect: true },
                { text: "No effect on farming", icon: "❓", isCorrect: false },
                { text: "Only improves crops", icon: "✅", isCorrect: false },
                { text: "Stops all farming", icon: "🛑", isCorrect: false }
            ],
            explanation: "Climate change alters rainfall patterns, increases extreme weather, shifts growing zones, and affects pest populations."
        },
        {
            question: "What is carbon sequestration in farming?",
            type: "multiple_choice",
            options: [
                { text: "Storing carbon in soil and plants", icon: "🌱", isCorrect: true },
                { text: "Releasing carbon", icon: "💨", isCorrect: false },
                { text: "Burning crops", icon: "🔥", isCorrect: false },
                { text: "Using more fuel", icon: "⛽", isCorrect: false }
            ],
            explanation: "Carbon sequestration involves capturing and storing atmospheric carbon dioxide in soil organic matter and plant biomass."
        },
        {
            question: "What are drought-resistant crops?",
            type: "multiple_choice",
            options: [
                { text: "Crops that survive with less water", icon: "🌵", isCorrect: true },
                { text: "Crops that need flooding", icon: "🌊", isCorrect: false },
                { text: "Crops grown underwater", icon: "💧", isCorrect: false },
                { text: "Crops that die without rain", icon: "💀", isCorrect: false }
            ],
            explanation: "Drought-resistant crops have adaptations like deep roots, waxy leaves, or dormancy that help survive water scarcity."
        },
        {
            question: "What is climate-smart agriculture?",
            type: "multiple_choice",
            options: [
                { text: "Farming practices that adapt to climate change", icon: "🧠", isCorrect: true },
                { text: "Using weather apps", icon: "📱", isCorrect: false },
                { text: "Growing only one crop", icon: "1️⃣", isCorrect: false },
                { text: "Ignoring weather", icon: "🙈", isCorrect: false }
            ],
            explanation: "Climate-smart agriculture sustainably increases productivity while adapting to climate change and reducing emissions."
        },
        {
            question: "How can trees help fight climate change on farms?",
            type: "multiple_choice",
            options: [
                { text: "Absorb CO2 and provide shade", icon: "🌳", isCorrect: true },
                { text: "Release more CO2", icon: "💨", isCorrect: false },
                { text: "Block all sunlight", icon: "🌑", isCorrect: false },
                { text: "Use more water", icon: "💧", isCorrect: false }
            ],
            explanation: "Trees absorb carbon dioxide, store carbon, provide shade to reduce heat stress, and improve farm resilience."
        },
        {
            question: "What is agroforestry?",
            type: "multiple_choice",
            options: [
                { text: "Combining trees with crops or livestock", icon: "🌳", isCorrect: true },
                { text: "Cutting all trees", icon: "🪓", isCorrect: false },
                { text: "Growing only forest", icon: "🌲", isCorrect: false },
                { text: "Farming without plants", icon: "❓", isCorrect: false }
            ],
            explanation: "Agroforestry integrates trees into farming systems, providing multiple benefits including climate resilience and carbon storage."
        },
        {
            question: "What is the greenhouse effect?",
            type: "multiple_choice",
            options: [
                { text: "Gases trapping heat in atmosphere", icon: "🌡️", isCorrect: true },
                { text: "Effect of farming in greenhouses", icon: "🏠", isCorrect: false },
                { text: "Green plants growing", icon: "🌿", isCorrect: false },
                { text: "Painting houses green", icon: "🎨", isCorrect: false }
            ],
            explanation: "The greenhouse effect occurs when atmospheric gases like CO2 trap heat, warming the planet like a greenhouse."
        },
        {
            question: "How can cover crops help with climate change?",
            type: "multiple_choice",
            options: [
                { text: "Store carbon and protect soil", icon: "🌱", isCorrect: true },
                { text: "Release more carbon", icon: "💨", isCorrect: false },
                { text: "Increase erosion", icon: "💨", isCorrect: false },
                { text: "No benefit", icon: "❌", isCorrect: false }
            ],
            explanation: "Cover crops capture carbon from air, store it in roots and soil, prevent erosion, and improve soil health."
        },
        {
            question: "What is adaptation in farming?",
            type: "multiple_choice",
            options: [
                { text: "Changing practices to cope with new conditions", icon: "🔄", isCorrect: true },
                { text: "Doing everything the same", icon: "➡️", isCorrect: false },
                { text: "Giving up farming", icon: "🛑", isCorrect: false },
                { text: "Moving to cities", icon: "🏙️", isCorrect: false }
            ],
            explanation: "Adaptation means adjusting farming practices, crop choices, and timing to cope with changing climate conditions."
        }
    ],

    // Level 8 - Weather Forecasting
    module8_level8: [
        {
            question: "What tools measure wind speed?",
            type: "multiple_choice",
            options: [
                { text: "Anemometer", icon: "🌀", isCorrect: true },
                { text: "Thermometer", icon: "🌡️", isCorrect: false },
                { text: "Rain gauge", icon: "🌧️", isCorrect: false },
                { text: "Barometer", icon: "📊", isCorrect: false }
            ],
            explanation: "An anemometer measures wind speed using rotating cups or ultrasonic sensors, important for farming decisions."
        },
        {
            question: "What does a barometer measure?",
            type: "multiple_choice",
            options: [
                { text: "Atmospheric pressure", icon: "📊", isCorrect: true },
                { text: "Temperature", icon: "🌡️", isCorrect: false },
                { text: "Humidity", icon: "💧", isCorrect: false },
                { text: "Rainfall", icon: "🌧️", isCorrect: false }
            ],
            explanation: "A barometer measures air pressure - falling pressure often indicates approaching storms, rising pressure suggests fair weather."
        },
        {
            question: "How do satellites help weather forecasting?",
            type: "multiple_choice",
            options: [
                { text: "Take images of clouds and storms from space", icon: "🛰️", isCorrect: true },
                { text: "Block rain", icon: "🛑", isCorrect: false },
                { text: "Make weather warmer", icon: "🔥", isCorrect: false },
                { text: "Water crops", icon: "💧", isCorrect: false }
            ],
            explanation: "Weather satellites capture images showing cloud formations, storm systems, and weather patterns across large areas."
        },
        {
            question: "What is a weather radar?",
            type: "multiple_choice",
            options: [
                { text: "Detects precipitation using radio waves", icon: "📡", isCorrect: true },
                { text: "Creates rain", icon: "🌧️", isCorrect: false },
                { text: "Measures soil moisture", icon: "🌱", isCorrect: false },
                { text: "Counts insects", icon: "🐛", isCorrect: false }
            ],
            explanation: "Weather radar uses radio waves to detect rain, snow, and storms, showing their location, intensity, and movement."
        },
        {
            question: "What is a weather app useful for in farming?",
            type: "multiple_choice",
            options: [
                { text: "Quick access to forecasts for planning", icon: "📱", isCorrect: true },
                { text: "Playing games", icon: "🎮", isCorrect: false },
                { text: "Ordering seeds", icon: "🌱", isCorrect: false },
                { text: "Social media", icon: "👥", isCorrect: false }
            ],
            explanation: "Weather apps provide real-time forecasts helping farmers decide when to plant, spray, irrigate, or harvest."
        },
        {
            question: "What indicates rain is coming?",
            type: "multiple_choice",
            options: [
                { text: "Dark clouds, falling pressure, humidity rising", icon: "🌧️", isCorrect: true },
                { text: "Clear blue sky", icon: "☀️", isCorrect: false },
                { text: "Hot dry wind", icon: "🔥", isCorrect: false },
                { text: "Cold and sunny", icon: "❄️", isCorrect: false }
            ],
            explanation: "Approaching rain often shows dark cumulus clouds, dropping barometric pressure, and increasing humidity."
        },
        {
            question: "What is a hygrometer?",
            type: "multiple_choice",
            options: [
                { text: "Measures humidity", icon: "💧", isCorrect: true },
                { text: "Measures height", icon: "📏", isCorrect: false },
                { text: "Measures weight", icon: "⚖️", isCorrect: false },
                { text: "Measures light", icon: "💡", isCorrect: false }
            ],
            explanation: "A hygrometer measures relative humidity - the amount of water vapor in the air compared to its maximum capacity."
        },
        {
            question: "Why are weather forecasts sometimes wrong?",
            type: "multiple_choice",
            options: [
                { text: "Weather is complex and hard to predict", icon: "🤔", isCorrect: true },
                { text: "Forecasters lie", icon: "🤥", isCorrect: false },
                { text: "Equipment always breaks", icon: "🔧", isCorrect: false },
                { text: "They don't try hard", icon: "😴", isCorrect: false }
            ],
            explanation: "Weather involves countless variables interacting chaotically, making long-range prediction challenging despite advanced technology."
        },
        {
            question: "What is a frost warning?",
            type: "multiple_choice",
            options: [
                { text: "Alert that temperatures will drop below freezing", icon: "❄️", isCorrect: true },
                { text: "Too much rain coming", icon: "🌧️", isCorrect: false },
                { text: "Heat wave approaching", icon: "🔥", isCorrect: false },
                { text: "Strong winds expected", icon: "💨", isCorrect: false }
            ],
            explanation: "Frost warnings alert farmers to protect sensitive crops when overnight temperatures are expected to drop to freezing."
        },
        {
            question: "How accurate are 7-day weather forecasts?",
            type: "multiple_choice",
            options: [
                { text: "About 80% accurate, less for later days", icon: "📊", isCorrect: true },
                { text: "100% accurate always", icon: "✅", isCorrect: false },
                { text: "Never accurate", icon: "❌", isCorrect: false },
                { text: "Only accurate for temperature", icon: "🌡️", isCorrect: false }
            ],
            explanation: "Modern 7-day forecasts are roughly 80% accurate, with accuracy decreasing for each additional day predicted."
        }
    ],

    // Level 9 - Extreme Weather
    module8_level9: [
        {
            question: "What should farmers do before a storm?",
            type: "multiple_choice",
            options: [
                { text: "Secure equipment, harvest ripe crops, protect animals", icon: "🛡️", isCorrect: true },
                { text: "Leave everything outside", icon: "🌿", isCorrect: false },
                { text: "Plant more crops", icon: "🌱", isCorrect: false },
                { text: "Ignore warnings", icon: "🙈", isCorrect: false }
            ],
            explanation: "Storm preparation includes securing loose items, harvesting what's ready, sheltering animals, and having emergency supplies."
        },
        {
            question: "How can farmers protect crops from hail?",
            type: "multiple_choice",
            options: [
                { text: "Use hail nets or row covers", icon: "🛡️", isCorrect: true },
                { text: "Nothing can help", icon: "❌", isCorrect: false },
                { text: "Water the crops more", icon: "💧", isCorrect: false },
                { text: "Harvest everything immediately", icon: "🌾", isCorrect: false }
            ],
            explanation: "Hail netting or protective covers can shield valuable crops from hail damage, though it's not always practical for large fields."
        },
        {
            question: "What is a flash flood?",
            type: "multiple_choice",
            options: [
                { text: "Rapid flooding from heavy rain", icon: "🌊", isCorrect: true },
                { text: "Slow rising water", icon: "💧", isCorrect: false },
                { text: "Lightning strike", icon: "⚡", isCorrect: false },
                { text: "Morning dew", icon: "🌅", isCorrect: false }
            ],
            explanation: "Flash floods occur suddenly from intense rainfall, often in low-lying areas, and can devastate crops and infrastructure."
        },
        {
            question: "What is heat stress in animals?",
            type: "multiple_choice",
            options: [
                { text: "Dangerous overheating requiring shade and water", icon: "🥵", isCorrect: true },
                { text: "Animals feeling cold", icon: "❄️", isCorrect: false },
                { text: "Animals being hungry", icon: "🍽️", isCorrect: false },
                { text: "Normal summer behavior", icon: "☀️", isCorrect: false }
            ],
            explanation: "Heat stress occurs when animals can't regulate body temperature, reducing milk production, growth, and potentially causing death."
        },
        {
            question: "How do you protect livestock during extreme cold?",
            type: "multiple_choice",
            options: [
                { text: "Provide shelter, bedding, extra feed", icon: "🏠", isCorrect: true },
                { text: "Leave them outside", icon: "❄️", isCorrect: false },
                { text: "Reduce their food", icon: "📉", isCorrect: false },
                { text: "Remove their shelter", icon: "🏚️", isCorrect: false }
            ],
            explanation: "Animals need windproof shelter, dry bedding, unfrozen water, and extra calories to maintain body heat in cold weather."
        },
        {
            question: "What is crop insurance?",
            type: "multiple_choice",
            options: [
                { text: "Protection against weather damage losses", icon: "📋", isCorrect: true },
                { text: "Insurance for farm workers", icon: "👷", isCorrect: false },
                { text: "Health insurance", icon: "🏥", isCorrect: false },
                { text: "Vehicle insurance", icon: "🚗", isCorrect: false }
            ],
            explanation: "Crop insurance compensates farmers for losses from extreme weather, pests, or disease, helping them recover and continue farming."
        },
        {
            question: "What happens during El Niño?",
            type: "multiple_choice",
            options: [
                { text: "Pacific warming causing global weather changes", icon: "🌊", isCorrect: true },
                { text: "Normal weather pattern", icon: "☀️", isCorrect: false },
                { text: "Extra cold Pacific", icon: "❄️", isCorrect: false },
                { text: "Local rain only", icon: "🌧️", isCorrect: false }
            ],
            explanation: "El Niño is Pacific Ocean warming that disrupts global weather, causing droughts in some regions and floods in others."
        },
        {
            question: "How can farmers recover after flooding?",
            type: "multiple_choice",
            options: [
                { text: "Drain fields, assess damage, replant if possible", icon: "🔄", isCorrect: true },
                { text: "Give up farming", icon: "🛑", isCorrect: false },
                { text: "Add more water", icon: "💧", isCorrect: false },
                { text: "Do nothing", icon: "➖", isCorrect: false }
            ],
            explanation: "Post-flood recovery involves draining excess water, testing soil, removing debris, and replanting when conditions allow."
        },
        {
            question: "What is a drought contingency plan?",
            type: "multiple_choice",
            options: [
                { text: "Prepared actions for water shortage", icon: "📋", isCorrect: true },
                { text: "Plan for too much rain", icon: "🌧️", isCorrect: false },
                { text: "Marketing strategy", icon: "📈", isCorrect: false },
                { text: "Vacation plan", icon: "✈️", isCorrect: false }
            ],
            explanation: "A drought contingency plan outlines water conservation measures, alternative water sources, and decisions about reducing livestock or changing crops."
        },
        {
            question: "Why is farm diversification important for weather risks?",
            type: "multiple_choice",
            options: [
                { text: "Multiple crops/animals spread risk", icon: "🌈", isCorrect: true },
                { text: "Makes farming harder", icon: "😰", isCorrect: false },
                { text: "Wastes money", icon: "💸", isCorrect: false },
                { text: "No benefit", icon: "❌", isCorrect: false }
            ],
            explanation: "Growing diverse crops and livestock means one weather event won't destroy everything - some products may survive or even benefit."
        }
    ],

    // Level 10 - Advanced Weather Management
    module8_level10: [
        {
            question: "What is precision weather monitoring?",
            type: "multiple_choice",
            options: [
                { text: "Using sensors for field-specific conditions", icon: "📡", isCorrect: true },
                { text: "General regional forecasts", icon: "🗺️", isCorrect: false },
                { text: "Guessing the weather", icon: "🤔", isCorrect: false },
                { text: "Only TV forecasts", icon: "📺", isCorrect: false }
            ],
            explanation: "Precision weather monitoring uses on-farm sensors to track specific conditions in different fields for better decisions."
        },
        {
            question: "What is evapotranspiration?",
            type: "multiple_choice",
            options: [
                { text: "Combined water loss from soil and plants", icon: "💨", isCorrect: true },
                { text: "Water absorption only", icon: "💧", isCorrect: false },
                { text: "Rainfall measurement", icon: "🌧️", isCorrect: false },
                { text: "Temperature change", icon: "🌡️", isCorrect: false }
            ],
            explanation: "Evapotranspiration (ET) combines evaporation from soil and transpiration from plants - key for irrigation scheduling."
        },
        {
            question: "How do degree days help farmers?",
            type: "multiple_choice",
            options: [
                { text: "Predict crop development and pest activity", icon: "📊", isCorrect: true },
                { text: "Measure rainfall", icon: "🌧️", isCorrect: false },
                { text: "Count sunny days", icon: "☀️", isCorrect: false },
                { text: "Track wind speed", icon: "💨", isCorrect: false }
            ],
            explanation: "Growing degree days (GDD) accumulate heat units to predict when crops mature or pests emerge based on temperature."
        },
        {
            question: "What is cloud seeding?",
            type: "multiple_choice",
            options: [
                { text: "Adding particles to clouds to encourage rain", icon: "☁️", isCorrect: true },
                { text: "Planting in cloudy weather", icon: "🌱", isCorrect: false },
                { text: "Storing clouds", icon: "📦", isCorrect: false },
                { text: "Growing cloud-shaped plants", icon: "🌿", isCorrect: false }
            ],
            explanation: "Cloud seeding releases silver iodide or other particles into clouds to encourage water droplet formation and rainfall."
        },
        {
            question: "What is a soil moisture sensor?",
            type: "multiple_choice",
            options: [
                { text: "Device measuring water content in soil", icon: "📱", isCorrect: true },
                { text: "Rain gauge", icon: "🌧️", isCorrect: false },
                { text: "Temperature sensor", icon: "🌡️", isCorrect: false },
                { text: "Wind meter", icon: "💨", isCorrect: false }
            ],
            explanation: "Soil moisture sensors measure water availability at root depth, helping farmers irrigate precisely when needed."
        },
        {
            question: "What is weather index insurance?",
            type: "multiple_choice",
            options: [
                { text: "Insurance paying based on weather data", icon: "📊", isCorrect: true },
                { text: "Regular crop inspection", icon: "👀", isCorrect: false },
                { text: "Farm equipment insurance", icon: "🚜", isCorrect: false },
                { text: "Life insurance", icon: "❤️", isCorrect: false }
            ],
            explanation: "Weather index insurance pays automatically when weather thresholds are met (e.g., rainfall below certain level), without individual loss assessment."
        },
        {
            question: "How do greenhouses manage climate?",
            type: "multiple_choice",
            options: [
                { text: "Control temperature, humidity, and light", icon: "🏠", isCorrect: true },
                { text: "Only provide shade", icon: "🌑", isCorrect: false },
                { text: "Only collect rain", icon: "🌧️", isCorrect: false },
                { text: "Only block wind", icon: "💨", isCorrect: false }
            ],
            explanation: "Greenhouses use heating, cooling, ventilation, shading, and irrigation to maintain optimal growing conditions year-round."
        },
        {
            question: "What is climate modeling?",
            type: "multiple_choice",
            options: [
                { text: "Computer simulations predicting future climate", icon: "💻", isCorrect: true },
                { text: "Building model houses", icon: "🏠", isCorrect: false },
                { text: "Fashion modeling", icon: "👗", isCorrect: false },
                { text: "Clay sculpture", icon: "🎨", isCorrect: false }
            ],
            explanation: "Climate models use supercomputers to simulate atmospheric and oceanic processes, projecting future climate scenarios for planning."
        },
        {
            question: "What is a phenological calendar?",
            type: "multiple_choice",
            options: [
                { text: "Record of seasonal plant and animal events", icon: "📅", isCorrect: true },
                { text: "Phone contact list", icon: "📱", isCorrect: false },
                { text: "Harvest dates only", icon: "🌾", isCorrect: false },
                { text: "Market prices", icon: "💰", isCorrect: false }
            ],
            explanation: "Phenological calendars track natural events like flowering, bird migration, and insect emergence to guide farming activities."
        },
        {
            question: "How can data analytics improve weather resilience?",
            type: "multiple_choice",
            options: [
                { text: "Analyze patterns to make better decisions", icon: "📈", isCorrect: true },
                { text: "Delete weather data", icon: "🗑️", isCorrect: false },
                { text: "Ignore historical data", icon: "🙈", isCorrect: false },
                { text: "Only use intuition", icon: "💭", isCorrect: false }
            ],
            explanation: "Analyzing historical weather data and trends helps farmers identify patterns, optimize planting dates, and prepare for likely conditions."
        }
    ]
};

// Register module globally
if (typeof window !== 'undefined') {
    window.MODULE8_QUESTIONS = MODULE8_QUESTIONS;
}
