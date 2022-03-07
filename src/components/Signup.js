import React, { useRef, useState } from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const passwordConfirmRef = useRef(null)
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
 
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(emailRef.current.value);
        
        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }

        try{
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            navigate('/')
        } catch{
            setError('Failed to create account')
        }

        setLoading(false);
    }

  return (
    <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Sign Up</h2>
                {error && <Alert variant ="danger">{error}</Alert>}

                <Form  onSubmit={handleSubmit}>
                    <Form.Group id="email" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>

                    <Form.Group id="password" className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>

                    <Form.Group id="password-confirm" className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required />
                    </Form.Group>

                    <Button disabled={loading}  type='submit' className='w-100'>Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>

        <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/login" >Log In</Link>
        </div>

    </>
  )
}

export default Signup