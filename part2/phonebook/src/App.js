import { useState } from "react";

import "./App.css";

function App() {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  console.log(persons);

  const handleChange = (evt) => {
    setNewName(evt.target.value);
  };

  const addName = (evt) => {
    evt.preventDefault();
    const newPerson = newName;

    setPersons(persons.concat(newPerson));
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input onChange={handleChange} />
        </div>
        <div>debug: {newName}</div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => {
          return <li key={newName}>{person.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
