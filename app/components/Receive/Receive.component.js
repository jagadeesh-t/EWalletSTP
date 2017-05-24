import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './Receive.component.style';
import QRCode from 'react-native-qrcode-svg';
import demoImage from '../../assets/images/demo-qr-scan.png';
import PropTypes from 'prop-types';

class ReceiveView extends React.Component {
  static propTypes = {
    qrValue: PropTypes.string
  }
  render () {
    return (
      <View style={styles.pageContainer}>
        <View style={styles.qrContainer}>
          <QRCode style={styles.qrBox} size={200} value={this.props.qrValue} />
        </View>
        <View style={styles.demoContainer}>
          <Text style={styles.demoText}> Please scan this QR code in payees phone</Text>
          <Image resizeMode='contain' style={styles.demo} source={demoImage} />
        </View>
      </View>
    );
  }
}

export default ReceiveView;
