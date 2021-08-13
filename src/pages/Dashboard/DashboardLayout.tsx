import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../../components/header";
import Sidebar, { IBrandInfo } from "../../components/dashboard/sidebar";
import styles from "./Dashboard.module.scss";
import DashboardRouting, { IDashboardRouting } from "./Dashboard.Routing";
import Card from "../../components/dashboard/card";

const brandInfo: IBrandInfo = {
  name: "Ashirvad",
  category: "Food Product",
};

const DashboardLayout: React.FC = () => (
  <>
    <Header />
    <div className={styles["divider"]}></div>
    <div className={styles["page-container"]}>
      <div className={styles["sidebar-container"]}>
        <Sidebar brandInfo={brandInfo} />
      </div>
      <div className={styles["main-content-container"]}>
        <Switch>
          {DashboardRouting.map((props: IDashboardRouting) => (
            <Route {...props} />
          ))}
        </Switch>
      </div>
      <div className={styles["sidebar-card"]}>
        <div className={styles["card-holder"]}>
          <Card></Card>
        </div>
        <div className={styles["card-holder"]}>
          <Card></Card>
        </div> 
      </div>
    </div>
  </>
);

export default DashboardLayout;
