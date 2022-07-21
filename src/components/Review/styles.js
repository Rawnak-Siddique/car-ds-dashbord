import styled from "styled-components";

export const ReviewBody = styled.div`
    width: 100%;
    height: 95vh;
    padding: 10px;
    margin-left: 15px;
    background: ${({ theme }) => ( theme.bg2)};
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const ReviewBodyHeader = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: ${({ theme }) => ( theme.primary)};
`;
export const ReviewBodySection = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    overflow: scroll;
    flex-direction: column;
    display: flex;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;
export const ReviewBodyFormTextArea = styled.textarea`
    width: 80%;
    height: 300px;
    border: 1px solid grey;
    border-radius: 15px;
    padding: 10px;
    margin: 10px;
    display: flex;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
`;
export const ReviewBodyFormSection = styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
`;
export const ReviewBodyFormSectionLabel = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
`;
export const ReviewBodyFormSectionInput = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
`;