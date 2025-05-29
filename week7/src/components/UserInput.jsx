//사용자의 입력 조각 가져옴
//초기 투자 금액, 연간 투자금, 예상 수익률, 투자 기간 입력 
import InputGroup from "./InputGroup";

const stdFields = [
  { name: "initialInvestment", label: "Initial Investment"},
  { name: "annualInvestment", label: "Annual Investment"},
  { name: "expectedReturn", label: "Expected Return"},
  { name: "duration", label: "Duration"}
];


export default function UserInput({ tab, stdChange, userInput, onReset }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <InputGroup tab={tab} userInputs={userInput} stdChange={stdChange} fields={stdFields}/>
        <p>
          <label>&nbsp;</label>
          <button className="btn-reset" onClick={onReset}>Reset</button>
        </p>      
      </div>  
    </section>
  );
}