import {StackNavigator} from 'react-navigation';
import HomePage from '../pages/Home/Home.page';
import ReceivePage from '../pages/Receive/Receive.page';
import SendMoneyPage from '../pages/SendMoney/SendMoney.page';
import SendResultPage from '../pages/SendMoney/SendResult.page';
import QRCodeReaderPage from '../pages/SendMoney/QRCodeReader.page';
import SendConfirmationPage from '../pages/SendMoney/SendConfirmation.page';
import RegisterPage from '../pages/Onboarding/Register.page';
import LoginPage from '../pages/Onboarding/Login.page';
import TransactionHistoryPage from '../pages/TransactionHistroy/TransactionHistory.page';
import {getTitleBar} from '../components/TitleBar/TitleBar.component';
import {getCurrentRouteTitle} from '../utils/transformer.util';
import CreditRequest from  '../pages/Distributor/CreditRequestPage';
import SettingsPage from  '../pages/Settings/Settings.page';
import ProfilePage from  '../pages/Profile/Profile.page';
import SmsOtpPage from '../pages/SmsOtp/SmsOtp.page';
import AddMoneyPage from '../pages/AddMoney/AddMoney.page';
import GatewayWebPage from '../pages/AddMoney/GatewayWeb.page';

export const MainRoutes = {
  AddMoney: {
    screenTitle: 'TITLE__LOGIN',
    screen: AddMoneyPage
  },
  Login: {
    screenTitle: 'TITLE__LOGIN',
    screen: LoginPage
  },
  Settings: {
    screenTitle: 'SETTINGS__INDEX_TITLE',
    screen: SettingsPage
  },
  Profile: {
    screenTitle: 'PROFILE__INDEX_TITLE',
    screen: ProfilePage
  },
  CreditRequest: {
    screenTitle: 'CREDIT_REQUEST__INDEX_TITLE',
    screen: CreditRequest
  },
  Register: {
    screenTitle: 'TITLE__REGISTER',
    screen: RegisterPage
  },
  Home: {
    screenTitle: 'TITLE__HOME',
    screen: HomePage
  },
  QRCodeReader: {
    screenTitle: 'TITLE__QRCODE_READER',
    screen: QRCodeReaderPage
  },
  SendMoney: {
    screenTitle: 'TITLE__SEND_MONEY',
    screen: SendMoneyPage
  },
  SendConfirmation: {
    screenTitle: 'TITLE__SEND_CONFIRMATION',
    screen: SendConfirmationPage
  },
  Receive: {
    screenTitle: 'TITLE__RECEIVE',
    screen: ReceivePage
  },
  TransactionHistory: {
    screenTitle: 'TITLE__TRANSACTION_HISTORY',
    screen: TransactionHistoryPage
  }
};
const MainRoutesConfig = {
  headerMode: 'screen',
  mode: 'card',
  navigationOptions: (navConfig) => ({
    cardStack: {
      gesturesEnabled: false,
    },
    headerTitle: getTitleBar(getCurrentRouteTitle(navConfig))
  })
};

const Routes = StackNavigator({
  MainRoutes: {
    screen: StackNavigator(MainRoutes, MainRoutesConfig)
  },
  SendResult: {
    screen: SendResultPage
  },
  SmsOtpModal: {
    screenTitle: 'SMS_OTP__INDEX_TITLE',
    screen: SmsOtpPage
  },
  GatewayWebModal: {
    screenTitle: 'TITLE__LOGIN',
    screen: GatewayWebPage,
    navigationOptions: {
      gesturesEnabled: false
    }
  }
}, {
  headerMode: 'none',
  mode: 'modal'
});

export default Routes;
