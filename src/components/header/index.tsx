import React, { useState, useEffect, useCallback } from 'react';

import styles from './Header.module.scss';

import AuthenticatedHeader from './Authenticated';
import DefaultHeader from './Default';
import Notifications from './Notifications';

import logo from '../../assets/BrandsLogo.svg';

const Header: React.FC = (props) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(true);
  const [notificationWindowOpen, setNotificationWindowOpen] = useState<boolean>(false);

  useEffect(() => {
    // TODO: Implement function to check user auth and setAuthenticated -> true
  }, []);

  const toggleNotificationWindow = useCallback(() => setNotificationWindowOpen(!notificationWindowOpen), [notificationWindowOpen]);
  const handleNotificationOnClickOutside = useCallback(() => setNotificationWindowOpen(false), []);

  return (
    <div className={styles['header-container']}>
      <div className={styles.logo}>
        <img src={logo} alt="migobucks-logo" />
      </div>
      {
                isAuthenticated
                  ? (
                    <AuthenticatedHeader
                      onNotificationClick={toggleNotificationWindow}
                      searchPlaceholder="Search"
                    />
                  )
                  : <DefaultHeader />
            }
      <div>
        {
                    notificationWindowOpen
                    && (
                    <Notifications
                      onClickOutside={handleNotificationOnClickOutside}
                    />
                    )
                }
      </div>
    </div>
  );
};

export default Header;
