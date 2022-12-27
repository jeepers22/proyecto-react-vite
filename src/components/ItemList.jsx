import React from "react"
import Item from "./Item"

const ItemList = ({ items }) => {
    return (
        items.map(pelicula => (
            <Item
                key= {pelicula.idPelicula}
                id= {pelicula.idPelicula}
                titulo= {pelicula.titulo}
                genero= {pelicula.genero}
                anio= {pelicula.anio}
                precio= {pelicula.precio}
                stock= {pelicula.stock}
                resenia= {pelicula.resenia}
                portada= {pelicula.portada}
            />
        ))
    )
}

export default ItemList