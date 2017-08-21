import React from 'react';
import PropTypes from 'prop-types';
import SplashScreen from 'react-native-splash-screen';
import {setCurrent} from './config/language/index';
import storage from './utils/storage.util';
import {setLanguage} from './state/actions/index.actions';
import {ConnectedRoutes} from './routes/Router';
import {connect} from 'react-redux';
import './utils/firebase.util';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  setInitialLanguage: () => {
    storage.get('LANGUAGE').then((langId) => {
      setCurrent(langId);
      dispatch(setLanguage(langId));
    }).catch((err) => {
      console.log(err);
    });
  }
});

class AppComponent extends React.Component {
  static propTypes = {
    setInitialLanguage: PropTypes.func
  }
  componentDidMount () {
    SplashScreen.hide();
    this.props.setInitialLanguage();
  }

  render () {
    return (
      <ConnectedRoutes />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
