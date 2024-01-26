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
        
        if (button.classList.contains('number')) {
            inputNumber(button.textContent);
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

function inputNumber (input) {
    if (numA == null) {
        numA = input;
        display(numA);
    }
    else if (operator == null) {
        numA += input;
        display(numA);
    }
    else if (numB == null) {
        numB = input;
        display(numA + operator + numB);
    }
    else {
        numB += input;
        display(numA + operator + numb);
    }
}

function clear() {
    numA = null;
    numB = null;
    operator = null;
    display(0);
}

function display (input) {
    displayDiv.textContent = input;
}