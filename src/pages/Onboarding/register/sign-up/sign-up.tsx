import React from 'react';

import { useHistory } from 'react-router-dom';

import {
  Button,
  Link,
  Typography,
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import {
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs'; 
import TextBox from '../../../../components/text-box/text-box';
import style from './sign-up.module.scss'; 
import Dropdown from '../../../../components/dropdown';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `signup-tab-${index}`,
    "aria-controls": `signup-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    alignItems: "center",
  },
  container: {
    maxWidth: "400px",
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const history = useHistory();
  const navigateOtp = () => {
    history.push("/auth/register/verification");
  };

  return (
    <div className={style["container"]}>
      <div className={style["content"]}>
        <h1>Signup</h1>
        <Tabs value={value} onChange={handleChange} aria-label="signup tabs">
          <Tab label="Brand Detail" {...a11yProps(0)} />
          <Tab label="User Information" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <TextBox
            id="business-name"
            name="businessName"
            label="Registered Business Name"
            placeholder="Eg. ABC Technologies Private Limited"
          />
          <Dropdown
            placeholder="Registration Type"
            options={[{ value: 1, label: "Private Limited" }]}
            style={{ marginTop: '10px' }}
          />
          <TextBox
            id="kyc"
            name="kyc"
            label="KYC (optional)"
            placeholder="Enter Company PAN"
          />
          <Box display="flex" p={1} justifyContent="flex-end">
            <Link component="button" variant="body2">
              or Upload Document
            </Link>
          </Box>
          <Button
            fullWidth
            type="submit"
            id="continue"
            variant="contained"
            color="primary"
            className={style["continue-btn"]}
          >
            continue
          </Button>
          <Box display="flex" p={2} justifyContent="center">
            <p className={style["account-message"]}>Already have an account?</p>
            <Link component="button" variant="body2">
              Sign In
            </Link>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <TextBox
            id="person-name"
            name="personName"
            label="Authorized Person's Name"
            placeholder="Who is Going to Manage this Account"
          />
          <TextBox
            id="designation"
            name="designation"
            label="Designation"
            placeholder="Eg. Business Owner, CEO, Manager"
          />
          <TextBox
            id="phone"
            name="phone"
            label="Enter Phone Number"
            placeholder=""
          />
          <Button
            fullWidth
            type="submit"
            id="sendotp"
            variant="contained"
            color="primary"
            className={style["continue-btn"]}
            onClick={navigateOtp}
          >
            Send OTP
          </Button>
          <div className={style["otp-info"]}>You will receive an OTP on your mobile number</div>
        </TabPanel>
      </div>
    </div>
  );
}
