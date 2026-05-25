import { useState } from "react";

const ProductCard = ({ product, addItemToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity == 1) {
            return;
        }
        setQuantity(quantity - 1);
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <button>-</button>
            <input type="number" value="0" />
            <button>+</button>
            <button onClick={() => addItemToCart(product)}>Add to Cart</button>
        </div>
    );
}

export default ProductCard;