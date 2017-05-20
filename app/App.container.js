import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import theme from './styles/theme.styles';
import {ConnectedRoutes} from './routes/Router';
import {connect} from 'react-redux';
import {View, StatusBar} from 'react-native';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

class AppComponent extends React.Component {
  componentDidMount () {
    SplashScreen.hide();
  }
  render () {
    return (
      <View>
        <StatusBar barStyle='dark-content' backgroundColor={theme.primary} />
        <ConnectedRoutes />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
