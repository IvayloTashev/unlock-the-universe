import { login, register } from "../api/auth-api";
import { useAuthContext } from "../contexts/AuthContext"


export const useLogin = () => {
    const { changeAuthState} = useAuthContext();

    const loginHandler = async (email, password) => {
        const userData = await login(email, password);
        changeAuthState(userData);

        return userData;
    }

    return loginHandler
}

export const useRegister = () => {
    const { changeAuthState} = useAuthContext();

    const registerHandler = async (email, password) => {
        const userData = await register(email, password);
        changeAuthState(userData);

        return userData;
    }

    return registerHandler
}