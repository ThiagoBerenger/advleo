import React from 'react';
import { Helmet } from 'react-helmet'; // Importa o Helmet
import './Demands.modules.css';
import { FaRegClock } from "react-icons/fa";
import { MdNoLuggage } from "react-icons/md";
import { FaRegCalendarTimes } from "react-icons/fa";
import { MdAirplanemodeInactive } from "react-icons/md";

const Demands = () => {
  return (
    <div className='demands-container'>
      <Helmet>
        <title>Demandas - Dr. Leonardo Borges</title>
        <meta name="description" content="Saiba mais sobre as demandas comuns no direito aéreo, incluindo atrasos de voo, extravio de bagagem, cancelamentos e overbooking." />
      </Helmet>

      <div className="demands-box">
        <h2><FaRegClock alt='Atraso de Voo'/> Atraso de voo</h2>
        <p>Os atrasos de voo ocorrem quando a decolagem ou pouso é postergado além do horário previsto, causando perda de conexões e compromissos importantes.</p>
      </div>
      <div className="demands-box">
        <h2><MdNoLuggage alt='Extravio de Bagagem'/> Extravio de Bagagem</h2>
        <p>O extravio de bagagem ocorre quando suas malas não chegam ao destino junto com você. A companhia aérea é responsável por localizar e devolver sua bagagem.</p>
      </div>
      <div className="demands-box">
        <h2><FaRegCalendarTimes alt='Voo Cancelado'/> Voo Cancelado</h2>
        <p>O cancelamento de voo ocorre quando uma companhia aérea decide não realizar a viagem programada, causando grandes transtornos aos passageiros.</p>
      </div>
      <div className="demands-box">
        <h2><MdAirplanemodeInactive alt='Overbooking'/> Overbooking</h2>
        <p>O overbooking acontece quando uma companhia aérea vende mais passagens do que a capacidade da aeronave, resultando em passageiros impedidos de embarcar.</p>
      </div>
    </div>
  );
};

export default Demands;
