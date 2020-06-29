import React from 'react';
import NavBar from './NavBar'
/** Hacemos un componente children */

const Layout = ({children}) =>(
  <>
    {children}
      <NavBar />
  </>
);
  export default Layout;
