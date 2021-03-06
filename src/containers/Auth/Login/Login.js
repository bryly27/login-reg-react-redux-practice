import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../../actions/auth_actions';

class Login extends Component {
  componentWillMount() {
    this.fields = [
      { name: 'email', label: 'Email', type: 'text', placeholder: 'Enter Email' },
      { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter Password' }
    ];
  }

  onSubmit({email, password}) {
    this.props.loginUser({email, password});
  }

  renderField(field) {
    return (
      <div>
        <input {...field.input} type={field.type} placeholder={field.placeholder} />
        {field.meta.touched && field.meta.error}
      </div>
    );
  }

  renderFields() {
    return this.fields.map(field => {
      return (
        <Field
          key={field.name}
          name={field.name}
          label={field.label}
          type={field.text}
          placeholder={field.placeholder} 
          component={this.renderField} />
      );
    });
  }
  
  render() {
    return (
      <div>
        Login
        <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
          {this.renderFields()}
          <div>
            <button action="submit">Log in</button>
          </div>
        </form>
      </div>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if(!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if(!formProps.password) {
    errors.password = 'Please enter a password';
  }

  return errors;
}

function mapStateToProps(state) {
  return {
    errorMessage: state.authReducer.error
  };
}

Login = reduxForm({
  form: 'login',
  validate
})(Login);

export default connect(mapStateToProps, actions)(Login);