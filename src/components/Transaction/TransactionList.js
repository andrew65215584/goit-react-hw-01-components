import React from 'react';
import TransactionItem from './TransactionItem';
import style from './Transaction.module.css';

function TransactionList({ transactionData }) {
  return (
    <table className={style.transactionHistory}>
      <thead className={style.header}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <TransactionItem transactionData={transactionData} />
      </tbody>
    </table>
  );
}

export default TransactionList;
