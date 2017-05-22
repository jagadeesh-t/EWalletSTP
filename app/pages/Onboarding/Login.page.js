import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import LoginView from '../../components/Onboarding/Login.component';
import {connect} from 'react-redux';

const formConfig = {
  form: 'login',
  destroyOnUnmount: true,
  initialValues: {},
  onSubmit: () => {},
  validate: () => ({})
};

const mapDispatchToProps = () => ({});

const mapStateToProps = () => ({});

const LoginForm = reduxForm(formConfig)(LoginView);

class LoginScreen extends Component {
  render () {
    return (
      <LoginForm />);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
