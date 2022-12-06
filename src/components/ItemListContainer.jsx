import "./ItemListContainer.css"
import ItemList from "./ItemList"
import customFetch from "../utils/customFetch"
import catalogo from "../utils/catalogo"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Container from "react-bootstrap/Container"

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
        <Container className="d-flex flex-wrap justify-content-center gap-4 mt-5">
            <ItemList items= {peliculas} />
        </Container>
    )
}

export default ItemListContainer