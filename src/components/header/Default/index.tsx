import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../button';
import styles from './Default.module.scss';

const DefaultHeader: React.FC = (props) => (
  <div className={styles.container}>
    <div className={styles['navbar-items']}>
      <NavLink to="">About us</NavLink>
      <NavLink to="">Blog</NavLink>
      <NavLink to="">How it works</NavLink>
      <NavLink to="">FAQ</NavLink>
      <NavLink to="">Support</NavLink>
      <span className={styles['nav-button-container']}>
        <Button label="Register" variant="primary" />
        <Button style={{ marginLeft: '10px' }} label="Login" variant="primary-outlined" />
      </span>
    </div>
  </div>
);

export default DefaultHeader;
