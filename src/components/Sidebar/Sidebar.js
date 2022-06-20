import React, { useState } from 'react';
import { SDivider, SLink, SLinkContainer, SLinkIcon, SLinkLabel, SLinkNotification, SLogo, SSidebar, SSidebarButton, STheme, SThemeLabel, SThemeToggler, SToggleThumb } from './styles';
import logo from '../../assets/2022-06-19 12 49 52.png';
import { AiOutlineHome, AiOutlineLeft, AiOutlineSetting } from 'react-icons/ai';
import { MdInventory, MdLogout } from "react-icons/md";
import { FaHandsHelping, FaRegCalendarAlt, FaUsersCog } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { SiGoogleads } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import { useContext } from 'react';
import { ThemeContext } from '../../App';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const {setTheme, theme} = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {pathname} = useLocation();
  return (
    <SSidebar  isOpen={sidebarOpen}>
      <>
        <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
          <AiOutlineLeft />
        </SSidebarButton>
      </>
      <SLogo>
        <img src={logo} alt="logo" />
        {sidebarOpen && <h1>Dashboard</h1>}
      </SLogo>
      <SDivider />
      {linkArray.map(({icon, label, notification, to}) => (
      <SLinkContainer key={label} isActive={pathname ===to}>
        <SLink to={to} style={!sidebarOpen ? {width: `fit-content`} : {}}>
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
      <SDivider />
      {secondaryLinkArray.map(({label, icon}) => (
        <SLinkContainer key={label}>
          <SLink to="/" style={!sidebarOpen ? {width: `fit-content`} : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      <STheme>
        {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
        <SThemeToggler isActive={theme === 'dark'} onClick={() =>setTheme((p) => (p === "light" ?  "dark" : "light"))} >
          <SToggleThumb style={theme === 'dark' ? {right: "1px"} : {}} />
        </SThemeToggler>
      </STheme>
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
    notification: 1,
  },
  {
    label: "Repairs",
    icon: <FaUsersCog />,
    to: '/repairs',
    notification: 2,
  },
  {
    label: "Sales",
    icon: <FaHandsHelping />,
    to: '/sales',
    notification: 3,
  },
  {
    label: "Vendors",
    icon: <IoIosPeople />,
    to: '/vendors',
    notification: 4,
  },
  {
    label: "FB Market",
    icon: <ImFacebook2 />,
    to: '/',
    notification: 0,
  },
  {
    label: "Leads",
    icon: <SiGoogleads />,
    to: '/leads',
    notification: 5,
  },
  {
    label: "Events",
    icon: <FaRegCalendarAlt />,
    to: '/events',
    notification: 6,
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
