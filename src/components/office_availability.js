import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getOfficeDetail } from '../actions';
import { bindActionCreators } from 'redux';

class OfficeAvailability extends Component {
  constructor(props) {
    super(props);
    this.state = { id:'' };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({ id });
    console.log('OfficeAvailability component mounted - id:', id);
    //this.props.change('office_id', id);
    this.props.getOfficeDetail(id);
  }
  render() {
    if (!this.props.office) {
      return (
        <div>
          <div>Office Availability</div>
          <div>
            No office selected
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <b>Availability for { this.props.office.name }</b>
          <br/><br/>
          <div>
            <p>Address: { this.props.office.address }</p>
          </div>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    office: state.activeOffice
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getOfficeDetail }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OfficeAvailability);
