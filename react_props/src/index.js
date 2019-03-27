//import React from "react";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Person from "./Person";

class App extends Component {
  //const name = "Cheers";

  render() {
    return (
      <div className="App">
        <Person name="Pete" />
        //Create another Person component with a name
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
