import React from 'react';
import { Avatar } from 'antd';
import styles from './Card.module.scss';

const Card: React.FC = (props) => (
  <div className={styles['card-container']}>
    <div className={styles['cover-container']}>
      <img src="https://cdn.zeplin.io/6065670b5a9d4f05a1ff97dc/assets/a0ead5e8-11df-4aa9-a9e2-d6149e47f035.png" alt="a" />
    </div>
    <div className={styles.content}>
      <h3>Healthify</h3>
      <span className={styles.badge}>PRO</span>
    </div>
    <div className={styles['info-container']}>
      <div>
        <Avatar src="https://play-lh.googleusercontent.com/gBih6nHb6of5Orzd4WQshya75Vw-vXihocdiF0GsaIfSoTCrxUAzZq-8lxwLZTG8ysM" size="large" />
      </div>
      <div className={styles['right-container']}>
        <h4 className={styles['user-name']}>Piyush Garg</h4>
        <p className={styles['user-likes']}>233 Likes</p>
      </div>
    </div>
  </div>
);

export default Card;
