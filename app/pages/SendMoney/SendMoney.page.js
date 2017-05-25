import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import SendMoneyView from '../../components/SendMoney/SendMoney.component';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';

const formConfig = {
  form: 'sendMoney',
  destroyOnUnmount: true,
  initialValues: {},
  onSubmit: () => {},
  validate: () => ({})
};

const mapDispatchToProps = (dispatch) => ({
  onQrClick: () => {
    dispatch(NavigationActions.navigate({routeName: 'QRCodeReader'}));
  }
});

const mapStateToProps = () => ({});

const SendMoneyForm = reduxForm(formConfig)(SendMoneyView);

class SendMoneyScreen extends Component {
  static propTypes = {
    onQrClick: PropTypes.func
  }
  render () {
    const {onQrClick} = this.props;
    return (
      <SendMoneyForm onQrClick={onQrClick}/>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendMoneyScreen);
