"""
AgroLinguo Question Generator - Chat Style
===========================================
Conversational wizard that guides users through question generation.
"""

import streamlit as st
import openai
import json
import os
import re
from datetime import datetime
from glob import glob

# Page config
st.set_page_config(
    page_title="AgroLinguo Generator",
    page_icon="🌱",
    layout="centered"
)

# Initialize session state
if 'messages' not in st.session_state:
    st.session_state.messages = []
if 'step' not in st.session_state:
    st.session_state.step = 'start'
if 'data' not in st.session_state:
    st.session_state.data = {}
if 'api_key' not in st.session_state:
    st.session_state.api_key = os.getenv('OPENAI_API_KEY', '')
if 'viewing_test' not in st.session_state:
    st.session_state.viewing_test = None
if 'custom_generating' not in st.session_state:
    st.session_state.custom_generating = False

def get_questions_dir():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    return os.path.join(script_dir, "..", "..", "questions")

def get_saved_tests():
    """Scan questions directory for all saved tests"""
    questions_dir = get_questions_dir()
    tests = []

    for category in ['custom', 'by-region', 'by-topic', 'by-difficulty']:
        category_dir = os.path.join(questions_dir, category)
        if os.path.exists(category_dir):
            for file in glob(os.path.join(category_dir, "*.js")):
                file_name = os.path.basename(file)
                try:
                    with open(file, 'r', encoding='utf-8') as f:
                        content = f.read()
                        first_line = content.split('\n')[0]
                        title = first_line.replace('//', '').strip() if first_line.startswith('//') else file_name
                        tests.append({
                            'file': file,
                            'name': file_name,
                            'title': title,
                            'category': category
                        })
                except:
                    tests.append({
                        'file': file,
                        'name': file_name,
                        'title': file_name,
                        'category': category
                    })
    return tests

def add_message(role, content):
    st.session_state.messages.append({"role": role, "content": content})

def reset_chat():
    st.session_state.messages = []
    st.session_state.step = 'start'
    st.session_state.data = {}

# Sample prompts
SAMPLE_PROMPTS = {
    "🇰🇪 Kenya - Swahili (Watoto/Children)": """Generate 20 educational farming questions in SWAHILI language for children in Kenya.

TARGET AUDIENCE:
- Country: Kenya
- Region: Central Kenya / Nairobi area
- Target group: Children aged 8-14 years (watoto)
- Education level: Primary school
- Language: Swahili (Kiswahili)

REQUIREMENTS:
1. ALL questions and answers must be in Swahili (Kiswahili)
2. Use simple, child-friendly language
3. Include fun emojis that appeal to children
4. Focus on basic farming concepts children can understand
5. Use local Kenyan crops: mahindi (maize), maharagwe (beans), sukuma wiki, nyanya (tomatoes)
6. Include animals they know: ng'ombe (cow), kuku (chicken), mbuzi (goat)
7. Make explanations encouraging and educational

EXAMPLE FORMAT:
{
  "question": "Mazao gani yanahitaji maji mengi?",
  "options": [
    {"text": "Mpunga (mchele)", "icon": "🌾", "isCorrect": true},
    {"text": "Mtama", "icon": "🌿", "isCorrect": false},
    {"text": "Mahindi", "icon": "🌽", "isCorrect": false},
    {"text": "Maharagwe", "icon": "🫘", "isCorrect": false}
  ],
  "explanation": "Vizuri sana! Mpunga unahitaji maji mengi kukua vizuri."
}

OUTPUT FORMAT (JSON array):
[
  {
    "question": "Question in Swahili",
    "options": [
      {"text": "Answer in Swahili", "icon": "emoji", "isCorrect": true/false},
      ...
    ],
    "explanation": "Explanation in Swahili"
  }
]

Generate exactly 20 questions entirely in Swahili.""",

    "🇰🇪 Kenya - English (Children)": """Generate 20 educational farming questions in English for children in Kenya.

TARGET AUDIENCE:
- Country: Kenya
- Region: Various regions
- Target group: Children aged 8-14 years
- Education level: Primary school
- Language: English (simple)

REQUIREMENTS:
1. Use simple English words children understand
2. Include fun, colorful emojis
3. Focus on basic farming concepts
4. Use Kenyan crops: maize, beans, sukuma wiki, tomatoes
5. Include local animals: cows, chickens, goats
6. Make learning fun and encouraging

Generate exactly 20 questions in simple English.""",

    "🇹🇿 Tanzania - Swahili (Wakulima)": """Generate 20 educational farming questions in SWAHILI for farmers in Tanzania.

TARGET AUDIENCE:
- Country: Tanzania
- Region: Rural Tanzania
- Target group: Adult farmers (wakulima)
- Education level: Basic literacy
- Language: Swahili (Kiswahili)

REQUIREMENTS:
1. ALL content in Swahili
2. Practical farming knowledge
3. Tanzanian context (crops: mahindi, mpunga, kahawa, chai)
4. Weather patterns of Tanzania
5. Encouraging explanations

Generate exactly 20 questions in Swahili.""",

    "🇺🇬 Uganda - Luganda (Abalimi)": """Generate 20 educational farming questions in LUGANDA for farmers in Uganda.

TARGET AUDIENCE:
- Country: Uganda
- Region: Central Uganda (Buganda)
- Target group: Smallholder farmers (abalimi)
- Education level: Basic
- Language: Luganda

REQUIREMENTS:
1. ALL content in Luganda language
2. Use Ugandan crops: matooke, cassava, coffee, beans
3. Include local farming practices
4. Practical and actionable advice

Generate exactly 20 questions in Luganda."""
}

