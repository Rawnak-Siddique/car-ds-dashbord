import styled from "styled-components";

export const HomeLastEventsBody = styled.div`
    width: 400px;
    height: 100%;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white !important;
    color: black !important;
    border: 1px solid rgba(168,168,168,0.51);
    &:hover{
        box-shadow: -12px 11px 10px 0px rgba(168,168,168,0.51);
        -webkit-box-shadow: -12px 11px 10px 0px rgba(168,168,168,0.51);
        -moz-box-shadow: -12px 11px 10px 0px rgba(168,168,168,0.51);
    };
    box-shadow: -5px 10px 10px 10px rgba(168,168,168,0.5);
    -webkit-box-shadow: -5px 10px 10px 10px rgba(168,168,168,0.5);
    -moz-box-shadow: -5px 10px 10px 10px rgba(168,168,168,0.5);
`;
export const HomeLastEventsBodyHeader = styled.div`
    border: 1px  solid lightgrey;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 10px 10px 0px 0px;
`;
export const HomeLastEventsBodySections = styled.div`
    border: 1px  solid lightgrey;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 0 0 10px 10px;
`;
export const HomeLastEventsBodySectionList = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px;
`;
export const HomeLastEventsBodySectionListLabel = styled.div`
    margin-right: auto;
`;
export const HomeLastEventsBodySectionListValue = styled.div`
    margin-left: auto;
`;