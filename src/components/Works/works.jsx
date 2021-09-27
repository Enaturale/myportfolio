import React from 'react'
import "./works.scss"

export default function Works() {
    return (
        <div className="works" id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src ="assets/moicon.png" alt=""/>
                                </div>
                                <h2>Title</h2>
                                <p>What the fck is this supposed to be?</p>
                                <span>Projects </span>
                            </div> 
                        </div>

                        <div className="right">
                            <img src="assets/voicetech.png" alt="Voice tech work"  />
                        </div>
                    </div>
                </div>
            </div>

            <img src="assets/arrowleft.png" className="arrow Left" alt="arrow left"/>
            <img src="assets/arrowleft.png" className="arrow Right" alt="arrow right"/>


            
        </div>
    );
}
