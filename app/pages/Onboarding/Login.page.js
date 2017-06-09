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
    mobileNo: '12345678',
    password: 'qwerty1!'
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
    goToRegister: PropTypes.func
  }
  render () {
    const {goToRegister} = this.props;
    return (
      <LoginForm goToRegister={goToRegister} />);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
