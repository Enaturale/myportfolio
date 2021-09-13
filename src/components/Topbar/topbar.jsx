import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className ="wrapper">
                <div className="left">
                    <a href="#intro"  className="logo">Bee.</a>
                    <div className="itemcontainer">
                        <Person  className="icon"/>
                        <span>+234 902 442 7137</span>
                    </div>
                    <div className="itemcontainer">
                        <Mail className="icon" />
                        <span>bukolaarowosebi@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    {/* <h2>Sign Out</h2> */}
                    <div className="righthand">
                        <span className="firstline"></span>
                        <span className="secondline"></span>
                        <span className="thirdline"></span>

                    </div>
                </div>
            </div>         
            
        </div>
    )
}
