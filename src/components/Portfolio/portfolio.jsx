import React from 'react'
import "./portfolio.scss"

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>My Portfolio</h1>
            <ul>
                <li className="active">Featured </li>
                <li>Web Apps </li>
                <li>Mobile Apps</li>
            </ul>

            <div className="container">
                <div className="item">
                    <img src="" alt="E-commerce app"/>
                    <h3>E-Commerce App</h3>

                </div>
            </div>
            
        </div>
    )
}
