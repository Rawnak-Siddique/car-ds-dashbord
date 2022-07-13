import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,*::before,*::after {
        margin: 0;
        box-sizing: border-box;
    }
    body {
        background: ${({ theme }) => theme.bg2};
        color: ${({ theme }) => theme.text};
        font-family: 'Roboto', sans-serif;
        letter-spacing: .6px;
    }
`;

export const LogInPage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
`;
export const LogInComponent = styled.div`
    width: 600px;
    height: 500px;
    display: flex;
    padding: 10px;
    border-radius: 10px;
    box-Shadow: 0 3px 5px 2px rgba(33, 203, 243, .3);
    background-color: lightblue;
`;
export const LogInComponentLeft = styled.div`
    background-color: inherit;
    width: 300px;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px 0 0 10px;
    
`;
export const LogInComponentRight = styled.div`
    background-color: inherit;
    width: 300px;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 0 10px 10px 0 ;
    overflow: scroll;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
`;
export const LogInComponentDivider = styled.div`
    height: 100%;
    width: 1px;
    background-color: black;
`;
export const LogInComponentButton = styled.button`
    height: 30px;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
export const LogInComponentCreateAccountButton = styled.button`
    border: none;
    background: inherit;
    color: blue;
    text-decoration: underline;
  text-decoration-color: blue;
`;