import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.modules.css';

import Logo from '../../assets/images/logo.png';

import { MdNoLuggage } from "react-icons/md"
import { MdAirplanemodeInactive } from "react-icons/md";
import { FaRegCalendarTimes, FaPencilAlt, FaHome, FaInstagram, FaRegClock  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleMenuClick = () => {
        setIsOpen(false); // Fecha o menu ao clicar
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
                <Link to='/'><img src={Logo} alt="logomarca Leonardo Borges" width='120px' height={'auto'}/></Link>
                <Link to='/'>
                    <p>Dr. Leonardo Borges</p>
                </Link>
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
                        <li><Link to="/" onClick={handleMenuClick}><FaHome /> Home</Link></li>
                        <li><Link to="/extravio-de-bagagem" onClick={handleMenuClick}><MdNoLuggage /> Extravio de Bagagem</Link></li>
                        <li><Link to="/atraso-de-voo" onClick={handleMenuClick}><FaRegClock /> Atraso de Voo</Link></li>
                        <li><Link to="/cancelamento-de-voo" onClick={handleMenuClick}><FaRegCalendarTimes /> Cancelamento de Voo</Link></li>
                        <li><Link to="/overbooking" onClick={handleMenuClick}><MdAirplanemodeInactive /> Overbooking</Link></li>
                        <li><a href="https://advleo.com.br/noticias/" onClick={handleMenuClick}><FaPencilAlt /> Notícias</a></li>
                        <li><Link to="https://wa.me/message/3P6PG2A2X6SSO1" onClick={handleMenuClick} target='blank'><MdEmail /> Contato</Link></li>
                        
                        <li><a href="https://www.instagram.com/adv.leonardoborges/profilecard/?igsh=NnRwaGcxeGkxOWRr" target='blank' onClick={handleMenuClick}> <FaInstagram /></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
