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

    if (op == '+') return add(num1,num2);
    if (op == '-') return subtract(num1,num2);
    if (op == '*') return multiply(num1,num2);
    if (op == '/') return divide(num1,num2);

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
    const operators = ['/', '*', '-', '+', '='];

    target.classList.remove('clicking');

    if (target.id === 'clear') {

        display.textContent = '0';

        num1 = undefined;
        num2 = undefined;
        op = undefined;
        dispNum = 0;

    };

    if (numbers.includes(+btnText)) {
        if (dispNum == 0 || display.textContent == num1) {
            display.textContent = '';
            dispNum = btnText;
        } else {
            dispNum += btnText;
        };
    };

    if (operators.includes(btnText)) {
        if (num1 == undefined) {
            op = btnText;
            num1 = +dispNum;
        } else {
            num2 = +dispNum;
            if (op != '=') num1 = operate(op);
            dispNum = num1;
            op = btnText;
        };
    };
    display.textContent = dispNum;
    console.log(num1, num2, op)
});