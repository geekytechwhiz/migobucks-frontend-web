import React from 'react';
import style from './text-box.module.scss';

interface Props {
    type: string,
    id: string,
    name: string,
    label: string,
    placeholder: string,
}

function TextBox(props: Props) {
  return (
    <div className={style['form-container']}>
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} name={props.name} type={props.type} placeholder={props.placeholder} />
    </div>
  );
}

TextBox.defaultProps = {
  type: 'text',
  label: '',
};
export default TextBox;
