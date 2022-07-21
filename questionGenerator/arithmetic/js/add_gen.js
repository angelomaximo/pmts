// Helping Functions
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// PART 1 -- SETUP
const difficultyInp = document.getElementById("difficultyInp");
const difficultyBtn = document.getElementById("difficultyBtn");

const questionLabel1 = document.getElementById("questionLabel1");
const questionLabel2 = document.getElementById("questionLabel2");
const questionLabel3 = document.getElementById("questionLabel3");
const questionLabel4 = document.getElementById("questionLabel4");
const questionLabel5 = document.getElementById("questionLabel5");


let difficulty;
var result1;
var result2;
var result3;
var result4;
var result5;


difficultyBtn.addEventListener('click', () => {
    difficulty = difficultyInp.value;


    result1 = getQuestion1(difficulty);
    result2 = getQuestion2(difficulty);
    result3 = getQuestion3(difficulty);
    result4 = getQuestion4(difficulty);
    result5 = getQuestion5(difficulty);


    questionLabel1.innerHTML = `${a} + ${b} = ?`;
    questionLabel2.innerHTML = `${c} + ${d} = ?`;
    questionLabel3.innerHTML = `${e} + ${f} = ?`;
    questionLabel4.innerHTML = `${g} + ${h} = ?`;
    questionLabel5.innerHTML = `${i} + ${j} = ?`;
})

// question 1
let a, b;
// question 2
let c, d;
// question 3
let e, f;
// question 4
let g, h;
// question 5
let i, j;

// you can put these inside one big function. Even export. Refactor and make them pure.

function getQuestion1(difficulty) {
    if (difficulty == 1) {
        a = getRandomNum(0, 10);
        b = getRandomNum(0, 10);
    } else if (difficulty == 2) {
        a = getRandomNum(10, 100);
        b = getRandomNum(10, 100);
    } else if (difficulty == 3) {
        a = getRandomNum(100, 1000);
        b = getRandomNum(100, 1000);
    } else if (difficulty == 4) {
        a = getRandomNum(1000, 10000);
        b = getRandomNum(1000, 10000);
    } else if (difficulty == 5) {
        a = getRandomNum(10000, 100000);
        b = getRandomNum(10000, 100000);
    }

    return a + b;
}

function getQuestion2(difficulty) {
    if (difficulty == 1) {
        c = getRandomNum(0, 10);
        d = getRandomNum(0, 10);
    } else if (difficulty == 2) {
        c = getRandomNum(10, 100);
        d = getRandomNum(10, 100);
    } else if (difficulty == 3) {
        c = getRandomNum(100, 1000);
        d = getRandomNum(100, 1000);
    } else if (difficulty == 4) {
        c = getRandomNum(1000, 10000);
        d = getRandomNum(1000, 10000);
    } else if (difficulty == 5) {
        c = getRandomNum(10000, 100000);
        d = getRandomNum(10000, 100000);
    }

    return c + d;
}

function getQuestion3(difficulty) {
    if (difficulty == 1) {
        e = getRandomNum(0, 10);
        f = getRandomNum(0, 10);
    } else if (difficulty == 2) {
        e = getRandomNum(10, 100);
        f = getRandomNum(10, 100);
    } else if (difficulty == 3) {
        e = getRandomNum(100, 1000);
        f = getRandomNum(100, 1000);
    } else if (difficulty == 4) {
        e = getRandomNum(1000, 10000);
        f = getRandomNum(1000, 10000);
    } else if (difficulty == 5) {
        e = getRandomNum(10000, 100000);
        f = getRandomNum(10000, 100000);
    }

    return e + f;
}

function getQuestion4(difficulty) {
    if (difficulty == 1) {
        g = getRandomNum(0, 10);
        h = getRandomNum(0, 10);
    } else if (difficulty == 2) {
        g = getRandomNum(10, 100);
        h = getRandomNum(10, 100);
    } else if (difficulty == 3) {
        g = getRandomNum(100, 1000);
        h = getRandomNum(100, 1000);
    } else if (difficulty == 4) {
        g = getRandomNum(1000, 10000);
        h = getRandomNum(1000, 10000);
    } else if (difficulty == 5) {
        g = getRandomNum(10000, 100000);
        h = getRandomNum(10000, 100000);
    }

    return g + h;
}

function getQuestion5(difficulty) {
    if (difficulty == 1) {
        i = getRandomNum(0, 10);
        j = getRandomNum(0, 10);
    } else if (difficulty == 2) {
        i = getRandomNum(10, 100);
        j = getRandomNum(10, 100);
    } else if (difficulty == 3) {
        i = getRandomNum(100, 1000);
        j = getRandomNum(100, 1000);
    } else if (difficulty == 4) {
        i = getRandomNum(1000, 10000);
        j = getRandomNum(1000, 10000);
    } else if (difficulty == 5) {
        i = getRandomNum(10000, 100000);
        j = getRandomNum(10000, 100000);
    }

    return i + j;
}

// PART 2 -- CHECK THE ANSWER
const answerInp1 = document.getElementById("answerInp1");
const submitBtn1 = document.getElementById("submitBtn1");
const output1 = document.getElementById("output1");

const answerInp2 = document.getElementById("answerInp2");
const submitBtn2 = document.getElementById("submitBtn2");
const output2 = document.getElementById("output2");

const answerInp3 = document.getElementById("answerInp3");
const submitBtn3 = document.getElementById("submitBtn3");
const output3 = document.getElementById("output3");

const answerInp4 = document.getElementById("answerInp4");
const submitBtn4 = document.getElementById("submitBtn4");
const output4 = document.getElementById("output4");

const answerInp5 = document.getElementById("answerInp5");
const submitBtn5 = document.getElementById("submitBtn5");
const output5 = document.getElementById("output5");


let answer1;
let answer2;
let answer3;
let answer4;
let answer5;


submitBtn1.addEventListener('click', () => {
    answer1 = answerInp1.value;
    checkAnswer(answer1, result1, output1);
})

submitBtn2.addEventListener('click', () => {
    answer2 = answerInp2.value;
    checkAnswer(answer2, result2, output2);
})

submitBtn3.addEventListener('click', () => {
    answer3 = answerInp3.value;
    checkAnswer(answer3, result3, output3);
})

submitBtn4.addEventListener('click', () => {
    answer4 = answerInp4.value;
    checkAnswer(answer4, result4, output4);
})

submitBtn5.addEventListener('click', () => {
    answer5 = answerInp5.value;
    checkAnswer(answer5, result5, output5);
})


function checkAnswer(answer, result, output) {
    if (answer == result) {
        output.innerHTML = "> RIGHT ANSWER"
    } else {
        output.innerHTML = "> Wrong answer, try again."
    }
}