import { useState } from "react";

import "./App.css";

function App() {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleChange = (evt) => {
    setNewName(evt.target.value);
  };

  const addName = (evt) => {
    evt.preventDefault();
    const personObject = {
      name: newName,
      id: Math.random(),
      number: null,
    };
    // if (personObject.name === evt.currentTarget.value) return null;
    setPersons((prevPersons) => prevPersons.concat(personObject));

    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name:{" "}
          <input
            value={newName}
            onChange={(evt) => setNewName(evt.currentTarget.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => {
          return <li key={person.id}>{person.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
