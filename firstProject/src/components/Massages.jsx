import { Component } from "react";

class Massages extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }

  // 1 way to change state
  //   changeMessage() {
  //     // Massages:"Thank you for subscribing" // wrong way to change state
  //     this.setState({
  //       message: "Thank you for subscribing",
  //     });
  //   }
  // 2 way to change state using arrow function
  changeMessage = () => {
    this.setState({
      message: "Thank you for subscribing",
    });
  };
  render() {
    return (
      <>
        <h1>Massages is {this.state.message}</h1>
        {/* <button onClick={() => this.changeMessage()}>click here</button> */}{" "}
        {/* // 1 way to call function */}
        {/* 
         // 2 way to    call function */}
        <button onClick={this.changeMessage}>click here</button>
      </>
    );
  }
}
export default Massages;
