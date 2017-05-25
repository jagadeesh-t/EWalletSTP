import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.component.style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Banner from './Banner/Banner.component';
import LinkPaneContainer from './LinkPaneContainer/LinkPaneContainer.component';
import TabsHolder from './TabsHolder/TabsHolder.component';

class HomeView extends React.Component {
  static propTypes = {
    onLinkClick: PropTypes.func
  }
  links = [
    [{icon: 'plus', id: 'addMoney', title: 'Add Money '}, {icon: 'money', id: 'SendMoney', title: 'Pay Money'}],
    [{icon: 'line-chart', id: 'tHistory', title: 'Transaction History'}, {icon: 'qrcode', id: 'Receive', title: 'Receive Payment'}],
  ]
  tabs = [
    {icon: 'user', id: 'profile', title: 'Profile'},
    {icon: 'wrench', id: 'settings', title: 'Settings'}
  ]
  render () {
    const {onLinkClick} = this.props;
    return (
      <KeyboardAwareScrollView  keyboardShouldPersistTaps='handled' style={styles.pageContainer} contentContainerStyle={styles.contentContainer} extraHeight={120} >
        <Banner title='Balance' amount={200000} />
        <LinkPaneContainer onClick={onLinkClick} links={this.links} />
        <TabsHolder onClick={onLinkClick} tabs={this.tabs} />
      </KeyboardAwareScrollView >
    );
  }
}

export default HomeView;
