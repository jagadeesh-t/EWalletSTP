import React, {Component} from 'react';
import HomeView from '../../components/Home/Home.component';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {NavigationActions} from 'react-navigation';
import result from 'lodash/result';
import {logout, getUser} from '../../state/actions/index.thunks';

const mapDispatchToProps = (dispatch) => ({
  navigateTo: (link = {}) => {
    const routeName = link.id;
    dispatch(NavigationActions.navigate({routeName}));
  },

  tabNavigateTo: (tab = {}) => {
    const routeName = tab.id;
    dispatch(NavigationActions.navigate({routeName}));
  },

  onLogoutClick: () => dispatch(logout()),
  refreshUserData: () => dispatch(getUser())
});

const mapStateToProps = (state) => ({
  user: result(state, 'user', {})
});

class HomeScreen extends Component {
  static propTypes = {
    navigateTo: PropTypes.func,
    user: PropTypes.object,
    onLogoutClick: PropTypes.func,
    refreshUserData: PropTypes.func,
    tabNavigateTo : PropTypes.func
  

  }
  render () {
    const {navigateTo, user, onLogoutClick, refreshUserData,tabNavigateTo} = this.props;
    return (
      <HomeView user={user} onLogoutClick={onLogoutClick} onLinkClick={navigateTo} onTabClick={tabNavigateTo} refreshUserData={refreshUserData}/>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
