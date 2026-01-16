import { Component } from "react";

class Conter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increaseCount = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log(this.state.count); // This will log the updated count value
      }
    );
    // console.log(this.state.count); // Note: This will log the old count value due to the asynchronous nature of setState
  };
  //here we are trying to increase the count by 5 on a single button click
//   inscrecmentFive = () => {
//     this.increaseCount();
//     this.increaseCount();
//     this.increaseCount();
//     this.increaseCount();
//     this.increaseCount();  
//   };



//   render() {
//     return (
//       <>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.increaseCount}>Increase Count</button>
//         <button onClick={this.inscrecmentFive}>Increase Count Five</button>// button to increase count by 5
//       </>
//     );
//   }





}

export default Conter;
