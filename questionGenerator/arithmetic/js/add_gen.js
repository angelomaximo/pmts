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

difficultyBtn.addEventListener('click', () => {
    difficulty = difficultyInp.value;

    result1 = getArithmeticQuestion(difficulty, a, b, questionLabel1, "+");
    result2 = getArithmeticQuestion(difficulty, c, d, questionLabel2, "+");
    result3 = getArithmeticQuestion(difficulty, e, f, questionLabel3, "+");
    result4 = getArithmeticQuestion(difficulty, g, h, questionLabel4, "+");
    result5 = getArithmeticQuestion(difficulty, i, j, questionLabel5, "+");
});

function getArithmeticQuestion(difficulty, x, y, questionLabel, operand) {
    if (difficulty == 1) {
        x = getRandomNum(0, 10);
        y = getRandomNum(0, 10);
    } else if (difficulty == 2) {
        x = getRandomNum(10, 100);
        y = getRandomNum(10, 100);
    } else if (difficulty == 3) {
        x = getRandomNum(100, 1000);
        y = getRandomNum(100, 1000);
    } else if (difficulty == 4) {
        x = getRandomNum(1000, 10000);
        y = getRandomNum(1000, 10000);
    } else if (difficulty == 5) {
        x = getRandomNum(10000, 100000);
        y = getRandomNum(10000, 100000);
    }

    questionLabel.innerHTML = `${x} ${operand} ${y} = ?`;

    if (operand == "+" || operand == "plus" || operand == "add" || operand == "addition") {
        return x + y;
    } else if (operand == "-" || operand == "minus" || operand == "subtract" || operand == "subtraction") {
        return x - y;
    } else if (operand == "*" || operand == "times" || operand == "multiply" || operand == "multiplication") {
        return x * y;
    } else if (operand == "/" || operand == "divide" || operand == "division") {
        return x / y;
    } else {
        console.log("Input a primitive operand");
    }
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