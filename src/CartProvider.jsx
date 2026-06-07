import {useState} from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {
        setCart((prevCart) => {
            const existing = (prevCart.find(
                (item)=> item.id === product.id)
            )
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

    const handleIncrease = (product) => {

    }

    const handleDecrease = (product) => {

    }



    return <CartContext
        value = {{
            cart, 
            addToCart, 
            handleIncrease,
            handleDecrease
        }}
            >
            {children}
    </CartContext>


}

export default CartProvider;
