import React, { useState, useCallback, useMemo } from 'react';
import { Skeleton, Table, TableColumnType } from 'antd';
import { useHistory } from 'react-router-dom';
import Button from '../../../components/button';
import ToggleBar, { IToggleBarData } from '../../../components/toggleBar';

import styles from './ActiveProducts.module.scss';

interface ITableData {
    ProductName: string;
    AvailIn: string;
    mrp: string;
    SellingPrice: string;
    LoyaltyPoint: string;
    BuddyMargin: string;
    inStock: string;
    key: number,
}

const fakeColumns: TableColumnType<any>[] = [
  {
    title: 'Product Name',
    dataIndex: 'ProductName',
    key: 'ProductName',
    sorter(a, b) {
      return 1;
    },
  },
  {
    title: 'Avail. in',
    dataIndex: 'AvailIn',
    key: 'AvailIn',
  },
  {
    title: 'MRP',
    dataIndex: 'mrp',
    key: 'mrp',
  },
  {
    title: 'Selling Price',
    dataIndex: 'SellingPrice',
    key: 'SellingPrice',
  },
  {
    title: 'Loyalty Point [%]',
    dataIndex: 'LoyaltyPoint',
    key: 'LoyaltyPoint',
  },
  {
    title: 'BuddyMargin',
    dataIndex: 'BuddyMargin',
    key: 'BuddyMargin',
  },
  {
    title: 'In Stock',
    dataIndex: 'inStock',
    key: 'inStock',
  },

];

const fakeData: ITableData[] = [
  {
    key: 2,
    ProductName: 'Whole Wheat Atta',
    AvailIn: '5Kg',
    mrp: '250',
    SellingPrice: '220',
    LoyaltyPoint: '20',
    BuddyMargin: '25',
    inStock: '200',
  },
  {
    key: 1,
    ProductName: 'ABC Wheat Atta',
    AvailIn: '54Kg',
    mrp: '250',
    SellingPrice: '400',
    LoyaltyPoint: '20',
    BuddyMargin: '14',
    inStock: '670',
  },
];

const ActiveProductsPage: React.FC = (props) => {
  const history = useHistory();
  const [activeTogglebarKey, setActiveToggleKey] = useState<string>('1');
  const [selectedRowKeys, setSelectedRows] = useState<number[]>([]);

  const toggleBarData = useMemo<IToggleBarData[]>(() => [
    { key: '1', title: 'Exclusive' },
    { key: '2', title: 'Combo' },
    { key: '3', title: 'Voucher' },
  ], []);

  const handleToggleSelect = useCallback((val: IToggleBarData) => {
    setActiveToggleKey(val.key);
  }, []);

  const handleAddItemBtnClick = useCallback(() => {
    history.push('/dashboard/inventory/addproduct');
  }, [history]);

  const handleRowSelect = useCallback((selectedRowKey) => {
    if (selectedRowKeys.includes(selectedRowKey.key)) {
      return setSelectedRows(selectedRowKeys.filter((e) => e !== selectedRowKey.key));
    }
    setSelectedRows([...selectedRowKeys, selectedRowKey.key]);
  }, [selectedRowKeys]);

  return (
    <div className={styles.content}>
      <div className={styles['tools-container']}>
        <div className={styles['togglebar-container']}>
          <ToggleBar onSelect={handleToggleSelect} activeKey={activeTogglebarKey} items={toggleBarData} />
        </div>
        <Button onClick={handleAddItemBtnClick} className={styles['add-item-btn']} variant="primary" label="Add New +" />
      </div>
      <div style={{ marginTop: '30px' }}>
        <Table rowSelection={{ selectedRowKeys, onSelect: handleRowSelect }} columns={fakeColumns} dataSource={fakeData} />
      </div>
    </div>
  );
};

export default ActiveProductsPage;
