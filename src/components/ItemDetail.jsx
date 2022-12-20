import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import { NavLink } from "react-router-dom"
import ItemCount from './ItemCount'
import { useState } from "react"
import { CartContext } from './CartContext'
import { useContext } from 'react'

const ItemDetail = ({ item }) => {

    const [itemCount, setItemCount] = useState(0)

    const { addItem } = useContext(CartContext)

    const onAdd = (qty) => {
        setItemCount(qty)
        addItem(item, qty)
    }

    return (
        <Card style={{ width: '17rem' }}>
            <Card.Img variant="top" src={item.portada} />
            <Card.Body>
                <Card.Title>{item.titulo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.genero} - {item.anio}</Card.Subtitle>
                <Card.Text>{item.resenia}</Card.Text>
                {
                itemCount
                // Si tengo alguna cantidad seleccionada
                ? <NavLink to={`/cart`} href="#"><Button className="mx-5 mt-3" variant="danger">Checkout</Button></NavLink>
                // Si tengo 0 items agregados
                : <ItemCount onAdd={onAdd} />
                }
            </Card.Body>
        </Card>
    )
}

export default ItemDetail