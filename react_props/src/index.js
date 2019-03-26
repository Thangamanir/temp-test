//import React from "react";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Person from "./Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person name="Pete" />
        //Add another Person component with your name to be displayed
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
