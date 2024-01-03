import "./FooterStyles.css"
import React from "react"
import GithubIcon from "../assets/portfolio-gitHub.png"
import LinkIcon from "../assets/portfolio-linkedIn.png"
import EmailIcon from "../assets/portfolio-email.png"


const Footer = () => {
    return (
        <div className="footer-wrap">
            <div className="footer">
                <h1>Contacts</h1>
                <div className="wrap">
                    <img className="email email-img "src={EmailIcon} width={50}></img>
                    <img className="github github-img"src={GithubIcon} width={50}></img>
                    <img className="link link-img"src={LinkIcon}></img>
                    
                </div>
                <div className="sm-wrap">
                    <p className="sm">email</p>
                    <p className="sm">github</p>
                    <p className="sm">linkedIn</p>
                </div>
                
            </div>
        </div>
    )
}

export default Footer