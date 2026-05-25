import { Outlet } from "react-router";
import { useState, useEffect } from 'react';
import NavBar from "../components/NavBar";
import fetchProducts from "../api/client";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../CartContext";
import { useContext } from "react";

const Products = () => {

const [products, setProducts] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const cartItems = useContext(CartContext);
const { addToCart } = useContext(CartContext);



  useEffect(() => {
    const loadProducts = async () => {
      try {
        fetchProducts()
          .then(data => setProducts(data))
          .catch(error => console.error('Error fetching products:', error));
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  function addItemToCart(product) {
    cartItems.push(product);
    console.log(cartItems);
  }


  if (isLoading) {
    return <p>Loading products...</p>;
  }

    return (
        <div>
            {products.map(product => (
                <ProductCard key={product.id} product={product} addItemToCart={addItemToCart} />
            ))}
        </div>
    );
}

export default Products;