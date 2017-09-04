import React, { Component } from 'react';
import { connect } from 'react-redux';

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
          <li className="nav-item">
            <a className="nav-link" href="/user/signin">Signin</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/user/signup">Signup</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              user: { this.props.activeUser && this.props.activeUser.username }
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  console.log('>>> app_header mapStateToProps state:', state);
  return {
    activeUser: state.activeUser || null
  }
}

export default connect(mapStateToProps)(Header);
