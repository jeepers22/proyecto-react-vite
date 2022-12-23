import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Container from "react-bootstrap/Container"
import { collection, getDocs, where, query } from "firebase/firestore"
import { db } from "../utils/firebaseConfig"

const ItemListContainer = () => {

    const [peliculas, setPeliculas] = useState([])

    const { idGeneroParam } = useParams()

    // ComponentDidUpdate
    useEffect(() => {
        const getCollectionFromFirebase = async () => {
            let q
            if (idGeneroParam) {
                q = query(collection(db, "products"), where("idGenero", "==", parseInt(idGeneroParam)))
            } else {
                q = query(collection(db, "products"))
            }
            const queryDocsProducts = await getDocs(q)
            const products = queryDocsProducts.docs.map((doc) => (
                {
                    idPelicula: doc.id,
                    ...doc.data()
                }))
            return products
        }
        getCollectionFromFirebase()
            .then (result => setPeliculas(result))
            .catch (err => console.log(err))
    }, [idGeneroParam])

    return (
        <Container className="d-flex flex-wrap justify-content-center gap-4 mt-5">
            <ItemList items= {peliculas} />
        </Container>
    )
}

export default ItemListContainer