import './HeaderNavbar.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

function HeaderNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand className="navbar-brand">Eric's Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <NavLink to="/"
                        className={({ isActive, isPending }) =>
                        isPending ? "navbar-link" : isActive ? "navbar-link-highlighted" : "navbar-link"
                        }>Game Development</NavLink>
                        
                        <NavLink to="/about"
                        className={({ isActive, isPending }) =>
                            isPending ? "navbar-link" : isActive ? "navbar-link-highlighted" : "navbar-link"
                        }>About Me</NavLink>

                        <NavLink to="/contact"
                        className={({ isActive, isPending }) =>
                            isPending ? "navbar-link" : isActive ? "navbar-link-highlighted" : "navbar-link"
                        }>Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderNavbar;