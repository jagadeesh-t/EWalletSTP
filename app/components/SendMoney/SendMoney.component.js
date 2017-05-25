import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import RNIcon from '../../assets/fonts/RNIcon';
import {FormInput, FormButton} from '../FormElements';
import {Field} from 'redux-form';
import noop from 'lodash/noop';
import {wrapMethodInFunction} from '../../utils/transformer.util';
import styles from './SendMoney.component.style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Touchable from '../Touchable/Touchable.component';

class SendMoneyView extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool,
    onQrClick: PropTypes.func
  }

  render () {
    const {invalid, submitting, handleSubmit = noop, onQrClick = noop} = this.props;
    return (
      <KeyboardAwareScrollView style={styles.pageContainer} contentContainerStyle={styles.contentContainer} extraHeight={120}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{'Send Money'}</Text>
          <Text style={styles.subTitle}>{'Please scan the QR code'}</Text>
        </View>
        <View style={styles.mainAreaContainer}>
          <View style={styles.qrReaderContainer} >
            <Touchable onPress={onQrClick} style={styles.qrButton}>
              <RNIcon style={styles.scanQRIcon} name='qr-scan-btn'/>
              <Text style={styles.scan}>SCAN QR CODE</Text>
            </Touchable>
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.subTitle}>Or Enter the following details</Text>

            <View style={styles.formHeader}><RNIcon name='mobile, mobile-phone' size={15} /><Text style={styles.formHeaderText}>{'Mobile Number'} </Text></View>
            <Field name='mobileNo' component={FormInput} placeholder={'Enter destination mobile number'} />

            <View style={styles.formHeader}><RNIcon name='money' size={15} /><Text style={styles.formHeaderText}>{'Amount'} </Text></View>
            <Field name='amount' component={FormInput} placeholder={'Enter the amount to pay'} />
          </View>
        </View>
        <View style={styles.buttonContainer} >
          <FormButton style={styles.button} disabled={invalid || submitting} onPress={wrapMethodInFunction(handleSubmit)} text={'Next'}/>
        </View>

      </KeyboardAwareScrollView>
    );
  }
}

export default SendMoneyView;
