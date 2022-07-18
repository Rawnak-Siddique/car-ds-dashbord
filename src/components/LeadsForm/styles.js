import styled from 'styled-components';

export const LeadsFormBody = styled.div`
    width: 100%;
    height: 100vh;
    padding: 5px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => (theme.bg2)};
`;
export const LeadsFormSection = styled.div`
     width: 100%;
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
export const LeadsFormInputSection = styled.div`
    width: 100%;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
`;
export const LeadsFormInputLabel = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
    padding-left: 20px;
`;
export const LeadsFormInputValue = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
`;