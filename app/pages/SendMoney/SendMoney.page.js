import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import SendMoneyView from '../../components/SendMoney/SendMoney.component';
import {connect} from 'react-redux';

const formConfig = {
  form: 'sendMoney',
  destroyOnUnmount: true,
  initialValues: {},
  onSubmit: () => {},
  validate: () => ({})
};

const mapDispatchToProps = () => ({});

const mapStateToProps = () => ({});

const SendMoneyForm = reduxForm(formConfig)(SendMoneyView);

class SendMoneyScreen extends Component {
  render () {
    return (
      <SendMoneyForm />);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendMoneyScreen);
