//목표 금액 도달 기간 계산
export function calculateGoalResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  targetAmount
}) {
  let currentValue = initialInvestment;
  let years = 0;

  //const annualData = [];

  while (currentValue < targetAmount){
    const interest = currentValue * (expectedReturn / 100);
    currentValue += interest + annualInvestment;
    years++;
    // annualData.push({
    //   year: years,
    //   interest: interest,
    //   valueEndOfYear: currentValue,
    //   annualInvestment: annualInvestment
 //   });

  }
  return years;
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});



