import Display from './components/Display';
import { NumButton, OperatorButton, ControlButton, EqualButton } from './components/Button';
import { useState } from 'react';
import calculate from './utills/calculate';

function App() {
  const [input, setInput] = useState('0');
  const [prev, setPrev] = useState(null);
  const [oper, setOper] = useState(null);

  function handleClick(value){  
    if (["+","-","x","%"].includes(value)){
       setPrev(input);
       setOper(value);
       setInput(input);

    } else if (value === "="){
       const result = calculate(prev, oper, input);
       setInput(result);

    } else if (value === "CA"){
       setInput("0");

    } else if (value === "."){ //연산자 뒤에도 안되도록 추가
       setInput((prevInput) => 
       prevInput.includes(".")? prevInput : prevInput + value
      );


    } else { //표현식말고밑에거먼저구현
       setInput((prevInput)=>
       prevInput === "0" ? value : ""+ value
      );
    }
  } 

  return (
    <div className='container'>
      <Display value={input}/>
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