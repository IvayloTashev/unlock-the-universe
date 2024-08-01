import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
    userId: '',
    email: '',
    accessToken: '',
    isAutenticated: false,
    changeAuthState: (authState = {}) => null,
    localLogout: () => {}
})

export function AuthContextProvider(props) {
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        localStorage.setItem('accessToken', state.accessToken);

        setAuthState(state);
    }

    const localLogout = () => {
        setAuthState({});
        localStorage.clear();
    }

    const contexData = {
        userId: authState._id,
        email: authState.email,
        accessToken: authState.accessToken,
        isAutenticated: !!authState.email,
        changeAuthState,
        localLogout
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