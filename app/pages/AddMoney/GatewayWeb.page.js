import React, {Component} from 'react';
import {connect} from 'react-redux';
import GatewayWebView from '../../components/AddMoney/GatewayWeb.component';
import result from 'lodash/result';
import {showSpinner, hideSpinner} from '../../state/actions/index.actions';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';

class GatewayWebPage extends Component {
  static propTypes = {
    onAbortPayment: PropTypes.func,
    onPaymentResult: PropTypes.func,
    toggleSpinner: PropTypes.func
  }
  render () {
    const {onAbortPayment, onPaymentResult, toggleSpinner} = this.props;
    const webpageHtml = result(this.props, 'navigation.state.params.html', {});
    const orderRef = result(this.props, 'navigation.state.params.orderRef', {});
    return <GatewayWebView toggleSpinner={toggleSpinner} onAbortPayment={onAbortPayment} onPaymentResult={onPaymentResult} orderRef={orderRef} webpageHtml={webpageHtml} />;
  }
}

const mapDispatchToProps = (dispatch) => ({
  onAbortPayment: () => {
    dispatch(NavigationActions.back());
  },
  onPaymentResult: () => {
    dispatch(NavigationActions.back());
  },
  toggleSpinner: (visible) => {
    if (visible) {
      dispatch(showSpinner());
    } else {
      dispatch(hideSpinner());
    }
  }
});

export default connect(null, mapDispatchToProps)(GatewayWebPage);
