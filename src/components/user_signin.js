import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { doUserSignin } from '../actions';
import { bindActionCreators } from 'redux';

class UserSignin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',
      message: ''
    };
  }
  onSubmit(fields) {
    console.log('user signup form submit - fields', fields);
    this.props.doUserSignin(fields, (data) => {
      console.log('callback from doUserSignin - data:', data);
      if (data && data.info && data.info.success) {
        this.setState({ message:'login is successful' });
        this.props.history.push('/');
      } else {
        this.setState({ message:'login fails' });
      }
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
          type={ field.type }
          placeholder={ field.placeholder }
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
        <h4>User Login</h4>
        <hr/>
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <Field
            name="email"
            label="Email"
            type="text"
            placeholder=""
            component={ this.renderInputField }
          />
          <Field
            name="password"
            label="Password"
            type="password"
            placeholder=""
            component={ this.renderInputField }
          />
          <button type="submit" className="btn btn-primary">Login</button>
          <br/>
          <div>
            <span className="status-message">{ this.state.message }</span>
          </div>
        </form>
        <br/>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.username) {
    errors.username = 'Enter username';
  }
  if (!values.password) {
    errors.password = 'Enter password';
  }
  return errors;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ doUserSignin }, dispatch);
}

export default reduxForm({
  form:'UserSignin',
  validate: validate
})(
  connect(null, mapDispatchToProps)(UserSignin)
);
