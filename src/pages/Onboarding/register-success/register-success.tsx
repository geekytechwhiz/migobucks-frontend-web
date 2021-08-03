import React from 'react';

import { Button, Container } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Redirect, Route, useHistory } from 'react-router-dom';
import style from './register-success.module.scss';

interface Props { }

function RegisterSuccess(props: Props) {
  const history = useHistory();
  const navigateNext = () => {
    history.push('/dashboard');
  };

  return (
    <Container className={style.container}>
      <div className={style['sub-container']}>
        <div className={style['icon-active']}>
          <CheckCircleIcon />
        </div>
        <div className={style['succ-head']}>Successfully Registered</div>
        <div className={style['succ-body']}>
          Start improving your
          {' '}
          <b>Customer Engagement Strategies</b>
        </div>
        <div>
          <Button color="primary" variant="contained" onClick={navigateNext}>Get Started</Button>
        </div>
      </div>
    </Container>
  );
}

export default RegisterSuccess;
