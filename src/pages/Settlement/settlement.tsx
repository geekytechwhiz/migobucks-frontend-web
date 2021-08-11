import React from "react";
import { AiFillSetting } from "react-icons/ai";
import styles from "./Settlement.module.scss";

const fakeData: any[] = [
  {
    key: 2,
    Settlement: "SB236739078",
    TransactionID: "5234568989",
    Amount: "250",
    Date: "22/08/2021",
    paymentMode: "Bank Transfer",
    status: "Processing",
  },
  {
    key: 2,
    Settlement: "SB236739078",
    TransactionID: "5234568989",
    Amount: "250",
    Date: "22/08/2021",
    paymentMode: "Bank Transfer",
    status: "Processing",
  },
  {
    key: 2,
    Settlement: "SB236739078",
    TransactionID: "5234568989",
    Amount: "25",
    Date: "22/08/2021",
    paymentMode: "Bank Transfer",
    status: "Processing",
  },
  {
    key: 2,
    Settlement: "SB236739078",
    TransactionID: "5234568989",
    Amount: "250",
    Date: "22/08/2021",
    paymentMode: "Bank Transfer",
    status: "Successful",
  },
];

const Settlement: React.FC = (props) => (
  <div>
    <div>
      <div className={styles.Right}>
        <label>Settlements</label>
      </div>
      <div className={styles.head}>
        <label form="sort">Sort by</label>
        <select id="Sort" name="sort">
          <option value="Date">Date</option>
          <option value="Last one month">last One Month</option>
        </select> 
        <AiFillSetting></AiFillSetting>
      </div>
    </div>
    <div className={styles.row}>
      <div>Settlement ID</div>
      <div>Transaction ID</div>
      <div>Amount [INR]</div>
      <div>Date</div>
      <div>payment Mode</div>
      <div>Status</div>
    </div>
    {fakeData.map((x) => {
      return (
        <div className={styles.last}>
          <div>{x.Settlement}</div>
          <div>{x.TransactionID}</div>
          <div>{x.Amount}</div>
          <div>{x.Date}</div>
          <div>{x.paymentMode}</div>
          <div>{x.status}</div>
        </div>
      );
    })}
  </div>
);

export default Settlement;
