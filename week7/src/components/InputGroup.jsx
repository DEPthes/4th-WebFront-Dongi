export default function InputGroup({fields, goalInputs, goalChange}){
  return(
    <div className="input-group">
        {fields.map((field) => (
          <p key={field.name}>
            <label>{field.label}</label>
            <input
              type="number"
              required
              value={goalInputs[field.name]} /*input에 현재 상태 값*/
              onChange={(event) =>
              goalChange(field.name, event.target.value)} /*어떤 항목에 대해 어떤 값 바꿨는지 부모에게 알려줌*/
            />
          </p>
        ))}
    </div>
  );
}

      {/* <p>
        <label>Initial Investment</label>
          <input 
            type="number" 
            required   
            value={goalInput.initialInvestment}
            onChange={(event) =>
            goalChange('initialInvestment', event.target.value)
            }
            />        
      </p> */}