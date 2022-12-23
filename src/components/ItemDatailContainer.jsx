import ItemDetail from "./ItemDetail"
// import catalogo from "../utils/catalogo"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Container from "react-bootstrap/Container"

const ItemDatailContainer = () => {

	const [peliculaEstado, setPeliculaEstado] = useState({})

	const { idPeliculaParam } = useParams()

	// ComponentDidUpdate
	// useEffect(() => {

	// }, [peliculaEstado])

	// VERSION CUSTOM FETCH
	// ComponentDidUpdate
	// useEffect(() => {
	// 	customFetch(500, catalogo.find(pelicula =>
	// 		pelicula.idPelicula === parseInt(idPeliculaParam)
	// 	))
	// 		.then(response => setPeliculaEstado(response))
	// 		.catch(err => console.log(err))
	// }, [peliculaEstado])

	return (
		<Container className="d-flex justify-content-center">
			<ItemDetail item= {peliculaEstado} />
		</Container>
	)
}

export default ItemDatailContainer