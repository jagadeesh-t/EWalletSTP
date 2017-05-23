import {StackNavigator} from 'react-navigation';

import HomePage from '../pages/Home/Home.page';

const MainRoutes = StackNavigator({
  Home: {
    screen: HomePage
  }
});

export default MainRoutes;
