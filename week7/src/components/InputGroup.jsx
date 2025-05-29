export default function InputGroup({ fields, goalInputs, goalChange, stdChange, userInputs, tab }) {
  return(
    <div className="input-group">
        {tab === "standard" &&
        fields.map((field) => (
          <p key={field.name}>
            <label>{field.label}</label>
            <input
              type="number"
              required
              value={userInputs[field.name]} /*input에 현재 상태 값*/
              onChange={(event) =>
              stdChange(field.name, event.target.value)} 
            />
          </p>
        ))}

        {tab === "goal" &&
        fields.map((field) => (
          <p key={field.name}>
            <label>{field.label}</label>
            <input
              type="number"
              required
              value={goalInputs[field.name]} 
              onChange={(event) =>
              goalChange(field.name, event.target.value)} 
            />
          </p>
        ))}
    </div>
  );
}