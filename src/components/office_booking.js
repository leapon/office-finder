import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class BookingForm extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log('>>> BookingForm component mounted - id:', id);
  }
  render() {
    return (
      <div>Booking Form</div>
    );
  }
}

export default BookingForm;
