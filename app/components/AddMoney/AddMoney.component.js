import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import RNIcon from '../../assets/fonts/RNIcon';
import {FormInput, FormButton} from '../FormElements';
import {Field} from 'redux-form';
import styles from './AddMoney.component.style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {language} from '../../config/language';
import {wrapMethodInFunction} from '../../utils/transformer.util';
import noop from 'lodash/noop';

class AddMoney extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool
  }
  render () {
    const {invalid, submitting, handleSubmit = noop} = this.props;
    return (
      <KeyboardAwareScrollView style={styles.pageContainer} contentContainerStyle={styles.contentContainer} extraHeight={120}>
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.subTitle}>{'Add Money to EWallet'}</Text>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.formHeader}><RNIcon name='money' size={15} /><Text style={styles.formHeaderText}>Amount</Text></View>
            <Field name='amount' component={FormInput} placeholder={'Enter the amount to be added'} />
          </View>
        </View>
        <View style={styles.buttonContainer} >
          <FormButton disabled={invalid || submitting} onPress={wrapMethodInFunction(handleSubmit)} text={'NEXT'}/>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
// <WebView source={{html: paymentPageHtml}}/>

export default AddMoney;
