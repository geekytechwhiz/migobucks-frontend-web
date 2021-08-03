import { RouteProps } from "react-router-dom";
import AddProductPage from "../Inventory/AddProduct";
import MyInventory from "../Inventory/MyInventory";

export interface IDashboardRouting extends RouteProps {
  key: string;
}

const DashboardRouting: IDashboardRouting[] = [
  {
    key: "myInventory",
    path: "/dashboard/inventory",
    component: MyInventory,
  },
];

export default DashboardRouting;
