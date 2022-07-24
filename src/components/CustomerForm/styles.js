import styled from "styled-components";

export const CustomerFormBody = styled.div`
    width: 100%;
    height: 97vh;
    padding: 10px;
    margin: 1px;
    margin-left: 15px;
    position: relative;
    border-radius: 15px;
    background: ${({ theme, isActive }) => (!isActive ? theme.bg2 : theme.primary)};
`;
export const CustomerFormBodyHeader = styled.div`
    width: 100%;
    height: 60px;
    padding: 10px;
    margin: 1px;
    display: flex;
    align-items: center;
`;
export const CustomerFormBodyHeaderSection = styled.div`
    width: 160px;
    height: 100%;
    margin: 5px;
    display: flex;
    align-items: center;
`;
export const CustomerFormBodyHeaderSectionLabel = styled.div`
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 15px;
`;
export const CustomerFormBodyHeaderSectionValue = styled.div`
    width: 60px;
    height: 100%;
    display: flex;
    align-items: center;
`;
export const CustomerFormBodySection = styled.div`
    width: 100%;
    height: 91%;
    padding: 10px;
    border-radius: 10px;
    overflow: scroll;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
`;
export const CustomerFormBodySectionArea = styled.div`
    width: 100%;
    height: 300px;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column; 
    border-bottom: 1px solid black;
`;
export const CustomerFormBodyInputSection = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-start;
`;
export const CustomerFormBodyInput = styled.div`
    width: 320px;
    height: 40px;
    display: flex;
    align-items: center;
    margin: 30px 0px 20px 0px;
`;
export const CustomerFormBodyInputLabel = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
`;
export const CustomerFormBodyInputValue = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
`;