import React, { Component } from "react";
import Contacts from "./components/contacts";
// import Users from "./components/users";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import "./assests/css/materia/bs-neon.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateUser from "./components/CreateUser";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <Route path="/" exact component={Login}/> 
          <Route path="/createuser" exact component={CreateUser}/> 
        </div>
      </Router>
    );
  }

  state = {
    contacts: []
  };

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        console.log("this data", data);
        this.setState({ contacts: data });
      })
      .catch(console.log);
  }
}

export default App;
