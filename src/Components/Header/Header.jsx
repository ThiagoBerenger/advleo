import React, { useState } from 'react'
import './Header.modules.css'

import Logo from '../../assets/images/logo.png'

import { FaInstagram } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdNoLuggage } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { MdAirplanemodeInactive } from "react-icons/md";
import { FaRegCalendarTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }


  return (
    <div className='header-container'>
        <div className="logo-container">
            <img src={Logo} alt="logomarca Leonardo Borges" />
            <h2>Dr. Leonardo Borges</h2>
        </div>

        <div className="header-menu">
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>


        {/* Menu items */}
        <nav className={`menu ${isOpen ? 'menu-open' : ''}`}>
          <ul>
            <li><a href="#home"><FaHome/> Home</a></li>

            <li><a href="#about"><MdNoLuggage/> Extravio de Bagagem</a></li>

            <li><a href="#services"><FaRegClock/> Atraso de Voo</a></li>

            <li><a href="#services"><FaRegCalendarTimes/> Cancelamento de Voo</a></li>

            <li><a href="#services"><MdAirplanemodeInactive/> Overbooking</a></li>

            <li><a href="#contact"><MdEmail/> Contato</a></li>

            <li><a href="https://www.instagram.com/adv.leonardoborges/profilecard/?igsh=NnRwaGcxeGkxOWRr" target='blank'> <FaInstagram /></a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header