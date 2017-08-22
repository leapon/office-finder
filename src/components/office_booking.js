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
    this.props.change('office_id', id);
  }
  onSubmit(fields) {
    console.log('office booking form submit - fields', fields);
    this.props.bookOffice(fields, (data) => {
      console.log('callback from bookOffice - data:', data);
      //data: {error: null, docs: Array(1), info: {…}}
      //this.props.history.push('/');
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
        <br/>
        <h4>Book Office</h4>
        <hr/>
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <Field 
            name="office_id"
            label="Office ID"
            component={ this.renderInputField }
          />
          <Field 
            name="start_time"
            label="Start Date"
            component={ this.renderInputField }
          />
          <Field 
            name="end_time"
            label="End Date"
            component={ this.renderInputField }
          />
          <Field 
            name="price"
            label="Price"
            component={ this.renderInputField }
          />
          <button type="submit" className="btn btn-primary">Book Office</button>
        </form>
        <br/>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.start_time) {
    errors.start_time = 'Enter start time';
  }
  if (!values.end_time) {
    errors.end_time = 'Enter end time';
  }
  return errors;
}

export default reduxForm({ 
  form:'bookingForm',
  validate: validate
})(
  connect(null, { bookOffice })(BookingForm)
);
