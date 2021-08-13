import React from "react";
import { NavLink, Route } from "react-router-dom";
import styles from "./Orders.module.scss";

import OrderRouting, { IOrderRouting } from "./Order.routing";

const Orders: React.FC = (props) => (
  <>
    <div className={styles.container}>
      <div className={styles["tab-group"]}>
        <NavLink
          activeClassName={styles.active}
          to="/dashboard/orders/requested"
        >
          Requested
        </NavLink>
        <NavLink 
         activeClassName={styles.active}
          to="/dashboard/orders/confirmed"
        >
        Confirmed
        </NavLink> 
      </div>
      {OrderRouting.map((props: IOrderRouting) => (
        <Route {...props}/>
      ))}
    </div>
  </>
);

export default Orders;
