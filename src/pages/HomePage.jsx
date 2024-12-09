import Header from "../components/Header";

import "./Page.css"
export default function HomePage() {
    return (<>
        <Header />
        <div className="page-content">
            <h1>Home</h1>
            <p>Introducing <b>Tractorify</b> – the innovative service that transforms your used vehicles into fully functional farm equipment! Whether you have an old truck, SUV, or sedan, we can give it a new life by converting it into a powerful tractor, plow, or other essential farm machinery.</p>
            <p>At <b>Tractorify</b>, we understand the needs of modern farmers. Our skilled engineers and technicians work tirelessly to repurpose your unused vehicles, turning them into durable, cost-effective solutions for your farming operations. Save money on buying new equipment and reduce waste by recycling your vehicles into practical tools for the farm.</p>
            <p>From hauling crops to tilling fields, we ensure your converted farm equipment is reliable and ready to handle the toughest tasks. Trust <b>Tractorify</b> to help you work smarter, not harder, by giving your old vehicle a second chance at success on the farm.</p>
        </div>
    </>)
}