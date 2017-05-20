import React from 'react';
import PropTypes from 'prop-types';
import {addNavigationHelpers} from 'react-navigation';
import {connect} from 'react-redux';
import {BackAndroid} from 'react-native';
import Routes from './index.routes';

class RouterWrapper extends React.Component {
  static propTypes = {
    nav: PropTypes.object,
    dispatch: PropTypes.func
  }
  componentWillUnmount () {
    BackAndroid.removeEventListener('backPress');
  }
  render () {
    const {dispatch, nav} = this.props;
    return <Routes navigation={addNavigationHelpers({dispatch, state: nav})} />;
  }
}

const mapStateToProps = ({nav}) => ({nav});

const mapDispatchToProps = (dispatch) => ({dispatch});

export const ConnectedRoutes = connect(mapStateToProps, mapDispatchToProps)(RouterWrapper);

export default Routes;
