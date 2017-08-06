import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OfficeListItem from './office_list_item';

class OfficeList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const officeItems = this.props.offices.map(office => {
      return <OfficeListItem key={office.id} office={ office } />
    });
    return (
      <div>
        <div>Office List</div>
        offices #: { this.props.offices.length }
        { officeItems }
      </div>
    );
  }
};

export default OfficeList;
