import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import RNIcon from '../../assets/fonts/RNIcon';
import {FormInput, FormButton} from '../FormElements';
import {Field} from 'redux-form';
import noop from 'lodash/noop';
import styles from './SmsOtp.component.style';
import logoImage from '../../assets/images/otplogo.jpg';
import {language} from '../../config/language';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

class SmsOtpView extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool,
    afterSubmit: PropTypes.func
  }

  onSubmit = () => {
    const {handleSubmit = noop, afterSubmit = noop} = this.props;
    handleSubmit();
    afterSubmit();
  }

  render () {
    const {invalid, submitting} = this.props;
    return (
      <KeyboardAwareScrollView style={styles.pageContainer} contentContainerStyle={styles.contentContainer} extraHeight={120}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{language.SMS_OTP__SUBTITLE}</Text>
        </View>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} resizeMode='contain' source={logoImage}/>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formHeader}><RNIcon name='mobile, mobile-phone' size={15} /><Text style={styles.formHeaderText}>{language.SMS_OTP__OTP_ENTER} </Text></View>
          <Field inputStyles={styles.inputStyle} name='otp' component={FormInput} placeholder='0-0-0-0' keyboardType='numbers-and-punctuation' maxLength={4} />
          <Text style={styles.textcontainer}>{language.SMS_OTP__OTP_DETAILS}</Text>
        </View>
        <View style={styles.buttonContainer} >
          <FormButton disabled={invalid || submitting} onPress={this.onSubmit} text={language.COMMON__NEXT}/>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default SmsOtpView;
