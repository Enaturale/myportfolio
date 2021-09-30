import React, {useState} from "react"
import "./works.scss"



export default function Works() {
    const [currentSlide, setCurrentSlide] =  useState(0)
    const data = [
        {
            id: "1",
            icon: "assets/marketing.jpg",
            title: "Marketing",
            desc: "5 Free and Top Digital Marketing Tools for Effective Sales and Fast, Rapid Business Growth.",
            img: "assets/marketing.png",
        },
        {
            id: "2",
            icon: "assets/webapp.png",
            title: "Web Application",
            desc: "AN E-Commerce Website using Reacj js and Stripe for payment",
            img: "assets/ecommerce.png",
        },   
        {
            id: "3",
            icon: "assets/mobile.png",
            title: "Mobile Application",
            desc: "Food Delivery Application",
            img: "assets/chatapp.jpg",
        },
    ]

    const handleClick =(way)=>{
        way === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) 
        : setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0);
    }
    return (
        <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide *100}vw)`}}>
                {data.map(d => (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src ={d.icon} alt=""/>
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span>Projects </span>
                            </div>  
                        </div>

                        <div className="right">
                            <img src={d.img} alt="Voice tech work"  />
                        </div>
                    </div>
                    
                </div>
                ))}
            </div>

            <img src="assets/arrowleft.png" className="arrow Left" alt="arrow left" onClick={() => handleClick("left")}/>
            <img src="assets/arrowleft.png" className="arrow Right" alt="arrow right" onClick={() => handleClick()}/>


            
        </div>
    );
}
