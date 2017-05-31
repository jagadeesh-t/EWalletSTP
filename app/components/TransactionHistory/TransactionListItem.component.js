import React from 'react';
import {View, Text} from 'react-native';
import styles from './TransactionListItem.component.style';
import PropTypes from 'prop-types';
import RNIcon from '../../assets/fonts/RNIcon';
import {currencyFormatter} from '../../utils/transformer.util';

class TransactionListItem extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['credit', 'debit']),
    description: PropTypes.string,
    amount: PropTypes.string,
    date: PropTypes.string
  }
  typeMap = {
    credit: {
      style: styles.creditIcon,
      icon: 'arrow-up'
    },
    debit: {
      style: styles.debitIcon,
      icon: 'arrow-down'
    }
  }
  render () {
    const {type = 'credit', description = '', amount = 0, date = ''} = this.props;
    const selectedType = this.typeMap[type];
    return (
      <View style={styles.listItemContainer} >
        <View style={styles.iconContainer}><RNIcon style={[styles.icon, selectedType.style]} name={selectedType.icon} /></View>
        <View style={styles.descriptionContainer}><Text style={styles.description}>{description}</Text></View>
        <View style={styles.amountContainer}><Text style={styles.amount}>{currencyFormatter(amount)}</Text></View>
        <View style={styles.dateContainer}><Text style={styles.date}>{date}</Text></View>
      </View>
    );
  }
}

export default TransactionListItem;
