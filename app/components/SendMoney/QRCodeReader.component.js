/**
 * Raveendra Soori
 **/
import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import Camera from 'react-native-camera';
import PropTypes from 'prop-types';
import ImgViewFinder from '../../assets/images/viewfinder.png';
import styles from './QRCodeReader.component.style';
import RNIcon from '../../assets/fonts/RNIcon';
import Touchable from '../Touchable/Touchable.component';
import {language} from '../../config/language';

export default class QrCodeScanner extends Component {
  static propTypes = {
    onBarCodeRead: PropTypes.func,
    onClose: PropTypes.func
  }
  constructor (props) {
    super(props);
    this.state = {
      flashToggle: false
    };
  }
  onFlash = () => {
    this.setState({
      flashToggle: !this.state.flashToggle
    });
  }
  render () {
    return (
      <View style={styles.container}>
        <Camera torchMode={this.state.flashToggle ? Camera.constants.FlashMode.on : Camera.constants.FlashMode.off}
          onBarCodeRead={this.props.onBarCodeRead} type={Camera.constants.Type.back}
        style={styles.camera} captureAudio={false} aspect={Camera.constants.Aspect.fill}>
          <View style={styles.finder}>
            <Image style={styles.viewboxImage} resizeMode='contain' source={ImgViewFinder}/>
          </View>
        </Camera>
        <View style={styles.bottomBar}>
          <Touchable onPress={this.props.onClose} style={styles.barItem}>
            <RNIcon style={styles.barItemText} name='close, remove, times' />
            <Text style={styles.barItemText}>{language.QRSCANNER__CLOSE}</Text>
          </Touchable>
          <Touchable onPress={this.onFlash} style={styles.barItem}>
            <RNIcon style={styles.barItemText} name='bolt, flash' />
            <Text style={styles.barItemText} >{language.QRSCANNER__FLASH} {this.state.flashToggle ? ' ON' : ' OFF'}</Text>
          </Touchable>
        </View>
      </View>
    );

  }
}
