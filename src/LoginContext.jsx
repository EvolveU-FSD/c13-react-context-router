import { createContext, useContext, useState } from "react";

const LoginContext = createContext()

export function WithLogin({ children }) {
    const [user, setUser] = useState()
    return (
        <LoginContext.Provider value={ {user, setUser} } >
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
