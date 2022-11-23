import "./App.css"
import NavBar from "./components/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer"

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer
          greeting="Bienvenido al orígen de mi E-commerse!"
      />
    </div>
  )
}

export default App