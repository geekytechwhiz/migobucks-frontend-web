import React from 'react';

import { useHistory } from 'react-router-dom';

import {
  Box,
  Button,
  Container,
} from '@material-ui/core';
 
import style from './register-brand.module.scss';  
import TextBox from '../../../../components/text-box/text-box'; 
import Dropdown from '../../../../components/dropdown'

interface Props { }

function RegisterBrand(props: Props) {
    const history = useHistory();
    const navigateNext = () => {
      history.push("/auth/register/sign-up");
    };
    const navigatePrev = () => {
        history.push("/auth/register/brand-type");
      };
    return (
        <Container className={style['container']}>
            <div className={style['head']}>Tell us more about your brand</div>
            <div className={style['sub-head']}>Let's show you, best services available for you</div>
            <div className={style['form-container']}>
                <TextBox id="brandName" name="brandName" label="Do you have a Registered brand Name?" placeholder="Eg. Healthify" />
                <Dropdown style={{ marginTop: '10px' }} placeholder="What's your brand category?" options={[{ value: 1, label: 'app' }]} />
                <Dropdown style={{ marginTop: '10px' }} placeholder="Choose Sub category?" options={[{ value: 1, label: 'E-commerce' }]} />
                <Box className={style['nav-option']}> <Button disableElevation onClick={navigatePrev}>Prev</Button><Button color="primary" variant="contained" onClick={navigateNext}>Next</Button></Box>
            </div>
        </Container>
    );
}

export default RegisterBrand;
