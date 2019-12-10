import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="jumbotron bg-transparent mb-0 radius-0">
        <div className="card">
          <div className="card-body">
            <h3>Login to your account</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  required
                  className="form-control"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary btn-shadow px-3 my-2 ml-0 text-left js-ht-download-link"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
