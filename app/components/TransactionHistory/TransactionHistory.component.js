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
    transactionList: PropTypes.array,
    balance: PropTypes.string,
    currentFilter: PropTypes.oneOf(['ALL', 'CREDIT', 'DEBIT']),
    currentPagination: PropTypes.string,
    onNextResult: PropTypes.func,
    onPrevResult: PropTypes.func,
    onTabClick: PropTypes.func,
    refreshing: PropTypes.bool,
    refreshTransactions: PropTypes.func
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
    const {transactionList = [], currentPagination = '1', refreshing,
      onPrevResult = noop, balance = '--', onNextResult = noop, refreshTransactions = noop} = this.props;

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
            <Touchable onPress={onPrevResult}>
              <RNIcon style={styles.paginateControl} name='chevron-left' />
            </Touchable>
            <Touchable onPress={onNextResult}>
              <RNIcon style={styles.paginateControl} name='chevron-right' />
            </Touchable>
          </View>
          <View style={styles.paginateStatus}><Text style={styles.paginateControl}>{currentPagination}</Text></View>
        </View>
      </View>
    );
  }
}

export default TransactionHistoryView;
