import GoalInput from "./GoalInput";

export default function GoalCalculator(userInput,onChange,onReset){
  return(
    <>
      <GoalInput userInput={userInput} onChange={onChange} onReset={onReset} />
    </>
    );
}