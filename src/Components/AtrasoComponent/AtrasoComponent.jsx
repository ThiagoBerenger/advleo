import React from 'react'
import './AtrasoComponent.modules.css'

import CallToAction from '../CallToAction/CallToAction';

// SEO
import { Helmet } from 'react-helmet';

// icones
import { FaCheck } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import { FaRegHandshake } from "react-icons/fa";
import { AiOutlineDollarCircle } from 'react-icons/ai';


// images
import atraso from '../../assets/images/atraso.jpg'


const AtrasoComponent = () => {
    return (
        <div className='atraso-container'>
          <Helmet>
            <title>
             Atraso de Voo: Indenizações e Soluções Legais
            </title>
            <meta
              name="description"
              content="Especialista em indenizações por atrasos de voo. Descubra seus direitos como passageiro e como buscar reparação financeira por transtornos causados por atrasos de voos."
            />
          </Helmet>
    
          <div className="atraso-title_container">
              <div className="atraso-title">
                  <h1>Atraso de Voo</h1>
                  <h2>Seus direitos garantidos com assistência jurídica especializada</h2>
              </div>
              <img src={atraso} alt="Atraso de Voo" loading='lazy'/>
          </div>
    
          <div className="atraso-content_container">
                <p>A <span className="mark_2">pontualidade</span> é essencial no transporte aéreo, mas nem sempre as companhias aéreas conseguem cumprir os horários previstos. O <span className="mark_2">atraso de voo</span> pode causar diversos prejuízos aos passageiros, desde a perda de compromissos importantes até despesas inesperadas.</p>
          </div>
    
          <div className="atraso-question_container">
                    <h3>Quais são os direitos do passageiro em caso de atraso de voo?</h3>
    
                    <ul>
                        <li><FaCheck/> <span className="mark">Assistência material:</span> A partir de uma hora de atraso, você tem direito a comunicação (telefone/internet); após duas horas, alimentação; e, com quatro horas, hospedagem se necessário.</li>
                        <li><FaCheck/><span className="mark">Reembolso ou realocação:</span> Em atrasos superiores a quatro horas, você pode exigir o reembolso integral da passagem ou a reacomodação em outro voo.</li>
                        <li><FaCheck/> Em casos de atrasos que causem <span className="mark">prejuízos materiais</span> ou *morais* ao passageiro, é possível pedir <span className="mark">indenização</span> por danos.</li>
                    </ul>
        </div>
    
          <div className="atraso-help">
              <div className="atraso-help_title">
                  <h2>Como o advogado pode ajudar?</h2>
                  <h3>Muitas companhias aéreas oferecem resistência em indenizar corretamente o passageiro. Como advogado especializado em direitos dos passageiros aéreos, posso ajudar a:</h3>
              </div>
    
              <div className="atraso-box_container">
                <div className="atraso-box">
                    <FaInfoCircle />
                    <p><span className="mark">Orientá-lo sobre seus direitos</span> em casos de atrasos excessivos.</p>
                </div>
    
                <div className="atraso-box">
                    <FaRegHandshake />
                    <p><span className="mark">Negociar</span> diretamente com a companhia aérea por uma compensação.</p>
                </div>
    
                <div className="atraso-box">
                    <AiOutlineDollarCircle />
                    <p>Iniciar uma ação judicial para garantir <span className="mark">sua indenização</span> por danos materiais e morais.</p>
                </div>
              </div>
    
              <h4>Se você passou por transtornos devido a um atraso de voo, entre em contato para uma consulta jurídica e reivindique seus direitos.</h4>
          </div>
          <CallToAction/>
        </div>
      );
    };

export default AtrasoComponent