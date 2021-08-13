import { RouteProps } from 'react-router-dom'; 
import ConfirmedOrders from './Confirmed/Confirmed';
import RequestedOrders from './Requested/Requested';

export interface IOrderRouting extends RouteProps {
    key: string;
}

const OrderRouting: IOrderRouting[] = [
  {
    path: '/dashboard/orders/requested',
    component:RequestedOrders ,
    exact: true,
    key: 'requested'
  },
  {
    path: '/dashboard/orders/confirmed',
    component:ConfirmedOrders ,
    exact: true,
    key: 'confirmed',

  } 
];

export default OrderRouting;
