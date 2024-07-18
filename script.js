const display = document.querySelector('.display');
const calculator = document.querySelector('#calculator');

let firstNum = '';
let secondNum = '';
let mathOperator = '';
let result = '';

/* Math Operators */
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        return ("Error");
    }
    return a / b;
}

/* Calculator Operations */
function operate(num1, operator, num2) {
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return ("Invalid Operation");
    }
}

function displayCalculations() {
    const numberBtn = document.querySelectorAll('div.numbers > input');
    const operationBtn = document.querySelectorAll('div.operations > input');
    const clearBtn = document.querySelector('#clear');

    function getNumber(value) {
        if (mathOperator == '') {
            firstNum += value;
            result = firstNum;
            display.innerHTML = result;
        }
        else {
            secondNum += value;
            result = secondNum;
            display.innerHTML = result;
        }
    }

    function getOperation(op) {
        if (firstNum !== '' && secondNum !== '') {
            calculate();
            mathOperator = op;
        }
        else {
            mathOperator = op;
        }
    }

    function calculate() {
        if (firstNum !== '' && mathOperator !== '' && secondNum !== '') {
            result = operate(Number(firstNum), mathOperator, Number(secondNum));
            firstNum = result;
            mathOperator = '';
            secondNum = '';
        }
        else if (firstNum !== '' && mathOperator !== '') {
            result = operate(Number(firstNum), mathOperator, Number(firstNum));
            firstNum = result;
            mathOperator = '';
            secondNum = '';
        }
    }

    function output() {
        display.innerHTML = result;
    }

    numberBtn.forEach((num) => {
        num.addEventListener('click', () => {
            const value = num.value;
            getNumber(value);
        });
    });

    operationBtn.forEach((operation) => {
        operation.addEventListener('click', () => {
            if (operation.value === '=') {
                calculate();
            }
            else {
                mathOperator = operation.value;
                getOperation(mathOperator);
            }
            output();
        });
    });

    clearBtn.addEventListener('click', () => {
        firstNum = '';
        secondNum = '';
        mathOperator = '';
        result = '';
        display.innerHTML = '0';
    });

    calculator.appendChild(display);
}

displayCalculations();