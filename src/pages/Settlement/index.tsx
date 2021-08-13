import React from "react";
import { NavLink, Route } from "react-router-dom";
import styles from "./Settlement.module.scss";
import SettlementRouting, { ISettlementRouting } from "./Settlement.routing";
 

const Settlement: React.FC = (props) => (
  <>
    <div className={styles.container}>
      <div className={styles["tab-group"]}>
        <NavLink
          activeClassName={styles.active}
          to="/dashboard/settlements/settlement"
        >
          Settlements
        </NavLink>
        <NavLink 
         activeClassName={styles.active}
          to="/dashboard/settlements/summary"
        >
        Summary
        </NavLink> 
      </div>
      {SettlementRouting.map((props: ISettlementRouting) => (
        <Route {...props} />
      ))}
    </div>
  </>
);

export default Settlement;
