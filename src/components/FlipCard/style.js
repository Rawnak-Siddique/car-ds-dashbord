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
    border: 1px solid lightgrey;
    :hover {
        box-shadow: 2px -2px 22px 4px rgba(184,183,183,0.71);
        -webkit-box-shadow: 2px -2px 22px 4px rgba(184,183,183,0.71);
        -moz-box-shadow: 2px -2px 22px 4px rgba(184,183,183,0.71);
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
    border: 1px solid lightgrey;
    :hover {
        box-shadow: 2px -2px 22px 4px rgba(184,183,183,0.71);
        -webkit-box-shadow: 2px -2px 22px 4px rgba(184,183,183,0.71);
        -moz-box-shadow: 2px -2px 22px 4px rgba(184,183,183,0.71);
    }
`;
export const FlipCardBodyFrontHeader = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;
    border: 1px solid lightgrey;
    border-bottom: none;
    border-radius: 15px 15px 0px 0px;
    overflow: scroll;
    h1 {
        font-size: 15px;
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
    border: 1px solid lightgrey;
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
    height: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    border: 1px solid lightgrey;
    border-bottom: none;
    border-radius: 15px 15px 0px 0px;
    overflow: scroll;
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
`;
export const FlipCardBodyBackSections = styled.div`
    width: 100%;
    height: 140px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border: 1px solid lightgrey;
    border-radius: 0px 0px 15px 15px;
    overflow: scroll;
    p {
        width: 100%;
        height: 120px;
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