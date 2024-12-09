import { useContext, useState } from 'react'

import TractorIcon from '../components/Tractor'
import './LoginPage.css'
import LoginContext from '../LoginContext'
import { useNavigate } from 'react-router'

export default function LoginPage() {

    const { login } = useContext(LoginContext)
    const navigate = useNavigate()

    const [loginError, setLoginError] = useState('')

    function tryLogin() {
        setLoginError('')
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        login(username, password)
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
            <button className="button-secondary" onClick={() => navigate('/')}>Cancel</button>
        </div>
    )
}