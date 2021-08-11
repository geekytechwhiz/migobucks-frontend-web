import React from "react";
import styles from "./MigoInventory.module.scss";

const MigoInventory: React.FC = (props) => (
  <div>
  <div className={styles["We-offer"]}>
    <h2> Migo Inventory</h2>
    <p>
      Why to spend money on your specified reward program, where customer can't
      redeem the points anywhere anytime? Create your reward program based on
      your convenience and you will have access to create, edit, and remove the
      reward values, to attract more customer for more business.{" "}
    </p>
    <p>Read more...</p>
  </div>
  <div className={styles["button"]}>
    <button>Subscribed</button>
  </div>
  
  </div>
);

export default MigoInventory;
