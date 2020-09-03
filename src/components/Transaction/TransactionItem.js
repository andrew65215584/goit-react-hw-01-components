import React from 'react';
import style from './Transaction.module.css';

function TransactionItem({ transactionData }) {
  return transactionData.map(el => {
    return (
      <tr className={style.trka} key={el.id}>
        <td>{el.type}</td>
        <td>{el.amount}</td>
        <td>{el.currency}</td>
      </tr>
    );
  });
}

export default TransactionItem;
