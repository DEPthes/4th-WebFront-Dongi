import { useState } from 'react';
import Header from './components/Header';
import Results from './components/Results';
import UserInput from './components/UserInput';
import { DEFAULT_USER_INPUT } from './constants/defaultUserInput';

function App() {
  const [userInput, setUserInput] = useState(DEFAULT_USER_INPUT);  
  const inputIsValid = userInput.duration >= 1;
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, //문자열 값 숫자값으로 변환
      };
    })
  }
  const handleReset = () => {
    setUserInput(DEFAULT_USER_INPUT);
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} onReset={handleReset}/>
      {!inputIsValid && <p className="center">Please enter a duration grater than zero.</p>}
      {inputIsValid && <Results input={userInput}/>}
    </>
  )
}

export default App