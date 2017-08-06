import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class OfficeDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>Office Detail</div>
      <div>
        { this.props.office.name }
      </div>
    )
  }
}

export default OfficeDetail;
