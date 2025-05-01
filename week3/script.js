    const expression = document.getElementById('expression');
    const display = document.getElementById('display');
    const equal = document.querySelector('.btn-equal');
    const number = document.querySelectorAll('.btn-number');
    const operator = document.querySelectorAll('.btn-operator');
    const clearAll = document.querySelector('.btn-clear');
    const decimal = document.querySelector('.btn-decimal');


    let previousValue = null;
    let selectedOperator = null;
    let currentValue = null;
    let isOperatorClicked = false; 


    function handleNumberClick(e){
        const value = e.target.textContent;

        if (display.textContent === "0" || display.textContent === "0으로 나눌 수 없습니다" || isOperatorClicked){
            display.textContent= value;
            isOperatorClicked =  false;
        } else{
            display.textContent += value;
        }
    }


    function handleDecimalClick(){
        display.textContent.includes(".") 
        ? display.textContent = display.textContent 
        : display.textContent +=".";
    }


    function handleOperatorClick(e){
        selectedOperator = e.target.textContent;
        previousValue = display.textContent; 
        isOperatorClicked = true;      

        expression.textContent = `${previousValue} ${selectedOperator}`;
    }


    function handleEqualClick (){
        currentValue = display.textContent; 

        const prev = Number(previousValue);
        const curr = Number(currentValue);
        
        let result;
        
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
    }
    

    function resetCalculator() {
        previousValue = null;
        currentValue = null;
        selectedOperator = null;
        display.textContent = "0";
        expression.textContent = "0";
    }

    
    number.forEach(btn => btn.addEventListener("click", handleNumberClick));
    operator.forEach(btn => btn.addEventListener("click", handleOperatorClick));
    clearAll.addEventListener("click", resetCalculator);
    decimal.addEventListener("click", handleDecimalClick);
    equal.addEventListener("click", handleEqualClick); 