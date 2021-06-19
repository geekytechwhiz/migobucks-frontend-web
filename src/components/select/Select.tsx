import React from 'react';

import style from './Select.module.scss';

function Select(props: any) {
  return (
    <label className={style[props.containerStyle]}>
      <label className={style['select-label']}>{props.label}</label>
      <select
        className={style[props.className]}
        onClick={props.onClick}
        placeholder={props.label}
      >
        <option>Select Option</option>
      </select>
    </label>
  );
}

export default Select;
