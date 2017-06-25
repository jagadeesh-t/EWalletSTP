import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import RNIcon from '../../assets/fonts/RNIcon';
import {FormInput, FormButton} from '../FormElements';
import {Field} from 'redux-form';
import noop from 'lodash/noop';
import {wrapMethodInFunction} from '../../utils/transformer.util';
import styles from './Settings.component.style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {language} from '../../config/language';

class Settingsview extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool,

  }

  render () {
    const {invalid, submitting, handleSubmit = noop} = this.props;
    return (
      <KeyboardAwareScrollView style={styles.pageContainer} contentContainerStyle={styles.contentContainer} extraHeight={120}>
        <Text style={styles.subTitle}>{language.SETTINGS__SUBTITLE}</Text>
        <View style={styles.mainAreaContainer}>
          <View style={styles.formContainer}>
            <View style={styles.formHeader}><RNIcon name='unlock' size={15} /><Text style={styles.formHeaderText}>{language.SETTINGS__CURRENT_PASSWORD} </Text></View>
            <Field secureTextEntry={true} name='currentPassword' component={FormInput} placeholder={language.SETTINGS__CURRENT_PASSWORD} />
            <View style={styles.formHeader}><RNIcon name='lock' size={15} /><Text style={styles.formHeaderText}>{language.SETTINGS__NEW_PASSWORD} </Text></View>
            <Field name='newPassword' secureTextEntry={true} component={FormInput} placeholder={language.SETTINGS__NEW_PASSWORD} />
            <View style={styles.formHeader}><RNIcon name='key' size={15} /><Text style={styles.formHeaderText}>{language.SETTINGS__CONFIRM_NEW_PASSWORD} </Text></View>
            <Field name='confirmPassword' secureTextEntry={true} component={FormInput} placeholder={language.SETTINGS__CONFIRM_NEW_PASSWORD} />
          </View>
        </View>
        <View style={styles.buttonContainer} >
          <FormButton style={styles.button} disabled={invalid || submitting} onPress={wrapMethodInFunction(handleSubmit)} text={language.SETTINGS__CHANGE_PASSWORD_BUTTON}/>
        </View>

      </KeyboardAwareScrollView>
    );
  }
}

export default Settingsview;
