import React, { Component } from "react";
class Student extends Component {
  render() {
    return (
      <>
        <h1>Student Component</h1>
        This is Student Component
        <h1>name is {this.props.name}</h1>
        <h1>lastname is {this.props.lastname}</h1>
        <h1>grade is {this.props.grade}</h1>
      </>
    );
  }
}
export default Student;
