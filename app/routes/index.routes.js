import {StackNavigator} from 'react-navigation';
import OnboardingRoutes from './onboarding.routes';
import MainRoutes from './main.routes';

export default StackNavigator({
  Onboarding: {
    screen: OnboardingRoutes
  },
  Main: {
    screen: MainRoutes
  }

}, {
  headerMode: 'none',
  mode: 'modal',
  navigationOptions: {
    cardStack: {
      gesturesEnabled: false,
    }
  }
});
