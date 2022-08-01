import styled from "styled-components";

export const SalesBody = styled.div`
    width: 100%;
    height: 97vh;
    padding: 5px;
    margin: 5px;
    margin-left: 15px;
    position: relative;
    border-radius: 15px;
    background: ${({ theme, isActive }) => (!isActive ? theme.bg2 : theme.primary)};
    overflow: scroll;
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
`;
export const SalesBodyHeader = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    justify-content: space-between;
`;
export const SalesBodyTables = styled.div`
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
export const ModalDiv = styled.div`
    width: 100%;
    height: auto;
    padding: 5px;
    display: flex;
`;
export const ModalLabel = styled.div`
    width: 30%;
    font-weight: bold;
    align-items: center;
`;
export const ModalInput = styled.div`
    width: 70%;
    height: auto;
`;