import StatisticsLine from "./StatisticsLine";

const Statistics = ({ stats }) => {
  const total = stats.good + stats.neutral + stats.bad;

  let average = (stats.good - stats.bad) / total;

  let positive = (stats.good / total) * 100;

  if (!positive) {
    positive = 0;
  }

  if (!average) {
    average = 0;
  }

  if (total === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  } else {
    return (
      <>
        <h2>Statistics</h2>
        <table>
          <StatisticsLine text="Good: " value={stats.good} />

          <StatisticsLine text="Neutral: " value={stats.neutral} />

          <StatisticsLine text="Bad: " value={stats.bad} />

          <StatisticsLine text="All: " value={total} />

          <StatisticsLine text="Average: " value={average.toFixed(2)} />

          <StatisticsLine
            text="Positive: "
            value={positive.toFixed(2) + " %"}
          />
        </table>
      </>
    );
  }
};

export default Statistics;
