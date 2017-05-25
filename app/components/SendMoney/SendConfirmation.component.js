import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {FormButton} from '../FormElements';
import styles from './SendMoney.component.style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

class SendMoneyView extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool
  }

  render () {
    return (
      <KeyboardAwareScrollView style={styles.pageContainer} contentContainerStyle={styles.contentContainer} extraHeight={120}>

        <View style={styles.buttonContainer} >
          <FormButton style={styles.button} text={'Confirm'}/>
        </View>

      </KeyboardAwareScrollView>
    );
  }
}

export default SendMoneyView;
