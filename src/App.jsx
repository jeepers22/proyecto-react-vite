import "./App.css"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDatailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {

	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/genero/:idGeneroParam" element={<ItemListContainer />} />
				<Route path="/pelicula/:idPeliculaParam" element={<ItemDetailContainer />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App