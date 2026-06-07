import { useContext } from "react";
import { CartContext } from "../CartContext";

const Cart = () => {
    const {cart} = useContext(CartContext);

    return <div>
        {console.log(cart)}
    </div>
}

export default Cart;
