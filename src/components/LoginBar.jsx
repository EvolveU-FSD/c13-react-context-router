import { useContext, useState } from "react"
import LoginIcon from "./LoginIcon"

import './LoginBar.css'
import LoginContext, { WhenNotLoggedIn } from "../LoginContext"
import { useNavigate } from "react-router"

export default function LoginBar() {

    const { user, logout } = useContext(LoginContext)
    const navigate = useNavigate()

    const [menuOpen, setMenuOpen] = useState(false)    

    function togglePopup() {
        setMenuOpen(!menuOpen)
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
                <div className="login-prompt" onClick={() => navigate('/login')} >Login <LoginIcon /></div>
            </WhenNotLoggedIn>
        </>
    )
}