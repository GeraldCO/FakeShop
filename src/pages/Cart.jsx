import { useContext } from "react";
import { CartContext } from "../cartContext";
import './Cart.css';
import CartProductCard from "../components/CartProductCard";

const Cart = () => {
const {cart} = useContext(CartContext);

    return <div>
        {/* {console.log(cart)} */}
        {   cart.map(item => (
            <CartProductCard key={item.id} product={item} />
        ))}
    </div>
}

export default Cart;
