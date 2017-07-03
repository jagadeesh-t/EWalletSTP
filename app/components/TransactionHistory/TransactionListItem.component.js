import React from 'react';
import {View, Text} from 'react-native';
import styles from './TransactionListItem.component.style';
import PropTypes from 'prop-types';
import RNIcon from '../../assets/fonts/RNIcon';
import {currencyFormatter} from '../../utils/transformer.util';
import result from 'lodash/result';

class TransactionListItem extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['CREDIT', 'DEBIT', 'ALL']),
    metadata: PropTypes.string,
    amount: PropTypes.string,
    id: PropTypes.number,
    date: PropTypes.string,
    style: PropTypes.object
  }
  typeMap = {
    CREDIT: {
      style: styles.creditIcon,
      icon: 'arrow-up'
    },
    DEBIT: {
      style: styles.debitIcon,
      icon: 'arrow-down'
    }
  }
  render () {
    const {type = 'ALL', metadata = '', amount = 0, id = '',  date = '', style = {}} = this.props;
    const selectedType = result(this.typeMap, type, this.typeMap.CREDIT);
    const formattedAmount = currencyFormatter(amount);
    return (
      <View style={[styles.listItemContainer, style]}>
        <View style={styles.iconContainer}>
          { (type === 'ALL')
            ? <View style={{flexDirection: 'row', padding: 0}}>
              <RNIcon key={0} style={[styles.icon, this.typeMap.CREDIT.style, styles.bothIcon]} name={this.typeMap.CREDIT.icon} />
              <RNIcon key={1} style={[styles.icon,  this.typeMap.DEBIT.style, styles.bothIcon]} name={this.typeMap.DEBIT.icon} />
            </View>
            : <RNIcon style={[styles.icon, selectedType.style]} name={selectedType.icon} />
          }
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{metadata}</Text>
          {id ? <Text style={styles.description}>txid: {id}</Text> : null}
        </View>
        <View style={styles.amountContainer}><Text style={styles.amount}>{formattedAmount}</Text></View>
        <View style={styles.dateContainer}><Text style={styles.date}>{date}</Text></View>
      </View>
    );
  }
}

export default TransactionListItem;
