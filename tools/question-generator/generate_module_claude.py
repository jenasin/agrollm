"""
Generate Swahili Module using Claude (Anthropic API)
=====================================================
Usage: python generate_module_claude.py

Requires: pip install anthropic
Set your API key: export ANTHROPIC_API_KEY=your-key-here
"""

import anthropic
import json
import os
import re
import time
import sys

# Module definitions
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

def generate_level(client, module, level):
    """Generate 10 questions for a specific level using Claude"""

    prompt = f"""Generate 10 educational farming questions in SWAHILI (Kiswahili) for Kenya.

MODULE: {module['id']} - {module['sw_name']} ({module['name']}) {module['icon']}
LEVEL: {level} of 10 (1=easy, 10=advanced)

REQUIREMENTS:
1. ALL text MUST be in Swahili (Kiswahili) - no English!
2. Level {level} difficulty (1=beginner, 10=expert)
3. Kenyan context - local crops, animals, climate, farming practices
4. Each question has exactly 4 options with relevant emojis
5. Include encouraging explanations in Swahili ("Vizuri sana!", "Sawa kabisa!", "Umefanya vizuri!")

KENYAN CONTEXT:
- Crops: mahindi (maize), maharagwe (beans), chai (tea), kahawa (coffee), sukuma wiki, nyanya (tomatoes), viazi (potatoes), ndizi (bananas)
- Animals: ng'ombe (cattle), mbuzi (goats), kuku (chickens), kondoo (sheep), nguruwe (pigs)
- Soil types: udongo wa mfinyanzi (clay), mchanga (sand), tifutifu (loam)
- Seasons: masika (long rains), vuli (short rains), kiangazi (dry season)
- Regions: Central Kenya, Rift Valley, Coast, Western, Nyanza

OUTPUT FORMAT - Return ONLY a valid JSON array, no markdown, no explanation:
[
  {{
    "question": "Swahili question text here?",
    "type": "multiple_choice",
    "options": [
      {{"text": "Jibu sahihi (correct answer)", "icon": "{module['icon']}", "isCorrect": true}},
      {{"text": "Jibu mbaya 1", "icon": "🔴", "isCorrect": false}},
      {{"text": "Jibu mbaya 2", "icon": "🔴", "isCorrect": false}},
      {{"text": "Jibu mbaya 3", "icon": "🔴", "isCorrect": false}}
    ],
    "explanation": "Maelezo ya kina kwa Kiswahili - Vizuri sana!"
  }}
]

IMPORTANT: Generate EXACTLY 10 questions, ALL in Swahili. Return ONLY the JSON array."""

    message = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=4096,
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    text = message.content[0].text

    # Extract JSON from response
    # Try to find JSON array
    if text.strip().startswith('['):
        json_str = text
    else:
        # Look for JSON in code blocks
        match = re.search(r'```(?:json)?\s*([\s\S]*?)\s*```', text)
        if match:
            json_str = match.group(1)
        else:
            # Try to find array pattern
            array_match = re.search(r'\[[\s\S]*\]', text)
            if array_match:
                json_str = array_match.group()
            else:
                raise ValueError("Could not find JSON array in response")

    return json.loads(json_str)

def generate_module(client, module_id):
    """Generate all 10 levels for a module"""
    module = next((m for m in MODULES if m['id'] == module_id), None)
    if not module:
        print(f"❌ Module {module_id} not found!")
        return None

    print(f"\n{'='*60}")
    print(f"🌱 Generating Module {module['id']}: {module['sw_name']}")
    print(f"   ({module['name']}) {module['icon']}")
    print(f"{'='*60}")

    all_questions = {}

    for level in range(1, 11):
        print(f"  Level {level}/10...", end=" ", flush=True)
        try:
            questions = generate_level(client, module, level)
            all_questions[f"module{module['id']}_level{level}"] = questions
            print(f"✅ {len(questions)} maswali (questions)")
            time.sleep(1)  # Rate limiting
        except Exception as e:
            print(f"❌ Error: {e}")
            all_questions[f"module{module['id']}_level{level}"] = []

    # Save to file
    total = sum(len(q) for q in all_questions.values())

    js_content = f"""// Module {module['id']}: {module['sw_name']} ({module['name']}) - {total} maswali
// Lugha: Kiswahili (Swahili)
// Nchi: Kenya
// {module['icon']} Generated for AgroLinguo using Claude

const MODULE{module['id']}_QUESTIONS_SW = {json.dumps(all_questions, indent=2, ensure_ascii=False)};

window.MODULE{module['id']}_QUESTIONS_SW = MODULE{module['id']}_QUESTIONS_SW;
"""

    out_dir = get_questions_dir()
    os.makedirs(out_dir, exist_ok=True)

    file_path = os.path.join(out_dir, f"questions_module{module['id']}.js")
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(js_content)

    print(f"\n{'='*60}")
    print(f"✅ Module {module['id']} complete!")
    print(f"📊 Total: {total} questions")
    print(f"📁 Saved: {file_path}")
    print(f"{'='*60}")

    return all_questions

def main():
    print("""
╔══════════════════════════════════════════════════════════════╗
║  🌱 AgroLinguo - Swahili Module Generator (Claude)          ║
║  Generate farming education modules in Kiswahili            ║
╚══════════════════════════════════════════════════════════════╝
""")

    # Get API key
    api_key = os.getenv('ANTHROPIC_API_KEY')

    if not api_key:
        print("❌ ANTHROPIC_API_KEY not found!")
        print("")
        print("Set it with:")
        print("  export ANTHROPIC_API_KEY=your-key-here")
        print("")
        api_key = input("Or enter your Anthropic API key now: ").strip()

        if not api_key:
            print("❌ No API key provided. Exiting.")
            return

    # Initialize client
    client = anthropic.Anthropic(api_key=api_key)

    # Show available modules
    print("\n📚 Available Modules:")
    for m in MODULES:
        print(f"  {m['id']:2}. {m['icon']} {m['sw_name']} ({m['name']})")

    print("\n" + "-"*60)

    # Get module selection
    if len(sys.argv) > 1:
        try:
            module_id = int(sys.argv[1])
        except:
            module_id = None
    else:
        try:
            choice = input("\nEnter module number (1-10) or 'all' for all modules: ").strip()
            if choice.lower() == 'all':
                module_id = 'all'
            else:
                module_id = int(choice)
        except:
            module_id = 1

    # Generate
    if module_id == 'all':
        print("\n🚀 Generating ALL 10 modules...")
        for m in MODULES:
            generate_module(client, m['id'])
        print("\n✅ All modules complete!")
    elif 1 <= module_id <= 10:
        generate_module(client, module_id)
    else:
        print(f"❌ Invalid module: {module_id}")
        return

    print("\n📁 Files saved to: questions/sw/")
    print("🎉 Done!")

if __name__ == "__main__":
    main()
