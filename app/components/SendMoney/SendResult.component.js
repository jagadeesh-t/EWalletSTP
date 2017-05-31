import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './SendResult.component.style';
import {FormButton} from '../FormElements';
import result from 'lodash/result';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import RNIcon from '../../assets/fonts/RNIcon';

class SendResultView extends React.Component {
  static propTypes = {
    onDone: PropTypes.func.isRequired,
    status: PropTypes.oneOf(['success', 'failure', 'progress'])
  }
  assetMap = {
    success: {
      icon: 'check',
      text: 'Successful',
      color: 'green'
    },
    failure: {
      icon: 'close, remove, times',
      text: 'Failed',
      color: 'red'
    },
    progress: {
      icon: 'spinner',
      text: 'Processing',
      color: 'grey'
    }
  }
  render () {
    const {onDone = noop, status = 'progress'} = this.props;
    const statusEntity = result(this.assetMap, `[${status}]`, 'progress');
    return (
      <View style={styles.pageContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{'Transfer Status'}</Text>
          <Text style={styles.subtext}>{'Transfer was successful'}</Text>
        </View>
        <View style={styles.card} >
          <ScrollView>
            <View style={styles.statusArea}>
              <RNIcon style={[styles.statusIcon, {color: statusEntity.color}]} name={statusEntity.icon} />
              <Text style={styles.status}>{statusEntity.text}</Text>
            </View>

            <Text style={styles.subtitle}>Transaction details</Text>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldKey}>Transfer amount</Text>
              <Text style={styles.fieldValue}>100</Text>
            </View>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldKey}>Admin charge</Text>
              <Text style={styles.fieldValue}>2%</Text>
            </View>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldKey}>Total</Text>
              <Text style={styles.fieldValue}>102</Text>
            </View>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldKey}>Transaction ID</Text>
              <Text style={styles.fieldValue}>1022232</Text>
            </View>

            <Text style={styles.subtitle}>Payee Details</Text>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldKey}>Name</Text>
              <Text style={styles.fieldValue}>TESTSTST</Text>
            </View>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldKey}>Identifier</Text>
              <Text style={styles.fieldValue}>TETETETETE</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.buttonContainer} >
          <FormButton onPress={onDone} style={styles.button} text={'Close'}/>
        </View>
      </View>
    );
  }
}

export default SendResultView;
