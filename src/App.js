import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Movies from "./components/Movies";

class App extends Component {
  render() {
    return (
      <div className="main">
        <Movies />
      </div>
    );
  }
}

export default App;
