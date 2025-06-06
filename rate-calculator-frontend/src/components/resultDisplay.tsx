import { CalculationResult } from "./interfaces";

interface ResultDisplayProps {
  result: CalculationResult;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {

    if (!result || typeof result.recommendedDailyRate === 'undefined') {
    return <div className="result-container">Loading...</div>;
  }

  return (
  <div className="result-container">
    <h3>Results</h3>
    <p>Recommended Daily Rate: €{result.recommendedDailyRate.toFixed(2)}</p>
    <p>Recommended Monthly Rate: €{result.recommendedMonthlyRate.toFixed(2)}</p>
    <p>Minimum Yearly Salary: €{result.minimumYearlySalary.toFixed(2)}</p>
    <p>Monthly Breakdown: €{result.monthlyBreakdown.toFixed(2)}</p>
  </div>
  );
};
