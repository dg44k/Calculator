let firstNum = '';
let lastNum = '';
let operator = '';
let flag = false;

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const operators = ['*', '-', '+', '÷'];

const display = document.querySelector(".display_calculator");
const equal = document.getElementById('equals');



document.getElementById('ac').onclick = function()
{
    firstNum = '';
    lastNum = '';
    operator = '';
    flag = false;
    display.textContent = '';
}


document.querySelector('.group_btn').onclick = function(e)
{
    if(!e.target.classList.contains('btn')) {return;}


    if(e.target.id == 'ac') {return;}
    

    let key = e.target.textContent;
    let inter_value = '';


    document.getElementById('ce').onclick = function()
    {
        let str = firstNum+operator+lastNum;
        
        if(lastNum!= '')
        {
            lastNum = lastNum.slice(0, lastNum.length - 1);
            display.textContent = str.slice(0,str.length - 1);
            return;
        }
        if(operator!= '')
        {
            operator = '';
            flag = false;
            display.textContent = str.slice(0,str.length - 1);
            return;
        }
        if(firstNum!= '')
        {
            firstNum = firstNum.slice(0, firstNum.length - 1);
            display.textContent = str.slice(0,str.length - 1);
            return;
        }
        
        
        
    }


    if(lastNum != '' && firstNum != '' && operators.includes(key))
    {
        let o = operate(firstNum,lastNum, operator);
        operator = key;
        display.textContent = `${Math.round(o * 1000) / 1000}`+operator;
        firstNum = o;
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
            inter_value = firstNum+operator;
            lastNum += key;
            display.textContent = inter_value + lastNum;
        }
    }


    if(operators.includes(key) && flag == false && firstNum != '')
    {
        operator = key;
        display.textContent += operator;
        flag = true;

    }


    if(key == equal.textContent)
    {
        if(lastNum == '') return;
        let r = operate(firstNum, lastNum, operator);
        if(r == 'Error')
        {
            display.textContent = '';
            firstNum = '';
            lastNum = '';
            flag = false;
            operator = '';
            return;
        }
        display.textContent = `${Math.round(r * 1000) / 1000}`;
        firstNum = `${Math.round(r * 1000) / 1000}`;
        lastNum = '';
        operator = '';
        flag = false;
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
            if(b == '0')
            {
                alert('Error');
                return 'Error';
            }
            return Number(a)/Number(b);

    }
}