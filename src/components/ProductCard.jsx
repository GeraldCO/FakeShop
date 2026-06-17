import { useState, useContext } from "react";
import { CartContext } from "../cartContext";
import './ProductCard.css';

const ProductCard = ({ product }) => {

    const {addToCart, cart} = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    function increaseQuantity() {
        setQuantity(quantity + 1);
    }

    function decreaseQuantity() {
        setQuantity(Math.max(1, quantity - 1));
    }

    return (
        <div className='product-card'>
            <img src={product.image} alt={product.name} />
            <h2>{product.title}</h2>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={decreaseQuantity}>-</button>
            <span> {quantity} </span>
            <button onClick={increaseQuantity}>+</button>
            <button onClick={() => {
                addToCart(product, quantity);
                setQuantity(1);
            }}>Add to Cart</button>
        </div>
    );
}

export default ProductCard;
