import React, {useState} from 'react';

function App() {
  const [uuid, setUuid] = useState(crypto.randomUUID());
  const [result, setResult] = useState(null);

  function getEquation() {
    return document.getElementById("equation").value;
  }

  async function sendEquation(equation) {
    const payload = { "equation" : equation };
    console.log("Sending: "+JSON.stringify(payload));
    const response = await fetch("http://localhost:8002/{uuid}/calculate", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    console.log("Response: "+JSON.stringify(data));
  }

  async function submitEquation(e) {
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
