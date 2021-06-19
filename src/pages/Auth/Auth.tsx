import React from 'react';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Header from '../../components/header';

import style from './Auth.module.scss';
import AuthRouting from './Auth.routing';

function Auth() {
  return (
    <div>
      <Header />
      <div className={style['page-container']}>
        <Switch>
          <Route exact path="/auth/">
            <Redirect to="/auth/register" />
          </Route>
          {AuthRouting.map((entry:any) => <Route {...entry} />)}
        </Switch>
      </div>

    </div>
  );
}

export default Auth;
