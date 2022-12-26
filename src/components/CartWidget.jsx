import "./CartWidget.css"
import { GiShoppingCart } from 'react-icons/gi';
import { NavLink } from "react-router-dom";
import { useContext } from "react"
import { CartContext } from './CartContext'

const CartWidget = () => {

    const { countCartItems } = useContext(CartContext)

    return (
        <NavLink to={"/cart"} href="#" className="link-style">
            <div className="contador d-flex align-items-center"><GiShoppingCart className="logo-carrito"/>{countCartItems()}</div>
        </NavLink>
    )
}

export default CartWidget