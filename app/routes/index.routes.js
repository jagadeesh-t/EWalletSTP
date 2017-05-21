import {StackNavigator} from 'react-navigation';
import OnboardingRoutes from './onboarding.routes';

export default StackNavigator({
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
