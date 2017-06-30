import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import RegisterView from '../../components/Onboarding/Register.component';
import {connect} from 'react-redux';
import * as validations from '../../utils/validator.util';
import {signup} from '../../state/actions/index.thunks';

const formConfig = {
  form: 'register',
  destroyOnUnmount: true,

  onSubmit: (values, dispatch) => {
    const {mobileNo, password, name, email, countryCode} = values;
    return dispatch(signup(mobileNo, password, name, email, countryCode));
  },
  validate: (values) => {
    const errors = {};
    validations.required(values, ['mobileNo', 'password', 'countryCode', 'name'], errors);
    validations.validateMobileNo(values, ['mobileNo'], errors);
    validations.validatePassword(values, ['password'], errors);
    values.email && validations.validateEmail(values, ['email'], errors);
    return errors;
  }
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
