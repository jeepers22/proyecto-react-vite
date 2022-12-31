import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Container from "react-bootstrap/Container"
import { getDocFromFirebase } from "../utils/ABMFirebase"

const ItemDatailContainer = () => {

	const [prodEstado, setprodEstado] = useState({})

	const { idProdParam } = useParams()

	// ComponentDidUpdate
	useEffect(() => {
        getDocFromFirebase(idProdParam)
            .then (result => setprodEstado(result))
            .catch (err => console.log(err))
	}, [idProdParam])

	return (
		<Container className="d-flex justify-content-center">
			{
				prodEstado && <ItemDetail item= {prodEstado} />
			}
		</Container>
	)
}

export default ItemDatailContainer