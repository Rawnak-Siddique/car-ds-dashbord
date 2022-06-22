import styled from "styled-components";

export const VendorsBody = styled.div`
width: 100%;
height: 95vh;
padding: 5px;
margin: 5px;
margin-left: 20px;
overflow: scroll;

::-webkit-scrollbar {
display: none;
}
::-moz-scrollbar {
display: none;
}
`;
export const VendorsHeader = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    justify-content: space-between;
`;
export const VendorsButton = styled.button`
    background: ${({ theme, isActive }) => (!isActive ? theme.bg3 : theme.primary)};
    color: inherit;
    cursor: pointer;
    width: 100px;
    height: 30px;
    border-radius: 11px;
    border: none;
`;