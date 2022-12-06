import "./ItemDetailContainer.css"
import ItemDetail from "./ItemDetail"
import customFetch from "../utils/customFetch"
import catalogo from "../utils/catalogo"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ItemDatailContainer = () => {

	const [peliculaEstado, setPeliculaEstado] = useState({})

	const { idPeliculaParam } = useParams()

	// ComponentDidUpdate
	useEffect(() => {
		customFetch(2000, catalogo.find(pelicula =>
			pelicula.idPelicula === parseInt(idPeliculaParam)
		))
			.then(response => setPeliculaEstado(response))
			.catch(err => console.log(err))
	}, [peliculaEstado])

	return (
		<div className="row catalogo_container">
        {
			<ItemDetail item= {peliculaEstado} />
        }
        </div>
	)
}

export default ItemDatailContainer