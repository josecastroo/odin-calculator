function add (a, b) {
    return a + b;
}
function subtract (a, b) {
    return a - b;
}
function multiply (a, b) {
    return a * b;
}
function divide (a, b) {
    return a / b;
}

// console.log(add(34, 6))
// console.log(subtract(100, 50))
// console.log(multiply(8, 5))
// console.log(divide(20, 2))

let stNum;
let ndNum;
let operator;

function operate (operator, num1, num2) {
    switch (operator) {
        case "add":
            return add(num1, num2);
            break;
        case "subtract":
            return subtract(num1, num2);
            break;
        case "multiply":
            return multiply(num1, num2);
            break;
        case "divide":
            return divide(num1, num2);
            break;
        default:
            return "Invalid operator"
    }
}