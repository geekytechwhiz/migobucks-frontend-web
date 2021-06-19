import React from 'react';

import style from './Textarea.module.scss';

function Textarea(props: any) {
  return (
    <textarea className={style['text-area']} />
  );
}

export default Textarea;
