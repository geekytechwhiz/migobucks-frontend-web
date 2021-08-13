import { RouteProps } from "react-router-dom";
import AddProductPage from "../Inventory/AddProduct";
import MyInventory from "../Inventory/MyInventory";  
import Orders from "../Orders";
import Settlement from "../Settlement";

export interface IDashboardRouting extends RouteProps {
  key: string;
}

const DashboardRouting: IDashboardRouting[] = [
  {
    key: "myInventory",
    path: "/dashboard/inventory",
    component: MyInventory,
  },
  {
    key: "orders",
    path: "/dashboard/orders",
    component: Orders,
  },
  {
    key: "settlements",
    path: "/dashboard/settlements",
    component: Settlement,
  }
];

export default DashboardRouting;
