import React, {Component} from 'react';
import SendConfirmationView from '../../components/SendMoney/SendConfirmation.component';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {transfer} from '../../state/actions/index.thunks';
import result from 'lodash/result';

const mapDispatchToProps = (dispatch) => ({
  doTransfer: (transferDetails) => dispatch(transfer(transferDetails))
});

const mapStateToProps = () => ({});

class SendConfirmationScreen extends Component {
  static propTypes = {
    doTransfer: PropTypes.func
  }
  onConfirm = () => {
    const transactionDetails = result(this.props, 'navigation.state.params.transactionDetails', {});
    const {payeeName, payeePhone, amount, totalAmount, fee} = transactionDetails;
    this.props.doTransfer({payeeName, payeePhone, amount, totalAmount, fee});
  }
  render () {
    const transactionDetails = result(this.props, 'navigation.state.params.transactionDetails', {});
    const {payeeName, payeePhone, amount, totalAmount, fee} = transactionDetails;
    return (
      <SendConfirmationView totalAmount={totalAmount} fee={fee}
         amount={amount} onConfirm={this.onConfirm}
         payeeName={payeeName} payeePhone={payeePhone}/>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendConfirmationScreen);
