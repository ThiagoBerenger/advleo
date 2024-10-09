import React from 'react';
import { Helmet } from 'react-helmet'; // Importa o Helmet
import './Customer.modules.css';

const Customer = () => {
  return (
    <div className='customer-container'>
      <Helmet>
        <title>Advogado do Consumidor - Dr. Leonardo Borges</title>
        <meta name="description" content="Extravio de Bagagem, Atraso de Voo, Voo Cancelado, Overbooking. Conte conosco para resolver o seu problema!" />
      </Helmet>

      <h2>Primeiro atendimento <span className="mark">100% grátis.</span></h2>

      <div className="customer-boxes_container">
        <div className="customer-box">
          <h3><span className='mark'>01</span> Atendimento</h3>
          <p>Em nosso primeiro contato gratuito, iremos analisar o seu caso e estudar as soluções cabíveis.</p>
        </div>

        <div className="customer-box">
          <h3><span className='mark'>02</span> Aprovação da Proposta</h3>
          <p>Nosso segundo passo será elaborar uma proposta personalizada e singular para a realização do seu objetivo, seguido da assinatura do contrato.</p>
        </div>

        <div className="customer-box">
          <h3><span className='mark'>03</span> Documentação</h3>
          <p>Na terceira etapa iremos solicitar alguns documentos para analisar o seu caso e verificar os transtornos causados.</p>
        </div>

        <div className="customer-box">
          <h3><span className='mark'>04</span> Andamento do Processo</h3>
          <p>Com a assinatura do contrato e documentação completa, iremos entrar com ação judicial o mais rápido possível.</p>
        </div>
      </div>
    </div>
  );
};

export default Customer;
