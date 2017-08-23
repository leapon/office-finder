import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBookingDetail } from '../actions';
import { bindActionCreators } from 'redux';

class BookingDetail extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({ id });
    console.log('Booking id:', id);
    //this.props.change('booking_id', id);
    this.props.getBookingDetail(id);
  }
  render() {
    if (!this.props.booking) {
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
          <h4>Booking Detail</h4>
          <hr/>
          <div>
            <p>Booking ID: { this.props.booking.office_id }</p>
            <p>Start Time: { this.props.booking.start_time }</p>
            <p>End Time: { this.props.booking.end_time }</p>
            <p>Price: ${ this.props.booking.price }</p>
            <p>Booked By: { this.props.booking.create_by }</p>
            <p>Booked On: { this.props.booking.create_date }</p>
          </div>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    booking: state.activeBooking
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getBookingDetail }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingDetail);
