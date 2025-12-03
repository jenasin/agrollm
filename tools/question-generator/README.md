# AgroLinguo Question Generator

AI-powered tool for generating culturally and cognitively appropriate farming education questions for African regions.

## Features

- **Region Analysis**: Uses GPT-4 to analyze target region's:
  - Literacy rates and education levels
  - Cognitive considerations (learning style, attention span)
  - Motivational factors and cultural values
  - Local farming context (crops, livestock, challenges)

- **Smart Question Generation**: Creates questions that are:
  - Culturally relevant with local examples
  - Cognitively appropriate for the target audience
  - Motivating and confidence-building
  - Progressive in difficulty across levels

- **Direct Export**: Saves questions in the correct JavaScript format for AgroLinguo app

## Setup

1. Install dependencies:
```bash
cd tools/question-generator
pip install -r requirements.txt
```

2. Set your OpenAI API key:
```bash
export OPENAI_API_KEY="your-key-here"
```

Or enter it in the app sidebar.

3. Run the app:
```bash
streamlit run app.py
```

## Usage

1. **Define Region**: Describe the target community (e.g., "Rural farmers in northern Kenya, Turkana region")

2. **Select Topics**: Choose which farming topics to cover

3. **Analyze**: Click "Analyze Region" to get AI insights about the audience

4. **Generate**: Click "Generate Questions" to create questions

5. **Export**: Download JavaScript file or save directly to `questions/` folder

## Example Prompt

```
Rural farming communities in the Sahel region of Mali,
specifically around Mopti. Focus on smallholder farmers
growing millet and sorghum, with some goat herding.
Many are affected by desertification and water scarcity.
Most have limited formal education (2-4 years primary school).
```

## Output Format

Questions are generated in this format:
```javascript
const MODULE11_QUESTIONS = {
    module11_level1: [
        {
            question: "What is the best time to plant millet?",
            options: [
                {text: "At the start of rainy season", icon: "🌧️", isCorrect: true},
                {text: "In dry season", icon: "☀️", isCorrect: false},
                ...
            ],
            explanation: "Planting at the start of rains gives seeds the water they need..."
        }
    ],
    ...
};
```

## After Generation

1. Add the new module to `course_config.js`
2. Add script tag to `index.html`
3. Copy to `www/questions/` folder
4. Update Service Worker cache
5. Deploy!

## Requirements

- Python 3.8+
- OpenAI API key (GPT-4 access recommended)
- Streamlit
