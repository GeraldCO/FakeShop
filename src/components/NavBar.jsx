import { Link } from 'react-router';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Cart from '../pages/Cart';
import './NavBar.css';
import { CartContext } from "../cartContext";
import { useContext } from "react";


const NavBar = () => {
    const {totalQuantity} = useContext(CartContext);

    return (
        <nav className='navbar'>
            <h1>PC components</h1>
            <ul className='navLinks'>
                <li ><Link className='nav-link' to={"/"}>Home</Link></li>
                <li ><Link className='nav-link' to={"/products"}>Products</Link></li>
                <li ><Link className='nav-link' to={"/cart"}>Cart ({totalQuantity})</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;