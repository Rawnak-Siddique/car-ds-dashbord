import styled from "styled-components";

export const HomeCardsBody = styled.div`
    height: 260px;
    width: 450px;
    padding: 5px;
    margin: 10px 20px 10px 20px;
    border-radius: 20px;
    background-color: white;
    color: black;
    border: 1px solid rgba(168,168,168,0.51);
    &:hover{
        box-shadow: -12px 11px 10px 0px rgba(168,168,168,0.51);
        -webkit-box-shadow: -12px 11px 10px 0px rgba(168,168,168,0.51);
        -moz-box-shadow: -12px 11px 10px 0px rgba(168,168,168,0.51);
    };
    box-shadow: -5px 10px 10px 10px rgba(168,168,168,0.5);
    -webkit-box-shadow: -5px 10px 10px 10px rgba(168,168,168,0.5);
    -moz-box-shadow: -5px 10px 10px 10px rgba(168,168,168,0.5);
`;
export const HomeCardsBodyTitle = styled.div`
    text-align: center;
    height: 20px;
    width: 100%;
`;
export const HomeCardsBodyGraph = styled.div`
    width: 100%;
    height: 260px;
    padding: 5px 10px 10px 10px;
`;