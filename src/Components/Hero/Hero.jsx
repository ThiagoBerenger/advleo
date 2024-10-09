import React from 'react';
import './Hero.modules.css';
import video from '../../assets/videos/airplane.mp4';
import { IoLogoWhatsapp } from "react-icons/io";
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
        <p>Extravio de bagagem - Atraso de Voo - Voo Cancelado - Overbooking</p>
        <a className='whatsapp-btn' href='https://wa.me/message/3P6PG2A2X6SSO1' target='blank'><IoLogoWhatsapp />Contato</a>
      </div>
      <div className="video-container">
        <video src={video} autoPlay loop muted></video>
      </div>
    </div>
  );
}

export default Hero;
