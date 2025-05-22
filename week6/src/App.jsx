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
          setExpression(" ");  //공백으로 UI크기 변동됨됨
      } else {
          setInput(result);
          setExpression(prev => prev + value);
      }
        

    } else if (value === "CA"){
      setInput("0");
      setExpression("0");
      setIsResulted(false);


    } else if (value === "."){  
      setInput((prev) => {
        const parts = prev.split(/[+\-x%]/);
        const currentNumber = parts[parts.length -1] || "";
        const lastChar = prev.slice(-1);

        return currentNumber.includes(".")||["+","-","x","%"].includes(lastChar) 
        ? prev 
        : prev + value
    });

      setExpression((prev) => {
        const parts = prev.split(/[+\-x%]/);
        const currentNumber = parts[parts.length -1] || "";
        const lastChar = prev.slice(-1);
        
        return currentNumber.includes(".")||["+","-","x","%"].includes(lastChar) 
        ? prev 
        : prev + value
    });


    } else if (isResulted){ 
      setInput(value);
      setExpression(value);
      setIsResulted(false);

    } else { //숫자
      setInput((prev) => {
        const lastChar = prev.slice(-1);
        if (prev === "0") {
        return value;
        } else if (lastChar ===".") {          
        return prev + value;
        } else if (isResulted){
        return value; 

       } else if(isOperatorClicked ){
        setIsOperatorClicked(false);
        return value;
        } else { //숫자 이어서 쓸때
        return prev+value;
      }   
    });

      setExpression((prev)=>{
        const lastChar = prev.slice(-1);
        if (prev === "0"){
          return value;
        } else if (lastChar === "."){          
          return prev + value;
        } else if (isResulted){
          return  "result"; 
         } else if(isOperatorClicked ){
          setIsOperatorClicked(false);
          return prev + value;
      } else{
        return prev + value;
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