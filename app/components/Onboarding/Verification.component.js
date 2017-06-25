import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import RNIcon from '../../assets/fonts/RNIcon';
import {FormInput, FormButton} from '../FormElements';
import {Field} from 'redux-form';
import noop from 'lodash/noop';
import {wrapMethodInFunction} from '../../utils/transformer.util';
import styles from './Verification.component.style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {language} from '../../config/language';
import bannerBg from '../../../app/assets/images/banner800x600.png';


class VerrificationView extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool,
    
  }

  render () {
    const {invalid, submitting, handleSubmit = noop} = this.props;
    return (

      <KeyboardAwareScrollView style={styles.pageContainer} contentContainerStyle={styles.contentContainer} extraHeight={120}>
        <Image style={styles.imageContainer} resizeMode='stretch' source={bannerBg}>
          <View style={styles.titleContainer} />
        </Image>
        <View style={styles.mainAreaContainer}>
          <View style={styles.formContainer}>
            <Text style={styles.subTitle}>{language.CREDIT_REQUEST__ENTER_TRANSACTION_DETAILS}</Text>
            <View style={styles.formHeader}><RNIcon name='address-card, vcard' size={15} /><Text style={styles.formHeaderText}>{language.VERIFICATION__OTP_ENTER} </Text></View>
            <Field inputStyles={styles.inputStyle} name='OTP' component={FormInput} placeholder='0-0-0-0' keyboardType='numbers-and-punctuation' maxLength={4} />
            <Text style={styles.textcontainer}>{language.VERIFICATION__OTP_DETAILS}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer} >
          <FormButton style={styles.button} disabled={invalid || submitting} onPress={wrapMethodInFunction(handleSubmit)} text={language.COMMON__SUBMIT_TEXT}/>
        </View>

      </KeyboardAwareScrollView>
    );
  }
}

export default VerrificationView;
