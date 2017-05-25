import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import {FormButton} from '../FormElements';
import styles from './SendConfirmation.component.style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
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
      <KeyboardAwareScrollView style={styles.pageContainer} contentContainerStyle={styles.contentContainer} extraHeight={120}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{'Transfer'}</Text>
          <Text style={styles.subtext}>{'Please confirm the details'}</Text>
        </View>
        <View style={styles.card} >
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
        </View>
        <View style={styles.card} >
          <View style={styles.fieldRow}>
            <Text style={styles.subtitle}>Amount</Text>
            <Text style={styles.amount}>STD {currencyFormatter(amount)}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer} >
          <FormButton onPress={onConfirm} style={styles.button} text={'Confirm'}/>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default SendConfirmationView;
