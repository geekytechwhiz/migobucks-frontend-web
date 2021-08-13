import { RouteProps } from 'react-router-dom';   

export interface ISettlementRouting extends RouteProps {
    key: string;
}

const SettlementRouting: ISettlementRouting[] = [
  {
    path: '/dashboard/settlements/settlement',
    // component:Settlement ,
    exact: true,
    key: 'requested'
  },
  {
    path: '/dashboard/settlements/summary',
    // component:Summary ,
    exact: true,
    key: 'confirmed',

  } 
];

export default SettlementRouting;
