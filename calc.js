let displayValue = 0;
let firstrand = null;
let seconrand = null;
let firstop = null;
let secondop = null;
let result = null;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function sum(array) {
    return array.reduce((total, current) => total + current, 0);
}
console.log(sum([1,2,3]));

function multiply(array) {
    return array.length
        ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
        : 0;
}
console.log(multiply([2,3,4]));

function divide(a, b) {
    return a / b;
}
console.log(divide(10,2));

