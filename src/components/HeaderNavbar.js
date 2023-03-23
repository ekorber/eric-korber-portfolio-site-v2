import './HeaderNavbar.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function HeaderNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home" className="navbar-text">Eric's Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#home" className="navbar-link">Game Development</Nav.Link>
                        <Nav.Link href="#home" className="navbar-link">About Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderNavbar;