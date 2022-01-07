import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HeaderPage from "./components/HeaderPage";
import MainContent from "./components/MainContent";


function App() {
  return (
    <div className="App">
      <div className="filterBackground"></div>
      <div>
      
        <HeaderPage />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
