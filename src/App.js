import React from 'react';

import Profile from './components/Profile/Profile';
import users from './components/Profile/user.json';

import StatsList from './components/Stats/StatsList';
import data from './components/Stats/statistical-data.json';

import Friends from './components/Friends/Friends';
import friendsList from './components/Friends/friends.json';

import TransactionList from './components/Transaction/TransactionList';
import transactionData from './components/Transaction/transactions.json';

function App() {
  return (
    <>
      <TransactionList transactionData={transactionData} />
      <Profile users={users} />
      <StatsList data={data} />
      <Friends friendsList={friendsList} />
    </>
  );
}

export default App;
