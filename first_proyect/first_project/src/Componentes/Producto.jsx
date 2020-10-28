import React from 'react';

import '../style.css';

function Producto(props){
    const listProductos = props.items.datos.map((d,indx) => (
        <div key={indx} id={d.id} className = "carta">
            <img src={d.img} alt="Producto"/>
            <h2>{d.producto}</h2>
            <h4>{d.precio}</h4>
        </div>
    ));
    return(
        <div class="grid-container">
            {listProductos}
        </div>
    );
}

export default Producto;