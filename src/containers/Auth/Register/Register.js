import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Register extends Component {
  componentWillMount() {
    this.fields = [
      { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Enter Full Name' },
      { name: 'email', label: 'Email', type: 'text', placeholder: 'Enter Email' },
      { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter Password' },
      { name: 'confirmPassword', label: 'Confirm Password', type: 'password', placeholder: 'Enter Password Confirmation' }
    ];
  }

  onSubmit({name, email, password, confirmPassword}) {
    console.log(name, email, password, confirmPassword);
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
        Register
        <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
          {this.renderFields()}
          <button action="submit">Register</button>
        </form>
      </div>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if(!formProps.name) {
    errors.name = 'Please enter your name';
  }

  if(!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if(!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if(!formProps.confirmPassword || formProps.password  !== formProps.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;

}

export default reduxForm({
  form: 'register',
  validate
})(Register);