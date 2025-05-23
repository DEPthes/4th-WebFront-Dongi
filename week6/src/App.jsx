import { NumButton, OperatorButton, ControlButton, EqualButton } from './components/Button';
import Display from './components/Display';
import calculate from './utills/calculate';
import { useState } from 'react';



//함수로 따로 관리.
//if문 안에 if문 안됨.
//split 정규 표현식 쓸 떄 주석 달기
//useRef로 input 관리.
//setInput() 는 간단할 수록 좋음. 함수 안에 함수 쓰면 안된다고.
//map으로. 그리고 data로.


function App() {
  const [expression, setExpression] = useState("0");
  //useRef로 input 관리. 초기화 함수 따로 만들고 ... 다 함수 나눠서. 
  const [input, setInput] = useState("0");
  const [prev, setPrev] = useState(null);
  const [oper, setOper] = useState(null);
  const [isOperatorClicked, setIsOperatorClicked] = useState(false);
  const [isResulted, setIsResulted] = useState(false);

  const operators = ["+", "-", "x", "%"];

  const updateInput = (value) => {
    setInput((prev)=> {
      const lastchar = prev.slice(-1);
      if(prev === "0") return value;
      if(lastchar === ".") return prev + value;
      if(isOperatorClicked || isResulted) return value;
  //    setInput() prev + value;  setInput() 는 간단할 수록 좋음. 밑으로 빼자자
    });
  };

  const updateExpression = (value) => {
    setExpression((prev) => {
      if (isResulted) return input + value;
      if (isOperatorClicked) return prev.slice(0, -1) + value;
      return prev + value;
    });
  };



  const handleClick = (value) => {  
    if (operators.includes(value)) return handleOperator(value);
    if (value === "=") return handleEqual();
    if (value === "CA") return handleClear();
    if (value === ".") return handleDecimal();
    };

    const handleOperator = (value) => {
      setPrev(input);
      setOper(value);
      updateExpression(input+value);
      setIsOperatorClicked(true);
    };


    const handleEqual = (value) => {
      const result = calculate(prev, oper, input);
      setIsResulted(true);
      if (result === "0으로 나눌 수 없습니다") {
        setInput(result);
        setExpression("오류");
      } else {
        setInput(result);
        setExpression((prev) => prev + value);
      }
    };


    const handleClear = () => {
      setInput("0");
      setExpression("0");
      setIsResulted(false);
    };

    const handleDecimal = () => {
      if (isResulted) {
        setInput("0.");
        setExpression("0.");
        setIsResulted(false);
        return;
    }

      //split / 정규표현식 딥다이브 확인하기
      //정규표현식 쓸떄는 주석 쓰는 게 좋음음
      setInput((prev) => {
        const parts = prev.split(/[+\-x%]/); //연산자 집합을 표현하는 정규표현식
        const currentNumber = parts[parts.length -1] || "";
        const lastChar = prev.slice(-1);
        return currentNumber.includes(".")||operators.includes(lastChar) ? prev : prev + value
    });

      setExpression((prev) => {
        const parts = prev.split(/[+\-x%]/);
        const currentNumber = parts[parts.length -1] || "";
        const lastChar = prev.slice(-1);
        return currentNumber.includes(".") || operators.includes(lastChar) ? prev : prev + value;
      });
       return;
    }

    if (isResulted) {
      setInput(value);
      setExpression(input + value);
      setIsResulted(false);
      setIsOperatorClicked(false);
      return;
    }

    // 숫자 처리
    setIsResulted(false);
    updateInput(value);
    setExpression((prev) => {
      const lastChar = prev.slice(-1);
      if (isResulted) {
        setIsResulted(false);
        return prev + oper + value;
      }
      if (prev === "0") return value;
      if (lastChar === ".") return prev + value;
      if (isOperatorClicked) {
        setIsOperatorClicked(false);
        return prev + value;
      }
      return prev + value;
    });
  };

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