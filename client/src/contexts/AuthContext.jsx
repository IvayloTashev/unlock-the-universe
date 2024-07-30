import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
    userId: '',
    email: '',
    accessToken: '',
    isAutenticated: false,
    changeAuthState: (authState = {}) => null,
})

export function AuthContextProvider(props) {
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        localStorage.setItem('accessToken', state.accessToken);

        setAuthState(state);
    }

    const contexData = {
        userId: authState._id,
        email: authState.email,
        accessToken: authState.accessToken,
        isAutenticated: !!authState.email,
        changeAuthState
    }

    return (
        <AuthContext.Provider value={contexData}>
            {props.children}
        </AuthContext.Provider>
    )
}

export function useAuthContext() {
    const authData = useContext(AuthContext);

    return authData
}