import TractorIcon from '../components/Tractor'
import './LoginPage.css'

export default function LoginPage({setUser, setPage}) {

    function tryLogin() {
        console.log()
        setUser({
            name: document.getElementById("username").value
        })
        setPage("Home")
    }

    return (
        <div className="login-form">
            <TractorIcon size={128} />
            <h1>Tractorify</h1>
            <label>User Name</label>
            <input id="username" />
            <label>Password</label>
            <input id="password" type="password" />
            <button onClick={tryLogin}>Login</button>
            <button className="button-secondary" onClick={() => setPage("Home")}>Cancel</button>
        </div>
    )
}