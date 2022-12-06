import "./ItemListContainer.css"
import ItemList from "./ItemList"
import customFetch from "../utils/customFetch"
import catalogo from "../utils/catalogo"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const [peliculas, setPeliculas] = useState([])

    const { idGeneroParam } = useParams()

    // ComponentDidMount
    // useEffect(() => {
    //     customFetch(2000, catalogo)
    //         .then (response => setPeliculas(catalogo))
    //         .catch (err => console.log(err))
    // }, [])

    // ComponentDidUpdate
    useEffect(() => {
        customFetch(2000, catalogo.filter(pelicula => {
            if (idGeneroParam === undefined) return pelicula
            return pelicula.idGenero === parseInt(idGeneroParam)
        }))
            .then (response => setPeliculas(response))
            .catch (err => console.log(err))
    }, [peliculas])

    return (
        <div className="row catalogo_container">
        {
            <ItemList items= {peliculas} />
        }
        </div>
    )
}

export default ItemListContainer