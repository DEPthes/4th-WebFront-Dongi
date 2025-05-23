import { NumButton, OperatorButton, ControlButton, EqualButton } from './components/Button';
import buttonList from './datas/buttonList';
import Display from './components/Display';
import calculate from './utills/calculate';
import { useState } from 'react';
//함수로 따로 관리.
//if문 안에 if문 안됨.
//split 정규 표현식 쓸 떄 주석 달기
//useRef로 input 관리.
//setInput() 는 간단할 수록 좋음. 함수 안에 함수 쓰면 안된다고.
//map으로. 그리고 data로

function App() {
  const [expression, setExpression] = useState('0');
  const [input, setInput] = useState('0');
  const [prev, setPrev] = useState(null);
  const [oper, setOper] = useState(null);
  const [isOperatorClicked, setIsOperatorClicked] = useState(false);
  const [isResulted, setIsResulted] = useState(false);

  const operators = ['+', '-', 'x', '%'];

  const updateInput = (value) => {
      const lastchar = input.slice(-1);
      if(input === '0'||isOperatorClicked || isResulted) {
        setInput(value);
        return;
      }
      if(lastchar === '.') {
        setInput(input + value);
        return;
      }
      setInput((prev) => prev + value);
  };

  const updateExpression = (value) => {
      if (isResulted) {
        setExpression(input + value);
        return;
      }
      if (isOperatorClicked) {
        setExpression((prev) => (prev.slice(0, -1) + value));
        return;
      }
      setExpression((prev) => prev + value);
    };

  const handleClick = (value) => {  
      if (operators.includes(value)) return handleOperator(value);
      if (value === '=') return handleEqual();
      if (value === 'CA') return handleClear();
      if (value === '.') return handleDecimal();
      return handleNumber(value);
    };

  const handleOperator = (value) => {
      setPrev(input);
      setOper(value);
      updateExpression(value);
      setIsOperatorClicked(true);
    };

  const handleEqual = () => {
      const result = calculate(prev, oper, input);
      setIsResulted(true);
      if (result === '0으로 나눌 수 없습니다') {
        setInput(result);
        setExpression('오류');
      } else {
        setInput(result);
        setExpression((prev) => prev + '=');
      }
    };
        
  const handleClear = () => {
      setInput('0');
      setExpression('0');
      setIsResulted(false);
      setIsOperatorClicked(false);
    };

  const handleDecimal = () => {
      if (isResulted) {
          setInput('0.');
          setExpression('0.');
          setIsResulted(false);
          setIsOperatorClicked(false);
          return;
    }
      //정규표현식 쓸때는 주석 쓰는 게 좋음
      const parts = input.split(/[+\-x%]/); //연산자 집합을 표현하는 정규표현식
      const currentNumber = parts[parts.length -1] || '';
      const lastChar = input.slice(-1);

      if(currentNumber.includes('.')||operators.includes(lastChar)) return;

      setInput((prev) => prev+'.');
      setExpression((prev) => prev + '.');           
    };

    const handleNumber = (value) => {
      if (isResulted) {
        setInput(value);
        setExpression(value);
        setIsResulted(false);
        setIsOperatorClicked(false);
        return;
      }
          
      setIsResulted(false);
      updateInput(value);
      setExpression((prev) => {
        const lastChar = prev.slice(-1);
        if (prev === '0') return value;
        if (lastChar ==='.' ) return prev + value;
        if (isOperatorClicked) {
          setIsOperatorClicked(false);
          return prev + value;
        }
        return prev + value;
      });

    };
    
const buttonPanel = (value) => {
  if(Number.isInteger(Number(value))) return <NumButton key={value} value={value} onClick={handleClick}/>;
  if(operators.includes(value)) return <OperatorButton key={value} value={value} onClick={handleClick}/>;
  if(value === '=') return  <EqualButton key={value} value={value} onClick={handleClick}/>;
  return <ControlButton key={value} value={value} onClick={handleClick}/>;
  };

  return (
    <div className='container'>
      <Display value={input} expression={expression}/>
      <div className='btn-top'>
        <EqualButton value="=" onClick={handleClick}/>
      </div>
      <div className="button-grid">
        {buttonList.map(buttonPanel)}
      </div>
    </div>
  );
}

export default App;