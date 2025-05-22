import { NumButton, OperatorButton, ControlButton, EqualButton } from './components/Button';
import Display from './components/Display';
import calculate from './utills/calculate';
import { useState } from 'react';

function App() {
  const [isOperatorClicked, setIsOperatorClicked] = useState(false);
  const [isResulted, setIsResulted] = useState(false);
  const [expression, setExpression] = useState("0");
  const [input, setInput] = useState("0");
  const [prev, setPrev] = useState(null);
  const [oper, setOper] = useState(null);

  const operators = ["+", "-", "x", "%"];
  const updateInput = (value) => {
    setInput((prev)=> {
      const lastchar = prev.slice(-1);
      if(prev === "0") return value;
      if(lastchar === ".") return prev + value;
      if(isOperatorClicked || isResulted) return value;
      return prev + value;
    });
  };

  const updateExpression = (value) => {
    setExpression((prev) => {
      if (isResulted) return input + value;
      if (isOperatorClicked) return prev.slice(0, -1) + value;
      return prev + value;
    });
  };

  function handleClick(value){  
    // 연산자
    if (operators.includes(value)){ 
      setPrev(input);
      setOper(value);
      updateExpression(value);
      setIsOperatorClicked(true);

    // 등호
    } else if (value === "="){ 
      const result = calculate(prev, oper, input);
      setIsResulted(true);

      if (result === "0으로 나눌 수 없습니다") {
          setInput(result);
          setExpression("오류");  
      } else {
          setInput(result);
          setExpression(prev => prev + value);
      }
        
;   // 초기화
    } else if (value === "CA"){ 
      setInput("0");
      setExpression("0");
      setIsResulted(false);

    // 소수점 
    } else if (value === "."){  
      if(isResulted){
        setInput("0.");
        setExpression("0.");
        setIsResulted(false);
        return;
      }
      setInput((prev) => {
        const parts = prev.split(/[+\-x%]/);
        const currentNumber = parts[parts.length -1] || "";
        const lastChar = prev.slice(-1);
        return currentNumber.includes(".")||operators.includes(lastChar) 
        ? prev 
        : prev + value
    });
      setExpression((prev) => {
        const parts = prev.split(/[+\-x%]/);
        const currentNumber = parts[parts.length -1] || "";
        const lastChar = prev.slice(-1);
        return currentNumber.includes(".")||operators.includes(lastChar) 
        ? prev 
        : prev + value
    });


    } else if (isResulted){ 
      setInput(value);
      setExpression(input + value);
      setIsResulted(false);
      setIsOperatorClicked(false);


    // 숫자
    } else { 
      setIsResulted(false);
      updateInput(value);
   // 결과식에 대해 연산할 때 숫자 + 연산 + 숫자에서 연산 안 뜸 
      setExpression((prev) => {
        const lastChar = prev.slice(-1);
        if(isResulted){
          setIsResulted(false);
          return prev+oper+value;
        }
        if (prev === "0") return value;
        if (lastChar === ".") return prev + value;
        if (isOperatorClicked) {
          setIsOperatorClicked(false);
          return prev + value;
        }
        return prev + value;
        });
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