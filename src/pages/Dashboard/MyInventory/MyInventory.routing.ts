import { RouteProps } from 'react-router-dom';
import ActiveProductsPage from './ActiveProducts';

export interface IInventoryRouting extends RouteProps {
    key: string;
}

const inventoryRouting: IInventoryRouting[] = [
  {
    path: '/dashboard/my-inventory/active-products',
    component: ActiveProductsPage,
    exact: true,
    key: 'activeProductsPage',

  },
];

export default inventoryRouting;
