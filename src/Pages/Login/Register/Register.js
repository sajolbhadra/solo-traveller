import { getAuth } from 'firebase/auth';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import app from '../../../firebase.init';

const Register = () => {
    const auth = getAuth(app)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister = e => {
        e.preventDefault();
        // console.log(e.target.email.value)
        const email = e.target.email.value;
        const password = e.target.password.value;
        const retypePassword = e.target.retypePassword.value;
        createUserWithEmailAndPassword(email, password);
    }
    const navigate = useNavigate();

    //toggle
    // const navigateLogin = () => {
    //     navigate('/login') 
    // }
    if (user) {
        navigate('/home')
    }
    return (
        <div className='my-5 pb-5'>
            <h4 className='text-center'>Please Register</h4>
            <Form className='w-25  mx-auto mt-5 mb-5 pt-5' onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formGroupEmail">

                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">

                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control type="password" name="retypePassword" placeholder="Retype Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>

            <div className='text-center'>
                <h5 className='text-center'>Already Registered? Sign In Here</h5>
                <Link to='/login' className='text-decoration-none'>   Sign In </Link>
            </div>
            {/* <div className='text-center'>
                <p>Error: {error?.message}</p>
            </div> */}
        </div>
    );
};

export default Register;