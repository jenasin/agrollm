"""
Generate Module 1 in Swahili
"""
import openai
import json
import os
import re
import time

MODULE = {"id": 1, "name": "Soil & Basics", "sw_name": "Udongo na Misingi", "icon": "🌱"}

def get_api_key():
    # Check environment variable
    key = os.getenv('OPENAI_API_KEY')
    if key:
        return key
    # Check common file locations
    for path in ['~/.openai_key', '.env']:
        try:
            with open(os.path.expanduser(path)) as f:
                content = f.read()
                if 'OPENAI_API_KEY=' in content:
                    return content.split('OPENAI_API_KEY=')[1].split('\n')[0].strip()
                return content.strip()
        except:
            pass
    return None

def generate_level(client, level):
    prompt = f"""Generate 10 educational farming questions in SWAHILI (Kiswahili) for Kenya.

MODULE: 1 - Udongo na Misingi (Soil & Basics) 🌱
LEVEL: {level} of 10 (1=easy, 10=advanced)

REQUIREMENTS:
1. ALL text MUST be in Swahili (Kiswahili)
2. Level {level} difficulty
3. Kenyan context - local crops, animals, climate
4. 4 options per question with emojis
5. Encouraging explanations ("Vizuri sana!", "Sawa kabisa!")

KENYAN CROPS: mahindi, maharagwe, chai, kahawa, sukuma wiki, nyanya, viazi
ANIMALS: ng'ombe, mbuzi, kuku, kondoo
SOIL TYPES: udongo wa mfinyanzi (clay), mchanga (sand), tifutifu (loam)

Level {level} Topics:
{"- Basics: What is soil, soil colors, why soil is important" if level <= 3 else ""}
{"- Intermediate: NPK, composting, soil pH, crop rotation" if 4 <= level <= 6 else ""}
{"- Advanced: Soil testing, erosion control, microorganisms" if level >= 7 else ""}

OUTPUT FORMAT (JSON array only):
[
  {{
    "question": "Swahili question?",
    "type": "multiple_choice",
    "options": [
      {{"text": "Jibu sahihi", "icon": "🌱", "isCorrect": true}},
      {{"text": "Jibu la kwanza", "icon": "❌", "isCorrect": false}},
      {{"text": "Jibu la pili", "icon": "❌", "isCorrect": false}},
      {{"text": "Jibu la tatu", "icon": "❌", "isCorrect": false}}
    ],
    "explanation": "Maelezo kwa Kiswahili - Vizuri sana!"
  }}
]

Generate exactly 10 questions in Swahili."""

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

    return json.loads(json_str)

def main():
    api_key = get_api_key()
    if not api_key:
        print("❌ No OPENAI_API_KEY found!")
        print("Set it: export OPENAI_API_KEY=your-key")
        return

    client = openai.OpenAI(api_key=api_key)

    print("🌱 Generating Module 1: Udongo na Misingi (Swahili)")
    print("=" * 50)

    all_questions = {}

    for level in range(1, 11):
        print(f"  Level {level}/10...", end=" ", flush=True)
        try:
            questions = generate_level(client, level)
            all_questions[f"module1_level{level}"] = questions
            print(f"✓ {len(questions)} maswali")
            time.sleep(1)
        except Exception as e:
            print(f"✗ Error: {e}")
            all_questions[f"module1_level{level}"] = []

    # Save
    total = sum(len(q) for q in all_questions.values())

    js_content = f"""// Module 1: Udongo na Misingi (Soil & Basics) - {total} maswali
// Lugha: Kiswahili (Swahili)
// Nchi: Kenya
// 🌱 Generated for AgroLinguo

const MODULE1_QUESTIONS_SW = {json.dumps(all_questions, indent=2, ensure_ascii=False)};

window.MODULE1_QUESTIONS_SW = MODULE1_QUESTIONS_SW;
"""

    out_dir = os.path.join(os.path.dirname(__file__), "..", "..", "questions", "sw")
    os.makedirs(out_dir, exist_ok=True)

    out_path = os.path.join(out_dir, "questions_module1.js")
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(js_content)

    print("=" * 50)
    print(f"✅ Done! {total} questions generated")
    print(f"📁 Saved: {out_path}")

if __name__ == "__main__":
    main()
