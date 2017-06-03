import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import LoginView from '../../components/Onboarding/Login.component';
import {connect} from 'react-redux';
import {login} from '../../state/actions/index.thunks';
import PropTypes from 'prop-types';
import * as validations from '../../utils/validator.util';
import {NavigationActions} from 'react-navigation';

const formConfig = {
  form: 'login',
  destroyOnUnmount: true,
  initialValues: {
    mobileNo: '',
    password: ''
  },
  onSubmit: (values, dispatch) => {
    const {mobileNo, password} = values;
    return dispatch(login(mobileNo, password));
  },
  validate: (values) => {
    const errors = {};
    validations.required(values, ['mobileNo', 'password'], errors);
    validations.validateMobileNo(values, ['mobileNo'], errors);
    validations.validatePassword(values, ['password'], errors);
    return errors;
  }
};

const mapDispatchToProps = (dispatch) => ({
  goToRegister: () => dispatch(NavigationActions.navigate({routeName: 'Register'}))
});

const mapStateToProps = () => ({});

const LoginForm = reduxForm(formConfig)(LoginView);

class LoginScreen extends Component {
  static propTypes = {
    doLogin: PropTypes.func,
    goToRegister: PropTypes.func
  }
  render () {
    const {doLogin, goToRegister} = this.props;
    return (
      <LoginForm goToRegister={goToRegister} onLogin={doLogin}/>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
