import { DEFAULT_USER_INPUT, DEFAULT_GOAL_INPUT } from './constants/defaultInput';
import StandardCalculator from './components/standardCalculator';
import GoalCalculator from './components/GoalCalculator';
import Header from './components/Header';
import Tab from './components/Tab';
import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState(DEFAULT_USER_INPUT);  
  const [goalInput, setGoalInput] = useState(DEFAULT_GOAL_INPUT);
  const [tab, setTab] = useState("standard");

  function handleStandardChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, //문자열 값 숫자값으로 변환
      };
    })
  }
  function handleGoalChange(inputIdentifier, newValue){
        setGoalInput((prevGoalInput) => {
        return {
        ...prevGoalInput,
        [inputIdentifier]: +newValue, 
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
      <Tab onClick={handleTab} /> 
      {tab=== "standard" && <StandardCalculator tab={tab} userInput={userInput} stdChange={handleStandardChange} onReset={handleReset} />}
      {tab ==="goal" && <GoalCalculator tab={tab} goalInput={goalInput} goalChange={handleGoalChange} onReset={handleReset} />}
    </>
  )
}

export default App