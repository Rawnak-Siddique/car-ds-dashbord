import styled from "styled-components";
import { btnReset, v } from "../../styles/variables";
import { Link } from 'react-router-dom';

export const SSidebar = styled.div`
    width: ${({ isOpen }) => !isOpen ? 'auto' : v.sidebarWidth};
    background: ${({ theme }) => theme.bg};
    height: 100vh;
    padding: ${v.lgSpacing};

    position: relative;
`;
export const SSidebarContainer = styled.div`
    width: ${({ isOpen }) => !isOpen ? 'auto' : v.sidebarWidth};
    background: ${({ theme }) => theme.bg};
    height: 80vh;
    position: relative;
    
`;
export const SSidebarContainerScroll = styled.div`
    width: ${({ isOpen }) => !isOpen ? 'auto' : v.sidebarWidth};
    background: ${({ theme }) => theme.bg};
    height: 50vh;
    overflow: scroll;
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
`;
export const SLogo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 3px;

    img {
        max-width: 60px;
        height: auto;
    }
    cursor: pointer;

    margin-bottom: ${v.lgSpacing};
`;
export const SDivider = styled.div`
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.bg3};
    margin: ${v.lgSpacing} 0;
`;
export const SLinkContainer = styled.div`
    background: ${({ theme, isActive }) => !isActive ? `transparent` : theme.bg3};
    border-radius: ${v.borderRadius};
    margin: 8px 0;
    display: flex;
    justify-content: ${({ isOpen }) => !isOpen ? 'center' : v.justifyContent};

    :hover {
        box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
        background: #1FA2FF;  /* fallback for old browsers */ 
    }
`;
export const SLink = styled(Link)`
    display: flex;
    justify-content: ${({ isOpen }) => !isOpen ? 'center' : v.justifyContent};
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    padding: calc(${v.smSpacing} - 2px) 0;
`;
export const SLinkIcon = styled.div`
    padding: ${v.smSpacing} ${v.smSpacing};
    display: flex;

    svg {
        font-size: 20px;
    }
`;
export const SLinkLabel = styled.span`
    display: block;
    flex: 1;
    margin-left: ${v.smSpacing};
`;
export const SLinkNotification = styled.div`
    font-size: 14px;
    padding: calc(${v.smSpacing} / 2) ${v.smSpacing};
    border-radius: calc(${v.borderRadius} / 2);
    background : ${({ theme }) => theme.primary};
    color: white;

    margin-right: ${v.mdSpacing};
`;
export const STheme = styled.div` 
    display: flex;
    align-items: center;
    font-size: 16px;
`;
export const SThemeLabel = styled.span`
    display: block;
    flex: 1;
`;
export const SThemeToggler = styled.button`
    ${btnReset}
    margin: 0 auto;
    cursor: pointer;
    width: 36px;
    height: 20px;
    border-radius: 10px;
    background: ${({ theme, isActive }) => (!isActive ? theme.bg3 : theme.primary)};
    position: relative;
`;
export const SToggleThumb = styled.div`
    height: 18px;
    width: 18px;
    position: absolute;
    top: 1px;
    bottom: 1px;
    transition: 0.2s ease right;
    right: calc(100% -18px - 1px);
    border-radius: 50%;
    background: ${({ theme }) => theme.bg};
`;
export const SSidebarButton = styled.button`
    ${btnReset};
    position: absolute;
    top: ${v.xxlSpacing};
    right: ${({ isOpen }) => (isOpen ? '-16px' : '-40px')};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${({ theme }) => theme.bg};
    box-shadow: 0 0 4px ${({ theme }) => theme.bg3}, 0 0 7px ${({ theme }) => theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    transform: ${({ isOpen }) => (!isOpen ? 'rotate(180deg)' : 'initial')};
`;