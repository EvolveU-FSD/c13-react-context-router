import { useState } from 'react'
import { login } from '../api'

import TractorIcon from '../components/Tractor'
import './LoginPage.css'

export default function LoginPage({setUser, setPage}) {

    const [loginError, setLoginError] = useState('')

    function tryLogin() {
        setLoginError('')
        const username = document.getElementById('username').value
        const password = document.getElementById('username').value
        login(username, password)
            .then(setUser)
            .then(() => {
                setPage("Home")
            })
            .catch((err) => {
                setLoginError(err.message)
            })
    }

    return (
        <div className="login-form">
            <TractorIcon size={128} />
            <h1>Tractorify</h1>
            <label>User Name</label>
            <input id="username" />
            <label>Password</label>
            <input id="password" type="password" />
            <div>{loginError}</div>
            <button onClick={tryLogin}>Login</button>
            <button className="button-secondary" onClick={() => setPage("Home")}>Cancel</button>
        </div>
    )
}