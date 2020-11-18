import React from 'react';
import PropTypes, { func } from 'prop-types';

import './style.css';

function Product({
    onDelete,
    id,
    img,
    producto,
    precio,
    }){
    return(
        
        <article className = "card">
            <button className="delete-button" onClick={onDelete}>
                &times;
            </button>
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
    id: 0,
    img: '',
    producto: '',
    precio: '',
    
};

Product.propTypes = {
    
    onDelete: PropTypes.func,
    id: PropTypes.number.isRequired,
    img: PropTypes.string,
    producto: PropTypes.string.isRequired,
    precio: PropTypes.string.isRequired,
    
};

export default Product;