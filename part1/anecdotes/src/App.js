import React, { useMemo, useState } from "react";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
];

const App = () => {
  const [points, setPoints] = useState(
    Array.apply(null, new Array(anecdotes.length)).map(
      Number.prototype.valueOf,
      0
    )
  );

  const AnecdoteMostVote = useMemo(() => {
    const maxVote = Math.max(...points);
    const maxIndex = points.indexOf(maxVote);

    return anecdotes[maxIndex];
  }, [points]);

  const [selected, setSelected] = useState(0);

  const onClickNextAnecdote = () => {
    const random = ~~(Math.random() * (anecdotes.length - 1));

    setSelected(random);
  };

  const onClickVote = () => {
    const draftPoints = [...points];

    draftPoints[selected] += 1;

    setPoints(draftPoints);
  };

  return (
    <>
      <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <div>
        <button onClick={onClickVote}>vote</button>
        <button onClick={onClickNextAnecdote}>next anecdote</button>
      </div>
      <h2>Anecdote with most votes</h2>
      <div>{AnecdoteMostVote}</div>
    </>
  );
};

export default App;
