import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const PrivateRoute = ({children, ...restProps}) => {
    const { currentUser } = useAuth();
  return (
     currentUser ? <Outlet {...restProps}> {children} </Outlet> : <Navigate to="/login" />
  )
}

export default PrivateRoute