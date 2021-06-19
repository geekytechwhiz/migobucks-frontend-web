import React, { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Input, Avatar, Button, Badge,
} from 'antd';
import { BellOutlined, DownOutlined, UserOutlined } from '@ant-design/icons';
import styles from './Authenticated.module.scss';

export interface IAuthenticatedHeaderProps {
    searchPlaceholder?: string;
    onSearchChange?: (val: string) => void;
    onNotificationClick?: () => void;
    onSearch?: (val: string) => void;
}

const AuthenticatedHeader: React.FC<IAuthenticatedHeaderProps> = (props) => {
  const {
    searchPlaceholder, onSearch, onSearchChange, onNotificationClick,
  } = props;
  const [seachVal, setSearchVal] = useState<string>('');

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
    if (onSearchChange) {
      return onSearchChange(e.target.value);
    }
  }, [onSearchChange]);

  const handleSearchKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && seachVal.trim().length > 0) {
      if (onSearch) {
        return onSearch(seachVal);
      }
    }
  }, [onSearch, seachVal]);

  const handleNotificationClick = useCallback(() => {
    if (onNotificationClick) {
      onNotificationClick();
    }
  }, [onNotificationClick]);

  return (
    <div className={styles.container}>
      <Input
        value={seachVal}
        placeholder={searchPlaceholder}
        className={styles['search-input']}
        onChange={handleSearchChange}
        onKeyPress={handleSearchKeyPress}
      />
      <div className={styles['navbar-items']}>
        <NavLink activeClassName={styles['active-nav-link']} to="/dashboard">Home</NavLink>
        <NavLink activeClassName={styles['active-nav-link']} to="/about-us">About us</NavLink>
        <NavLink activeClassName={styles['active-nav-link']} to="/help">Help</NavLink>
      </div>
      <div className={styles['account-container']}>
        <Avatar
          style={{ background: '#ffbf00' }}
          icon={<UserOutlined />}
        />
        <DownOutlined className={styles['account-dropdown-arrow']} />
        <Badge showZero className={styles['notification-badge']} count={2}>
          <Button onClick={handleNotificationClick} shape="round" className={styles['notification-icon']} icon={<BellOutlined />} />
        </Badge>
      </div>
    </div>
  );
};

export default AuthenticatedHeader;
