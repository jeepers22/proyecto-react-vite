import CartWidget from "./CartWidget"
import "./NavBar.css"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <NavLink to={"/"} className="navbar-brand logo" >MovieHouse</NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto text-center gap-md-3 gap-lg-4">
                            <NavLink to={"/genero/1"} className="nav-link" href="#">Comedia</NavLink>
                            <NavLink to={"/genero/2"} className="nav-link" href="#">Drama</NavLink>
                            <NavLink to={"/genero/3"} className="nav-link" href="#">Terror</NavLink>
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