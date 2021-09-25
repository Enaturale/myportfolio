import React from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import "./portfolio.scss"
import { useState, useEffect } from 'react'
import {articlesPortfolio, webPortfolio, mobilePortfolio} from "../../data"

export default function Portfolio() {
    const [selected, setSelected ] = useState("articles")
    const [data, setData ] = useState([])
   


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

    useEffect(() => {
        switch(selected){
            case "articles":
                setData(articlesPortfolio)
                break;
            
            case "web":
                setData(webPortfolio)
                break;

            case "mobile":
                setData(mobilePortfolio)
                break;

            default:
                setData(articlesPortfolio)
                break;
        }
        
    }, [selected])

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
                {data.map((d)=> (
                    <div className="item">
                    <img src={d.img} alt="E-commerce app"/>
                    <h3>{d.title}</h3>

                </div>   

                ))}
                            
                
            </div>
            
        </div>
    )
}
