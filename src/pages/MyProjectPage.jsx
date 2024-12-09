import Header from "../components/Header";
import myTractor from '../assets/westfalia-combine.jpg'

import "./Page.css"
import "./MyProjectPage.css"
export default function MyProjectPage() {
    return (<>
        <Header />
        <div className="page-content project-card">
            <h1>Custom Order #7</h1>
            <img src={myTractor} />
            <table><tbody>
                <tr><th>Status</th><td>Awaiting Parts</td></tr>
                <tr><th>Expected Cost</th><td>$17000</td></tr>
                <tr><th>Activity Log</th><td>
                    <p>2024-12-01: Truck arrived at assembly facility</p>
                    <p>2024-11-25: Deposit processed</p>
                </td></tr>
            </tbody></table>
        </div>
    </>)
}