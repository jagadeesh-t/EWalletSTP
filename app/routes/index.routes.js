import {StackNavigator} from 'react-navigation';
import OnboardingRoutes from './onboarding.routes';
import MainRoutes from './main.routes';

export default StackNavigator({
  Main: {
    screen: MainRoutes
  },
  Onboarding: {
    screen: OnboardingRoutes
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
