let num1;
let op;
let num2;


function add(num1, num2) {

    return num1 + num2;

}

function subtract(num1, num2) {

    return num1 - num2;

}

function multiply(num1, num2) {

    return num1 * num2;

}

function divide(num1, num2) {

    return num1 / num2;

}

function operate(op) {

    if (op == '+') add();
    if (op == '-') subtract();
    if (op == '*') multiply();
    if (op == '/') divide();

};

const buttons = document.querySelector('#buttons');
const display = document.querySelector('#display p');

let dispNum = 0;

buttons.addEventListener('mousedown', (e) => {

    if (e.target.tagName == 'BUTTON') e.target.classList.add('clicking');

});

buttons.addEventListener('mouseup', (e) => {

    if (e.target.tagName != 'BUTTON') return;

    const target = e.target;
    const btnText = target.textContent;
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const operators = ['/', '*', '-', '+'];


    if (target.tagName == 'BUTTON') target.classList.remove('clicking');

    if (target.id === 'clear') {

        display.textContent = '0';

        num1 = undefined;
        num2 = undefined;
        dispNum = [];

    };

    if (numbers.includes(+btnText)) {
        if (dispNum == 0) {
            display.textContent = '';
            dispNum = btnText;
        } else {
            dispNum += btnText;
        };
        display.textContent = dispNum;
    };

    if (operators.includes(btnText)) {
        if (num1 == undefined) {
            num1 = +dispNum;
            display.textContent = num1;
            dispNum = 0;
        } else {
            num2 = +dispNum;
            display.textContent = operate(btnText);
            
        };
    };

    if (btnText == '=') operate(btnText);
    console.log(num1, num2);
});