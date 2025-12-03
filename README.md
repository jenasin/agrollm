# AgroLinguo

**AgroLinguo** is an open-source educational Progressive Web App (PWA) designed to teach agricultural knowledge to smallholder farmers in developing regions, with a primary focus on East Africa. The application employs Duolingo-style gamification mechanics—including experience points (XP), hearts, streaks, and level progression—to make learning engaging and accessible for users with varying literacy levels.

The platform features 10 comprehensive learning modules covering essential farming topics: soil fundamentals, plant protection, harvest and sales, irrigation management, farm machinery, ecological sustainability, livestock husbandry, climate and weather patterns, farm business management, and modern agricultural innovation. Each module contains multiple levels with quiz-based questions that adapt to the learner's progress.

A key innovation is the integrated **Neural Learning Engine**, a client-side machine learning system that tracks user knowledge states, predicts learning success, and identifies skills requiring additional practice—all functioning entirely offline. This is critical for target users who often have limited or expensive internet connectivity.

The application is built with React and Tailwind CSS, optimized specifically for low-cost Android smartphones common in target regions. The mobile-first design features large touch targets (minimum 68px buttons), high-contrast text, and intuitive iconography to accommodate users with limited digital literacy. The interface supports multiple languages, currently English and Kiswahili, with a modular architecture enabling easy addition of new languages and regional content.

As a PWA, AgroLinguo can be installed directly from the browser without requiring app store access, works offline after initial load, and automatically updates when connectivity is available. The question generation system includes a Streamlit-based tool powered by GPT-4 for creating localized, contextually relevant agricultural content.

AgroLinguo represents a practical approach to agricultural education technology, combining modern web capabilities with thoughtful design for resource-constrained environments.