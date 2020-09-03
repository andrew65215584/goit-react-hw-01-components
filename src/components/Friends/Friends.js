import React from 'react';
import FriendsItem from './FriendsItem';

function Friends({ friendsList }) {
  return (
    <ul className="friend-list">
      <FriendsItem friendsList={friendsList} />
    </ul>
  );
}

export default Friends;
