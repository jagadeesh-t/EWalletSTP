import React, {Component} from 'react';
import SendConfirmationView from '../../components/SendMoney/SendConfirmation.component';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const mapDispatchToProps = () => ({});

const mapStateToProps = () => ({});

class SendConfirmationScreen extends Component {
  static propTypes = {
    onConfirm: PropTypes.func
  }
  render () {
    const {onConfirm} = this.props;
    return (
      <SendConfirmationView onConfirm={onConfirm} />);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendConfirmationScreen);
