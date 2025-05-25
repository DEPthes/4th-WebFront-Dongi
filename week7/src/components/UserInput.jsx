//사용자의 입력 조각 가져옴
//초기 투자 금액, 연간 투자금, 예상 수익률, 투자 기간 입력 

export default function UserInput({ onChange, userInput, onReset }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input 
            type="number" 
            required   /*빈입력방지*/
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange('initialInvestment', event.target.value)
            }
            /> 
        </p>
        <p>
          <label>Annual Investment</label>
          <input 
            type="number" 
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange('annualInvestment', event.target.value)
            }
            /> 
        </p> 
        <p>
          <label>Expected Return</label>
          <input 
            type="number" 
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChange('expectedReturn', event.target.value)
            }
            /> 
        </p>
        <p>
          <label>Duration</label>
          <input 
            type="number" 
            required
            value={userInput.duration}
            onChange={(event) =>
              onChange('duration', event.target.value)
            }
            /> 
        </p>
        <p>
          <label>&nbsp;</label>
          <button className="btn-reset" onClick={onReset}>Reset</button>
        </p>      
      </div>  
    </section>
  );
}