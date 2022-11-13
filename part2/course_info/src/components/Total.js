const Total = ({ parts }) => {
  const sum = parts
    .map((part) => {
      return part.exercises;
    })
    .reduce((acc, curr) => {
      return (acc += curr);
    });
  return (
    <p>
      <strong>total of {sum} exercises</strong>
    </p>
  );
};

export default Total;
