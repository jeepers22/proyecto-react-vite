import React from 'react'
import "./Item.css"

const Item = ({ titulo, genero, anio, resenia }) => {
    return (
        <div className="col-2 card">
            <div className="card_info">
                <h3>{titulo}</h3>
                <h5>{genero} - {anio}</h5>
                <p>{resenia}</p>
            </div>
        </div>
    )
}

export default Item