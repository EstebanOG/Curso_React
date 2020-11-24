import React from 'react';

function Detail({ match }) {
  const { id } = match.params;
  return (
    <div>
      <h3>Está es la vista de Detalle del producto {id}</h3>
    </div>
  );
}

export default Detail;