let firstNum = '';
let lastNum = '';
let operator = '';

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const operators = ['*', '-', '+', '÷'];

const display = document.querySelector(".display_calculator");
const equal = document.getElementById('equals');

document.getElementById('ac').onclick = function()
{
    firstNum = '';
    lastNum = '';
    operator = '';

    display.textContent = '';
}

document.querySelector('.group_btn').onclick = function(e)
{
    if(!e.target.classList.contains('btn')) {return;}


    if(e.target.id == 'ac') {return;}
   

    let key = e.target.textContent;
    let inter_value = '';

    if(lastNum != '' && firstNum != '' && operators.includes(key))
    {
        let o = operate(firstNum,lastNum, operator);
        display.textContent = o;
        firstNum = o;
        operator = key;
        lastNum = '';
    }


    if(numbers.includes(key))
    {
        if(operator == '' && lastNum == '')
        {
            firstNum += key;
            display.textContent = firstNum;
        }

        else
        {
            inter_value = display.textContent;
            lastNum += key;
            display.textContent = inter_value + lastNum;
        }
    }


    if(operators.includes(key))
    {
        operator = key;
        display.textContent += operator;

    }


    if(key == equal.textContent)
    {
        let r = operate(firstNum, lastNum, operator);
        if(lastNum == '') lastNum = firstNum;
        display.textContent = r;
        firstNum = r;
        lastNum = '';

    }

}

function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return Number(a)+Number(b);
        case '-':
            return Number(a)-Number(b);
        case '*':
            return Number(a)*Number(b);
        case '÷':
            return Number(a)/Number(b);

    }
}