"""
AgroLinguo Question Generator
=============================
Streamlit app that uses GPT to generate culturally and cognitively
appropriate farming questions for specific African regions.
"""

import streamlit as st
import openai
import json
import os
import re
from datetime import datetime

# Page config
st.set_page_config(
    page_title="AgroLinguo Question Generator",
    page_icon="🌱",
    layout="wide"
)

# Initialize session state
if 'region_analysis' not in st.session_state:
    st.session_state.region_analysis = None
if 'generated_questions' not in st.session_state:
    st.session_state.generated_questions = None
if 'api_key' not in st.session_state:
    st.session_state.api_key = os.getenv('OPENAI_API_KEY', '')

# Sidebar - API Key
with st.sidebar:
    st.header("⚙️ Settings")
    api_key = st.text_input(
        "OpenAI API Key",
        value=st.session_state.api_key,
        type="password",
        help="Enter your OpenAI API key"
    )
    if api_key:
        st.session_state.api_key = api_key
        openai.api_key = api_key

    st.divider()
    st.header("📊 Export Settings")
    module_id = st.number_input("Module ID", min_value=1, max_value=99, value=11)
    questions_per_level = st.number_input("Questions per level", min_value=5, max_value=20, value=10)
    num_levels = st.number_input("Number of levels", min_value=1, max_value=10, value=10)

# Main content
st.title("🌱 AgroLinguo Question Generator")
st.markdown("Generate culturally appropriate farming questions for African regions using AI")

# Step 1: Region Input
st.header("1️⃣ Define Target Region")

col1, col2 = st.columns(2)

with col1:
    region_prompt = st.text_area(
        "Describe the target region/community",
        placeholder="Example: Rural farming communities in northern Kenya, specifically the Turkana region. Focus on pastoralist communities transitioning to crop farming due to climate change.",
        height=150
    )

with col2:
    farming_focus = st.multiselect(
        "Farming topics to cover",
        [
            "Soil & Basics",
            "Plant Protection",
            "Harvest & Sales",
            "Irrigation",
            "Machinery",
            "Ecology",
            "Livestock",
            "Climate & Weather",
            "Farm Business",
            "Innovation"
        ],
        default=["Soil & Basics", "Irrigation", "Livestock"]
    )

    language_level = st.select_slider(
        "Language complexity",
        options=["Very Simple", "Simple", "Moderate", "Standard"],
        value="Simple"
    )

# Step 2: Analyze Region
st.header("2️⃣ Analyze Target Audience")

if st.button("🔍 Analyze Region", type="primary", disabled=not region_prompt or not st.session_state.api_key):
    with st.spinner("Analyzing region with GPT..."):
        try:
            client = openai.OpenAI(api_key=st.session_state.api_key)

            analysis_prompt = f"""Analyze this African region for creating educational farming content:

Region: {region_prompt}

Provide a detailed analysis in JSON format:
{{
    "region_name": "Short name for the region",
    "country": "Country name",
    "population_characteristics": {{
        "literacy_rate": "estimated percentage",
        "primary_language": "main language",
        "secondary_languages": ["list"],
        "average_education_years": "number or range"
    }},
    "cognitive_considerations": {{
        "learning_style": "visual/oral/practical",
        "attention_span": "short/medium/long",
        "abstract_thinking": "low/medium/high",
        "numeracy_level": "basic/intermediate/advanced",
        "recommended_question_complexity": "very simple/simple/moderate"
    }},
    "motivational_factors": {{
        "primary_motivations": ["list of what motivates them"],
        "cultural_values": ["important values"],
        "success_indicators": ["what they consider success"],
        "challenges_faced": ["main challenges"]
    }},
    "farming_context": {{
        "main_crops": ["crops they grow"],
        "livestock": ["animals they keep"],
        "farming_methods": ["traditional/modern methods"],
        "water_access": "description",
        "climate_challenges": ["challenges"],
        "market_access": "description"
    }},
    "content_recommendations": {{
        "use_local_examples": true,
        "include_visuals": true,
        "question_format": "multiple choice with icons",
        "avoid_topics": ["culturally sensitive topics"],
        "emphasize_topics": ["most relevant topics"],
        "local_units": "local measurement units if any"
    }}
}}

Be specific and realistic based on actual data about this region."""

            response = client.chat.completions.create(
                model="gpt-4o",
                messages=[
                    {"role": "system", "content": "You are an expert in African agriculture, education, and rural development. Provide accurate, culturally sensitive analysis."},
                    {"role": "user", "content": analysis_prompt}
                ],
                temperature=0.7
            )

            # Parse JSON from response
            response_text = response.choices[0].message.content
            # Extract JSON from markdown code blocks if present
            json_match = re.search(r'```(?:json)?\s*([\s\S]*?)\s*```', response_text)
            if json_match:
                json_str = json_match.group(1)
            else:
                json_str = response_text

            st.session_state.region_analysis = json.loads(json_str)
            st.success("✅ Analysis complete!")

        except json.JSONDecodeError as e:
            st.error(f"Failed to parse response: {e}")
            st.code(response_text)
        except Exception as e:
            st.error(f"Error: {e}")

