import "./CartWidget.css"
import { GiShoppingCart } from 'react-icons/gi';
import { NavLink } from "react-router-dom";

const CartWidget = () => {
    return (
        <NavLink to={"/cart"} href="#">
            <div className="contador d-flex align-items-center"><GiShoppingCart className="logo-carrito"/></div>
        </NavLink>
    )
}

export default CartWidget