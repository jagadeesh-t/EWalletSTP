import React from 'react';
import PropTypes from 'prop-types';
import SplashScreen from 'react-native-splash-screen';
import {setCurrent} from './config/language/index';
import storage from './utils/storage.util';
import {setLanguage} from './state/actions/index.actions';
import {ConnectedRoutes} from './routes/Router';
import {connect} from 'react-redux';
import './utils/firebase.util';
import {View} from 'react-native';
import result from 'lodash/result';
import Spinner from 'react-native-loading-spinner-overlay';

const mapStateToProps = (state) => ({
  spinner: result(state, 'spinner', {})
});

const mapDispatchToProps = (dispatch) => ({
  setInitialLanguage: () => {
    storage.get('LANGUAGE').then((langId) => {
      if (langId) {
        setCurrent(langId);
        dispatch(setLanguage(langId));
      }
    }).catch((err) => {
      console.log(err);
    });
  }
});

const styles = {
  container: {
    flexGrow: 1
  }
};

class AppComponent extends React.Component {
  static propTypes = {
    setInitialLanguage: PropTypes.func,
    spinner: PropTypes.object
  }
  componentDidMount () {
    SplashScreen.hide();
    this.props.setInitialLanguage();
  }

  render () {
    const {spinner} = this.props;
    return (
      <View style={styles.container}>
        <Spinner visible={spinner.visible} />
        <ConnectedRoutes />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
