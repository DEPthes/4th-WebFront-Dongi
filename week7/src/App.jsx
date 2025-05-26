import { useState } from 'react';
import Header from './components/Header';
import { DEFAULT_USER_INPUT, DEFAULT_GOAL_INPUT } from './constants/defaultInput';
import Tab from './components/Tab';
import StandardCalculator from './components/standardCalculator';
import GoalCalculator from './components/GoalCalculator';

//tab, css 수정
//추가 확장할 기능 찾아보기
function App() {
  const [userInput, setUserInput] = useState(DEFAULT_USER_INPUT);  
  const [goalInput, setGoalInput] = useState(DEFAULT_GOAL_INPUT);
  const [tab, setTab] = useState("standard");

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, //문자열 값 숫자값으로 변환
      };
    })
    setGoalInput((prevGoalInput) => {
        return {
        ...prevGoalInput,
        [inputIdentifier]: +newValue, //문자열 값 숫자값으로 변환
      };
      })
  }
  const handleReset = () => {
    setUserInput(DEFAULT_USER_INPUT);
    setGoalInput(DEFAULT_GOAL_INPUT);
  }
  const handleTab = (tabName) => setTab(tabName);

  
  return (
    <>
      <Header />
      <Tab onClick={handleTab} /> {/*props로 onClick 함수*/}
      {tab=== "standard" && <StandardCalculator userInput={userInput} onChange={handleChange} onReset={handleReset} />}
      {tab ==="goal" && <GoalCalculator goalInput={goalInput} onChange={handleChange} onReset={handleReset} />}
    </>
  )
}

export default App