import React from 'react';

import style from './Input.module.scss';

function Input(props: any) {
  return (
    <label className={style[props.containerStyle]}>
      <label className={style['input-label']}>{props.label}</label>
      <input
        id={props.id}
        className={style[props.className]}
        onClick={props.onClick}
        type={props.type}
        placeholder={props.placeholder}
      />
    </label>
  );
}
Input.defaultProps = {
  type: 'text',
};

export default Input;
