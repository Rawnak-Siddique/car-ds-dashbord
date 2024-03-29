import styled from "styled-components";

export const CustomerBody = styled.div`
    width: 100%;
    height: 94vh;
    padding: 5px;
    margin: 5px;
    margin-left: 15px;
   position: relative;
   border-radius: 15px;
   background: ${({ theme, isActive }) => (!isActive ? theme.bg2 : theme.primary)};
`;
export const CustomerHeader = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    justify-content: space-between;
`;
export const CustomerTables = styled.div`
    background: ${({ theme, isActive }) => (!isActive ? theme.bg2 : theme.primary)};
    color: inherit;
    width: 100%;
    height: calc(100% - 45px);
    padding: 10px;
    overflow: scroll;
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
`;
export const CustomerHeaderButton = styled.div``;