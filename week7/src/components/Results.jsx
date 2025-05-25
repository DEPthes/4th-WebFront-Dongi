import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment = 
    resultsData[0].valueEndOfYear - 
    resultsData[0].interest - 
    resultsData[0].annualInvestment;

  
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th> {/*그 해 말 기준 누적 총 자산*/}
          <th>Interest (Year)</th> {/*해당 연도 이자 수익*/}
          <th>Total Interest</th> {/*총 이자 수익*/}
          <th>Invested Capital</th> {/*실제 투자한 총 금액액*/}
        </tr>
      </thead>
      <tbody>
        {resultsData.map(yearData => {
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
  );
}