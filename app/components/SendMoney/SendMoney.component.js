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
import {language} from '../../config/language';

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
          <Text style={styles.subTitle}>{language.SEND_MONEY__INDEX_SUBTITLE}</Text>
        </View>
        <View style={styles.mainAreaContainer}>
          <View style={styles.qrReaderContainer} >
            <Touchable onPress={onQrClick} style={styles.qrButton}>
              <RNIcon style={styles.scanQRIcon} name='qr-scan-btn'/>
              <Text style={styles.scan}>{language.SEND_MONEY__SCAN_QR_CODE}</Text>
            </Touchable>
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.subTitle}>{language.SEND_MONEY__OR_ENTER_DETAILS}</Text>

            <View style={styles.formHeader}><RNIcon name='mobile, mobile-phone' size={15} /><Text style={styles.formHeaderText}>{language.SEND_MONEY__MOBILE_NUMBER} </Text></View>
            <Field name='mobileNo' component={FormInput}  placeholder={language.SEND_MONEY__MOBILE_PLACEHOLDER} />

            <View style={styles.formHeader}><RNIcon name='money' size={15} /><Text style={styles.formHeaderText}>{language.SEND_MONEY__AMOUNT} </Text></View>
            <View style={styles.amountInputContainer}><Field name='amount' component={FormInput} containerStyle={styles.amountInputStyle} placeholder={language.SEND_MONEY__AMOUNT_PLACEHOLDER} /><Text style={styles.trailingAmountText}>.000</Text></View>
          </View>
        </View>
        <View style={styles.buttonContainer} >
          <FormButton style={styles.button} disabled={invalid || submitting} onPress={wrapMethodInFunction(handleSubmit)} text={language.COMMON__NEXT}/>
        </View>

      </KeyboardAwareScrollView>
    );
  }
}

export default SendMoneyView;
