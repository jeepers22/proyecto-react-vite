import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { NavLink } from "react-router-dom"

const Item = ({ id, titulo, genero, anio, portada }) => {
    return (
        <Card style={{ width: '17rem' }}>
            <Card.Img variant="top" src={portada} />
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{genero} - {anio}</Card.Subtitle>
            </Card.Body>
            <NavLink to={`/pelicula/${id}`} href="#"><Button>Detalles</Button></NavLink>
        </Card>
    )
}

export default Item