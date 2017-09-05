import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-3">Looking for an office? We can help</h1>
        <p className="lead">OfficeFinder is the premier website for finding office information.</p>
        <hr className="my-4"/>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Link className="btn btn-primary btn-lg" to="office/search">Search for office</Link>
        </p>
      </div>
    );
  }
}

export default Home;
