import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './SendResult.component.style';
import {FormButton} from '../FormElements';
import result from 'lodash/result';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import RNIcon from '../../assets/fonts/RNIcon';
import {language} from '../../config/language';

class SendResultView extends React.Component {
  static propTypes = {
    onDone: PropTypes.func.isRequired,
    transactionResult: PropTypes.object
  }
  getAssetMap = () => ({
    SUCCESS: {
      icon: 'check',
      text: language.SEND_RESULT__TRANSFER_SUCCESS_SHORT,
      color: 'green',
      longText: language.SEND_RESULT__TRANSFER_SUCCESS_LONG
    },
    FAILURE: {
      icon: 'close, remove, times',
      text: language.SEND_RESULT__TRANSFER_FAILED_SHORT,
      color: 'red',
      longText: language.SEND_RESULT__TRANSFER_FAILED_LONG
    },
    PROGRESS: {
      icon: 'spinner',
      text: language.SEND_RESULT__TRANSFER_PROCESS_SHORT,
      color: 'grey',
      longText: language.SEND_RESULT__TRANSFER_PROCESS_LONG
    }
  })
  render () {
    const {onDone = noop, transactionResult = {}} = this.props;
    const {status = 'PROGRESS', amount, fee,
       totalAmount, transactionId, payeeName, payeePhone} = transactionResult;
    const statusEntity = result(this.getAssetMap(), `[${status}]`, 'PROGRESS');
    return (
      <View style={styles.pageContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{language.SEND_RESULT__TITLE}</Text>
          <Text style={styles.subtext}>{statusEntity.longText}</Text>
        </View>
        <View style={styles.card} >
          <ScrollView>
            <View style={styles.statusArea}>
              <RNIcon style={[styles.statusIcon, {color: statusEntity.color}]} name={statusEntity.icon} />
              <Text style={styles.status}>{statusEntity.text}</Text>
            </View>

            <Text style={styles.subtitle}>{language.SEND_RESULT__TRANSACTION_DETAILS_TITLE}</Text>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldKey}>{language.SEND_RESULT__TRANSFER_AMOUNT}</Text>
              <Text style={styles.fieldValue}>{amount || '--'}</Text>
            </View>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldKey}>{language.SEND_RESULT__FEE}</Text>
              <Text style={styles.fieldValue}>{fee}%</Text>
            </View>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldKey}>{language.SEND_RESULT__TOTAL}</Text>
              <Text style={styles.fieldValue}>{totalAmount || '--'}</Text>
            </View>
            {
              transactionId && (<View style={styles.fieldRow}>
                <Text style={styles.fieldKey}>{language.SEND_RESULT__TRANSACTION_ID}</Text>
                <Text style={styles.fieldValue}>{transactionId || '--'}</Text>
              </View>)
            }

            <Text style={styles.subtitle}>{language.SEND_RESULT__PAYEE_DETAILS}</Text>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldKey}>{language.SEND_RESULT__PAYEE_NAME}</Text>
              <Text style={styles.fieldValue}>{payeeName || '--'}</Text>
            </View>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldKey}>{language.SEND_RESULT__PAYEE_PHONE}</Text>
              <Text style={styles.fieldValue}>{payeePhone || '--'}</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.buttonContainer} >
          <FormButton onPress={onDone} style={styles.button} text={language.COMMON__CLOSE}/>
        </View>
      </View>
    );
  }
}

export default SendResultView;
