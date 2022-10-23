const Part = ({ course }) => {
  return (
    <div>
      <p>
        {course.name} {course.exercises}
      </p>
    </div>
  );
};

export default Part;
