import React from "react";
import { useDynamic, IData } from "../../../hooks/dynamic";
import styles from "./Product.module.scss";
import "./dynamic.css";
import { orderObjectBy } from "../../../lib/order";
import { Dropdown, Table, TableColumnType } from "antd";

interface ITableData {
  ProductName: string;
  AvailIn: string;
  mrp: string;
  SellingPrice: string;
  LoyaltyPoint: string;
  BuddyMargin: string;
  inStock: string;
  key: number;
}

const fakeData: ITableData[] = [
  {
    key: 2,
    ProductName: "Whole Wheat Atta",
    AvailIn: "5Kg",
    mrp: "250",
    SellingPrice: "220",
    LoyaltyPoint: "20",
    BuddyMargin: "25",
    inStock: "200",
  },
  {
    key: 1,
    ProductName: "ABC Wheat Atta",
    AvailIn: "54Kg",
    mrp: "250",
    SellingPrice: "400",
    LoyaltyPoint: "20",
    BuddyMargin: "14",
    inStock: "670",
  },
];
const itemDetails: TableColumnType<any>[] = [
  {
    title: "Product Name",
    dataIndex: "ProductName",
    key: "ProductName",
    sorter(a, b) {
      return 1;
    },
  },
  {
    title: "Avail. in",
    dataIndex: "AvailIn",
    key: "AvailIn",
    sorter(a, b) {
      return 1;
    },
  },
  {
    title: "MRP",
    dataIndex: "mrp",
    key: "mrp",
    sorter(a, b) {
      return 1;
    },
  },
  {
    title: "Selling Price",
    dataIndex: "SellingPrice",
    key: "SellingPrice",
    sorter(a, b) {
      return 1;
    },
  },
  {
    title: "Loyalty Point [%]",
    dataIndex: "LoyaltyPoint",
    key: "LoyaltyPoint",
  },
  {
    title: "BuddyMargin",
    dataIndex: "BuddyMargin",
    key: "BuddyMargin",
  },
  {
    title: "In Stock",
    dataIndex: "inStock",
    key: "inStock",
  },
];

const fakeColumns: TableColumnType<any>[] = [
  {
    title: "Product Name",
    dataIndex: "ProductName",
    key: "ProductName",
    sorter(a, b) {
      return 1;
    },
  },
  {
    title: "Avail. in",
    dataIndex: "AvailIn",
    key: "AvailIn",
    sorter(a, b) {
      return 1;
    },
  },
  {
    title: "MRP",
    dataIndex: "mrp",
    key: "mrp",
    sorter(a, b) {
      return 1;
    },
  },
  {
    title: "Selling Price",
    dataIndex: "SellingPrice",
    key: "SellingPrice",
    sorter(a, b) {
      return 1;
    },
  },
  {
    title: "Loyalty Point [%]",
    dataIndex: "LoyaltyPoint",
    key: "LoyaltyPoint",
  },
  {
    title: "BuddyMargin",
    dataIndex: "BuddyMargin",
    key: "BuddyMargin",
  },
  {
    title: "In Stock",
    dataIndex: "inStock",
    key: "inStock",
  },
];

export const data: IData[] = [
  {
    displayName: "Brand",
    dataType: "text",
    fieldName: "brandName",
    filedPosition: 90,
  },
  {
    displayName: "Company Type",
    dataType: "list",
    fieldName: "companyType",
    filedPosition: 2,
    data: [
      {
        value: "1",
        name: "Public",
      },
      {
        value: "3",
        name: "Private",
      },
      {
        value: "5",
        name: "None",
      },
    ],
  },
  {
    displayName: "Shelf Life",
    dataType: "list",
    fieldName: "shelfLife",
    filedPosition: 2,
    data: [
      {
        value: "1",
        name: "1 KG",
      },
      {
        value: "2",
        name: "2 KG",
      },
      {
        value: "3",
        name: "3 KG",
      },
      {
        value: "4",
        name: "4 KG",
      },
      {
        value: "5",
        name: "5 KG",
      },
      {
        value: "6",
        name: "6 KG",
      },
    ],
  },
  {
    displayName: "Max.Retail Price(INR)",
    dataType: "number",
    fieldName: "mrp",
    filedPosition: 3,
  },
  {
    displayName: "Loyalty Point%",
    dataType: "number",
    fieldName: "loyaltyPoint",
    filedPosition: 10,
  },
  {
    displayName: "InStock",
    dataType: "number",
    fieldName: "inStock",
    filedPosition: 1,
  },
  {
    displayName: "Loyalty Point%",
    dataType: "number",
    fieldName: "loyaltyPoint",
    filedPosition: 10,
  },
  {
    displayName: "Loyalty Point%",
    dataType: "number",
    fieldName: "loyaltyPoint",
    filedPosition: 10,
  },
  {
    displayName: "Loyalty Point%",
    dataType: "number",
    fieldName: "loyaltyPoint",
    filedPosition: 10,
  },
  {
    displayName: "Loyalty Point%",
    dataType: "number",
    fieldName: "loyaltyPoint",
    filedPosition: 10,
  },
  {
    displayName: "Loyalty Point%",
    dataType: "number",
    fieldName: "loyaltyPoint",
    filedPosition: 10,
  },
];

const sortedData = orderObjectBy({
  data,
  key: ["filedPosition"],
  direction: "asc",
}) as IData[];

function AddProductPage() {
  const headercomponents = useDynamic({ data: sortedData });
  const itemDetailscomponents = useDynamic({ data: sortedData });
  const components = useDynamic({ data: sortedData });
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Add New Product</h1>
      </div>
      <div className={styles.contentContainer}>
        <form className="add-product-form">
          <div>
            <label>{"Product Name"}</label>
            <input type="text" name="productName" />
          </div>
          <div>
            <label>{"Product Name"}</label>
            <input type="text" name="productName" />
          </div>
          <div>
            <label>{"Product Name"}</label>
            <input type="text" name="productName" />
          </div>
          <div>
            <label>{"Product Name"}</label>
            <input type="text" name="productName" />
          </div>
        </form>
      </div>
      <div className={styles.contentContainer}>
        <form className="add-product-form">{components}</form>
      </div>
      <div className={styles.contentContainer}>
        <form className="add-product-form">{components}</form>
      </div>
      <div>
        <div style={{ marginTop: "30px" }}>
          <Table columns={fakeColumns} dataSource={fakeData} />
        </div>
      </div>
    </div>
  );
}

export default AddProductPage;
