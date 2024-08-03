import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function IsAuthenticated() {
   const { isAutenticated } = useAuthContext();

   return (
      isAutenticated
         ? <Outlet />
         : <Navigate to='/sign-up' />
   )
}