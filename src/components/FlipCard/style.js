import styled from "styled-components";

export const FlipCardBodyFront = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 20px;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: blueviolet;
    :hover {
        box-shadow: 2px -2px 22px 4px rgba(184,183,183,0.71);
        -webkit-box-shadow: 2px -2px 22px 4px rgba(184,183,183,0.71);
        -moz-box-shadow: 2px -2px 22px 4px rgba(184,183,183,0.71);
    }
`;
export const FlipCardBodyBack = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 15px;
    margin: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: blueviolet;

`;
export const FlipCardBodyFrontHeader = styled.div`
    width: 280px;
    height: 100px;
    background-color: burlywood;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;
    overflow: scroll;
    h1 {
        font-size: 20px;
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
    background-color: aqua;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    overflow: scroll;
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
    height: 110px;
    background-color: burlywood;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
`;
export const FlipCardBodyBackSections = styled.div`
    width: 100%;
    height: 130px;
    background-color: aqua;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    overflow: scroll;
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