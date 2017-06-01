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
      <TransactionHistoryView transactionList={[
        {description: 'Transfer to X', amount: '20000',
          type: 'credit', date: '20-01-2017 08:00am'},
        {description: 'Transfer to X', amount: '20000',
          type: 'debit', date: '20-01-2017 08:00am'},
        {description: 'Transfer to X', amount: '20000',
          type: 'debit', date: '20-01-2017 08:00am'},
        {description: 'Transfer to X', amount: '20000',
          type: 'credit', date: '20-01-2017 08:00am'}]} />);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionHistoryScreen);
