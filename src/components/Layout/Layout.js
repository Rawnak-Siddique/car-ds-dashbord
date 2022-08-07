import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { SBody, SLayout, SMain, SSTop, SSTopSections, SSTopSectionsIcon, SSTopSectionsValues } from './styles';
import { BsPersonSquare } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { VISIT_URL } from '../../variables/variables';

const Layout = ({ children }) => {
  const handleOpenWebsite = () => {
    window.open(VISIT_URL);
  };
  return (
   /* Rendering the Sidebar component and the children of the Layout component. */
    <SLayout>
      {/* Rendering the Sidebar component. */}
      <Sidebar />
      {/* Rendering the children of the Layout component. */}
      <SBody>
        <SSTop>
          <SSTopSections>
              <SSTopSectionsIcon><AiOutlineQuestionCircle /></SSTopSectionsIcon>
              <SSTopSectionsValues>Help Center</SSTopSectionsValues>
            </SSTopSections>
          <SSTopSections onClick={handleOpenWebsite} style={{
            cursor: 'pointer'
          }}>
              <SSTopSectionsIcon><FaExternalLinkAlt /></SSTopSectionsIcon>
              <SSTopSectionsValues>Vist Website</SSTopSectionsValues>
          </SSTopSections>
          <SSTopSections>
            <SSTopSectionsIcon><BsPersonSquare /></SSTopSectionsIcon>
            <SSTopSectionsValues>Arif Masood</SSTopSectionsValues>
          </SSTopSections>
        </SSTop>
        <SMain>{children}</SMain>
      </SBody>
    </SLayout>
  );
}

export default Layout;
