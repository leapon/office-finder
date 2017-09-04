import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-light">
        <Link className="navbar-brand" to={`/`} >OfficeFinder</Link>
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to={`/about`} >About</Link>
          </li>
          { this.props.activeUser ? (
            <li className="nav-item">
              <Link className="nav-link" to={`/user/signout`} >Signout</Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link className="nav-link" to={`/user/signin`} >Signin</Link>
            </li>
          )}
          <li className="nav-item">
            <Link className="nav-link" to={`/`} >
              { this.props.activeUser && this.props.activeUser.username }
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  //console.log('>>> app_header mapStateToProps state:', state);
  return {
    activeUser: state.activeUser || null
  }
}

export default connect(mapStateToProps)(Header);
