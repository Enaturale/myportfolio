import React from 'react'
import "./portfolio.scss"

export default function Portfolio() {
    const list=[
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web Apps",
        },
        {
            id: "mobile",
            title: "Mobile Apps",
        }
    ]
    return (
        <div className="portfolio" id="portfolio">
            <h1>My Portfolio</h1>
            <ul>
                {/* <li className="active">Featured </li>
                <li>Web Apps </li>
                <li>Mobile Apps</li> */}
            </ul>

            <div className="container">
                <div className="item">
                    <img src="assets/ecommerce.png" alt="E-commerce app"/>
                    <h3>E-Commerce App</h3>

                </div>
                <div className="item">
                    <img src="assets/ecommerce.png" alt="E-commerce app"/>
                    <h3>E-Commerce App</h3>

                </div>
                <div className="item">
                    <img src="assets/ecommerce.png" alt="E-commerce app"/>
                    <h3>E-Commerce App</h3>

                </div>
                <div className="item">
                    <img src="assets/ecommerce.png" alt="E-commerce app"/>
                    <h3>E-Commerce App</h3>

                </div>
            </div>
            
        </div>
    )
}
