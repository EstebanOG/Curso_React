import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Header from '../Components/Header/index';

import { Link } from 'react-router-dom';

function NavbarBootstrap(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
            <Navbar.Brand href="#home"><Header /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link ><Link to="/">INICIO</Link></Nav.Link>
                <Nav.Link ><Link to="/about">CATEGORÍAS DE LA TIENDA</Link></Nav.Link>
                <Nav.Link ><Link to="/contact">APRENDE MÁS</Link></Nav.Link>
                <Nav.Link ><Link to="/about">FINALIZAR COMPRA</Link></Nav.Link>
                <Nav.Link ><Link to="/about">MI CUENTA</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarBootstrap;