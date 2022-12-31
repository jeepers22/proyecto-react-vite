import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Container from "react-bootstrap/Container"
import { getCollectionFromFirebase } from "../utils/ABMFirebase"

const ItemListContainer = () => {

    const [productos, setproductos] = useState([])

    const { idCategoriaParam } = useParams()

    // ComponentDidUpdate
    useEffect(() => {
        getCollectionFromFirebase(idCategoriaParam)
            .then (result => setproductos(result))
            .catch (err => console.log(err))
    }, [idCategoriaParam])

    return (
        <Container className="d-flex flex-wrap justify-content-center gap-4 mt-5">
            <ItemList items= {productos} />
        </Container>
    )
}

export default ItemListContainer