import { useState, useEffect } from "react";
import { getTractors } from "../api";
import Header from "../components/Header";

import "./Page.css"
import "./TractorsPage.css"

function Tractor({user, tractor}) {
    return (
        <div className="tractor-card">
            <img src={tractor.image} />
            <div>
                <h2>{tractor.name}</h2>
                <p>{tractor.description}</p>
                {user && <>
                    <h3>${tractor.price}</h3>
                    <div><b>Recent review:</b></div> 
                    <p>{tractor.review}</p>
                </>}
                {!user && <>
                    <i>Log in to see prices and reviews!</i>
                </>}
            </div>
        </div>
    )
}

export default function TractorsPage({setPage, user, setUser}) {
    const [tractors, setTractors] = useState([])

    useEffect(() => {
        getTractors().then(setTractors)
    }, [])
    
    return (<>
        <Header setPage={setPage} user={user} setUser={setUser}/>
        <div className="page-content">
            <h1>Tractors</h1>
            <p>Recent conversions that are up for sale!</p>
            { tractors.map((tractor) => <Tractor key={tractor.name} user={user} tractor={tractor} />)}
        </div>
    </>)
}