import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class OfficeDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>Office Detail</div>
        <div>
          { this.props.office && this.props.office.name || 'no office selected'}
        </div>
      </div>
    )
  }
}

export default OfficeDetail;
