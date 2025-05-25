//투자목표달성 계산기
//초기투자금,연간적립금액, 기대 수익률, 목표금액 -> 기간

export default function GoalInput(userInput, onChange, onReset){
  return(
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input 
            type="number" 
            required   
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
          <label>Target Amount</label>
          <input 
            type="number" 
            required
            value={userInput.targetAmount}
            onChange={(event) =>
              onChange('targetAmount', event.target.value)
            }
            /> 
        </p>
        <p>
          <label>&nbsp;</label>
          <button className="btn-reset" onClick={onReset}>Reset</button>
        </p>      
      </div>  
    </section>
  )  
}