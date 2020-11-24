import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

function Default({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
export default Default;