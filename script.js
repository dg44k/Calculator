let firstNum = '';
let lastNum = '';
let operator = '';

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const operators = ['*', '-', '+', '√', '÷'];

const display = document.querySelector(".display_calculator");


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

    if(numbers.includes(key))
    {
        firstNum += key;
        display.textContent = firstNum;
    }

    if(operators.includes(key))
    {
        operator = key;
        display.textContent = operator;

    }

}