import styled from "styled-components";

export const RepairsBody = styled.div`
width: 100%;
height: 92vh;
padding: 5px;
margin: 5px;
margin-left: 20px;
overflow: scroll;
border-radius: 15px;
::-webkit-scrollbar {
display: none;
}
::-moz-scrollbar {
display: none;
}
`;
export const RepairsTable = styled.div`
    background: ${({ theme, isActive }) => (!isActive ? theme.bg3 : theme.primary)};
    color: inherit;
    width: 100%;
    height: 100%;
    padding: 10px;
    overflow: scroll;
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
`;