let numA = null;
let numB = null;
let operator = null;

const calculatorDiv = document.querySelector('#calculator');
const displayDiv = calculatorDiv.querySelector('#display');
const buttons = calculatorDiv.querySelectorAll('button');


buttons.forEach((button) => {
    button.addEventListener('click', () => {

        if (button.classList.contains('clear')) {
            clear();
        }
        else {
            displayDiv.textContent += button.textContent;
        }
    });
})

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(x, y, operator) {
    let result = 0;
    switch(operator) {
        case '+':
            result = add(x, y);
            break;
        case '-':
            result = subtract(x, y);
            break;
        case '*':
            result = multiply(x, y);
            break;
        case '/':
            result = divide(x, y);
            break;
    }

    return result;
}

function clear() {
    numA = null;
    numB = null;
    operator = null;
    displayDiv.textContent = 0;
}

function display (input) {
    displayDiv.textContent = input;
}