import React, {Component} from 'react';
import QRScanView from '../../components/SendMoney/QRCodeReader.component';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import {change} from 'redux-form';
import result from 'lodash/result';

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(NavigationActions.back()),
  onBarCodeRead: (qrData) => {
    const toPhone = result(qrData, 'data', '');
    dispatch(change('sendMoney', 'mobileNo', toPhone));
    dispatch(NavigationActions.back());
  }
});

const mapStateToProps = () => ({});

class QRScanScreen extends Component {
  static propTypes = {
    onClose: PropTypes.func,
    onBarCodeRead: PropTypes.func
  }
  render () {
    const {onClose, onBarCodeRead} = this.props;
    return (
      <QRScanView onClose={onClose} onBarCodeRead={onBarCodeRead} />);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QRScanScreen);
