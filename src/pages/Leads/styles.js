import styled from "styled-components";

export const LeadsBody = styled.div`
    width: 100%;
    height: 94vh;
    padding: 5px;
    margin: 5px;
    margin-left: 15px;
    overflow: scroll;
    border-radius: 15px;
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
`;

export const LeadsHeader = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    justify-content: space-between;
`;