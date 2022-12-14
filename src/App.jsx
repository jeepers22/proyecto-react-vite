import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDatailContainer"
import Cart from "./components/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartContextProvider from "./components/CartContext";

const App = () => {

	return (
		<CartContextProvider>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route path="/categoria/:idCategoriaParam" element={<ItemListContainer />} />
					<Route path="/producto/:idProdParam" element={<ItemDetailContainer />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</CartContextProvider>
	)
}

export default App