import React from 'react';
import { Helmet } from 'react-helmet';

import { FaCheck } from "react-icons/fa";

import bagagem from '../../assets/images/bagagem.jpg'

import './ExtravioComponent.modules.css';

const ExtravioComponent = () => {
  return (
    <div className='extravio-container'>
      <Helmet>
        <title>
          Extravio de Bagagem: Direitos do Passageiro e Assistência Jurídica Especializada
        </title>
        <meta
          name="description"
          content="Advogado especializado em extravio de bagagem. Saiba quais são seus direitos e como buscar indenização por bagagens perdidas ou danificadas. Consultoria jurídica completa para passageiros aéreos."
        />
      </Helmet>

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
      
    </div>
  );
};

export default ExtravioComponent;