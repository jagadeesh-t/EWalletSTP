import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import LoginView from '../../components/Onboarding/Login.component';
import {connect} from 'react-redux';
import {login} from '../../state/actions/index.thunks';
import PropTypes from 'prop-types';
import * as validations from '../../utils/validator.util';
import {setLanguage} from '../../state/actions/index.actions';
import {NavigationActions} from 'react-navigation';
import result from 'lodash/result';
import {setCurrent} from '../../config/language/index';

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
  goToRegister: () => dispatch(NavigationActions.navigate({routeName: 'Register'})),
  changeLanguage: (langId) => {
    setCurrent(langId);
    dispatch(setLanguage(langId));
  }
});

const mapStateToProps = (state) => ({
  selectedLangauge: result(state, 'currentLanguage.langCode')
});

const LoginForm = reduxForm(formConfig)(LoginView);

class LoginScreen extends Component {
  static propTypes = {
    goToRegister: PropTypes.func,
    selectedLangauge: PropTypes.string,
    changeLanguage: PropTypes.func
  }
  render () {
    const {goToRegister, selectedLangauge, changeLanguage} = this.props;
    return (
      <LoginForm goToRegister={goToRegister} selectedLangauge={selectedLangauge} changeLanguage={changeLanguage}/>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
