import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useQuery } from '@tanstack/react-query';

const getData = async () => {
  "use server";

  console.log("on the server");

  return [1, 2, 3];
};

function App() {
  const { data } = useQuery({
    queryKey: ['serverData'],
    queryFn: () => getData()
  })
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
