import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { SLayout, SMain } from './styles';

const Layout = ({ children }) => {
  return (
   /* Rendering the Sidebar component and the children of the Layout component. */
    <SLayout>
      {/* Rendering the Sidebar component. */}
      <Sidebar />
      {/* Rendering the children of the Layout component. */}
      <SMain>{children}</SMain>
    </SLayout>
  );
}

export default Layout;
