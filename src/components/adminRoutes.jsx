import { AuthContext } from "../contexts/AuthContext.jsx";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminRoutes()
{
    const { user, authLoading } = useContext(AuthContext);

    if (authLoading) return null;

    if (!user)
    {
        return <Navigate to="/login" replace />;
    }

    if (user.role !== "admin")
    {
        return <Navigate to="/" replace />;
    }

    return (
        <Outlet />
    );
}