# Header
col1, col2, col3 = st.columns([2, 1, 1])
with col1:
    st.title("🌱 AgroLinguo")
with col2:
    lang = st.toggle("🇬🇧 EN", value=False)
with col3:
    if st.button("🔄 Reset"):
        reset_chat()
        st.rerun()

st.caption("AI Question Generator for African Farmers" if lang else "AI Generátor otázek pro africké farmáře")

# API Key in sidebar
with st.sidebar:
    st.header("⚙️ Settings" if lang else "⚙️ Nastavení")
    api_key = st.text_input(
        "OpenAI API Key:",
        value=st.session_state.api_key,
        type="password"
    )
    st.session_state.api_key = api_key

    if api_key:
        st.success("✅ API key set" if lang else "✅ API klíč nastaven")
    else:
        st.warning("⚠️ Enter API key" if lang else "⚠️ Zadejte API klíč")

    st.divider()

    # Saved Tests Section
    st.header("📚 Saved Tests" if lang else "📚 Uložené testy")

    saved_tests = get_saved_tests()

    if saved_tests:
        categories = {}
        for test in saved_tests:
            cat = test['category']
            if cat not in categories:
                categories[cat] = []
            categories[cat].append(test)

        category_icons = {
            'custom': '✏️',
            'by-region': '🌍',
            'by-topic': '📖',
            'by-difficulty': '📊'
        }

        for cat, tests in categories.items():
            icon = category_icons.get(cat, '📁')
            with st.expander(f"{icon} {cat.replace('-', ' ').title()} ({len(tests)})", expanded=(cat == 'custom')):
                for test in tests:
                    col1, col2 = st.columns([3, 1])
                    with col1:
                        st.write(f"📄 {test['title'][:25]}")
                    with col2:
                        if st.button("👁️", key=f"view_{test['file']}", help="View"):
                            st.session_state.viewing_test = test['file']
                            st.rerun()
    else:
        st.info("No tests yet" if lang else "Zatím žádné testy")

# Mode tabs
tab1, tab2, tab3 = st.tabs(["💬 Chat Wizard", "📝 Custom Prompt", "🇰🇪 Swahili Modules"])

