import styled from "styled-components";

export const BookingsBody = styled.div`
    width: 100%;
    height: 95vh;
    padding: 10px;
    margin: 1px;
    border-radius: 15px;
    background: ${({ theme, isActive }) => (!isActive ? theme.bg2 : theme.bgAlpha)};
    overflow: scroll;
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
`;
export const BookingsBodyHeader = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 15px 15px 0 0;
    h1 {
        font-size: 35px;
    }
`;
export const BookingsBodySection = styled.div`
    width: 100%;
    height: 1400px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 0 0 15px 15px;
`;
export const BookingCardContainer = styled.div`
    width: 100%;
    height: 450px;
    padding: 20px;
    display: flex;
`;
