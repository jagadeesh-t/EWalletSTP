import React, {Component} from 'react';
import SendConfirmationView from '../../components/SendMoney/SendConfirmation.component';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

const mapDispatchToProps = () => ({
  onConfirm: () => {}
});

const mapStateToProps = () => ({});

class SendConfirmationScreen extends Component {
  static propTypes = {
    onConfirm: PropTypes.func
  }
  payeeDetails ={
    name: 'Test name',
    identifier: '+91934399343'
  }
  currentDate = moment();
  render () {
    const {onConfirm} = this.props;
    return (
      <SendConfirmationView amount={2000} payeeDetails={this.payeeDetails}
         currentDate={this.currentDate} onConfirm={onConfirm} />);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendConfirmationScreen);
