import CartWidget from "./CartWidget"
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark navegador">
            <div className="container d-flex justify-content-around">
                <a className="navbar-brand logo" href="#">el4Set</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex-column justify-content-md-end align-items-center gap-5" id="navbarNavAltMarkup">
                    <div className="navbar-nav gap-md-3 text-center">
                        <a className="nav-link" href="#">Inicio</a>
                        <a className="nav-link" href="#">Nosotros</a>
                        <a className="nav-link" href="#">Productos</a>
                        <a className="nav-link" href="#">Contacto</a>
                    </div>
                    <a className="logo-carrito" href="#"><CartWidget /></a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar