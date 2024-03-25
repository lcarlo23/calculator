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
    return num1 / num2;

}

function operate(op) {

    if (op == '+') return Math.round(add(num1,num2) * 1000) / 1000;
    if (op == '-') return Math.round(subtract(num1,num2) * 1000) / 1000;
    if (op == '*') return Math.round(multiply(num1,num2) * 1000) / 1000;
    if (op == '/') {
        if (num2 == 0) return 'seriously?';
        return Math.round(divide(num1,num2) * 1000) / 1000;
    };

};

//EVENTS VARIABLES

const body = document.querySelector('body');
const btnCont = document.querySelector('#buttons');
const btnArray = document.querySelectorAll('button');
const display = document.querySelector('#display p');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operators = ['/', '*', '-', '+'];

let dispNum = 0;

// EVENTS FUNCTIONS

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
        if (dispNum === 0 || display.textContent == num1) {
            display.textContent = '';
            dispNum = btnText;
        } else {
            dispNum += btnText;
        };
    };
    console.log(typeof dispNum)
}

function dotBtn(e) {

    const btnText = e.target.textContent;

    if (num1 == undefined) {
        dispNum += btnText;
    } else {
        
    }
    ;

}

function opBtn(e) {
    
    const btnText = e.target.textContent;

    if (operators.includes(btnText)) {
        if (num1 === undefined) {
            num1 = +dispNum;
            op = btnText;
        } else if (op == '=') {
            op = btnText;
        } else {
            num2 = +dispNum;
            dispNum = num1 = operate(op);
            op = btnText;
        }
    };
    
}

function equalBtn(e) {
    
    const btnText = e.target.textContent;

    if (btnText == '=') {
        if (num1 == undefined || op == undefined || op == '=') {
            return;
        } else {
            num2 = +dispNum;
            num1 = operate(op);
            dispNum = num1;
            op = btnText;
        };
    };
    
}

function keyDown(e) {
    for (let button of btnArray) {
        if (button.textContent == e.key) {
            button.classList.add('clicking');
        }
    }
    if (e.key == 'Enter') {
        btnCont.querySelector('#equal').classList.add('clicking');
    } else if (e.key == 'Backspace' || e.key == 'Delete') {
        btnCont.querySelector('#clear').classList.add('clicking');
    }

}

function keyPress(e) {
    for (let button of btnArray) {
        if (button.textContent == e.key) {
            button.classList.remove('clicking');
            button.click();
        }
    }
    if (e.key == 'Enter') {
        const equalBtn = btnCont.querySelector('#equal');

        equalBtn.classList.remove('clicking');
        equalBtn.click();
    } else if (e.key == 'Backspace' || e.key == 'Delete') {
        const clearBtn = btnCont.querySelector('#clear');

        clearBtn.classList.remove('clicking');
        clearBtn.click();
    }
}

// EVENTS LISTENERS

btnCont.addEventListener('mousedown', e => {
    if (e.target.tagName == 'BUTTON') e.target.classList.add('clicking');
});

btnCont.addEventListener('mouseout', e => {
    if (e.target.tagName == 'BUTTON') e.target.classList.remove('clicking');
});

btnCont.addEventListener('click', e => {

    if (e.target.tagName != 'BUTTON') return;

    clearBtn(e);

    numBtn(e);

    opBtn(e);

    equalBtn(e);
    
    e.target.classList.remove('clicking');

    display.textContent = dispNum;

    console.log(num1, num2, op)
});


body.addEventListener('keydown', keyDown);
body.addEventListener('keyup', keyPress);