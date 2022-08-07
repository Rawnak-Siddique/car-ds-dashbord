import React, { useState } from 'react';
import { LogInComponent, LogInComponentButton, LogInComponentCreateAccountButton, LogInComponentDivider, LogInComponentLeft, LogInComponentLeftLogo, LogInComponentRight, LogInComponentRightForm, LogInPage } from '../../styles/globalStyles';
import { LogInBody } from './style';
import logo from "../../assets/WizzarTech.png";
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    textField: {
        margin: "20px auto 20px auto",
        width: "300px",
      },
}));

const LogIn = () => {
    const classes = useStyles();
    const [logState, setLogState] = useState(false);
    const [logInType, setLogInType] = useState(false);
    const [userEmail, setUserEmail] = useState();
    const [userPassword, setUserPassword] = useState();
    const logInAction = () => {
        if (userEmail === "abc" && userPassword === "abc") {
          setLogState(true);
          localStorage.setItem("Emails", JSON.stringify(userEmail));
          localStorage.setItem("Passwords", JSON.stringify(userPassword));
          localStorage.setItem("logState", JSON.stringify(logState));
        } else {
          alert("Please enter your correct email and password to log in.");
        }
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
                      (logInType === false) ? (
                        <>
                          Log in to your account
                          {/* Creating a form that has two text fields. */}
                          <LogInComponentRightForm className={classes.root} noValidate autoComplete="on">
                            <TextField id="outlined-basic" variant="outlined" label="Email" className={classes.textField} onChange={(e) => {
                              setUserEmail(e.target.value);
                            }} />
                            <TextField id="outlined-basic" variant="outlined" label="Password" className={classes.textField} onChange={(e) => {
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
                          <LogInComponentCreateAccountButton autoWidth="true" type='button' onClick={activateCreateAccount} >Sign In</LogInComponentCreateAccountButton>
                        </>
                      )
                    }
                    {/* A button that calls the activateCreateAccount function when it is clicked. */}
                  </LogInComponentRight>
        </LogInComponent>
      </LogInPage>
    </LogInBody>
  );
}

export default LogIn;
