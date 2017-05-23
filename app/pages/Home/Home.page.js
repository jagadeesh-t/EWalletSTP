import React, {Component} from 'react';
import HomeView from '../../components/Home/Home.component';
import {connect} from 'react-redux';
import noop from 'lodash/noop';

const mapDispatchToProps = () => ({});

const mapStateToProps = () => ({});

class HomeScreen extends Component {
  render () {
    return (
      <HomeView onLinkClick={noop}/>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
