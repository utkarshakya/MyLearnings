import React, { useState } from "react";

function App() {
  let [counter, setCounter] = useState(10);

  function add() {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  }
  function remove() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Cahi Aur {counter}</h1>
      <button onClick={add}>Add {counter}</button>
      <button onClick={remove}>Remove {counter}</button>
    </>
  );
}

export default App;
