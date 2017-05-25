import React, {Component} from 'react';
import HomeView from '../../components/Home/Home.component';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {NavigationActions} from 'react-navigation';

const mapDispatchToProps = (dispatch) => ({
  navigateTo: (link = {}) => {
    const routeName = link.id;
    dispatch(NavigationActions.navigate({routeName}));
  }
});

const mapStateToProps = () => ({});

class HomeScreen extends Component {
  static propTypes = {
    navigateTo: PropTypes.func
  }
  render () {
    const {navigateTo} = this.props;
    return (
      <HomeView onLinkClick={navigateTo}/>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
