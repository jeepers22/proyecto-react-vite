import React from 'react'
import { CartContext } from './CartContext'
import { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import { serverTimestamp, doc, setDoc, collection  } from 'firebase/firestore'
import { db } from '../utils/firebaseConfig'

const Cart = () => {

    const { clearCart, cartItems, calcTotalPrice, removeItem } = useContext(CartContext)

    const crearOrdenDeCompra = () => {
        const orden = {
            comprador: {
                nombre: "Alex",
                telefono: "+51 1 2864758",
                email: "alex@coderhouse.com"
            },
            fecha: serverTimestamp(),
            items: cartItems.map(item => ({
                id: item.idPelicula,
                titulo: item.titulo,
                precio: item.precio,
                cantidad: item.qty
            })),
            total: calcTotalPrice()
        }

        const sendOrderToFireStore = async() => {
            const newProductRef = doc(collection(db, "orders"))
            await setDoc(newProductRef, orden)
            return newProductRef
        }

        sendOrderToFireStore()
            .then(result => {
                alert(`Compra exitosa, se generó la orden de compra nro: ${result.id}`)
                clearCart()
            })
            .catch(err => console.log(err))
    }

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
            <Button variant="dark" onClick={crearOrdenDeCompra}>Finalizar compra</Button>
        </>
        // Si tengo 0 items
        : <p>El carrito se encuentra vacío</p>
    )
}
export default Cart