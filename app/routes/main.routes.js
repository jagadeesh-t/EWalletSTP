import {StackNavigator} from 'react-navigation';

import HomePage from '../pages/Home/Home.page';
import ReceivePage from '../pages/Receive/Receive.page';
import SendMoneyPage from '../pages/SendMoney/SendMoney.page';

const MainRoutes = StackNavigator({
  SendMoney: {
    screen: SendMoneyPage
  },
  Receive: {
    screen: ReceivePage
  },
  Home: {
    screen: HomePage
  }
});

export default MainRoutes;
