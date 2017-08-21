import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { selectOffice } from '../actions/index';

class OfficeListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="office-list-item" onClick={ (event) => { this.props.selectOffice(this.props.office); } }>
        { this.props.office.name }
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectOffice:selectOffice }, dispatch);
}

export default connect(null, mapDispatchToProps)(OfficeListItem);
