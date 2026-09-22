import React, {useState} from 'react';

function App() {
  const [uuid, setUuid] = useState(crypto.randomUUID());

  function getEquation() {
    return document.getElementById("equation").value;
  }

  function sendEquation(equation) {
    const payload = { "equation" : equation };
    console.log(JSON.stringify(payload));
  }

  function submitEquation(e) {
    e.preventDefault();
    const mathFunction = getEquation();
    sendEquation(mathFunction);
  }

  return (
    <form className="App" onSubmit={submitEquation}>
      <p>Session: {uuid}</p>
      <p>Enter your equation using prefix notation: <input type="text" id="equation" /></p>
      <p><input type="submit" value="Calculate!" /></p>
    </form>
  );
}

export default App;
