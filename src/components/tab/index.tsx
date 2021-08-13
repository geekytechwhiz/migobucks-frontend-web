import React, { useCallback } from 'react';
import styles from './Tab.module.scss';

export interface ITabData {
    title: string;
    key: string;
    data?: any;
}

export interface ITabProps {
    items: ITabData[];
    activeKey: string;
    onSelect?: (val: ITabData) => void;
}

const Tab: React.FC<ITabProps> = (props) => {
  const { items, activeKey, onSelect } = props;

  const handleTabClick = useCallback((val: ITabData) => {
    if (onSelect) {
      onSelect(val);
    }
  }, [onSelect]);

  return (
    <div className={styles.container}>
      {
                !!items && items.map((el) => (
                  <span
                    key={el.key}
                    className={`${styles.item} ${activeKey === el.key && styles.active}`}
                    onClick={() => handleTabClick(el)}
                  >
                    {el.title}
                  </span>
                ))
            }
    </div>
  );
};

export default Tab;
