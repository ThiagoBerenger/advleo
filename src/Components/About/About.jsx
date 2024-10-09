import React from 'react'
import './About.modules.css'

import foto from '../../assets/images/leo.png'


const About = () => {
  return (
    <div className='about-container'>
        <img src={foto} alt="Doutor Leonardo Borges" loading='lazy'/>
        <div className="about-content">
            <h2>Leonardo Borges - Advogado.</h2>
            <p>Se você enfrenta problemas com passagens aéreas, cancelamentos de voos, overbooking, atraso de voos ou qualquer outra situação que tenha prejudicado sua viagem, nós estamos aqui para ajudar. No escritório Leonardo Borges Advocacia, somos especializados em Direito do Consumidor e oferecemos assessoria jurídica completa para garantir que seus direitos como passageiro sejam respeitados. </p>

            <p>Com vasta experiência no setor, nosso objetivo é proporcionar soluções rápidas e eficazes para que você receba a indenização justa por eventuais transtornos. Seja qual for a sua situação, conte com um atendimento personalizado e uma defesa sólida dos seus interesses.</p>
        </div>
    </div>
  )
}

export default About