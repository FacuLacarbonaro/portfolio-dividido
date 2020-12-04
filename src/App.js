import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.scss";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Main />
      </div>
    </Router>
  );
}

export default App;
