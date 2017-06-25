import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import RNIcon from '../../assets/fonts/RNIcon';
import {FormInput, FormButton} from '../FormElements';
import {Field} from 'redux-form';
import noop from 'lodash/noop';
import {wrapMethodInFunction} from '../../utils/transformer.util';
import styles from './Profile.component.style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {language} from '../../config/language';
import result from 'lodash/result';

class ProfileView extends React.Component {
  constructor (props) {
    super(props);
  }

  static propTypes = {
    handleSubmit: PropTypes.func,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool,
    user: PropTypes.object
  }

  render () {
    const {invalid, submitting, handleSubmit = noop, user} = this.props;
    const name = result(user, 'userProfile.name', '--');
    const phone = String(result(user, 'phone', '--'));
    const email = result(user, 'userProfile.test', language.PROFILE__EMAIL_NOT_PRESENT_TEXT);
    return (

      <KeyboardAwareScrollView style={styles.pageContainer} contentContainerStyle={styles.contentContainer} extraHeight={120}>
        <Text style={styles.subTitle}>{language.PROFILE__SUBTITLE}</Text>

        <View style={styles.mainAreaContainer}>
          <View style={styles.formContainer}>
            <View style={styles.formHeader}><RNIcon name='user' size={15} /><Text style={styles.formHeaderText}>{language.PROFILE__NAME} </Text></View>
            <Field name='name' component={FormInput} placeholder={name} />
            <View style={styles.formHeader}><RNIcon name='envelope' size={15} /><Text style={styles.formHeaderText}>{language.PROFILE__EMAIL} </Text></View>
            <Field name='email'  component={FormInput} placeholder={email} />
            <View style={styles.formHeader}><RNIcon name='mobile, mobile-phone' size={15} /><Text style={styles.formHeaderText}>{language.PROFILE__PHONE} </Text></View>
            <Text style={styles.phoneText} name='phone'>{phone}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer} >
          <FormButton style={styles.button} disabled={invalid || submitting} onPress={wrapMethodInFunction(handleSubmit)} text={language.PROFILE__UPDATE_BUTTON_TEXT}/>
        </View>

      </KeyboardAwareScrollView>
    );
  }
}

export default ProfileView;
