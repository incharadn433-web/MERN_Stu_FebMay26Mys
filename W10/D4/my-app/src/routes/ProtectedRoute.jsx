import { Navigate } from "react-router-dom";

export function ProtectedRoute({isAuthenticated, children}){
    if(!isAuthenticated){
        // Redirect to home page if user is not authenticated
        return <Navigate to="/" />
    }
    return children;
}