# Display analysis
if st.session_state.region_analysis:
    analysis = st.session_state.region_analysis

    col1, col2, col3 = st.columns(3)

    with col1:
        st.subheader("👥 Population")
        pop = analysis.get('population_characteristics', {})
        st.metric("Literacy Rate", pop.get('literacy_rate', 'N/A'))
        st.write(f"**Primary Language:** {pop.get('primary_language', 'N/A')}")
        st.write(f"**Education:** {pop.get('average_education_years', 'N/A')} years")

    with col2:
        st.subheader("🧠 Cognitive Profile")
        cog = analysis.get('cognitive_considerations', {})
        st.write(f"**Learning Style:** {cog.get('learning_style', 'N/A')}")
        st.write(f"**Complexity Level:** {cog.get('recommended_question_complexity', 'N/A')}")
        st.write(f"**Numeracy:** {cog.get('numeracy_level', 'N/A')}")

    with col3:
        st.subheader("💪 Motivation")
        mot = analysis.get('motivational_factors', {})
        st.write("**Primary Motivations:**")
        for m in mot.get('primary_motivations', [])[:3]:
            st.write(f"• {m}")

    with st.expander("📋 Full Analysis"):
        st.json(analysis)

# Step 3: Generate Questions
st.header("3️⃣ Generate Questions")

if st.button("🎯 Generate Questions", type="primary", disabled=not st.session_state.region_analysis):
    with st.spinner(f"Generating {num_levels * questions_per_level} questions..."):
        try:
            client = openai.OpenAI(api_key=st.session_state.api_key)
            analysis = st.session_state.region_analysis

            all_questions = {}

            progress_bar = st.progress(0)

            for level in range(1, num_levels + 1):
                # Difficulty increases with level
                if level <= 3:
                    difficulty = "beginner"
                    complexity = "very simple, basic concepts"
                elif level <= 6:
                    difficulty = "intermediate"
                    complexity = "simple, building on basics"
                elif level <= 8:
                    difficulty = "advanced"
                    complexity = "moderate, applying knowledge"
                else:
                    difficulty = "expert"
                    complexity = "challenging, critical thinking"

                generation_prompt = f"""Generate {questions_per_level} farming education questions for this audience:

AUDIENCE PROFILE:
- Region: {analysis.get('region_name', 'Unknown')} ({analysis.get('country', 'Africa')})
- Literacy: {analysis.get('population_characteristics', {}).get('literacy_rate', 'Low')}
- Learning style: {analysis.get('cognitive_considerations', {}).get('learning_style', 'practical')}
- Language level: {language_level}
- Main crops: {', '.join(analysis.get('farming_context', {}).get('main_crops', ['general crops']))}
- Livestock: {', '.join(analysis.get('farming_context', {}).get('livestock', ['general livestock']))}
- Challenges: {', '.join(analysis.get('farming_context', {}).get('climate_challenges', ['drought']))}

LEVEL: {level}/10 ({difficulty})
COMPLEXITY: {complexity}
TOPICS: {', '.join(farming_focus)}

MOTIVATIONAL CONTEXT:
- Motivations: {', '.join(analysis.get('motivational_factors', {}).get('primary_motivations', []))}
- Values: {', '.join(analysis.get('motivational_factors', {}).get('cultural_values', []))}

REQUIREMENTS:
1. Questions must be culturally relevant and use local examples
2. Use simple, clear language (imagine explaining to someone with {analysis.get('population_characteristics', {}).get('average_education_years', '4-6')} years of education)
3. Include practical, actionable knowledge they can use immediately
4. Each question should have 4 options with icons/emojis
5. Explanations should be encouraging and educational
6. Focus on building confidence and practical skills
7. Use local crops, animals, and situations they would recognize
8. Avoid abstract concepts - keep it concrete and visual

OUTPUT FORMAT (JSON array):
[
  {{
    "question": "Clear, simple question in English",
    "options": [
      {{"text": "Correct answer", "icon": "🌱", "isCorrect": true}},
      {{"text": "Wrong option 1", "icon": "❌", "isCorrect": false}},
      {{"text": "Wrong option 2", "icon": "❌", "isCorrect": false}},
      {{"text": "Wrong option 3", "icon": "❌", "isCorrect": false}}
    ],
    "explanation": "Brief, encouraging explanation of why the answer is correct and how to apply this knowledge"
  }}
]

Generate exactly {questions_per_level} questions. Make them progressively build knowledge within this level."""

                response = client.chat.completions.create(
                    model="gpt-4o",
                    messages=[
                        {"role": "system", "content": "You are an expert agricultural educator specializing in adult education for rural African communities. Create questions that are practical, culturally sensitive, and build confidence. Use simple language and concrete examples."},
                        {"role": "user", "content": generation_prompt}
                    ],
                    temperature=0.8
                )

                response_text = response.choices[0].message.content
                json_match = re.search(r'```(?:json)?\s*([\s\S]*?)\s*```', response_text)
                if json_match:
                    json_str = json_match.group(1)
                else:
                    json_str = response_text

                questions = json.loads(json_str)
                all_questions[f"module{module_id}_level{level}"] = questions

                progress_bar.progress(level / num_levels)

            st.session_state.generated_questions = all_questions
            st.success(f"✅ Generated {sum(len(q) for q in all_questions.values())} questions!")

        except Exception as e:
            st.error(f"Error generating questions: {e}")
            import traceback
            st.code(traceback.format_exc())

