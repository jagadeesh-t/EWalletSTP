import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './SendResult.component.style';
import {FormButton} from '../FormElements';
import result from 'lodash/result';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import RNIcon from '../../assets/fonts/RNIcon';

class SendResultView extends React.Component {
  static propTypes = {
    onDone: PropTypes.func.isRequired,
    transactionResult: PropTypes.object
  }
  assetMap = {
    SUCCESS: {
      icon: 'check',
      text: 'Successful',
      color: 'green',
      longText: 'Transfer was successful'
    },
    FAILURE: {
      icon: 'close, remove, times',
      text: 'Failed',
      color: 'red',
      longText: 'Transfer Failed'
    },
    PROGRESS: {
      icon: 'spinner',
      text: 'Processing',
      color: 'grey',
      longText: 'Transfer is in Progress'
    }
  }
  render () {
    const {onDone = noop, transactionResult = {}} = this.props;
    const {status = 'PROGRESS', amount, fee,
       totalAmount, transactionId, payeeName, payeePhone} = transactionResult;
    const statusEntity = result(this.assetMap, `[${status}]`, 'PROGRESS');
    console.log(transactionResult);
    return (
      <View style={styles.pageContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{'Transfer Status'}</Text>
          <Text style={styles.subtext}>{statusEntity.longText}</Text>
        </View>
        <View style={styles.card} >
          <ScrollView>
            <View style={styles.statusArea}>
              <RNIcon style={[styles.statusIcon, {color: statusEntity.color}]} name={statusEntity.icon} />
              <Text style={styles.status}>{statusEntity.text}</Text>
            </View>

            <Text style={styles.subtitle}>Transaction details</Text>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldKey}>Transfer amount</Text>
              <Text style={styles.fieldValue}>{amount || '--'}</Text>
            </View>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldKey}>Transfer Fee</Text>
              <Text style={styles.fieldValue}>{fee}%</Text>
            </View>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldKey}>Total</Text>
              <Text style={styles.fieldValue}>{totalAmount || '--'}</Text>
            </View>
            {
              transactionId && (<View style={styles.fieldRow}>
                <Text style={styles.fieldKey}>Transaction ID</Text>
                <Text style={styles.fieldValue}>{transactionId || '--'}</Text>
              </View>)
            }

            <Text style={styles.subtitle}>Payee Details</Text>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldKey}>Name</Text>
              <Text style={styles.fieldValue}>{payeeName || '--'}</Text>
            </View>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldKey}>Phone</Text>
              <Text style={styles.fieldValue}>{payeePhone || '--'}</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.buttonContainer} >
          <FormButton onPress={onDone} style={styles.button} text={'Close'}/>
        </View>
      </View>
    );
  }
}

export default SendResultView;
