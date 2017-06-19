import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import RNIcon from '../../assets/fonts/RNIcon';
import {FormInput, FormButton} from '../FormElements';
import {Field} from 'redux-form';
import noop from 'lodash/noop';
import {wrapMethodInFunction} from '../../utils/transformer.util';
import styles from './Profile.component.style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {language} from '../../config/language';
import bannerBg from '../../../app/assets/images/banner800x600.png';
import result from 'lodash/result';




class ProfileView extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      
    }; 
  }

  static propTypes = {
    handleSubmit: PropTypes.func,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool,
    user: PropTypes.object,
    
  }



  render () {
    const {invalid, submitting, handleSubmit = noop, user} = this.props;
    const name = result(user, 'userProfile.name', '--');
    const phone = result(user, 'phone', '--').toString();
    const email = result(user, 'userProfile.test', 'Enter your Email');
    return (

      <KeyboardAwareScrollView style={styles.pageContainer} contentContainerStyle={styles.contentContainer} extraHeight={120}>
        <Image style={styles.imageContainer} resizeMode='stretch' source={bannerBg}>
          <View style={styles.titleContainer}>
            <Text style={styles.subTitle}>{language.PROFILE__INDEX_TITLE}</Text>
          </View>
        </Image>
        <View style={styles.mainAreaContainer}>
          <View style={styles.formContainer}>
            <View style={styles.formHeader}><RNIcon name='user' size={15} /><Text style={styles.formHeaderText}>{language.PROFILE__NAME} </Text></View>
            <Field name='name' component={FormInput} placeholder={name} />
            <View style={styles.formHeader}><RNIcon name='mobile, mobile-phone' size={15} /><Text style={styles.formHeaderText}>{language.PROFILE__PHONE + ': '} </Text></View>
            <Field name='phone' disabled={true} selectTextOnFocus={false} component={FormInput} placeholder={phone} />
            <View style={styles.formHeader}><RNIcon name='envelope' size={15} /><Text style={styles.formHeaderText}>{language.PROFILE__EMAIL} </Text></View>
            <Field name='email'  component={FormInput} placeholder={email} />
          </View>
        </View>
        <View style={styles.buttonContainer} >
          <FormButton style={styles.button} disabled={invalid || submitting} onPress={wrapMethodInFunction(handleSubmit)} text={language.SUBMIT_TEXT}/>
        </View>

      </KeyboardAwareScrollView>
    );
  }
}

export default ProfileView;
