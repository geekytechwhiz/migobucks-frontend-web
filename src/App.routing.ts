import { RouteProps } from 'react-router-dom';
import Auth from "./pages/Auth/Auth";
import DashboardLayout from "./pages/Dashboard/DashboardLayout";

export interface IAppRouting extends RouteProps {
    key: string;
    protected?: boolean;
}

const AppRouting: IAppRouting[] = [
    {
        key: "auth",
        path: "/auth",
        component: Auth,

    },
    {
        key: "dashboard",
        path: "/dashboard",
        protected: true,
        component: DashboardLayout,

    }
];


export default AppRouting;