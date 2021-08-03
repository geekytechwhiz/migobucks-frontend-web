import { RouteProps } from 'react-router-dom'; 
import DashboardLayout from "./pages/Dashboard/DashboardLayout";
import Onboarding from './pages/Onboarding/Onboarding';

export interface IAppRouting extends RouteProps {
    key: string;
    protected?: boolean;
}

const AppRouting: IAppRouting[] = [
    {
        key: "auth",
        path: "/auth",
        component: Onboarding,

    },
    {
        key: "dashboard",
        path: "/dashboard",
        protected: true,
        component: DashboardLayout, 
    }
];


export default AppRouting;