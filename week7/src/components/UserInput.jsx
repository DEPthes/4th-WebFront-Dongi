//사용자의 입력 조각 가져옴
//초기 투자 금액, 연간 투자금, 예상 수익률, 투자 기간 입력 
import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    })
  }

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
              handleChange('initialInvestment', event.target.value)
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
              handleChange('annualInvestment', event.target.value)
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
              handleChange('expectedReturn', event.target.value)
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
              handleChange('duration', event.target.value)
            }
            /> 
        </p>        
      </div>  
    </section>
  );
}