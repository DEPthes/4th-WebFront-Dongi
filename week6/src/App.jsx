import Display from './components/Display';
import { NumButton, OperatorButton, ControlButton, EqualButton } from './components/Button';
import { useState } from 'react';
import calculate from './utills/calculate';


//수정할 거: 소수점, 결과값에 더할 때 expression 처리
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
       setIsOperatorClicked(true);
       //= 하고 연산자 치면  결과값에다가 연산하도록
       setExpression((prevInput) => 
        prevInput.includes("=") ? input + value : prevInput + value
      );





    } else if (value === "="){       
       const result = calculate(prev, oper, input);
       setInput(result);
       setExpression((prevInput) => 
        //공백 넣으면 UI 찌그러짐
        result==="0으로 나눌 수 없습니다"? " ": prevInput + value); 
       setIsResulted(true);






    } else if (value === "CA"){
       setInput("0");
       setExpression("0");
       setIsResulted(false);






    } else if (value === "."){ //연산자 뒤에도 안되도록 추가,5.2 이런식으로 안됨
       setInput((prevInput) => {
      const lastChar = prevInput.slice(-1);
      return prevInput.includes(".")||["+","-","x","%"].includes(lastChar) 
      ? prevInput 
      : prevInput + value
    });
       setExpression((prevExpression) => {
      const lastChar = prevExpression.slice(-1);
      return prevExpression.includes(".")||["+","-","x","%"].includes(lastChar) 
      ? prevExpression 
      : prevExpression + value

       });







    } else if (isResulted){ //=
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
      } else if (lastChar === "="){
        return ; 
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
        } else if (lastChar === "="){
          return  " "; //연산산결과값 리턴 해야함
      } else{
        return prevExpression + value;
      }
    });
    }


  } 

//0말고 숫자 뒤에 숫자 입력시 이어져서 나오게





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