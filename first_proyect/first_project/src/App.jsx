import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
//@reach/router

import './style.css';

import Layout from './layout/Default';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Detail from './pages/Detail';

import Header from './Components/Header/index';

function App() {
  return (
    
    <BrowserRouter>
      <Header/>
      <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/contact" component={Contact}></Route>
    </Switch>
    </BrowserRouter>
  );
}
export default App;
