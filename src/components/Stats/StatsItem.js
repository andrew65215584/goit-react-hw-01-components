import React from 'react';
import style from './Stats.module.css';
import colorRandom from './colorRandom';

function StatsItem({ data }) {
  return data.map(el => {
    return (
      <li
        key={el.id}
        className={style.item}
        style={{ backgroundColor: colorRandom() }}
      >
        <span className={style.label}>{el.label}</span>
        <span className={style.percentage}>{el.percentage}%</span>
      </li>
    );
  });
}

export default StatsItem;
