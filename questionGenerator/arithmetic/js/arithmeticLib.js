// // Helping Functions
// function getRandomNum(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function getArithmeticQuestion(difficulty, x, y, questionLabel, operand) {
//     if (difficulty == 1) {
//         x = getRandomNum(0, 10);
//         y = getRandomNum(0, 10);
//     } else if (difficulty == 2) {
//         x = getRandomNum(10, 100);
//         y = getRandomNum(10, 100);
//     } else if (difficulty == 3) {
//         x = getRandomNum(100, 1000);
//         y = getRandomNum(100, 1000);
//     } else if (difficulty == 4) {
//         x = getRandomNum(1000, 10000);
//         y = getRandomNum(1000, 10000);
//     } else if (difficulty == 5) {
//         x = getRandomNum(10000, 100000);
//         y = getRandomNum(10000, 100000);
//     }

//     questionLabel.innerHTML = `${x} ${operand} ${y} = ?`;

//     if (operand == "+" || operand == "plus" || operand == "add" || operand == "addition") {
//         return x + y;
//     } else if (operand == "-" || operand == "minus" || operand == "subtract" || operand == "subtraction") {
//         return x - y;
//     } else if (operand == "*" || operand == "times" || operand == "multiply" || operand == "multiplication") {
//         return x * y;
//     } else if (operand == "/" || operand == "divide" || operand == "division") {
//         return x / y;
//     } else {
//         console.log("Input a primitive operand");
//     }
// }

// function checkAnswer(answer, result, output) {
//     if (answer == result) {
//         output.innerHTML = "> RIGHT ANSWER"
//     } else {
//         output.innerHTML = "> Wrong answer, try again."
//     }
// }

// export { getArithmeticQuestion, checkAnswer }