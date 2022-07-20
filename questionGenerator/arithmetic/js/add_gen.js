// Helping Functions
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// PART 1 -- SETUP
const difficultyInp = document.getElementById("difficultyInp");
const difficultyBtn = document.getElementById("difficultyBtn");
const questionLabel = document.getElementById("questionLabel");

let difficulty;
let result;

difficultyBtn.addEventListener('click', () => {
    difficulty = difficultyInp.value;
    result = getQuestion(difficulty);
    questionLabel.innerHTML = `${a} + ${b} = ?`;
})

// Num of questions
let a, b;
let c, d;
let e, f;
let g, h;

function getQuestion(difficulty) {
    if (difficulty == 1) {
        a = getRandomNum(0, 10);
        b = getRandomNum(0, 10);

        c = getRandomNum(0, 10);
        d = getRandomNum(0, 10);

        e = getRandomNum(0, 10);
        f = getRandomNum(0, 10);

        g = getRandomNum(0, 10);
        h = getRandomNum(0, 10);
    } else if (difficulty == 2) {
        a = getRandomNum(10, 100);
        b = getRandomNum(10, 100);

        c = getRandomNum(10, 100);
        d = getRandomNum(10, 100);

        e = getRandomNum(10, 100);
        f = getRandomNum(10, 100);

        g = getRandomNum(10, 100);
        h = getRandomNum(10, 100);
    } else if (difficulty == 3) {
        a = getRandomNum(100, 1000);
        b = getRandomNum(100, 1000);

        c = getRandomNum(100, 1000);
        d = getRandomNum(100, 1000);

        e = getRandomNum(100, 1000);
        f = getRandomNum(100, 1000);

        g = getRandomNum(100, 1000);
        h = getRandomNum(100, 1000);
    } else if (difficulty == 4) {
        a = getRandomNum(1000, 10000);
        b = getRandomNum(1000, 10000);

        c = getRandomNum(1000, 10000);
        d = getRandomNum(1000, 10000);

        e = getRandomNum(1000, 10000);
        f = getRandomNum(1000, 10000);

        g = getRandomNum(1000, 10000);
        h = getRandomNum(1000, 10000);
    } else if (difficulty == 5) {
        a = getRandomNum(10000, 100000);
        b = getRandomNum(10000, 100000);

        c = getRandomNum(10000, 100000);
        d = getRandomNum(10000, 100000);

        e = getRandomNum(10000, 100000);
        f = getRandomNum(10000, 100000);

        g = getRandomNum(10000, 100000);
        h = getRandomNum(10000, 100000);
    } else {
        alert("Input: 1-5");
    }

    return a + b;
}

// PART 2 -- CHECK THE ANSWER
const answerInp = document.getElementById("answerInp");
const submitBtn = document.getElementById("submitBtn");
const output = document.getElementById("output");

let answer;

submitBtn.addEventListener('click', () => {
    answer = answerInp.value;
    checkAnswer(answer, result);
})

function checkAnswer(answer, result) {
    if (answer == result) {
        output.innerHTML = "> RIGHT ANSWER"
    } else {
        output.innerHTML = "> Wrong answer, try again."
    }
}