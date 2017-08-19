import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class BookingDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.office) {
      return (
        <div>
          <div>Booking Detail</div>
          <div>
            No booking selected
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
            <p>Price: ${ this.props.office.price }</p>
            <p>Size: { this.props.office.size } SF</p>
            <p>Description:</p>
            <p>{ this.props.office.description }</p>
            <p><img src={ this.props.office.images[0]} className="office-image" /></p>
            <hr/>
            <p>todo: google map</p>
            <p>{ this.props.office.lat}, { this.props.office.lng }</p>
            <hr/>
            <Link className="btn btn-primary" to={`/booking/${this.props.office.id}`} >
              Book office
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

export default connect(mapStateToProps)(BookingDetail);