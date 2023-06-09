import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'

export class NavBar extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Storage</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/reg">Sign Up</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
            
      </div>
    );
  };
};

export default NavBar
