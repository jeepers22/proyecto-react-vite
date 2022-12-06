import CartWidget from "./CartWidget"
import "./NavBar.css"
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark navegador">
            <div className="container d-flex justify-content-around">
                <NavLink to={"/"} className="navbar-brand logo" >MovieHouse</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex-column justify-content-md-end align-items-center gap-xl-5" id="navbarNavAltMarkup">
                    <div className="navbar-nav gap-md-3 text-center">
                        <NavLink to={"/genero/1"} className="nav-link" href="#">Comedia</NavLink>
                        <NavLink to={"/genero/2"} className="nav-link" href="#">Drama</NavLink>
                        <NavLink to={"/genero/3"} className="nav-link" href="#">Terror</NavLink>
                    </div>
                    <a className="logo-carrito" href="#"><CartWidget /></a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar