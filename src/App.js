import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout/Layout';
import GuideRouter from './GuideRouter';
import { GlobalStyle } from './styles/globalStyles';
import { darkTheme, lightTheme } from './styles/theme';
import { Routes, Route } from 'react-router-dom';
import LogIn from './pages/LogIn/LogIn';

/* Creating a context that can be used to pass data to child components. */
export const ThemeContext = React.createContext(null);

/* This is a Material UI component. It is a text field. */

const App = () => {
  /* This is a React Hook. It is a function that allows you to use state in a functional component. */
  const [theme, setTheme] = useState("light");
  /* This is a ternary operator. It is a shorthand way of writing an if/else statement. */
  const themeStyles = theme === "light" ? lightTheme : darkTheme;
  /* This is a React Hook. It is a function that allows you to use state in a functional component. */
  const [logState, setLogState] = useState(false);

 /* A Material UI component. It is a text field. */
  /**
   * It toggles the logState variable between true and false.
   */
  /**
   * It sets the state of the logInType to the opposite of what it currently is
   */
  useEffect(() => {
    const email = JSON.parse(localStorage.getItem('Emails')); 
    const password = JSON.parse(localStorage.getItem('Passwords'));
    const isLogIn = JSON.parse(localStorage.getItem('logState'));
    if (email === "abc" && password === "abc" && isLogIn === true) {
      setLogState(true);
    }
  }, []);
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
        {logState === 'true' ? (
              <Routes>
                <Route path="/" element={<LogIn />}>
              </Routes>            
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
