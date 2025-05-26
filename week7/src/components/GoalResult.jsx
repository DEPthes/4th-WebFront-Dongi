import { calculateGoalResults,formatter} from "../util/calculateGoalDuration"

export default function GoalResults({goalInput}){
  const resultsData = calculateGoalResults(goalInput);
    const initialInvestment = 
    resultsData.annualData[0].valueEndOfYear - 
    resultsData.annualData[0].interest - 
    resultsData.annualData[0].annualInvestment;

  return(
    <>  
      <p className="center">It will take approximately <strong>{resultsData.years}</strong> year(s) to reach your target amount.</p>  
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th> {/*그 해 말 기준 누적 총 자산*/}
            <th>Interest (Year)</th> {/*해당 연도 이자 수익*/}
            <th>Total Interest</th> {/*총 이자 수익*/}
            <th>Invested Capital</th> {/*실제 투자한 총 금액*/}
          </tr>
        </thead>
        <tbody>
          {resultsData.annualData.map(yearData => {
            const totalInterest = 
              yearData.valueEndOfYear -  
              yearData.annualInvestment * 
              yearData.year -
              initialInvestment;
            const totalAmountInvested = yearData.valueEndOfYear -  totalInterest;

            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </>
    )

}