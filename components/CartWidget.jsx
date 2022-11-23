import "./CartWidget.css"
import { GiShoppingCart } from 'react-icons/gi';

const CartWidget = () => {
    return (
        <div className="contador d-flex align-items-center"><GiShoppingCart className="logo-carrito"/></div>
    )
}

export default CartWidget