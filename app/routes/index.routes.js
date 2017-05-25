import {StackNavigator} from 'react-navigation';

import HomePage from '../pages/Home/Home.page';
import ReceivePage from '../pages/Receive/Receive.page';
import SendMoneyPage from '../pages/SendMoney/SendMoney.page';
import QRCodeReaderPage from '../pages/SendMoney/QRCodeReader.page';
import SendConfirmationPage from '../pages/SendMoney/SendConfirmation.page';
import RegisterPage from '../pages/Onboarding/Register.page';
import LoginPage from '../pages/Onboarding/Login.page';

const MainRoutes = StackNavigator({
  Login: {
    screen: LoginPage
  },
  Register: {
    screen: RegisterPage
  },
  Home: {
    screen: HomePage
  },
  QRCodeReader: {
    screen: QRCodeReaderPage
  },
  SendMoney: {
    screen: SendMoneyPage
  },
  SendConfirmation: {
    screen: SendConfirmationPage
  },
  Receive: {
    screen: ReceivePage
  }
}, {
  headerMode: 'screen',
  mode: 'card',
  navigationOptions: {
    cardStack: {
      gesturesEnabled: false,
    }
  }
});

export default MainRoutes;
