//import React from "react";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Welcome from "./welcome";

function App() {
  return (
    <div className="App">
      <Welcome />
      <h3>Change the text for the Welcome component to be 'Hello'.</h3>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
