import { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <form>
        <div>
          <label>Enter User Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />

          <h1>{this.state.username}</h1>
        </div>
      </form>
    );
  }
}

export default Form;
