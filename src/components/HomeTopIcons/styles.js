import styled from "styled-components";

export const HomeTopIconsBody = styled.div`
    width: 200px;
    height: 200px;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: white;
    color: black;
    &:hover{
        box-shadow: -5px 10px 10px 10px rgba(168,168,168,0.5);
        -webkit-box-shadow: -5px 10px 10px 10px rgba(168,168,168,0.5);
        -moz-box-shadow: -5px 10px 10px 10px rgba(168,168,168,0.5);
    };
`;
export const HomeTopIconsHeader = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: auto;
`;
export const HomeTopIconsPic = styled.div`
    width: 100%;
    height: 50px;
    font-size: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const HomeTopIcon = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
`;
export const HomeTopIconsNumber = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;