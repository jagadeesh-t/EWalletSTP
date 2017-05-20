import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import RegisterView from '../../components/Onboarding/Register.component';
import {connect} from 'react-redux';

const formConfig = {
  form: 'register',
  destroyOnUnmount: true,
  initialValues: {},
  onSubmit: () => {},
  validate: () => ({})
};

const mapDispatchToProps = () => ({});

const mapStateToProps = () => ({});

const RegisterForm = reduxForm(formConfig)(RegisterView);

class RegisterScreen extends Component {
  render () {
    return (
      <RegisterForm />);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
