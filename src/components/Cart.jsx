import React from 'react'
import { CartContext } from './CartContext'
import { useContext } from 'react'

const Cart = () => {

    const { cartItems } = useContext(CartContext)

    return (
        <ul>
            {
                cartItems.length
                // Si hay items en el carrito
                ? cartItems.map(item => <li key={item.idPelicula}>{item.titulo} - {item.qty}</li>)
                // Si tengo 0 items
                : <p>El carrito se encuentra vacío</p>
            }
        </ul>
    )
}
export default Cart