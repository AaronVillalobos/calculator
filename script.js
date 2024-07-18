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
    const numberBtn = document.querySelectorAll('div.numbers > input');
    const operationBtn = document.querySelectorAll('div.operations > input');
    const clearBtn = document.querySelector('#clear');

    numberBtn.forEach((num) => {
        num.addEventListener('click', () => {
            if (mathOperator == '') {
                firstNum += num.value;
                console.log('First: ', firstNum);
                display.innerHTML = firstNum;
            }
            else {
                secondNum += num.value;
                console.log('Second: ', secondNum);
                display.innerHTML = secondNum;
            }
        });
    });

    operationBtn.forEach((operation) => {
        operation.addEventListener('click', () => {
            if (operation.value !== '=') {
                mathOperator = operation.value;
            }
            else {
                result = operate(Number(firstNum), mathOperator, Number(secondNum));
                console.log(result);
                display.innerHTML = result;
            }
        })
    });

    clearBtn.addEventListener('click', () => {
        firstNum = '';
        secondNum = '';
        mathOperator = '';
        display.innerHTML = '0';
    })

    calculator.appendChild(display);
}

displayCalculations();