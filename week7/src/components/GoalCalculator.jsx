import GoalInput from "./GoalInput";
import GoalResults from "./GoalResult";

export default function GoalCalculator({goalInput,onChange,onReset}){
  return(
    <>
      <GoalInput goalInput={goalInput} onChange={onChange} onReset={onReset} />
      <GoalResults goalInput={goalInput}/>
    </>
    );
}