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
    height: 500px;
    padding: 10px;
    border: 1px solid #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1px;
`;
export const HamePageBodySectionsLeft = styled.div`
    width: 480px;
    padding: 10px;
    margin: 10px;
    border: 1px solid #000000;
    background-color: whitesmoke;
`;
export const HamePageBodySectionsRight = styled.div`
    width: 700px;
    height: 100%;
    padding: 10px;
    margin: 10px;
    border: 1px solid #000000;
    background-color: whitesmoke;
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
    background-color: whitesmoke;
`;
export const HamePageBodySectionsTailLeft = styled.div`
    background-color: ghostwhite;
    width: 650px;
    height: 100%;
    padding: 10px;
    margin: 10px;
    border: 1px solid #000000;
    border-radius: 10px;
`;
export const HamePageBodySectionsTailRight = styled.div`
    background-color: ghostwhite;
    width: 650px;
    height: 100%;
    padding: 10px;
    margin: 10px;
    border: 1px solid #000000;
    border-radius: 10px;
`;