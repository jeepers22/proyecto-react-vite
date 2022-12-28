import React from "react"
import Item from "./Item"

const ItemList = ({ items }) => {
    return (
        items.map(prod => (
            <Item
                key= {prod.idProd}
                id= {prod.idProd}
                nombre= {prod.nombre}
                categoria= {prod.categoria}
                anio= {prod.anio}
                precio= {prod.precio}
                stock= {prod.stock}
                descripcion= {prod.descripcion}
                portada= {prod.portada}
            />
        ))
    )
}

export default ItemList