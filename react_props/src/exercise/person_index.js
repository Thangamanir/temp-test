//import React from "react";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Person from "./Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person />
        <h3>Change 'Hello World!' to your name.</h3>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
