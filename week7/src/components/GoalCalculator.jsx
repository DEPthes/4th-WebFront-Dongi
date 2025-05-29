import GoalInput from "./GoalInput";
import GoalResults from "./GoalResult";

export default function GoalCalculator({ tab, goalInput, goalChange, onReset }){ 
  const inputIsValid = goalInput.targetAmount > goalInput.initialInvestment;
  return(
    <>
      <GoalInput tab={tab} goalInput={goalInput} goalChange={goalChange} onReset={onReset} />
      {!inputIsValid && <p className="center">Please enter a target Amount greater than initial investment.</p>} 
      {inputIsValid &&<GoalResults goalInput={goalInput} />}
    </>
    );
}