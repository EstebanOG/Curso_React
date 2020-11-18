import React, { Component } from 'react';
import products from '../../Data/data.json';

import './style.css';

// Other Components
import Product from '../Product/index';
import AddProduct from '../AddProduct/index';


//function Store({data}){
//    const listProducts = data.products.map((d,indx) => (
//        <Product key = {d.id} items={d}/>
//    ));
//    return(
//        <div className="grid-container">
//            {listProducts}
//        </div>
//    );    
//}

// My Class Component
class Store extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        addNewProduct: false,
        products,
      };
  
      this.handleShowForm = ev =>
        this.setState({ addNewProduct: !this.state.addNewProduct });
  
      this.hanldeAddP = this.hanldeAddP.bind(this);
    }
  
    handleDelete(id) {
      this.setState({
        products: this.state.products.filter(poduct => poduct.id !== id),
      });
    }
  
    hanldeAddP(newProduct) {
      newProduct.id = this.state.products.length + 1;
      this.setState({
        addNewProduct: false,
        products: this.state.products.concat([newProduct]),
      });
    }
  
    render() {
      const { title } = this.props;
      const { products, addNewProduct } = this.state;
  
      return (
        <>
          <h1>Welcome to {title}</h1>
          {addNewProduct ? (
            <AddProduct
              onSubmit={this.hanldeAddP}
              onCancel={this.handleShowForm}
            />
          ) : (
            <>
              <button className="add-button" onClick={this.handleShowForm}>
                Agregar Nuevo Producto
              </button>
              <div className="grid-container">
                {products.map(item => (
                  <Product
                    key={item.id}
                    onDelete={this.handleDelete.bind(this, item.id)}
                    {...item}
                  />
                ))}
              </div>
            </>
          )}
        </>
      );
    }
  }

export default Store;