import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container className='d-flex justify-content-around'>
                    <Navbar.Brand href="#home">BD Traveler</Navbar.Brand>
                    <Nav className="">
                        <Nav.Link href="#home"><Link className='text-white text-decoration-none' to='/home'>Home</Link></Nav.Link>
                        <Nav.Link href="#destinations"><Link className='text-white text-decoration-none' to='/destinations'>Destinations</Link></Nav.Link>
                        <Nav.Link href="#Blog"><Link className='text-white text-decoration-none' to='/blog'>Blog</Link></Nav.Link>
                        <Nav.Link href="#About"><Link className='text-white text-decoration-none' to='/about-us'>About US</Link></Nav.Link>
                        <Nav.Link href="#Contact"><Link className='text-white text-decoration-none' to='/contact-us'>Contact US</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>


        </>
    );
};

export default Header;