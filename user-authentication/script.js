const name = document.getElementById('name');
const inpPass = document.getElementById('inpPass');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');


// catch errors before submit.
form.addEventListener('submit', (e) => {
    let messages = [];
    if (name.value === '' || name.value == null) {
        messages.push('Name is required');
    }

    if (inpPass.value.length <= 6) {
        messages.push('Password must be longer than 6 characters');
    }

    if (inpPass.value.length >= 20) {
        messages.push('Password must be lesss than 20 characters');
    }

    if (password.value === 'password') {
        messages.push('Passoword cannot be "password"');
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }

})




/* AUTHENTICATION 

// make a variable with the password string.
const password = "admin123";
// make a boolean variable assigned true.
let keepGoing = true;
// initialize a variable attempt to count how many times the user can try the password.
let attempt = 0;
// make a while loop. And it's condition is while the boolean variable is true, the code keep running.
while (keepGoing == true) {
    // catch the user password input.
    let inpPass = prompt("Password:");
    // increment the attempt. Each time the loop iterates it will increment. And eventually, it will become 3.
    attempt += 1;
    // if user input password is equal to password.
    if (inpPass == password) {
        // print "Right password!"
        alert("Right password!");
        // assign the boolean variable to false, stoping the loop.
        keepGoing = false;
    } 
    // else, increment a the attempt variable to become false when the user cannot evaluate the right password.
    else if (attempt >= 3) {
        alert("Wrong password! Too many attempts.");
        keepGoing = false;
    }
}
*/