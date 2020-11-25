import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//@reach/router
import 'bootstrap/dist/css/bootstrap.min.css';
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
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/product/:id" component={Detail}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
