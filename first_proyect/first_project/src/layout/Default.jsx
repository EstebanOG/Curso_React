import React from 'react';

import Navbar from './Navbar';
import NavbarB from './NavbarBootstrap';
import Footer from './Footer';

function Default({ children }) {
  return (
    <>
      <NavbarB />
      <main>{children}</main>
      <Footer />
    </>
  );
}
export default Default;