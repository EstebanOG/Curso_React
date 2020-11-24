import React from 'react';
import PropTypes, { func } from 'prop-types';

import { Link } from 'react-router-dom';

import './style.css';

function Product({
    id,
    onDelete,
    img,
    producto,
    precio,
    }){
    return(
        
        <article className = "card">
            <button className="delete-button" onClick={onDelete}>
                &times;
            </button>
            <Link to={'product/'+id}>Ver más detalles</Link>
            <div>
                <img src={img} alt="Product"/>
                <h2>{producto}</h2>
                <h4>{precio}</h4>
            </div>
        </article>
        
        
    );
}

Product.defaultProp={
    
    onDelete: function () {},
    img: '',
    producto: '',
    precio: '',
    
};

Product.propTypes = {
    
    onDelete: PropTypes.func,
    img: PropTypes.string,
    producto: PropTypes.string,
    precio: PropTypes.string,
    
};

export default Product;