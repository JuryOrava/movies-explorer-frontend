import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element  }) => {
    return (
      localStorage.getItem('token') ? element : <Navigate to="/" replace />
    )
}

export default ProtectedRoute;