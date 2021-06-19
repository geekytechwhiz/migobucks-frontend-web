import React, { useCallback } from 'react';

import styles from './Button.module.scss';

export interface IButtonProps {
    label: string;
    variant?: 'primary' | 'primary-outlined';
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    style?: React.CSSProperties
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<IButtonProps> = (props) => {
  const {
    className, variant, label, onClick, type, style,
  } = props;

  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) {
      return onClick(event);
    }
  }, [onClick]);

  return (
    <button
      className={`${variant && styles[variant]} ${className}`}
      onClick={handleClick}
      type={type || 'button'}
      style={style}
    >
      { label }
    </button>
  );
};

export default Button;
