import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className='d-flex justify-content-around'>
                    <Navbar.Brand href="#home">Solo Traveler</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home"><Link className='text-white text-decoration-none' to='/home'>Home</Link></Nav.Link>
                            <Nav.Link as={Link} to="/destinations"><Link className='text-white text-decoration-none' to='/destinations'>Destinations</Link></Nav.Link>
                            <Nav.Link as={Link} to="/Blog"><Link className='text-white text-decoration-none' to='/blog'>Blog</Link></Nav.Link>
                            <Nav.Link as={Link} to="/About"><Link className='text-white text-decoration-none' to='/about-us'>About US</Link></Nav.Link>
                            <Nav.Link as={Link} to="/Contact"><Link className='text-white text-decoration-none' to='/contact-us'>Contact US</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Sign In</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Sign out
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <Navbar bg="dark" variant="dark">
                <Container className='d-flex justify-content-around'>
                    <Navbar.Brand href="#home">Solo Traveler</Navbar.Brand>
                    <Nav className="">
                        <Nav.Link href="#home"><Link className='text-white text-decoration-none' to='/home'>Home</Link></Nav.Link>
                        <Nav.Link href="#destinations"><Link className='text-white text-decoration-none' to='/destinations'>Destinations</Link></Nav.Link>
                        <Nav.Link href="#Blog"><Link className='text-white text-decoration-none' to='/blog'>Blog</Link></Nav.Link>
                        <Nav.Link href="#About"><Link className='text-white text-decoration-none' to='/about-us'>About US</Link></Nav.Link>
                        <Nav.Link href="#Contact"><Link className='text-white text-decoration-none' to='/contact-us'>Contact US</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar> */}
        </>
    );
};

export default Header;