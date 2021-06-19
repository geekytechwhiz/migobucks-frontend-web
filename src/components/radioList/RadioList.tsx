import React from 'react';

import style from './RadioList.module.scss';

function RadioList(props: any) {
  const list = [];
  for (const option of props.radioOptions) {
    list.push(<label className={style['radio-item']}>
      <input type="radio" id={option.id} value={option.value} checked={option.isSelected} />
      <label htmlFor={option.id}>{option.label}</label>
              </label>);
  }
  return (
    <div className={style['radio-list']}>
      {list}
    </div>
  );
}

export default RadioList;
