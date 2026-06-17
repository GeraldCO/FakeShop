import { useState, useEffect } from 'react';
import NavBar from "../components/NavBar";
import fetchProducts from "../api/client";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../cartContext";
import { useContext } from "react";
import './Products.css';

const Products = () => {

const [products, setProducts] = useState([]);
const [isLoading, setIsLoading] = useState(true);
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


  if (isLoading) {
    return <p>Loading products...</p>;
  }

    return (
        <div className="products-container">
            {products.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                />
            ))}
        </div>
    );
}

export default Products;
