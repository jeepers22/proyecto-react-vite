import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">4set</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" href="#">Inicio</a>
                        <a className="nav-link" href="#">Deportes</a>
                        <a className="nav-link" href="#">Juventud</a>
                        <a className="nav-link" href="#">Contacto</a>
                        <a className="nav-link p-0" href="#"><CartWidget /></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar