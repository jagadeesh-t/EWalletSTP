import {StackNavigator} from 'react-navigation';

import HomePage from '../pages/Home/Home.page';
import ReceivePage from '../pages/Receive/Receive.page';

const MainRoutes = StackNavigator({
  Receive: {
    screen: ReceivePage
  },
  Home: {
    screen: HomePage
  }
});

export default MainRoutes;
