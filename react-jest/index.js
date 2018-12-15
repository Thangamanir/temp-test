import React from "react";
import ReactDOM from "react-dom";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    if (!props.count) {
      this.state = {
        count: 1
      };
    } else {
      this.state = {
        count: props.count
      };
    }

    this.plusOne = this.plusOne.bind(this);
  }

  plusOne() {
    this.setState({ count: parseInt(this.state.count) + 1 });
  }

  render() {
    return <button onClick={this.plusOne}>{this.state.count}</button>;
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Button count="0" />, rootElement);
