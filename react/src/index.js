import React from "react";
import ReactDOM from "react-dom";

function Welcome(props) {
  return <h3>This message is from the Welcome component.</h3>;
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <h3>Change the text for the Welcome component to be 'Hello'.</h3>
    </div>
  );
}

//const rootElement = document.getElementById("root");
//ReactDOM.render(<App />, rootElement);

exports.Welcome = Welcome;
