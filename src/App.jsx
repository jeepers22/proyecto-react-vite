import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDatailContainer"
import Cart from "./components/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartContextProvider from "./components/CartContext";
// import { enviarProductos } from "../src/utils/productosToFirebase"

const App = () => {

	// enviarProductos()

	return (
		<CartContextProvider>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route path="/genero/:idGeneroParam" element={<ItemListContainer />} />
					<Route path="/pelicula/:idPeliculaParam" element={<ItemDetailContainer />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</CartContextProvider>
	)
}

export default App