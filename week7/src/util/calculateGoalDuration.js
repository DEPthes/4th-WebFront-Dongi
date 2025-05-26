//목표 금액 도달 기간 계산
export function calculateGoalResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  targetAmount
}) {
  let currentValue = initialInvestment;
  let years = 0;

  while (currentValue < targetAmount){
    const interest = currentValue * (expectedReturn / 100);
    currentValue += interest + annualInvestment;
    years++;
  }
  return years;
}