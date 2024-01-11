// Addition of 2 number
// get those from user

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter first number: ", (num1) => {
    rl.question("Enter second number: ", (num2) => {
        const sum = parseInt(num1) + parseInt(num2);
        console.log(`The sum of above two numbers is ${sum}`);
        rl.close();
    });
});

setTimeout(() => {}, 10000);