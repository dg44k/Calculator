const display = document.querySelector(".display_calculator");
const group_btn  = document.querySelector(".group_btn");
const numbers = document.querySelectorAll("*[data-number]");
const operators = document.querySelectorAll("*[data-operator]");
const dot = document.querySelector(".dot");
const equal = document.querySelector(".equals");
const sqaure = document.querySelector(".sqrt");
const ac = document.querySelector(".ac");
const ce = document.querySelector(".ce");



group_btn.onclick = function(e){
    let target = e.target;

    if(target.classList != "btn"){
        return;
    }

    show(target);
}


ac.addEventListener("click", clearAll);
ce.addEventListener("click", clearElem);





function show(elem){
    display.innerHTML += elem.innerHTML;
    
}

function clearAll() {
    display.innerHTML = "";
}

function clearElem() {
    let str = display.innerHTML;
    let lengthString = str.length;
    display.innerHTML = str.slice(0, lengthString-1);
}

function sum(a, b) {
    return a + b;
}

function residual(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function sqrt(a) {
    return Math.sqrt(a);
}


function operate(a, b, operator){
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "/":
            return a / b;
        case "*":
            return a * b;
    }
}
