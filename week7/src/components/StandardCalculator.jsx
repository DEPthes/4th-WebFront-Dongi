import UserInput from "./UserInput";
import StdResults from "./StandardResult";

export default function StandardCalculator({ tab, userInput, stdChange, onReset }) {
  const inputIsValid = userInput.duration >= 1;

  return(
    <>
      <UserInput tab={tab} userInput={userInput} stdChange={stdChange} onReset={onReset} />
      {!inputIsValid && <p className="center">Please enter a duration grater than zero.</p>}
      {inputIsValid && <StdResults input={userInput} />}
    </>
    );
} 