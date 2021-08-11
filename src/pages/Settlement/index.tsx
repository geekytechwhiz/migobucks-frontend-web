import React from "react";
import styles from "./Settlement.module.scss";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import SettlementRouting from "./Settlement.routing";
import { BsFillGearFill } from 'react-icons/bs';


const Settlement: React.FC = (props) => (
  <div>
    <div className={styles.navLinks}>
      <div className={styles["tab-group"]}>
        <NavLink activeClassName={styles.navLinks}
        to="/dashboard/settlements/settlements">Settelments</NavLink>
        <NavLink activeClassName={styles.navLinks}
         to="/dashboard/settlements/summary">Summary
         </NavLink>
      </div>
    </div>
    
    <div className={styles.Link}>
      <Route exact path="/dashboard/">
        <Redirect to="/dashboard/settlements/settlements" />
      </Route>
      {SettlementRouting.map((entry: any) => (
        <Route {...entry} />
      ))}
    </div>
  </div>
);

export default Settlement;
