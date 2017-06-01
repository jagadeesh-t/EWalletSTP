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
// import {language} from '../../config/language';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Touchable from '../Touchable/Touchable.component';

class LoginView extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool
  }

  render () {
    const {invalid, submitting, handleSubmit = noop} = this.props;
    return (
      <KeyboardAwareScrollView style={styles.pageContainer} contentContainerStyle={styles.contentContainer} extraHeight={120}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{'Welcome !'}</Text>
          <Text style={styles.subTitle}>{'Please Log in.'}</Text>
        </View>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} resizeMode='contain' source={logoImage}/>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formHeader}><RNIcon name='mobile, mobile-phone' size={15} /><Text style={styles.formHeaderText}>{'Mobile No'} </Text></View>
          <Field name='mobileNo' iconName='mobile, mobile-phone' component={FormInput} placeholder={'Enter your mobile number'} />

          <View style={styles.formHeader}><RNIcon name='user-secret' size={15} /><Text style={styles.formHeaderText}>{'Password'} </Text></View>
          <Field name='password' component={FormInput} placeholder={'Enter your password'} />
        </View>
        <View style={styles.buttonContainer} >
          <FormButton disabled={invalid || submitting} onPress={wrapMethodInFunction(handleSubmit)} text={'Next'}/>
          <Touchable style={styles.linkTextContainer}>
            <Text style={styles.registerText}>New to eWallet ? Register</Text>
          </Touchable>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default LoginView;
