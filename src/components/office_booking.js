import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = { id:'' };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({ id });
    console.log('>>> BookingForm component mounted - id:', id);
  }
  render() {
    return (
      <div>
        <div>Booking Form</div>
        <div>Office id: { this.state.id }</div>
      </div>
    );
  }
}

export default BookingForm;
