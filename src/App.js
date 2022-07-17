import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout/Layout';
import GuideRouter from './GuideRouter';
import { GlobalStyle, LogInComponent, LogInComponentButton, LogInComponentCreateAccountButton, LogInComponentDivider, LogInComponentLeft, LogInComponentLeftLogo, LogInComponentRight, LogInComponentRightForm, LogInPage } from './styles/globalStyles';
import { darkTheme, lightTheme } from './styles/theme';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import logo from "./assets/WizzarTech.png"

export const ThemeContext = React.createContext(null);

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  textField: {
    margin: "20px auto 20px auto",
    width: "300px",
  },
}));

const App = () => {
  const [theme, setTheme] = useState("light");
  const themeStyles = theme === "light" ? lightTheme : darkTheme;
  const [logState, setLogState] = useState(false);
  const [logInType, setLogInType] = useState(false);
  const classes = useStyles();

  const logInAction = () => {
    setLogState(!logState);
  };
  const activateCreateAccount = () => {
    setLogInType(!logInType);
  };
  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyles} >
        <GlobalStyle />
        <Helmet>
          <title>Momin Dashboard</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" cross origin />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        </Helmet>
        {
          (logState === false) ? (
            <>
              <LogInPage>
                <LogInComponent>
                  <LogInComponentLeft>
                    Powered by
                    <LogInComponentLeftLogo src={logo} alt="WizzarTech Logo" /> 
                  </LogInComponentLeft>
                  <LogInComponentDivider />
                  <LogInComponentRight>
                    {
                      (logInType === false) ? (
                        <>
                          Log in to your account
                          <LogInComponentRightForm className={classes.root} noValidate autoComplete="on">
                            <TextField id="outlined-basic" variant="outlined" label="Email" className={classes.textField}/>
                            <TextField id="outlined-basic" variant="outlined" label="Password" className={classes.textField} />
                          </LogInComponentRightForm>
                          <LogInComponentButton autoWidth="true" type='button' onClick={logInAction} >Log in</LogInComponentButton>
                        </>
                      ) : (
                        <>
                          Create an account
                        </>
                      )
                    }
                    <LogInComponentCreateAccountButton autoWidth="true" type='button' onClick={activateCreateAccount} >Create Account</LogInComponentCreateAccountButton>
                  </LogInComponentRight>
                </LogInComponent>
              </LogInPage>
            </>
          ) : (
            <>
              <Layout>
              <GuideRouter />
              </Layout>
            </>
          )
        }
        
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
