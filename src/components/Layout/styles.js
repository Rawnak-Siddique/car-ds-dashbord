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