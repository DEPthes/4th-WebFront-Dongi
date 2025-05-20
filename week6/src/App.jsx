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

  function handleClick(value){  
    if (["+","-","x","%"].includes(value)){
       setPrev(input);
       setOper(value);
       setInput(input);
       setExpression((prevInput) => prevInput + value
      );


    } else if (value === "="){
       
       const result = calculate(prev, oper, input);
       setInput(result);
       setExpression((prevInput) => prevInput + value);
       setIsResulted(true);

    } else if (value === "CA"){
       setInput("0");
       setExpression("0");

    } else if (value === "."){ //연산자 뒤에도 안되도록 추가
       setInput((prevInput) => 
       prevInput.includes(".")? prevInput : prevInput + value
      );
    } else if (isResulted){ //=
      setInput(value);
      setExpression(value);
      setIsResulted(false);


    } else { //숫자
       setInput((prevInput)=>
       prevInput === "0" ? value : "" + value
      );
       setExpression((prevInput)=>
       prevInput === "0" ? value : prevInput+ value       
      );
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