import React, { Component } from "react";

class users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Emin"
    };
  }
  changeName(){
      this.setState({
          name: "Bayrak"
      })
  }
  render() {
    return (
      <div>
        <h5>My name is {this.state.name}</h5>
        <button onClick={this.changeName}>Click</button>
        <button onClick={() => this.setState({name: "Bayrak"})}>Click 2</button>
      </div>
    );
  }
}

export default users;
