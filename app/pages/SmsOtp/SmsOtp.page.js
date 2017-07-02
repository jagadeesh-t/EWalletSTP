import React, {Component} from 'react';
import {reduxForm, change} from 'redux-form';
import SmsOtpView from '../../components/SmsOtp/SmsOtp.component';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import * as validations from '../../utils/validator.util';
import result from 'lodash/result';
import {signup} from '../../state/actions/index.thunks';

const formConfig = {
  form: 'smsOtpForm',
  destroyOnUnmount: false,
  onSubmit: (values, dispatch) => {
    dispatch(NavigationActions.back());
  },
  initialValues: {
    otp: null
  },
  validate: (values) => {
    const errors = {};
    validations.required(values, ['otp'], errors);
    validations.validateNumber(values, ['otp'], errors);
    validations.validateLength(values, ['otp'], [4], errors);
    return errors;
  }
};
const mapDispatchToProps = (dispatch) => ({
  clearOtp: () => dispatch(change('smsOtpForm', 'otp', null)),
  dispatcher: (actionToDispatch) => dispatch(actionToDispatch)
});

const SmsOtpForm = reduxForm(formConfig)(SmsOtpView);

class SmsOtpPage extends Component {
  static propTypes = {
    clearOtp: PropTypes.func,
    navigation: PropTypes.object,
    dispatcher: PropTypes.func
  }
  componentDidMount () {
    this.props.clearOtp();
  }
  afterSubmit = () => {
    const {dispatcher, navigation} = this.props;
    const {actionOnSubmit} = result(navigation, 'state.params', null);
    actionOnSubmit && dispatcher(actionOnSubmit);
  }
  render () {
    return (
      <SmsOtpForm afterSubmit={this.afterSubmit} />
    );
  }
}

export default connect(null, mapDispatchToProps)(SmsOtpPage);
