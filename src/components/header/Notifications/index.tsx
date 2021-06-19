import React, { useEffect, useCallback, useRef } from 'react';
import { Avatar } from 'antd';
import { BellFilled } from '@ant-design/icons';
import styles from './Notification.module.scss';

interface INotificationsProps {
    onClickOutside?: () => void;
}

const Notifications: React.FC<INotificationsProps> = (props) => {
  const { onClickOutside } = props;
  const notificationContainerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      event.target instanceof Node
            && notificationContainerRef.current
            && (!notificationContainerRef.current.contains(event.target))) {
      if (onClickOutside) {
        onClickOutside();
      }
    }
  }, [onClickOutside]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, [handleClickOutside]);

  return (
    <div ref={notificationContainerRef} className={styles['notifications-container']}>
      <div className={styles.head}>
        <h3>YOUR NOTIFICATIONS</h3>
      </div>
      <div className={styles['notification-items-container']}>
        <div className={styles['notification-item']}>
          <Avatar icon={<BellFilled />} />
          <span className={styles.text}>You have 3 new Orders</span>
        </div>
        <div className={styles['notification-item']}>
          <Avatar icon={<BellFilled />} />
          <span className={styles.text}>You have 3 new Orders</span>
        </div>
        <div className={styles['notification-item']}>
          <Avatar icon={<BellFilled />} />
          <span className={styles.text}>You have 3 new Orders</span>
        </div>
        <div className={styles['notification-item']}>
          <Avatar icon={<BellFilled />} />
          <span className={styles.text}>You have 3 new Orders</span>
        </div>
        <div className={styles['notification-item']}>
          <Avatar icon={<BellFilled />} />
          <span className={styles.text}>You have 3 new Orders</span>
        </div>
        <div className={styles['notification-item']}>
          <Avatar icon={<BellFilled />} />
          <span className={styles.text}>You have 3 new Orders</span>
        </div>
        <div className={styles['notification-item']}>
          <Avatar icon={<BellFilled />} />
          <span className={styles.text}>You have 3 new Orders</span>
        </div>
        <div className={styles['notification-item']}>
          <Avatar icon={<BellFilled />} />
          <span className={styles.text}>You have 3 new Orders</span>
        </div>
        <div className={styles['notification-item']}>
          <Avatar icon={<BellFilled />} />
          <span className={styles.text}>You have 3 new Orders</span>
        </div>
        <div className={styles['notification-item']}>
          <Avatar icon={<BellFilled />} />
          <span className={styles.text}>You have 3 new Orders</span>
        </div>
        <div className={styles['notification-item']}>
          <Avatar icon={<BellFilled />} />
          <span className={styles.text}>You have 3 new Orders</span>
        </div>
        <div className={styles['notification-item']}>
          <Avatar icon={<BellFilled />} />
          <span className={styles.text}>You have 3 new Orders</span>
        </div>
        <div className={styles['notification-item']}>
          <Avatar icon={<BellFilled />} />
          <span className={styles.text}>You have 3 new Orders</span>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
