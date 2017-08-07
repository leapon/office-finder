import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class OfficeListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div onClick={ (event) => { this.props.onOfficeSelect(this.props.office); } }>
        { this.props.office.name }
      </div>
    )
  }
}

export default OfficeListItem;
