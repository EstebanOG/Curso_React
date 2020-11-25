import React from 'react';
import PropTypes, { func } from 'prop-types';

import { Link } from 'react-router-dom';
import ButtonUI from '../../UI/Button';
import './style.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Product({
    id,
    onDelete,
    img,
    producto,
    precio,
    }){
    return(
    <Card style={{ width: '18rem' }}>
        <button className="delete-button" onClick={onDelete}>
                &times;
        </button> 
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{producto}</Card.Title>
            <Card.Text>
            {precio}
            </Card.Text>
            <Button variant="light"><Link to={'product/'+id}>Ver más detalles</Link></Button>
        </Card.Body>
    </Card>
        
        
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

/* <article className = "card">
            <button className="delete-button" onClick={onDelete}>
                &times;
            </button>  
            <div>
                <img src={img} alt="Product"/>
                <h2>{producto}</h2>
                <h4>{precio}</h4>
            </div>
            <Button>
                <Link to={'product/'+id}>Ver más detalles</Link>
            </Button>
        </article> */