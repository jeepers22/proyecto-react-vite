import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Container from "react-bootstrap/Container"
import { collection, getDocs, where, query } from "firebase/firestore"
import { db } from "../utils/firebaseConfig"

const ItemListContainer = () => {

    const [productos, setproductos] = useState([])

    const { idCategoriaParam } = useParams()

    // ComponentDidUpdate
    useEffect(() => {
        const getCollectionFromFirebase = async () => {
            let q
            if (idCategoriaParam) {
                q = query(collection(db, "products"), where("idCategoria", "==", parseInt(idCategoriaParam)))
            } else {
                q = query(collection(db, "products"))
            }
            const queryDocsProducts = await getDocs(q)
            const products = queryDocsProducts.docs.map((doc) => (
                {
                    idProd: doc.id,
                    ...doc.data()
                }))
            return products
        }
        getCollectionFromFirebase()
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