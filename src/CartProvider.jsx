import {useState} from "react";
import { CartContext } from "./cartContext";

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const totalQuantity = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const addToCart = (product, quantity) => {
        setCart((prevCart) => {
            const existing = (prevCart.find((item)=> item.id === product.id));
            
            if(existing) {
                return prevCart.map((item) => 
                    item.id === product.id ? 
                    {
                        ...item,
                        quantity : quantity
                    } : item
                )
            }
        return [
            ...prevCart,{
                ...product,
                quantity: quantity
            }
        ];
        });
    };

    
    return <CartContext
        value = {{
            cart,
            totalQuantity,
            addToCart
        }}
            >
            {children}
    </CartContext>


}

export default CartProvider;
