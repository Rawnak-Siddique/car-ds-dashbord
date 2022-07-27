import styled from "styled-components";

export const SalesFormBody = styled.div`
    width: 100%;
    height: 99vh;
    padding: 15px;
    background: #FFFFFF;
    margin: 5px 5px 5px 15px;
    margin-bottom: 5px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;
export const SalesFormSection = styled.div`
    width: 100%;
    height: 100vh;
    overflow: scroll;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
`;
export const SalesFormSectionArea = styled.div`
    width: 100%;
    height: 300px;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column; 
`;
export const SalesFormSectionHeader = styled.div`
    width: 100%;
    height: 40px;
    color: white;
    background-color:#1B98F5;
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 1px;
    border-radius: 8px;
`;
export const SalesFormInputSection = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-start;
`;
export const SalesFormInput = styled.div`
    width: 320px;
    height: 40px;
    display: flex;
    align-items: center;
    margin: 30px 0px 20px 0px;
`;
export const SalesFormInputLabel = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
`;
export const SalesFormInputValue = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
`;
export const SalesFormInputTextArea = styled.textarea`
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
export const SalesFormSectionButton = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;