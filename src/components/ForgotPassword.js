import React, { useRef, useState } from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import {Link } from 'react-router-dom'

const ForgotPassword = () => {

    const emailRef = useRef(null)
    const { resetPassword } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
 
    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            setMessage('');
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instruction');
        } catch{
            setError('Failed reset email')
        }

        setLoading(false);
    }

  return (
    <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Password Reset</h2>
                {error && <Alert variant ="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                <Form  onSubmit={handleSubmit}>
                    <Form.Group id="email" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>

                    <Button disabled={loading}  type='submit' className='w-100'>Reset Password</Button>
                </Form>
                <div className='w-100 text-center mt-3'>
                    <Link to="/login">Login</Link>
                </div>
            </Card.Body>
        </Card>

        <div className="w-100 text-center mt-2">
           Need an account? <Link to="/signup">Sign up</Link>
        </div>

    </>
  )
}

export default ForgotPassword;