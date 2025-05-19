import Display from './components/Display';
import { NumButton, OperatorButton, ControlButton, EqualButton } from './components/Button';
import { useState } from 'react';



function App() {
  const [input, setInput] = useState('');

  function handleClick(value){  //버튼 클릭 시 호출할 함수
    setInput((prevInput) => prevInput + value)
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


export default App