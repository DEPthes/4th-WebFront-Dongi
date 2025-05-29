export default function Tab({ onClick }) {
  return(
      <div className="tabs">
        <button className="tab-standard" onClick={() => onClick("standard")}>Standard calculator</button>
        <button  className="tab-goal" onClick={() => onClick("goal")}>Goal calculator</button>
      </div>
    )
}