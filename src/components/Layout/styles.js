import styled from "styled-components";

import { v } from "../../styles/variables";

export const SLayout = styled.div`
    display: flex;
`;
export const SMain = styled.main`
    padding: calc(${v.smSpacing} * 2);
    min-width: calc(100vw - ${v.sidebarWidth});
    width: 92%;
    height: 100vh;
    h1 {
        font-size: 14px;
    }
`;
export const SSTop = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
export const SBody = styled.div`
    display: flex;
    flex-direction: column;
    min-width: calc(100vw - ${v.sidebarWidth});
    width: 100vw;
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