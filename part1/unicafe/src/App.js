import React, { useMemo, useState } from "react";

// StatisticLine component
const StatisticLine = ({ text, value, isPercent }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>
        {!isNaN(value) ? value : 0} {isPercent && "%"}
      </td>
    </tr>
  );
};

// Statistics component
const Statistics = ({ good, neutral, bad }) => {
  const average = useMemo(() => {
    return (good - bad) / (bad + good + neutral);
  }, [good, neutral, bad]);

  const positive = useMemo(() => {
    return (good / (bad + good + neutral)) * 100;
  }, [good, neutral, bad]);

  return (
    <>
      {good + bad + neutral !== 0 ? (
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={bad + good + neutral} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={positive} isPercent />
          </tbody>
        </table>
      ) : (
        <div>No feedback given</div>
      )}
    </>
  );
};

// Button component
const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickGood = () => {
    setGood(good + 1);
  };

  const onClickNeutral = () => {
    setNeutral(neutral + 1);
  };

  const onClickBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h2>give feedback</h2>
      <div>
        <Button onClick={onClickGood}>good</Button>
        <Button onClick={onClickNeutral}>neutral</Button>
        <Button onClick={onClickBad}>bad</Button>
      </div>
      <h2>statistics</h2>
      <Statistics bad={bad} good={good} neutral={neutral} />
    </div>
  );
};

export default App;
