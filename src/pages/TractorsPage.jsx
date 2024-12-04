import Header from "../components/Header";

import "./Page.css"
import "./TractorsPage.css"

import bugTractor from '../assets/bug-tractor.jpg'
import fordTractor from '../assets/old-ford-combine.jpg'
import priusBackhoe from '../assets/prius-backhoe.jpg'
import vanCombine from '../assets/van-combine.jpg'

const tractors = [
    { 
        name: "Bug-o-matic", 
        image: bugTractor, 
        description: "1979 Volkswagon Bug converted into a high traction hauler.",
        price: 15000,
        review: "Great on gas, my kid took it to his high school grad and they all loved it too."
    },
    { 
        name: "Old Ford Made Good Again", 
        image: fordTractor, 
        description: "Recycled this from behind the barn into a compact combine.",
        price: 25000,
        review: "Starts by itself sometimes. Scares the horses. Otherwise very reliable."
    },
    { 
        name: "Prius Digger - the Scorpion", 
        image: priusBackhoe, 
        description: "The battery died in my old Prius, and I needed a digger... so we made this.",
        price: 8000,
        review: "Great turning radius. Being a prius I thought it would be better on gas. Tips over a lot. Still, very fun to drive through the ditches."
    },
    { 
        name: "Camper Van", 
        image: vanCombine, 
        description: "Our old combine was busted, but when we heard about tractorify we got this camper van on kijiji and decided to give it a try!",
        price: 20000,
        review: "Good for the flats, steering isn't too great in deep vegetation. Original horn still works.  Stylish."
    },
]

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

export default function TractorsPage({setPage, user}) {
    return (<>
        <Header setPage={setPage} user={user}/>
        <div className="page-content">
            <h1>Tractors</h1>
            <p>Recent conversions that are up for sale!</p>
            { tractors.map((tractor) => <Tractor key={tractor.name} user={user} tractor={tractor} />)}
        </div>
    </>)
}