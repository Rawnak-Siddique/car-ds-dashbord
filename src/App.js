import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout/Layout';
import GuideRouter from './GuideRouter';
import { GlobalStyle } from './styles/globalStyles';
import { darkTheme, lightTheme } from './styles/theme';

export const ThemeContext = React.createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const themeStyles = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyles} >
        <GlobalStyle />
        <Helmet>
          <title>Sidebar - code focus</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" cross origin />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        </Helmet>
        <>
          <Layout>
            <GuideRouter />
          </Layout>
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
