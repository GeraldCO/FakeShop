import Products from "./pages/Products"; 
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import App from "./App";


const routes = [
    {
        path : "/",
        element: <App />,
        children : [
            {
                path : "/products",
                element: <Products />
            },{
                path : "/cart",
                element: <Cart />
            }
        ]
    }
]

export default routes;