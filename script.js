let num1 = 0;
let op;
let num2;


function add(num1, num2) {    
    return num1 + num2;
}

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

const operate = function (op) {

    let total;

    if (op == '+') add();
    if (op == '-') subtract();
    if (op == '*') multiply();
    if (op == '/') divide();

};

const buttons = document.querySelector('#buttons');
const display = document.querySelector('#display p');

let dispVal = display.textContent;

buttons.addEventListener('mousedown', (e) => {

    if (e.target.tagName == 'BUTTON') e.target.classList.add('clicking');

});
buttons.addEventListener('mouseup', (e) => {

    const target = e.target;
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    if (target.tagName == 'BUTTON') target.classList.remove('clicking');

    if (target.textContent === 'CE') display.textContent = '0';

    if (numbers.includes(+target.textContent)) {
        if (display.textContent == 0) display.textContent = '';
        dispVal = display.textContent += target.textContent;
    };
});