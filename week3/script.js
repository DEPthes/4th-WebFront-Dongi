const display = document.getElementById('display');
const number = document.querySelectorAll('.btn-number');
const division = document.getElementById('operator-div');
const mutiply = document.getElementById('operator-mul');
const subtract = document.getElementById('operator-sub');
const add = document.getElementById('operator-add');
const equal = document.querySelector('.btn-equal');
const expression = document.getElementById('expression');
const clearAll = document.querySelector('.btn-clear');
const decimal = document.querySelector('.btn-decimal');
const operator = document.querySelectorAll('.btn-operator');

let previousValue, selectedOperator, currentValue, result;
let isOperatorClicked = false; 


number.forEach(btn => {     
    btn.addEventListener("click", () => {
        if (display.textContent === "0" || display.textContent === "0으로 나눌 수 없습니다" || isOperatorClicked){
            display.textContent= btn.textContent;
            isOperatorClicked =  false;
        } else{
            display.textContent += btn.textContent;
        }
    });
});

decimal.addEventListener("click", ()=> {
    display.textContent.includes(".") ? display.textContent = display.textContent : display.textContent +=".";
});

operator.forEach(btn => { 
    btn.addEventListener("click", () => { 
        previousValue = display.textContent;
        selectedOperator = btn.textContent; 
        isOperatorClicked = true;      

        expression.textContent = `${previousValue} ${selectedOperator}`;
    });
});


equal.addEventListener("click", () => {
    currentValue = display.textContent; 

const prev = Number(previousValue);
const curr = Number(currentValue);

    switch (selectedOperator){
        case "+":
            result = prev + curr;
            break;
        case "-":
            result = prev - curr;
            break;
        case "x":
            result = prev * curr;
            break;
        case "%":
            if (curr ===0){
                result = "0으로 나눌 수 없습니다"
            } else{
                result = prev / curr; 
            }
            break;                 
    }

    display.textContent = result;
    expression.textContent =`${previousValue} ${selectedOperator} ${currentValue}`;  
}); 


clearAll.addEventListener("click", () => {
    previousValue = null;
    selectedOperator = null;
    currentValue = null;
    display.textContent = "0";
    expression.textContent = "0";
});