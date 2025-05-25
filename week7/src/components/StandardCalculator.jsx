import UserInput from "./UserInput";
import Results from "./Results";

export default function StandardCalculator({ userInput, onChange, onReset }){
  const inputIsValid = userInput.duration >= 1;

  return(
    <>
      <UserInput userInput={userInput} onChange={onChange} onReset={onReset}/>
      {!inputIsValid && <p className="center">Please enter a duration grater than zero.</p>}
      {inputIsValid && <Results input={userInput}/>}
    </>
    );
} 