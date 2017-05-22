import {StackNavigator} from 'react-navigation';

import RegisterPage from '../pages/Onboarding/Register.page';
import LoginPage from '../pages/Onboarding/Login.page';

const OnboardingRoutes = StackNavigator({
  Login: {
    screen: LoginPage
  },
  Register: {
    screen: RegisterPage
  },
});

export default OnboardingRoutes;
