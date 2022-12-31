import React from "react"
import "../styles/Item.css"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import { NavLink } from "react-router-dom"

const Item = ({ id, nombre, categoria, anio, precio, stock, portada }) => {
    return (
        <Card className="card-container border-0">
            <Card.Header className="card-header bg-warning">{nombre}</Card.Header>
            <div className="card-img-container">
                <Card.Img className="card-img p-2" variant="top" src={portada} />
            </div>
            {/* <Card.Title className="card-title">{nombre}</Card.Title> */}
            <Card.Body className="px-2 py-3 text-center d-flex flex-column justify-content-center">
                <Card.Subtitle className="mb-2 ms-2 text-muted text-start">{categoria} - {anio}</Card.Subtitle>
                <Card.Text className="mt-2 fst-italic">Unidades disponibles: {stock}</Card.Text>
                <Card.Text className="fst-italic">Precio: ${precio}</Card.Text>
            </Card.Body>
            <NavLink to={`/producto/${id}`} href="#" className="text-end"><Button className="card-button fw-bold border-0 px-3 py-1">Detalles</Button></NavLink>
        </Card>
    )
}

export default Item