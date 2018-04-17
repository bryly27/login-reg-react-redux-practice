import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';  
import history from '../routes/history';

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        history.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        history.push('/');
      }
    }

    render() {
      return <ComposedComponent { ...this.props} />
    }
  }

  function mapStateToProps(state) {
    return {
      authenticated: state.authReducer.authenticated
    };
  }

  return connect(mapStateToProps)(Authentication);
}