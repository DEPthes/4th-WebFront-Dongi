export default function InputGroup({ fields, goalInputs, goalChange, tab, stdChange, userInputs }){
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
              stdChange(field.name, event.target.value)} /*어떤 항목에 대해 어떤 값 바꿨는지 부모에게 알려줌*/
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
              value={goalInputs[field.name]} /*input에 현재 상태 값*/
              onChange={(event) =>
              goalChange(field.name, event.target.value)} /*어떤 항목에 대해 어떤 값 바꿨는지 부모에게 알려줌*/
            />
          </p>
        ))}

    </div>
  );
}
//필드명만 다르고 반복 구조라 정보는 배열로 분리하고 map() 이용해서 필드 수만큼 반복