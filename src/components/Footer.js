import React from "react"
import small_logo from "../images/Logo .svg"

const Footer = () => {
    return(
        <footer className="">
            <section>
            <div className="company-info">
                <img src={small_logo} alt=""/>
                
            </div>
            <div>
                <h3>Doormat Navigation</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
            </ul>
            </div>
            <div>
                <h3>Contact</h3>
            <ul>
            <li>Address</li>
                <li>Phone</li>
                <li>Email</li>
            </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
            <ul>
                <li><a href="/">Facebook</a></li>
                <li><a href="/">Instagram</a></li>
                <li><a href="/">Twitter</a></li>
            </ul>
            </div>
            </section>
        </footer>
    )
}

export default Footer;