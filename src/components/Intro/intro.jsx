import React from 'react'
import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgcontainer">
                    <img src ="assets/image41.png" alt="Lady Bee" />                  
                </div>
            </div>

            <div className="right">
                <div className ="wrapper">
                <h2>Hi there, I am</h2>
                <h1>Arowosebi Bukola</h1>
                <h3>Software Developer | Digital Marketer | Programming Instructor<span></span></h3>
                </div>

                <a href="#portfolio">
                    <img src ="assets/downbutton.png" alt=""/>
                </a>
            </div>


                      
        </div>
    )
}
