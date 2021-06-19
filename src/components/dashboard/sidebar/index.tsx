import React from 'react';
import { Avatar } from 'antd';
import MenuGroup, { IMenuLinks } from './MenuGroup';
import styles from './Sidebar.module.scss';

const MenuItems: IMenuLinks[] = [
  {
    path: '/dashboard/home',
    label: 'Dashboard',
  },
  {
    path: '/dashboard/account',
    label: 'Account',
  },
  {
    path: '/dashboard/my-inventory',
    label: 'My Inventory',
  },
  {
    path: '/dashboard/orders',
    label: 'Orders',
  },
  {
    path: '/dashboard/settlements',
    label: 'Settlements',
  },
];

const serviceItems: IMenuLinks[] = [
  {
    path: '/dashboard/migo-inventory',
    label: 'Migo Inventory',
  },
  {
    path: '/dashboard/buddy-booster',
    label: 'Buddy Booster',
  },
  {
    path: '/dashboard/loyality-management',
    label: 'Loyality Management',
  },
  {
    path: '/dashboard/voucher-management',
    label: 'Voucher Management',
  },
];

export interface IBrandInfo {
    name: string;
    category: string;
}

export interface ISidebarProps {
    brandInfo: IBrandInfo;
}

const Sidebar: React.FC<ISidebarProps> = (props) => {
  const { brandInfo } = props;
  return (
    <div className={styles.sidebar}>
      <div className={styles['brand-container']}>
        <div className={styles.avatar}>
          <Avatar
            icon={brandInfo.name[0]}
            size="large"
            style={{ background: '#fff', color: '#1b75bb', fontWeight: 'bold' }}
          />
        </div>
        <div className={styles['brand-info']}>
          <span className={styles['text-heading']}>{ brandInfo.name }</span>
          <span className={styles['text-caption']}>{ brandInfo.category }</span>
        </div>
      </div>
      {/* Main */}
      <MenuGroup title="MENU" items={MenuItems} />
      <div style={{ marginTop: '25px' }} />

      {/* Services */}
      <MenuGroup title="MIGO SERVICES" items={serviceItems} />

      {/* Teams */}

    </div>
  );
};

export default Sidebar;
