import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {ConnectedRoutes} from './routes/Router';
import {connect} from 'react-redux';
import firebase from './utils/firebase.util';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

class AppComponent extends React.Component {
  componentDidMount () {
    SplashScreen.hide();
  }
  render () {
    return (
      <ConnectedRoutes />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
