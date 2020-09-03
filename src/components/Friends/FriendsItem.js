import React from 'react';
import style from './Friends.module.css';

function FriendsItem({ friendsList }) {
  return friendsList.map(el => {
    return (
      <li className={style.item} key={el.name}>
        <span
          className={el.isOnline ? style.statusOnline : style.statusOffline}
        ></span>

        <img
          className={style.avatar}
          src={el.avatar}
          alt={el.name}
          width="48"
        />

        <p className="name">{el.name}</p>
      </li>
    );
  });
}

export default FriendsItem;
