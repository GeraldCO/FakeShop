import './CartProductCard.css';
import {useContext} from "react";
import {CartContext} from "../cartContext";

const CartProductCard = ({ product }) => {
    const { removeFromCart } = useContext(CartContext);

    return (
        <div className='cart-product-card'>
            <img src={product.image} alt={product.image} />
            <div className='cart-product-info'>
                <h2>{product.title}</h2>
                <p>${product.price.toFixed(2)}</p>
                <p>Quantity: {product.quantity}</p>
                <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
            </div>
        </div>
    );
}

export default CartProductCard;
