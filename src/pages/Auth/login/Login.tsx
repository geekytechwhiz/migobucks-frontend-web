import React from 'react';

import { useHistory } from 'react-router-dom';
import Button from '../../../components/button';
import style from './Login.module.scss';

const Login = () => {
  const history = useHistory();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // history.push('/dashboard')
  };
  const navigate = () => {
    history.push('/auth/register');
  };
  return (
    <div className={style.container}>
      <div className={style.card}>
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" />
          <input type="password" />
          <Button variant="primary" type="submit" label="Submit" />
          <Button variant="primary" type="button" onClick={navigate} label="Reister" />
        </form>
      </div>
    </div>
  );
};

export default Login;
