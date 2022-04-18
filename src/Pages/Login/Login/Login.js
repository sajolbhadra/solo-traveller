import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../../firebase.init';

const auth = getAuth(app)

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    const location = useLocation();
    const navigate = useNavigate();
    if (user) {
        navigate('/home')
    }
    const from = location?.state?.from?.pathname || '/';
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }


    const [
        signInWithEmailAndPassword,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    // const { emailRef, passwordRef } = useRef();
    const handleSignIn = (e) => {
        e.preventDefault();
        // const email = emailRef.current.value;
        // const password = passwordRef.current.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)
        console.log(email, password)
    }


    return (
        <div className='pb-5 my-5'>
            <h3 className='text-center'>Login</h3>
            <Form className='w-25  mx-auto mt-5 mb-5 pt-5' onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formGroupEmail">

                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">

                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <h5 className='text-center'>New User? Sign Up Now</h5>

            <div className='text-center mb-3'>
                <Link to='/register' className='text-decoration-none '>   Register </Link>
                <br />


                <Button variant="primary" onClick={handleGoogleSignIn} className='mt-3'>
                    Sign In With Google
                </Button>
                <div className='text-center'>
                    <p>Error: {error?.message}</p>
                </div>
            </div>
        </div>
    );
};

export default Login;