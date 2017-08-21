import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import RNIcon from '../../assets/fonts/RNIcon';
import {FormInput, FormButton} from '../FormElements';
import {Field} from 'redux-form';
import noop from 'lodash/noop';
import {wrapMethodInFunction} from '../../utils/transformer.util';
import styles from './Login.component.style';
import logoImage from '../../assets/images/walletLogo600x500.png';
import {language} from '../../config/language';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Touchable from '../Touchable/Touchable.component';
import LanguageToggle from './LanguageToggle/LanguageToggle.component';

class LoginView extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    goToRegister: PropTypes.func,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool,
    selectedLangauge: PropTypes.string,
    changeLanguage: PropTypes.func
  }

  render () {
    const {invalid, submitting, handleSubmit = noop, goToRegister, selectedLangauge = 'en', changeLanguage} = this.props;

    return (
      <KeyboardAwareScrollView style={styles.pageContainer} contentContainerStyle={styles.contentContainer} extraHeight={120}>
        <View style={styles.titleContainer}>
          <Text style={styles.subTitle}>{language.LOGIN__TITLE}</Text>
          <LanguageToggle selectedLangauge={selectedLangauge} onToggle={changeLanguage}/>
        </View>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} resizeMode='contain' source={logoImage}/>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formHeader}><RNIcon name='mobile, mobile-phone' size={15} /><Text style={styles.formHeaderText}>{language.REGISTER__MOBILENO} </Text></View>
          <Field name='mobileNo' iconName='mobile, mobile-phone' component={FormInput} placeholder={language.REGISTER__MOBILE_PLACEHOLDER} />

          <View style={styles.formHeader}><RNIcon name='user-secret' size={15} /><Text style={styles.formHeaderText}>{language.REGISTER__PASSWORD} </Text></View>
          <Field name='password' secureTextEntry={true} component={FormInput} placeholder={language.REGISTER__PASSWORD_PLACEHOLDER} />
        </View>
        <View style={styles.buttonContainer} >
          <FormButton disabled={invalid || submitting} onPress={wrapMethodInFunction(handleSubmit)} text={language.COMMON__NEXT}/>
          <Touchable style={styles.linkTextContainer} onPress={goToRegister}>
            <Text style={styles.registerText}>{language.LOGIN__REGISTER_Q}</Text>
          </Touchable>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default LoginView;
