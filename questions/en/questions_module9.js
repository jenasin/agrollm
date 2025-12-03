// Module 9: Farm Business - 100 questions (10 levels x 10 questions)
const MODULE9_QUESTIONS = {
    // Level 1 - Business Basics
    module9_level1: [
        {
            question: "What is profit?",
            type: "multiple_choice",
            options: [
                { text: "Money earned minus costs", icon: "💰", isCorrect: true },
                { text: "Total money earned", icon: "💵", isCorrect: false },
                { text: "Money spent", icon: "💸", isCorrect: false },
                { text: "Bank balance", icon: "🏦", isCorrect: false }
            ],
            explanation: "Profit is what remains after subtracting all costs (seeds, labor, equipment) from total revenue."
        },
        {
            question: "Why do farmers need to keep records?",
            type: "multiple_choice",
            options: [
                { text: "Track income, expenses, and make decisions", icon: "📊", isCorrect: true },
                { text: "For fun", icon: "🎉", isCorrect: false },
                { text: "To waste time", icon: "⏰", isCorrect: false },
                { text: "Records are not needed", icon: "❌", isCorrect: false }
            ],
            explanation: "Good records help farmers understand what's profitable, plan budgets, get loans, and pay taxes correctly."
        },
        {
            question: "What is a budget?",
            type: "multiple_choice",
            options: [
                { text: "Plan for income and expenses", icon: "📋", isCorrect: true },
                { text: "List of crops", icon: "🌾", isCorrect: false },
                { text: "Bank account", icon: "🏦", isCorrect: false },
                { text: "Type of seed", icon: "🌱", isCorrect: false }
            ],
            explanation: "A budget is a financial plan estimating expected income and planned expenses for a period of time."
        },
        {
            question: "What is revenue?",
            type: "multiple_choice",
            options: [
                { text: "Total money earned from sales", icon: "💵", isCorrect: true },
                { text: "Money in savings", icon: "🏦", isCorrect: false },
                { text: "Cost of seeds", icon: "🌱", isCorrect: false },
                { text: "Debt owed", icon: "📝", isCorrect: false }
            ],
            explanation: "Revenue is the total amount of money received from selling products, before subtracting any costs."
        },
        {
            question: "What are operating costs?",
            type: "multiple_choice",
            options: [
                { text: "Daily expenses to run the farm", icon: "💸", isCorrect: true },
                { text: "Cost of buying land", icon: "🏞️", isCorrect: false },
                { text: "Money earned", icon: "💰", isCorrect: false },
                { text: "Bank interest earned", icon: "📈", isCorrect: false }
            ],
            explanation: "Operating costs are ongoing expenses like seeds, fertilizer, fuel, and labor needed to run the farm."
        },
        {
            question: "What is a farm business plan?",
            type: "multiple_choice",
            options: [
                { text: "Document describing goals and strategies", icon: "📄", isCorrect: true },
                { text: "List of farm animals", icon: "🐄", isCorrect: false },
                { text: "Weather forecast", icon: "🌤️", isCorrect: false },
                { text: "Seed catalog", icon: "📕", isCorrect: false }
            ],
            explanation: "A business plan outlines farm goals, products, markets, finances, and strategies for success."
        },
        {
            question: "Why is cash flow important?",
            type: "multiple_choice",
            options: [
                { text: "Ensures money is available when needed", icon: "💧", isCorrect: true },
                { text: "Makes crops grow faster", icon: "🌱", isCorrect: false },
                { text: "Improves weather", icon: "☀️", isCorrect: false },
                { text: "Not important at all", icon: "❌", isCorrect: false }
            ],
            explanation: "Cash flow management ensures you have money to pay bills when due, even if income comes at harvest time."
        },
        {
            question: "What is the difference between fixed and variable costs?",
            type: "multiple_choice",
            options: [
                { text: "Fixed stay same, variable change with production", icon: "📊", isCorrect: true },
                { text: "Fixed are expensive, variable are cheap", icon: "💰", isCorrect: false },
                { text: "They are the same thing", icon: "➡️", isCorrect: false },
                { text: "Variable are always higher", icon: "📈", isCorrect: false }
            ],
            explanation: "Fixed costs (like land rent) stay constant. Variable costs (like seed) change based on how much you produce."
        },
        {
            question: "What is break-even point?",
            type: "multiple_choice",
            options: [
                { text: "When income equals costs (no profit or loss)", icon: "⚖️", isCorrect: true },
                { text: "Maximum profit point", icon: "📈", isCorrect: false },
                { text: "When machinery breaks", icon: "🔧", isCorrect: false },
                { text: "Start of harvest", icon: "🌾", isCorrect: false }
            ],
            explanation: "Break-even is the point where total revenue exactly covers total costs - producing more means profit."
        },
        {
            question: "What is an invoice?",
            type: "multiple_choice",
            options: [
                { text: "Bill for goods or services sold", icon: "🧾", isCorrect: true },
                { text: "Receipt for payment received", icon: "💰", isCorrect: false },
                { text: "Seed catalog", icon: "📕", isCorrect: false },
                { text: "Weather report", icon: "🌤️", isCorrect: false }
            ],
            explanation: "An invoice is a document sent to buyers listing products sold, quantities, prices, and payment terms."
        }
    ],

    // Level 2 - Market Basics
    module9_level2: [
        {
            question: "What is a market?",
            type: "multiple_choice",
            options: [
                { text: "Place where buyers and sellers meet", icon: "🏪", isCorrect: true },
                { text: "Only a physical building", icon: "🏠", isCorrect: false },
                { text: "Type of crop", icon: "🌾", isCorrect: false },
                { text: "Farm equipment", icon: "🚜", isCorrect: false }
            ],
            explanation: "A market is any place or system where buyers and sellers exchange goods - can be physical or online."
        },
        {
            question: "What is supply and demand?",
            type: "multiple_choice",
            options: [
                { text: "How much is available vs how much people want", icon: "⚖️", isCorrect: true },
                { text: "Farm equipment names", icon: "🚜", isCorrect: false },
                { text: "Types of seeds", icon: "🌱", isCorrect: false },
                { text: "Weather patterns", icon: "🌤️", isCorrect: false }
            ],
            explanation: "Supply is how much product is available; demand is how much buyers want. Their balance affects prices."
        },
        {
            question: "What happens to prices when supply is high?",
            type: "multiple_choice",
            options: [
                { text: "Prices usually fall", icon: "📉", isCorrect: true },
                { text: "Prices always rise", icon: "📈", isCorrect: false },
                { text: "Prices stay the same", icon: "➡️", isCorrect: false },
                { text: "No relationship", icon: "❓", isCorrect: false }
            ],
            explanation: "When there's lots of product available, sellers compete and prices typically drop to attract buyers."
        },
        {
            question: "What is a wholesale market?",
            type: "multiple_choice",
            options: [
                { text: "Where farmers sell large quantities to traders", icon: "📦", isCorrect: true },
                { text: "Small local shop", icon: "🏪", isCorrect: false },
                { text: "Online store", icon: "💻", isCorrect: false },
                { text: "Equipment dealer", icon: "🚜", isCorrect: false }
            ],
            explanation: "Wholesale markets handle bulk sales from farmers to middlemen, processors, or large retailers."
        },
        {
            question: "What is direct marketing?",
            type: "multiple_choice",
            options: [
                { text: "Selling directly to consumers without middlemen", icon: "🤝", isCorrect: true },
                { text: "Using advertising", icon: "📺", isCorrect: false },
                { text: "Selling to wholesalers", icon: "📦", isCorrect: false },
                { text: "Exporting abroad", icon: "🌍", isCorrect: false }
            ],
            explanation: "Direct marketing means selling straight to end consumers through farm stands, markets, or delivery."
        },
        {
            question: "What is a middleman?",
            type: "multiple_choice",
            options: [
                { text: "Person who buys from farmers and sells to others", icon: "👤", isCorrect: true },
                { text: "Farm worker", icon: "👨‍🌾", isCorrect: false },
                { text: "End consumer", icon: "🛒", isCorrect: false },
                { text: "Government official", icon: "🏛️", isCorrect: false }
            ],
            explanation: "Middlemen buy products from farmers, add value through transport or storage, and sell to retailers or consumers."
        },
        {
            question: "Why do prices change by season?",
            type: "multiple_choice",
            options: [
                { text: "Harvest times affect supply", icon: "📅", isCorrect: true },
                { text: "Random changes", icon: "🎲", isCorrect: false },
                { text: "Government decides", icon: "🏛️", isCorrect: false },
                { text: "Prices never change", icon: "➡️", isCorrect: false }
            ],
            explanation: "Prices are usually lowest at harvest when supply is highest, and rise during off-season when supply is limited."
        },
        {
            question: "What is market research?",
            type: "multiple_choice",
            options: [
                { text: "Studying what customers want and will pay", icon: "🔍", isCorrect: true },
                { text: "Searching for lost items", icon: "🔦", isCorrect: false },
                { text: "Scientific farming research", icon: "🔬", isCorrect: false },
                { text: "Weather forecasting", icon: "🌤️", isCorrect: false }
            ],
            explanation: "Market research helps farmers understand buyer preferences, competition, and price expectations."
        },
        {
            question: "What is bargaining?",
            type: "multiple_choice",
            options: [
                { text: "Negotiating price between buyer and seller", icon: "🤝", isCorrect: true },
                { text: "Shouting at customers", icon: "😠", isCorrect: false },
                { text: "Giving products for free", icon: "🎁", isCorrect: false },
                { text: "Only accepting one price", icon: "1️⃣", isCorrect: false }
            ],
            explanation: "Bargaining is the negotiation process where buyer and seller agree on a fair price."
        },
        {
            question: "What is a cooperative market?",
            type: "multiple_choice",
            options: [
                { text: "Market owned and run by member farmers", icon: "👥", isCorrect: true },
                { text: "Government-run market", icon: "🏛️", isCorrect: false },
                { text: "Private company market", icon: "🏢", isCorrect: false },
                { text: "International market", icon: "🌍", isCorrect: false }
            ],
            explanation: "Cooperative markets are owned by farmer members who share costs, marketing, and profits together."
        }
    ],

    // Level 3 - Pricing Strategies
    module9_level3: [
        {
            question: "How should you set prices for your products?",
            type: "multiple_choice",
            options: [
                { text: "Consider costs, competition, and customer value", icon: "📊", isCorrect: true },
                { text: "Always the cheapest", icon: "📉", isCorrect: false },
                { text: "Random numbers", icon: "🎲", isCorrect: false },
                { text: "Copy neighbors exactly", icon: "👥", isCorrect: false }
            ],
            explanation: "Good pricing covers your costs, stays competitive, and reflects the value customers receive."
        },
        {
            question: "What is cost-plus pricing?",
            type: "multiple_choice",
            options: [
                { text: "Adding profit margin to production costs", icon: "➕", isCorrect: true },
                { text: "Selling below cost", icon: "📉", isCorrect: false },
                { text: "Giving discounts", icon: "🏷️", isCorrect: false },
                { text: "Free products", icon: "🎁", isCorrect: false }
            ],
            explanation: "Cost-plus pricing means calculating your total cost per unit and adding a percentage for profit."
        },
        {
            question: "What is competitive pricing?",
            type: "multiple_choice",
            options: [
                { text: "Setting prices based on competitors", icon: "🏁", isCorrect: true },
                { text: "Always highest price", icon: "📈", isCorrect: false },
                { text: "Ignoring competitors", icon: "🙈", isCorrect: false },
                { text: "Only cost-based", icon: "💰", isCorrect: false }
            ],
            explanation: "Competitive pricing means setting prices relative to what competitors charge for similar products."
        },
        {
            question: "What is value-based pricing?",
            type: "multiple_choice",
            options: [
                { text: "Pricing based on perceived value to customer", icon: "⭐", isCorrect: true },
                { text: "Lowest possible price", icon: "📉", isCorrect: false },
                { text: "Only cost plus profit", icon: "➕", isCorrect: false },
                { text: "Random pricing", icon: "🎲", isCorrect: false }
            ],
            explanation: "Value-based pricing charges what customers believe the product is worth, often higher for quality or organic products."
        },
        {
            question: "Why might organic products cost more?",
            type: "multiple_choice",
            options: [
                { text: "Higher production costs and perceived value", icon: "🌿", isCorrect: true },
                { text: "Farmers are greedy", icon: "💰", isCorrect: false },
                { text: "No reason", icon: "❓", isCorrect: false },
                { text: "They're lower quality", icon: "📉", isCorrect: false }
            ],
            explanation: "Organic farming has higher labor costs, lower yields, and certification costs, plus customers value chemical-free food."
        },
        {
            question: "What is a price floor?",
            type: "multiple_choice",
            options: [
                { text: "Minimum price set by government", icon: "⬇️", isCorrect: true },
                { text: "Maximum price allowed", icon: "⬆️", isCorrect: false },
                { text: "Average market price", icon: "➡️", isCorrect: false },
                { text: "Wholesale price", icon: "📦", isCorrect: false }
            ],
            explanation: "Price floors are government-set minimum prices to protect farmers from prices falling too low."
        },
        {
            question: "What is premium pricing?",
            type: "multiple_choice",
            options: [
                { text: "Charging higher prices for superior products", icon: "👑", isCorrect: true },
                { text: "Lowest price strategy", icon: "📉", isCorrect: false },
                { text: "Average pricing", icon: "➡️", isCorrect: false },
                { text: "Free samples", icon: "🎁", isCorrect: false }
            ],
            explanation: "Premium pricing charges more for products perceived as higher quality, specialty, or unique."
        },
        {
            question: "When should you offer discounts?",
            type: "multiple_choice",
            options: [
                { text: "To sell excess stock or attract new buyers", icon: "🏷️", isCorrect: true },
                { text: "All the time", icon: "📅", isCorrect: false },
                { text: "Never", icon: "❌", isCorrect: false },
                { text: "Only to friends", icon: "👥", isCorrect: false }
            ],
            explanation: "Strategic discounts help move perishable products, build customer relationships, or enter new markets."
        },
        {
            question: "What is bulk pricing?",
            type: "multiple_choice",
            options: [
                { text: "Lower price per unit for large purchases", icon: "📦", isCorrect: true },
                { text: "Higher price for more items", icon: "📈", isCorrect: false },
                { text: "Same price regardless of quantity", icon: "➡️", isCorrect: false },
                { text: "Only for small orders", icon: "🔬", isCorrect: false }
            ],
            explanation: "Bulk pricing offers discounts for larger orders, encouraging bigger purchases while maintaining profit."
        },
        {
            question: "How do transport costs affect pricing?",
            type: "multiple_choice",
            options: [
                { text: "Must be included in final price", icon: "🚚", isCorrect: true },
                { text: "Not important", icon: "❓", isCorrect: false },
                { text: "Customer pays separately always", icon: "💰", isCorrect: false },
                { text: "Government pays", icon: "🏛️", isCorrect: false }
            ],
            explanation: "Transport costs must be factored into pricing - either included in product price or charged separately."
        }
    ],

    // Level 4 - Farm Finance
    module9_level4: [
        {
            question: "What is a loan?",
            type: "multiple_choice",
            options: [
                { text: "Money borrowed that must be repaid with interest", icon: "🏦", isCorrect: true },
                { text: "Free money from bank", icon: "🎁", isCorrect: false },
                { text: "Payment for work done", icon: "💵", isCorrect: false },
                { text: "Government grant", icon: "🏛️", isCorrect: false }
            ],
            explanation: "A loan is borrowed money that must be repaid over time with additional interest charged by the lender."
        },
        {
            question: "What is interest on a loan?",
            type: "multiple_choice",
            options: [
                { text: "Cost of borrowing money", icon: "💰", isCorrect: true },
                { text: "Free bonus", icon: "🎁", isCorrect: false },
                { text: "Tax payment", icon: "🏛️", isCorrect: false },
                { text: "Insurance fee", icon: "📋", isCorrect: false }
            ],
            explanation: "Interest is the percentage fee charged by lenders for allowing you to use their money."
        },
        {
            question: "What is collateral?",
            type: "multiple_choice",
            options: [
                { text: "Asset pledged as security for loan", icon: "🏠", isCorrect: true },
                { text: "Type of crop", icon: "🌾", isCorrect: false },
                { text: "Bank employee", icon: "👤", isCorrect: false },
                { text: "Interest rate", icon: "📊", isCorrect: false }
            ],
            explanation: "Collateral is property (like land or equipment) that the lender can claim if you fail to repay the loan."
        },
        {
            question: "What is a savings account useful for?",
            type: "multiple_choice",
            options: [
                { text: "Storing money safely for future needs", icon: "🐷", isCorrect: true },
                { text: "Spending money faster", icon: "💸", isCorrect: false },
                { text: "Hiding from taxes", icon: "🙈", isCorrect: false },
                { text: "Getting loans", icon: "🏦", isCorrect: false }
            ],
            explanation: "Savings accounts keep money safe, earn small interest, and provide funds for emergencies or investments."
        },
        {
            question: "What is depreciation?",
            type: "multiple_choice",
            options: [
                { text: "Decrease in equipment value over time", icon: "📉", isCorrect: true },
                { text: "Increase in crop prices", icon: "📈", isCorrect: false },
                { text: "Type of fertilizer", icon: "🧪", isCorrect: false },
                { text: "Bank fee", icon: "🏦", isCorrect: false }
            ],
            explanation: "Depreciation is the gradual loss of value of assets like tractors and buildings due to age and use."
        },
        {
            question: "What is working capital?",
            type: "multiple_choice",
            options: [
                { text: "Money available for daily operations", icon: "💵", isCorrect: true },
                { text: "Building and land value", icon: "🏠", isCorrect: false },
                { text: "Total farm debt", icon: "📝", isCorrect: false },
                { text: "Machinery value", icon: "🚜", isCorrect: false }
            ],
            explanation: "Working capital is the cash available to pay for seeds, labor, and other day-to-day operating expenses."
        },
        {
            question: "What is a grant?",
            type: "multiple_choice",
            options: [
                { text: "Money given that doesn't need repayment", icon: "🎁", isCorrect: true },
                { text: "Loan with interest", icon: "🏦", isCorrect: false },
                { text: "Tax payment", icon: "💸", isCorrect: false },
                { text: "Insurance policy", icon: "📋", isCorrect: false }
            ],
            explanation: "Grants are funds from governments or organizations given for specific purposes that don't require repayment."
        },
        {
            question: "Why is credit history important?",
            type: "multiple_choice",
            options: [
                { text: "Shows lenders if you repay debts", icon: "📊", isCorrect: true },
                { text: "Not important at all", icon: "❌", isCorrect: false },
                { text: "Only affects housing", icon: "🏠", isCorrect: false },
                { text: "Only for businesses", icon: "🏢", isCorrect: false }
            ],
            explanation: "Good credit history shows lenders you're reliable, making it easier to get loans with better interest rates."
        },
        {
            question: "What is a microfinance institution?",
            type: "multiple_choice",
            options: [
                { text: "Organization giving small loans to farmers", icon: "🤝", isCorrect: true },
                { text: "Large international bank", icon: "🏦", isCorrect: false },
                { text: "Government tax office", icon: "🏛️", isCorrect: false },
                { text: "Farm equipment dealer", icon: "🚜", isCorrect: false }
            ],
            explanation: "Microfinance institutions provide small loans and financial services to farmers who can't access traditional banks."
        },
        {
            question: "What is debt-to-asset ratio?",
            type: "multiple_choice",
            options: [
                { text: "How much you owe compared to what you own", icon: "⚖️", isCorrect: true },
                { text: "Daily profit margin", icon: "💰", isCorrect: false },
                { text: "Crop yield measurement", icon: "🌾", isCorrect: false },
                { text: "Interest rate", icon: "📊", isCorrect: false }
            ],
            explanation: "Debt-to-asset ratio shows financial health - lower ratios mean you own more than you owe."
        }
    ],

    // Level 5 - Record Keeping
    module9_level5: [
        {
            question: "What should farm records include?",
            type: "multiple_choice",
            options: [
                { text: "Income, expenses, yields, and activities", icon: "📋", isCorrect: true },
                { text: "Only income", icon: "💵", isCorrect: false },
                { text: "Only weather", icon: "🌤️", isCorrect: false },
                { text: "Nothing written", icon: "❌", isCorrect: false }
            ],
            explanation: "Complete farm records track all money in and out, crop yields, inputs used, and daily activities."
        },
        {
            question: "What is a profit and loss statement?",
            type: "multiple_choice",
            options: [
                { text: "Summary of income minus expenses", icon: "📊", isCorrect: true },
                { text: "List of crops grown", icon: "🌾", isCorrect: false },
                { text: "Weather record", icon: "🌤️", isCorrect: false },
                { text: "Employee list", icon: "👥", isCorrect: false }
            ],
            explanation: "A profit and loss statement shows total revenue minus total costs to calculate net profit or loss."
        },
        {
            question: "Why track crop yields?",
            type: "multiple_choice",
            options: [
                { text: "To measure productivity and plan improvements", icon: "📈", isCorrect: true },
                { text: "Just for fun", icon: "🎉", isCorrect: false },
                { text: "Not necessary", icon: "❌", isCorrect: false },
                { text: "For decoration", icon: "🎨", isCorrect: false }
            ],
            explanation: "Yield records help identify which crops and practices are most productive and profitable."
        },
        {
            question: "What is inventory management?",
            type: "multiple_choice",
            options: [
                { text: "Tracking supplies and products on hand", icon: "📦", isCorrect: true },
                { text: "Counting animals only", icon: "🐄", isCorrect: false },
                { text: "Weather tracking", icon: "🌤️", isCorrect: false },
                { text: "Employee scheduling", icon: "📅", isCorrect: false }
            ],
            explanation: "Inventory management tracks seeds, fertilizers, harvested crops, and other supplies to prevent shortages or waste."
        },
        {
            question: "What is a balance sheet?",
            type: "multiple_choice",
            options: [
                { text: "Statement showing assets, liabilities, and equity", icon: "⚖️", isCorrect: true },
                { text: "Daily sales record", icon: "💵", isCorrect: false },
                { text: "Crop rotation plan", icon: "🔄", isCorrect: false },
                { text: "Weather forecast", icon: "🌤️", isCorrect: false }
            ],
            explanation: "A balance sheet lists everything you own (assets), owe (liabilities), and your net worth (equity)."
        },
        {
            question: "How often should records be updated?",
            type: "multiple_choice",
            options: [
                { text: "Daily or weekly for accuracy", icon: "📅", isCorrect: true },
                { text: "Once a year", icon: "📆", isCorrect: false },
                { text: "Never", icon: "❌", isCorrect: false },
                { text: "Only when selling", icon: "💰", isCorrect: false }
            ],
            explanation: "Regular updates ensure accuracy and make it easier to spot problems early."
        },
        {
            question: "What is a cash book?",
            type: "multiple_choice",
            options: [
                { text: "Record of all cash received and paid", icon: "📕", isCorrect: true },
                { text: "Book about farming", icon: "📖", isCorrect: false },
                { text: "Bank passbook", icon: "🏦", isCorrect: false },
                { text: "Price list", icon: "🏷️", isCorrect: false }
            ],
            explanation: "A cash book records every cash transaction - money coming in and going out of the farm."
        },
        {
            question: "Why keep receipts?",
            type: "multiple_choice",
            options: [
                { text: "Proof of expenses for records and taxes", icon: "🧾", isCorrect: true },
                { text: "For collection hobby", icon: "📚", isCorrect: false },
                { text: "Not important", icon: "❌", isCorrect: false },
                { text: "Only for large purchases", icon: "💰", isCorrect: false }
            ],
            explanation: "Receipts prove your expenses, help track costs accurately, and are needed for tax deductions."
        },
        {
            question: "What is a production record?",
            type: "multiple_choice",
            options: [
                { text: "Details of what was grown and harvested", icon: "📋", isCorrect: true },
                { text: "Music recording", icon: "🎵", isCorrect: false },
                { text: "Employee attendance", icon: "👥", isCorrect: false },
                { text: "Weather data only", icon: "🌤️", isCorrect: false }
            ],
            explanation: "Production records track crops planted, inputs used, yields harvested, and timing of activities."
        },
        {
            question: "How do records help get loans?",
            type: "multiple_choice",
            options: [
                { text: "Show banks your farm is profitable", icon: "🏦", isCorrect: true },
                { text: "Banks don't need records", icon: "❌", isCorrect: false },
                { text: "Records hurt loan chances", icon: "📉", isCorrect: false },
                { text: "Only for large farms", icon: "🏞️", isCorrect: false }
            ],
            explanation: "Good records prove to lenders that your farm is well-managed and can repay loans."
        }
    ],

    // Level 6 - Marketing Skills
    module9_level6: [
        {
            question: "What is a target market?",
            type: "multiple_choice",
            options: [
                { text: "Specific group of customers you want to reach", icon: "🎯", isCorrect: true },
                { text: "Any random buyer", icon: "🎲", isCorrect: false },
                { text: "Shooting range", icon: "🏹", isCorrect: false },
                { text: "Local market building", icon: "🏪", isCorrect: false }
            ],
            explanation: "Your target market is the specific group of customers most likely to buy your products."
        },
        {
            question: "What is product differentiation?",
            type: "multiple_choice",
            options: [
                { text: "Making your product stand out from competitors", icon: "⭐", isCorrect: true },
                { text: "Copying competitors exactly", icon: "📋", isCorrect: false },
                { text: "Selling the same as everyone", icon: "➡️", isCorrect: false },
                { text: "Lowering quality", icon: "📉", isCorrect: false }
            ],
            explanation: "Differentiation means offering something unique - better quality, organic certification, or special varieties."
        },
        {
            question: "What is a brand?",
            type: "multiple_choice",
            options: [
                { text: "Name and image representing your products", icon: "🏷️", isCorrect: true },
                { text: "Burning mark on cattle", icon: "🔥", isCorrect: false },
                { text: "Price tag", icon: "💰", isCorrect: false },
                { text: "Type of crop", icon: "🌾", isCorrect: false }
            ],
            explanation: "A brand is your farm's name, logo, and reputation that customers recognize and trust."
        },
        {
            question: "Why is packaging important?",
            type: "multiple_choice",
            options: [
                { text: "Protects product and attracts buyers", icon: "📦", isCorrect: true },
                { text: "Just adds cost", icon: "💸", isCorrect: false },
                { text: "Not important for food", icon: "❌", isCorrect: false },
                { text: "Only for export", icon: "🌍", isCorrect: false }
            ],
            explanation: "Good packaging protects products, provides information, and makes them more attractive to buyers."
        },
        {
            question: "What is customer service?",
            type: "multiple_choice",
            options: [
                { text: "How you treat and help buyers", icon: "🤝", isCorrect: true },
                { text: "Giving free products", icon: "🎁", isCorrect: false },
                { text: "Only selling cheap", icon: "📉", isCorrect: false },
                { text: "Avoiding customers", icon: "🏃", isCorrect: false }
            ],
            explanation: "Good customer service builds loyalty through helpfulness, reliability, and addressing concerns."
        },
        {
            question: "What is word-of-mouth marketing?",
            type: "multiple_choice",
            options: [
                { text: "Customers telling others about your products", icon: "🗣️", isCorrect: true },
                { text: "Shouting at markets", icon: "📢", isCorrect: false },
                { text: "Radio advertising", icon: "📻", isCorrect: false },
                { text: "Written contracts", icon: "📝", isCorrect: false }
            ],
            explanation: "Satisfied customers sharing positive experiences is powerful free marketing through personal recommendations."
        },
        {
            question: "What are farmers' markets good for?",
            type: "multiple_choice",
            options: [
                { text: "Direct sales, higher prices, customer feedback", icon: "🏪", isCorrect: true },
                { text: "Only buying supplies", icon: "🛒", isCorrect: false },
                { text: "Meeting other farmers only", icon: "👥", isCorrect: false },
                { text: "Entertainment only", icon: "🎉", isCorrect: false }
            ],
            explanation: "Farmers' markets allow direct sales, better prices without middlemen, and direct customer relationships."
        },
        {
            question: "What is a product sample?",
            type: "multiple_choice",
            options: [
                { text: "Small free portion to try before buying", icon: "🍎", isCorrect: true },
                { text: "Damaged product", icon: "🗑️", isCorrect: false },
                { text: "Laboratory test item", icon: "🔬", isCorrect: false },
                { text: "Gift for friends", icon: "🎁", isCorrect: false }
            ],
            explanation: "Samples let customers taste your product, building confidence and encouraging purchases."
        },
        {
            question: "Why use social media for farm marketing?",
            type: "multiple_choice",
            options: [
                { text: "Reach many customers cheaply", icon: "📱", isCorrect: true },
                { text: "Waste time", icon: "⏰", isCorrect: false },
                { text: "Not useful for farms", icon: "❌", isCorrect: false },
                { text: "Only for young people", icon: "👶", isCorrect: false }
            ],
            explanation: "Social media reaches many potential customers at low cost, showing your farm story and products."
        },
        {
            question: "What is a unique selling proposition (USP)?",
            type: "multiple_choice",
            options: [
                { text: "What makes your product special", icon: "⭐", isCorrect: true },
                { text: "Lowest price only", icon: "📉", isCorrect: false },
                { text: "Being exactly like others", icon: "➡️", isCorrect: false },
                { text: "Type of discount", icon: "🏷️", isCorrect: false }
            ],
            explanation: "Your USP is the unique benefit that sets your products apart - freshness, organic, local, variety."
        }
    ],

    // Level 7 - Risk Management
    module9_level7: [
        {
            question: "What is crop insurance?",
            type: "multiple_choice",
            options: [
                { text: "Protection against crop loss from disasters", icon: "🛡️", isCorrect: true },
                { text: "Guarantee of high prices", icon: "💰", isCorrect: false },
                { text: "Free seeds", icon: "🌱", isCorrect: false },
                { text: "Weather control", icon: "🌤️", isCorrect: false }
            ],
            explanation: "Crop insurance compensates farmers when crops are damaged by weather, pests, or disease."
        },
        {
            question: "What is diversification in farming?",
            type: "multiple_choice",
            options: [
                { text: "Growing multiple crops to spread risk", icon: "🌈", isCorrect: true },
                { text: "Growing only one crop", icon: "1️⃣", isCorrect: false },
                { text: "Making soil diverse", icon: "🟤", isCorrect: false },
                { text: "Having many tractors", icon: "🚜", isCorrect: false }
            ],
            explanation: "Diversification means having multiple income sources so one failure doesn't ruin the whole farm."
        },
        {
            question: "Why is an emergency fund important?",
            type: "multiple_choice",
            options: [
                { text: "Covers unexpected costs without borrowing", icon: "🐷", isCorrect: true },
                { text: "For vacation", icon: "✈️", isCorrect: false },
                { text: "Not needed on farms", icon: "❌", isCorrect: false },
                { text: "Only for equipment", icon: "🚜", isCorrect: false }
            ],
            explanation: "Emergency funds help survive equipment breakdowns, crop failures, or market crashes without going into debt."
        },
        {
            question: "What is price risk?",
            type: "multiple_choice",
            options: [
                { text: "Danger of prices falling below costs", icon: "📉", isCorrect: true },
                { text: "Prices always rising", icon: "📈", isCorrect: false },
                { text: "Fixed prices forever", icon: "➡️", isCorrect: false },
                { text: "No risk exists", icon: "❌", isCorrect: false }
            ],
            explanation: "Price risk is the possibility that market prices drop below your production costs, causing losses."
        },
        {
            question: "What is a contract farming agreement?",
            type: "multiple_choice",
            options: [
                { text: "Pre-arranged sale at set price", icon: "📝", isCorrect: true },
                { text: "Verbal promise only", icon: "🗣️", isCorrect: false },
                { text: "Government requirement", icon: "🏛️", isCorrect: false },
                { text: "Land rental", icon: "🏞️", isCorrect: false }
            ],
            explanation: "Contract farming locks in prices and buyers before planting, reducing market uncertainty."
        },
        {
            question: "What is production risk?",
            type: "multiple_choice",
            options: [
                { text: "Uncertainty in how much you'll produce", icon: "❓", isCorrect: true },
                { text: "Guaranteed high yields", icon: "📈", isCorrect: false },
                { text: "Only market prices", icon: "💰", isCorrect: false },
                { text: "No risk exists", icon: "❌", isCorrect: false }
            ],
            explanation: "Production risk comes from weather, pests, disease, and other factors affecting crop yields."
        },
        {
            question: "How does storage reduce risk?",
            type: "multiple_choice",
            options: [
                { text: "Lets you sell when prices are better", icon: "📦", isCorrect: true },
                { text: "Increases costs only", icon: "💸", isCorrect: false },
                { text: "No benefit", icon: "❌", isCorrect: false },
                { text: "Only for decoration", icon: "🎨", isCorrect: false }
            ],
            explanation: "Good storage lets farmers hold products until prices improve rather than selling at harvest lows."
        },
        {
            question: "What is a cooperative's role in risk?",
            type: "multiple_choice",
            options: [
                { text: "Share risks and costs among members", icon: "👥", isCorrect: true },
                { text: "Increase individual risk", icon: "📈", isCorrect: false },
                { text: "No relationship to risk", icon: "❌", isCorrect: false },
                { text: "Government requirement", icon: "🏛️", isCorrect: false }
            ],
            explanation: "Cooperatives spread risk among members and provide collective bargaining power and resources."
        },
        {
            question: "What is market diversification?",
            type: "multiple_choice",
            options: [
                { text: "Selling to multiple buyers and channels", icon: "🌐", isCorrect: true },
                { text: "Selling to one buyer only", icon: "1️⃣", isCorrect: false },
                { text: "Growing diverse crops", icon: "🌾", isCorrect: false },
                { text: "Changing farm location", icon: "📍", isCorrect: false }
            ],
            explanation: "Selling through different channels reduces dependence on any single buyer or market."
        },
        {
            question: "What is a safety net program?",
            type: "multiple_choice",
            options: [
                { text: "Government support during hard times", icon: "🏛️", isCorrect: true },
                { text: "Fishing equipment", icon: "🎣", isCorrect: false },
                { text: "Pest control net", icon: "🕸️", isCorrect: false },
                { text: "Private insurance only", icon: "📋", isCorrect: false }
            ],
            explanation: "Safety net programs provide government assistance to farmers during disasters or severe market downturns."
        }
    ],

    // Level 8 - Value Addition
    module9_level8: [
        {
            question: "What is value addition?",
            type: "multiple_choice",
            options: [
                { text: "Processing products to increase their worth", icon: "⬆️", isCorrect: true },
                { text: "Adding numbers", icon: "➕", isCorrect: false },
                { text: "Increasing farm size", icon: "🏞️", isCorrect: false },
                { text: "Buying more equipment", icon: "🚜", isCorrect: false }
            ],
            explanation: "Value addition means processing raw products into more valuable forms - milk to cheese, fruit to jam."
        },
        {
            question: "Give an example of value-added product:",
            type: "multiple_choice",
            options: [
                { text: "Dried fruit from fresh fruit", icon: "🍇", isCorrect: true },
                { text: "Raw tomatoes", icon: "🍅", isCorrect: false },
                { text: "Fresh eggs", icon: "🥚", isCorrect: false },
                { text: "Whole grain", icon: "🌾", isCorrect: false }
            ],
            explanation: "Dried fruit commands higher prices than fresh fruit and has longer shelf life - adding value through processing."
        },
        {
            question: "Why does processing increase value?",
            type: "multiple_choice",
            options: [
                { text: "Extends shelf life and creates convenience", icon: "⏰", isCorrect: true },
                { text: "Decreases quality", icon: "📉", isCorrect: false },
                { text: "Only adds cost", icon: "💸", isCorrect: false },
                { text: "No benefit", icon: "❌", isCorrect: false }
            ],
            explanation: "Processing creates convenience, extends shelf life, and meets specific market demands, justifying higher prices."
        },
        {
            question: "What is agro-processing?",
            type: "multiple_choice",
            options: [
                { text: "Converting farm products into food or goods", icon: "🏭", isCorrect: true },
                { text: "Farming only", icon: "👨‍🌾", isCorrect: false },
                { text: "Selling raw produce", icon: "🥕", isCorrect: false },
                { text: "Equipment repair", icon: "🔧", isCorrect: false }
            ],
            explanation: "Agro-processing transforms raw agricultural products into consumer-ready foods and products."
        },
        {
            question: "What is food preservation?",
            type: "multiple_choice",
            options: [
                { text: "Methods to prevent food spoilage", icon: "🥫", isCorrect: true },
                { text: "Growing more food", icon: "🌱", isCorrect: false },
                { text: "Eating quickly", icon: "🍽️", isCorrect: false },
                { text: "Storing in open air", icon: "💨", isCorrect: false }
            ],
            explanation: "Preservation methods like drying, canning, and freezing prevent spoilage and extend product life."
        },
        {
            question: "What is organic certification valuable?",
            type: "multiple_choice",
            options: [
                { text: "Premium prices for verified organic products", icon: "✅", isCorrect: true },
                { text: "Just a label, no value", icon: "🏷️", isCorrect: false },
                { text: "Required for all farms", icon: "📜", isCorrect: false },
                { text: "Free certification", icon: "🎁", isCorrect: false }
            ],
            explanation: "Organic certification proves products meet standards, allowing farmers to charge premium prices."
        },
        {
            question: "What is vertical integration?",
            type: "multiple_choice",
            options: [
                { text: "Controlling multiple stages from farm to market", icon: "⬇️", isCorrect: true },
                { text: "Growing tall crops", icon: "🌽", isCorrect: false },
                { text: "Building tall structures", icon: "🏗️", isCorrect: false },
                { text: "Only farming", icon: "👨‍🌾", isCorrect: false }
            ],
            explanation: "Vertical integration means controlling production, processing, and marketing to capture more profit."
        },
        {
            question: "What makes a good value-added product?",
            type: "multiple_choice",
            options: [
                { text: "Meets market demand with good profit margin", icon: "✅", isCorrect: true },
                { text: "Any product you like", icon: "❤️", isCorrect: false },
                { text: "Most expensive to make", icon: "💰", isCorrect: false },
                { text: "Random selection", icon: "🎲", isCorrect: false }
            ],
            explanation: "Good value-added products have market demand, reasonable processing costs, and adequate profit margins."
        },
        {
            question: "What is a cottage industry?",
            type: "multiple_choice",
            options: [
                { text: "Small-scale home-based processing", icon: "🏠", isCorrect: true },
                { text: "Large factory", icon: "🏭", isCorrect: false },
                { text: "Cottage cheese only", icon: "🧀", isCorrect: false },
                { text: "House building", icon: "🏗️", isCorrect: false }
            ],
            explanation: "Cottage industries are small home-based operations making products like jams, pickles, or crafts."
        },
        {
            question: "What is quality control important?",
            type: "multiple_choice",
            options: [
                { text: "Ensures consistent, safe products", icon: "✅", isCorrect: true },
                { text: "Wastes time", icon: "⏰", isCorrect: false },
                { text: "Not needed for food", icon: "❌", isCorrect: false },
                { text: "Only for factories", icon: "🏭", isCorrect: false }
            ],
            explanation: "Quality control maintains standards, ensures food safety, and builds customer trust in your brand."
        }
    ],

    // Level 9 - Legal & Regulations
    module9_level9: [
        {
            question: "Why are food safety regulations important?",
            type: "multiple_choice",
            options: [
                { text: "Protect consumers and ensure quality", icon: "🛡️", isCorrect: true },
                { text: "Just bureaucracy", icon: "📋", isCorrect: false },
                { text: "Not needed for farms", icon: "❌", isCorrect: false },
                { text: "Only for restaurants", icon: "🍽️", isCorrect: false }
            ],
            explanation: "Food safety rules protect public health and give consumers confidence in food products."
        },
        {
            question: "What is a business license?",
            type: "multiple_choice",
            options: [
                { text: "Government permit to operate legally", icon: "📜", isCorrect: true },
                { text: "Driving license", icon: "🚗", isCorrect: false },
                { text: "Optional document", icon: "❓", isCorrect: false },
                { text: "Bank document", icon: "🏦", isCorrect: false }
            ],
            explanation: "Business licenses authorize legal operation and may be required for selling, processing, or exporting."
        },
        {
            question: "What are labor laws?",
            type: "multiple_choice",
            options: [
                { text: "Rules protecting workers' rights", icon: "👷", isCorrect: true },
                { text: "Rules about crops", icon: "🌾", isCorrect: false },
                { text: "Land ownership rules", icon: "🏞️", isCorrect: false },
                { text: "Equipment regulations", icon: "🚜", isCorrect: false }
            ],
            explanation: "Labor laws set minimum wages, working hours, safety standards, and workers' rights that employers must follow."
        },
        {
            question: "What is a contract?",
            type: "multiple_choice",
            options: [
                { text: "Legal agreement between parties", icon: "📝", isCorrect: true },
                { text: "Verbal promise only", icon: "🗣️", isCorrect: false },
                { text: "Price list", icon: "🏷️", isCorrect: false },
                { text: "Business card", icon: "💼", isCorrect: false }
            ],
            explanation: "Contracts are legally binding agreements specifying terms, prices, quantities, and responsibilities."
        },
        {
            question: "Why is land title important?",
            type: "multiple_choice",
            options: [
                { text: "Proves ownership and enables loans", icon: "🏠", isCorrect: true },
                { text: "Just paperwork", icon: "📄", isCorrect: false },
                { text: "Not needed", icon: "❌", isCorrect: false },
                { text: "Only for cities", icon: "🏙️", isCorrect: false }
            ],
            explanation: "Land titles prove ownership, protect from disputes, and can serve as collateral for loans."
        },
        {
            question: "What is tax compliance?",
            type: "multiple_choice",
            options: [
                { text: "Following tax laws and paying what's owed", icon: "🏛️", isCorrect: true },
                { text: "Avoiding all taxes", icon: "🏃", isCorrect: false },
                { text: "Only for big businesses", icon: "🏢", isCorrect: false },
                { text: "Optional for farmers", icon: "❓", isCorrect: false }
            ],
            explanation: "Tax compliance means properly reporting income and paying required taxes to government authorities."
        },
        {
            question: "What is product liability?",
            type: "multiple_choice",
            options: [
                { text: "Responsibility if your product harms someone", icon: "⚠️", isCorrect: true },
                { text: "Product price", icon: "💰", isCorrect: false },
                { text: "Product weight", icon: "⚖️", isCorrect: false },
                { text: "Product color", icon: "🎨", isCorrect: false }
            ],
            explanation: "Product liability means you can be held responsible for damages if your product causes harm."
        },
        {
            question: "What is an export permit?",
            type: "multiple_choice",
            options: [
                { text: "Authorization to sell products abroad", icon: "🌍", isCorrect: true },
                { text: "Import license", icon: "📥", isCorrect: false },
                { text: "Driving permit", icon: "🚗", isCorrect: false },
                { text: "Building permit", icon: "🏗️", isCorrect: false }
            ],
            explanation: "Export permits authorize selling products to foreign countries and may require meeting specific standards."
        },
        {
            question: "What is trademark protection?",
            type: "multiple_choice",
            options: [
                { text: "Legal protection for your brand name and logo", icon: "™️", isCorrect: true },
                { text: "Physical farm security", icon: "🔒", isCorrect: false },
                { text: "Insurance policy", icon: "📋", isCorrect: false },
                { text: "Employee contract", icon: "👷", isCorrect: false }
            ],
            explanation: "Trademarks legally protect your brand name, logo, and identity from being copied by others."
        },
        {
            question: "What are environmental regulations?",
            type: "multiple_choice",
            options: [
                { text: "Rules protecting land, water, and air", icon: "🌍", isCorrect: true },
                { text: "Only for factories", icon: "🏭", isCorrect: false },
                { text: "Not relevant to farms", icon: "❌", isCorrect: false },
                { text: "Voluntary guidelines", icon: "📋", isCorrect: false }
            ],
            explanation: "Environmental regulations govern pesticide use, water management, and waste disposal on farms."
        }
    ],

    // Level 10 - Advanced Business
    module9_level10: [
        {
            question: "What is strategic planning?",
            type: "multiple_choice",
            options: [
                { text: "Setting long-term goals and plans to achieve them", icon: "🎯", isCorrect: true },
                { text: "Daily task list", icon: "📝", isCorrect: false },
                { text: "Weather planning", icon: "🌤️", isCorrect: false },
                { text: "Crop rotation", icon: "🔄", isCorrect: false }
            ],
            explanation: "Strategic planning defines where you want your farm to be in years ahead and how to get there."
        },
        {
            question: "What is a SWOT analysis?",
            type: "multiple_choice",
            options: [
                { text: "Analyzing Strengths, Weaknesses, Opportunities, Threats", icon: "📊", isCorrect: true },
                { text: "Insect identification", icon: "🐛", isCorrect: false },
                { text: "Soil test", icon: "🧪", isCorrect: false },
                { text: "Weather forecast", icon: "🌤️", isCorrect: false }
            ],
            explanation: "SWOT analysis helps understand your business position by examining internal and external factors."
        },
        {
            question: "What is supply chain management?",
            type: "multiple_choice",
            options: [
                { text: "Managing flow of products from farm to consumer", icon: "🔗", isCorrect: true },
                { text: "Chain link fence", icon: "⛓️", isCorrect: false },
                { text: "Equipment repair", icon: "🔧", isCorrect: false },
                { text: "Employee management", icon: "👥", isCorrect: false }
            ],
            explanation: "Supply chain management coordinates production, processing, storage, and distribution efficiently."
        },
        {
            question: "What is benchmarking?",
            type: "multiple_choice",
            options: [
                { text: "Comparing your performance to best practices", icon: "📏", isCorrect: true },
                { text: "Building benches", icon: "🪑", isCorrect: false },
                { text: "Marking field boundaries", icon: "📍", isCorrect: false },
                { text: "Checking equipment", icon: "🔧", isCorrect: false }
            ],
            explanation: "Benchmarking compares your farm's performance against industry standards or top performers."
        },
        {
            question: "What is return on investment (ROI)?",
            type: "multiple_choice",
            options: [
                { text: "Profit compared to money invested", icon: "📈", isCorrect: true },
                { text: "Returning products", icon: "📦", isCorrect: false },
                { text: "Number of investors", icon: "👥", isCorrect: false },
                { text: "Travel expenses", icon: "✈️", isCorrect: false }
            ],
            explanation: "ROI measures how much profit you earn relative to what you invested - higher is better."
        },
        {
            question: "What is succession planning?",
            type: "multiple_choice",
            options: [
                { text: "Planning who will take over the farm", icon: "👨‍👩‍👧", isCorrect: true },
                { text: "Planting in sequence", icon: "🌱", isCorrect: false },
                { text: "Crop rotation", icon: "🔄", isCorrect: false },
                { text: "Financial planning", icon: "💰", isCorrect: false }
            ],
            explanation: "Succession planning prepares for transferring farm ownership and management to the next generation."
        },
        {
            question: "What is market forecasting?",
            type: "multiple_choice",
            options: [
                { text: "Predicting future market conditions", icon: "🔮", isCorrect: true },
                { text: "Weather prediction", icon: "🌤️", isCorrect: false },
                { text: "Counting inventory", icon: "📦", isCorrect: false },
                { text: "Recording past sales", icon: "📋", isCorrect: false }
            ],
            explanation: "Market forecasting predicts future prices, demand, and trends to guide planning decisions."
        },
        {
            question: "What is business networking?",
            type: "multiple_choice",
            options: [
                { text: "Building relationships with other businesses", icon: "🤝", isCorrect: true },
                { text: "Computer networks", icon: "💻", isCorrect: false },
                { text: "Fishing nets", icon: "🎣", isCorrect: false },
                { text: "Sports network", icon: "📺", isCorrect: false }
            ],
            explanation: "Business networking builds relationships with suppliers, buyers, and other farmers for mutual benefit."
        },
        {
            question: "What is competitive advantage?",
            type: "multiple_choice",
            options: [
                { text: "What makes you better than competitors", icon: "🏆", isCorrect: true },
                { text: "Being aggressive", icon: "😠", isCorrect: false },
                { text: "Lowest prices only", icon: "📉", isCorrect: false },
                { text: "Copying others", icon: "📋", isCorrect: false }
            ],
            explanation: "Competitive advantage is unique strengths - quality, location, skills - that help you win customers."
        },
        {
            question: "What makes a sustainable farm business?",
            type: "multiple_choice",
            options: [
                { text: "Profitable while protecting environment and community", icon: "🌱", isCorrect: true },
                { text: "Maximum profit at any cost", icon: "💰", isCorrect: false },
                { text: "Only environmental focus", icon: "🌍", isCorrect: false },
                { text: "Ignoring future generations", icon: "❌", isCorrect: false }
            ],
            explanation: "Sustainable farms balance economic profit, environmental stewardship, and social responsibility for long-term success."
        }
    ]
};

// Register module globally
if (typeof window !== 'undefined') {
    window.MODULE9_QUESTIONS = MODULE9_QUESTIONS;
}
