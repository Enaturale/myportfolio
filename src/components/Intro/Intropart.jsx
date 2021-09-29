
import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intropart() {

    const textRef = useRef();
    const textReference = useRef();


    useEffect(() => {
        console.log(textRef);
        init(textRef.current, 
            { showCursor: false,
                backDelay: 2000, 
            strings: ['Developer', 'Programming Instructor' ]
         })
    }, [])

    useEffect(() => {
        console.log(textRef);
        init(textReference.current, 
            { showCursor: false,
                backDelay: 2000, 
            strings: ['Content Developer', 'Digital Marketer' ]
         })
    }, [])
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
                <h3>Software <span ref={textRef}></span> </h3>
                <h3>Freelance <span ref={textReference}></span> </h3>

                {/* <h3><span>Programming</span> Instructor</h3> */}
                </div>

                <a href="#portfolio">
                    <img src ="assets/reddown.png" alt=""/>
                </a>
            </div>


                      
        </div>
    )
}
