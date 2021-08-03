import { RouteProps } from 'react-router-dom';
import ActiveProductsPage from './ActiveProducts';
import AddProductPage from './AddProduct';

export interface IInventoryRouting extends RouteProps {
    key: string;
}

const inventoryRouting: IInventoryRouting[] = [
  {
    path: '/dashboard/inventory/activeproducts',
    component: ActiveProductsPage,
    exact: true,
    key: 'activeProductsPage',

  },
  {
    path: '/dashboard/inventory/inactiveproducts',
    component: ActiveProductsPage,
    exact: true,
    key: 'activeProductsPage',

  },
  {
    key: 'add',
    path: '/dashboard/inventory/addproduct',
    component: AddProductPage,
  }
];

export default inventoryRouting;
