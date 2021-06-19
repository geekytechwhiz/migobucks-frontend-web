import React from 'react';

import {
  Redirect,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';

import style from './Register.module.scss';
import RegisterRouting from './Register.routing';

function Register() {
  const history = useHistory();

  history.listen((location, action) => {
    console.log("on route change", location, action);
  });
  return (
    <div className={style["container"]}>
      <div className={style["container-func"]}>
        <Switch>
          <Route exact path="/auth/register">
            <Redirect to="/auth/register/brand-type" />
          </Route>
          {RegisterRouting.map((entry) => {
            return <Route {...entry} />;
          })}
        </Switch>
      </div>
      <div className={style["container-img"]}></div>
    </div>
  );
}

export default Register;
