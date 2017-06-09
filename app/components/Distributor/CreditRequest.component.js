import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import RNIcon from '../../assets/fonts/RNIcon';
import {FormInput, FormButton} from '../FormElements';
import {Field} from 'redux-form';
import noop from 'lodash/noop';
import {wrapMethodInFunction} from '../../utils/transformer.util';
import styles from './CreditRequest.component.style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {language} from '../../config/language';
import bannerBg from '../../../app/assets/images/banner800x600.png';


class CreditRequestview extends React.Component {
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
          <View style={styles.titleContainer}>
            <Text style={styles.subTitle}>{language.CREDIT_REQUEST__INDEX_TITLE}</Text>
          </View>
        </Image>
        <View style={styles.mainAreaContainer}>
          <View style={styles.formContainer}>
            <Text style={styles.subTitle}>{language.CREDIT_REQUEST__ENTER_TRANSACTION_DETAILS}</Text>
            <View style={styles.formHeader}><RNIcon name='address-card, vcard' size={15} /><Text style={styles.formHeaderText}>{language.CREDIT_REQUEST__TRANSACTION_ID} </Text></View>
            <Field name='transactionId' component={FormInput} placeholder={language.CREDIT_REQUEST__TRANSACTION_ID} />
          </View>
        </View>
        <View style={styles.buttonContainer} >
          <FormButton style={styles.button} disabled={invalid || submitting} onPress={wrapMethodInFunction(handleSubmit)} text={language.SUBMIT_TEXT}/>
        </View>

      </KeyboardAwareScrollView>
    );
  }
}

export default CreditRequestview;
