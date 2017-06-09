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
import {language} from '../config/language';
import CreditRequest from  '../pages/Distributor/CreditRequestPage';
import VerificationPage from '../pages/Onboarding/Verification.page';

export const MainRoutes = {


  Login: {
    screenTitle: language.TITLE__LOGIN,
    screen: LoginPage
  },
  Verification: {
    screenTitle: language.VERIFICATION__INDEX_TITLE,
    screen: VerificationPage
  },

  CreditRequest: {
    screenTitle: language.CREDIT_REQUEST__INDEX_TITLE,
    screen: CreditRequest
  },

  
  Register: {
    screenTitle: language.TITLE__REGISTER,
    screen: RegisterPage
  },
  Home: {
    screenTitle: language.TITLE__HOME,
    screen: HomePage
  },
  QRCodeReader: {
    screenTitle: language.TITLE__QRCODE_READER,
    screen: QRCodeReaderPage
  },
  SendMoney: {
    screenTitle: language.TITLE__SEND_MONEY,
    screen: SendMoneyPage
  },
  SendConfirmation: {
    screenTitle: language.TITLE__SEND_CONFIRMATION,
    screen: SendConfirmationPage
  },
  Receive: {
    screenTitle: language.TITLE__RECEIVE,
    screen: ReceivePage
  },
  TransactionHistory: {
    screenTitle: language.TITLE__TRANSACTION_HISTORY,
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
  }
}, {
  headerMode: 'none',
  mode: 'modal'
});

export default Routes;
