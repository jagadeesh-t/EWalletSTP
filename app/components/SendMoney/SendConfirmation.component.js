import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import RNIcon from '../../assets/fonts/RNIcon';
import {FormButton} from '../FormElements';
import noop from 'lodash/noop';
import styles from './SendMoney.component.style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

class SendMoneyView extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool
  }

  render () {
    const {onConfirm = noop} = this.props;
    return (
      <KeyboardAwareScrollView style={styles.pageContainer} contentContainerStyle={styles.contentContainer} extraHeight={120}>

        <View style={styles.buttonContainer} >
          <FormButton style={styles.button} disabled={invalid || submitting} onPress={onConfirm} text={'Confirm'}/>
        </View>

      </KeyboardAwareScrollView>
    );
  }
}

export default SendMoneyView;
