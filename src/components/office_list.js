import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import OfficeListItem from './office_list_item';
import { selectOffice } from '../actions/index';
import { bindActionCreators } from 'redux';

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectOffice:selectOffice }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OfficeList);
