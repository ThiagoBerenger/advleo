import React from 'react'
import './CancelamentoComponent.modules.css'

import CallToAction from '../CallToAction/CallToAction';

// SEO
import { Helmet } from 'react-helmet';


// importando icones
import { FaCheck, FaFileContract, FaRegHandshake } from 'react-icons/fa';
import { AiOutlineDollarCircle } from 'react-icons/ai';

// images
import cancelamento from '../../assets/images/cancelamento.jpg'



const CancelamentoComponent = () => {
    return (
        <div className='cancelamento-container'>
          <Helmet>
            <title>
            Cancelamento de Voo: Direitos e Indenizações para Passageiros
            </title>
            <meta
              name="description"
              content="Saiba o que fazer em caso de cancelamento de voo. Conheça seus direitos e como buscar indenização por transtornos. Consultoria jurídica especializada em cancelamentos de voos."
            />
          </Helmet>
    
          <div className="cancelamento-title_container">
              <div className="cancelamento-title">
                  <h1>Cancelamento de Voo</h1>
                  <h2>Seus direitos garantidos com assistência jurídica especializada</h2>
              </div>
              <img src={cancelamento} alt="cancelamento de Voo" loading='lazy'/>
          </div>
    
          <div className="cancelamento-content_container">
                <p>Ter um <span className="mark_2">voo cancelado</span> pode trazer grande frustração, principalmente se você tiver compromissos urgentes. O cancelamento de voos ocorre por diversos motivos, mas o passageiro tem direitos claros, independentemente da causa do cancelamento.</p>
          </div>
    
          <div className="cancelamento-question_container">
                    <h3>Quais são os direitos do passageiro em caso de atraso de voo?</h3>
    
                    <ul>
                        <li><FaCheck/> <span className="mark">Reacomodação:</span> Você tem direito a ser realocado em outro voo, sem custo adicional.</li>
                        <li><FaCheck/><span className="mark">Reembolso integral:</span> Se o cancelamento não for aceito, você pode exigir o reembolso total da passagem.</li>
                        <li><FaCheck/> <span className="mark">Assistência material:</span> Durante a espera pela reacomodação, a companhia aérea deve fornecer alimentação, transporte e, se necessário, hospedagem.</li>
                    </ul>
        </div>
    
          <div className="cancelamento-help">
              <div className="cancelamento-help_title">
                  <h2>Como o advogado pode ajudar?</h2>
                  <h3>Muitas companhias aéreas oferecem resistência em indenizar corretamente o passageiro. Como advogado especializado em direitos dos passageiros aéreos, posso ajudar a:</h3>
              </div>
    
              <div className="cancelamento-box_container">
                <div className="cancelamento-box">
                    <FaRegHandshake />
                    <p><span className="mark">Intermediar a negociação</span> com a companhia aérea para garantir seus direitos.</p>
                </div>
    
                <div className="cancelamento-box">
                    <FaFileContract />
                    <p><span className="mark">Propor uma ação judicial</span> para buscar compensação pelos danos causados.</p>
                </div>
    
                <div className="cancelamento-box">
                    <AiOutlineDollarCircle />
                    <p>Orientá-lo durante todo o processo, desde a <span className="mark">coleta de documentos</span> até a decisão final.</p>
                </div>
              </div>
    
              <h4>Se você passou por transtornos devido a um cancelamento de voo, entre em contato para uma consulta jurídica e reivindique seus direitos.</h4>
          </div>
          <CallToAction/>
        </div>
      );
    };

export default CancelamentoComponent