import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, ScrollView} from 'react-native';
import {FormButton} from '../FormElements';
import styles from './SendConfirmation.component.style';
import {currencyFormatter} from '../../utils/transformer.util';
import ImagePayGraphic from '../../assets/images/mobile-pay.png';
import {language} from '../../config/language';

class SendConfirmationView extends React.Component {
  static propTypes = {
    onConfirm: PropTypes.func,
    amount: PropTypes.string,
    totalAmount: PropTypes.string,
    fee: PropTypes.string,
    payeeName: PropTypes.string,
    payeePhone: PropTypes.string
  }

  render () {
    const {amount, onConfirm, payeeName, payeePhone} = this.props;
    return (
      <View style={styles.pageContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.subtext}>{language.SEND_CONFIRMATION__SUBTITLE}</Text>
        </View>
        <View style={styles.card} >
          <ScrollView>
            <View style={styles.payGraphic}>
              <Image style={styles.image} resizeMode='contain' source={ImagePayGraphic}/>
            </View>

            <Text style={styles.subtitle}>Payee Details</Text>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldKey}>Name</Text>
              <Text style={styles.fieldValue}>{payeeName}</Text>
            </View>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldKey}>Phone</Text>
              <Text style={styles.fieldValue}>{payeePhone}</Text>
            </View>
            <Text style={styles.subtitle}>Transaction Details</Text>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldKey}>Amount</Text>
              <Text style={styles.fieldValue}>STD {currencyFormatter(amount)}</Text>
            </View>

          </ScrollView>
        </View>
        <View style={styles.buttonContainer} >
          <FormButton onPress={onConfirm} style={styles.button} text={language.COMMON__CONFIRM}/>
        </View>
      </View>
    );
  }
}

export default SendConfirmationView;
