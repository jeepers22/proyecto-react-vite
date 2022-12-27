import CartWidget from "./CartWidget"
import "./NavBar.css"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <NavLink to={"/"} className="nav-link-logo">
                        <Container className="logo-container d-flex flex-lg-row-reverse gap-3">
                            <span className="logo-text">FiGuReTTi</span>
                            <img className="logo-img" src="https://res.cloudinary.com/datqk3byv/image/upload/v1672166419/Cartas_Blancas_ey7k6s.svg" alt="Logo" />
                        </Container>
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="menu mx-auto text-center gap-md-3 gap-lg-4">
                            <NavLink to={"/genero/1"} className="nav-link" href="#">Albumes</NavLink>
                            <NavLink to={"/genero/2"} className="nav-link" href="#">Figuritas</NavLink>
                            <NavLink to={"/genero/3"} className="nav-link" href="#">Cartas</NavLink>
                        </Nav>
                        <Nav>
                            <CartWidget/>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar