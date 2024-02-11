import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

const getData = async () => {
  "use server";

  console.log("on the server");

  return [1, 2, 3];
};

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    async function loadData() {
      const serverData = await getData();
      setData(serverData);
    }
    loadData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <pre>{JSON.stringify(data, null, 4)}</pre>
      </header>
    </div>
  );
}

export default App;
