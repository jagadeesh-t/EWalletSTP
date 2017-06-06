import React, {Component} from 'react';
import TransactionHistoryView from '../../components/TransactionHistory/TransactionHistory.component';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import result from 'lodash/result';
import {getTransactions} from '../../state/actions/index.thunks';
import {filterTransactionHistory} from '../../utils/transformer.util';
import {TH_DEBIT, TH_CREDIT} from '../../config/constants.config';

const mapDispatchToProps = (dispatch) => ({
  refreshTransactions: () => dispatch(getTransactions())
});

const mapStateToProps = (state) => ({
  transactions: result(state, 'transactions', []),
  user: result(state, 'user', {})
});

class TransactionHistoryScreen extends Component {
  static propTypes = {
    transactions: PropTypes.array,
    refreshTransactions: PropTypes.func,
    user: PropTypes.object
  }
  state = {
    transactionsRefreshing: false,
    currentTab: 'ALL'
  }
  setCurrentTab = (currentTab) => {
    this.setState({currentTab});
  }
  getTransactionList = () => {
    const {refreshTransactions} = this.props;
    this.setState({transactionsRefreshing: true});
    return refreshTransactions().then(() => this.setState({transactionsRefreshing: false}));
  }
  tabFilterMap = {
    'CREDIT': TH_CREDIT,
    'DEBIT': TH_DEBIT
  }
  render () {
    const {transactions, user} = this.props;
    const balance = String(result(user, 'balanceAccount.balance', '--'));
    const filteredTransactions = filterTransactionHistory(transactions, this.tabFilterMap[this.state.currentTab]);
    return (
      <TransactionHistoryView onTabClick={this.setCurrentTab} currentFilter={this.state.currentTab} refreshing={this.state.transactionsRefreshing} refreshTransactions={this.getTransactionList}
        transactionList={filteredTransactions} balance={balance} />);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionHistoryScreen);
