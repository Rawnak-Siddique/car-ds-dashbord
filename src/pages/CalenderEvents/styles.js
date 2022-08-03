import styled from "styled-components";

export const CalenderEventsBody = styled.div`
    width: 100%;
    height: 95vh;
    padding: 10px;
    margin: 1px;
    border-radius: 15px;
    background: ${({ theme, isActive }) => (!isActive ? theme.bg2 : theme.bgAlpha)};
    display: flex;
    flex-direction: column;
    overflow: scroll;
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
`;
export const CalenderEventsBodyHeader = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`;
export const CalenderEventsBodyEvents = styled.div`
    width: 100%;
    height: 50px;
    background-Color: green;
`;
export const CalenderEventsBodyCalendar = styled.div`
    width: 100%;
    height: 600px;
    object-fit: contain;
    overflow: scroll;
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
`;
export const CalenderEventsBodyEventsLists = styled.div`
    width: 100%;
    height: 50px;
    background-Color: yellow;
`;