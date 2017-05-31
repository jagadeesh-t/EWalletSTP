import React, {Component} from 'react';
import TransactionHistoryView from '../../components/TransactionHistory/TransactionHistory.component';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const mapDispatchToProps = () => ({

});

const mapStateToProps = () => ({});

class TransactionHistoryScreen extends Component {
  static propTypes = {
    transactionList: PropTypes.array
  }
  render () {
    return (
      <TransactionHistoryView transactionList={[]} />);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionHistoryScreen);
