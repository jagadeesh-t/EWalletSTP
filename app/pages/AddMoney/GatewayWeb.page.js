import React, {Component} from 'react';
import {connect} from 'react-redux';
import GatewayWebView from '../../components/AddMoney/GatewayWeb.component';
import result from 'lodash/result';
import {showSpinner, hideSpinner} from '../../state/actions/index.actions';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';

class GatewayWebPage extends Component {
  static propTypes = {
    quitPayment: PropTypes.func,
    toggleSpinner: PropTypes.func
  }
  render () {
    const {quitPayment, toggleSpinner} = this.props;
    const webpageHtml = result(this.props, 'navigation.state.params.webpageHtml', {});
    return <GatewayWebView toggleSpinner={toggleSpinner} quitPayment={quitPayment} webpageHtml={webpageHtml} />;
  }
}

const mapDispatchToProps = (dispatch) => ({
  quitPayment: () => {
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
