# AgroLinguo - Výzkumná dokumentace

## Popis projektu

AgroLinguo je mobilní vzdělávací aplikace pro keňské venkovské děti zaměřená na výuku zemědělských praktik ve Swahilštině. Aplikace používá gamifikovaný přístup inspirovaný Duolingo s adaptivním učením.

---

## Metodologie generování otázek

### Prompt pro AI generování

Otázky byly generovány pomocí následujícího promptu:

```
Vytvoř [počet] otázek v Swahilštině pro keňské venkovské děti (10-15 let)
o tématu [název modulu].

Požadavky:
1. Jazyk: Jednoduchá Swahilština srozumitelná dětem
2. Kontext: Venkovské zemědělství v Keni
3. Praktičnost: Otázky musí být aplikovatelné v reálném životě

Formát každé otázky:
{
    question: "Otázka v Swahilštině?",
    options: [
        { text: "🌱 Správná odpověď", isCorrect: true },
        { text: "❌ Špatná odpověď 1", isCorrect: false },
        { text: "❌ Špatná odpověď 2", isCorrect: false },
        { text: "❌ Špatná odpověď 3", isCorrect: false }
    ]
}

Pravidla pro odpovědi:
- Každá odpověď začíná relevantním emoji
- Vždy 4 možnosti, právě 1 správná
- Špatné odpovědi musí být věrohodné ale jasně nesprávné
- Žádné chytáky nebo matoucí formulace
```

### Témata modulů

| ID | Modul | Swahilština | Levelů | Otázek |
|----|-------|-------------|--------|--------|
| 1 | Soil Health | Afya ya Udongo | 10 | 70 |
| 2 | Water Management | Usimamizi wa Maji | 10 | 70 |
| 3 | Crop Protection | Ulinzi wa Mazao | 10 | 70 |
| 4 | Sustainable Farming | Kilimo Endelevu | 10 | 70 |
| 5 | Plant Nutrition | Lishe ya Mimea | 10 | 70 |
| 6 | Harvest & Storage | Mavuno na Uhifadhi | 10 | 70 |
| 7 | Farm Tools | Zana za Shamba | 10 | 70 |
| 8 | Animal Husbandry | Ufugaji | 10 | 70 |
| 9 | Agroforestry | Kilimo Mseto | 10 | 70 |
| 10 | Farm Business | Biashara ya Kilimo | 10 | 70 |
| 11 | Cashew Farming | Kilimo cha Korosho | 10 | 70 |
| 12 | Drought & Climate | Ukame na Hali ya Hewa | 10 | 70 |
| 13 | Maize Farming | Kilimo cha Mahindi | 5 | 35 |
| 14 | Tomato Farming | Kilimo cha Nyanya | 5 | 35 |
| 15 | Bean Farming | Kilimo cha Maharagwe | 5 | 35 |

---

## Struktura testu

### Parametry testu

| Parametr | Hodnota |
|----------|---------|
| Délka testu | 5 minut |
| Otázek na level | 7 |
| Požadovaná úspěšnost | 80% |
| Hvězdy | 90%=3⭐, 80%=2⭐, 60%=1⭐ |

### Průběh testu

1. **Registrace:** Uživatel zadá jméno
2. **Start:** Kliknutí na "Anza Sasa" spustí 5min časovač
3. **Výběr modulu:** Uživatel vybere vzdělávací modul
4. **Výběr levelu:** Postupné odemykání (level N vyžaduje dokončení N-1)
5. **Odpovídání:** 7 otázek s výběrem ze 4 možností
6. **Vyhodnocení:**
   - ≥80% = postup na další level
   - <80% = opakování levelu
7. **Ukončení:** Automaticky po 5 min nebo tlačítkem "MALIZA TEST"

---

## Sbíraná data a statistiky

### 1. Data z každé odpovědi

```javascript
{
    timestamp: 1701234567890,        // Unix timestamp
    elapsedMs: 45000,               // Čas od začátku testu (ms)
    moduleId: 11,                   // ID modulu
    levelNum: 1,                    // Číslo levelu
    questionIndex: 0,               // Index otázky v levelu
    isCorrect: true,                // Správnost odpovědi
    responseTimeMs: 3200,           // Čas na odpověď (ms)
    questionText: "Korosho ni zao la aina gani?",
    selectedAnswer: "Zao la kudumu (mti)",
    correctAnswer: "Zao la kudumu (mti)"
}
```

### 2. Data z každého pokusu o level

```javascript
{
    timestamp: 1701234600000,
    elapsedMs: 78000,               // Čas od začátku testu
    moduleId: 11,
    levelNum: 1,
    score: 6,                       // Počet správných
    total: 7,                       // Celkem otázek
    percentage: 86,                 // Úspěšnost v %
    passed: true                    // Splněno (≥80%)
}
```

### 3. Souhrnná data session (při ukončení testu)

