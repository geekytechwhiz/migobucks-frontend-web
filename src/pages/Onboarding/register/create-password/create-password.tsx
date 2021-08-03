import React from 'react';

import { useHistory } from 'react-router-dom';

import {
  Button,
  Container,
} from '@material-ui/core';

import style from './create-password.module.scss';
import TextBox from '../../../../components/text-box/text-box';

interface Props {}

function CreatePassword(props: Props) {

  const history = useHistory();
  const navigateSuccess = () => {
    history.push("/auth/register-success");
  };

  return (
    <Container className={style["container"]}>
      <div className={style["content"]}>
        <h1>Create a Password</h1>
        <div className={style["content-item"]}>
        <TextBox
          id="c-password"
          name="c-password"
          label=""
          placeholder="Enter Password"
        />
        <TextBox
          id="confirm-password"
          name="confirm-password"
          label=""
          placeholder="Confirm Password"
        />
        </div>
        
        <Button
          fullWidth
          type="submit"
          id="create"
          variant="contained"
          color="primary"
          className={style["create-btn"]}
          onClick={navigateSuccess}
        >
          Create Account
        </Button>
        <div className={style["terms"]}>
        By creating, you are agree with our Terms & Conditions
      </div>
      </div>
    </Container>
  );
}

export default CreatePassword;
