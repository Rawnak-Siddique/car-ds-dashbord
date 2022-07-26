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
    border: 1px solid #6b7280;
    :hover {
        box-shadow: 10px 10px 20px -3px rgba(0,0,0,0.59);
        -webkit-box-shadow: 10px 10px 20px -3px rgba(0,0,0,0.59);
        -moz-box-shadow: 10px 10px 20px -3px rgba(0,0,0,0.59);
    }
`;
export const FlipCardBodyBack = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 20px;
    margin: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #6b7280;
    :hover {
        box-shadow: 10px 10px 20px -3px rgba(0,0,0,0.59);
        -webkit-box-shadow: 10px 10px 20px -3px rgba(0,0,0,0.59);
        -moz-box-shadow: 10px 10px 20px -3px rgba(0,0,0,0.59);
    }
`;
export const FlipCardBodyFrontHeader = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 10px;
    border: 1px solid #6b7280;
    border-bottom: none;
    border-radius: 15px 15px 0px 0px;
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
    border: 1px solid #6b7280;
    border-top: none;
    border-radius: 0px 0px 15px 15px;
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
    border: 1px solid #6b7280;
    border-bottom: none;
    border-radius: 15px 15px 0px 0px;
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
    border: 1px solid #6b7280;
    border-top: none;
    border-radius: 0px 0px 15px 15px;
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