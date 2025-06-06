export interface FormData {
  monthlyRent: number;
  monthlyInsurance: number;
  monthlyTax: number;
  monthlyTransport: number;
  otherMonthlyExpenses: number;
  vacationDays: number;
  sickDays: number;
  desiredSavingsPercentage: number;
}

export interface CalculationResult {
  recommendedDailyRate: number;
  recommendedMonthlyRate: number;
  minimumYearlySalary: number;
  monthlyBreakdown: number;
}