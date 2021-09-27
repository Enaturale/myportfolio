import React from 'react'
import "./works.scss"



export default function Works() {
    const data = [
        {
            id: "1",
            icon: "assets/marketing.jpg",
            title: "Marketing",
            desc: "5 Free and Top Digital Marketing Tools for Effective Sales and Fast, Rapid Business Growth.",
            img: "assets/growthhacking.jpeg",
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
    return (
        <div className="works" id="works">
            <div className="slider" >
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

            <img src="assets/arrowleft.png" className="arrow Left" alt="arrow left"/>
            <img src="assets/arrowleft.png" className="arrow Right" alt="arrow right"/>


            
        </div>
    );
}