```javascript
{
    id: 1701234500000,              // ID session
    name: "Juma Ochieng_test",      // Jméno účastníka
    endTime: 1701234800000,
    duration: 300000,               // Délka v ms (5 min)

    // Základní statistiky
    totalQuestions: 28,             // Celkem zodpovězených otázek
    correctAnswers: 23,             // Správných odpovědí
    incorrectAnswers: 5,            // Špatných odpovědí
    accuracy: 82,                   // Celková úspěšnost %
    avgResponseTimeMs: 3400,        // Průměrný čas odpovědi

    // Statistiky levelů
    uniqueModules: 2,               // Počet navštívených modulů
    uniqueLevels: 4,                // Počet navštívených levelů
    totalLevelAttempts: 5,          // Celkem pokusů o levely
    passedLevels: 4,                // Úspěšně dokončené levely
    failedLevels: 1,                // Neúspěšné pokusy

    // Detailní data
    answerHistory: [...],           // Pole všech odpovědí
    levelAttempts: [...],           // Pole všech pokusů o level
    moduleStats: {                  // Statistiky per modul
        "module_11": {
            total: 14,
            correct: 12,
            incorrect: 2,
            totalTimeMs: 48000,
            levels: {
                "level_1": { total: 7, correct: 6, ... },
                "level_2": { total: 7, correct: 6, ... }
            }
        }
    },
    dailyStats: {...},              // Denní statistiky
    language: "sw"                  // Jazyk testu
}
```

---

## Ukázkové otázky

### Modul: Kilimo cha Korosho (Cashew Farming) - Level 1

**Otázka 1:**
```
Korosho ni zao la aina gani?
(Jaký typ plodiny je kešu?)

A) 🌳 Zao la kudumu (mti) ✓
B) 🌾 Zao la msimu
C) 🥬 Mboga
D) 🌿 Nyasi
```

**Otázka 2:**
```
Korosho hutoka wapi asili yake?
(Odkud kešu pochází?)

A) 🇧🇷 Brazil (Amerika ya Kusini) ✓
B) 🇮🇳 India
C) 🇹🇿 Tanzania
D) 🇨🇳 China
```

**Otázka 3:**
```
Sehemu gani ya korosho inaliwa?
(Jaká část kešu se jí?)

A) 🥜 Mbegu (nut) na tunda (apple) ✓
B) 🍃 Majani tu
C) 🪵 Gome la mti
D) 🌸 Maua tu
```

**Otázka 4:**
```
Mti wa korosho unaweza kuishi miaka mingapi?
(Jak dlouho může strom kešu žít?)

A) 📅 Miaka 30-50 ✓
B) 📅 Miaka 5-10
C) 📅 Miaka 1-2
D) 📅 Miaka 100+
```

**Otázka 5:**
```
Korosho hustawi vizuri katika hali ya hewa gani?
(V jakém klimatu kešu nejlépe roste?)

A) ☀️ Joto na unyevu wa wastani ✓
B) ❄️ Baridi sana
C) 🌧️ Mvua nyingi sana mwaka mzima
D) 🏔️ Milimani kwenye theluji
```

---

## Export a analýza dat

### Způsoby exportu

1. **JSON Export:** Statistics tab → 📋 Export JSON
2. **CSV Export:** Statistics tab → 📊 Export CSV

### Lokální úložiště (localStorage)

| Klíč | Obsah |
|------|-------|
| `agrolinguo_sessions` | Pole všech dokončených sessions |
| `agrolinguo_research_stats` | Aktuální statistiky probíhající session |
| `agrolinguo_save` | Uložený herní postup |
| `agrolinguo_lang` | Zvolený jazyk (en/sw) |

### Ukázka exportovaných dat

```json
{
  "sessions": [
    {
      "name": "Juma Ochieng_test",
      "accuracy": 86,
      "totalQuestions": 21,
      "passedLevels": 3,
      "failedLevels": 1,
      "avgResponseTimeMs": 4200
    }
  ],
  "summary": {
    "totalParticipants": 10,
    "avgAccuracy": 83.5,
    "avgQuestionsPerSession": 26.2,
    "avgTimePerQuestion": 3.8
  }
}
```

---

## Testovací účastníci (demo data)

| Jméno | Otázky | Správně | Přesnost | Levely OK | Levely Fail |
|-------|--------|---------|----------|-----------|-------------|
| Juma Ochieng_test | 21 | 18 | 86% | 3 | 1 |
| Amina Wanjiku_test | 28 | 22 | 79% | 3 | 2 |
| Baraka Mwangi_test | 14 | 12 | 86% | 2 | 0 |
| Fatuma Akinyi_test | 35 | 31 | 89% | 5 | 1 |
| Hassan Kipchoge_test | 21 | 15 | 71% | 2 | 3 |
| Zawadi Mutua_test | 28 | 25 | 89% | 4 | 0 |
| Kiprop Otieno_test | 17 | 14 | 82% | 2 | 1 |
| Neema Kamau_test | 42 | 38 | 90% | 6 | 1 |
| Salim Njoroge_test | 25 | 19 | 76% | 3 | 2 |
| Wambui Karanja_test | 31 | 27 | 87% | 4 | 1 |

---

## Technické poznámky

### Použité technologie
- React 18 (standalone)
- Tailwind CSS
- LocalStorage pro persistenci
- PWA ready (offline support)

### Klíčové soubory
- `index.html` - hlavní aplikace
- `course_config.js` - konfigurace modulů
- `questions.js` - loader otázek
- `questions/sw/` - Swahilské otázky
- `neural_engine.js` - adaptivní učení

---

*Vytvořeno pro výzkumný projekt AgroLinguo - vzdělávání keňských dětí v zemědělství*
