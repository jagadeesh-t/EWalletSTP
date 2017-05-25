import {StackNavigator} from 'react-navigation';

import HomePage from '../pages/Home/Home.page';
import ReceivePage from '../pages/Receive/Receive.page';
import SendMoneyPage from '../pages/SendMoney/SendMoney.page';
import QRCodeReaderPage from '../pages/SendMoney/QRCodeReader.page';

const MainRoutes = StackNavigator({
  QRCodeReader: {
    screen: QRCodeReaderPage
  },
  SendMoney: {
    screen: SendMoneyPage
  },
  Receive: {
    screen: ReceivePage
  },
  Home: {
    screen: HomePage
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
