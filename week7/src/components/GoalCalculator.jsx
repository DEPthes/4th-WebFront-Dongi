import GoalInput from "./GoalInput";
import GoalResults from "./GoalResult";

export default function GoalCalculator({ goalInput, goalChange, onReset }){ //구조분해
  const inputIsValid = goalInput.targetAmount > goalInput.initialInvestment;
  return(
    <>
      <GoalInput goalInput={goalInput} goalChange={goalChange} onReset={onReset} />
      {!inputIsValid && <p className="center">Please enter a target Amount greater than initial investment.</p>} {/*오타 수정함*/}
      {inputIsValid &&<GoalResults goalInput={goalInput}/>}
    </>
    );
}