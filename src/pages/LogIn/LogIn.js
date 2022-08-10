import React, { useState } from 'react';
import { LogInComponent, LogInComponentButton, LogInComponentCreateAccountButton, LogInComponentDivider, LogInComponentLeft, LogInComponentLeftLogo, LogInComponentRight, LogInComponentRightForm, LogInPage } from '../../styles/globalStyles';
import { LogInBody } from './style';
import logo from "../../assets/WizzarTech.png";
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import bcrypt from 'bcryptjs';
import useCredentials from '../../hooks/useAuth';

const useStyles = makeStyles(() => ({
  textField: {
    margin: "20px auto 20px auto",
    width: "300px",
  },
}));

const LogIn = () => {
  // const saltRounds = 10;
  const [credentials] = useCredentials();
  const classes = useStyles();
  const logState = true;
  const [logInType, setLogInType] = useState(false);
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const logInAction = () => {

    // console.log(hash);
    bcrypt.compare(userPassword, credentials[0]?.password, function (err, res) {
      if (!res || userEmail !== credentials[0]?.email) {
        alert('Your Username or Password is Wrong. Please Try again.')
        return;
      }
      localStorage.setItem("logStatus", JSON.stringify(logState));
      window.open('/', "_self");
    });



  };
  const activateCreateAccount = () => {
    setLogInType(!logInType);
  };
  return (
    <LogInBody>
      <LogInPage>
        <LogInComponent>
          <LogInComponentLeft>
            Powered by
            {/* Importing the logo from the assets folder and adding it to the page. */}
            <LogInComponentLeftLogo src={logo} alt="WizzarTech Logo" />
          </LogInComponentLeft>
          <LogInComponentDivider />
          <LogInComponentRight>
            {/* A ternary operator. It is a shorthand way of writing an if/else statement. */}
            {
              /* A ternary operator. It is a shorthand way of writing an if/else statement. */
              logInType === false ? (
                <>
                  Log in to your account
                  {/* Creating a form that has two text fields. */}
                  <LogInComponentRightForm className={classes.root} noValidate autoComplete="on">
                    <TextField id="outlined-basic" variant="outlined" label="Email" className={classes.textField} onChange={(e) => {
                      setUserEmail(e.target.value);
                    }} />
                    <TextField id="outlined-basic" type='password' variant="outlined" label="Password" className={classes.textField} onChange={(e) => {
                      setUserPassword(e.target.value);
                    }} />
                  </LogInComponentRightForm>
                  {/* A button that calls the logInAction function when it is clicked. */}
                  <LogInComponentButton autoWidth="true" type='button' onClick={logInAction} >Log in</LogInComponentButton>
                  <LogInComponentCreateAccountButton autoWidth="true" type='button' onClick={activateCreateAccount} >Create Account</LogInComponentCreateAccountButton>
                </>
              ) : (
                <>
                  Create an account
                  {/* A button that calls the activateCreateAccount function when it is clicked. */}
                  <LogInComponentCreateAccountButton autoWidth="true" type='button' onClick={activateCreateAccount} >Sign In</LogInComponentCreateAccountButton>
                </>
              )
            }
          </LogInComponentRight>
        </LogInComponent>
      </LogInPage>
    </LogInBody>
  );
}

export default LogIn;
