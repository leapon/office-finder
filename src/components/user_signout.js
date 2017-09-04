import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { doUserSignout } from '../actions';
import { bindActionCreators } from 'redux';

class UserSignout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message:''
    };
  }
  componentDidMount() {
    console.log('>>> componentDidMount');
    this.props.doUserSignout((data) => {
      setState({ message:'You are signed out' });
    });
  }
  render() {
    const { doSignout } = this.props;
    return (
      <div className="col-md-6">
        <br/>
        <h4>User Signout</h4>
        <hr/>
        <div>
          { this.state.message }
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ doUserSignout }, dispatch);
}

export default connect(null, mapDispatchToProps)(UserSignout);
