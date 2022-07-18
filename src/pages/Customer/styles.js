import styled from "styled-components";

export const CustomerBody = styled.div`
    width: 100%;
    height: 100vh;
    padding: 5px;
    margin: 5px;
    margin-left: 15px;
   position: relative;
`;
export const CustomerHeader = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    justify-content: space-between;
`;
export const CustomerButton = styled.button`
    background: ${({ theme }) => ( theme.primary)};
    color: white;
    font-weight: bold;
    cursor: pointer;
    width: 100px;
    height: 30px;
    border-radius: 11px;
    border: none;
`;
export const CustomerTables = styled.div`
    background: ${({ theme, isActive }) => (!isActive ? theme.bg3 : theme.primary)};
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