import React, { Component } from 'react';
//import products from '../../Data/data.json';
import { getProducts,
  addProduct,
  deleteProducts, } from '../../Utils/HTTPClient';

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
        products:[],
      };
  
      this.handleShowForm = ev =>
        this.setState({ addNewProduct: !this.state.addNewProduct });
  
      this.hanldeAddP = this.hanldeAddP.bind(this);
    }
    
    // Esta función será llamada Cuando el componente ya se ha montado
    componentDidMount() {
      //console.log('El componente se ha montado');
      // Cuando se resuelva la promesa haga ésto
      getProducts().then(data => this.setState({ products: data }));
    }

    handleDelete(id) {
      // this.state.addNewProduct = false
      deleteProducts(id).then(data =>
        this.setState({
          products: this.state.products.filter(poduct => poduct.id !== id),
        })
      );
    }
  
    hanldeAddP(newProduct) {
      addProduct(newProduct).then(data =>
        this.setState({
          addNewProduct: false,
          products: [...this.state.products, data],
        })
      );
    }
  
    render() {
      //const { title } = this.props;
      const { products, addNewProduct } = this.state;
  
      return (
        <>
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
              {products.length === 0 ? (
              <p>Cargando...</p>
              ) : (
              <div className="grid-container">
                {products.map(item => (
                  <Product
                    key={item.id}
                    onDelete={this.handleDelete.bind(this, item.id)}
                    {...item}
                  />
                ))}
              </div>
              )}
            </>
          )}
        </>
      );
    }
  }

export default Store;