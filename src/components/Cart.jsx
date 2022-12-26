import React from 'react'
import { CartContext } from './CartContext'
import { useContext } from 'react'
import Button from 'react-bootstrap/Button'

const Cart = () => {

    const { clearCart, cartItems, calcTotalPrice, removeItem } = useContext(CartContext)

    return (
        cartItems.length
        // Si hay items en el carrito
        ? <>
            <Button variant="danger" onClick= {clearCart}>Vaciar carrito</Button>
            <ul>
            {cartItems.map(item =>
                <li key={item.idPelicula}>
                    <div>
                        <h4>{item.titulo}</h4>
                        <p>Cant: {item.qty}</p>
                        <p>Precio unitario: {item.precio}</p>
                        <Button variant="danger" onClick= {() => removeItem(item.idPelicula)}>Eliminar</Button>
                    </div>
                </li>
            )}
            </ul>
            <h3>Total compra: ${calcTotalPrice()}</h3>
        </>
        // Si tengo 0 items
        : <p>El carrito se encuentra vacío</p>
    )
}
export default Cart