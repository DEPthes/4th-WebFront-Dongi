import Display from './components/Display';
import { NumButton, OperatorButton, ControlButton, EqualButton } from './components/Button';
import { useState } from 'react';
import calculate from './utills/calculate';

function App() {
  const [expression, setExpression] = useState("0");
  const [input, setInput] = useState("0");
  const [prev, setPrev] = useState(null);
  const [oper, setOper] = useState(null);
  const [isResulted, setIsResulted] = useState(false);
  const [isOperatorClicked, setIsOperatorClicked] = useState(false);


  function handleClick(value){  
    if (["+","-","x","%"].includes(value)){
      setPrev(input);
      setOper(value);
      setInput(input);

      setExpression(prev => {
          if (prev.includes("=")) return input + value;
          if (isOperatorClicked) return prev.slice(0, -1) + value; 
          return prev + value; 
        });

      setIsOperatorClicked(true);



    } else if (value === "="){       
      const result = calculate(prev, oper, input);
      setIsResulted(true);

      if (result === "0으로 나눌 수 없습니다") {
          setInput(result);
          setExpression(" ");
      } else {
          setInput(result);
          setExpression(prev => prev + value);
      }
        

    } else if (value === "CA"){
      setInput("0");
      setExpression("0");
      setIsResulted(false);


    } else if (value === "."){  
      setInput((prevInput) => {
        const parts = prevInput.split(/[+\-x%]/);
        const currentNumber = parts[parts.length -1];

        const lastChar = prevInput.slice(-1);
        return currentNumber.includes(".")||["+","-","x","%"].includes(lastChar) 
        ? prevInput 
        : prevInput + value
    });

      setExpression((prevExpression) => {
        const parts = prevExpression.split(/[+\-x%]/);
        const currentNumber = parts[parts.length -1];

        const lastChar = prevExpression.slice(-1);
        return currentNumber.includes(".")||["+","-","x","%"].includes(lastChar) 
        ? prevExpression 
        : prevExpression + value
    });


    } else if (isResulted){ 
      setInput(value);
      setExpression(value);
      setIsResulted(false);

    } else { //숫자
      setInput((prevInput) => {
        const lastChar = prevInput.slice(-1);
        if (prevInput === "0") {
        return value;
        } else if (lastChar ===".") {          
        return prevInput + value;
        } else if (isResulted){
        return value; 
       } else if(isOperatorClicked ){
        setIsOperatorClicked(false);
        return value;
        } else { //숫자 이어서 쓸때
        return prevInput+value;
      }   
    });

      setExpression((prevExpression)=>{
        const lastChar = prevExpression.slice(-1);
        if (prevExpression === "0"){
          return value;
        } else if (lastChar === "."){          
          return prevExpression + value;
        } else if (isResulted){
          return  "result"; 
         } else if(isOperatorClicked ){ // 이 부분 연산자 눌러진 후 숫자 누르면 이전 식에 들어온 값으로 보이는 거 아니야?
          setIsOperatorClicked(false);
          return prevExpression + value;
      } else{
        return prevExpression + value;
      }
    });
    setIsOperatorClicked(false);
    }
  } 


  return (
    <div className='container'>
      <Display value={input} expression={expression}/>
      <div className='btn-top'>
        <EqualButton value="=" onClick={handleClick}/>
      </div>
      <div className="button-grid">
          <NumButton value="7" onClick={handleClick}/>
          <NumButton value="8" onClick={handleClick}/>
          <NumButton value="9" onClick={handleClick}/>
          <OperatorButton value="%" onClick={handleClick}/>
          <NumButton value="4" onClick={handleClick}/>
          <NumButton value="5" onClick={handleClick}/>
          <NumButton value="6" onClick={handleClick}/>
          <OperatorButton value="x" onClick={handleClick}/>
          <NumButton value="1" onClick={handleClick}/>
          <NumButton value="2" onClick={handleClick}/>
          <NumButton value="3" onClick={handleClick}/>
          <OperatorButton value="-" onClick={handleClick}/>
          <NumButton value="0" onClick={handleClick}/>   
          <ControlButton value="." onClick={handleClick}/>   
          <ControlButton value="CA" onClick={handleClick}/>
          <OperatorButton value="+" onClick={handleClick}/>
        </div>
    </div>
  );
}

export default App;