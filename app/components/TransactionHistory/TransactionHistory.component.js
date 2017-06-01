import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './TransactionHistory.component.style';
import PropTypes from 'prop-types';
import {language} from '../../config/language';
import Touchable from '../Touchable/Touchable.component';
import TransactionListItem from './TransactionListItem.component';
import RNIcon from '../../assets/fonts/RNIcon';
import noop from 'lodash/noop';

class TransactionHistoryView extends React.Component {
  static propTypes = {
    transactionList: PropTypes.array,
    currentFilter: PropTypes.oneOf(['all', 'credit', 'debit']),
    currentPagination: PropTypes.string,
    onNextResult: PropTypes.func,
    onPrevResult: PropTypes.func,
    onTabClick: PropTypes.func
  }
  getListItem = () => ({item}) => <TransactionListItem {...item} />
  keyExtractor = (item, index) => index
  highlightFilter = (filtername) => {
    const {currentFilter = 'all'} = this.props;
    return (filtername === currentFilter) ? styles.selectedFilter : {};
  }

  render () {
    const {transactionList = [], currentPagination = '1',
      onPrevResult = noop, onNextResult = noop, onTabClick = noop} = this.props;
    const onTabHeaderClick = (item) => () => onTabClick(item);
    return (
      <View style={styles.pageContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{language.TRANSACTION_HISTORY__TITLE}</Text>
          <Text style={styles.subtext}>{language.TRANSACTION_HISTORY__SUBTITLE}</Text>
        </View>
        <View style={styles.filterBar}>
          <Touchable onPress={onTabHeaderClick('all')} style={[styles.filterTab, this.highlightFilter('all')]}><Text style={styles.filterText}>{language.TRANSACTION_HISTORY__ALL}</Text></Touchable>
          <Touchable onPress={onTabHeaderClick('credit')} style={[styles.filterTab, this.highlightFilter('credit')]}><Text style={styles.filterText}>{language.TRANSACTION_HISTORY__CREDITS}</Text></Touchable>
          <Touchable onPress={onTabHeaderClick('debit')} style={[styles.filterTab, this.highlightFilter('debit')]}><Text style={styles.filterText}>{language.TRANSACTION_HISTORY__DEBITS}</Text></Touchable>
        </View>
        <View style={styles.labelItemContainer}>
          <TransactionListItem style={styles.labelItem} description='Description' amount='Amount'
            type='both' date='Date' />
        </View>
        <FlatList data={transactionList}
            renderItem={this.getListItem()}
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
