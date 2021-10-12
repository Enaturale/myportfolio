import React from 'react';
import "./contact.scss";
import {Mail, Call, GitHub} from "@material-ui/icons"

export default function Contact() {
   
    return (
        <div className="contact" id="contact"> 

        <div>
            <Mail />
        </div>

        <div>
            <Call />
        </div>

        <div>
           
           <GitHub />
            
            
        </div>

        </div>
    );
}
