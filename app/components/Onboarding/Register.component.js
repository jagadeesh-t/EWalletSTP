import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {language} from '../../config/language';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

class RegisterForm extends Component {
  render () {
    return (
      <KeyboardAwareScrollView extraHeight={120}>
        <View>
          <Text>{language.TEST}</Text>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default RegisterForm;
