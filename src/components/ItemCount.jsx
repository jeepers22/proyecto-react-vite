import React from "react"
import Button from "react-bootstrap/Button"
import { useState } from "react"

const ItemCount = ({ onAdd, stock }) => {

    const [count, setCount] = useState(0)

    const incrementarUnidadItem = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const restarUnidadItem = () => {
        count > 0 && setCount(count - 1)
    }

    return (
        <div className="d-flex flex-direction-row justify-content-end gap-1">
            <Button variant="warning" className="border-0" onClick={restarUnidadItem}>-</Button>
            <h5 className="m-2 my-auto">{count}</h5>
            <Button variant="warning" className="border-0" onClick={incrementarUnidadItem}>+</Button>
            {
            count
            // Si tengo alguna cantidad seleccionada
            ? <Button variant="warning" className="mx-3" onClick={() => onAdd(count)}>Agregar al carrito</Button>
            // Si tengo 0 items agregados
            : <Button variant="warning" className="mx-3" disabled>Agregar al carrito</Button>
            }
        </div>
    )
}

export default ItemCount