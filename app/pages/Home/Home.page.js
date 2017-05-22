import React, {Component} from 'react';
import HomeView from '../../components/Onboarding/Home.component';
import {connect} from 'react-redux';

const mapDispatchToProps = () => ({});

const mapStateToProps = () => ({});

class HomeScreen extends Component {
  render () {
    return (
      <HomeView />);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
