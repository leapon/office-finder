import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GoogleMap from './google_map';

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
          <b>{ this.props.office.name }</b>
          <br/><br/>
          <div>
            <p>Address: { this.props.office.address }</p>
            <p>Price: ${ this.props.office.rent_daily }/day</p>
            <p>Size: { this.props.office.size } SF</p>
            <p>Description:</p>
            <p>{ this.props.office.description }</p>
            <p><img src={ this.props.office.images[0]} className="office-image" /></p>
            <hr/>
            <p>Office Location</p>
            <GoogleMap lat={ this.props.office.lat } lng={ this.props.office.lng }/>
            <hr/>
            <Link className="btn btn-primary" to={`/office/${this.props.office.id}/availability`} >
              Office Availability
            </Link>
            &nbsp;
            <Link className="btn btn-primary" to={`/office/${this.props.office.id}/booking`} >
              Book Office
            </Link>
            <br/><br/>
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

export default connect(mapStateToProps)(OfficeDetail);
