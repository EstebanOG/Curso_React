import React, { Component } from 'react';

import './style.css';
class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: '',
      producto: '',
      precio: '',
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleForm(ev) {
    ev.preventDefault();
    this.props.onSubmit(this.state);
  }

  handleInput(ev) {
    const inputName = ev.target.name;
    this.setState({
      [inputName]: ev.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleForm.bind(this)}>
        <div className="form-group">
          <label htmlFor="producto">Nombre del producto: </label>
          <input type="text" name="producto" required onChange={this.handleInput} />
        </div>

        <div className="form-group">
          <label htmlFor="img">Imagen: </label>
          <input type="text" name="img" required onChange={this.handleInput} />
        </div>

        <div className="form-group">
          <label htmlFor="precio">Precio: </label>
          <input type="text" name="precio" required onChange={this.handleInput} />
        </div>

        <div className="form-group">
          <button className="send-button">Agregar</button>
          <button className="cancel-button" onClick={this.props.onCancel}>Cancelar</button>
        </div>
      </form>
    );
  }
}

export default AddProduct;