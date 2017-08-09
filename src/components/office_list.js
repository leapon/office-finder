import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import OfficeListItem from './office_list_item';

class OfficeList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const officeItems = this.props.offices.map(office => {
      return <OfficeListItem
        key={ office.name }
        office={ office }
        onOfficeSelect = { this.props.onOfficeSelect }
      />
    });
    return (
      <div>
        <div>Office List</div>
        offices #: { this.props.offices.length }
        <hr/>
        { officeItems }
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    offices: state.offices
  }
}
export default connect(mapStateToProps)(OfficeList);
