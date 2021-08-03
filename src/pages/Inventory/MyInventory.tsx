import React from "react";
import { NavLink, Route } from "react-router-dom";

import inventoryRouting, { IInventoryRouting } from "./MyInventory.routing";

import styles from "./MyInventory.module.scss";

const MyInventory: React.FC = (props) => (
  <>
    <div className={styles.container}>
      <div className={styles["tab-group"]}>
        <NavLink
          activeClassName={styles.active}
          to="/dashboard/inventory/activeproducts"
        >
          Active Products
        </NavLink>
        <NavLink
          activeClassName={styles.active}
          to="/dashboard/inventory/inactiveproducts"
        >
          Inactive Products
        </NavLink>
      </div>
      {inventoryRouting.map((props: IInventoryRouting) => (
        <Route {...props} />
      ))}
    </div>
  </>
);

export default MyInventory;
