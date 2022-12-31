import React from "react"
import "../styles/ItemDetail.css"
import Button from "react-bootstrap/Button"
import { NavLink } from "react-router-dom"
import ItemCount from "./ItemCount"
import { useState, useContext } from "react"
import { CartContext } from "./CartContext"

const ItemDetail = ({ item }) => {

    const [itemCount, setItemCount] = useState(0)

    const { addItem } = useContext(CartContext)

    const onAdd = (qty) => {
        if (item.stock >= qty) {
            setItemCount(qty)
            addItem(item, qty)
        } else {
            alert(`No disponemos de ${qty} unidades de ${item.nombre}`)
        }
    }

    return (
        <div className="detail-container d-flex align-items-center gap-5">
            <div className="detail-img">
                <img src={item.portada} alt="Imagen Producto" />
            </div>
            <div className="detail-info d-flex flex-column justify-content-center gap-3">
                <h1>{item.nombre}</h1>
                <p className="fs-5">{item.descripcion}</p>
                <h5>Precio: ${item.precio}</h5>
                <h5>Unidades disponibles: {item.stock}</h5>
                <div className="detail-count mt-4 text-center">
                    {
                    itemCount
                    // Si tengo alguna cantidad seleccionada
                    ? <NavLink to={`/cart`} href="#"><Button variant="danger" className="mx-5 mt-3" >Checkout</Button></NavLink>
                    // Si tengo 0 items agregados
                    : <ItemCount onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail