import React from 'react';

import './style.css';
import foto_src from '../../Images/Title.JPG';

function Header(props){
    return (
        <div className="header">
          <img src={foto_src} alt="Tienda saludable Colombia" />
        </div>
      );
}

export default Header;