import React from "react"
import Button from "react-bootstrap/Button"
import { useState } from "react"

const ItemCount = ({ onAdd }) => {

    const [count, setCount] = useState(0)

    const incrementarUnidadItem = () => {
        setCount(count + 1)
    }

    const restarUnidadItem = () => {
        count > 0 && setCount(count - 1)
    }

    return (
        <div className="d-flex flex-direction-row">
            <button variant="grey" onClick={restarUnidadItem}>-</button>
            <h5 className="m-2 my-auto">{count}</h5>
            <button variant="grey" onClick={incrementarUnidadItem}>+</button>
            {
            count
            // Si tengo alguna cantidad seleccionada
            ? <Button className="mx-3" onClick={() => onAdd(count)}>Agregar al carrito</Button>
            // Si tengo 0 items agregados
            : <Button className="mx-3" disabled>Agregar al carrito</Button>
            }
        </div>
    )
}

export default ItemCount