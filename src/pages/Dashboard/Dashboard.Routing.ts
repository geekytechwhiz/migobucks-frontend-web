import { RouteProps } from 'react-router-dom';
import AddProductPage from './AddProduct';
import MyInventory from './MyInventory/MyInventory';

export interface IDashboardRouting extends RouteProps {
    key: string;
}

const DashboardRouting: IDashboardRouting[] = [

  {
    key: 'add',
    path: '/dashboard/add-new',
    component: AddProductPage,
  },
  {
    key: 'myInventory',
    path: '/dashboard/my-inventory',
    component: MyInventory,
  },
];

export default DashboardRouting;
