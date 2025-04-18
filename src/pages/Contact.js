import React from "react";
import './Contact.css';

function Contact(){
    return(
        <div id="contact" className="section-container">
            <div className="contact-title">
                <h1>Contact Me</h1>
            </div>
            <div className="contact-items">
                <ul>
                    <li>
                        <span><i className="bi bi-envelope-fill email"></i></span>
                        <a href="mailto:azrepakziab@mun.ca">Email</a>
                    </li>
                    <li>
                        <span><i className="bi bi-linkedin linkedin"></i></span>
                        <a href="https://linkedin.com/in/asal-zarepakziabari-100667200/" target="_blank" rel="noreferrer">LinkedIn</a>
                    </li>
                    <li>
                        <span><i className="bi bi-github github"></i></span>
                        <a href="https://github.com/asalzp" target="_blank" rel="noreferrer">Github</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;