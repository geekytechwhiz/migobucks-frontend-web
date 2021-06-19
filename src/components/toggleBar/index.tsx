import React, { useCallback } from 'react';
import styles from './ToggleBar.module.scss';

export interface IToggleBarData {
    title: string;
    key: string;
    data?: any;
}

export interface IToggleBarProps {
    items: IToggleBarData[];
    activeKey: string;
    onSelect?: (val: IToggleBarData) => void;
}

const ToggleBar: React.FC<IToggleBarProps> = (props) => {
  const { items, activeKey, onSelect } = props;

  const handleTabClick = useCallback((val: IToggleBarData) => {
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

export default ToggleBar;