# Display and export questions
if st.session_state.generated_questions:
    st.header("4️⃣ Review & Export")

    questions = st.session_state.generated_questions

    # Preview
    preview_level = st.selectbox(
        "Preview level",
        list(questions.keys())
    )

    if preview_level:
        st.subheader(f"📝 {preview_level}")
        for i, q in enumerate(questions[preview_level][:3]):  # Show first 3
            with st.expander(f"Q{i+1}: {q['question'][:50]}..."):
                st.write(f"**{q['question']}**")
                for opt in q['options']:
                    icon = "✅" if opt['isCorrect'] else "❌"
                    st.write(f"{opt.get('icon', '')} {opt['text']} {icon}")
                st.info(f"💡 {q['explanation']}")

        if len(questions[preview_level]) > 3:
            st.write(f"*... and {len(questions[preview_level]) - 3} more questions*")

    # Export
    st.subheader("📤 Export")

    col1, col2 = st.columns(2)

    with col1:
        # Generate JavaScript code
        js_code = f"""// AgroLinguo Questions - Module {module_id}
// Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}
// Region: {st.session_state.region_analysis.get('region_name', 'Unknown')}
// Country: {st.session_state.region_analysis.get('country', 'Unknown')}

const MODULE{module_id}_QUESTIONS = {{
"""
        for level_key, level_questions in questions.items():
            js_code += f"    {level_key}: "
            js_code += json.dumps(level_questions, indent=8, ensure_ascii=False)
            js_code += ",\n"

        js_code += f"""
}};

// Export to window
window.MODULE{module_id}_QUESTIONS = MODULE{module_id}_QUESTIONS;
"""

        st.download_button(
            "📥 Download JavaScript",
            js_code,
            file_name=f"questions_module{module_id}.js",
            mime="text/javascript"
        )

    with col2:
        # Save directly to questions folder
        if st.button("💾 Save to questions/ folder"):
            try:
                # Get the path relative to this script
                script_dir = os.path.dirname(os.path.abspath(__file__))
                questions_dir = os.path.join(script_dir, "..", "..", "questions")

                if not os.path.exists(questions_dir):
                    os.makedirs(questions_dir)

                file_path = os.path.join(questions_dir, f"questions_module{module_id}.js")

                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(js_code)

                st.success(f"✅ Saved to {file_path}")
                st.info("Don't forget to update index.html and course_config.js!")

            except Exception as e:
                st.error(f"Error saving: {e}")

    # Show config snippet
    with st.expander("📋 Add to course_config.js"):
        config_snippet = f"""{{
    id: {module_id},
    name: '{st.session_state.region_analysis.get('region_name', 'New Module')}',
    icon: '🌍',
    color: 'from-lime-400 to-lime-600',
    description: 'Farming for {st.session_state.region_analysis.get('country', 'Africa')}'
}}"""
        st.code(config_snippet, language="javascript")

# Footer
st.divider()
st.markdown("""
<div style='text-align: center; color: gray;'>
    <p>🌱 AgroLinguo Question Generator | Powered by GPT-4</p>
    <p>Creating culturally appropriate farming education for Africa</p>
</div>
""", unsafe_allow_html=True)
