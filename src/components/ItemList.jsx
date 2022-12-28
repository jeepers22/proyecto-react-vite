import React from "react"
import Item from "./Item"

const ItemList = ({ items }) => {
    return (
        items.map(pelicula => (
            <Item
                key= {pelicula.idProd}
                id= {pelicula.idProd}
                nombre= {pelicula.nombre}
                categoria= {pelicula.categoria}
                anio= {pelicula.anio}
                precio= {pelicula.precio}
                stock= {pelicula.stock}
                descripcion= {pelicula.descripcion}
                portada= {pelicula.portada}
            />
        ))
    )
}

export default ItemList