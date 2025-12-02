// ===========================================
// OFFLINE LEARNING ENGINE
// Rule-based + Pre-generated tips for Africa
// No internet needed!
// ===========================================

window.LearningEngine = {

    // ===== PRE-GENERATED TIPS PER MODULE =====
    tips: {
        1: [ // Soil & Basics
            "Good soil is dark and smells fresh. Bad soil is grey and hard.",
            "Add compost to make soil better. Kitchen waste is free compost!",
            "Test soil by squeezing it. Good soil holds shape but breaks easily.",
            "Rotate crops each season to keep soil healthy.",
            "Cover soil with leaves or straw to keep it moist.",
            "Sandy soil needs more water. Clay soil holds water longer.",
            "Plant beans to add nitrogen to your soil naturally.",
            "Never burn crop waste - use it as mulch instead.",
            "Dig drainage channels if water stands too long.",
            "Healthy soil has many earthworms. They are your friends!"
        ],
        2: [ // Plant Protection
            "Check plants early morning for pests - they hide in heat.",
            "Mix neem leaves with water to make natural pesticide.",
            "Yellow sticky traps catch flying insects without chemicals.",
            "Remove sick plants immediately to stop disease spreading.",
            "Plant marigolds between crops - they repel many pests.",
            "Ash from cooking can protect against some insects.",
            "Companion planting: onions protect tomatoes from pests.",
            "Healthy plants resist disease better. Feed your soil!",
            "Cut infected leaves and burn them far from your field.",
            "Ladybugs eat aphids. Don't kill the helpful insects!"
        ],
        3: [ // Harvest & Sales
            "Harvest in early morning when vegetables are crisp.",
            "Sort your produce by size - bigger ones sell for more.",
            "Clean produce looks better and sells faster.",
            "Know market days and arrive early for best prices.",
            "Group with other farmers to negotiate better prices.",
            "Store in shade to keep produce fresh longer.",
            "Learn what vegetables are scarce - grow those for profit.",
            "Keep records of what you sell and earn each week.",
            "Build relationships with buyers - loyal customers pay better.",
            "Dry or pickle extra harvest to sell in off-season."
        ],
        4: [ // Irrigation
            "Water early morning or evening - less evaporation.",
            "Drip irrigation saves water and targets plant roots.",
            "Mulch around plants keeps soil moist longer.",
            "Check soil moisture by sticking finger 2 inches deep.",
            "Collect rainwater from roofs into tanks or barrels.",
            "Overwatering rots roots. Let soil dry between watering.",
            "Make small basins around trees to hold water.",
            "Furrow irrigation works well for row crops.",
            "Gray water from washing can water non-food plants.",
            "Group plants by water needs - saves time and water."
        ],
        5: [ // Farm Machinery
            "Clean tools after use - they last longer.",
            "Sharpen hoes and machetes regularly for easier work.",
            "Oil metal parts to prevent rust in rainy season.",
            "Store tools in dry place, off the ground.",
            "A wheelbarrow saves many trips carrying heavy loads.",
            "Maintain ox plows - check straps and blade yearly.",
            "Simple pump irrigation is cheaper than bucket carrying.",
            "Share expensive machinery with neighbor farmers.",
            "Learn basic repairs - saves money and time.",
            "Good tools are investment - buy quality when possible."
        ],
        6: [ // Ecology
            "Plant trees around fields for shade and wind protection.",
            "Leave some wild areas for helpful insects and birds.",
            "Crop diversity protects against total crop failure.",
            "Organic farming builds soil health long-term.",
            "Avoid burning - it kills soil organisms and causes erosion.",
            "Contour plowing on slopes prevents soil washing away.",
            "Agroforestry: trees and crops together benefit both.",
            "Save seeds from best plants for next season.",
            "Natural pest control is safer for family and land.",
            "Healthy ecosystem means less work fighting problems."
        ],
        7: [ // Livestock
            "Provide clean water daily - animals need lots of water.",
            "Shade is essential - heat stress reduces milk and growth.",
            "Vaccinate before rainy season when diseases spread.",
            "Rotational grazing lets pastures recover.",
            "Animal manure is valuable fertilizer - collect and compost it.",
            "Deworm animals regularly, especially young ones.",
            "Separate sick animals immediately to protect others.",
            "Good fencing prevents crop damage and theft.",
            "Feed supplements during dry season maintain health.",
            "Keep animal housing clean and dry to prevent disease."
        ],
        8: [ // Fertilization
            "Compost is free fertilizer from kitchen and farm waste.",
            "Animal manure must age 3 months before using on vegetables.",
            "Too much fertilizer burns plants - more is not better.",
            "Apply fertilizer when soil is moist, not dry.",
            "Legumes (beans, peas) add nitrogen naturally.",
            "Green manure: dig in young plants before they seed.",
            "Liquid fertilizer from manure tea feeds plants quickly.",
            "Test soil to know what nutrients are missing.",
            "Split fertilizer applications - don't give all at once.",
            "Organic fertilizers release nutrients slowly but last longer."
        ],
        9: [ // Weather & Climate
            "Plant drought-resistant varieties in dry areas.",
            "Mulch protects soil from both sun and heavy rain.",
            "Stagger planting dates to reduce weather risk.",
            "Listen to weather forecasts before major farm activities.",
            "Windbreaks of trees protect crops from strong winds.",
            "Raised beds help in flood-prone areas.",
            "Save water during wet season for dry months.",
            "Early maturing varieties can escape late droughts.",
            "Climate is changing - be ready to adapt crop choices.",
            "Traditional knowledge about weather signs is valuable."
        ],
        10: [ // Specialty Crops
            "Tomatoes need staking for better fruit and less disease.",
            "Onions store well - grow extra for off-season sales.",
            "Peppers bring high prices - protect from pests carefully.",
            "Leafy greens grow fast - plant every 2 weeks for constant harvest.",
            "Fruit trees take years but provide income for decades.",
            "Herbs like basil sell well in urban markets.",
            "Quality seeds are worth the extra cost for specialty crops.",
            "Learn proper spacing - crowded plants produce less.",
            "Timing matters - know when demand and prices are highest.",
            "Start small with new crops until you master them."
        ]
    },

    // ===== COGNITIVE PROFILE RULES =====
    // Instead of LLM, use simple rules based on performance
    assessCognitiveProfile: function(answers) {
        let correct = answers.filter(a => a.wasCorrect).length;
        let total = answers.length;
        let avgTime = answers.reduce((sum, a) => sum + (a.timeSpent || 5000), 0) / total;

        // Simple rule-based assessment
        let profile = {
            reading_level: correct >= 8 ? "A2" : correct >= 5 ? "A1" : "A0",
            processing_speed: avgTime < 5000 ? 1.0 : avgTime < 10000 ? 0.7 : 0.4,
            working_memory: correct / total,
            numeracy: correct >= 7 ? 0.8 : correct >= 4 ? 0.5 : 0.3,
            error_tolerance: correct >= 6 ? 0.8 : 0.5,
            preferred_mode: "pictures" // Default for low-literacy
        };

        return profile;
    },

    // ===== GET TIP FOR MODULE =====
    getTip: function(moduleId, wrongTopics, skillLevel) {
        const moduleTips = this.tips[moduleId] || this.tips[1];

        // Select tip based on skill level
        // Lower skill = more basic tips (earlier in array)
        // Higher skill = more advanced tips (later in array)
        const normalizedSkill = (skillLevel + 3) / 6; // Convert -3..+3 to 0..1
        const tipIndex = Math.floor(normalizedSkill * (moduleTips.length - 1));

        // Add some randomness but weighted by skill
        const randomOffset = Math.floor(Math.random() * 3) - 1;
        const finalIndex = Math.max(0, Math.min(moduleTips.length - 1, tipIndex + randomOffset));

        return moduleTips[finalIndex];
    },

    // ===== ADAPTIVE QUESTION SELECTION =====
    selectNextQuestion: function(questions, skillTheta, answeredIds) {
        // Filter out already answered
        const available = questions.filter(q => !answeredIds.includes(q.id));
        if (available.length === 0) return null;

        // Calculate ideal difficulty based on skill
        // theta 0 = medium difficulty, +3 = hard, -3 = easy
        const idealDifficulty = (skillTheta + 3) / 6; // 0 to 1

        // Score each question by how close it matches ideal difficulty
        const scored = available.map(q => {
            const qDifficulty = (q.difficulty || 0.5);
            const match = 1 - Math.abs(idealDifficulty - qDifficulty);
            return { question: q, score: match + Math.random() * 0.2 };
        });

        // Sort by score and pick best
        scored.sort((a, b) => b.score - a.score);
        return scored[0].question;
    },

    // ===== SPACED REPETITION =====
    // Returns questions that need review
    getReviewQuestions: function(history, allQuestions) {
        const now = Date.now();
        const DAY = 24 * 60 * 60 * 1000;

        // Questions answered wrong should be reviewed sooner
        const needsReview = history.filter(h => {
            const daysSince = (now - h.timestamp) / DAY;

            if (!h.wasCorrect) {
                // Wrong answers: review after 1 day
                return daysSince >= 1;
            } else {
                // Correct answers: review after 3-7 days based on streak
                const reviewInterval = 3 + (h.streak || 0);
                return daysSince >= reviewInterval;
            }
        });

        return needsReview.map(h =>
            allQuestions.find(q => q.id === h.questionId)
        ).filter(Boolean);
    },

    // ===== PROGRESS ANALYTICS =====
    getProgressSummary: function(history, skillTheta) {
        const totalAnswers = history.length;
        const correctAnswers = history.filter(h => h.wasCorrect).length;

        // Calculate streak (consecutive correct)
        let currentStreak = 0;
        for (let i = history.length - 1; i >= 0; i--) {
            if (history[i].wasCorrect) currentStreak++;
            else break;
        }

        // Average skill across modules
        const skills = Object.values(skillTheta);
        const avgSkill = skills.length > 0
            ? skills.reduce((a, b) => a + b, 0) / skills.length
            : 0;

        // Mastery level
        let masteryLevel = "Beginner";
        if (avgSkill > 1.5) masteryLevel = "Expert";
        else if (avgSkill > 0.5) masteryLevel = "Advanced";
        else if (avgSkill > -0.5) masteryLevel = "Intermediate";

        return {
            totalAnswers,
            correctAnswers,
            accuracy: totalAnswers > 0 ? (correctAnswers / totalAnswers * 100).toFixed(1) : 0,
            currentStreak,
            avgSkill: avgSkill.toFixed(2),
            masteryLevel
        };
    }
};

console.log("[LearningEngine] Offline learning engine loaded - 100 tips ready!");
