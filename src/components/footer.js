import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { SocialIcon } from "react-social-icons";

const Footer=()=>{
    return(
        <div className="footer">
            <div className="footer-socials">
                <div className="social">
                    <SocialIcon url="https://instagram.com" className="social-icon"
                    bgColor="white" style={{ height: 30, width: 30 }}
                    url="https://www.instagram.com/around_bisceglie/"/>
                    <SocialIcon url="https://facebook.com" className="social-icon"
                    bgColor="white" style={{ height: 30, width: 30 }}/>
                    <SocialIcon url="https://mail.google.com/.com" className="social-icon"
                    bgColor="white" style={{ height: 30, width: 30 }} network="email"/>
                </div>
            </div>
            <h4>aroundbisceglie@gmail.com</h4>
            <h4>&copy; AlexWay Copyright 2021</h4>
            
            
            
        </div>
    )
}

export default Footer;