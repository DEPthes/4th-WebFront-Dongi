//사용자의 입력 조각 가져옴
//초기 투자 금액, 연간 투자금, 예상 수익률, 투자 기간 입력 
export default function UserInput(){
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" required /> {/*빈입력방지*/}
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" required /> 
        </p> 
        <p>
          <label>Expected Investment</label>
          <input type="number" required /> 
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required /> 
        </p>        
      </div>  
    </section>
  );
}