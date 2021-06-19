import React from 'react';

import { useHistory } from 'react-router-dom';

import {
  Button,
  Container,
} from '@material-ui/core';
 
import TextBox from '../../../../components/text-box/text-box';
import style from './verification.module.scss';

interface Props {}

function Verification(props: Props) {

  const history = useHistory();
  const navigatePwd = () => {
    history.push("/auth/register/create-password");
  };

  return (
    <Container className={style["container"]}>
      <div className={style["head"]}>Verification</div>
      <div className={style["sub-head"]}>
        We have just sent an verification code to <span>+91898989898</span>
      </div>
      <div className={style["otp-container"]}>
        <TextBox id="otp1" name="otp1" label="" placeholder="" />
        <TextBox id="otp2" name="otp2" label="" placeholder="" />
        <TextBox id="otp3" name="otp3" label="" placeholder="" />
        <TextBox id="otp4" name="otp4" label="" placeholder="" />
      </div>
      <div className={style["option-container"]}>
        <div>Send me code again</div>
        <div>Change phone number</div>
      </div>
      <div className={style["btn-container"]}>
        <Button
          type="submit"
          id="verifyotp"
          variant="contained"
          color="primary"
          className={style["confirm-btn"]}
          onClick={navigatePwd}
        >
          Confirm
        </Button>
      </div>
      <div className={style["terms"]}>
        By confirming, you are agree with our Terms & Conditions
      </div>
    </Container>
  );
}

export default Verification;
