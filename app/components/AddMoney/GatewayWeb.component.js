import React from 'react';
import PropTypes from 'prop-types';
import {WebView, View, Text} from 'react-native';
import styles from './GatewayWeb.component.style';
import RNIcon from '../../assets/fonts/RNIcon';
import Touchable from '../Touchable/Touchable.component';
import Spinner from 'react-native-loading-spinner-overlay';

const htmlStyle = `
<style>
*{
 max-width: 100%;
}
body {
 font-family: sans-serif;
 padding:0;
 margin:0;
}
#iframe-payment-container{
	 border: transparent;
   padding: 0;
   margin:0;
}
</style>
`;

class GatewayWeb extends React.Component {
  static propTypes = {
    webpageHtml: PropTypes.string,
    quitPayment: PropTypes.func,
    toggleSpinner: PropTypes.func
  }

  onChange = (navState) => {
    if (!navState.loading) {
      this.hideSpinner();
    }
    console.log(navState);
  }
  hideSpinner = () => {
    this.props.toggleSpinner(false);
  }

  render () {
    const {webpageHtml, quitPayment} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Yo</Text>
          <Touchable onPress={quitPayment} style={styles.iconContainer}>
            <RNIcon {...styles.icon} name='close, remove, times' />
          </Touchable>
        </View>
        <WebView
          source={{html: htmlStyle + webpageHtml}}
           onNavigationStateChange={this.onChange}
           javaScriptEnabled = {true}
           domStorageEnabled = {true}
          />
      </View>
    );
  }
}

export default GatewayWeb;
