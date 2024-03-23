// CALCULATOR VARIABLES

let num1;
let op;
let num2;

// CALCULATOR FUNCTIONS

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
    if (num2 == 0) return 'error';
    return num1 / num2;

}

function operate(op) {

    if (op == '+') return add(num1,num2);
    if (op == '-') return subtract(num1,num2);
    if (op == '*') return multiply(num1,num2);
    if (op == '/') return divide(num1,num2);

};

//EVENTS VARIABLES

const body = document.querySelector('body');
const buttons = document.querySelector('#buttons');
const display = document.querySelector('#display p');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operators = ['/', '*', '-', '+', '='];

let dispNum = 0;

// EVENTS FUNCTIONS

function pressClass(e) {

    if (e.target.tagName == 'BUTTON') e.target.classList.add('clicking');

}

function clearBtn(e) {
    if (e.target.id === 'clear') {
        num1 = undefined;
        num2 = undefined;
        op = undefined;
        dispNum = 0;
    };
}

function numBtn(e) {

    const btnText = e.target.textContent;

    if (numbers.includes(+btnText)) {
        if (dispNum == 0 || display.textContent == num1) {
            display.textContent = '';
            dispNum = btnText;
        } else {
            dispNum += btnText;
        };
    };

}

function opBtn(e) {
    
    const btnText = e.target.textContent;

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
    
}

// EVENTS LISTENERS

buttons.addEventListener('mousedown', pressClass);

buttons.addEventListener('click', e => {

    if (e.target.tagName != 'BUTTON') return;

    clearBtn(e);

    numBtn(e);

    opBtn(e);
    
    e.target.classList.remove('clicking');

    display.textContent = dispNum;
});


body.addEventListener('keyup', e => {

    const code = e.code;
    console.log(code);
    if (code == 'Digit1') {
        e.preventDefault();
        document.getElementById('one').click();
    }

    // switch(code) {
    //     case 'Digit1':
    //         e.preventDefault();
    //         buttons.querySelector('#one').click();
    // }

})