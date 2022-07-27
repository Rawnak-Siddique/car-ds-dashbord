import styled from "styled-components";

export const FlipCardBodyFront = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 20px;
    padding: 10px;
    margin: 20px;
    display: flex;
    background: ${({ theme, isActive }) => (!isActive ? theme.cardBg : theme.bg2)};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
    :hover {
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.25);
        -webkit-box-shadow: 0 .5rem 1rem rgba(0,0,0,.25);
        -moz-box-shadow: 0 .5rem 1rem rgba(0,0,0,.25);
    }
`;
export const FlipCardBodyBack = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 20px;
    margin: 20px;
    padding: 10px;
    display: flex
    background: ${({ theme, isActive }) => (!isActive ? theme.cardBg : theme.bg2)};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
    :hover {
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.25);
        -webkit-box-shadow: 0 .5rem 1rem rgba(0,0,0,.25);
        -moz-box-shadow: 0 .5rem 1rem rgba(0,0,0,.25);
    }
`;
export const FlipCardBodyFrontHeader = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 10px;
    overflow: scroll;
    h1 {
        font-size: 22px;
        font-weight: bold;
    }
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
`;
export const FlipCardBodyFrontSections = styled.div`
    width: 100%;
    height: 140px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: scroll;
    p {
        width: 100%;
        height: 60px;
        padding: 5px;
        margin: 1px;
    }
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
`;
export const FlipCardBodyFrontButton = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const FlipCardBodyBackHeader = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    overflow: scroll;
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
    h1 {
        font-size: 25px;
        font-weight: bold;
    }
`;
export const FlipCardBodyBackSections = styled.div`
    width: 100%;
    height: 190px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: scroll;
    p {
        width: 100%;
        height: 170px;
        padding: 5px;
        margin: 1px;
    }
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
`;
export const FlipCardBodyBackButton = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;