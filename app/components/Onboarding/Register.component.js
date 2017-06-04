import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import RNIcon from '../../assets/fonts/RNIcon';
import {FormInput, FormButton} from '../FormElements';
import {Field} from 'redux-form';
import noop from 'lodash/noop';
import {wrapMethodInFunction} from '../../utils/transformer.util';
import styles from './Register.component.style';
import {language} from '../../config/language';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';


class RegisterView extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool
  }

  render () {
    const {invalid, submitting, handleSubmit = noop} = this.props;
    return (
      <KeyboardAwareScrollView keyboardShouldPersistTaps='handled' style={styles.pageContainer} contentContainerStyle={styles.contentContainer} extraHeight={120}>
        <View style={styles.formContainer}>

          <View style={styles.formHeader}><RNIcon style={styles.headerIcon} name='mobile, mobile-phone' size={15} /><Text style={styles.formHeaderText}>{language.REGISTER__MOBILENO} </Text></View>
          <Field name='mobileNo' iconName='mobile, mobile-phone' component={FormInput} placeholder={language.REGISTER__MOBILE_PLACEHOLDER} />

          <View style={styles.formHeader}><RNIcon style={styles.headerIcon} name='user-secret' size={15} /><Text style={styles.formHeaderText}>{language.REGISTER__PASSWORD} </Text></View>
          <Field name='password' component={FormInput} placeholder={language.REGISTER__PASSWORD_PLACEHOLDER} />

          <View style={styles.formHeader}><RNIcon style={styles.headerIcon} name='user' size={15} /><Text style={styles.formHeaderText}>{language.REGISTER__NAME} </Text></View>
          <Field name='name' component={FormInput} placeholder={language.REGISTER__NAME_PLACEHOLDER} />

          <View style={styles.formHeader}><RNIcon style={styles.headerIcon} name='inbox' size={15} /><Text style={styles.formHeaderText}>{language.REGISTER__EMAIL} </Text></View>
          <Field name='email' component={FormInput} placeholder={language.REGISTER__EMAIL_PLACEHOLDER} />

          <View style={styles.formHeader}><RNIcon style={styles.headerIcon} name='flag' size={15} /><Text style={styles.formHeaderText}>{language.REGISTER__COUNTRY} </Text></View>
          <Field name='country' component={FormInput} placeholder={language.REGISTER__COUNTRY_PLACEHOLDER} />
        </View>
        <FormButton disabled={invalid || submitting} onPress={wrapMethodInFunction(handleSubmit)} text={language.COMMON__NEXT}/>
      </KeyboardAwareScrollView>
    );
  }
}

export default RegisterView;
