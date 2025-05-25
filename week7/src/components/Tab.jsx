export default function Tab({ onClick }){
  return(
      <div className="tabs">
        <button onClick={() => onClick("standard")}>Standard calculator</button>
        <button onClick={() => onClick("goal")}>Goal calculator</button>
      </div>
    )
}