import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { bookOffice } from '../actions';

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = { id:'' };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({ id });
    console.log('BookingForm component mounted - id:', id);
    this.props.change('id', id);
  }
  onSubmit(fields) {
    console.log('office booking form submit - fields', fields);
    this.props.bookOffice(fields, () => {
      console.log('callback from bookOffice');
      this.props.history.push('/');
    });
  }
  renderInputField(field) {
    const { meta:{ touched, error } } = field;
    const className = `form-group ${ touched && error ? 'has-danger' : '' }`;
    return (
      <div className={className}>
        <label>{ field.label }</label>
        <input 
          { ...field.input }
          className="form-control"
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
        <div>Office id: { this.state.id }</div>
        <hr/>
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <Field 
            name="id"
            label="Office ID"
            component={ this.renderInputField }
          />
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
  console.log('validate - input:', values,'errors:', errors);
  return errors;
}

export default reduxForm({ 
  form:'bookingForm',
  validate: validate
})(
  connect(null, { bookOffice })(BookingForm)
);
