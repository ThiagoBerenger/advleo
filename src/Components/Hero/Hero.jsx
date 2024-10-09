import React from 'react';
import './Hero.modules.css';

import { IoLogoWhatsapp } from "react-icons/io";

import aeroporto from '../../assets/images/aeroporto.jpg'

import { Helmet } from 'react-helmet'; // Importando o Helmet

const Hero = () => {
  return (
    <div className='hero-container'>
      <Helmet>
        <title>Problemas com a Companhia Aérea? - Dr. Leonardo Borges</title>
        <meta name="description" content="Entre em contato para resolver problemas com companhias aéreas, como atrasos, extravios e cancelamentos." />
      </Helmet>

      <div className="hero-title_container">
        <h1>Advogado do Consumidor</h1>
        <h2>Advogado Especialista em Extravio de Bagagem, Cancelamento e Atraso de Voos</h2>
        <a className='whatsapp-btn' href='https://wa.me/message/3P6PG2A2X6SSO1' target='blank'><IoLogoWhatsapp />Contato</a>
      </div>
      <div className="image-container">
        <img src={aeroporto} alt="Advogado especializado em extravio de bagagem, perda de bagagem, voo cancelado, atraso de voo, cancelamento de voo e overbooking." />
      </div>
    </div>
  );
}

export default Hero;
