import React from "react"
import { CartContext } from "./CartContext"
import { useContext } from "react"
import Button from "react-bootstrap/Button"
import { serverTimestamp, doc, setDoc, collection, updateDoc, increment } from "firebase/firestore"
import { db } from "../utils/firebaseConfig"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Cart = () => {

    const { clearCart, cartItems, calcTotalPrice, removeItem } = useContext(CartContext)

    const MySwal = withReactContent(Swal)

    const mostrarAlert = (titulo, msjSecundario, icono) => {
        MySwal.fire(
            titulo,
            msjSecundario,
            icono
        )
    }

    const crearOrdenDeCompra = () => {
        const orden = {
            comprador: {
                nombre: "Alex",
                telefono: "+51 1 2864758",
                email: "alex@coderhouse.com"
            },
            fecha: serverTimestamp(),
            items: cartItems.map(item => ({
                id: item.idProd,
                nombre: item.nombre,
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
                mostrarAlert("Compra exitosa", `se generó la orden de compra nro: ${result.id}`, "success")

                // Actualizando stock
                const updateOrderFirestore = async(item) => {
                    const itemRef = doc(db, "products", item.idProd)
                    await updateDoc(itemRef, {
                        stock: increment(-item.qty)
                    })
                    return itemRef
                }

                cartItems.forEach((item) =>
                    updateOrderFirestore(item)
                        .then(result => console.log("Stock actualizado correctamente")) // ! QUE PONGO EN EL THEN???????? **************
                        .catch(err => console.log(err))
                )

                // Vaciando carrito
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
                <li key={item.idProd}>
                    <div>
                        <h4>{item.nombre}</h4>
                        <p>Cant: {item.qty}</p>
                        <p>Precio unitario: {item.precio}</p>
                        <Button variant="danger" onClick= {() => removeItem(item.idProd)}>Eliminar</Button>
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