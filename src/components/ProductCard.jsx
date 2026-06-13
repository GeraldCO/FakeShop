import { useState, useContext } from "react";
import { CartContext } from "../cartContext";
import './ProductCard.css';

const ProductCard = ({ product, addItemToCart }) => {

    const {addToCart, cart, increaseQuantity, decreaseQuantity} = useContext(CartContext);

    return (
        <div className='product-card'>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <button>-</button>
            <span> {product.quantity ? product.quatity : 1} </span>
            <button>+</button>
            <button onClick={() =>addToCart(product, 1) }>Add to Cart</button>
        </div>
    );
}

export default ProductCard;
