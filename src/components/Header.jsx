import TractorIcon from "./Tractor"

import "./Header.css"
import LoginBar from "./LoginBar"
import { WhenLoggedIn } from "../LoginContext"

export default function Header({ setPage }) {

    return (
        <header>
            <div className="header-icon"><TractorIcon size={40}/>Tractorify</div>
            <nav className="header-nav">
                <button onClick={() => setPage("Home")}>Home</button>
                <button onClick={() => setPage("Tractors")}>Tractors</button>
                <WhenLoggedIn>
                    <button onClick={() => setPage("MyProject")}>My Project</button>
                </WhenLoggedIn>
            </nav>
            <LoginBar setPage={setPage}/>
        </header>
    )
}