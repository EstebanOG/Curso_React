import React from 'react';

import '../style.css';
import foto_src from '../Images/Title.JPG';

function Encabezado(props){
    return (
        <div className="encabezado">
          <img src={foto_src} alt="Tienda saludable Colombia" />
        </div>
      );
}

export default Encabezado;