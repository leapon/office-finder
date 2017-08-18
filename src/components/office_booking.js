import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = { id:'', title:'test' };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({ id });
    console.log('>>> BookingForm component mounted - id:', id);
  }
  onSubmit(fields) {
    //event.preventDefault();
    console.log('>>> office booking form submit - fields', fields);
  }
  renderInputField(field) {
    const { meta:{ touched, error } } = field;
    const className = `form-control ${ touched && error ? 'has-error' : '' }`;
    return (
      <div className="form-group">
        <label>{ field.label }</label>
        <input 
          { ...field.input }
          className={ className } 
          type="text"
        />
        <div className="text-help">
          { touched ? error : '' }
        </div>
      </div>
    );
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="col-md-6">
        <div>Booking Form</div>
        <div>Office id: { this.state.title }</div>
        <hr/>
        <form onSubmit={ handleSubmit(this.onSubmit) }>
          <Field 
            name="title"
            label="Title"
            component={ this.renderInputField }
            />
          <Field 
            name="value"
            label="Value"
            component={ this.renderInputField }
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
  console.log('validate input:', values);
  console.log('validate errors:', errors);
  return errors;
}

export default reduxForm({ 
  form:'OfficeBookingForm',
  validate: validate
})(BookingForm);
