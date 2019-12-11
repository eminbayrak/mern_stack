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
        {/* <div>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#profile">
                Profile
              </a>
            </li>
          </ul>
          <div className="jumbotron bg-transparent mb-0 radius-0"></div>
          <div id="myTabContent" className="tab-content">
            <div className="tab-pane fade active show" id="home">
              <p>
                Raw denim you probably haven't heard of them jean shorts Austin.
                Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                Mustache cliche tempor, williamsburg carles vegan helvetica.
                Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby
                sweater eu banh mi, qui irure terry richardson ex squid. Aliquip
                placeat salvia cillum iphone. Seitan aliquip quis cardigan
                american apparel, butcher voluptate nisi qui.
              </p>
            </div>
            <div className="tab-pane fade" id="profile">
              <p>
                Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                single-origin coffee squid. Exercitation +1 labore velit, blog
                sartorial PBR leggings next level wes anderson artisan four loko
                farm-to-table craft beer twee. Qui photo booth letterpress,
                commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                vinyl cillum PBR. Homo nostrud organic, assumenda labore
                aesthetic magna delectus mollit.
              </p>
            </div>
          </div>
        </div> */}
        <h1>IEL Logistics</h1>
      </div>
    );
  }
}

export default Login;
