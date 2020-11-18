import React, { Component } from 'react';

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
          <label htmlFor="producto">Name: </label>
          <input type="text" name="producto" onChange={this.handleInput} />
        </div>

        <div className="form-group">
          <label htmlFor="img">Image: </label>
          <input type="text" name="img" onChange={this.handleInput} />
        </div>

        <div className="form-group">
          <label htmlFor="precio">Precio: </label>
          <input type="text" name="precio" onChange={this.handleInput} />
        </div>

        <div className="form-group">
          <button>Enviar</button>
          <button onClick={this.props.onCancel}>Cancelar</button>
        </div>
      </form>
    );
  }
}

export default AddProduct;