import React, {Component} from 'react';
import ReceiveView from '../../components/Receive/Receive.component';
import {connect} from 'react-redux';

const mapDispatchToProps = () => ({});

const mapStateToProps = () => ({});

class ReceiveScreen extends Component {
  render () {
    return (
      <ReceiveView/>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReceiveScreen);
