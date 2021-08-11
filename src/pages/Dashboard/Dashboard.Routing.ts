import { RouteProps } from "react-router-dom";
import AddProductPage from "../Inventory/AddProduct";
import MyInventory from "../Inventory/MyInventory";
import MigoInventory from "../MigoInventory";
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
  },
  {
    key: "migoinventory",
    path: "/dashboard/migoinventory",
    component: MigoInventory,
  },
];

export default DashboardRouting;
