import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class OfficeListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div onClick={ (event) => { console.log('office clicked:', this.props.office.name )} }>
        { this.props.office.name }
      </div>
    )
  }
}

export default OfficeListItem;
