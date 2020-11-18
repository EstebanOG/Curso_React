import React from 'react';

import './style.css';
import Header from './Components/Header/index';
import Store from './Components/Store/index';
import products from './Data/data.json';

function App() {
  return (
    <div className = "contenedor">
      <Header/>
      <Store/>
    </div>
  );
}
//<Store data={products}/>
export default App;
