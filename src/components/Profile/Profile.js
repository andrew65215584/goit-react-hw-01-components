import React from 'react';
import ProfileDescription from './ProfileDescription';
import ProfileStats from './ProfileStats';
import styles from './Profile.module.css';

function Profile({ users }) {
  return (
    <>
      <div className={styles.profile}>
        <ProfileDescription users={users} />
        <ul className={styles.stats}>
          <ProfileStats stats={users.stats} />
        </ul>
      </div>
    </>
  );
}

export default Profile;
