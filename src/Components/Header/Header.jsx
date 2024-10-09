import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.modules.css';

import Logo from '../../assets/images/logo.png';

import { FaInstagram } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdNoLuggage } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { MdAirplanemodeInactive } from "react-icons/md";
import { FaRegCalendarTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            // Desativa o scroll
            document.body.style.overflow = 'hidden';
        } else {
            // Ativa o scroll
            document.body.style.overflow = 'auto';
        }
        // Limpeza do efeito ao desmontar o componente
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

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
                    <li><Link to="/"><FaHome /> Home</Link></li>
                        <li><Link to="/extravio-de-bagagem"><MdNoLuggage /> Extravio de Bagagem</Link></li>
                        <li><Link to="/atraso-de-voo"><FaRegClock /> Atraso de Voo</Link></li>
                        <li><Link to="/cancelamento-de-voo"><FaRegCalendarTimes /> Cancelamento de Voo</Link></li>
                        <li><Link to="/overbooking"><MdAirplanemodeInactive /> Overbooking</Link></li>
                        <li><Link to="/contato"><MdEmail /> Contato</Link></li>
                        
                        <li><a href="https://www.instagram.com/adv.leonardoborges/profilecard/?igsh=NnRwaGcxeGkxOWRr" target='blank'> <FaInstagram /></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
