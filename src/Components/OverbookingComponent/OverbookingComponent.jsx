import React from 'react'
import './OverbookingComponent.modules.css'

import CallToAction from '../CallToAction/CallToAction';

// SEO
import { Helmet } from 'react-helmet';

// icones
import { FaCheck, FaFileContract, FaRegHandshake } from 'react-icons/fa';
import { AiOutlineDollarCircle } from 'react-icons/ai';

// images
import overbooking from '../../assets/images/overbooking.jpg'


const OverbookingComponent = () => {
    return (
        <div className='overbooking-container'>    
          <div className="overbooking-title_container">
              <div className="overbooking-title">
                  <h1>overbooking de Voo</h1>
                  <h2>Seus direitos garantidos com assistência jurídica especializada</h2>
              </div>
              <img src={overbooking} alt="Overbooking" loading='lazy'/>
          </div>
    
          <div className="overbooking-content_container">
                <p>O <span className="mark_2">overbooking</span> é uma prática comum das companhias aéreas, em que são vendidas mais passagens do que há lugares disponíveis. Isso pode deixar o passageiro sem assento no voo, mesmo que tenha uma reserva confirmada.</p>
          </div>
    
          <div className="overbooking-question_container">
                    <h3>Quais são os direitos do passageiro em caso de Overbooking?</h3>
    
                    <ul>
                        <li><FaCheck/> <span className="mark">Reacomodação:</span> Você tem direito a ser realocado em outro voo, sem custo adicional.</li>
                        <li><FaCheck/><span className="mark">Reembolso integral:</span>  O passageiro pode optar pelo reembolso total se não quiser esperar por outro voo.</li>
                        <li><FaCheck/> <span className="mark">Indenização por danos:</span> Em caso de overbooking, o passageiro tem direito a uma compensação financeira imediata, além de assistência material.</li>
                    </ul>
        </div>
    
          <div className="overbooking-help">
              <div className="overbooking-help_title">
                  <h2>Como o advogado pode ajudar?</h2>
                  <h3>Muitas companhias aéreas oferecem resistência em indenizar corretamente o passageiro. Como advogado especializado em direitos dos passageiros aéreos, posso ajudar a:</h3>
              </div>
    
              <div className="overbooking-box_container">
                <div className="overbooking-box">
                    <FaRegHandshake />
                    <p><span className="mark">Negociar diretamente</span> com a companhia aérea pela compensação.</p>
                </div>
    
                <div className="overbooking-box">
                    <FaFileContract />
                    <p><span className="mark">Propor uma ação judicial</span> para garantir uma indenização justa.</p>
                </div>
    
                <div className="overbooking-box">
                    <AiOutlineDollarCircle />
                    <p>Orientá-lo durante todo o processo, desde a <span className="mark">coleta de documentos</span> até a decisão final.</p>
                </div>
              </div>
    
              <h4>Se você passou por transtornos devido Overbooking, entre em contato para uma consulta jurídica e reivindique seus direitos.</h4>
          </div>
          <CallToAction/>
        </div>
      );
    };

export default OverbookingComponent