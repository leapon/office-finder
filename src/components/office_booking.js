import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class BookingForm extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log('>>> BookingForm component mounted');
  }
  render() {
    return (
      <div>Booking Form</div>
    );
  }
}

export default BookingForm;
