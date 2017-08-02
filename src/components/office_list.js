import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class OfficeList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>Office List</div>
        offices #: { this.props.offices.length }
      </div>
    );
  }
};

export default OfficeList;
