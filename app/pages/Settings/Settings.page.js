import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import SettingsView from '../../components/Settings/Settings.component';
import {connect} from 'react-redux';
import {chanagePassword} from '../../state/actions/index.thunks';
import * as validations from '../../utils/validator.util';


const formConfig = {
  form: 'Settings',
  destroyOnUnmount: true,
  initialValues: {},

  onSubmit: (values, dispatch) => {
    const {currentPassword, newPassword} = values;
    return dispatch(chanagePassword(currentPassword, newPassword));
  },
  validate: (values) => {
    const errors = {};
    validations.required(values, ['currentPassword', 'newPassword', 'confirmPassword'], errors);
    validations.validatePasswordUpdate(values, ['newPassword', 'confirmPassword'], errors);
    validations.validatePassword(values, ['newPassword'], errors);
    return errors;
  }
};

const mapDispatchToProps = () => ({});

const mapStateToProps = () => ({});

const SettingsForm = reduxForm(formConfig)(SettingsView);

class SettingsPage extends Component {
  render () {
    return (
      <SettingsForm />);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
