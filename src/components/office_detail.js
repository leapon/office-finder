import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class OfficeDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.office) {
      return (
        <div>
          <div>Office Detail</div>
          <div>
            No office selected
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div>Office Detail</div>
          <br/>
          <div>
            <p>Name: { this.props.office.name }</p>
            <p>Address: { this.props.office.address }</p>
          </div>
        </div>
      )
    }
  }
}

export default OfficeDetail;
