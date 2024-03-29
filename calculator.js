let numA = null;
let numB = null;
let operator = null;

const NUMBER_MAX_LENGTH = 8;

const calculatorDiv = document.querySelector('#calculator');
const displayDiv = calculatorDiv.querySelector('#display');
const buttons = calculatorDiv.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        if (button.classList.contains('clear')) {
            clear();
        }
        
        if (numA == 'ERROR') {
            clear();
        }

        if (button.classList.contains('number')) {
            inputNumber(button.textContent);
        }

        if (button.classList.contains('decimal')) {
            inputDecimal(button.textContent);
        }

        if (button.classList.contains('operator')) {
            inputOperator(button.textContent);
        }

        if (button.classList.contains('operate')) {
            if (numA != null && operator != null && numB != null) {
                display(operate());
            }
            else if (numA != null && operator != null && numB == null) {
                numB = numA;
                display(operate());
            }
            else if (numA != null && operator == null && numB == null) {
                return;
            }
            else {
                display('ERROR');
            }
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
    if (y == 0) {
        return 'ERROR';
    }

    return x / y;
}

function operate() {
    let result = 0;
    switch(operator) {
        case '+':
            result = add(parseFloat(numA), parseFloat(numB));
            break;
        case '-':
            result = subtract(numA, numB);
            break;
        case '*':
            result = multiply(numA, numB);
            break;
        case '/':
            result = divide(numA, numB);
            break;
    }

    numA = result;
    operator = null;
    numB = null;

    return result;
}

function inputNumber (input) {
    if (numA == null) {
        numA = input;
        display(numA);
    }
    else if (operator == null && numA.length < NUMBER_MAX_LENGTH) {
        numA += input;
        display(numA);
    }
    else if (numB == null) {
        numB = input;
        display(numB);
    }
    else if (numB.length < NUMBER_MAX_LENGTH) {
        numB += input;
        display(numB);
    }
}

function inputDecimal (input) {
    if (numA == null) {
        numA = '0.';
        display(numA);
    }
    else if (numA != null && !numA.includes('.') && operator == null) {
        numA += '.';
        display(numA);
    }
    else if (operator != null && numB == null) {
        numB = '0.';
        display(numB);
    }
    else if (operator != null && numB != null && !numB.includes('.')) {
        numB += '.';
        display(numB);
    }
}

function inputOperator (input) {
    if (numA == null) {
        numA = 0;
        operator = input;
    }
    else if (numA != null && operator == null && numB == null) {
        operator = input;
    }
    else if (numA != null && operator != null && numB == null) {
        operator = input;
    }
    else {
        numA = operate(numA, numB, operator);
        operator = input;
        numB = null;
        display(numA + operator);
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