import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({ item }) => {

    return (
        <div className="col-2 card">
            <div className="card_info">
                <h3>{item.titulo}</h3>
                <h5>{item.genero} - {item.anio}</h5>
                <p>{item.resenia}</p>
            </div>
        </div>
    )
}

export default ItemDetail