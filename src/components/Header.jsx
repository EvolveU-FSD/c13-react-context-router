import TractorIcon from "./Tractor"

import "./Header.css"
import LoginBar from "./LoginBar"

export default function Header({ setPage, user, setUser}) {
    return (
        <header>
            <div className="header-icon"><TractorIcon size={40}/>Tractorify</div>
            <nav className="header-nav">
                <button onClick={() => setPage("Home")}>Home</button>
                <button onClick={() => setPage("Tractors")}>Tractors</button>
                {user && <button onClick={() => setPage("MyProject")}>My Project</button>}
            </nav>
            <LoginBar user={user} setPage={setPage} setUser={setUser}/>
        </header>
    )
}