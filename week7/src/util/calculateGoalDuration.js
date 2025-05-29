//목표 금액 도달 기간 계산
export function calculateGoalResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  targetAmount
}) {
  let currentValue = initialInvestment;
  let years = 0;

  const annualData = [];

  while (currentValue < targetAmount){
    const interest = currentValue * (expectedReturn / 100);
    currentValue += interest + annualInvestment;
    years++;
    annualData.push({
      year: years,
      interest: interest,
      valueEndOfYear: currentValue,
      annualInvestment: annualInvestment
    });
  }
  return{
    years,
    annualData
  };
}
//숫자를 미국식 달러 통화 형식(예: $1,000)으로 변환
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});