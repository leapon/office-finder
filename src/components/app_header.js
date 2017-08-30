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
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
