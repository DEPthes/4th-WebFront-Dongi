import GoalInput from "./GoalInput";
import GoalResults from "./GoalResult";

export default function GoalCalculator({goalInput,onChange,onReset}){
  const inputIsValid = goalInput.targetAmount>goalInput.initialInvestment;
  return(
    <>
      <GoalInput goalInput={goalInput} onChange={onChange} onReset={onReset} />
      {!inputIsValid && <p className="center">Please enter a target Amount grater than initial investment.</p>}
      {inputIsValid &&<GoalResults goalInput={goalInput}/>}
    </>
    );
}