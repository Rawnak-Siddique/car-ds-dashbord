import styled from "styled-components";

import { v } from "../../styles/variables";

export const SLayout = styled.div`
    display: flex;
`;
export const SMain = styled.main`
    padding: calc(${v.smSpacing} * 2);
    min-width: calc(100vw - ${v.sidebarWidth});
    width: 100%;
    height: 100vh;
    padding-top: 0;
    padding-bottom: 0;
    h1 {
        font-size: 14px;
    }
`;
export const SSTop = styled.div`
    height: 30px;
    width: 100%;
    padding-right: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
export const SBody = styled.div`
    display: flex;
    flex-direction: column;
    min-width: calc(100vw - ${v.sidebarWidth});
    max-width: 100vw;
    flex-grow: 1;
    width: 100%;
    height: 100vh;
`;
export const SSTopSections = styled.div`
    display: flex;
    width: 200px;
    height: 100%;
`;
export const SSTopSectionsIcon = styled.div`
    width: 30%;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const SSTopSectionsValues = styled.div`
    width: 70%;
    padding: 5px;
    text-transform: uppercase;
`;