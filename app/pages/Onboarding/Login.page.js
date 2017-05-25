import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import LoginView from '../../components/Onboarding/Login.component';
import {connect} from 'react-redux';
import {login} from '../../state/actions/index.thunks';
import PropTypes from 'prop-types';

const formConfig = {
  form: 'login',
  destroyOnUnmount: true,
  initialValues: {},
  onSubmit: (values, dispatch) => {
    console.log(values);
    return dispatch(login());
  },
  validate: () => ({})
};

const mapDispatchToProps = () => ({});

const mapStateToProps = () => ({});

const LoginForm = reduxForm(formConfig)(LoginView);

class LoginScreen extends Component {
  static propTypes = {
    doLogin: PropTypes.func
  }
  render () {
    const {doLogin} = this.props;
    return (
      <LoginForm onLogin={doLogin}/>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
