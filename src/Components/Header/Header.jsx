import React from 'react'
import './Header.modules.css'

import Logo from '../../assets/images/logo.png'

import { FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <div className='header-container'>
        <div className="logo-container">
            <img src={Logo} alt="logomarca Leonardo Borges" />
        </div>

        {/* <div className="header-content">
            <ul>
                <li>Home</li>
                <li>Blog</li>
                <li>Contato</li>
            </ul>
        </div> */}

        <div className="social-container">
            <a href="https://www.instagram.com/adv.leonardoborges/profilecard/?igsh=NnRwaGcxeGkxOWRr" target='blank'>
                <FaInstagram />
            </a>
        </div>
    </div>
  )
}

export default Header