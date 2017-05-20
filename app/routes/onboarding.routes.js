import {StackNavigator} from 'react-navigation';

import RegisterPage from '../pages/Onboarding/Register.page';

const OnboardingRoutes = StackNavigator({
  Register: {
    screen: RegisterPage
  },
});

export default OnboardingRoutes;
