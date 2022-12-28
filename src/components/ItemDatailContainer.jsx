import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Container from "react-bootstrap/Container"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../utils/firebaseConfig"

const ItemDatailContainer = () => {

	const [peliculaEstado, setPeliculaEstado] = useState({})

	const { idProdParam } = useParams()

	// ComponentDidUpdate
	useEffect(() => {
		const getDocFromFirebase = async () => {
			const docRef = doc(db, "products", idProdParam)
            const docProduct = await getDoc(docRef)
			if (docProduct.exists()) {
				return {
					idProd: docProduct.id,
					...docProduct.data()
				}
			} else {
				console.log("Intentando acceder a un Item inexistente")
			}
        }
        getDocFromFirebase()
            .then (result => setPeliculaEstado(result))
            .catch (err => console.log(err))
	}, [idProdParam])

	return (
		<Container className="d-flex justify-content-center">
			{
				peliculaEstado && <ItemDetail item= {peliculaEstado} />
			}
		</Container>
	)
}

export default ItemDatailContainer