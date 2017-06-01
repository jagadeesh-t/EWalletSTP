import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.component.style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Banner from './Banner/Banner.component';
import LinkPaneContainer from './LinkPaneContainer/LinkPaneContainer.component';
import TabsHolder from './TabsHolder/TabsHolder.component';
import {language} from '../../config/language';

class HomeView extends React.Component {
  static propTypes = {
    onLinkClick: PropTypes.func
  }
  links = [
    [{icon: 'money', id: 'SendMoney', title: language.HOME__PAY_MONEY}, {icon: 'qrcode', id: 'Receive', title: language.HOME__RECEIVE_MONEY}],
    [{icon: 'line-chart', id: 'TransactionHistory', title: language.HOME__TRANSACTION_HISTORY}],
  ]
  tabs = [
    {icon: 'user', id: 'profile', title: language.HOME__PROFILE},
    {icon: 'wrench', id: 'settings', title: language.HOME__SETTINGS},
    {icon: 'handshake-o', id: 'CustomerCare', title: language.HOME__CUSTOMER_CARE}
  ]
  render () {
    const {onLinkClick} = this.props;
    return (
      <KeyboardAwareScrollView  keyboardShouldPersistTaps='handled' style={styles.pageContainer} contentContainerStyle={styles.contentContainer} extraHeight={120} >
        <Banner name={'Atul'} amount={'200000'} />
        <LinkPaneContainer onClick={onLinkClick} links={this.links} />
        <TabsHolder onClick={onLinkClick} tabs={this.tabs} />
      </KeyboardAwareScrollView >
    );
  }
}

export default HomeView;
