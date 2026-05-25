import { Link } from 'react-router';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Cart from '../pages/Cart';

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>PC components</h1>
            <ul className="nav-links">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/products"}>Products</Link></li>
                <li><Link to={"/cart"}>Cart</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;