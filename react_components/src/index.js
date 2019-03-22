//import React from "react";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Person from "./Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
