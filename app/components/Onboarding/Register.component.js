import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import RNIcon from '../../assets/fonts/RNIcon';
import {FormInput, FormButton} from '../FormElements';
import {Field} from 'redux-form';
import noop from 'lodash/noop';
import {wrapMethodInFunction} from '../../utils/transformer.util';
import styles from './Register.component.style';
// import {language} from '../../config/language';
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
        <Text style={styles.title}>{'New User Registration'}</Text>
        <View style={styles.formContainer}>

          <View style={styles.formHeader}><RNIcon style={styles.headerIcon} name='mobile, mobile-phone' size={15} /><Text style={styles.formHeaderText}>{'Mobile No'} </Text></View>
          <Field name='mobileNo' iconName='mobile, mobile-phone' component={FormInput} placeholder={'Enter your mobile number'} />

          <View style={styles.formHeader}><RNIcon style={styles.headerIcon} name='user-secret' size={15} /><Text style={styles.formHeaderText}>{'Password'} </Text></View>
          <Field name='password' component={FormInput} placeholder={'Enter your desired password'} />

          <View style={styles.formHeader}><RNIcon style={styles.headerIcon} name='user' size={15} /><Text style={styles.formHeaderText}>{'Name'} </Text></View>
          <Field name='name' component={FormInput} placeholder={'Your name'} />

          <View style={styles.formHeader}><RNIcon style={styles.headerIcon} name='inbox' size={15} /><Text style={styles.formHeaderText}>{'Email'} </Text></View>
          <Field name='email' component={FormInput} placeholder={'Your email'} />

          <View style={styles.formHeader}><RNIcon style={styles.headerIcon} name='flag' size={15} /><Text style={styles.formHeaderText}>{'Country'} </Text></View>
          <Field name='country' component={FormInput} placeholder={'Choose country'} />
        </View>
        <FormButton disabled={invalid || submitting} onPress={wrapMethodInFunction(handleSubmit)} text={'Next'}/>
      </KeyboardAwareScrollView>
    );
  }
}

export default RegisterView;
