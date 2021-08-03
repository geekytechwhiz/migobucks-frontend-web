import Login from './login/Login';
import RegisterSuccess from './register-success/register-success';
import Register from './register/Register';

const OnboardingRouting = [

  {
    path: '/auth/login',
    key: 'login',
    component: Login,
  },
  {
    path: '/auth/register',
    key: 'register',
    component: Register,
  },
  {
    path: '/auth/register-success',
    key: 'register',
    component: RegisterSuccess,
  },
];

export default OnboardingRouting;
