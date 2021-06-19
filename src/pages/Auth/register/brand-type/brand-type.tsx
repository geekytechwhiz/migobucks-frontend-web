import React from 'react';

import { useHistory } from 'react-router-dom';

import {
  Button,
  Container,
} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import { brandTypesArray } from './brand-type-const';
import style from './brand-type.module.scss';

let brandTypes = brandTypesArray;
const Brands = (props: any) => {
  const changeOption = () => {
    if (!props.isChecked) {
      brandTypes = brandTypes.map((x: any) => {
        if (x.head == props.head) {
          x.isChecked = true;
        } else {
          x.isChecked = false;
        }
        return x;
      })
    }
    console.log('brandTypes', brandTypes)
  };
  return (
    <div className={style["card"]}>
      <div className={style["card-content"]}>
        <h3>{props.head}</h3>
        <p>{props.subInfo}</p>
      </div>
      <div className={style[props.isChecked ? "icon-active" : ""]}>
        <CheckCircleIcon onClick={changeOption} />
      </div>
    </div>
  );
};

export default function BrandType() {
  const history = useHistory();
  const navigate = () => {
    history.push("/auth/register/brand-reg");
  };

  return (
    <Container>
      <div className={style['head-container']}>
      <div className={style["head"]}>What type of brand you are ?</div>
      <span className={style["sub-head"]}>
        The best brand boosting strategies are one the way
      </span>
      </div>
      <div className={style["brand-option"]}>
        {brandTypes.map((data, index) => (
          <Brands {...data} key={index}/>
        ))}
        <div className={style['nav-option']}><Button color="primary" variant="contained" onClick={navigate}>Continue</Button></div>
      </div>
    </Container>
  );
}
