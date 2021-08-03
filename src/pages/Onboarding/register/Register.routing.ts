import BrandType from './brand-type/brand-type';
import CreatePassword from './create-password/create-password';
import RegisterBrand from './register-brand/register-brand';
import SignUp from './sign-up/sign-up';
import Verification from './verification/verification'; 

const RegisterRouting = [
    {
        path: '/auth/register/brand-type',
        key: 'register',
        component: BrandType
    },
    {
        path: '/auth/register/brand-reg',
        key: 'register',
        component: RegisterBrand
    },
    {
        path: '/auth/register/sign-up',
        key: 'register',
        component: SignUp
    },
    {
        path: '/auth/register/verification',
        key: 'register',
        component: Verification
    },
    {
        path: '/auth/register/create-password',
        key: 'register',
        component: CreatePassword
    }
]

export default RegisterRouting;