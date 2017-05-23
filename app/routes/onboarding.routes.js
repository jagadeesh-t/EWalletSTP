import {StackNavigator} from 'react-navigation';

import RegisterPage from '../pages/Onboarding/Register.page';
import LoginPage from '../pages/Onboarding/Login.page';

const OnboardingRoutes = StackNavigator({
  Register: {
    screen: RegisterPage
  },
  Login: {
    screen: LoginPage
  }

});

export default OnboardingRoutes;
