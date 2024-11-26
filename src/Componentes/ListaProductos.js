import React, { Component } from "react";
import Product from "./Productos";

class ListaProductos extends Component {
    state = {
        // Inicializamos con algunos articulos.
        products: [
            { id: 1, name: "Guantes de Boxeo", price: 10000},
            { id: 2, name: "Saco de Boxeo", price: 65000},
            { id: 3, name: "Zapatillas de Boxeo", price: 85000},
        ],
        cart: [],
    };

    // Usamos this.setState({}) para mantener actualizado el estado del carrito
    addToCart = (product) => {
        this.setState((prevState) => ({
            cart: [...prevState.cart, product],
        }));
    };

    // Utilizamos map() para recorrer la lista de productos para renderizar un componente producto para cada uno
    render() {
        return (
            <div>
                <h1>Lista de Productos</h1>
                {this.state.products.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        onAddToCart={this.addToCart}
                    />
                ))}
                <h2>Carrito:</h2>
                <ul>
                    {this.state.cart.map((item, index) => (
                        <li key={index}>
                            {item.name} - ${item.price}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
      
export default ListaProductos;