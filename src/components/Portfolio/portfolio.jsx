import React from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import "./portfolio.scss"
import { useState } from 'react'

export default function Portfolio() {
    const [selected, setSelected ] = useState("featured")
    const list=[
        {
            id: "articles",
            title: "Articles",
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
                {list.map(item=> (
                    <PortfolioList title ={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
                ))}
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
