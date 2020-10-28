import React from 'react';

import Encabezado from './Componentes/Encabezado';
import Producto from './Componentes/Producto';
import datos from './data.json';

function App() {
  return (
    <div className = "contenedor">
      <Encabezado />
      <Producto items={datos}/>
    </div>
  );
}

export default App;
