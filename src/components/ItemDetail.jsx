import React from 'react'
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ item }) => {

    return (
        <Card style={{ width: '17rem' }}>
            <Card.Img variant="top" src={item.portada} />
            <Card.Body>
                <Card.Title>{item.titulo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.genero} - {item.anio}</Card.Subtitle>
                <Card.Text>{item.resenia}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail