import React from 'react';

import CallToAction from '../../Components/CallToAction/CallToAction'

import { FaCheck } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { MdGavel } from "react-icons/md";

import bagagem from '../../assets/images/bagagem.jpg'

import './ExtravioComponent.modules.css';

const ExtravioComponent = () => {
  return (
    <div className='extravio-container'>
      <div className="extravio-title_container">
          <div className="extravio-title">
              <h1>Extravio de Bagagem</h1>
              <h2>Seus direitos garantidos com assistência jurídica especializada</h2>
          </div>
          <img src={bagagem} alt="Extravio de Bagagem" loading='lazy'/>
      </div>

      <div className="extravio-content_container">
            <p>O <span className="mark_2">extravio de bagagem</span> é um problema frequente enfrentado por muitos passageiros aéreos. Além do transtorno causado, o passageiro tem direito a indenização, mas muitas vezes é necessário recorrer à Justiça para garantir a compensação adequada.</p>
      </div>

      <div className="extravio-question_container">
                <h3>Quais são os direitos do passageiro em caso de extravio de bagagem?</h3>

                <ul>
                    <li><FaCheck/> O passageiro tem direito a <span className="mark">assistência material imediata</span>, como alimentação, hospedagem e transporte, dependendo do tempo de espera pela solução do problema.</li>
                    <li><FaCheck/> Caso a bagagem não seja encontrada, o passageiro tem direito a uma <span className="mark">indenização </span>proporcional ao valor de seus pertences.</li>
                    <li><FaCheck/> Para voos internacionais, aplica-se a <span className="mark">Convenção de Montreal</span>, que estabelece limites de compensação, mas isso pode ser discutido judicialmente.</li>
                </ul>
    </div>

      <div className="extravio-help">
          <div className="extravio-help_title">
              <h2>Como o advogado pode ajudar?</h2>
              <h3>Muitas companhias aéreas oferecem resistência em indenizar corretamente o passageiro. Como advogado especializado em *direitos dos passageiros aéreos*, posso ajudar a:</h3>
          </div>

          <div className="extravio-box_container">
            <div className="extravio-box">
                <FaRegHandshake />
                <p>Negociar diretamente com a <span className="mark">companhia aérea</span> para garantir uma compensação justa.</p>
            </div>

            <div className="extravio-box">
            <GoLaw />
                <p>Entrar com uma <span className="mark">ação judicial</span>, se necessário, para assegurar seus direitos.</p>
            </div>

            <div className="extravio-box">
            <MdGavel />
                <p>Acompanhar todo o processo legal, desde a <span className="mark">coleta de provas</span> até a decisão judicial.</p>
            </div>
          </div>

          <h4>Se você foi vítima de extravio de bagagem, entre em contato para uma avaliação detalhada do seu caso e a busca pelos seus direitos.</h4>
      </div>
      <CallToAction/>
    </div>
  );
};

export default ExtravioComponent;