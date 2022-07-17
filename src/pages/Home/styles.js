import styled from "styled-components";

export const HamePageBody = styled.div`
    width: 100%;
    height: 97vh;
    padding: 5px;
    margin: 5px;
    background: ${({ theme, isActive }) => (!isActive ? theme.bg2 : theme.bgAlpha)};
    overflow: scroll;
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
`;
export const HomePageBodyTopSection = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    
    h1 {
        font-weight: bold;
        font-size: 30px;
        margin-left: 20px;   
    }
    @media (max-width: 1024px) {
        height: 500px;
    }
`;
export const HomePageBodyTopIcons = styled.div`
    width: 100%;
    height: 250px;
    padding: 10px;
    margin: 1px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    justify-content: space-evenly;
    flex-wrap: nowrap;
    overflow: scroll;
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
    @media (max-width: 1024px) {
        flex-wrap: wrap;
        height: 450px;
    }
`;
export const HamePageBodyCards = styled.div`
    width: 100%;
    height: 300px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: auto;
    flex-wrap: wrap;
    border-radius: 10px;
    margin: 1px;
`;
export const HamePageBodySections = styled.div`
    width: 100%;
    height: 400px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    h1 {
        font-weight: bold;
        font-size: 30px;
        margin-left: 20px;
        padding: 10px;
    }
    @media (max-width: 1024px) {
        height: 800px;
    }
`;
export const HamePageBodySectionsContent = styled.div`
    width: 100%;
    height: 400px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1px;
    justify-content: space-evenly;
    flex-wrap: nowrap;
    overflow: hidden;
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
    @media (max-width: 1024px) {
        flex-wrap: wrap;
        height: 800px !important;
        overflow: scroll;
    }
`;
export const HamePageBodySectionsLeft = styled.div`
    width: 300px;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    background-color: white;
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
export const HamePageBodySectionsCenter = styled.div`
    width: 500px;
    height: 300px;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    background-color: white;
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
export const HamePageBodySectionsRight = styled.div`
    width: 500px;
    height: 300px;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    background-color: white;
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
export const HamePageBodySectionsTail = styled.div`
    width: 100%;
    height: 400px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 1px;
    padding: 10px;
    background: ${({ theme, isActive }) => (!isActive ? theme.bg2 : theme.primary)};
    overflow: hidden;
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
    @media (max-width: 1024px) {
        flex-direction: column;
        height: 800px ;
        overflow: scroll;
    }
`;