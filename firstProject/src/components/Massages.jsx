import { Component } from "react";

class Massages extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }

  changeMessage() {
    // Massages:"Thank you for subscribing" // wrong way to change state
    this.setState({
      message: "Thank you for subscribing",
    });
  }
  render() {
    return (
      <>
        <h1>Massages is {this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>click here</button>
      </>
    );
  }
}
export default Massages;
