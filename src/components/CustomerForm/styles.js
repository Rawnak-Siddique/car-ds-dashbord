import styled from "styled-components";

export const CustomerFormBody = styled.div`
    width: 100%;
    height: 100vh;
    padding: 10px;
    margin: 5px;
    margin-left: 15px;
    position: relative;
    border-radius: 15px;
    background: ${({ theme, isActive }) => (!isActive ? theme.bg2 : theme.primary)};
`;