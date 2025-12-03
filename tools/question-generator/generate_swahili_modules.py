"""
Swahili Module Generator
========================
Generates all 10 modules in Swahili (Kiswahili) for Kenya.
Run: python generate_swahili_modules.py
"""

import openai
import json
import os
import re
import time

# Module definitions from course_config.js
MODULES = [
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

def get_questions_dir():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    return os.path.join(script_dir, "..", "..", "questions", "sw")

def generate_module_questions(client, module, num_questions=100, questions_per_batch=10):
    """Generate questions for a module in batches"""
    all_questions = {}

    # Generate 10 levels with 10 questions each
    for level in range(1, 11):
        print(f"  Generating level {level}...")

        prompt = f"""Generate {questions_per_batch} educational farming questions in SWAHILI (Kiswahili) for Kenya.

MODULE: {module['id']} - {module['name']} ({module['sw_name']})
LEVEL: {level} of 10 (difficulty increases with level)
ICON: {module['icon']}

TARGET AUDIENCE:
- Country: Kenya
- Language: Swahili (Kiswahili)
- Target: Farmers and agricultural students

REQUIREMENTS:
1. ALL questions, options, and explanations MUST be in Swahili
2. Questions should match level {level} difficulty (1=easy, 10=advanced)
3. Use Kenyan context - local crops, animals, climate
4. Include practical farming knowledge
5. Each question has 4 options with emojis
6. Explanations should be encouraging ("Vizuri sana!", "Sawa kabisa!")

LOCAL CONTEXT FOR KENYA:
- Crops: mahindi (maize), maharagwe (beans), chai (tea), kahawa (coffee), sukuma wiki, nyanya (tomatoes), viazi (potatoes)
- Animals: ng'ombe (cattle), mbuzi (goats), kuku (chickens), kondoo (sheep)
- Regions: Central Kenya, Rift Valley, Coast, Western Kenya
- Climate: Long rains (masika), short rains (vuli), dry season (kiangazi)

OUTPUT FORMAT (JSON array only, no markdown):
[
  {{
    "question": "Swahili question here?",
    "type": "multiple_choice",
    "options": [
      {{"text": "Correct answer in Swahili", "icon": "{module['icon']}", "isCorrect": true}},
      {{"text": "Wrong answer 1", "icon": "❌", "isCorrect": false}},
      {{"text": "Wrong answer 2", "icon": "❌", "isCorrect": false}},
      {{"text": "Wrong answer 3", "icon": "❌", "isCorrect": false}}
    ],
    "explanation": "Swahili explanation with encouragement"
  }}
]

Generate exactly {questions_per_batch} questions in Swahili for level {level}."""

        try:
            response = client.chat.completions.create(
                model="gpt-4o",
                messages=[
                    {"role": "system", "content": "You are an expert agricultural educator who speaks fluent Swahili. Generate ALL content in Kiswahili. Focus on practical farming knowledge for Kenya."},
                    {"role": "user", "content": prompt}
                ],
                temperature=0.8
            )

            text = response.choices[0].message.content

            # Extract JSON
            match = re.search(r'```(?:json)?\s*([\s\S]*?)\s*```', text)
            json_str = match.group(1) if match else text

            if not json_str.strip().startswith('['):
                array_match = re.search(r'\[[\s\S]*\]', json_str)
                if array_match:
                    json_str = array_match.group()

            questions = json.loads(json_str)

            level_key = f"module{module['id']}_level{level}"
            all_questions[level_key] = questions

            print(f"    ✓ Generated {len(questions)} questions")
            time.sleep(1)  # Rate limiting

        except Exception as e:
            print(f"    ✗ Error: {e}")
            all_questions[f"module{module['id']}_level{level}"] = []

    return all_questions

def save_module(module, questions):
    """Save module to JavaScript file"""
    questions_dir = get_questions_dir()
    os.makedirs(questions_dir, exist_ok=True)

    file_path = os.path.join(questions_dir, f"questions_module{module['id']}.js")

    # Count total questions
    total = sum(len(q) for q in questions.values())

    js_content = f"""// Module {module['id']}: {module['sw_name']} ({module['name']}) - {total} maswali (questions)
// Lugha: Kiswahili (Swahili)
// Nchi: Kenya
// {module['icon']} Generated for AgroLinguo

const MODULE{module['id']}_QUESTIONS_SW = {json.dumps(questions, indent=4, ensure_ascii=False)};

window.MODULE{module['id']}_QUESTIONS_SW = MODULE{module['id']}_QUESTIONS_SW;
"""

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(js_content)

    print(f"  💾 Saved to: {file_path}")
    return file_path

def main():
    # Get API key from environment
    api_key = os.environ.get('OPENAI_API_KEY')

    if not api_key:
        print("❌ No OPENAI_API_KEY environment variable set!")
        print("Set it with: export OPENAI_API_KEY='your-key'")
        return

    client = openai.OpenAI(api_key=api_key)

    print("🌱 AgroLinguo - Swahili Module Generator")
    print("=" * 50)
    print(f"Generating modules 2-10 with 100 questions each")
    print(f"Output: questions/sw/")
    print("=" * 50)

    # Skip module 1 (already exists), generate modules 2-10
    for module in MODULES[1:]:  # Start from index 1 (module 2)
        print(f"\n📚 Module {module['id']}: {module['sw_name']} {module['icon']}")

        questions = generate_module_questions(client, module)
        save_module(module, questions)

    print("\n" + "=" * 50)
    print("✅ All modules generated!")
    print("📁 Files saved to: questions/sw/")

if __name__ == "__main__":
    main()
