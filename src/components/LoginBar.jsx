import { useState } from "react"
import LoginIcon from "./LoginIcon"

import './LoginBar.css'
export default function LoginBar({ user, setPage, setUser }) {
    const [menuOpen, setMenuOpen] = useState(false)    

    function togglePopup() {
        setMenuOpen(!menuOpen)
    }

    function logout() {
        setUser(null)
    }

    return (
        <>
            { user && <>
                <div onClick={togglePopup}>
                    Hello {user.name}!
                    { menuOpen && <div className="login-bar-popup">
                        <button onClick={logout}>Logout</button>
                    </div> }
                </div>
            </> }
            { !user && <div className="login-prompt" onClick={() => setPage("Login")} >Login <LoginIcon /></div> }
        </>
    )
}