import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [test, setTest] = useState([]);

  async function fetchData() {
    await fetch("/api/test")
      .then((response) => response.json())
      .then((data) => setTest(data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to MeloNelo</h2>
        <h3>{console.log(test)}</h3>
      </header>
    </div>
  );
}

export default App;
