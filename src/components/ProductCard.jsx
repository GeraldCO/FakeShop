import { useState, useContext } from "react";
import { CartContext } from "../cartContext";
import './ProductCard.css';

const ProductCard = ({ product, addItemToCart }) => {

    const {addToCart, cart} = useContext(CartContext);
    const {quantity, setQuantity} = useState(1);

    return (
        <div className='product-card'>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
            <span> {quantity} </span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
            <button onClick={() =>addToCart(product, quantity) }>Add to Cart</button>
        </div>
    );
}

export default ProductCard;
