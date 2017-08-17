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
  renderField(field) {
    return (
      <div>
        <label>{ field.label }</label>
        <input 
          className={ field.className } 
          type="text"
          { ...field.input }
        />
      </div>
    );
  }
  render() {
    return (
      <div>
        <div>Booking Form</div>
        <div>Office id: { this.state.id }</div>
        <hr/>
        <form onSubmit={ this.onSubmit }>
          <Field 
            name="title"
            label="Title"
            component={ this.renderField }
            />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = 'Enter a title';
  }
  return errors;
}

export default reduxForm({ form:'OfficeBookingForm' })(BookingForm);
