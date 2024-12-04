import { createContext, useContext, useState } from "react";
import { login as apiLogin } from './api'

const LoginContext = createContext()

export function WithLogin({ children }) {
    const [user, setUser] = useState()

    function login(username, password) {
        return apiLogin(username, password).then(setUser)
    }

    function logout() {
        setUser(null)
    }
    
    return (
        <LoginContext.Provider value={ {user, login, logout} } >
            { children }
        </LoginContext.Provider>    
    )
}

export function WhenLoggedIn({children}) {
    const {user} = useContext(LoginContext)
    return user && <>{ children }</>
}


export function WhenNotLoggedIn({children}) {
    const {user} = useContext(LoginContext)
    return !user && <>{ children }</>
}

export default LoginContext
