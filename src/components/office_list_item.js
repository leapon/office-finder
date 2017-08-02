import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class OfficeListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>{ this.props.office.name }</div>
    )
  }
}