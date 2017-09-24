import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getOfficeDetail } from '../actions';
import { bindActionCreators } from 'redux';
import Calendar from './calendar';

class OfficeAvailability extends Component {
  constructor(props) {
    super(props);
    this.state = { id:'', month:9, year:2017 };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({ id });
    console.log('OfficeAvailability component mounted - id:', id);
    this.props.getOfficeDetail(id);
  }
  adjustDate(type) {
    console.log('>>> adjustDate', type);
    switch(type) {
    case 'month_decrease':
      this.setState({ month:this.state.month-1 });
      break;
    case 'month_increase':
      this.setState({ month:this.state.month+1 });
      break;
    case 'year_decrease':
      this.setState({ year:this.state.year-1 });
      break;
    case 'year_increase':
      this.setState({ year:this.state.year+1 });
      break;
    }
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
          <p>
            <button className="btn btn-sm" onClick={ () => { this.adjustDate('month_decrease') } }>-</button>
            { this.state.month }
            <button className="btn btn-sm" onClick={ () => { this.adjustDate('month_increase') } }>+</button>
            &nbsp; / &nbsp;
            <button className="btn btn-sm" onClick={ () => { this.adjustDate('year_decrease') } }>-</button>
            { this.state.year }
            <button className="btn btn-sm" onClick={ () => { this.adjustDate('year_increase') } }>+</button>
          </p>
          <div>
            <Calendar year={ this.state.year } month={ this.state.month} />
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
