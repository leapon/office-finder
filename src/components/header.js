import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-light">
        <a className="navbar-brand" href="/">OfficeFinder</a>
        <ul className="nav navbar-nav">
          <li className="nav-item nav-link">Help</li>
          <li className="nav-item nav-link">About</li>
        </ul>
      </nav>
    );
  }
}

export default Header;
