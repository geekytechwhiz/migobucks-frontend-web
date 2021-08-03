import React from 'react';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Header from '../../components/header';

import style from './Onboarding.module.scss';
import OnboardingRouting from './Onboarding.routing';

function Onboarding() {
  return (
    <div>
      <Header />
      <div className={style['page-container']}>
        <Switch>
          <Route exact path="/auth/">
            <Redirect to="/auth/register" />
          </Route>
          {OnboardingRouting.map((entry:any) => <Route {...entry} />)}
        </Switch>
      </div>

    </div>
  );
}

export default Onboarding;
