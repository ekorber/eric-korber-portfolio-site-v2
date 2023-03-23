import './HeaderNavbar.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function HeaderNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container className='justify-content-center'>
                <Navbar.Brand href="#home" className="navbar-text">Eric's Portfolio</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default HeaderNavbar;