# ============ TAB 1: Chat Wizard ============
with tab1:
    # View test modal
    if st.session_state.viewing_test:
        test_file = st.session_state.viewing_test
        st.subheader("📋 Test Preview" if lang else "📋 Náhled testu")

        if st.button("✖️ Close" if lang else "✖️ Zavřít"):
            st.session_state.viewing_test = None
            st.rerun()

        try:
            with open(test_file, 'r', encoding='utf-8') as f:
                content = f.read()

            lines = content.split('\n')
            metadata = [line.replace('//', '').strip() for line in lines[:10] if line.startswith('//')]
            if metadata:
                st.info('\n'.join(metadata))

            json_match = re.search(r'\[[\s\S]*\]', content)
            if json_match:
                try:
                    questions = json.loads(json_match.group())
                    st.write(f"**{len(questions)} questions**")
                    for i, q in enumerate(questions[:5], 1):
                        with st.expander(f"Q{i}: {q.get('question', '')[:50]}..."):
                            st.write(f"**{q.get('question', '')}**")
                            for opt in q.get('options', []):
                                mark = "✅" if opt.get('isCorrect') else "⬜"
                                st.write(f"{mark} {opt.get('icon', '')} {opt.get('text', '')}")
                            st.caption(f"💡 {q.get('explanation', '')}")
                    if len(questions) > 5:
                        st.caption(f"...+{len(questions) - 5} more")
                except:
                    st.code(content[:500], language='javascript')

            st.download_button("📥 Download", content, file_name=os.path.basename(test_file), mime="text/javascript")
        except Exception as e:
            st.error(f"Error: {e}")

        st.divider()

    # Chat container
    chat_container = st.container()

    with chat_container:
        for msg in st.session_state.messages:
            with st.chat_message(msg["role"]):
                st.markdown(msg["content"])

    # Initial message
    if st.session_state.step == 'start' and not st.session_state.messages:
        welcome = """👋 **Welcome!** I'll help you create educational farming questions for African communities.

Let's start - **Which African country** do you want to create questions for?

🇰🇪 Kenya | 🇺🇬 Uganda | 🇪🇹 Ethiopia | 🇹🇿 Tanzania | 🇷🇼 Rwanda | or type another...""" if lang else """👋 **Vítejte!** Pomohu vám vytvořit vzdělávací otázky pro africké farmáře.

Začneme - **Pro kterou africkou zemi** chcete vytvořit otázky?

🇰🇪 Keňa | 🇺🇬 Uganda | 🇪🇹 Etiopie | 🇹🇿 Tanzanie | 🇷🇼 Rwanda | nebo napište jinou..."""

        add_message("assistant", welcome)
        st.session_state.step = 'country'
        st.rerun()

    # Chat input
    if prompt := st.chat_input("Type your answer..." if lang else "Napište odpověď..."):
        add_message("user", prompt)
        step = st.session_state.step

        if step == 'country':
            st.session_state.data['country'] = prompt
            response = f"""✅ **{prompt}**

**Which specific region** in {prompt}?

Example: Turkana, Karamoja, Tigray, Dodoma...""" if lang else f"""✅ **{prompt}**

**Který konkrétní region** v zemi {prompt}?

Například: Turkana, Karamoja, Tigray, Dodoma..."""
            add_message("assistant", response)
            st.session_state.step = 'region'

        elif step == 'region':
            st.session_state.data['region'] = prompt
            response = f"""✅ Region: **{prompt}**

**For whom** are these questions?

👨‍🌾 Farmers | 👩‍🌾 Women | 🧒 Children | 👴 Elders | 🐄 Pastoralists...""" if lang else f"""✅ Region: **{prompt}**

**Pro koho** jsou otázky?

👨‍🌾 Farmáři | 👩‍🌾 Ženy | 🧒 Děti | 👴 Starší | 🐄 Pastevci..."""
            add_message("assistant", response)
            st.session_state.step = 'target'

        elif step == 'target':
            st.session_state.data['target_group'] = prompt
            response = f"""✅ Target: **{prompt}**

**What education level?**

📖 None | ✏️ Basic | 📝 Primary | 🎓 Secondary...""" if lang else f"""✅ Cíl: **{prompt}**

**Jaké vzdělání?**

📖 Žádné | ✏️ Základní | 📝 Střední | 🎓 Vyšší..."""
            add_message("assistant", response)
            st.session_state.step = 'education'

        elif step == 'education':
            st.session_state.data['education'] = prompt
            response = f"""✅ Education: **{prompt}**

**What language** for the questions?

🇬🇧 English | 🇰🇪 Swahili | 🇺🇬 Luganda | or type another...""" if lang else f"""✅ Vzdělání: **{prompt}**

**V jakém jazyce** mají být otázky?

🇬🇧 Angličtina | 🇰🇪 Svahilština | 🇺🇬 Luganda | nebo jiný..."""
            add_message("assistant", response)
            st.session_state.step = 'language'

        elif step == 'language':
            st.session_state.data['language'] = prompt
            response = f"""✅ Language: **{prompt}**

**What topic?**

🌱 Soil & Basics | 💧 Irrigation | 🛡️ Plant Protection | 🐄 Livestock | 🌾 Harvest...""" if lang else f"""✅ Jazyk: **{prompt}**

**Jaké téma?**

🌱 Půda | 💧 Zavlažování | 🛡️ Ochrana rostlin | 🐄 Zvířata | 🌾 Sklizeň..."""
            add_message("assistant", response)
            st.session_state.step = 'topic'

        elif step == 'topic':
            st.session_state.data['topic'] = prompt
            response = f"""✅ Topic: **{prompt}**

**How many questions?**

🔟 10 | 2️⃣0️⃣ 20 | 5️⃣0️⃣ 50 | 💯 100...""" if lang else f"""✅ Téma: **{prompt}**

**Kolik otázek?**

🔟 10 | 2️⃣0️⃣ 20 | 5️⃣0️⃣ 50 | 💯 100..."""
            add_message("assistant", response)
            st.session_state.step = 'count'

        elif step == 'count':
            num = ''.join(filter(str.isdigit, prompt))
            count = int(num) if num else 10
            st.session_state.data['question_count'] = count

            d = st.session_state.data
            summary = f"""📋 **Summary:**

| | |
|---|---|
| 🌍 Country | {d.get('country')} |
| 📍 Region | {d.get('region')} |
| 👥 Target | {d.get('target_group')} |
| 📚 Education | {d.get('education')} |
| 🗣️ Language | {d.get('language')} |
| 📖 Topic | {d.get('topic')} |
| ❓ Count | {count} |

Type **yes** to generate or **edit** to restart."""

            add_message("assistant", summary)
            st.session_state.step = 'confirm'

        elif step == 'confirm':
            if prompt.lower() in ['yes', 'ano', 'ok', 'y', 'a']:
                if not st.session_state.api_key:
                    add_message("assistant", "⚠️ **Enter API key in sidebar first!**")
                else:
                    add_message("assistant", "🔄 **Generating...**")
                    st.session_state.step = 'generating'
            elif prompt.lower() in ['edit', 'change', 'upravit']:
                add_message("assistant", "🔄 **Starting over.** Which country?")
                st.session_state.data = {}
                st.session_state.step = 'country'
            else:
                add_message("assistant", "❓ Type **yes** or **edit**")

        st.rerun()

    # Generation step
    if st.session_state.step == 'generating':
        d = st.session_state.data

        with st.spinner("Generating with GPT-4..."):
            try:
                client = openai.OpenAI(api_key=st.session_state.api_key)
                count = d.get('question_count', 10)
                target_lang = d.get('language', 'English')

                gen_prompt = f"""Generate {count} educational farming questions for this audience:

TARGET AUDIENCE:
- Country: {d.get('country')}
- Region: {d.get('region')}
- Target group: {d.get('target_group')}
- Education level: {d.get('education')}
- Topic: {d.get('topic')}
- OUTPUT LANGUAGE: {target_lang}

REQUIREMENTS:
1. ALL questions, options, and explanations must be in {target_lang}
2. Questions must be culturally relevant to the region
3. Use simple, clear language appropriate for the education level
4. Each question has 4 options with relevant emojis
5. Use local crops, animals, situations they know

OUTPUT FORMAT (JSON array):
[
  {{
    "question": "Question in {target_lang}",
    "options": [
      {{"text": "Answer in {target_lang}", "icon": "🌱", "isCorrect": true}},
      {{"text": "Wrong 1", "icon": "❌", "isCorrect": false}},
      {{"text": "Wrong 2", "icon": "❌", "isCorrect": false}},
      {{"text": "Wrong 3", "icon": "❌", "isCorrect": false}}
    ],
    "explanation": "Explanation in {target_lang}"
  }}
]

Generate exactly {count} questions entirely in {target_lang}."""

                response = client.chat.completions.create(
                    model="gpt-4o",
                    messages=[
                        {"role": "system", "content": f"Expert agricultural educator. Generate ALL content in {target_lang}."},
                        {"role": "user", "content": gen_prompt}
                    ],
                    temperature=0.8
                )

                text = response.choices[0].message.content
                match = re.search(r'```(?:json)?\s*([\s\S]*?)\s*```', text)
                json_str = match.group(1) if match else text

                questions = json.loads(json_str)
                st.session_state.data['questions'] = questions

                safe_name = f"{d.get('region', 'test').lower().replace(' ', '_')}_{d.get('language', 'en').lower()[:3]}"[:30]
                file_name = f"questions_{safe_name}.js"

                js_code = f"""// {d.get('topic')} for {d.get('region')}, {d.get('country')}
// Language: {d.get('language')}
// Target: {d.get('target_group')}
// Education: {d.get('education')}
// Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}

const QUESTIONS = {json.dumps(questions, indent=2, ensure_ascii=False)};

window.QUESTIONS = QUESTIONS;
"""

                questions_dir = get_questions_dir()
                custom_dir = os.path.join(questions_dir, "custom")
                os.makedirs(custom_dir, exist_ok=True)

                file_path = os.path.join(custom_dir, file_name)
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(js_code)

                st.session_state.data['file_path'] = file_path
                st.session_state.data['file_name'] = file_name

                success_msg = f"""✅ **Done!** Generated {len(questions)} questions in {d.get('language')}.

📁 Saved to: `custom/{file_name}`

**Sample:**
> {questions[0]['question']}

"""
                for opt in questions[0]['options']:
                    mark = "✅" if opt['isCorrect'] else "❌"
                    success_msg += f"- {opt.get('icon', '')} {opt['text']} {mark}\n"

                success_msg += f"\n💡 {questions[0]['explanation']}"

                add_message("assistant", success_msg)
                st.session_state.step = 'done'
                st.rerun()

            except Exception as e:
                add_message("assistant", f"❌ **Error:** {str(e)}")
                st.session_state.step = 'confirm'
                st.rerun()

    # Download button when done
    if st.session_state.step == 'done' and 'questions' in st.session_state.data:
        st.divider()
        questions = st.session_state.data['questions']
        d = st.session_state.data

        js_code = f"""// {d.get('topic')} for {d.get('region')}, {d.get('country')}
const QUESTIONS = {json.dumps(questions, indent=2, ensure_ascii=False)};
window.QUESTIONS = QUESTIONS;
"""

        col1, col2 = st.columns(2)
        with col1:
            st.download_button("📥 Download JS", js_code, file_name=st.session_state.data.get('file_name', 'questions.js'), mime="text/javascript")
        with col2:
            st.metric("Questions", len(questions))

# ============ TAB 2: Custom Prompt ============
with tab2:
    st.subheader("📝 Custom Prompt Generator" if lang else "📝 Vlastní prompt")
    st.caption("Select a sample prompt or write your own" if lang else "Vyberte vzorový prompt nebo napište vlastní")

    # Sample prompt selector
    selected_sample = st.selectbox(
        "🎯 Sample Prompts:" if lang else "🎯 Vzorové prompty:",
        ["-- Select --"] + list(SAMPLE_PROMPTS.keys())
    )

    # Text area for prompt
    default_prompt = SAMPLE_PROMPTS.get(selected_sample, "") if selected_sample != "-- Select --" else ""

    custom_prompt = st.text_area(
        "✏️ Your Prompt:" if lang else "✏️ Váš prompt:",
        value=default_prompt,
        height=400,
        placeholder="Write your custom prompt here or select from samples above..."
    )

    # File name
    col1, col2 = st.columns(2)
    with col1:
        custom_filename = st.text_input(
            "📁 File name:" if lang else "📁 Název souboru:",
            value="questions_kenya_swahili_children.js" if "Swahili" in selected_sample else "questions_custom.js"
        )
    with col2:
        custom_count = st.number_input("❓ Questions:", min_value=5, max_value=100, value=20)

    # Generate button
    if st.button("🚀 Generate from Custom Prompt" if lang else "🚀 Generovat z vlastního promptu", type="primary", use_container_width=True):
        if not st.session_state.api_key:
            st.error("⚠️ Enter API key in sidebar first!")
        elif not custom_prompt.strip():
            st.error("⚠️ Enter a prompt first!")
        else:
            with st.spinner("🔄 Generating with GPT-4..."):
                try:
                    client = openai.OpenAI(api_key=st.session_state.api_key)

                    response = client.chat.completions.create(
                        model="gpt-4o",
                        messages=[
                            {"role": "system", "content": "Expert agricultural educator. Generate educational quiz questions in the exact JSON format requested."},
                            {"role": "user", "content": custom_prompt}
                        ],
                        temperature=0.8
                    )

                    text = response.choices[0].message.content
                    match = re.search(r'```(?:json)?\s*([\s\S]*?)\s*```', text)
                    json_str = match.group(1) if match else text

                    # Try to find JSON array
                    if not json_str.strip().startswith('['):
                        array_match = re.search(r'\[[\s\S]*\]', json_str)
                        if array_match:
                            json_str = array_match.group()

                    questions = json.loads(json_str)

                    # Create JS code
                    js_code = f"""// Custom Generated Questions
// Prompt: {selected_sample if selected_sample != "-- Select --" else "Custom"}
// Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}

const QUESTIONS = {json.dumps(questions, indent=2, ensure_ascii=False)};

window.QUESTIONS = QUESTIONS;
"""

                    # Save to file
                    questions_dir = get_questions_dir()
                    custom_dir = os.path.join(questions_dir, "custom")
                    os.makedirs(custom_dir, exist_ok=True)

                    file_path = os.path.join(custom_dir, custom_filename)
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(js_code)

                    st.success(f"✅ Generated {len(questions)} questions!")
                    st.info(f"📁 Saved to: `custom/{custom_filename}`")

                    # Show sample
                    st.subheader("📋 Sample Questions:")
                    for i, q in enumerate(questions[:3], 1):
                        with st.expander(f"Q{i}: {q.get('question', '')[:60]}..."):
                            st.write(f"**{q.get('question', '')}**")
                            for opt in q.get('options', []):
                                mark = "✅" if opt.get('isCorrect') else "⬜"
                                st.write(f"{mark} {opt.get('icon', '')} {opt.get('text', '')}")
                            st.caption(f"💡 {q.get('explanation', '')}")

                    # Download
                    st.download_button(
                        "📥 Download JS File",
                        js_code,
                        file_name=custom_filename,
                        mime="text/javascript",
                        use_container_width=True
                    )

                except json.JSONDecodeError as e:
                    st.error(f"❌ JSON parsing error: {e}")
                    st.code(text[:1000], language='text')
                except Exception as e:
                    st.error(f"❌ Error: {str(e)}")

    # Info box
    st.divider()
    st.info("""
**💡 Tips:**
- Select a sample prompt to get started quickly
- Modify the prompt to customize for your needs
- Specify the exact language (Swahili, Luganda, etc.)
- Include local context (crops, animals, regions)
    """)

# ============ TAB 3: Swahili Modules ============
with tab3:
    st.subheader("🇰🇪 Generate Swahili Modules" if lang else "🇰🇪 Generovat svahilské moduly")
    st.caption("Generate complete course modules in Swahili for Kenya" if lang else "Vygenerovat kompletní moduly ve svahilštině pro Keňu")

    # Module definitions
    SW_MODULES = [
        {"id": 1, "name": "Soil & Basics", "sw_name": "Udongo na Misingi", "icon": "🌱"},
        {"id": 2, "name": "Plant Protection", "sw_name": "Ulinzi wa Mimea", "icon": "🛡️"},
        {"id": 3, "name": "Harvest & Sales", "sw_name": "Mavuno na Mauzo", "icon": "🌾"},
        {"id": 4, "name": "Irrigation", "sw_name": "Umwagiliaji", "icon": "💧"},
        {"id": 5, "name": "Machinery", "sw_name": "Mashine za Kilimo", "icon": "🚜"},
        {"id": 6, "name": "Ecology", "sw_name": "Ikolojia", "icon": "🌍"},
        {"id": 7, "name": "Livestock", "sw_name": "Mifugo", "icon": "🐄"},
        {"id": 8, "name": "Climate & Weather", "sw_name": "Hali ya Hewa", "icon": "🌤️"},
        {"id": 9, "name": "Farm Business", "sw_name": "Biashara ya Kilimo", "icon": "💰"},
        {"id": 10, "name": "Innovation", "sw_name": "Ubunifu", "icon": "🔬"},
    ]

    # Module selector
    module_options = [f"{m['icon']} Module {m['id']}: {m['sw_name']} ({m['name']})" for m in SW_MODULES]
    selected_module_idx = st.selectbox(
        "📚 Select Module:" if lang else "📚 Vyberte modul:",
        range(len(module_options)),
        format_func=lambda x: module_options[x]
    )

    selected_module = SW_MODULES[selected_module_idx]

    st.info(f"""
**{selected_module['icon']} {selected_module['sw_name']}** ({selected_module['name']})

This will generate:
- 10 levels (difficulty 1-10)
- 10 questions per level
- **100 questions total** in Swahili

Output: `questions/sw/questions_module{selected_module['id']}.js`
    """)

    # Generate button
    if st.button(f"🚀 Generate Module {selected_module['id']} in Swahili", type="primary", use_container_width=True):
        if not st.session_state.api_key:
            st.error("⚠️ Enter API key in sidebar first!")
        else:
            all_questions = {}
            progress_bar = st.progress(0)
            status_text = st.empty()

            try:
                client = openai.OpenAI(api_key=st.session_state.api_key)

                for level in range(1, 11):
                    progress_bar.progress(level * 10)
                    status_text.write(f"🔄 Generating Level {level}/10...")

                    prompt = f"""Generate 10 educational farming questions in SWAHILI (Kiswahili) for Kenya.

MODULE: {selected_module['id']} - {selected_module['sw_name']} ({selected_module['name']}) {selected_module['icon']}
LEVEL: {level} of 10 (1=easy, 10=advanced)

REQUIREMENTS:
1. ALL text MUST be in Swahili (Kiswahili)
2. Level {level} difficulty
3. Kenyan context - local crops, animals, climate
4. 4 options per question with emojis
5. Encouraging explanations ("Vizuri sana!", "Sawa kabisa!")

KENYAN CROPS: mahindi, maharagwe, chai, kahawa, sukuma wiki, nyanya, viazi
ANIMALS: ng'ombe, mbuzi, kuku, kondoo

OUTPUT FORMAT (JSON array only, no markdown):
[
  {{
    "question": "Swahili question?",
    "type": "multiple_choice",
    "options": [
      {{"text": "Jibu sahihi", "icon": "{selected_module['icon']}", "isCorrect": true}},
      {{"text": "Jibu mbaya 1", "icon": "❌", "isCorrect": false}},
      {{"text": "Jibu mbaya 2", "icon": "❌", "isCorrect": false}},
      {{"text": "Jibu mbaya 3", "icon": "❌", "isCorrect": false}}
    ],
    "explanation": "Maelezo kwa Kiswahili - Vizuri sana!"
  }}
]

Generate exactly 10 questions in Swahili for level {level}."""

                    response = client.chat.completions.create(
                        model="gpt-4o",
                        messages=[
                            {"role": "system", "content": "Expert Kenyan agricultural educator. Generate ALL content in Kiswahili."},
                            {"role": "user", "content": prompt}
                        ],
                        temperature=0.8
                    )

                    text = response.choices[0].message.content
                    match = re.search(r'```(?:json)?\s*([\s\S]*?)\s*```', text)
                    json_str = match.group(1) if match else text

                    if not json_str.strip().startswith('['):
                        array_match = re.search(r'\[[\s\S]*\]', json_str)
                        if array_match:
                            json_str = array_match.group()

                    questions = json.loads(json_str)
                    all_questions[f"module{selected_module['id']}_level{level}"] = questions

                progress_bar.progress(100)
                status_text.write("✅ Generation complete!")

                # Save to file
                total = sum(len(q) for q in all_questions.values())

                js_content = f"""// Module {selected_module['id']}: {selected_module['sw_name']} ({selected_module['name']}) - {total} maswali
// Lugha: Kiswahili (Swahili)
// Nchi: Kenya
// {selected_module['icon']} Generated for AgroLinguo

const MODULE{selected_module['id']}_QUESTIONS_SW = {json.dumps(all_questions, indent=2, ensure_ascii=False)};

window.MODULE{selected_module['id']}_QUESTIONS_SW = MODULE{selected_module['id']}_QUESTIONS_SW;
"""

                questions_dir = get_questions_dir()
                sw_dir = os.path.join(questions_dir, "sw")
                os.makedirs(sw_dir, exist_ok=True)

                file_path = os.path.join(sw_dir, f"questions_module{selected_module['id']}.js")
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(js_content)

                st.success(f"✅ Generated {total} questions!")
                st.info(f"📁 Saved to: `sw/questions_module{selected_module['id']}.js`")

                # Show samples
                st.subheader("📋 Sample Questions:")
                for level_key in list(all_questions.keys())[:2]:
                    level_num = level_key.split('_level')[1]
                    st.write(f"**Level {level_num}:**")
                    for q in all_questions[level_key][:2]:
                        with st.expander(f"Q: {q.get('question', '')[:50]}..."):
                            st.write(f"**{q.get('question', '')}**")
                            for opt in q.get('options', []):
                                mark = "✅" if opt.get('isCorrect') else "⬜"
                                st.write(f"{mark} {opt.get('icon', '')} {opt.get('text', '')}")
                            st.caption(f"💡 {q.get('explanation', '')}")

                # Download button
                st.download_button(
                    "📥 Download Module JS",
                    js_content,
                    file_name=f"questions_module{selected_module['id']}_sw.js",
                    mime="text/javascript",
                    use_container_width=True
                )

            except Exception as e:
                st.error(f"❌ Error: {str(e)}")

    # Show existing Swahili modules
    st.divider()
    st.subheader("📁 Existing Swahili Modules" if lang else "📁 Existující svahilské moduly")

    sw_dir = os.path.join(get_questions_dir(), "sw")
    if os.path.exists(sw_dir):
        sw_files = [f for f in os.listdir(sw_dir) if f.endswith('.js')]
        if sw_files:
            for f in sorted(sw_files):
                st.write(f"✅ {f}")
        else:
            st.info("No Swahili modules generated yet" if lang else "Zatím žádné svahilské moduly")
    else:
        st.info("No Swahili modules generated yet" if lang else "Zatím žádné svahilské moduly")
