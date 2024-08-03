import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function IsNotAuthenticated() {
    const { isAutenticated } = useAuthContext();

    return (
        isAutenticated
            ? <Navigate to='/' />
            : <Outlet />
    )
}