import React, {Component} from 'react';
import HomeView from '../../components/Home/Home.component';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {NavigationActions} from 'react-navigation';
import result from 'lodash/result';

const mapDispatchToProps = (dispatch) => ({
  navigateTo: (link = {}) => {
    const routeName = link.id;
    dispatch(NavigationActions.navigate({routeName}));
  }
});

const mapStateToProps = (state) => ({
  user: result(state, 'user', {})
});

class HomeScreen extends Component {
  static propTypes = {
    navigateTo: PropTypes.func,
    user: PropTypes.object
  }
  render () {
    const {navigateTo, user} = this.props;
    return (
      <HomeView user={user} onLinkClick={navigateTo}/>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
