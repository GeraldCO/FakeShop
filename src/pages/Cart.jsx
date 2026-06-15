import { useContext } from "react";
import { CartContext } from "../cartContext";

const Cart = () => {
    const {cart, totalQuantity} = useContext(CartContext);

    return <div>

    </div>
}

export default Cart;
