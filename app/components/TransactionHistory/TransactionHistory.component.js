import React from 'react';
import {View, Text, FlatList, RefreshControl} from 'react-native';
import styles from './TransactionHistory.component.style';
import PropTypes from 'prop-types';
import {language} from '../../config/language';
import Touchable from '../Touchable/Touchable.component';
import TransactionListItem from './TransactionListItem.component';
import RNIcon from '../../assets/fonts/RNIcon';
import noop from 'lodash/noop';
import {formatTransactionHistoryListItem} from '../../utils/transformer.util';
import {currencyFormatter} from '../../utils/transformer.util';

class TransactionHistoryView extends React.Component {
  static propTypes = {
    currentFilter: PropTypes.oneOf(['ALL', 'CREDIT', 'DEBIT']),
    page: PropTypes.number,
    transactionList: PropTypes.array,
    fromDate: PropTypes.string,
    toDate: PropTypes.string,
    refreshing: PropTypes.bool,
    balance: PropTypes.string,
    onTabClick: PropTypes.func,
    refreshTransactions: PropTypes.func,
    onNextPage: PropTypes.func,
    onPrevPage: PropTypes.func,
    setFromDate: PropTypes.func,
    setToDate: PropTypes.func
  }

  getListItem = ({item}) => {
    const formattedItem = formatTransactionHistoryListItem(item);
    return <TransactionListItem {...formattedItem} />;
  }

  keyExtractor = (item, index) => index

  highlightFilter = (filtername) => {
    const {currentFilter = 'ALL'} = this.props;
    return (filtername === currentFilter) ? styles.selectedFilter : {};
  }

  onTabHeaderClick = (item) => () => {
    const {onTabClick = noop} = this.props;
    onTabClick(item);
  };

  render () {
    const {transactionList = [], page = 1, refreshing,
      onPrevPage = noop, balance = '--', onNextPage = noop, refreshTransactions = noop} = this.props;

    return (
      <View style={styles.pageContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.subtext}>{language.TRANSACTION_HISTORY__SUBTITLE} : <Text style={styles.balance}> STD {currencyFormatter(balance)}</Text></Text>
          <Touchable onPress={refreshTransactions}><RNIcon style={styles.refresh} name='refresh' /></Touchable>
        </View>
        <View style={styles.filterBar}>
          <Touchable onPress={this.onTabHeaderClick('ALL')} style={[styles.filterTab, this.highlightFilter('ALL')]}><Text style={styles.filterText}>{language.TRANSACTION_HISTORY__ALL}</Text></Touchable>
          <Touchable onPress={this.onTabHeaderClick('CREDIT')} style={[styles.filterTab, this.highlightFilter('CREDIT')]}><Text style={styles.filterText}>{language.TRANSACTION_HISTORY__CREDITS}</Text></Touchable>
          <Touchable onPress={this.onTabHeaderClick('DEBIT')} style={[styles.filterTab, this.highlightFilter('DEBIT')]}><Text style={styles.filterText}>{language.TRANSACTION_HISTORY__DEBITS}</Text></Touchable>
        </View>

        <View style={styles.labelItemContainer}>
          <TransactionListItem style={styles.labelItem} metadata='Description' amount='Amount'
            type='ALL' date='Date' />
        </View>
        <FlatList refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refreshTransactions} />} data={transactionList}
            renderItem={this.getListItem}
            keyExtractor={this.keyExtractor}
        />
        <View style={styles.filterBar} >
          <View style={styles.paginateContainer}>
            <Touchable onPress={onPrevPage}>
              <RNIcon style={styles.paginateControl} name='chevron-left' />
            </Touchable>
            <Touchable onPress={onNextPage}>
              <RNIcon style={styles.paginateControl} name='chevron-right' />
            </Touchable>
          </View>
          <View style={styles.paginateStatus}><Text style={styles.paginateControl}>{page}</Text></View>
        </View>
      </View>
    );
  }
}

export default TransactionHistoryView;
