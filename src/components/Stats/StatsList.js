import React from 'react';
import StatsItem from './StatsItem';
import style from './Stats.module.css';

function Stats({ data }) {
  return (
    <section className={style.statistics}>
      <h2 className="title">Upload stats</h2>

      <ul className={style.statList}>
        <StatsItem data={data} />
      </ul>
    </section>
  );
}

export default Stats;
