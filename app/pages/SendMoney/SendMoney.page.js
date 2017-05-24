import React, {Component} from 'react';
import SendMoneyView from '../../components/SendMoney/SendMoney.component';
import {connect} from 'react-redux';

const mapDispatchToProps = () => ({});

const mapStateToProps = () => ({});

class SendMoneyScreen extends Component {
  render () {
    return (
      <SendMoneyView/>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendMoneyScreen);
