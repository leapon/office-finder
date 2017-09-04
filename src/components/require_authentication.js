import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object.isRequired
    }
    componentWillMount() {
      console.log('>>> componentWillMount this.props.activeUser:', this.props.activeUser);
      if (!this.props.activeUser) {
        this.context.router.history.push('/user/signin');
      }
    }
    componentWillUpdate(nextProps) {
      console.log('>>> componentWillUpdate nextProps.activeUser:', nextProps.activeUser);
      if (!nextProps.activeUser) {
        this.context.router.history.push('/user/signin');
      }
    }
    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return {
      activeUser: state.activeUser || null
    }
  }

  return connect(mapStateToProps)(Authentication);
}

