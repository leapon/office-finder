import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { doUserSignup } from '../actions';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class UserSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',
      message:'',
      message_class:''
    };
  }
  onSubmit(fields) {
    console.log('user signup form submit - fields', fields);
    this.props.doUserSignup(fields, (data) => {
      console.log('callback from doUserSignup - data:', data);
      if (data && data.info && data.info.success) {
        console.log('>>> signup success');
        this.setState({ message:'signup is successful' });
        this.props.history.push('/');
      } else {
        console.log('>>> signup failed:', data.info.message);
        this.setState({ message:'signup fails' });
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
        <h4>User Signup</h4>
        <hr/>
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <Field
            name="email"
            label="Email"
            type="text"
            placeholder="user@company.com"
            component={ this.renderInputField }
          />
          <Field
            name="password"
            label="Password"
            type="password"
            placeholder="Minimum 6 characters"
            component={ this.renderInputField }
          />
          <Field
            name="invite_code"
            label="Invite Code"
            type="password"
            placeholder="Enter invitation code"
            component={ this.renderInputField }
          />
          <button type="submit" className="btn btn-primary">Signup</button>
          <br/>
          <div>
            <span className="status-message">{ this.state.message }</span>
          </div>
        </form>
        <br/><br/>
        <div>
          Registered user can <Link className="nav-link" to={`/user/signin`} >signin here</Link>
          <br/>
          <div className={ this.state.message_class }>
            { this.state.message }
          </div>
        </div>
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
  if (values.password && values.password.length < 6) {
    errors.password = 'Password is too short';
  }
  return errors;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ doUserSignup }, dispatch);
}

export default reduxForm({
  form:'userSignup',
  validate: validate
})(
  connect(null, mapDispatchToProps)(UserSignup)
);
