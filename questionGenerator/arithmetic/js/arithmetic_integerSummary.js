// Get elements
const questionLabel = document.getElementById("questionLabel");
const answerElement = document.getElementById("answer");
const btn = document.getElementById("submitBtn");
const output = document.getElementById("output");




// Generate a random math question by probability
function getQuestion() {
    // Generate numbers
    const x = Math.floor(Math.random() * 1000);
    const y = Math.floor(Math.random() * 1000);

    const probab = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    console.log(probab);

    if (probab == 1) {
        return [`How much is ${x} + ${y} ?`, x + y];
    } else if (probab == 2) {
        return [`How much is ${x} - ${y} ?`, x - y];
    } else if (probab == 3) {
        return [`How much is ${x} * ${y} ?`, x * y];
    } else if (probab == 4) {
        // improve here
        return [`How much is ${x} / ${y} ?`, Math.round(x / y)];
    } else {
        alert(probab);
    }
}


const [question, result] = getQuestion()



questionLabel.innerHTML = question;




// Get answer and check answer
let answer;

function checkAnswer(answer, result) {
    if (answer == result) {
        output.innerHTML = "> RIGHT ANSWER!";
    } else if (answer != result) {
        output.innerHTML = "> Wrong answer, try again.";
    }
}

btn.addEventListener('click', () => {
    answer = answerElement.value;
    checkAnswer(answer, result);
});




