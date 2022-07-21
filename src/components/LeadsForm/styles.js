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
    h1 {
        font-size: 25px;
    };
`;
export const LeadsFormSection = styled.div`
    width: 100%;
    height: 100vh;
    padding: 15px;
    overflow: scroll;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
`;
export const LeadsFormSectionsPlace = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    padding: 10px;
    border-bottom: 1px solid black;
`;
export const LeadsFormInputLeft = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
export const LeadsFormInputRight = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
export const LeadsFormInputSection = styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
`;
export const LeadsFormInputLabel = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
`;
export const LeadsFormInputValue = styled.div`
    width: 75%;
    height: 100%;
    display: flex;
    align-items: center;
`;
export const LeadsFormSectionsDivider = styled.div`
    width: 100%;
    height: 40px;
    color: black;
    background-color:#FEFEED;
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 1px;
`;
export const LeadsFormInputTextArea = styled.textarea`
    width: 90%;
    height: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid grey;
    overflow: scroll;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
`;
export const LeadsFormInputCommentSection = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;
    justify-content: center;
`;
export const LeadsFormInputCommentLabel = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const LeadsFormInputCommentValue = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;