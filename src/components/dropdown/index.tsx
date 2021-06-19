import React, {
  useState, useEffect, useMemo, useCallback, useRef,
} from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import styles from './dropdown.module.scss';

export type optionValue = string | number;
export interface IDropdownOptionData {
    value: optionValue;
    label: string;
}

export interface IDropdownProps {
    placeholder?: string;
    value?: optionValue;
    options: IDropdownOptionData[];
    onSelect?: (value: IDropdownOptionData) => void;

    name?: string;
    style?: React.CSSProperties;
}

const Dropdown: React.FC<IDropdownProps> = (props) => {
  const {
    placeholder, options, value, onSelect, style, name,
  } = props;
  const [isActive, setActive] = useState<boolean>(false);
  const [val, setVal] = useState<optionValue>();

  const dropDownContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVal(value);
  }, [value]);

  const selectedItem = useMemo<IDropdownOptionData | undefined>(
    () => options.find((e) => e.value === val),
    [options, val],
  );
  const toggleDropdown = useCallback(() => { setActive(!isActive); }, [isActive]);

  const handleSelect = useCallback((val: IDropdownOptionData) => {
    setVal(val.value);
    if (onSelect) {
      onSelect(val);
    }
    setActive(false);
  }, [onSelect]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (isActive) {
      if (
        event.target instanceof Node
                && dropDownContainerRef.current
                && !dropDownContainerRef.current.contains(event.target)
      ) {
        setActive(false);
      }
    }
  }, [isActive]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div style={style || {}} ref={dropDownContainerRef} className={styles.container}>
      <input type="hidden" name={name || ''} value={val || ''} />
      <div onClick={toggleDropdown} className={styles.default}>
        <span>{ selectedItem ? selectedItem.label : (<span style={{ opacity: 0.6 }}>{placeholder || 'Select'}</span>) }</span>
        <span className={styles['arrow-container']}>{ isActive ? <UpOutlined /> : <DownOutlined /> }</span>
      </div>
      { isActive
                && (
                <div className={styles['options-container']}>
                  { !!options && options.map((el) => <div id={el.value.toString()} onClick={() => handleSelect(el)} className={`${styles.option} ${el.value === val && styles.active}`} key={el.value}>{el.label}</div>) }
                </div>
                )}
    </div>
  );
};

export default Dropdown;
