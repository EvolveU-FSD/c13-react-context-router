import { useState } from "react"
import LoginIcon from "./LoginIcon"

import './LoginBar.css'
export default function LoginBar({ user, setPage }) {
    return (
        <>
            { user && <div>Hello {user.name}!</div> }
            { !user && <div className="login-prompt" onClick={() => setPage("Login")} >Login <LoginIcon /></div> }
        </>
    )
}