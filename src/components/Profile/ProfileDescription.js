import React from 'react';
import styles from './Profile.module.css';

function ProfileDescription({ users }) {
  return (
    <div className={styles.description}>
      <img src={users.avatar} alt="user avatar" className={styles.avatar} />
      <p className={styles.name}>{users.name}</p>
      <p className={styles.tag}>{users.tag}</p>
      <p className={styles.location}>{users.location}</p>
    </div>
  );
}

export default ProfileDescription;
