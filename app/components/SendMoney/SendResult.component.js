import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './SendResult.component.style';
import {FormButton} from '../FormElements';
import ImagePayGraphic from '../../assets/images/mobile-pay.png';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

class SendResultView extends React.Component {
  static propTypes = {
    onDone: PropTypes.func.isRequired
  }

  render () {
    const {onDone = noop} = this.props;
    return (
      <View style={styles.pageContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{'Transfer Status'}</Text>
          <Text style={styles.subtext}>{'Transfer was successful'}</Text>
        </View>
        <View style={styles.card} >
          <ScrollView>
            <View style={styles.payGraphic}>
              <Image style={styles.image} resizeMode='contain' source={ImagePayGraphic}/>
              <Text style={styles.status}>Success</Text>
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
