//import React from "react";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Person from "./Person";

class App extends Component {
  //const name = "Cheers";
  const Person={name,Age};
  render(){
    return(
      <div className="App">
        <Person name="Pete" />
        <Person name="Thangamani"/>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
