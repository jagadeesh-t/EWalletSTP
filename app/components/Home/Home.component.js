import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.component.style';
import {RefreshControl} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Banner from './Banner/Banner.component';
import LinkPaneContainer from './LinkPaneContainer/LinkPaneContainer.component';
import TabsHolder from './TabsHolder/TabsHolder.component';
import {language} from '../../config/language';
import result from 'lodash/result';
import noop from 'lodash/noop';

class HomeView extends React.Component {
  static propTypes = {
    onLinkClick: PropTypes.func,
    user: PropTypes.object,
    onLogoutClick: PropTypes.func,
    refreshUserData: PropTypes.func,
    onTabClick: PropTypes.func
  }
  state = {
    dashboardRefreshing: false
  }
  links = [
    [{icon: 'money', id: 'SendMoney', title: language.HOME__PAY_MONEY}, {icon: 'qrcode', id: 'Receive', title: language.HOME__RECEIVE_MONEY}],
    [{icon: 'line-chart', id: 'TransactionHistory', title: language.HOME__TRANSACTION_HISTORY}],
  ]

  linksWithDistributor = [
    [{icon: 'money', id: 'SendMoney', title: language.HOME__PAY_MONEY}, {icon: 'qrcode', id: 'Receive', title: language.HOME__RECEIVE_MONEY}],
    [{icon: 'line-chart', id: 'TransactionHistory', title: language.HOME__TRANSACTION_HISTORY}, {icon: 'address-card, vcard', id: 'CreditRequest', title: language.CREDIT_REQUEST__INDEX_TITLE}],
  ]

  tabs = [
    {icon: 'user', id: 'Profile', title: language.HOME__PROFILE},
    {icon: 'wrench', id: 'Settings', title: language.HOME__SETTINGS},
    {icon: 'handshake-o', id: 'CustomerCare', title: language.HOME__CUSTOMER_CARE}
  ]
  showPullSpinner = () => {
    this.setState({dashboardRefreshing: true});
  }
  hidePullSpinner = () => {
    this.setState({dashboardRefreshing: false});
  }
  onDashboardRefresh = () => {
    const {refreshUserData = Promise.resolve} = this.props;
    this.showPullSpinner();
    return refreshUserData().then(this.hidePullSpinner);
  }
  render () {
    const {onLinkClick = noop, user, onLogoutClick = noop, onTabClick = noop} = this.props;
    const name = result(user, 'userProfile.name', '--');
    const balance = result(user, 'balanceAccount.balance', '--');
    const phone = result(user, 'phone', '--');
    const userType = result(user, 'userProfile.userType', 'REGULAR');
    return (
      <KeyboardAwareScrollView  keyboardShouldPersistTaps='handled' style={styles.pageContainer} contentContainerStyle={styles.contentContainer} extraHeight={120}
        refreshControl={<RefreshControl refreshing={this.state.dashboardRefreshing} onRefresh={this.onDashboardRefresh} tintColor={styles.refreshColor} colors={[styles.refreshColor]} enabled/>}
          >
        <Banner name={name} amount={String(balance)} phone={phone.toString()} onLogoutClick={onLogoutClick}/>
        {userType === 'DISTRIBUTOR' ? <LinkPaneContainer onClick={onLinkClick} links={this.linksWithDistributor} /> : <LinkPaneContainer onClick={onLinkClick} links={this.links} />}
        
        <TabsHolder onClick={onTabClick} tabs={this.tabs} />
      </KeyboardAwareScrollView >
    );
  }
}

export default HomeView;
