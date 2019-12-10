import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      // <nav className="navbar fixed-top navbar-dark bg-primary">
      //   <Link to="/" className="navbar-brand text-light">
      //     MERN Stack
      //   </Link>
      //   <div className="form-inline">
      //     <ul className="navbar-nav mr-auto">
      //       <li className="navbar-item">
      //         <Link to="/createuser" className="btn btn-sm btn-outline-light">
      //           Register
      //         </Link>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <Link to="/" className="navbar-brand text-light">
          MERN Stack
        </Link>
        <button
          className="navbar-toggler text-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link text-light" >
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link text-light" >
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link text-light">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link text-light" >
                About
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <li className="navbar-item navbar-nav mr-auto">
              <Link to="/createuser" className="btn btn-primary btn-sm">
                Register
              </Link>
            </li>
          </form>
        </div>
      </nav>
    );
  }
}
export default Navbar;
