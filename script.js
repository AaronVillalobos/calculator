let firstNum = "";
let secondNum = "";
let mathOperator = "";

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
            console.log("Invalid Operation");
    }
}

function displayCalculations() {
    const btn = document.querySelectorAll('button');
    const clearBtn = document.querySelector('#AC')
    const display = document.querySelector('.display');
    const calculator = document.querySelector('#calculator');

    btn.forEach((button) => {
        button.addEventListener('click', () => {
            firstNum += button.id;
            display.textContent = firstNum;
        });
    });

    clearBtn.addEventListener('click', () => {
        display.textContent = '';
    });

    calculator.appendChild(display);
}

displayCalculations();