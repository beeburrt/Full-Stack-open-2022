import { useState } from "react";

function App() {
  const anecdotes = [
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "You cannot teach beginners top-down programming, because they don't know which end is up.",
    "Inside every large program, there is a small program trying to get out.",
    "Why do we never have time to do it right, but always have time to do it over?.",
    "Good judgment comes from experience, and experience comes from bad judgment.",
    "I have always found that plans are useless, but planning is indispensable.",
    "Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live.",
    "Every big computing disaster has come from taking too many ideas and putting them in one place.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  let number = Math.floor(Math.random() * anecdotes.length);

  const votesCopy = [...votes];

  const handleClick = () => {
    setSelected(number);
  };

  const handleVote = () => {
    votesCopy[selected]++;
    setVotes(votesCopy);
  };

  let highestVote = votesCopy.reduce((acc, curr) => Math.max(acc, curr));
  let indexOfHighestVote = votesCopy.indexOf(highestVote);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleClick}>next anecdote</button>
      </div>
      <h2>Anecdote with most votes</h2>
      <p>
        {highestVote === 0
          ? anecdotes[selected]
          : anecdotes[indexOfHighestVote]}
      </p>
      <p>{highestVote}</p>
    </div>
  );
}

export default App;
