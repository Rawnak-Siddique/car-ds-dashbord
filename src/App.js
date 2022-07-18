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

/* Creating a context that can be used to pass data to child components. */
export const ThemeContext = React.createContext(null);

/* This is a Material UI component. It is a text field. */
const useStyles = makeStyles((theme) => ({
  /* This is a Material UI component. It is a text field. */
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  /* This is a Material UI component. It is a text field. */
  textField: {
    margin: "20px auto 20px auto",
    width: "300px",
  },
}));

const App = () => {
  /* This is a React Hook. It is a function that allows you to use state in a functional component. */
  const [theme, setTheme] = useState("light");
  /* This is a ternary operator. It is a shorthand way of writing an if/else statement. */
  const themeStyles = theme === "light" ? lightTheme : darkTheme;
  /* This is a React Hook. It is a function that allows you to use state in a functional component. */
  const [logState, setLogState] = useState(false);
  const [logInType, setLogInType] = useState(false);
 /* A Material UI component. It is a text field. */
  const classes = useStyles();

  /**
   * It toggles the logState variable between true and false.
   */
  const logInAction = () => {
    setLogState(!logState);
  };
  /**
   * It sets the state of the logInType to the opposite of what it currently is
   */
  const activateCreateAccount = () => {
    setLogInType(!logInType);
  };
  return (
    /* Creating a context that can be used to pass data to child components. */
    <ThemeContext.Provider value={{ setTheme, theme }}>
     {/* A component that allows you to pass a theme to all of the child components. */}
      <ThemeProvider theme={themeStyles} >
        {/* A component that is used to add global styles to the page. */}
        <GlobalStyle />
       { /* A React component that allows you to add meta tags to your page. */}
        <Helmet>
          <title>Momin Dashboard</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" cross origin />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        </Helmet>
       {/* A ternary operator. It is a shorthand way of writing an if/else statement. */}
        {
          (logState === false) ? (
            <>
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
                            <TextField id="outlined-basic" variant="outlined" label="Email" className={classes.textField}/>
                            <TextField id="outlined-basic" variant="outlined" label="Password" className={classes.textField} />
                          </LogInComponentRightForm>
                          {/* A button that calls the logInAction function when it is clicked. */}
                          <LogInComponentButton autoWidth="true" type='button' onClick={logInAction} >Log in</LogInComponentButton>
                        </>
                      ) : (
                        <>
                          Create an account
                        </>
                      )
                    }
                    {/* A button that calls the activateCreateAccount function when it is clicked. */}
                    <LogInComponentCreateAccountButton autoWidth="true" type='button' onClick={activateCreateAccount} >Create Account</LogInComponentCreateAccountButton>
                  </LogInComponentRight>
                </LogInComponent>
              </LogInPage>
            </>
          ) : (
            <>
             {/* A component that is used to wrap the other components. */}
              <Layout>
              {/* A component that is used to route the user to the correct page. */}
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
