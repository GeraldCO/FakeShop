import { Link } from 'react-router';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Cart from '../pages/Cart';
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <h1>PC components</h1>
            <ul className={styles.navLinks}>
                <li ><Link className={styles['nav-link']} to={"/"}>Home</Link></li>
                <li ><Link className={styles['nav-link']} to={"/products"}>Products</Link></li>
                <li ><Link className={styles['nav-link']} to={"/cart"}>Cart</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;