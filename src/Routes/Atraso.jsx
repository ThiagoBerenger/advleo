import React, { useRef } from 'react'
import AtrasoComponent from '../Components/AtrasoComponent/AtrasoComponent'

import ArrowUp from '../Components/ArrowUp/ArrowUp'

import { Helmet } from 'react-helmet'

const Atraso = () => {

    const topRef = useRef(null);

    const scrollToTop = () => {
        if (topRef.current) {
            topRef.current.scrollIntoView({
                top: 0,
                behavior: 'smoth',
            })
        }
    }
    
  return (
    <div>
        <Helmet>
            <link rel="canonical" href="https://www.advleo.com.br/atraso-de-voo"/>
            <title>
             Atraso de Voo: Indenizações e Soluções Legais
            </title>
            <meta
              name="description"
              content="Especialista em indenizações por atrasos de voo. Descubra seus direitos como passageiro e como buscar reparação financeira por transtornos causados por atrasos de voos."
            />
        </Helmet>
        <ArrowUp onClick={scrollToTop} />
        <AtrasoComponent />
    </div>
  )
}

export default Atraso