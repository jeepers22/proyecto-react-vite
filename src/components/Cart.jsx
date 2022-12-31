import React from "react"
import "../styles/Cart.css"
import { GiShoppingCart } from "react-icons/gi";
import { CartContext } from "./CartContext"
import { useContext } from "react"
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button"
import { serverTimestamp, doc, setDoc, collection, updateDoc, increment } from "firebase/firestore"
import { db } from "../utils/firebaseConfig"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Cart = () => {

    const { clearCart, cartItems, calcTotalPrice, removeItem } = useContext(CartContext)

    const MySwal = withReactContent(Swal)

    const mostrarAlertBasico = (titulo, msjSecundario, icono) => {
        MySwal.fire(
            titulo,
            msjSecundario,
            icono
        )
    }

    const mostrarAlertDeleteItem = (item) => {
        MySwal.fire({
            title: 'Está seguro?',
            text: `Está por eliminar el ítem ${item.nombre} del carrito`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#187c04',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, quitar ítem'
        }).then((result) => {
            if (result.isConfirmed) {
                MySwal.fire({
                    title: 'Item eliminado',
                    icon: 'success'
                })
                removeItem(item.idProd)
            }
        })
    }

    const mostrarAlertEmptyCart = () => {
        MySwal.fire({
            title: 'Está seguro?',
            text: `Está por vaciar el contenido de su carrito`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#187c04',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, vaciar carrito'
        }).then((result) => {
            if (result.isConfirmed) {
                MySwal.fire({
                    title: 'Carrito eliminado',
                    icon: 'success'
                })
                clearCart()
            }
        })
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
                mostrarAlertBasico("Compra exitosa", `se generó la orden de compra nro: ${result.id}`, "success")

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
            ? <Container className="cart-container d-flex flex-column align-items-center mt-5 gap-3">
                <div className="cart-title d-flex align-items-center justify-content-center gap-3">
                    <h1 className="mb-0">SU CARRITO</h1>
                    <Button variant="danger" className="p-0 px-2" onClick= {mostrarAlertEmptyCart}>Vaciar carrito</Button>
                    {/* <Button variant="danger" className="px-2 pt-0 align-middle" style={{height: 30}} onClick= {mostrarAlertEmptyCart}>Vaciar carrito</Button> */}
                </div>
                <ul className="p-0">
                    <Container className="item-list d-flex flex-column mt-4 gap-2">
                        {cartItems.map(item =>
                                <li key={item.idProd}>
                                    <Row className="cart-row d-flex flex-column">
                                        <Col className="ps-3 p-1 bg-warning">
                                            <h5 className="mb-0">{item.nombre}</h5>
                                        </Col>
                                        <div className="item-container d-flex align-items-center gap-5 px-3 py-2">
                                            <Col xs={2} className="cart-img">
                                                <img src={item.portada} alt="Foto Producto" />
                                            </Col>
                                            <Col xs={7}className="item-info text-center d-flex flex-column fst-italic gap-2">
                                                <p className="mb-0">Cant: {item.qty}</p>
                                                <p className="mb-0">Precio unitario: {item.precio}</p>
                                                <h5 className="mb-0 mt-2">Subtotal: {item.qty * item.precio}</h5>
                                            </Col>
                                            <Col xs={1} className="text-center">
                                                <Button variant="danger" onClick= {() => mostrarAlertDeleteItem(item)}>X</Button>
                                            </Col>
                                        </div>
                                    </Row>
                                </li>
                        )}
                    </Container>
                    <Row className="mt-3 mx-2 py-1 d-flex flex-column gap-3">
                        <Col className="text-end"><h4 className="mb-0 fs-3">Total compra: ${calcTotalPrice()}</h4></Col>
                        <Col className="text-end" ><Button variant="dark" className="align-self-end" onClick={crearOrdenDeCompra}>Finalizar compra</Button></Col>
                    </Row>
                </ul>
            </Container>
            // Si tengo 0 items
            : <Container fluid className="cart-empty d-flex flex-column justify-content-center align-items-center">
                <GiShoppingCart className="logo-empty" />
                <p className="fs-5 fw-bold">El carrito se encuentra vacío</p>
            </Container>
    )
}
export default Cart