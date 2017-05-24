import React, {Component} from 'react';
import ReceiveView from '../../components/Receive/Receive.component';
import {connect} from 'react-redux';

const mapDispatchToProps = () => ({});

const mapStateToProps = () => ({});

class ReceiveScreen extends Component {
  render () {
    return (
      <ReceiveView qrValue='dummy' />);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReceiveScreen);
