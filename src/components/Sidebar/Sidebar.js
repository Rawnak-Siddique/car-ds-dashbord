import React, { useState } from 'react';
import { SDivider, SLink, SLinkContainer, SLinkIcon, SLinkLabel, SLinkNotification, SLogo, SLogoImg, SSidebar, SSidebarButton, SSidebarContainer, SSidebarContainerScroll, STheme, SThemeLabel, SThemeToggler, SToggleThumb } from './styles';
import logo from '../../assets/momin-logo.png';
import { AiOutlineHome, AiOutlineLeft, AiOutlineSetting } from 'react-icons/ai';
import { MdInventory, MdLogout } from "react-icons/md";
import { FaHandsHelping, FaRegCalendarAlt } from "react-icons/fa";
import { AiFillBook } from "react-icons/ai";
import { SiGoogleads } from "react-icons/si";
import { IoPeopleCircle } from "react-icons/io5";
import { useContext } from 'react';
import { ThemeContext } from '../../App';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    <SSidebar isOpen={sidebarOpen}>
      <>
        <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
          <AiOutlineLeft />
        </SSidebarButton>
      </>
      <SLogo>
        <SLogoImg src={logo} alt="logo" isOpen={sidebarOpen}/>
        {sidebarOpen && <h2>Dashboard</h2>}
      </SLogo>

      <SDivider />
      <SSidebarContainer>
        <SSidebarContainerScroll>
          {linkArray.map(({ icon, label, notification, to }) => (
            <SLinkContainer key={label} isActive={pathname === to} isOpen={sidebarOpen}>
              <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}} isOpen={sidebarOpen}>
                <SLinkIcon>{icon}</SLinkIcon>
                {sidebarOpen && (
                  <>
                    <SLinkLabel>{label}</SLinkLabel>
                    {/* if notifications is 0 or null then do not render*/}
                    {!!notification && (
                      <SLinkNotification>{notification}</SLinkNotification>
                    )}
                  </>
                )}
              </SLink>
            </SLinkContainer>
          ))}
        </SSidebarContainerScroll>
        <SDivider />
        {secondaryLinkArray.map(({ label, icon }) => (
          <SLinkContainer key={label} isOpen={sidebarOpen}>
            <SLink to="/" style={!sidebarOpen ? { width: `fit-content` } : {}}>
              <SLinkIcon>{icon}</SLinkIcon>
              {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
            </SLink>
          </SLinkContainer>
        ))}
        <SDivider />
        <STheme>
          {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
          <SThemeToggler isActive={theme === 'dark'} onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))} >
            <SToggleThumb style={theme === 'dark' ? { right: "1px" } : {}} />
          </SThemeToggler>
        </STheme>
      </SSidebarContainer>
      <SDivider />
    </SSidebar>
  );
};

const linkArray = [
  {
    label: "Dashboard",
    icon: <AiOutlineHome />,
    to: '/',
    notification: 0,
  },
  {
    label: "Inventory",
    icon: <MdInventory />,
    to: '/inventory',
    notification: 0,
  },
  {
    label: "Sales",
    icon: <FaHandsHelping />,
    to: '/sales',
    notification: 0,
  },
  {
    label: "Customer",
    icon: <IoPeopleCircle />,
    to: '/customer',
    notification: 0,
  },
  {
     label: "Bookings",
     icon: <AiFillBook />,
     to: '/Bookings',
     notification: 0,
  },
  {
    label: "Leads",
    icon: <SiGoogleads />,
    to: '/leads',
    notification: 0,
  },
  {
    label: "Events",
    icon: <FaRegCalendarAlt />,
    to: '/events',
    notification: 0,
  },
];

const secondaryLinkArray = [
  {
    label: "Settings",
    icon: <AiOutlineSetting />,
  },
  {
    label: "Logout",
    icon: <MdLogout />,
  },
];


export default Sidebar;
