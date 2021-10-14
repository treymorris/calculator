let displayValue = '0';
let firstRand = null;
let secondRand = null;
let firstOp = null;
let secondOp = null;
let result = null;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.name === 'operand') {
            inputOperand(button.value);
            updateDisplay();
        } else if (button.name === 'operator') {
            inputOperator(button.value);
        } else if (button.name === 'equals') {
            inputEquals(button.value);
            updateDisplay();
        } else if (button.name === 'decimal') {
            inputDecimal(button.value);
        } else if (button.name === 'clear') {
            clearDisplay();
            updateDisplay();
        }
    });
});

function inputOperand(operand) {
    if (firstRand === null) {
        if (displayValue === '0' || 0) {
            displayValue = operand;
        } else if (displayValue === firstRand) {
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    } else {
        if (displayValue === firstRand) {
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    }
}

function inputOperator(operator) {

}

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue;
    if(displayValue.length > 9) {
        display.innerText = displayValue.substring(0, 9);
    }
}

function clearDisplay() {
    displayValue = '0';
    firstRand = null;
    secondRand = null;
    firstOp = null;
    secondOp = null;
    result = null;
}



function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function sum(array) {
    return array.reduce((total, current) => total + current, 0);
}

function multiply(array) {
    return array.length
        ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
        : 0;
}

function divide(a, b) {
    return a / b;
}


