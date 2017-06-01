import React from 'react';
import {View, Text} from 'react-native';
import styles from './TransactionListItem.component.style';
import PropTypes from 'prop-types';
import RNIcon from '../../assets/fonts/RNIcon';
import {currencyFormatter} from '../../utils/transformer.util';
import result from 'lodash/result';

class TransactionListItem extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['credit', 'debit', 'both']),
    description: PropTypes.string,
    amount: PropTypes.string,
    date: PropTypes.string,
    style: PropTypes.object
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
    const {type = 'both', description = '', amount = 0, date = '', style = {}} = this.props;
    const selectedType = result(this.typeMap, type, this.typeMap.credit);
    const formattedAmount = currencyFormatter(amount) || amount;
    return (
      <View style={[styles.listItemContainer, style]}>
        <View style={styles.iconContainer}>
          { (type === 'both')
            ? <View style={{flexDirection: 'row', padding: 0}}>
              <RNIcon key={0} style={[styles.icon, this.typeMap.credit.style, styles.bothIcon]} name={this.typeMap.credit.icon} />
              <RNIcon key={1} style={[styles.icon,  this.typeMap.debit.style, styles.bothIcon]} name={this.typeMap.debit.icon} />
            </View>
            : <RNIcon style={[styles.icon, selectedType.style]} name={selectedType.icon} />
          }
        </View>
        <View style={styles.descriptionContainer}><Text style={styles.description}>{description}</Text></View>
        <View style={styles.amountContainer}><Text style={styles.amount}>{formattedAmount}</Text></View>
        <View style={styles.dateContainer}><Text style={styles.date}>{date}</Text></View>
      </View>
    );
  }
}

export default TransactionListItem;
