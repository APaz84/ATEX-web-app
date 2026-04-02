const questions = [
    {
        question: "What is ATEX Zone 0?",
        options: [
            "Area where an explosive atmosphere is present continuously or long periods",
            "Area where an explosive atmosphere is unlikely to occur",
            "Area where only dust hazards exist",
            "Area with mechanical spark risk only"
        ],
        correct: 0,
        explanation: "Zone 0 = continuous or long-duration presence of explosive gas atmosphere."
    },
    {
        question: "Which element is NOT part of the explosion triangle?",
        options: [
            "Fuel",
            "Oxygen",
            "Ignition source",
            "Pressure relief"
        ],
        correct: 3,
        explanation: "Pressure relief is a mitigation measure, not part of the fire/explosion triangle."
    },
    {
        question: "Zone 21 is typically defined as:",
        options: [
            "Gas zone with frequent occurrence",
            "Dust zone with occasional occurrence",
            "Dust zone with continuous presence",
            "Gas zone with rare occurrence"
        ],
        correct: 1,
        explanation: "Zone 21 = dust explosive atmosphere likely to occur occasionally."
    },
    {
        question: "What does Category 1 equipment mean?",
        options: [
            "Highest protection level for all zones including Zone 0",
            "Only suitable for Zone 22",
            "For mechanical equipment only",
            "Suitable only for dust zones"
        ],
        correct: 0,
        explanation: "Category 1 equipment is suitable for Zones 0, 20 (highest safety)."
    },
    {
        question: "What is the lowest ignition temperature class (hottest)?",
        options: ["T1", "T3", "T5", "T6"],
        correct: 0,
        explanation: "T1 = up to 450°C surface temp (highest allowable)."
    },
    {
        question: "Dust hazard zones start with which number?",
        options: ["0", "1", "2", "20"],
        correct: 3,
        explanation: "Dust zones are 20, 21, 22."
    },
    {
        question: "Minimum Ignition Energy (MIE) refers to:",
        options: [
            "Energy required to ignite a flammable mixture",
            "Minimum energy to start a motor",
            "Energy required to heat equipment",
            "Electrical consumption of devices"
        ],
        correct: 0,
        explanation: "MIE defines the spark energy needed to trigger ignition."
    },
    {
        question: "ATEX marking 'Ex d' means:",
        options: [
            "Dust-tight",
            "Increased safety",
            "Flameproof enclosure",
            "Intrinsic safety"
        ],
        correct: 2,
        explanation: "'Ex d' refers to flameproof construction."
    },
    {
        question: "Which zone implies rare presence of an explosive atmosphere?",
        options: ["Zone 0", "Zone 1", "Zone 2", "Zone 20"],
        correct: 2,
        explanation: "Zone 2 = gas atmosphere unlikely or short duration only."
    },
    {
        question: "Which PPE is typically required in ATEX zones?",
        options: [
            "Synthetic fiber clothing",
            "Antistatic clothing and footwear",
            "Loose metal jewelry",
            "Non-grounded tools"
        ],
        correct: 1,
        explanation: "Electrostatic discharge must be minimized using antistatic PPE."
    },
    {
        question: "What does ATEX stand for?",
        options: [
            "Atmosphères Explosibles",
            "Automatic Explosion System",
            "Anti-Thermal Equipment",
            "Atmospheric Testing Experiment"
        ],
        correct: 0,
        explanation: "ATEX = Atmosphères Explosibles (EU directive for explosive atmospheres)."
    },
    {
        question: "Which ignition source is common in ATEX zones?",
        options: [
            "Cold surfaces",
            "Static electricity",
            "Low oxygen levels",
            "Only chemical reactions"
        ],
        correct: 1,
        explanation: "Static electricity is a major ignition source in explosive atmospheres."
    }
];

let current = 0;
let score = 0;

function loadQuestion() {
    const q = questions[current];
    document.getElementById("question").textContent = q.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(selected) {
    const q = questions[current];
    const optionButtons = document.querySelectorAll("#options button");

    optionButtons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === q.correct) btn.classList.add("correct");
        else if (index === selected) btn.classList.add("wrong");
    });

    if (selected === q.correct) score++;

    // Show explanation
    const exp = document.createElement("p");
    exp.style.marginTop = "15px";
    exp.innerHTML = `<strong>Explanation:</strong> ${q.explanation}`;
    document.getElementById("options").appendChild(exp);
}

function nextQuestion() {
    current++;
    if (current < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-box").classList.add("hidden");
    document.getElementById("result-box").classList.remove("hidden");
    document.getElementById("score").textContent = `${score} / ${questions.length}`;
}

function restartQuiz() {
    current = 0;
    score = 0;
    document.getElementById("result-box").classList.add("hidden");
    document.getElementById("quiz-box").classList.remove("hidden");
    loadQuestion();
}

window.onload = loadQuestion;
