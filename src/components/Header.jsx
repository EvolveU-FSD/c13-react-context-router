import TractorIcon from "./Tractor"

import "./Header.css"
import LoginBar from "./LoginBar"
import { WhenLoggedIn } from "../LoginContext"
import { Link } from "react-router"

export default function Header() {

    return (
        <header>
            <div className="header-icon"><TractorIcon size={40}/>Tractorify</div>
            <nav className="header-nav">
                <Link to="/">Home</Link>
                <Link to="/tractors">Tractors</Link>
                <WhenLoggedIn>
                    <Link to="/my-project">My Project</Link>
                </WhenLoggedIn>
            </nav>
            <LoginBar/>
        </header>
    )
}