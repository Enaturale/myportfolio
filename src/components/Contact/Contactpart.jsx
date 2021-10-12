import React from 'react';
import "./contact.scss";
import {Mail, Call, GitHub} from "@material-ui/icons"

export default function Contact() {
   
    return (
        <div className="contact" id="contact"> 

        <div className="mailcenter">
            <Mail className ="mail" />
            <h2>bukolaarowosebi@gmail.com</h2>
        </div>

        <div className="callcenter">
            <Call className ="call" />
            <h2>+2349024427137</h2>
        </div>

        <div className="gitcenter">           
           <GitHub  className ="github" />  
           <h2><a href="https://github.com/Enaturale">https://github.com/Enaturale</a></h2>         
            
        </div>

        </div>
    );
}
