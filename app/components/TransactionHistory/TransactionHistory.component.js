import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './TransactionHistory.component.style';
import PropTypes from 'prop-types';
import {language} from '../../config/language';
import Touchable from '../Touchable/Touchable.component';
import TransactionListItem from './TransactionListItem.component';

class TransactionHistoryView extends React.Component {
  static propTypes = {
    transactionList: PropTypes.array,
  }
  getListItem =() => (item) => <TransactionListItem {...item} />

  render () {
    return (
      <View style={styles.pageContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{language.TRANSACTION_HISTORY__TITLE}</Text>
          <Text style={styles.subtext}>{language.TRANSACTION_HISTORY__SUBTITLE}</Text>
        </View>
        <View style={styles.filterBar}>
          <Touchable style={styles.filterTab}><Text style={styles.filterText}>{language.TRANSACTION_HISTORY__ALL}</Text></Touchable>
          <Touchable style={styles.filterTab}><Text style={styles.filterText}>{language.TRANSACTION_HISTORY__CREDITS}</Text></Touchable>
          <Touchable style={styles.filterTab}><Text style={styles.filterText}>{language.TRANSACTION_HISTORY__DEBITS}</Text></Touchable>
        </View>
        <FlatList data={[{description: 'Title Text', key: 'item1'}, {description: 'Title Text', key: 'item2'}, {description: 'Title Text', key: 'item3'}]}
            renderItem={this.getListItem()}
        />
        <View style={styles.filterBar} />
      </View>
    );
  }
}

export default TransactionHistoryView;
