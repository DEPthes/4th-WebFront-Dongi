//투자목표달성 기간 계산기
//초기투자금,연간적립금액, 기대 수익률, 목표금액 -> 기간
import InputGroup from "./InputGroup";

const goalFields = [
  {name: "initialInvestment", label:"Initial Investment"},
  {name: "annualInvestment", label: "Annual Investment"},
  {name: "expectedReturn", label: "Expected Return"},
  {name: "targetAmount", label: "Target Amount"}
];

export default function GoalInput({ tab, goalInput, goalChange, onReset }){
  return (
    <section id="user-input">
      <div className="input-group">
        <InputGroup fields={goalFields} goalInputs={goalInput} goalChange={goalChange} tab={tab} />
        <p>
          <label>&nbsp;</label>
          <button className="btn-reset" onClick={onReset}>Reset</button>
        </p>
      </div> 
    </section>
  )  
}