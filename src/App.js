import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo1.png";
import "./App.css";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>To start the project</p>
        <span
          className="text-blue-400 cursor-pointer"
          onClick={() => navigate("/home")}
        >
          Click here.
        </span>
      </header>
    </div>
  );
}

export default App;
