import { useContext } from "react";
import { CartContext } from "../cartContext";

const Cart = () => {
    const {cart} = useContext(CartContext);

    return <div>
        {console.log(cart)}
        {console.log("the amount of items in the cart is: " + cart.length)}

    </div>
}

export default Cart;
