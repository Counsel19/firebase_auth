import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    setError('');

    try{
      await logout()
      navigate("/login")
    }catch{
      setError('Failed to Log out')
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}

          <div className="text-center">
            <strong>Email: </strong>
            {currentUser.email}
          </div>
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
};

export default Dashboard;