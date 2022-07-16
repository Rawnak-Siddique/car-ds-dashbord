import styled from "styled-components";

export const HamePageBody = styled.div`
    width: 100%;
    height: 97vh;
    padding: 5px;
    margin: 5px;
    margin-left: 20px;
    overflow: scroll;
    background: ${({ theme, isActive }) => (!isActive ? theme.bg3 : theme.primary)};
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
`;
export const HomePageBodyTopIcons = styled.div`
    width: 100%;
    height: 200px;
    padding: 10px;
    margin: 1px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid #000000;
    border-radius: 10px;
    justify-content: space-evenly;
    background: ${({ theme, isActive }) => (!isActive ? theme.bg3 : theme.primary)};
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
    border: 1px solid #000000;
    border-radius: 10px;
    margin: 1px;
`;
export const HamePageBodySections = styled.div`
    width: 100%;
    height: 300px;
    padding: 10px;
    border: 1px solid #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1px;
    justify-content: space-evenly;
`;
export const HamePageBodySectionsLeft = styled.div`
    width: 300px;
    padding: 10px;
    margin: 10px;
    border: 1px solid #000000;
    border-radius: 10px;
    background-color: whitesmoke;
    box-shadow: -12px 11px 10px 0px rgba(168,168,168,0.51);
    -webkit-box-shadow: -12px 11px 10px 0px rgba(168,168,168,0.51);
    -moz-box-shadow: -12px 11px 10px 0px rgba(168,168,168,0.51);
`;
export const HamePageBodySectionsCenter = styled.div`
    width: 500px;
    height: 100%;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    border: 1px solid #000000;
    background-color: whitesmoke;
    box-shadow: -12px 11px 10px 0px rgba(168,168,168,0.51);
    -webkit-box-shadow: -12px 11px 10px 0px rgba(168,168,168,0.51);
    -moz-box-shadow: -12px 11px 10px 0px rgba(168,168,168,0.51);
`;
export const HamePageBodySectionsRight = styled.div`
    width: 500px;
    height: 100%;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    border: 1px solid #000000;
    background-color: whitesmoke;
    box-shadow: -12px 11px 10px 0px rgba(168,168,168,0.51);
    -webkit-box-shadow: -12px 11px 10px 0px rgba(168,168,168,0.51);
    -moz-box-shadow: -12px 11px 10px 0px rgba(168,168,168,0.51);
`;
export const HamePageBodySectionsTail = styled.div`
    width: 100%;
    height: 500px;
    padding: 10px;
    border: 1px solid #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1px;
    padding: 10px;
    border: 1px solid #000000;
    background: ${({ theme, isActive }) => (!isActive ? theme.bg3 : theme.primary)};
`;
export const HamePageBodySectionsTailLeft = styled.div`
    background-color: ghostwhite;
    width: 650px;
    height: 100%;
    padding: 10px;
    margin: 10px;
    border: 1px solid #000000;
    border-radius: 10px;
    box-shadow: -12px 11px 10px 0px rgba(168,168,168,0.51);
    -webkit-box-shadow: -12px 11px 10px 0px rgba(168,168,168,0.51);
    -moz-box-shadow: -12px 11px 10px 0px rgba(168,168,168,0.51);
`;
export const HamePageBodySectionsTailRight = styled.div`
    background-color: ghostwhite;
    width: 650px;
    height: 100%;
    padding: 10px;
    margin: 10px;
    border: 1px solid #000000;
    border-radius: 10px;
    box-shadow: -12px 11px 10px 0px rgba(168,168,168,0.51);
    -webkit-box-shadow: -12px 11px 10px 0px rgba(168,168,168,0.51);
    -moz-box-shadow: -12px 11px 10px 0px rgba(168,168,168,0.51);
`;