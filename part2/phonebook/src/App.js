import { useState } from "react";

import "./App.css";

function App() {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleChange = (evt) => {
    console.log(evt.target.value);
    setNewName(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // something here?
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChange} />
        </div>
        <div>debug: {newName}</div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    </div>
  );
}

export default App;
