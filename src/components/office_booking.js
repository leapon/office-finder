import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

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
  onSubmit(event) {
    event.preventDefault();
    console.log('>>> office booking form submit');
  }
  render() {
    return (
      <div>
        <div>Booking Form</div>
        <div>Office id: { this.state.id }</div>
        <hr/>
        <form onSubmit={this.onSubmit}>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default BookingForm;
