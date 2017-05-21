import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import {FormInput, FormButton} from '../FormElements';
import {Field} from 'redux-form';
import noop from 'lodash/noop';
import {wrapMethodInFunction} from '../../utils/transformer.util';
import styles from './Register.component.style';
// import {language} from '../../config/language';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

class RegisterView extends React.Component {
  static propTypes = {
    payeeNameDisabled: PropTypes.bool,
    handleSubmit: PropTypes.func,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool
  }

  render () {
    const {payeeNameDisabled = false, invalid, submitting, handleSubmit = noop} = this.props;
    return (
      <KeyboardAwareScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={styles.containerContent} style={styles.container} extraHeight={120}>
        <Text style={styles.title}>{'language.REGISTER__NEW_USER'}</Text>
        <View style={styles.formContainer}>
          <Text style={styles.formHeader}>{'language.REGISTER__MOBILE_NO'}</Text>
          <Field name='mobileNo' component={FormInput} keyboardType='numeric' placeholder={'language.REGISTER__ACCOUNT_NUMBER_PLACEHOLDER'} />

          <Text style={styles.formHeader}>{'language.REGISTER__PASSWORD'}</Text>
          <Field name='password' format={this.formatBank} disabled={true} component={FormInput} keyboardType='numeric' placeholder={'language.REGISTER__BANK_NAME_PLACEHOLDER'} />

          <Text style={styles.formHeaderSubtext}>{'language.REGISTER__NAME'}</Text>
          <Field name='name' disabled={payeeNameDisabled} component={FormInput} placeholder={'language.REGISTER__NAME_PLACEHOLDER'} />

          <Text style={styles.formHeaderSubtext}>{'language.REGISTER__EMAIL'}</Text>
          <Field name='email' disabled={payeeNameDisabled} component={FormInput} placeholder={'language.REGISTER__NAME_PLACEHOLDER'} />

          <Text style={styles.formHeaderSubtext}>{'language.REGISTER__COUNTRY'}</Text>
          <Field name='country' disabled={payeeNameDisabled} component={FormInput} placeholder={'language.REGISTER__NAME_PLACEHOLDER'} />

        </View>
        <FormButton disabled={invalid || submitting} onPress={wrapMethodInFunction(handleSubmit)} text={'language.SERVICE__NEXT_BUTTON'}/>
      </KeyboardAwareScrollView>
    );
  }
}

export default RegisterView;
