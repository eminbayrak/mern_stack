import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="jumbotron bg-transparent mb-0 radius-0">
        <div card border-primary mb-3>
          <h1 className="text-center">IEL is a n awesome place to work</h1>
        </div>
      </div>
    );
  }
}

export default Home;
