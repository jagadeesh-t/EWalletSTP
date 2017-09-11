import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './Receive.component.style';
import demoImage from '../../assets/images/demo-qr-scan.png';
import PropTypes from 'prop-types';
import result from 'lodash/result';
import qrCodeGenerator from 'yaqrcode';
import {language} from '../../config/language';

class ReceiveView extends React.Component {
  static propTypes = {
    user: PropTypes.object
  }
  render () {
    const {user} = this.props;
    const qrValue = String(result(user, 'phone', ''));
    return (
      <View style={styles.pageContainer}>
        <View style={styles.qrContainer}>
          <View style={styles.qrWrapper}>
            <Image resizeMode='contain' style={styles.qrImage} source={{uri: qrCodeGenerator(qrValue, {size: 500})}} />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoGroup}><Text style={styles.infoKey}>{language.RECEIVE__USER_NAME} :</Text><Text style={styles.infoValue}>{result(user, 'userProfile.name', '--')}</Text></View>
          <View style={styles.infoGroup}><Text style={styles.infoKey}>{language.RECEIVE__ACCOUNT} :</Text><Text style={styles.infoValue}>{user.phone}</Text></View>
        </View>
        <View style={styles.demoContainer}>
          <Text style={styles.demoText}> {language.RECEIVE__SCAN_DESCRIPTION}</Text>
          <Image resizeMode='contain' style={styles.demo} source={demoImage} />
        </View>
      </View>
    );
  }
}

export default ReceiveView;
