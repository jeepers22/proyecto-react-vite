import React from "react"
import "../styles/Item.css"
import Card from "react-bootstrap/Card";
//! import Button from "react-bootstrap/Button"
import { NavLink } from "react-router-dom"

const Item = ({ id, nombre, categoria, anio, precio, stock, portada }) => {
    return (
        <Card className="card-container">
            <div className="card-img-container">
                <Card.Img className="card-img" variant="top" src={portada} />
            </div>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{categoria} - {anio}</Card.Subtitle>
                <Card.Text>Precio: {precio}</Card.Text>
                <Card.Text>Unidades: {stock}</Card.Text>
            </Card.Body>
            {/* <NavLink to={`/pelicula/${id}`} href="#"><Button>Detalles</Button></NavLink> */}
            <NavLink to={`/pelicula/${id}`} href="#"><button className="card-button">Detalles</button></NavLink>
        </Card>
    )
}

export default Item