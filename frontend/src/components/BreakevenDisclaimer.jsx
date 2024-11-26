import { formatDays } from '../utils/format';

function BreakevenDisclaimer({ yearlyProfit = 0, initialInvestment = 0 }) {
  const profit = Number(yearlyProfit) || 0;
  const investment = Number(initialInvestment) || 0;

  const breakevenPercentage = investment > 0 ? (profit / investment) * 100 : 0;

  const breakevenDays = profit > 0 ? (investment / profit) * 365 : Infinity;

  return (
    <>
      <p className="text-gray-700 font-semibold">
        Yearly Profit covers {breakevenPercentage.toFixed(2)}% of the Initial Investment.
      </p>
      {breakevenDays !== Infinity ? (
        <p>At this rate, breakeven will be achieved in {formatDays(breakevenDays.toFixed(2))}.</p>
      ) : (
        <p>Breakeven cannot be achieved with the current profit rate.</p>
      )}
      <br />
    </>
  );
}

export default BreakevenDisclaimer;