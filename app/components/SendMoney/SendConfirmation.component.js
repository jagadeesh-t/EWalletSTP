import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, ScrollView} from 'react-native';
import {FormButton} from '../FormElements';
import styles from './SendConfirmation.component.style';
import {currencyFormatter} from '../../utils/transformer.util';
import ImagePayGraphic from '../../assets/images/mobile-pay.png';

class SendConfirmationView extends React.Component {
  static propTypes = {
    onConfirm: PropTypes.func,
    amount: PropTypes.string,
    payeeDetails: PropTypes.object,
    currentDate: PropTypes.object
  }

  render () {
    const {onConfirm, payeeDetails, amount} = this.props;
    return (
      <View style={styles.pageContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.subtext}>{'Please confirm the details'}</Text>
        </View>
        <View style={styles.card} >
          <ScrollView>
            <View style={styles.payGraphic}>
              <Image style={styles.image} resizeMode='contain' source={ImagePayGraphic}/>
            </View>

            <Text style={styles.subtitle}>Payee Details</Text>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldKey}>Name</Text>
              <Text style={styles.fieldValue}>{payeeDetails.name}</Text>
            </View>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldKey}>Identifier</Text>
              <Text style={styles.fieldValue}>{payeeDetails.identifier}</Text>
            </View>
            <Text style={styles.subtitle}>Transaction Details</Text>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldKey}>Amount</Text>
              <Text style={styles.fieldValue}>STD {currencyFormatter(amount)}</Text>
            </View>

            <View style={styles.fieldRow}>
              <Text style={styles.fieldKey}>Charges</Text>
              <Text style={styles.fieldValue}>STD {currencyFormatter(amount)}</Text>
            </View>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldKey}>Total Amount</Text>
              <Text style={styles.fieldValue}>STD {currencyFormatter(amount)}</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.buttonContainer} >
          <FormButton onPress={onConfirm} style={styles.button} text={'Confirm'}/>
        </View>
      </View>
    );
  }
}

export default SendConfirmationView;
