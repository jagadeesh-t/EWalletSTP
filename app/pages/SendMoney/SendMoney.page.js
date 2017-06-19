import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import SendMoneyView from '../../components/SendMoney/SendMoney.component';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import * as validations from '../../utils/validator.util';
import {confirmTransfer} from '../../state/actions/index.thunks';

const formConfig = {
  form: 'sendMoney',
  destroyOnUnmount: true,
  initialValues: {
    mobileNo: '',
    amount: ''
  },
  onSubmit: (values, dispatch) => {
    const {mobileNo, amount} = values;
    var finalAmt  =  amount * 1000;
    return dispatch(confirmTransfer(mobileNo, finalAmt));
  },
  validate: (values) => {
    const errors = {};
    validations.required(values, ['mobileNo', 'amount'], errors);
    validations.validateMobileNo(values, ['mobileNo'], errors);
    validations.validateNumber(values, ['amount'], errors);
    return errors;
  }
};

const mapDispatchToProps = (dispatch) => ({
  onQrClick: () => {
    dispatch(NavigationActions.navigate({routeName: 'QRCodeReader'}));
  }
});

const mapStateToProps = () => ({});

const SendMoneyForm = reduxForm(formConfig)(SendMoneyView);

class SendMoneyScreen extends Component {
  static propTypes = {
    onQrClick: PropTypes.func
  }
  render () {
    const {onQrClick} = this.props;
    return (
      <SendMoneyForm onQrClick={onQrClick}/>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendMoneyScreen);
