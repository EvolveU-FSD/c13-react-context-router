import { useContext, useState } from "react"
import LoginIcon from "./LoginIcon"

import './LoginBar.css'
import LoginContext, { WhenLoggedIn, WhenNotLoggedIn } from "../LoginContext"
export default function LoginBar({ setPage }) {

    const { user, setUser } = useContext(LoginContext)

    const [menuOpen, setMenuOpen] = useState(false)    

    function togglePopup() {
        setMenuOpen(!menuOpen)
    }

    function logout() {
        setUser(null)
    }

    return (
        <>
            { user && 
                <div onClick={togglePopup}>
                    Hello {user.name}!
                    { menuOpen && <div className="login-bar-popup">
                        <button onClick={logout}>Logout</button>
                    </div> }
                </div>
            }
            <WhenNotLoggedIn>
                <div className="login-prompt" onClick={() => setPage("Login")} >Login <LoginIcon /></div>
            </WhenNotLoggedIn>
        </>
    )
}