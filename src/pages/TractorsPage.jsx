import { useState, useEffect, useContext } from "react";
import { getTractors } from "../api";
import Header from "../components/Header";

import "./Page.css"
import "./TractorsPage.css"
import { WhenLoggedIn, WhenNotLoggedIn } from "../LoginContext";

function Tractor({ tractor}) {
    return (
        <div className="tractor-card">
            <img src={tractor.image} />
            <div>
                <h2>{tractor.name}</h2>
                <p>{tractor.description}</p>
                <WhenLoggedIn>
                    <h3>${tractor.price}</h3>
                    <div><b>Recent review:</b></div> 
                    <p>{tractor.review}</p>
                </WhenLoggedIn>
                <WhenNotLoggedIn>
                    <i>Log in to see prices and reviews!</i>
                </WhenNotLoggedIn>
            </div>
        </div>
    )
}

export default function TractorsPage() {
    const [tractors, setTractors] = useState([])

    useEffect(() => {
        getTractors().then(setTractors)
    }, [])
    
    return (<>
        <Header />
        <div className="page-content">
            <h1>Tractors</h1>
            <p>Recent conversions that are up for sale!</p>
            { tractors.map((tractor) => <Tractor key={tractor.name} tractor={tractor} />)}
        </div>
    </>)
}