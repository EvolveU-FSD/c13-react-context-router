import bugTractor from './assets/bug-tractor.jpg'
import fordTractor from './assets/old-ford-combine.jpg'
import priusBackhoe from './assets/prius-backhoe.jpg'
import vanCombine from './assets/van-combine.jpg'

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

export async function login(username, password) {
    return {
        name: username
    }
}

export async function getTractors() {
    return tractors
}