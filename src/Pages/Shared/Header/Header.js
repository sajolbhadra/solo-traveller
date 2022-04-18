import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className='d-flex justify-content-around'>
                    <Navbar.Brand as={Link} to="/">Solo Traveler</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/destinations">Destinations</Nav.Link>
                            <Nav.Link as={Link} to="/checkout">CheckOut</Nav.Link>
                            <Nav.Link as={Link} to="/Blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/about-us">About US</Nav.Link>
                            <Nav.Link as={Link} to="/contact-us">Contact US</Nav.Link>
                        </Nav>
                        {
                            user && <img src={user.photoURL} alt="user" className='rounded-circle ' ></img>

                        }
                        <Nav>
                            <span className='text-white d-flex align-items-center px-3'>{user.displayName && user.displayName}</span>
                            {
                                user?.uid
                                    ?
                                    <Button onClick={logOut}>Sign out</Button>
                                    :
                                    <Nav.Link as={Link} to="/login">Sign In</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;