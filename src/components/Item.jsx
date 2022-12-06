import React from 'react'
import Card from 'react-bootstrap/Card';

const Item = ({ titulo, genero, anio, resenia, portada }) => {
    return (
        <Card style={{ width: '17rem' }}>
            <Card.Img variant="top" src={portada} />
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{genero} - {anio}</Card.Subtitle>
                <Card.Text>{resenia}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Item