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
                    <li><i className="fab fa-facebook-f" /></li>
                    <li><i className="fab fa-instagram"></i></li>
                    <li><i className="fab fa-twitter"></i></li>
                    <li><i className="fab fa-youtube"></i></li>
                </ul>
            </div>
            <div className='footer-bottom'>
                <span>Develop by LDH - 2021</span>
            </div>
        </footer>
    )
}
export default Footer;