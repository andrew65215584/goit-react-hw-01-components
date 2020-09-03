import React from 'react';
import styles from './Profile.module.css';

function ProfileStats({ stats }) {
  const entries = Object.entries(stats);

  return entries.map(el => {
    return (
      <li className={styles.statsItem} key={el[0]}>
        <span className={styles.label}>{el[0]}</span>
        <span className={styles.quantity}>{el[1]}</span>
      </li>
    );
  });
}

export default ProfileStats;
