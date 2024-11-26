import React from "react";

// Cuando se hace clic en el boton "Agregar al Carrito" se llama onAddToCart que es la funcion del padre (ListaProductos)
const Productos = ({ product, onAddToCart }) => {
    return (
        <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <button onClick={() => onAddToCart(product)}>Agregar al Carrito</button>
        </div>
    );
};

export default Productos;