import React, {Component} from 'react';
import TransactionHistoryView from '../../components/TransactionHistory/TransactionHistory.component';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import result from 'lodash/result';
import {getTransactions} from '../../state/actions/index.thunks';
import {setTransactionHistoryCurrentTab, setTransactionHistoryFromDate,
setTransactionHistoryToDate, setTransactionHistoryPage} from '../../state/actions/index.actions';
import {TH_DEBIT, TH_CREDIT} from '../../config/constants.config';

const mapDispatchToProps = (dispatch) => ({
  refreshTransactions: () => dispatch(getTransactions()),
  setCurrentTab: (current) => {
    dispatch(setTransactionHistoryCurrentTab(current));
    return dispatch(getTransactions());
  },
  setFromDate: (fromDate) => {
    dispatch(setTransactionHistoryFromDate(fromDate));
    return dispatch(getTransactions());
  },
  setToDate: (toDate) => {
    dispatch(setTransactionHistoryToDate(toDate));
    return dispatch(getTransactions());
  },
  setPage: (page) => {
    dispatch(setTransactionHistoryPage(page));
    return dispatch(getTransactions());
  }
});

const mapStateToProps = (state) => ({
  transactionHistory: result(state, 'transactions', {}),
  user: result(state, 'user', {})
});

class TransactionHistoryScreen extends Component {
  static propTypes = {
    transactionHistory: PropTypes.object,
    user: PropTypes.object,
    setFromDate: PropTypes.func,
    setToDate: PropTypes.func,
    refreshTransactions: PropTypes.func,
    setPage: PropTypes.func,
    setCurrentTab: PropTypes.func
  }
  onPrevPage = () => {
    const {transactionHistory, setPage, refreshTransactions} = this.props;
    const {page} = transactionHistory;
    const prevPage = page - 1;
    if (prevPage >= 1) {
      setPage(prevPage);
      refreshTransactions();
    }
  }
  onNextPage = () => {
    const {transactionHistory = {}, setPage, refreshTransactions} = this.props;
    const {page} = transactionHistory;
    const lengthOfTransactionList = result(transactionHistory, 'transactionList.length', 0);
    const nextPage = page + 1;
    if (lengthOfTransactionList > 0) {
      setPage(nextPage);
      refreshTransactions();
    }
  }
  tabFilterMap = {
    'CREDIT': TH_CREDIT,
    'DEBIT': TH_DEBIT
  }
  render () {
    const {transactionHistory = {}, user, refreshTransactions, setFromDate, setToDate, setCurrentTab} = this.props;
    const {currentTab, transactionList, page, fromDate, toDate, transactionsRefreshing} = transactionHistory;
    const balance = String(result(user, 'balanceAccount.balance', '--'));
    return (
      <TransactionHistoryView
        currentFilter={currentTab}  page={page}  transactionList={transactionList}
        fromDate={fromDate} toDate={toDate} balance={balance} refreshing={transactionsRefreshing}
        onTabClick={setCurrentTab}  refreshTransactions={refreshTransactions}
        onNextPage={this.onNextPage} onPrevPage={this.onPrevPage} setFromDate={setFromDate} setToDate={setToDate}
        />);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionHistoryScreen);
