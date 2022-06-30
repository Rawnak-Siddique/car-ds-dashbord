import styled from 'styled-components';

export const LeadsFormBody = styled.div`
    width: 100%;
    height: 100vh;
    padding: 5px;
    margin: 5px;
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const LeadsFormSection = styled.div`
    width: 550px;
    height: 100vh;
    overflow: scroll;
    padding: 15px;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
`;