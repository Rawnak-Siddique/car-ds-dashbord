import styled from "styled-components";

export const LeadsBody = styled.div`
width: 100%;
height: 95vh;
padding: 5px;
margin: 5px;
margin-left: 15px;
overflow: scroll;

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
export const LeadsButton = styled.button`
    background: linear-gradient(45deg, #2196F3 30%, #21CBF3 90%);
    box-shadow: -3px 3px 5px 2px rgba(33, 203, 243, .3);
    color: white;
    font-weight: bold;
    cursor: pointer;
    width: 100px;
    height: 30px;
    border-radius: 11px;
    border: none;
`;