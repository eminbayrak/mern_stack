import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      firstname: "",
      lastname: "",
      password: ""
    };
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangeFirstname(e) {
    this.setState({
      firstname: e.target.value
    });
  }
  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      password: this.state.password
    };

    console.log(user);

    axios
      .post("http://localhost:5000/users/add", user)
      .then(res => console.log(res.data));

    this.setState({
      email: "",
      firstname: "",
      lastname: "",
      password: ""
    });
  }

  render() {
    return (
      <div className="jumbotron bg-transparent mb-0 radius-0">
        <div className="card">
          <div className="card-body">
            <h3>Create New User</h3>
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
                <label>Firstname</label>
                <input
                  type="text"
                  required
                  placeholder="Firstname"
                  className="form-control"
                  value={this.state.firstname}
                  onChange={this.onChangeFirstname}
                />
              </div>
              <div className="form-group">
                <label>Lastname</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Lastname"
                  value={this.state.lastname}
                  onChange={this.onChangeLastname}
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
                  value="Create User"
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
