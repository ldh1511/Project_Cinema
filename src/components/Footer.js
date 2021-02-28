import React from 'react';
import logo from './../img/logo (2).png';
const Footer = () => {
    return (
        <footer>
            <div className='footer-top'>
                <div className='logo-box'>
                    <img src={logo} alt=""></img>
                </div>
                <ul className='footer-nav'>
                    <li><a href><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href><i className="fab fa-instagram"></i></a></li>
                    <li><a href><i className="fab fa-twitter"></i></a></li>
                    <li><a href><i className="fab fa-youtube"></i></a></li>
                </ul>
            </div>
            <div className='footer-bottom'>
                <span>Develop by LDH - 2021</span>
            </div>
        </footer>
    )
}
export default Footer;