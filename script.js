const questions = [
    {
        question: "Wie sagt man 'Hallo' auf Spanisch?",
        options: ["Hola", "Adiós", "Gracias"],
        answer: "Hola"
    },
    {
        question: "Was bedeutet 'Uno'?",
        options: ["1", "2", "3"],
        answer: "1"
    },
    {
        question: "Welche Farbe ist 'Rojo'?",
        options: ["Blau", "Rot", "Grün"],
        answer: "Rot"
    },
    {
        question: "Wie heißt der Montag auf Spanisch?",
        options: ["Lunes", "Martes", "Miércoles"],
        answer: "Lunes"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionButtons = Array.from(document.querySelectorAll('.quiz-option'));
const resultElement = document.getElementById('result');
const counterElement = document.getElementById('question-counter');
const scoreElement = document.getElementById('score');

function updateStatus() {
    counterElement.textContent = `Frage ${currentQuestion + 1} von ${questions.length}`;
    scoreElement.textContent = `Punkte: ${score}`;
}

function loadQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    optionButtons.forEach((button, index) => {
        button.textContent = q.options[index];
        button.disabled = false;
    });
    resultElement.textContent = '';
    updateStatus();
}

function showResult(message, correct = true) {
    resultElement.textContent = message;
    resultElement.style.color = correct ? '#1b6a3a' : '#b72d2d';
}

function checkAnswer(selected) {
    const q = questions[currentQuestion];
    optionButtons.forEach(button => button.disabled = true);

    if (selected === q.answer) {
        score += 1;
        showResult('Richtig! Gut gemacht.');
    } else {
        showResult(`Falsch. Die richtige Antwort ist: ${q.answer}`, false);
    }

    currentQuestion = (currentQuestion + 1) % questions.length;
    updateStatus();
    setTimeout(loadQuestion, 1800);
}

optionButtons.forEach(button => {
    button.addEventListener('click', () => checkAnswer(button.textContent));
});

loadQuestion();
